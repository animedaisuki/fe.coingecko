import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrencyStats } from "../../api/crypto/crypto";
import { cryptoActions } from "../../store/modules/cryptoSlice";
import headingProperties from "../../utils/tableHeadings";

export default function CurrencyTable() {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const [desc, setDesc] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleSorting = async (sortBy) => {
    setDisabled(true);
    const order = desc ? "desc" : "aesc";
    const result = await getAllCurrencyStats(sortBy, order);
    dispatch(cryptoActions.setCryptoCurrenciesStats(result.data));
    setDesc((prevState) => !prevState);
    setDisabled(false);
  };

  return (
    <div className={styles.tableOuterContainer}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {headingProperties.map((headingProperty) => (
                <TableCell
                  key={headingProperty.name}
                  align={headingProperty.align}
                >
                  <button
                    disabled={disabled}
                    className={styles.headingButton}
                    onClick={() => {
                      handleSorting(headingProperty.query);
                    }}
                  >
                    {headingProperty.name}
                  </button>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {crypto.currenciesStats.map((currencyStats) => (
              <TableRow
                key={currencyStats.symbol}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {currencyStats.rank}
                </TableCell>
                <TableCell align="center" className={styles.tableCell}>
                  <img
                    className={styles.cryptoImg}
                    src={currencyStats.image}
                    alt={currencyStats.symbol}
                  />
                  {currencyStats.symbol}
                </TableCell>
                <TableCell align="right">
                  ${currencyStats.currentPrice}
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
                <TableCell align="right">${currencyStats.volume}</TableCell>
                <TableCell align="right">${currencyStats.marketCap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
