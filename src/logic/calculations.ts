import { TipCalculatorState, TipCalculationResult } from './types';

/**
 * Calculate tip amount and total per person based on input values
 */
export function calculateTipAmounts(state: TipCalculatorState): TipCalculationResult {
  const billAmount = parseFloat(state.bill) || 0;
  const tipPercent = state.isCustomTip ? parseFloat(state.customTip) : parseFloat(state.tipPercentage);
  const peopleCount = parseInt(state.people) || 0;
  
  // Validation: people count must be greater than 0
  const isValidPeopleCount = peopleCount > 0;
  
  const tipAmount = isValidPeopleCount ? (billAmount * (tipPercent / 100)) / peopleCount : 0;
  const totalPerPerson = isValidPeopleCount 
    ? (billAmount + (billAmount * (tipPercent / 100))) / peopleCount 
    : 0;

  return {
    tipAmount,
    totalPerPerson,
    isValidPeopleCount
  };
}

/**
 * Calculate the total tip amount (not per person)
 */
export function calculateTotalTipAmount(billAmount: number, tipPercent: number): number {
  return billAmount * (tipPercent / 100);
}

/**
 * Calculate the total bill including tip
 */
export function calculateTotalBill(billAmount: number, tipPercent: number): number {
  return billAmount + calculateTotalTipAmount(billAmount, tipPercent);
}
