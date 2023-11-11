import React from "react";
import styles from "./CurrencyInfo.module.scss";

export default function CurrencyInfo(props) {
  const { currencyStats } = props;
  return (
    <div className={styles.informationContainer}>
      <div>{currencyStats.rank}</div>
      <div className={styles.desc}>
        <img
          className={styles.descImg}
          src={currencyStats.image}
          alt={currencyStats.symbol}
        />
        {currencyStats.symbol}
      </div>
      <div>${currencyStats.marketCap}</div>
    </div>
  );
}
