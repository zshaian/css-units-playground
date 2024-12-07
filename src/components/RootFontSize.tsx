import { Info } from "lucide-react";
import { Input } from "./ui/input";

const RootFontSize: React.FC = () => {
  return (
    <p className="flex items-center gap-x-3">
      <Info size={16} />
      <span className="text-nowrap">Root Font Size</span>
      <Input
        className="w-[5.5ch] "
        type="number"
        defaultValue={16}
      />
      <span>Pixel</span>
    </p>
  );
};

export default RootFontSize;
