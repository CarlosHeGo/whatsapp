import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessContext } from '../context/MessContext';
import NavBarComponent from './NavBarComponent';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

test('Muestra todos los contactos en el dropdown "Contactos"', () => {
    const mockContactos = [
        { contacto: "Brandon", mensajes: [] },
        { contacto: "Justin", mensajes: [] },
    ];
    render(
        <MessContext.Provider value={{ contacts: mockContactos }}>
            <MemoryRouter>
                <NavBarComponent />
            </MemoryRouter>
        </MessContext.Provider>
    );

    //El título Contactos está en la barra
    expect(screen.getByText('Contactos')).toBeInTheDocument();

    //expandir el dropdown
    const dropdown = screen.getByRole('button', {name: 'Contactos'});
    userEvent.click(dropdown);
    //Aparecen los nombres de los contactos
    expect(screen.getByText("Brandon")).toBeInTheDocument();
    expect(screen.getByText("Justin")).toBeInTheDocument();
})