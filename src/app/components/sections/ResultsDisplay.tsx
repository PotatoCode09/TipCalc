import { ResultDisplay } from "../ui";
import { CURRENCY_SYMBOL, DECIMAL_PLACES } from "../../../logic";

interface ResultsDisplayProps {
  tipAmount: number;
  totalPerPerson: number;
}

export default function ResultsDisplay({
  tipAmount,
  totalPerPerson
}: ResultsDisplayProps) {
  return (
    <div className="space-y-6">
      <ResultDisplay
        label="Tip Amount"
        subLabel="/ person"
        amount={tipAmount}
        currency={CURRENCY_SYMBOL}
        decimalPlaces={DECIMAL_PLACES}
      />
      <ResultDisplay
        label="Total"
        subLabel="/ person"
        amount={totalPerPerson}
        currency={CURRENCY_SYMBOL}
        decimalPlaces={DECIMAL_PLACES}
      />
    </div>
  );
}
