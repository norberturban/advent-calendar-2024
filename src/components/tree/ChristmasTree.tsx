import Ornament from "src/components/ornament/Ornament";
import GiftBox from "src/components/giftBoxes/GiftBox";

import styles from "./ChristmasTree.module.scss";

const ChristmasTree = () => (
  <div className={styles.christmasDecorations}>
    <div className={styles.tree}>
      <div className={styles.treeTop}>
        <div className={styles.star}></div>
        <Ornament day={1} />
        <Ornament day={2} />
        <Ornament day={3} />
        <Ornament day={4} />
        <Ornament day={5} />
        <Ornament day={6} />
        <Ornament day={7} />
      </div>
      <div className={styles.treeMiddle}>
        <Ornament day={8} />
        <Ornament day={9} />
        <Ornament day={10} />
        <Ornament day={11} />
        <Ornament day={12} />
        <Ornament day={13} />
        <Ornament day={14} />
        <Ornament day={15} />
        <Ornament day={16} />
        <Ornament day={17} />
      </div>
      <div className={styles.treeBottom}>
        <Ornament day={18} />
        <Ornament day={19} />
        <Ornament day={20} />
        <Ornament day={21} />
        <Ornament day={22} />
        <Ornament day={23} />
        <Ornament day={24} />
      </div>
    </div>

    <GiftBox />
    <GiftBox boxPosition={{ top: "13rem", right: "4.15rem" }} giftBackgroundColor="#2c717a" />
    <GiftBox boxPosition={{ right: "0.85rem" }} giftBackgroundColor="#ffadba" />
  </div>
);

export default ChristmasTree;
