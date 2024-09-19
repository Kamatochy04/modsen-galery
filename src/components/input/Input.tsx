import { ComponentProps, ComponentPropsWithRef, FC } from "react";
import { StyledInput } from "./inputStyled";

type InputVariant = "search";

type InputProps = ComponentProps<"input"> &
  ComponentPropsWithRef<"input"> & {
    variant?: InputVariant;
  };

export const Input: FC<InputProps> = ({ ...props }) => {
  return <StyledInput {...props} />;
};
