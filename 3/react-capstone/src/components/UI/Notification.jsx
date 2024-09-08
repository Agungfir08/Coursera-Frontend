import { useContext } from 'react';
import { ModalContext } from '../context/modalContext';

export default function Notification() {
    const { isOpen, message } = useContext(ModalContext);
    return isOpen ? (
        <h1 className="text-9xl font-bold text-red-700 z-50">Notification</h1>
    ) : null;
}
