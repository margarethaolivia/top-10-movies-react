const Button = ({ classList, text, onClick }) => {
  return (
    // <a href="/">
    <button className={classList} onClick={onClick}>
      {text}
    </button>
    // </a>
  );
};

export default Button;
