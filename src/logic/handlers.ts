import { TipCalculatorState, TipCalculatorHandlers } from './types';

/**
 * Create event handlers for tip calculator
 */
export function createTipCalculatorHandlers(
  state: TipCalculatorState,
  setters: {
    setBill: (value: string) => void;
    setTipPercentage: (value: string) => void;
    setCustomTip: (value: string) => void;
    setPeople: (value: string) => void;
    setIsCustomTip: (value: boolean) => void;
  }
): TipCalculatorHandlers {
  
  const handleTipSelect = (percentage: string) => {
    setters.setTipPercentage(percentage);
    setters.setIsCustomTip(false);
    setters.setCustomTip("");
  };

  const handleCustomTipChange = (value: string) => {
    setters.setCustomTip(value);
    setters.setIsCustomTip(true);
    setters.setTipPercentage("");
  };

  const handleReset = () => {
    setters.setBill("");
    setters.setTipPercentage("");
    setters.setCustomTip("");
    setters.setPeople("");
    setters.setIsCustomTip(false);
  };

  return {
    handleTipSelect,
    handleCustomTipChange,
    handleReset,
    setBill: setters.setBill,
    setPeople: setters.setPeople
  };
}
