import ConversionInfo from "@/components/ConversionInfo";
import SaveToHistoryButton from "@/components/SaveToHistoryButton";
import UnitInput from "@/components/UnitInput";
import UnitSelect from "@/components/UnitSelect";
import BaseFontSize from "@/components/BaseFontSize";
import MainLayout from "./layout/MainLayout";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import type { UnitState, ValidUnits } from "./types";
import { convertUnits, roundownToTwoDecimals } from "./utils/convertUnits";
import { INITIAL_UNIT_STATE_VALUE } from "./constants/initialState";
import { getConvertionInfo } from "./utils/convertionInfo";
import ConversionHistoryLayout from "./layout/ConversionHistoryLayout";
import ConversionHistory from "./components/ConversionHistory";
import { useConversionHistory } from "./hooks/useConversionHistory";

function App() {
  const [unitState, setUnitState] = useState<UnitState>(INITIAL_UNIT_STATE_VALUE);
  const [conversionHistory,addNewHistoryConversion] = useConversionHistory();
  const validUnitList: ValidUnits[] = ["px", "rem", "em", "%"];

  const handleBaseFontSizeChange = (
    value: string,
    name: "baseFontSize" | "rootFontSize"
  ) => {
    const parsedNewBaseFontSize = parseFloat(value) || 0;
    setUnitState((previousState) => ({
      ...previousState,
      fromUnitValue: 0,
      toUnitValue: 0,
      [name]: parsedNewBaseFontSize,
    }));
  };

  const handleUnitValueChange = (
    newUnitValue: string,
    name: "fromUnitValue" | "toUnitValue"
  ) => {
    const parsedNewUnitValue = parseFloat(newUnitValue) || 0;
    const isFromUnitValue = name === "fromUnitValue";

    setUnitState((previousState) => {
      const convertedUnitValue = roundownToTwoDecimals(
        convertUnits({
         value: parsedNewUnitValue,
          baseFontSize: previousState.baseFontSize,
          rootFontSize: previousState.rootFontSize,
          fromUnit: isFromUnitValue
            ? previousState.fromUnit
            : previousState.toUnit,
          toUnit: isFromUnitValue
            ? previousState.toUnit
            : previousState.fromUnit,
        })
      ); 
      return {
        ...previousState,
        [name]: parsedNewUnitValue,
        [isFromUnitValue ? "toUnitValue" : "fromUnitValue"]: convertedUnitValue,
      };
    });
  };

  const handleUnitChange = (
    newUnitValue: ValidUnits,
    name: "fromUnit" | "toUnit"
  ) => {
    setUnitState((previousState) => ({
      ...previousState,
      toUnitValue: 0,
      fromUnitValue: 0,
      [name]: newUnitValue,
    }));
  };

  return (
    <>
      <MainLayout>
        <ConversionHistoryLayout>
          <ConversionHistory conversionHistoryList={conversionHistory} />
        </ConversionHistoryLayout>
        <section className="flex flex-col items-center justify-center flex-1 gap-y-8">
        <div className="flex gap-x-8 max-sm:flex-col max-sm:gap-y-8">
          <BaseFontSize
            name="root-font-size-input"
            tipDescription="Set the root font size (default: 16px). This value is used to calculate relative CSS units like REM and EM during conversions."
            componentLabel="Root"
            baseFontSize={unitState.rootFontSize}
            handleChangeBaseFontSize={(event) =>
              handleBaseFontSizeChange(event.target.value, "rootFontSize")
            }
          />
          <BaseFontSize
            name="base-font-size-input"
            tipDescription="Set the base font size (default: 16px). This value is used to calculate relative CSS units like REM and EM during conversions."
            componentLabel="Base"
            baseFontSize={unitState.baseFontSize}
            handleChangeBaseFontSize={(event) =>
              handleBaseFontSizeChange(event.target.value, "baseFontSize")
            }
          />
        </div>
        <div className="flex gap-x-2">
          <UnitInput
            name="from-unit-input"
            unitValue={unitState.fromUnitValue}
            handleUnitValueChange={(event) =>
              handleUnitValueChange(event.target.value, "fromUnitValue")
            }
          />
          <UnitSelect
            name="from-unit-select"
            selectedItem={unitState.fromUnit}
            selectItems={validUnitList.filter(
              (unit) => unit !== unitState.toUnit
            )}
            handleUnitChange={(value) => handleUnitChange(value, "fromUnit")}
          />
        </div>
        <ArrowUpDown size={20} />
        <div className="flex gap-x-2">
          <UnitInput
            name="to-unit-input"
            unitValue={unitState.toUnitValue}
            handleUnitValueChange={(event) =>
              handleUnitValueChange(event.target.value, "toUnitValue")
            }
          />
          <UnitSelect
            name="to-unit-select"
            selectedItem={unitState.toUnit}
            selectItems={validUnitList.filter(
              (unit) => unit !== unitState.fromUnit
            )}
            handleUnitChange={(value) => handleUnitChange(value, "toUnit")}
          />
        </div>
        <SaveToHistoryButton handleSaveToHistoryEvent={() => addNewHistoryConversion(unitState)} />
        <ConversionInfo {...getConvertionInfo({from:unitState.fromUnit,to:unitState.toUnit})} />
        </section>
      </MainLayout>
    </>
  );
}

export default App;
