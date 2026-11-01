import { Link } from "react-router-dom";
import "./Button.css";

function Button({ text, to, onClick, className = "" }) {
  const buttonContent = (
    <span className="button-roll-window" aria-hidden="true">
      <span className="button-roll-track">
        <span className="button-roll-label">{text}</span>
        <span className="button-roll-label">{text}</span>
      </span>
    </span>
  );
  const buttonClassName = `reusable-button ${className}`.trim();

  if (to) {
    return (
      <Link
        className={buttonClassName}
        to={to}
        onClick={onClick}
        aria-label={text}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={onClick}
      aria-label={text}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
