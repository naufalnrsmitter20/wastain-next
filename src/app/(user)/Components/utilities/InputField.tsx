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

export const InputFields = ({ id, className, placeholder, required, type, name }: IInput) => {
  return <input id={id} type={type} placeholder={placeholder} required={required} name={name} className={`rounded-[10px] w-full bg-gray-4 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green ${className}`} />;
};
