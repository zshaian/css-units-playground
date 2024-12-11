import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
        className="no-spinner w-[15rem] border-none"
      />
      <Button variant="ghost">
        <Copy size={30} />
      </Button>
    </div>
);

export default UnitInput;
