import { createContext, useState } from 'react';

const ModalContext = createContext({
    onOpen: (success, message) => {},
    onclose: () => {},
});

export default function modalProvider({ children }) {
    const [state, setState] = useState({
        success: false,
        isOpen: false,
        message: null,
    });

    function onOpen(success, message) {
        setState({
            success,
            isOpen: true,
            message,
        });
    }

    function onClose() {
        setState({
            success: false,
            isOpen: false,
            message: null,
        });
    }

    return (
        <ModalContext.Provider
            value={{
                ...state,
                onOpen,
                onClose,
            }}>
            {children}
        </ModalContext.Provider>
    );
}

export { ModalContext };
