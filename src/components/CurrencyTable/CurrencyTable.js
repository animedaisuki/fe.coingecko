import React from "react";
import styles from "./CurrencyTable.module.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

export default function CurrencyTable() {
  const crypto = useSelector((state) => state.crypto);

  return (
    <div className={styles.tableOuterContainer}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <button className={styles.headingButton}>#</button>
              </TableCell>
              <TableCell align="left">
                <button className={styles.headingButton}>Coin</button>
              </TableCell>
              <TableCell align="center">
                <button className={styles.headingButton}>Price</button>
              </TableCell>
              <TableCell align="center">
                <button className={styles.headingButton}>24h</button>
              </TableCell>
              <TableCell align="center">
                <button className={styles.headingButton}>7d</button>
              </TableCell>
              <TableCell align="center">
                <button className={styles.headingButton}>1mth</button>
              </TableCell>
              <TableCell align="center">
                <button className={styles.headingButton}>24h Vol</button>
              </TableCell>
              <TableCell align="center">
                <button className={styles.headingButton}>Mkt Cap</button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {crypto.currenciesStats.map((currencyStats, index) => (
              <TableRow
                key={currencyStats.symbol}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center" className={styles.tableCell}>
                  <img
                    className={styles.cryptoImg}
                    src={currencyStats.image}
                    alt={currencyStats.symbol}
                  />
                  {currencyStats.symbol}
                </TableCell>
                <TableCell align="center">
                  {currencyStats.currentPrice}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color:
                      currencyStats.price24hChangePercentage <= 0
                        ? "red"
                        : "green",
                  }}
                >
                  {currencyStats.price24hChangePercentage}%
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color:
                      currencyStats.price7dChangePercentage <= 0
                        ? "red"
                        : "green",
                  }}
                >
                  {currencyStats.price7dChangePercentage}%
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color:
                      currencyStats.price1mthChangePercentage <= 0
                        ? "red"
                        : "green",
                  }}
                >
                  {currencyStats.price1mthChangePercentage}%
                </TableCell>
                <TableCell align="center">{currencyStats.volume}</TableCell>
                <TableCell align="center">{currencyStats.marketCap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
