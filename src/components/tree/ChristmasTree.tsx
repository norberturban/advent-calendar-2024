import Ornament from "src/components/ornament/Ornament";
import GiftBox from "src/components/giftBoxes/GiftBox";
import CandyCane from "src/components/ornament/CandyCane";
import SantaSock from "src/components/ornament/SantaSock";
import Mistletoe from "src/components/ornament/Mistletoe";

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

        <CandyCane isHorizontallyMirrored position={{ top: "4.3rem", right: "1.5rem" }} rotate="35deg" />
        <CandyCane position={{ top: "6rem", right: "-3.5rem" }} rotate="135deg" size="1.25rem" />
        <SantaSock
          isHorizontallyMirrored
          position={{ top: "2.35rem", right: "-0.2rem" }}
          rotate="-35deg"
          size="0.7rem"
        />
        <SantaSock position={{ top: "6rem", right: "0.25rem" }} rotate="15deg" />
        <Mistletoe position={{ top: "4rem", right: "-1.65rem" }} size="1.25rem" />
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

        <Mistletoe isHorizontallyMirrored position={{ top: "1rem", right: "3.75rem" }} size="1.5rem" />
        <SantaSock
          isHorizontallyMirrored
          position={{ top: "2.25rem", right: "1.15rem" }}
          rotate="45deg"
          size="1.25rem"
        />
        <CandyCane position={{ top: "2.25rem", right: "6.5rem" }} rotate="35deg" size="1.25rem" />
        <CandyCane isHorizontallyMirrored position={{ top: "4.75rem", right: "3rem" }} rotate="115deg" size="1.25rem" />
        <Mistletoe position={{ top: "4.5rem", right: "-0.5rem" }} size="1.5rem" rotate="-115deg" />
        <CandyCane position={{ top: "2.5rem", right: "-1.25rem" }} size="1.25rem" />
      </div>
      <div className={styles.treeBottom}>
        <Ornament day={18} />
        <Ornament day={19} />
        <Ornament day={20} />
        <Ornament day={21} />
        <Ornament day={22} />
        <Ornament day={23} />
        <Ornament day={24} />

        <Mistletoe position={{ top: "2.65rem", right: "6.25rem" }} size="1.25rem" rotate="-95deg" />
        <SantaSock isHorizontallyMirrored position={{ top: "3rem", right: "1rem" }} rotate="-45deg" size="0.75rem" />
        <SantaSock position={{ top: "5rem", right: "7.75rem" }} rotate="15deg" />
        <CandyCane
          isHorizontallyMirrored
          position={{ top: "4.5rem", right: "5.25rem" }}
          size="1.25rem"
          rotate="-155deg"
        />
        <CandyCane position={{ top: "4.25rem", right: "2.25rem" }} size="1.5rem" rotate="135deg" />
        <Mistletoe
          isHorizontallyMirrored
          position={{ top: "4.5rem", right: "-0.5rem" }}
          size="1.25rem"
          rotate="-125deg"
        />
      </div>
    </div>

    <GiftBox />
    <GiftBox boxPosition={{ top: "13rem", right: "4.15rem" }} giftBackgroundColor="#2c717a" />
    <GiftBox boxPosition={{ right: "0.85rem" }} giftBackgroundColor="#ffadba" />
  </div>
);

export default ChristmasTree;
