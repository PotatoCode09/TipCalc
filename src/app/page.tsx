"use client";

import { useState } from "react";
import Image from "next/image";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [isCustomTip, setIsCustomTip] = useState(false);

  const billAmount = parseFloat(bill) || 0;
  const tipPercent = isCustomTip ? parseFloat(customTip) : parseFloat(tipPercentage);
  const peopleCount = parseInt(people) || 0;
  
  // Validation: people count must be greater than 0
  const isValidPeopleCount = peopleCount > 0;
  
  const tipAmount = isValidPeopleCount ? (billAmount * (tipPercent / 100)) / peopleCount : 0;
  const totalPerPerson = isValidPeopleCount ? (billAmount + (billAmount * (tipPercent / 100))) / peopleCount : 0;

  const handleTipSelect = (percentage: string) => {
    setTipPercentage(percentage);
    setIsCustomTip(false);
    setCustomTip("");
  };

  const handleCustomTipChange = (value: string) => {
    setCustomTip(value);
    setIsCustomTip(true);
    setTipPercentage("");
  };

  const handleReset = () => {
    setBill("");
    setTipPercentage("");
    setCustomTip("");
    setPeople("");
    setIsCustomTip(false);
  };

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
            {/* Left Section - Inputs */}
            <div className="space-y-6">
              {/* Bill Amount */}
              <div>
                <label className="block text-neutral-500 text-sm mb-2">
                  Bill
                </label>
                <div className="relative">
                  <Image
                    src="/images/icon-dollar.svg"
                    alt="Dollar icon"
                    width={12}
                    height={16}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="0"
                    className="w-full bg-neutral-50 text-neutral-900 text-right text-2xl font-bold py-3 px-4 pl-12 rounded-lg border-2 border-transparent focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Tip Selection */}
              <div>
                <label className="block text-neutral-500 text-sm mb-4">
                  Select Tip %
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {["5", "10", "15", "25", "50"].map((percentage) => (
                    <button
                      key={percentage}
                      onClick={() => handleTipSelect(percentage)}
                      className={`py-3 px-6 rounded-lg text-xl font-bold transition-colors ${
                        tipPercentage === percentage && !isCustomTip
                          ? "bg-primary text-neutral-900"
                          : "bg-neutral-900 text-white hover:bg-neutral-200 hover:text-neutral-900"
                      }`}
                    >
                      {percentage}%
                    </button>
                  ))}
                  <input
                    type="number"
                    value={customTip}
                    onChange={(e) => handleCustomTipChange(e.target.value)}
                    placeholder="Custom"
                    className="py-3 px-6 rounded-lg text-xl font-bold text-center bg-neutral-50 text-neutral-900 border-2 border-transparent focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Number of People */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-neutral-500 text-sm">
                    Number of People
                  </label>
                  {people && !isValidPeopleCount && (
                    <span className="text-red-500 text-sm">Can't be zero</span>
                  )}
                </div>
                <div className="relative">
                  <Image
                    src="/images/icon-person.svg"
                    alt="Person icon"
                    width={12}
                    height={16}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    type="number"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    placeholder="0"
                    className={`w-full text-right text-2xl font-bold py-3 px-4 pl-12 rounded-lg border-2 focus:outline-none ${
                      people && !isValidPeopleCount
                        ? "bg-red-50 text-red-500 border-red-500"
                        : "bg-neutral-50 text-neutral-900 border-transparent focus:border-primary"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Results */}
            <div className="bg-neutral-900 rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white text-sm">Tip Amount</div>
                    <div className="text-neutral-400 text-xs">/ person</div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    ${tipAmount.toFixed(2)}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white text-sm">Total</div>
                    <div className="text-neutral-400 text-xs">/ person</div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    ${totalPerPerson.toFixed(2)}
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleReset}
                className="w-full bg-primary text-neutral-900 py-3 px-6 rounded-lg text-xl font-bold hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!bill && !tipPercentage && !customTip && !people}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
