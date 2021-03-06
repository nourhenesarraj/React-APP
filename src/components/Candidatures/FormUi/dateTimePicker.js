import { TextField } from "@material-ui/core";
import { useField } from "formik";

const DateTimePicker = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...props,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.error && meta.touched) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }
  return <TextField {...configDateTimePicker} />;
};

export default DateTimePicker;
