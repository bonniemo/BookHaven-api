import { FormInputProps } from "../types/Types";

const FormInput: React.FC<FormInputProps> = ({ label, type, inputProps }) => {
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
