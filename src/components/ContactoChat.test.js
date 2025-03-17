import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MessContext } from "../context/MessContext";
import ContactoChat from './ContactoChat';
import { MemoryRouter, Route, Routes } from "react-router";

test("Muestra los mensajes del contacto en orden cronológico", () => {
    const mockContacts = [
        {
            contacto: "Kelly",
            mensajes: [
                { emisor: "Kelly", contenido: "Hola", timestamp: "2023-10-05T09:00:00Z", estado: "leído" },
                { emisor: "Ryan", contenido: "Hola Kelly", timestamp: "2023-10-05T09:05:00Z", estado: "entregado" },
            ],
        },
    ];
    render(
        <MessContext.Provider value={{ contacts: mockContacts }}>
            <MemoryRouter initialEntries={["/contactos/Kelly"]}>
                <Routes>
                    <Route path="/contactos/:nombre" element={<ContactoChat />} />
                </Routes>
            </MemoryRouter>
        </MessContext.Provider>
    );

    //aparece Kelly en pantalla
    expect(screen.getByRole('img', {name: /Ryan/i})).toBeInTheDocument();
    //aparece el mensaje Hola
    expect(screen.getByText('Hola')).toBeInTheDocument();
});

test("Muestra mensaje 'No encontrado el contacto.' si el contacto no existe", () => {
    const mockContacts = [
        {
            contacto: "Kelly",
            mensajes: [
                { emisor: "Kelly", contenido: "Hola", timestamp: "2023-10-05T09:00:00Z", estado: "leído" },
                { emisor: "Ryan", contenido: "Hola Kelly", timestamp: "2023-10-05T09:05:00Z", estado: "entregado" },
            ],
        },
    ];
    render(
      <MessContext.Provider value={{ contacts: mockContacts }}>
        <MemoryRouter initialEntries={["/contactos/Desconocido"]}>
          <Routes>
            <Route path="/contactos/:nombre" element={<ContactoChat />} />
          </Routes>
        </MemoryRouter>
      </MessContext.Provider>
    );
  
    //se muestra no encontrado
    expect(screen.getByText("No encontrado el contacto.")).toBeInTheDocument();
  });