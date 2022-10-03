import styles from "./goal.module.css";

const Goal = () => {
  return (
    <>
      <div className={styles.goalContainer}>
        <h3 className={styles.goalTitle}>Our Goal</h3>
        <p className={styles.goalPara}>Is to spread the enjoyment and</p>
        <p className={styles.goalPara}>
          the experience of Hong Kong home baked goods,
        </p>
        <p className={styles.goalPara}>to our local community.</p>
      </div>
    </>
  );
};

export default Goal;
