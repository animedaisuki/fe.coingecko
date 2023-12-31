import React, { useState } from "react";
import styles from "./Heading.module.scss";
import { FormControlLabel, Switch } from "@mui/material";
import HighLight from "./HighLight/HighLight";

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
          label="Highlights"
          labelPlacement="start"
        />
      </div>
      {displayHighLight && <HighLight />}
    </div>
  );
}
