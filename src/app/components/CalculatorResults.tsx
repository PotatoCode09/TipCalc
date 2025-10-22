import { ResultsDisplay } from "./sections";

interface CalculatorResultsProps {
  tipAmount: number;
  totalPerPerson: number;
  onReset: () => void;
  isResetDisabled: boolean;
}

export default function CalculatorResults({
  tipAmount,
  totalPerPerson,
  onReset,
  isResetDisabled
}: CalculatorResultsProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
      <ResultsDisplay
        tipAmount={tipAmount}
        totalPerPerson={totalPerPerson}
      />
      
      <button
        onClick={onReset}
        className="w-full bg-primary text-neutral-900 py-3 px-6 rounded-lg text-xl font-bold hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isResetDisabled}
      >
        RESET
      </button>
    </div>
  );
}
