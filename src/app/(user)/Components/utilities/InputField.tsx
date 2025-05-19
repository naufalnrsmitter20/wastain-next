import { ChangeEvent, KeyboardEventHandler } from "react";
import clsx from "clsx";

interface IInput {
  id: string;
  type: "text" | "password" | "email" | "number" | "tel" | "date" | "time" | "file" | "month" | "week" | "url" | "search" | "color" | "datetime-local";
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange?: (value: any) => void;
  value?: any;
  name: string;
}

interface InputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  className?: string;
  value?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}
interface TextFieldProps extends InputProps {
  type: "email" | "text" | "password" | "number" | string;
}

interface SelectFieldProps {
  label?: string;
  required?: boolean;
  options: { value: string; label: string }[];
  className?: string;
  value?: string | Array<string>;
  name: string;
  handleChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  defaultValue?: string;
  onChangeOption?: (event: ChangeEvent<HTMLOptionElement>) => void;
  optClassname?: string;
}

export const InputFields = ({ id, className, placeholder, required, type, name }: IInput) => {
  return <input id={id} type={type} placeholder={placeholder} required={required} name={name} className={`rounded-[10px] w-full bg-gray-4 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green ${className}`} />;
};

export function TextField({ required, placeholder, type, name, label, className, value, handleChange, disabled, readOnly, defaultValue, onKeyDown }: Readonly<TextFieldProps>) {
  return (
    <main className={clsx("flex flex-col gap-y-2", className)}>
      {label && (
        <label htmlFor={name} className={clsx(`text-[17px] font-normal ${required ? "after:text-red-500 after:content-['*']" : ""}`)}>
          {label}
        </label>
      )}
      <input
        defaultValue={defaultValue}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={clsx(
          "block w-full p-3 text-sm text-gray-900 border rounded-lg border-gray-600 bg-white focus:ring-salmon-100 focus:ring-2 outline-none focus:border-salmon-50",
          "placeholder:text-gray-600 placeholder:font-normal placeholder:tracking-wide focus:border-salmon-400",
          `${disabled && "bg-slate-100 hover:cursor-not-allowed"}`
        )}
        required={required === true}
        readOnly={readOnly}
        onKeyDown={onKeyDown}
      />
    </main>
  );
}

export function DropDown({ name, options, className, disabled, handleChange, label, required, value, defaultValue, onChangeOption, optClassname }: Readonly<SelectFieldProps>) {
  return (
    <main className={clsx("flex flex-col gap-y-2", className)}>
      {label && (
        <label htmlFor={name} className={clsx(`text-[17px] font-normal ${required ? "after:text-red-500 after:content-['*']" : ""}`)}>
          {label}
        </label>
      )}
      <select
        defaultValue={defaultValue}
        className={clsx(
          "block w-full p-3 text-sm text-gray-900 border rounded-lg border-gray-600 bg-white focus:ring-salmon-100 focus:ring-2 outline-none focus:border-salmon-50",
          "placeholder:text-gray-600 placeholder:font-normal placeholder:tracking-wide focus:border-salmon-400",
          `${disabled && "bg-slate-100 hover:cursor-not-allowed"}`
        )}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      >
        <option value="null" disabled>
          Select
        </option>
        {options &&
          options.map((opt, i) => (
            <option className={optClassname} key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
    </main>
  );
}
