import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root'); // Acessibilidade, para o Modal não ficar no body
 


export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal (){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal (){
        setIsNewTransactionModalOpen(false)
    }

  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        
        <Dashboard />

        <NewTransactionModal isOpen= {isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />   
    </>
  );
}
