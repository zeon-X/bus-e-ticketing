"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { homeBanner } from '../../../public/assets';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useRouter } from 'next/navigation';
import getDisabledDaysFromPast from '@utils/getDisabledDaysFromPast';

interface FormDataInterface {
    fromStopage: string | undefined;
    toStopage: string | undefined;
    date: Date | null | undefined; // You can use Date or null to represent a nullable date.
    selectedClass: string | undefined;
}







const HomePage = () => {

    const router = useRouter();
    const disabledDays = getDisabledDaysFromPast(14);
    // console.log(disabledDays);

    const [isOpen, toggleOpen] = useState(0);

    const [formData, setFormData] = useState<FormDataInterface>({
        fromStopage: '',
        toStopage: '',
        date: null,
        selectedClass: '',
    });

    const [isWarningVisible, setWarningVisible] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateInputChange = (res: any) => {

        setFormData((prevData: any) => ({
            ...prevData,
            ["date"]: res,
        }));
        toggleOpen(0)

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check if any of the form fields is empty
        if (
            formData.fromStopage === '' ||
            formData.toStopage === '' ||
            formData.date === null ||
            formData.selectedClass === ''
        ) {
            // Display a warning
            setWarningVisible(true);
        } else {
            // All data is filled; you can proceed with form submission
            setWarningVisible(false);
            let date = formData?.date?.toLocaleDateString('en-US', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
            })
            date = date?.replaceAll("/", "-")

            let url = `/booking?fromCity=${formData.fromStopage}&toCity=${formData.toStopage}&doj=${date}&travelClass=${formData.selectedClass}`;

            console.log(url);

            router.push(url)

        }
    };





    return (
        <div className="w-full flex lg:flex-row md:flex-col sm:flex-col gap-6 justify-between items-center ">
            <form onSubmit={handleSubmit} className='w-full  lg:max-w-[546px] md:max-w-full sm:max-w-full'>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 ">
                    <div className="form-control   lg:w-[265px] md:w-full sm:w-full ">
                        <label className="label">
                            <span className="text-[12px]">From</span>
                        </label>
                        <select
                            name="fromStopage"
                            value={formData.fromStopage}
                            onChange={handleInputChange}
                            className="py-2.5 text-[14px] px-4 rounded bg-white border"
                        >
                            <option value="" disabled>
                                From Stopage
                            </option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Tangail">Tangail</option>
                        </select>
                        {isWarningVisible && formData.fromStopage === '' && (
                            <label className="label">
                                <span className="text-[12px] text-red-500">Required</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control   lg:w-[265px] md:w-full sm:w-full ">
                        <label className="label">
                            <span className="text-[12px]">To</span>
                        </label>
                        <select
                            name="toStopage"
                            value={formData.toStopage}
                            onChange={handleInputChange}
                            className="py-2.5 text-[14px] px-4 rounded bg-white border"
                        >
                            <option value="" disabled>
                                To Stopage
                            </option>
                            <option value="Tangail">Tangail</option>
                            <option value="Dhaka">Dhaka</option>
                        </select>
                        {isWarningVisible && formData.toStopage === '' && (
                            <label className="label">
                                <span className="text-[12px] text-red-500">Required</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control   lg:w-[265px] md:w-full sm:w-full ">

                        <label className="label">
                            <span className="text-[12px]">Pick a date</span>
                        </label>

                        <div
                            onClick={() => isOpen == 0 ? toggleOpen(1) : toggleOpen(0)}
                            placeholder="Pick a date"
                            className="py-2 text-[14px] px-4 rounded bg-white border cursor-pointer"
                        >{formData.date ? formData.date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                        }) : "Pick a date"}</div>

                        {
                            isOpen == 1 ? <DayPicker mode="single"
                                selected={formData.date === null ? new Date() : formData.date}
                                onSelect={handleDateInputChange}
                                disabled={disabledDays}
                                style={{ fontSize: "12px" }}

                            /> : <></>
                        }





                        {/* <div className="dropdown  lg:w-[265px] md:w-full sm:w-full">
                            <label tabIndex={0} className="py-2 text-[14px] px-4 rounded bg-white border  m-1  lg:w-[265px] md:w-full sm:w-full">

                                {formData.date ? formData.date.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                }) : "Pick a date"}
                            </label>
                            <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto">
                                <DayPicker mode="single"
                                    selected={formData.date === null ? new Date() : formData.date}
                                    onSelect={handleDateInputChange}
                                    disabled={disabledDays}
                                    style={{ fontSize: "12px" }}

                                />
                            </div>
                        </div> */}







                        {isWarningVisible && formData.date === null && (
                            <label className="label">
                                <span className="text-[12px] text-red-500">Required</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control   lg:w-[265px] md:w-full sm:w-full ">
                        <label className="label">
                            <span className="text-[12px]">Choose a Class</span>
                        </label>
                        <select
                            name="selectedClass"
                            value={formData.selectedClass}
                            onChange={handleInputChange}
                            className="py-2.5 px-4 rounded bg-white  text-[14px] border"
                        >
                            <option value="" disabled>
                                Choose a class
                            </option>
                            <option value="AC">AC</option>
                            <option value="Non-AC">Non AC</option>
                        </select>
                        {isWarningVisible && formData.selectedClass === '' && (
                            <label className="label">
                                <span className="text-[12px] text-red-500">Required</span>
                            </label>
                        )}
                    </div>
                </div>

                <input type="submit" className='mt-8 py-2 rounded w-full text-white bg-primary cursor-pointer hover:bg-success transition-all ease-in-out' value={"Search"} />
            </form>
            <Image src={homeBanner} height={345} width={545} alt="" className='rounded' />
        </div>
    );
};

export default HomePage;
