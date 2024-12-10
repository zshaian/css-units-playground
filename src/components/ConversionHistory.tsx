import { Copy, MoveRight } from "lucide-react";
import { Button } from "./ui/button";

interface ConversionUnitsProps {
  from: number;
  fromUnit: string;
  to: number;
  toUnit: string;
  rootFontSize: string;
  baseFontSize: string;
}

interface ConversionItemProps {
  value: number;
  unit: string;
}

interface BaseFontSizeProps {
  baseFontSize: string;
  baseType: "Root" | "Base";
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
            <div className="flex items-center justify-center gap-x-8">
              <BaseFontSize baseFontSize={item.rootFontSize} baseType="Root" />
              <BaseFontSize baseFontSize={item.baseFontSize} baseType="Base" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const ConversionItem: React.FC<ConversionItemProps> = (props) => (
  <div className="py-1 px-2 flex items-center gap-x-2 border border-foreground rounded-md">
    <span className="font-bold uppercase">{props.value}</span>
    <span className="font-bold uppercase">{props.unit}</span>
    <Button variant="outline" className="px-3 py-1 shadow-none">
      <Copy size={12} />
    </Button>
  </div>
);

const BaseFontSize: React.FC<BaseFontSizeProps> = (props) => (
  <p className="px-2 py-1 text-sm text-background font-light bg-foreground rounded-md">
    {props.baseType} Font Size:{" "}
    <span className="font-semibold">{props.baseFontSize}</span>
  </p>
);

export default ConversionHistory;
