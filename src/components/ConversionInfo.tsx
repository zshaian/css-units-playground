import type { ConvertionInfoValue } from "@/types";

const ConversionInfo: React.FC<ConvertionInfoValue> = (props) => {
  return (
    <div className="w-max p-4 flex flex-col items-center gap-y-3 border border-foreground rounded-md">
      <p className="flex items-center gap-x-3">
        Formula in converting
        <span className="px-2 py-1 bg-foreground text-background rounded-md uppercase">
          {props.fromUnit}
        </span>
        to
        <span className="px-2 py-1 bg-foreground text-background rounded-md uppercase">
          {props.toUnit}
        </span>
      </p>
      <p className="font-bold italic">{props.formula}</p>
      <p className="w-[100%] p-3 text-white text-center bg-[#151C23] rounded-md ">
        {props.calculation}
      </p>
    </div>
  );
};

export default ConversionInfo;
