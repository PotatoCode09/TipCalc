import { InputField } from "../ui";
import { getPeopleCountErrorMessage } from "../../../logic";

interface PeopleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PeopleInput({ value, onChange }: PeopleInputProps) {
  const errorMessage = getPeopleCountErrorMessage(value);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-neutral-500 text-sm">
          Number of People
        </label>
        {errorMessage && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
      <InputField
        value={value}
        onChange={onChange}
        placeholder="0"
        icon={{
          src: "/images/icon-person.svg",
          alt: "Person icon",
          width: 12,
          height: 16
        }}
        error={errorMessage}
        type="number"
      />
    </div>
  );
}
