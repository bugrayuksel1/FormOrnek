import "./styles/input.css";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`custom-input ${error ? "error" : ""}`}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
