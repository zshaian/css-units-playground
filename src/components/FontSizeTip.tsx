import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

interface FontSizeTipProps {
  tipDescripion: string;
}

const FontSizeTip: React.FC<FontSizeTipProps> = (props) => (
  <TooltipProvider delayDuration={200}>
    <Tooltip>
      <TooltipTrigger asChild>
          <Info size={16} className="cursor-help" />
      </TooltipTrigger>
      <TooltipContent className="px-4 py-2 bg-foreground text-background rounded-md">
        <p>{props.tipDescripion}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default FontSizeTip;
