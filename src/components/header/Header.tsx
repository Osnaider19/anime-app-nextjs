import { Logo } from "./Logo";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.contentHeader}>
      <Logo />
    </div>
  );
};
