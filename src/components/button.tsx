import React from "react";

interface MyButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  className?: string;
  disabled?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({ onClick, label, className, disabled }) => {
  return (
    <button type="button" className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default MyButton;
