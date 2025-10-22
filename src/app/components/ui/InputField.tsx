import Image from "next/image";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  error?: string;
  type?: "text" | "number";
  className?: string;
}

export default function InputField({
  value,
  onChange,
  placeholder = "0",
  icon,
  error,
  type = "number",
  className = ""
}: InputFieldProps) {
  const hasError = !!error;
  
  const baseClasses = "w-full text-right text-2xl font-bold py-3 px-4 rounded-lg border-2 focus:outline-none";
  const iconPadding = icon ? "pl-12" : "";
  const errorClasses = hasError 
    ? "bg-red-50 text-red-500 border-red-500" 
    : "bg-neutral-50 text-neutral-900 border-transparent focus:border-primary";
  
  const inputClasses = `${baseClasses} ${iconPadding} ${errorClasses} ${className}`;

  return (
    <div className="relative">
      {icon && (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
        />
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
}
