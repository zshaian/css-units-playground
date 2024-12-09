import ConversionInfo from "@/components/ConversionInfo";
import RootFontSize from "@/components/RootFontSize";
import SaveToHistoryButton from "@/components/SaveToHistoryButton";
import UnitInput from "@/components/UnitInput";
import UnitSelect from "@/components/UnitSelect";
import { ArrowUpDown } from "lucide-react";
import ConversionHistoryLayout from "./ConversionHistoryLayout";

const conversionInfoDummyValue = {
  fromUnit: "px",
  toUnit: "rem",
  formula: "REM = PX / Root-Font-Size",
  calculation: "16px / 16px = 1rem",
};

const MainLayout: React.FC = () => {
  return (
    <>
      <main className="flex md:flex-row max-sm:flex-col max-sm:gap-y-8">
        <ConversionHistoryLayout />
        <section className="flex flex-col items-center justify-center flex-1 gap-y-8">
          <RootFontSize />
          <div className="flex gap-x-2">
            <UnitInput />
            <UnitSelect />
          </div>
          <ArrowUpDown size={20} />
          <div className="flex gap-x-2">
            <UnitInput />
            <UnitSelect />
          </div>
          <SaveToHistoryButton />
         <ConversionInfo {...conversionInfoDummyValue} />
        </section>
      </main>
    </>
  );
};

export default MainLayout;
