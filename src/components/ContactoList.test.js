import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MessContext } from "../context/MessContext";
import ContactoList from "./ContactoList";
import { MemoryRouter } from "react-router";

test("Muestra la lista de contactos correctamente", () => {
    const mockContactos = [
        { contacto: "Brandon", mensajes: [] },
        { contacto: "Justin", mensajes: [] },
    ];

    render(
        <MessContext.Provider value={{ contacts: mockContactos }}>
            <MemoryRouter>
                <ContactoList />
            </MemoryRouter>
        </MessContext.Provider>
    );

    expect(screen.getByText("Brandon")).toBeInTheDocument();
    expect(screen.getByText("Justin")).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /Brandon/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Justin/i })).toBeInTheDocument();
})