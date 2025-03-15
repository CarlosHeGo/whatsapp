import React, { createContext, useEffect, useState } from 'react'

export const MessContext = createContext();

export const MessProvider = ({ children }) => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async() => {
            const response = await fetch('/mensajes.json');
            const data = await response.json();
            setContacts(data.chats);
        }
        fetchContacts();
    }, []);

    return (
        <MessContext.Provider value={{contacts}}>
            {children}
        </MessContext.Provider>
    )
}
