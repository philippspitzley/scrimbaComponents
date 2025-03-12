import "./Banner.css";
import successIcon from "../assets/successIcon.png";
import warningIcon from "../assets/warningIcon.png";
import errorIcon from "../assets/errorIcon.png";
import infoIcon from "../assets/infoIcon.png";
import clsx from "clsx";

function Banner({ children, className, variant = "success" }) {
  const { title = "Success", message = "This is a success message!" } =
    children;

  const icons = {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    info: infoIcon,
  };
  const icon = icons[variant] || successIcon;

  const classes = clsx("banner-container", variant, className);

  return (
    <div className={classes} role="alert">
      <header>
        <img src={icon} alt="" aria-hidden="true" />
        <h3>{title}</h3>
      </header>
      <p>{message}</p>
    </div>
  );
}

export default Banner;
