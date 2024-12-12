import { Input } from "./ui/input";
import CopyButton from "./CopyButton";

interface UnitInputProps {
  name:string;
  unitValue:string | number;  
  handleUnitValueChange:(event:React.ChangeEvent<HTMLInputElement>) => void;
}

const UnitInput:React.FC<UnitInputProps> = ({name,unitValue,handleUnitValueChange}) => (
    <div className="flex gap-x-1 border border-input rounded-md">
      <Input
        type="number"
        name={name}
        value={(unitValue === 0) ? "" : unitValue}
        onChange={handleUnitValueChange}
        className="no-spinner w-[15rem] border-none font-semibold text-2xl md:text-2xl"
      />
      <CopyButton value={unitValue.toString()} />
    </div>
);

export default UnitInput;
