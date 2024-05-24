import { FormInputProps } from "../types/Types";

const FormInput = ({ label, type, inputProps }: FormInputProps) => {
  return (
    <>
      <label className="mt-3" htmlFor={inputProps.id}>
        {label}
      </label>
      <input
        className="border-2 border-stone-600 rounded-md"
        type={type}
        {...inputProps}
      />
    </>
  );
};

export default FormInput;
