"use client";

import { useState } from "react";
import { 
  calculateTipAmounts, 
  createTipCalculatorHandlers 
} from "../logic";
import { CalculatorInputs, CalculatorResults } from "./components";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [isCustomTip, setIsCustomTip] = useState(false);

  // Calculate tip amounts using extracted logic
  const { tipAmount, totalPerPerson, isValidPeopleCount } = calculateTipAmounts({
    bill,
    tipPercentage,
    customTip,
    people,
    isCustomTip
  });

  // Create handlers using extracted logic
  const handlers = createTipCalculatorHandlers(
    { bill, tipPercentage, customTip, people, isCustomTip },
    { setBill, setTipPercentage, setCustomTip, setPeople, setIsCustomTip }
  );

  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl text-neutral-900 tracking-widest">
            SPLI<br />TTER
          </h1>
        </div>
        
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CalculatorInputs
              bill={bill}
              onBillChange={handlers.setBill}
              selectedTip={tipPercentage}
              customTip={customTip}
              isCustomTip={isCustomTip}
              onTipSelect={handlers.handleTipSelect}
              onCustomTipChange={handlers.handleCustomTipChange}
              people={people}
              onPeopleChange={handlers.setPeople}
            />
            
            <CalculatorResults
              tipAmount={tipAmount}
              totalPerPerson={totalPerPerson}
              onReset={handlers.handleReset}
              isResetDisabled={!bill && !tipPercentage && !customTip && !people}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
