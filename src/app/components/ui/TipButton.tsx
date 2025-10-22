interface TipButtonProps {
  percentage: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function TipButton({ 
  percentage, 
  isSelected, 
  onClick 
}: TipButtonProps) {
  const baseClasses = "py-3 px-6 rounded-lg text-xl font-bold transition-colors";
  const selectedClasses = isSelected
    ? "bg-primary text-neutral-900"
    : "bg-neutral-900 text-white hover:bg-neutral-200 hover:text-neutral-900";
  
  const buttonClasses = `${baseClasses} ${selectedClasses}`;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {percentage}%
    </button>
  );
}
