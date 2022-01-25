import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";

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

        <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
            <h2>Cadastra transações</h2>
        </Modal>

        <GlobalStyle />   
    </>
  );
}
