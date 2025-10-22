/**
 * Constants for the tip calculator application
 */

export const TIP_PERCENTAGES = ["5", "10", "15", "25", "50"] as const;

export const DEFAULT_STATE = {
  bill: "",
  tipPercentage: "",
  customTip: "",
  people: "",
  isCustomTip: false
} as const;

export const CURRENCY_SYMBOL = "$";

export const DECIMAL_PLACES = 2;
