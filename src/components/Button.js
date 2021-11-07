const Button = ({ classList, text, color, onClick }) => {
  return (
    <button
      className={classList}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
