import { MoveRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import type { UnitState } from "@/types";
import CopyButton from "./CopyButton";

interface ConversionItemProps {
  value: number | string;
  unit: string;
}

interface BaseFontSizeProps {
  baseFontSize: number | string;
  baseType: "Root" | "Base";
}

interface ConversionHistoryProps {
  conversionHistoryList: UnitState[];
}

const ConversionHistory: React.FC<ConversionHistoryProps> = (props) => {
  return (
    <div className="w-[100%] lg:w-[351px] flex flex-col gap-y-3">
      <span className="w-max px-4 m-4 py-1 font-light border border-input rounded-lg uppercase">
        History
      </span>
      <section className="flex flex-col gap-y-2">
        {props.conversionHistoryList.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col gap-y-3 border-t border-t-input [&:first-child]:py-0 [&:first-child]:border-t-0"
          >
            <div className="flex items-center justify-between">
              <ConversionItem unit={item.fromUnit} value={item.fromUnitValue} />
              <MoveRight size={20} />
              <ConversionItem unit={item.toUnit} value={item.toUnitValue} />
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
  <div className="py-1 px-2 flex items-center gap-x-2 border border-input rounded-md">
    <ScrollArea className="max-w-[4ch] py-2">
      <span className="inline-block font-bold uppercase">{(props.value === "") ? 0 : props.value}</span>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    <span className="font-bold uppercase">{props.unit}</span>
    <CopyButton value={props.value.toString()} />
  </div>
);

const BaseFontSize: React.FC<BaseFontSizeProps> = (props) => (
  <p className="px-2 py-1 text-sm text-background font-light bg-foreground rounded-md">
    {props.baseType} Font Size:{" "}
    <span className="font-semibold">{(props.baseFontSize === "") ? 0 : props.baseFontSize}PX</span>
  </p>
);

export default ConversionHistory;
