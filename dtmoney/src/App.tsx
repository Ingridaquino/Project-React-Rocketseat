import { Header } from "./components/Header/Header";
import { Dashboard } from "./Dashboard";

import { GlobalStyle } from "./styles/global";
import { TransactionsTable } from "./TransactionsTable";

export function App() {
  return (
    <>
        <Header />
        <Dashboard />
        <GlobalStyle />   
    </>
  );
}
