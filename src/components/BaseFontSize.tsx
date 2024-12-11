import FontSizeTip from "./FontSizeTip";

import { Input } from "./ui/input";

interface BaseFontSizeProps {
  name:string;
  tipDescription: string;
  componentLabel:string;
  baseFontSize: number | string;
  handleChangeBaseFontSize: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const BaseFontSize: React.FC<BaseFontSizeProps> = ({
  name,
  tipDescription,
  componentLabel,
  baseFontSize,
  handleChangeBaseFontSize,
}) => {
  return (
    <p className="flex items-center gap-x-2">
      <FontSizeTip tipDescripion={tipDescription} />
      <span className="text-nowrap">{componentLabel} Font Size</span>
      <Input    
        name={name}
        className="no-spinner w-[5.5ch]"
        type="number"
        value={(baseFontSize === 0) ? "" : baseFontSize}
        onChange={handleChangeBaseFontSize}
      />
      <span>Pixel</span>
    </p>
  );
};

export default BaseFontSize;
