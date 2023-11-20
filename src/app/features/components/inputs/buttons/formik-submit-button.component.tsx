import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";
import CircularProgress from "@mui/material/CircularProgress";

interface FormikSubmitButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const FormikSubmitButton: React.FC<FormikSubmitButtonProps> = ({
  type = "submit",
  disabled,
  isLoading = false,
  ...rest
}) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      type={type}
      disabled={disabled || isSubmitting || isLoading}
      {...rest}
      endIcon={
        isLoading || isSubmitting ? <CircularProgress size={20} /> : undefined
      }
    />
  );
};

export default FormikSubmitButton;
