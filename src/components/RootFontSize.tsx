import { useUnitStore } from "@/store/useUnitStore";
import FontSizeTip from "./FontSizeTip";
import { Input } from "./ui/input";

const RootFontSize: React.FC = () => {
  const { rootFontSize, changeRootFontSize } = useUnitStore();
  const rootFontSizeTipDescription =
    "Set the root font size (default: 16px). This value is used to calculate relative CSS units like REM and EM during conversions.";
  const handleChangeRootFontSizeValue = (newRootFontSize: number) =>
    changeRootFontSize(newRootFontSize || 0);
  return (
    <p className="flex items-center gap-x-2">
      <FontSizeTip tipDescripion={rootFontSizeTipDescription} />
      <span className="text-nowrap">Root Font Size</span>
      <Input
        className="no-spinner w-[5.5ch]"
        type="number"
        defaultValue={rootFontSize}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeRootFontSizeValue(parseFloat(event.target.value))
        }
      />
      <span>Pixel</span>
    </p>
  );
};

export default RootFontSize;
