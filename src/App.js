import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/*<Route path="/cryptocurrencies" element={<ChatPage />}>*/}
        {/*  <Route*/}
        {/*    path="/cryptocurrencies/:currencyName/"*/}
        {/*    element={<CurrentDetails />}*/}
        {/*  />*/}
        {/*</Route>*/}
      </Routes>
    </Provider>
  );
}

export default App;
