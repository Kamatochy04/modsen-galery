import { ComponentProps, ComponentPropsWithRef, FC } from "react";

import styles from "./button.module.scss";

type ButtonVariant = "vaforite";

type ButtonProps = ComponentProps<"button"> &
  ComponentPropsWithRef<"button"> & {
    variant?: ButtonVariant;
    children: React.ReactNode;
  };

export const Button: FC<ButtonProps> = ({
  variant = "vaforite",
  className,
  children,
  ...props
}) => {
  return (
    <button {...props} className={`${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};
