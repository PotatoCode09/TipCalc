// Types for the tip calculator application

export interface TipCalculatorState {
  bill: string;
  tipPercentage: string;
  customTip: string;
  people: string;
  isCustomTip: boolean;
}

export interface TipCalculationResult {
  tipAmount: number;
  totalPerPerson: number;
  isValidPeopleCount: boolean;
}

export interface TipCalculatorHandlers {
  handleTipSelect: (percentage: string) => void;
  handleCustomTipChange: (value: string) => void;
  handleReset: () => void;
  setBill: (value: string) => void;
  setPeople: (value: string) => void;
}
