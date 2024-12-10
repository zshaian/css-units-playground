import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

import { Button } from "./ui/button";

interface FontSizeTipProps {
  tipDescripion: string;
}

const FontSizeTip: React.FC<FontSizeTipProps> = (props) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">
          <Info size={16} />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="px-4 py-2 bg-foreground text-background rounded-md">
        <p>{props.tipDescripion}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default FontSizeTip;
