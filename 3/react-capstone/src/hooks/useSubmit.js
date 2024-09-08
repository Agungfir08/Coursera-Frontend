import React, { useState } from 'react';

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export default function useSubmit() {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);

    async function submit(values) {
        const random = Math.random();
        setIsLoading(true);
        try {
            await wait(1000);
            if (random > 0.5) {
                throw new Error('Server error');
            }
            setResponse({ success: true, message: 'Reservation success' });
        } catch (error) {
            setResponse({
                success: false,
                message: 'There is somethong wrong',
            });
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, response, submit };
}
