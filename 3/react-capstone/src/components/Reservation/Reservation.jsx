import { useFormik } from 'formik';
import Input from '../UI/Input';
import * as Yup from 'yup';
import Dropdown from '../UI/Dropdown';
import Button from '../UI/Button';
import { useReducer as reducer, initialState } from '../../hooks/useReducer';
import { useReducer } from 'react';
import useSubmit from '../../hooks/useSubmit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Reservation() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { response, submit } = useSubmit();

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            guest: '',
            time: '',
            date: '',
            occasion: '',
            instruction: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            phone: Yup.number().required('Required'),
            guest: Yup.number()
                .min(1)
                .max(10)
                .required('Required with max guests is 10'),
            time: Yup.string().required('Required'),
            date: Yup.date().required('Required'),
            occasion: Yup.string().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            selectTime();
            submit(values);
            resetForm();
            handleResponse(response);
            console.log(response);
        },
    });

    function handleResponse(response) {
        if (response) {
            if (response.success) {
                toast.success(response?.message, {
                    position: 'top-center',
                    autoClose: 2500,
                });
            } else {
                toast.error(response?.message, {
                    position: 'top-center',
                    autoClose: 2500,
                });
            }
        } else {
            toast.error('Server Error', {
                position: 'top-center',
                autoClose: 2500,
            });
        }
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        formik.setFieldValue('date', selectedDate);
        dispatch({ type: 'AVAILABLE_TIME', payload: selectedDate });
    };

    const selectTime = () => {
        dispatch({ type: 'SELECT_TIME', payload: formik.values.time });
    };

    return (
        <section className="bg-[--green]">
            <div className="flex flex-col gap-8 container mx-auto xl:px-40 lg:px-16 py-8">
                <h1 className="font-[Markazi] text-6xl font-bold text-[--yellow]">
                    Reservation
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <Input
                                text="Name"
                                type="text"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.errors.name}
                                placeholder={'Enter your name'}
                            />

                            <Input
                                text="Phone Number"
                                type="number"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.errors.phone}
                                placeholder="08XXXXXXX"
                                inputMode="numeric"
                            />
                        </div>
                        <div className="flex justify-between">
                            <Input
                                text="Number of Guests"
                                type="number"
                                name="guest"
                                value={formik.values.guest}
                                onChange={formik.handleChange}
                                error={formik.errors.guest}
                                placeholder="e.g. 2"
                                inputMode="numeric"
                            />
                            <Dropdown
                                name="time"
                                text="Time"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                error={formik.errors.time}
                                option={state.availableTimes}
                            />
                        </div>
                        <div className="flex justify-between">
                            <Input
                                text="Date"
                                type="date"
                                name="date"
                                value={formik.values.date}
                                onChange={handleDateChange}
                                error={formik.errors.date}
                                placeholder="Select date"
                            />
                            <Dropdown
                                name="occasion"
                                text="Occasion"
                                value={formik.values.occasion}
                                onChange={formik.handleChange}
                                option={['Birthday', 'Wedding', 'Anniversary']}
                                error={formik.errors.occasion}
                            />
                        </div>
                        <div className="flex flex-col gap-2 font-[Karla]">
                            <label
                                htmlFor="instruction"
                                className="text-white text-lg font-bold">
                                Special Instruction
                            </label>
                            <textarea
                                id="instruction"
                                value={formik.values.instruction}
                                onChange={formik.handleChange}
                                className="rounded-lg border-2 border-gray-300 px-4 py-2 active:outline-none focus:outline-gray-400 h-[150px]"
                                placeholder="Instruction"
                            />
                        </div>
                        <div className=" self-end">
                            <Button text="Submit" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
