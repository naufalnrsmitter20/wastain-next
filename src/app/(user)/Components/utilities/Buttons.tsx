interface IButton {
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top" | undefined;
  disabled?: any;
}

export const PrimaryButton = ({ children, className, type, onClick, target }: IButton) => {
  return (
    <button className={`bg-primary-green text-[16px] transition-all duration-200 hover:bg-dark-green text-white font-bold py-[8px] rounded-[10px] ${className}`} onClick={onClick} type={type} formTarget={target}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, className, type, onClick, target }: IButton) => {
  return (
    <button
      className={`text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold py-[8px] rounded-[10px] ${className}`}
      onClick={onClick}
      type={type}
      formTarget={target}
    >
      {children}
    </button>
  );
};
