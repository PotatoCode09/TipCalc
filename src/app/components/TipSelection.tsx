import { TipButton, InputField } from "@/app/components/ui";
import { TIP_PERCENTAGES } from "@/logic";

interface TipSelectionProps {
  selectedTip: string;
  customTip: string;
  isCustomTip: boolean;
  onTipSelect: (percentage: string) => void;
  onCustomTipChange: (value: string) => void;
}

export default function TipSelection({
  selectedTip,
  customTip,
  isCustomTip,
  onTipSelect,
  onCustomTipChange
}: TipSelectionProps) {
  return (
    <div>
      <label className="block text-neutral-500 text-sm mb-4">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {TIP_PERCENTAGES.map((percentage) => (
          <TipButton
            key={percentage}
            percentage={percentage}
            isSelected={selectedTip === percentage && !isCustomTip}
            onClick={() => onTipSelect(percentage)}
          />
        ))}
        <InputField
          value={customTip}
          onChange={onCustomTipChange}
          placeholder="Custom"
          type="number"
          className="text-center"
        />
      </div>
    </div>
  );
}
