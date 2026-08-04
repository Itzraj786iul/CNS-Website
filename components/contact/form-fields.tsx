import { cn } from "@/lib/utils";

const fieldClassName = cn(
  "h-12 w-full rounded-xl border border-cns-border bg-white px-4 text-sm text-cns-navy",
  "placeholder:text-muted-foreground outline-none transition-colors",
  "focus:border-primary focus:ring-2 focus:ring-primary/20"
);

const labelClassName = "text-sm font-medium text-cns-navy";

function FormField({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

function FormInput({
  id,
  name,
  type = "text",
  placeholder,
  required,
  className,
}: {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className={cn(fieldClassName, className)}
    />
  );
}

function FormSelect({
  id,
  name,
  options,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <select id={id} name={name} required={required} className={cn(fieldClassName, "appearance-none")} defaultValue="">
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

function FormTextarea({
  id,
  name,
  placeholder,
  rows = 4,
}: {
  id: string;
  name: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      rows={rows}
      className={cn(fieldClassName, "h-auto resize-none py-3")}
    />
  );
}

export { FormField, FormInput, FormSelect, FormTextarea, fieldClassName, labelClassName };
