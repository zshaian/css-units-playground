import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

const UnitSelect: React.FC = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="CSS Unit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="px">PX</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UnitSelect;
