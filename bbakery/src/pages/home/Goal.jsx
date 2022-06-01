import styles from "./goal.module.css";

const Goal = () => {
  return (
    <>
      <div className={styles.goalContainer}>
        <h3 className={styles.goalTitle}>Our Goal</h3>
        <p className={styles.goalPara}>
          Is to spread the enjoyment and experience of Hong Kong styled bakery
          items to our local community
        </p>
      </div>
    </>
  );
};

export default Goal;
