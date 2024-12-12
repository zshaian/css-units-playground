import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/useToast";
import { CopyText } from "@/utils/copyInputText";

interface CopyButtonProps {
  value: string;
}

const CopyButton: React.FC<CopyButtonProps> = (props) => {
  const { toast } = useToast();
  const onSuccessCopy = () => {
    toast({
      description: "Text copied successfully!",
    });
  };
  const onErrorCopy = () => {
    toast({
      description: "Error Copying The Value",
      variant: "destructive",
    });
  };

  return (
    <Button
      variant="ghost"
      onClick={() => CopyText(props.value, onSuccessCopy, onErrorCopy)}
    >
      <Copy />
    </Button>
  );
};

export default CopyButton;
