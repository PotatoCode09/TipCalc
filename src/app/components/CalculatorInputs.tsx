import BillInput from "./BillInput";
import PeopleInput from "./PeopleInput";
import TipSelection from "./TipSelection";

interface CalculatorInputsProps {
  // Bill state
  bill: string;
  onBillChange: (value: string) => void;
  
  // Tip state
  selectedTip: string;
  customTip: string;
  isCustomTip: boolean;
  onTipSelect: (percentage: string) => void;
  onCustomTipChange: (value: string) => void;
  
  // People state
  people: string;
  onPeopleChange: (value: string) => void;
}

export default function CalculatorInputs({
  bill,
  onBillChange,
  selectedTip,
  customTip,
  isCustomTip,
  onTipSelect,
  onCustomTipChange,
  people,
  onPeopleChange
}: CalculatorInputsProps) {
  return (
    <div className="space-y-6">
      <BillInput
        value={bill}
        onChange={onBillChange}
      />
      
      <TipSelection
        selectedTip={selectedTip}
        customTip={customTip}
        isCustomTip={isCustomTip}
        onTipSelect={onTipSelect}
        onCustomTipChange={onCustomTipChange}
      />
      
      <PeopleInput
        value={people}
        onChange={onPeopleChange}
      />
    </div>
  );
}
