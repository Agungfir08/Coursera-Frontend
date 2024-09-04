import { useFormik } from 'formik';
import Input from '../UI/Input';
import * as Yup from 'yup';
import Dropdown from '../UI/Dropdown';
import Button from '../UI/Button';

export default function Reservation() {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            guest: '',
            email: '',
            date: '',
            occasion: '',
            instruction: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            phone: Yup.number().required('Required'),
            guest: Yup.number().required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            date: Yup.date().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log('Successfully submitted');
            resetForm();
        },
    });

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
                                placeholder={'Enter your name'}
                            />

                            <Input
                                text="Phone Number"
                                type="number"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
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
                                placeholder="e.g. 2"
                                inputMode="numeric"
                            />
                            <Input
                                text="Email"
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex justify-between">
                            <Input
                                text="Date"
                                type="date"
                                name="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                placeholder="Select date"
                            />
                            <Dropdown
                                name="occasion"
                                text="Occasion"
                                value={formik.values.occasion}
                                onChange={formik.handleChange}
                                option={['Birthday', 'Wedding', 'Anniversary']}
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
