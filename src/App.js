import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { MessProvider } from './context/MessContext';
import ContactoList from './components/ContactoList';
import ContactoChat from './components/ContactoChat';
import NavBarComponent from "./components/NavBarComponent";

function App() {
  return (
    <MessProvider>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<ContactoList />} />
          <Route path="/contactos/:nombre" element={<ContactoChat />} />
        </Routes>
      </BrowserRouter>
    </MessProvider>
  );
}

export default App;