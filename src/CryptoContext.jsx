import { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("EUR");
  const [currencySymbol, setCurrencySymbol] = useState("€");

  useEffect(() => {
    currency === "EUR" ? setCurrencySymbol("€") : setCurrencySymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, currencySymbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export const CryptoState = () => useContext(Crypto);
export default CryptoContext;
