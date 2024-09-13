import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Reservation from './Reservation';
import { ToastContainer } from 'react-toastify';

describe('Reservation', () => {
    test('should render the component', () => {
        render(<Reservation />);
        expect(screen.getByText('Reservation')).toBeInTheDocument();
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
        expect(screen.getByLabelText('Number of Guests')).toBeInTheDocument();
        expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
        expect(screen.getByLabelText('Date')).toBeInTheDocument();
        expect(screen.getByLabelText('Time')).toBeInTheDocument();
        expect(
            screen.getByLabelText('Special Instruction')
        ).toBeInTheDocument();
    });
    test('shoud display required', async () => {
        render(<Reservation />);
        const button = screen.getByRole('button', { name: /submit/i });

        fireEvent.click(button);

        expect(await screen.findAllByText('Required')).toHaveLength(5);
        expect(
            await screen.findAllByText('Required with max guests is 10')
        ).toHaveLength(1);
    });
    test('should display the toast message', async () => {
        render(
            <div>
                <ToastContainer />
                <Reservation />
            </div>
        );
        const button = screen.getByRole('button', { name: /submit/i });
        fireEvent.change(screen.getByLabelText('Name'), {
            target: { value: 'John Doe' },
        });
        fireEvent.change(screen.getByLabelText('Phone Number'), {
            target: { value: '082348634934' },
        });
        fireEvent.change(screen.getByLabelText('Number of Guests'), {
            target: { value: '5' },
        });
        fireEvent.change(screen.getByLabelText('Occasion'), {
            target: { value: 'Birthday' },
        });
        fireEvent.change(screen.getByLabelText('Date'), {
            target: { value: '2022-01-01' },
        });
        fireEvent.change(screen.getByLabelText('Time'), {
            target: { value: '17:00' },
        });
        fireEvent.change(screen.getByLabelText('Special Instruction'), {
            target: { value: 'No special instruction' },
        });
        fireEvent.click(button);

        expect(
            await screen.findByText(
                /Reservation success|There is something wrong|Server Error/i
            )
        ).toBeInTheDocument();
    });
});
