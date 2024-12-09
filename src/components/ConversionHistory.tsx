import { Copy, MoveRight } from "lucide-react";
import { Button } from "./ui/button";

interface ConversionUnitsProps {
  from: number;
  fromUnit: string;
  to: number;
  toUnit: string;
  rootFontSize: string;
}

interface ConversionItemProps {
  value: number;
  unit: string;
}

interface ConversionHistoryProps {
  conversionHistoryList: ConversionUnitsProps[];
}

const ConversionHistory: React.FC<ConversionHistoryProps> = (props) => {
  return (
    <div className="w-[100%] flex flex-col gap-y-3">
      <span className="w-max px-4 m-4 py-1 font-light border border-foreground rounded-lg uppercase">
        History
      </span>
      <section className="flex flex-col gap-y-2">
        {props.conversionHistoryList.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col gap-y-3 border-t border-t-foreground [&:first-child]:py-0 [&:first-child]:border-t-0"
          >
            <div className="flex items-center justify-between gap-x-3">
              <ConversionItem unit={item.fromUnit} value={item.from} />
              <MoveRight size={20} />
              <ConversionItem unit={item.toUnit} value={item.to} />
            </div>
            <p className="text-foreground font-light">
              Root Font Size:
              <span className="font-bold">{item.rootFontSize}</span>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

const ConversionItem: React.FC<ConversionItemProps> = (props) => {
  return (
    <div className="py-1 px-2 flex items-center gap-x-2 border border-foreground rounded-md">
      <span className="font-bold uppercase">{props.value}</span>
      <span className="font-bold uppercase">{props.unit}</span>
      <Button variant="outline" className="px-3 py-1 shadow-none">
        <Copy size={12} />
      </Button>
    </div>
  );
};

export default ConversionHistory;
