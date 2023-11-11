import React, { useEffect } from "react";
import styles from "./Homepage.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";
import { getAllCurrencyStats } from "../../api/crypto/crypto";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cryptoActions } from "../../store/modules/cryptoSlice";

export default function Homepage() {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (crypto.currenciesStats.length > 0) {
      return;
    }
    const fetchCurrencies = async () => {
      const result = await getAllCurrencyStats();
      dispatch(cryptoActions.setCryptoCurrenciesStats(result.data));
    };
    fetchCurrencies();
  }, [dispatch]);

  useEffect(() => {
    console.log(crypto.currenciesStats);
    console.log(crypto.currenciesStats.length);
  }, [crypto.currenciesStats]);

  return (
    <>
      <Navbar />
      {crypto.currenciesStats.length > 0 ? (
        <>
          <Heading />
          <CurrencyTable />
        </>
      ) : (
        <div className={styles.loadingBarContainer}>
          <CircularProgress size={100} sx={{ marginTop: 30 }} />
        </div>
      )}
    </>
  );
}
