import styles from "./input.module.css";

export function Input(props) {
  const { ...rest } = props;

  return <input className={styles.input} {...rest} />;
}
