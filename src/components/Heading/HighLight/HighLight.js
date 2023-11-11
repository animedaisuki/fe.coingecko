import React from "react";
import styles from "./HighLight.module.scss";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useSelector } from "react-redux";
import CurrencyInfo from "./CurrencyInfo/CurrencyInfo";

export default function HighLight() {
  const crypto = useSelector((state) => state.crypto);

  return (
    <div className={styles.highlightContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeading}>
          <WhatshotIcon sx={{ color: "#FC6400" }} />
          <p>Top Market Caps</p>
        </div>
        <div className={styles.cardContent}>
          {crypto.currenciesStats
            .slice()
            .sort((a, b) => a.rank - b.rank)
            .filter(
              (currencyStats) =>
                currencyStats.rank >= 1 && currencyStats.rank <= 3
            )
            .map((currencyStats) => (
              <div key={currencyStats.symbol}>
                <CurrencyInfo currencyStats={currencyStats} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
