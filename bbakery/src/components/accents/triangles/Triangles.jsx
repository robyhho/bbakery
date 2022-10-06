import styles from "./triangles.module.css";

const Triangles = () => {
  return (
    <div className={styles.triangleContainer}>
      <div className={styles.triangleRow}>
        <span className={styles.triangle}></span>
      </div>
      <div className={styles.triangleRow}>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
      </div>
      <div className={styles.triangleRow}>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
      </div>
      <div className={styles.triangleRow}>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
      </div>
      <div className={styles.triangleRow}>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
      </div>
      <div className={styles.triangleRow}>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
        <span className={styles.triangle}></span>
      </div>
    </div>
  );
};

export default Triangles;
