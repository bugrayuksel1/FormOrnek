import "./styles/button.css";

const Button = ({ children, type = "button", onClick, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="custom-button"
    >
      {children}
    </button>
  );
};

export default Button;
