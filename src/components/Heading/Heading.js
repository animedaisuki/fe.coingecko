import React, { useState } from "react";
import styles from "./Heading.module.scss";
import { FormControlLabel, Switch } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export default function Heading() {
  const [displayHighLight, setDisplayHighLight] = useState(true);

  return (
    <div className={styles.HeadingContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>View Cryptocurrency Prices and Stats</p>
        <FormControlLabel
          value="highLight"
          control={
            <Switch
              checked={displayHighLight}
              onChange={() => {
                setDisplayHighLight((prevState) => !prevState);
              }}
            />
          }
          label="Show High Light"
          labelPlacement="start"
        />
      </div>
      {displayHighLight && (
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>
              <WhatshotIcon />
              <p>Trending</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
