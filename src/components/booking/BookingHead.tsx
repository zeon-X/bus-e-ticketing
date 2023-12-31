"use client";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useRouter } from "next/navigation";
import getDisabledDaysFromPast from "@utils/getDisabledDaysFromPast";
import COLORS from "@constants/COLORS";
import { LEFT_ARROW, RIGHT_ARROW } from "../../../public/assets/svg-index";
import Image from "next/image";
import { busIcon1 } from "../../../public/assets";

interface FormDataInterface {
  fromStopage: string | undefined;
  toStopage: string | undefined;
  date: Date | null | undefined; // You can use Date or null to represent a nullable date.
  selectedClass: string | undefined;
}

interface BookingQueryProps {
  fromCity: string | undefined;
  toCity: string | undefined;
  doj: string | undefined;
  travelClass: string | undefined;
}

const BookingHead: React.FC<BookingQueryProps> = ({
  fromCity,
  toCity,
  doj,
  travelClass,
}) => {
  const router = useRouter();
  const disabledDays = getDisabledDaysFromPast(14);
  // console.log(disabledDays);
  const [isOpen, toggleOpen] = useState(0);
  const [isModifySearchOpen, setModifySearchOpen] = useState(0);

  const [formData, setFormData] = useState<FormDataInterface>({
    fromStopage: fromCity,
    toStopage: toCity,
    date: new Date(Date.parse(doj?.replaceAll("-", "/") || "0")),
    selectedClass: travelClass,
  });

  useEffect(() => {
    let dateStrToMili = Date.parse(doj?.replaceAll("-", "/") || "0");
    // console.log(doj);
    setFormData({
      fromStopage: fromCity,
      toStopage: toCity,
      date: new Date(dateStrToMili),
      selectedClass: travelClass,
    });
  }, [fromCity, toCity, doj, travelClass]);

  const [isWarningVisible, setWarningVisible] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateInputChange = (res: any) => {
    // console.log(typeof res);
    // console.log(res);

    setFormData((prevData: any) => ({
      ...prevData,
      ["date"]: res,
    }));
    toggleOpen(0);
  };

  const handleChangeDateToNextDay = () => {
    // Clone the current date from formData
    let x = formData;
    let tempDate = x.date;

    // Add one day to the date
    if (tempDate != null || tempDate != undefined) {
      const today = new Date();
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

      const dateDifference = Math.floor(
        (tempDate.getTime() - today.getTime()) / oneDay
      );

      if (dateDifference < 7) {
        // Increment the date
        tempDate.setDate(tempDate.getDate() + 1);

        let date = tempDate?.toLocaleDateString("en-US", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        });
        date = date?.replaceAll("/", "-");

        let url = `/booking?fromCity=${formData.fromStopage}&toCity=${formData.toStopage}&doj=${date}&travelClass=${formData.selectedClass}`;

        router.push(url);
      } else {
        // Handle the case where the date difference is more than 7 days
        console.log("Date difference is more than 7 days.");
      }
    }
  };

  const handleChangeDateToPrevDay = () => {
    // Clone the current date from formData
    let x = formData;
    let tempDate = x.date;

    // Add one day to the date
    if (tempDate != null || tempDate != undefined) {
      const today = new Date();
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

      const dateDifference = Math.floor(
        (tempDate.getTime() - today.getTime()) / oneDay
      );

      if (dateDifference > -1) {
        // Increment the date
        tempDate.setDate(tempDate.getDate() - 1);

        let date = tempDate?.toLocaleDateString("en-US", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        });
        date = date?.replaceAll("/", "-");

        let url = `/booking?fromCity=${formData.fromStopage}&toCity=${formData.toStopage}&doj=${date}&travelClass=${formData.selectedClass}`;

        router.push(url);
      } else {
        // Handle the case where the date difference is more than 7 days
        console.log("Can not select expired days.");
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if any of the form fields is empty
    if (
      formData.fromStopage === "" ||
      formData.toStopage === "" ||
      formData.date === null ||
      formData.selectedClass === ""
    ) {
      // Display a warning
      setWarningVisible(true);
    } else {
      // All data is filled; you can proceed with form submission
      setWarningVisible(false);
      let date = formData?.date?.toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      });
      date = date?.replaceAll("/", "-");

      let url = `/booking?fromCity=${formData.fromStopage}&toCity=${formData.toStopage}&doj=${date}&travelClass=${formData.selectedClass}`;

      console.log(url);

      router.push(url);
    }
  };

  return (
    <div className="">
      {isModifySearchOpen === 0 ? (
        <div style={{ backgroundColor: `${COLORS.offwhite2}` }}>
          <div className="w-full max-w-[1150px] mx-auto lg:px-0 md:px-6 sm:px-4 py-12">
            <div className=" flex lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-6 ">
              <div className="flex justify-center items-center gap-2">
                <div>
                  <Image
                    src={busIcon1}
                    width={60}
                    height={60}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold ">
                    {fromCity} - {toCity}
                  </p>
                  <p className="text-sm ">
                    {formData?.date?.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleChangeDateToPrevDay}
                  className="px-4 py-2.5 bg-white rounded-tl-3xl rounded-bl-3xl text-xs font-semibold flex justify-center items-center"
                >
                  <div className="h-[24px] w-[24px]">{LEFT_ARROW}</div>
                  PREV. DAY
                </button>
                <button
                  onClick={handleChangeDateToNextDay}
                  className="px-4 py-2.5  bg-white rounded-tr-3xl rounded-br-3xl text-xs font-semibold flex justify-center items-center"
                >
                  NEXT DAY
                  <div className="h-[24px] w-[24px]">{RIGHT_ARROW}</div>
                </button>
              </div>

              <div>
                <button
                  onClick={() => setModifySearchOpen(1)}
                  className="px-6 py-3 bg-white rounded-3xl text-sm font-semibold"
                >
                  MODIFY SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="w-full  max-w-[1150px] mx-auto lg:px-0 md:px-6 sm:px-4 py-12">
            <div>
              <form onSubmit={handleSubmit} className="w-full ">
                <div className="  grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4">
                  <div className="form-control    w-full ">
                    <label className="label">
                      <span className="text-[10px] text-gray-500">From</span>
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
                    {isWarningVisible && formData.fromStopage === "" && (
                      <label className="label">
                        <span className="text-[10px]  text-red-500">
                          Required
                        </span>
                      </label>
                    )}
                  </div>

                  <div className="form-control    w-full ">
                    <label className="label">
                      <span className="text-[10px] text-gray-500">To</span>
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
                    {isWarningVisible && formData.toStopage === "" && (
                      <label className="label">
                        <span className="text-[10px]  text-red-500">
                          Required
                        </span>
                      </label>
                    )}
                  </div>

                  <div className="form-control    w-full ">
                    <label className="label">
                      <span className="text-[10px] text-gray-500">
                        Date of Journey
                      </span>
                    </label>

                    <div
                      onClick={() =>
                        isOpen == 0 ? toggleOpen(1) : toggleOpen(0)
                      }
                      placeholder="Pick a date"
                      className="py-2 text-[14px] px-4 rounded bg-white border cursor-pointer"
                    >
                      {formData?.date
                        ? formData?.date?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          })
                        : "Pick a date"}
                    </div>

                    {isOpen == 1 ? (
                      <DayPicker
                        mode="single"
                        selected={
                          formData.date === null ? new Date() : formData.date
                        }
                        onSelect={handleDateInputChange}
                        disabled={disabledDays}
                        style={{ fontSize: "12px" }}
                      />
                    ) : (
                      <></>
                    )}

                    {isWarningVisible && formData.date === null && (
                      <label className="label">
                        <span className="text-[10px]  text-red-500">
                          Required
                        </span>
                      </label>
                    )}
                  </div>

                  <div className="form-control    w-full ">
                    <label className="label">
                      <span className="text-[10px] text-gray-500">
                        Choose a Class
                      </span>
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
                    {isWarningVisible && formData.selectedClass === "" && (
                      <label className="label">
                        <span className="text-[10px]  text-red-500">
                          Required
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="form-control    w-full ">
                    <label
                      className="label"
                      onClick={() => setModifySearchOpen(0)}
                    >
                      <span className="text-[10px]  text-primary">Close</span>
                    </label>
                    <input
                      type="submit"
                      className=" py-2.5 rounded w-full text-white bg-primary cursor-pointer hover:bg-secondary transition-all ease-in-out text-[12px]"
                      value={"Modify Search"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingHead;
