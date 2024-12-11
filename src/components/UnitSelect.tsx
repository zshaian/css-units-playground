import type { ValidUnits } from "@/types";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

interface UnitSelectProps {
  name:string;
  selectedItem: ValidUnits;
  selectItems: ValidUnits[];
  handleUnitChange: (value: ValidUnits) => void;
}

const UnitSelect: React.FC<UnitSelectProps> = ({
  name,
  selectItems,
  selectedItem,
  handleUnitChange,
}) => {
  return (
    <Select name={name} value={selectedItem} onValueChange={handleUnitChange}>
      <SelectTrigger>
        <SelectValue>{selectedItem.toUpperCase()}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {selectItems.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default UnitSelect;
