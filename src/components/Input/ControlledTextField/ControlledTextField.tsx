import type { BaseTextFieldProps, TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import type { ReactElement, ReactNode } from "react";
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { useController } from "react-hook-form";

type ControlledTextFieldProperties<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & {
  inputProps: TextFieldProps & {
    select?: BaseTextFieldProps["select"];
  };
  children?: ReactNode | ReactNode[];
};

const ControlledTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  inputProps,
  children,
  ...controllerProperties
}: ControlledTextFieldProperties<TFieldValues, TName>): ReactElement => {
  const { field, fieldState } = useController({ ...controllerProperties });
  return (
    <TextField
      {...inputProps}
      error={!!fieldState.error}
      helperText={fieldState.error?.message ?? " "}
      {...field}
    >
      {children}
    </TextField>
  );
};

export default ControlledTextField;
