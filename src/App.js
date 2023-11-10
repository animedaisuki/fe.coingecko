import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/*<Route path="/cryptocurrencies" element={<ChatPage />}>*/}
      {/*  <Route*/}
      {/*    path="/cryptocurrencies/:currencyName/"*/}
      {/*    element={<CurrentDetails />}*/}
      {/*  />*/}
      {/*</Route>*/}
    </Routes>
  );
}

export default App;
