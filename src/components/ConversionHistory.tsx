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
    <div className="flex flex-col gap-y-3">
      <span className="px-4 py-2 font-light border border-foreground uppercase">
        History
      </span>
      <section className="flex flex-col gap-y-4">
        {props.conversionHistoryList.map((item) => (
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between">
              <ConversionItem unit={item.fromUnit} value={item.from} />
              <MoveRight size={40} />
              <ConversionItem unit={item.toUnit} value={item.to} />
            </div>
            <p className="text-muted font-light">
              Root Font Size:{" "}
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
    <div className="px-4 py-2 flex gap-x-2 border border-foreground">
      <span className="font-bold uppercase">{props.value}</span>
      <span className="font-bold uppercase">{props.unit}</span>
      <Button variant="outline">
        <Copy size={30} />
      </Button>
    </div>
  );
};

export default ConversionHistory;
