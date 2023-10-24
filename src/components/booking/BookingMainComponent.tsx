"use client";
import COLORS from "@constants/COLORS";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { seatIcon, streeing } from "../../../public/assets";
import { DOWN_ARROW, UP_ARROW } from "../../../public/assets/svg-index";

interface Seat {
  seat_id: string;
  status: "Booked" | "Sold" | "Unsold" | "Selected";
  sold_on: "Counter" | "Online" | null;
  sold_to: string | null;
}

interface RouteAndFare {
  route_id: string;
  start: string;
  dest: string;
  price: number;
  departure: string;
  arrival: string;
}

interface BusData {
  bus_id: string;
  name: string;
  type: string;
  seat_row: number;
  seat_column_left: number;
  seat_column_right: number;
  last_seat_column: number;
  seat_left: Seat[];
  seat_right: Seat[];
  seat_last_row: Seat[];
  route_and_fare: RouteAndFare[];
}

interface BookingQueryProps {
  fromCity: string | undefined;
  toCity: string | undefined;
  doj: string | undefined;
  travelClass: string | undefined;
}

interface BookingMainComponentProps {
  data: BusData;
  routeInfo: BookingQueryProps;
}

function getNumberOfUnsoldSeats(busData: BusData) {
  let unsoldSeats = 0;

  if (busData) {
    busData.seat_left.forEach((seat) => {
      if (seat.status === "Unsold") {
        unsoldSeats++;
      }
    });

    busData.seat_right.forEach((seat) => {
      if (seat.status === "Unsold") {
        unsoldSeats++;
      }
    });

    busData.seat_last_row.forEach((seat) => {
      if (seat.status === "Unsold") {
        unsoldSeats++;
      }
    });
  }

  return unsoldSeats;
}

// Usage:

