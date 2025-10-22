import { InputField } from "../ui";

interface BillInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BillInput({ value, onChange }: BillInputProps) {
  return (
    <div>
      <label className="block text-neutral-500 text-sm mb-2">
        Bill
      </label>
      <InputField
        value={value}
        onChange={onChange}
        placeholder="0"
        icon={{
          src: "/images/icon-dollar.svg",
          alt: "Dollar icon",
          width: 12,
          height: 16
        }}
        type="number"
      />
    </div>
  );
}
