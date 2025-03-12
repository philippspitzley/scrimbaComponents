import "./Badge.css";
import clsx from "clsx";

function Badge({ children, className, variant, ...props }) {
  return (
    <span
      className={clsx(
        {
          pilled: variant === "pilled",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
