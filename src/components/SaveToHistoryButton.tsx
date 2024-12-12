import { Button } from "./ui/button";

interface SaveToHistoryButtonProps {
 handleSaveToHistoryEvent:() => void;
}

const SaveToHistoryButton: React.FC<SaveToHistoryButtonProps> = (props) => {
  return (
    <Button className="px-4 py-2 capitalize" variant="outline" onClick={props.handleSaveToHistoryEvent}>
      save to history
    </Button>
  );
};

export default SaveToHistoryButton;
