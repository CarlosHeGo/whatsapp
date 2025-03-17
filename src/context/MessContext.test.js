import React, { useContext } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MessContext, MessProvider } from "../context/MessContext";

const fakeContacts = {
  chats: [
    { contacto: "Juan", mensajes: [{ emisor: "Juan", contenido: "Hola!" }] },
    { contacto: "Maria", mensajes: [{ emisor: "Maria", contenido: "¿Cómo estás?" }] }
  ]
};

const TestComponent = () => {
  const { contacts } = useContext(MessContext);
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>{contact.contacto}</li>
      ))}
    </ul>
  );
};

describe("MessProvider", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: jest.fn().mockResolvedValue(fakeContacts)
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Carga los contactos correctamente desde el JSON", async () => {
    render(
      <MessProvider>
        <TestComponent />
      </MessProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Juan")).toBeInTheDocument();
    });

    await waitFor(() => {
        expect(screen.getByText("Maria")).toBeInTheDocument();
      });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("/mensajes.json");
  });
});