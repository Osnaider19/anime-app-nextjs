import { Logo } from "./Logo";
import { Nav } from "./Nav";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.contentHeader}>
      <Logo />
      <Nav/>
    </div>
  );
};
