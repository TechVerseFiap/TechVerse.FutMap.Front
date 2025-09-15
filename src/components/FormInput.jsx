import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormInput({
  label,
  id,
  type = "text",
  placeholder,
  error,
  required = false,
  value,
  onChange,
  ...rest
}) {
  const handleCpfMask = (val) => {
    return val
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  };

  const handleCnpjMask = (val) => {
    return val
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 18);
  };

  const handleChange = (e) => {
    let val = e.target.value;

    if (id === "cpf") {
      val = handleCpfMask(val);
    } else if (id === "cnpj") {
      val = handleCnpjMask(val);
    }

    onChange?.(val);
  };

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className="text-sm font-medium text-(--gray-color)">
        {label}:
      </Label>

      <div
        className={`
          rounded-xl border-3 transition-all
          ${error ? "border-(--red-color)" : "focus-within:border-(--primary-color)"}
        `}
      >
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value || ""}
          onChange={handleChange}
          className="h-12 bg-white border-0 focus:ring-0 px-3"
          {...rest}
        />
      </div>

      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
}
