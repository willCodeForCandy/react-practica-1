import './Button.css';

const Button = ({ children, onClick, operation = 'suma' }) => {
  return (
    <button onClick={onClick} className={operation}>
      {children}
    </button>
  );
};

export default Button;
