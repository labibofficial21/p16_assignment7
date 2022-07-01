const Button = ({ className, onClick, type, children }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
