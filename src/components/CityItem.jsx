import styles from "./CityItem.module.css";

export default function CityItem({ city }) {
  return (
    <li className={styles.CityItem}>
      <span className={styles.emoji}></span>
    </li>
  );
}
