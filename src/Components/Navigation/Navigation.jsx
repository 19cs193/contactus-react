
import styles from "./Navigation.module.css";

const Navigation = () => {
  console.log(styles);

  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src='/images/contact.png' alt="contact us" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
