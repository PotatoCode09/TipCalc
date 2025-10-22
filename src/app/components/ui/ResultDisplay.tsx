interface ResultDisplayProps {
  label: string;
  subLabel: string;
  amount: number;
  currency: string;
  decimalPlaces?: number;
}

export default function ResultDisplay({
  label,
  subLabel,
  amount,
  currency,
  decimalPlaces = 2
}: ResultDisplayProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="text-white text-sm">{label}</div>
        <div className="text-neutral-400 text-xs">{subLabel}</div>
      </div>
      <div className="text-3xl lg:text-4xl font-bold text-primary">
        {currency}{amount.toFixed(decimalPlaces)}
      </div>
    </div>
  );
}