const BookingMainComponent: React.FC<BookingMainComponentProps> = ({
  data,
  routeInfo,
}) => {
  const [isWide, setWide] = useState(0);
  const [requiredRoute, setRequiredRoute] = useState<RouteAndFare>({
    route_id: "",
    start: "",
    dest: "",
    price: 0,
    departure: "",
    arrival: "",
  });
  const [noOfSelectedSeats, setNoOfSelectedSeats] = useState(0);
  const [seatsLeft, setSeatsLeft] = useState(data?.seat_left);
  const [seatsRight, setSeatsRight] = useState(data?.seat_right);
  const [seatsLastTow, setSeatsLastRow] = useState(data?.seat_last_row);

  const handleSelectSeatLeft = (seat_index: number) => {
    let tempSelectedSeats = seatsLeft;
    // console.log(seat_index);

    tempSelectedSeats?.map((x, index) => {
      if (index == seat_index && x != undefined) {
        if (x.status == "Selected") {
          x.status = "Unsold";
          setNoOfSelectedSeats((current) => current - 1);
        } else {
          x.status = "Selected";
          setNoOfSelectedSeats((current) => current + 1);
        }
      }
    });

    let finalSelectedSeats: Seat[] = [];
    tempSelectedSeats?.map((x) => finalSelectedSeats.push(x));

    // console.log(tempSelectedSeats);

    setSeatsLeft(finalSelectedSeats);
  };
  const handleSelectSeatRight = (seat_index: number) => {
    let tempSelectedSeats = seatsRight;
    // console.log(seat_index);

    tempSelectedSeats?.map((x, index) => {
      if (index == seat_index && x != undefined) {
        if (x.status == "Selected") {
          x.status = "Unsold";
          setNoOfSelectedSeats((current) => current - 1);
        } else {
          x.status = "Selected";
          setNoOfSelectedSeats((current) => current + 1);
        }
      }
    });

    let finalSelectedSeats: Seat[] = [];
    tempSelectedSeats?.map((x) => finalSelectedSeats.push(x));

    // console.log(tempSelectedSeats);

    setSeatsRight(finalSelectedSeats);
  };
  const handleSelectSeatLastRow = (seat_index: number) => {
    let tempSelectedSeats = seatsLastTow;
    // console.log(seat_index);

    tempSelectedSeats?.map((x, index) => {
      if (index == seat_index && x != undefined) {
        if (x.status == "Selected") {
          x.status = "Unsold";
          setNoOfSelectedSeats((current) => current - 1);
        } else {
          x.status = "Selected";
          setNoOfSelectedSeats((current) => current + 1);
        }
      }
    });

    let finalSelectedSeats: Seat[] = [];
    tempSelectedSeats?.map((x) => finalSelectedSeats.push(x));

    // console.log(tempSelectedSeats);

    setSeatsLastRow(finalSelectedSeats);
  };

  useEffect(() => {
    let tempRes = data?.route_and_fare?.find(
      (x) => x?.start == routeInfo?.fromCity && x?.dest == routeInfo?.toCity
    );

    console.log(tempRes);

    if (tempRes != undefined) setRequiredRoute(tempRes);
  }, [routeInfo]);

  return (
    <div>
      <button
        onClick={() => {
          isWide === 0 ? setWide(1) : setWide(0);
        }}
        className=" w-full cursor-pointer rounded-lg text-xs  bg-white  shadow-sm"
      >
        <div className="p-4 flex justify-between items-center text-secondary  ">
          <p className="uppercase font-bold">{data?.name}</p>
          <div className="btn btn-circle">
            {isWide === 0 ? (
              <div className="h-[24px] w-[24px]">{UP_ARROW}</div>
            ) : (
              <div className="h-[24px] w-[24px]">{DOWN_ARROW}</div>
            )}
          </div>
        </div>
      </button>
      {isWide === 1 && (
        <>
          <div className="w-full flex justify-between items-center ">
            <div className="w-8/12 py-4 px-6  flex justify-between items-center">
              <div className="w-auto">
                <p className="font-semibold text-xs">{requiredRoute?.start}</p>
                <p className=" text-xs">{requiredRoute?.departure}</p>
              </div>

              <div className="w-4/12 mx-auto border border-dashed rounded-full"></div>
              <div className="w-auto">
                <p className="font-semibold text-xs">{requiredRoute?.dest}</p>
                <p className=" text-xs">{requiredRoute?.arrival}</p>
              </div>
            </div>
            <div className="w-4/12 p-4 border-l flex justify-center items-center ">
              <Image src={seatIcon} width={32} height={32} alt="" />
              <p className="  text-xs font-semibold">
                Seat Available: {getNumberOfUnsoldSeats(data)}
              </p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-bl-lg rounded-br-lg border-2">
            <p className="mb-8 text-xs">
              To know seat number(s), rest the cursor on your desired seat(s).
              Click on it to select or deselect.
            </p>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
              {/* SEAT SELECTION */}
              <div className="w-full text-xs">
                {/* INTODUCE WITH SEAT STATUS */}
                <div className="flex justify-between items-center gap-4 text-[12px] mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-[28px] w-[28px] bg-white border rounded-lg" />
                    <p>Available</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-[28px] w-[28px] bg-secondary border rounded-lg " />
                    <p>Sold</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-[28px] w-[28px] bg-primary border rounded-lg " />
                    <p>Selected</p>
                  </div>
                </div>
                {/* SEAT SELECTION */}

                <div className="p-6 border rounded-lg ">
                  <div className="flex justify-between items-center mb-6">
                    <div />{" "}
                    <Image
                      src={streeing}
                      height={42}
                      width={42}
                      alt="driver"
                    ></Image>
                  </div>
                  <div className="flex gap-6 justify-between items-end mb-4">
                    {/* LEFT SEATS */}
                    <div
                      style={{
                        gridTemplateColumns: `repeat(${
                          data?.seat_column_left || 2
                        }, minmax(0, 1fr))`,
                      }}
                      className="grid   gap-4"
                    >
                      {seatsLeft?.map((seat, index) => {
                        return (
                          <div key={index} className="text-[10px]">
                            {seat?.status == "Sold" ||
                            seat?.status == "Booked" ? (
                              <button
                                className={
                                  "h-[42px] w-[42px] bg-secondary border-2 rounded-lg"
                                }
                                disabled={true}
                              >
                                <p className=" text-center mt-2 font-bold">
                                  {seat?.seat_id}
                                </p>
                              </button>
                            ) : (
                              <button
                                className={
                                  seat?.status == "Unsold"
                                    ? "h-[42px] w-[42px] bg-white border-2 rounded-lg"
                                    : "h-[42px] w-[42px] bg-primary text-white border-2 rounded-lg"
                                }
                                onClick={() => {
                                  handleSelectSeatLeft(index);
                                }}
                              >
                                <p className=" text-center mt-2 font-bold">
                                  {seat?.seat_id}
                                </p>
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/*RIGHT SEATS  */}
                    <div
                      style={{
                        gridTemplateColumns: `repeat(${
                          data?.seat_column_right || 2
                        }, minmax(0, 1fr))`,
                      }}
                      className="grid   gap-4"
                    >
                      {seatsRight?.map((seat, index) => {
                        return (
                          <div key={index} className="text-[10px]">
                            {seat?.status == "Sold" ||
                            seat?.status == "Booked" ? (
                              <button
                                className={
                                  "h-[42px] w-[42px] bg-secondary border-2 rounded-lg"
                                }
                                disabled={true}
                              >
                                <p className=" text-center mt-2 font-bold">
                                  {seat?.seat_id}
                                </p>
                              </button>
                            ) : (
                              <button
                                className={
                                  seat?.status == "Unsold"
                                    ? "h-[42px] w-[42px] bg-white border-2 rounded-lg"
                                    : "h-[42px] w-[42px] bg-primary text-white border-2 rounded-lg"
                                }
                                onClick={() => {
                                  handleSelectSeatRight(index);
                                }}
                              >
                                <p className=" text-center mt-2 font-bold">
                                  {seat?.seat_id}
                                </p>
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* LAST ROW */}

                  <div
                    style={{
                      gridTemplateColumns: `repeat(${
                        data?.last_seat_column || 1
                      }, minmax(0, 1fr))`,
                    }}
                    className="grid gap-4 mx-auto  justify-center items-center"
                  >
                    {seatsLastTow?.map((seat, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[10px] flex justify-center items-center"
                        >
                          {seat?.status == "Sold" ||
                          seat?.status == "Booked" ? (
                            <button
                              className={
                                "h-[42px] w-[42px] bg-secondary border-2 rounded-lg"
                              }
                              disabled={true}
                            >
                              <p className=" text-center mt-2 font-bold">
                                {seat?.seat_id}
                              </p>
                            </button>
                          ) : (
                            <button
                              className={
                                seat?.status == "Unsold"
                                  ? "h-[42px] w-[42px] bg-white border-2 rounded-lg"
                                  : "h-[42px] w-[42px] bg-primary text-white border-2 rounded-lg"
                              }
                              onClick={() => {
                                handleSelectSeatLastRow(index);
                              }}
                            >
                              <p className=" text-center mt-2 font-bold">
                                {seat?.seat_id}
                              </p>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* FARE */}
              <div
                className="w-full rounded-lg p-6 lg:mt-10 md:mt-10 sm:mt-auto"
                style={{ backgroundColor: `${COLORS.bgSecondary}` }}
              >
                <p className="text-lg font-bold mb-6">Seat Details</p>

                <div className="flex flex-col gap-4">
                  <div className="flex  justify-between items-center">
                    <p className="text-gray-500 font-semibold text-xs">Seats</p>
                    <p className="text-gray-500 font-semibold text-xs">Fare</p>
                  </div>

                  {seatsLeft?.map((x, index) => {
                    if (x.status == "Selected")
                      return (
                        <div className="flex  justify-between items-center">
                          <p className="text-xs">{x?.seat_id}</p>
                          <p className="text-xs"> ৳{requiredRoute?.price}.00</p>
                        </div>
                      );
                  })}
                  {seatsRight?.map((x, index) => {
                    if (x.status == "Selected")
                      return (
                        <div className="flex  justify-between items-center">
                          <p className="text-xs">{x?.seat_id}</p>
                          <p className="text-xs">৳ {requiredRoute?.price}.00</p>
                        </div>
                      );
                  })}
                  {seatsLastTow?.map((x, index) => {
                    if (x.status == "Selected")
                      return (
                        <div className="flex  justify-between items-center">
                          <p className="text-xs">{x?.seat_id}</p>
                          <p className="text-xs">৳ {requiredRoute?.price}.00</p>
                        </div>
                      );
                  })}
                </div>

                <div className="py-1.5 px-2 flex justify-between border-2 my-6 w-full">
                  <div />
                  <p className="text-primary">
                    Total: ৳ {noOfSelectedSeats * requiredRoute?.price || 0}
                  </p>
                </div>

                <button className="bg-primary rounded-full py-3 px-6 mb-4 w-full text-white text-[14px] font-semibold uppercase">
                  CONTINUE PURCHASE
                </button>

                <div className="flex justify-between ">
                  <div />
                  <button
                    onClick={() => setWide(0)}
                    className="text-primary text-[12px]"
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingMainComponent;
