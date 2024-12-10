import { useUnitStore } from "@/store/useUnitStore";
import FontSizeTip from "./FontSizeTip";

import { Input } from "./ui/input";

const BaseFontSize: React.FC = () => {
  const { baseFontSize, changeBaseFontSize } = useUnitStore();
  const parentFontSizeTipDescription =
    "Set the base font size (default: 16px). This value is used to calculate relative CSS units like REM and EM during conversions.";
  const handleChangeBaseFontSizeValue = (newBaseFontSize: number) =>
    changeBaseFontSize(newBaseFontSize || 0);

  return (
    <p className="flex items-center gap-x-2">
      <FontSizeTip tipDescripion={parentFontSizeTipDescription} />
      <span className="text-nowrap">Base Font Size</span>
      <Input
        className="no-spinner w-[5.5ch]"
        type="number"
        defaultValue={baseFontSize}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeBaseFontSizeValue(parseFloat(event.target.value))
        }
      />
      <span>Pixel</span>
    </p>
  );
};

export default BaseFontSize;
