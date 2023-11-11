const headingProperties = [
  { name: "#", query: "rank", align: "left" },
  { name: "Coin", query: "symbol", align: "left" },
  { name: "Price", query: "currentPrice", align: "right" },
  { name: "24h", query: "price24hChangePercentage", align: "center" },
  { name: "7d", query: "price7dChangePercentage", align: "center" },
  { name: "1mth", query: "price1mthChangePercentage", align: "center" },
  { name: "24h Vol", query: "volume", align: "right" },
  { name: "Mkt Cap", query: "marketCap", align: "right" },
];

export default headingProperties;
