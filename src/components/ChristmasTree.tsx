import styles from "./ChristmasTree.module.scss";

const ChristmasTree = () => (
  <div className={styles.christmasDecorations}>
    <div className={styles.tree}>
      <div className={styles.treeTop}></div>
      <div className={styles.treeMiddle}></div>
      <div className={styles.treeBottom}></div>
    </div>
  </div>
);

export default ChristmasTree;
