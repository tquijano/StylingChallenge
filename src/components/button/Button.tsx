import { FC } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  variant?: "default" | "icon";
  icon?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  variant = "default",
  icon,
  label = "This is a one line button",
  ...props
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {variant === "icon" && (
        <span className='material-icons'>{icon ?? "search"}</span>
      )}
      <p>{label}</p>
    </button>
  );
};
