import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const UnitInput: React.FC = () => {
  return (
    <div className="flex gap-x-1 border border-input rounded-md">
      <Input type="number" className="no-spinner w-[15rem] border-none" />
      <Button variant="ghost">
        <Copy size={30} />
      </Button>
    </div>
  );
};

export default UnitInput;
