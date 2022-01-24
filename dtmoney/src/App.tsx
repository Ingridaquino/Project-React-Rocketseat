import { Header } from "./components/Header/Header";
import { Dashboard } from "./Dashboard";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
        <Header />
        <Dashboard />
        <GlobalStyle />   
    </>
  );
}