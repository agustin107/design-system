import styles from "./button.module.css";

export function Button(props) {
  const { children, primary, ...rest } = props;

  if (!children) {
    return <p>Pasar children</p>;
  }

  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: primary ? "green" : undefined,
      }}
      {...rest}
      data-testid="button"
    >
      {children}
    </button>
  );
}
