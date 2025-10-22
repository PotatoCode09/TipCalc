/**
 * Validation functions for tip calculator inputs
 */

/**
 * Validate if a string represents a valid positive number
 */
export function isValidPositiveNumber(value: string): boolean {
  const num = parseFloat(value);
  return !isNaN(num) && num > 0;
}

/**
 * Validate if people count is valid (must be greater than 0)
 */
export function isValidPeopleCount(people: string): boolean {
  const count = parseInt(people);
  return !isNaN(count) && count > 0;
}

/**
 * Validate if bill amount is valid (must be greater than 0)
 */
export function isValidBillAmount(bill: string): boolean {
  return isValidPositiveNumber(bill);
}

/**
 * Validate if tip percentage is valid (must be between 0 and 100)
 */
export function isValidTipPercentage(tip: string): boolean {
  const percentage = parseFloat(tip);
  return !isNaN(percentage) && percentage >= 0 && percentage <= 100;
}

/**
 * Get validation error message for people count
 */
export function getPeopleCountErrorMessage(people: string): string | null {
  if (!people) return null;
  if (!isValidPeopleCount(people)) {
    return "Can't be zero";
  }
  return null;
}

/**
 * Get validation error message for bill amount
 */
export function getBillAmountErrorMessage(bill: string): string | null {
  if (!bill) return null;
  if (!isValidBillAmount(bill)) {
    return "Invalid amount";
  }
  return null;
}
