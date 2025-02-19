import { FC, ReactNode } from "react";
import styles from "./Facts.module.scss";

type FactsProps = {
  children: ReactNode;
  variant?: "Primary";
};

export const Facts: FC<FactsProps> = ({ variant = "primary", children }) => {
  return (
    <div className={`${styles.facts} ${styles[`variant-${variant}`]}`}>
      <h1>Firm Facts</h1>
      <hr />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
