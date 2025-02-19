import { FC, ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  children: ReactNode;
  variant?: "default" | "border";
};

export const Card: FC<CardProps> = ({ variant = "default", children }) => {
  return <div className={`${styles.card} ${styles[variant]}`}>{children}</div>;
};
