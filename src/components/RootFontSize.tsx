import { Info } from "lucide-react";
import { Input } from "./ui/input";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { Button } from "./ui/button";

const RootFontSize: React.FC = () => {
  return (
    <p className="flex items-center gap-x-2">
      <RootFontSizeTip />
      <span className="text-nowrap">Root Font Size</span>
      <Input className="no-spinner w-[5.5ch]" type="number" defaultValue={16} />
      <span>Pixel</span>
    </p>
  );
};

const RootFontSizeTip: React.FC = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">
          <Info size={16} />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="px-4 py-2 bg-foreground text-background rounded-md">
        <p>
          Set the base font size (
          <span className="font-bold">default: 16px</span>). This value is used
          to calculate relative CSS units like REM and EM during conversions.
        </p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default RootFontSize;
