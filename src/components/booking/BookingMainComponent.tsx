"use client";
import React, { useEffect, useState } from "react";

interface Stopage {
  stop_id: string;
  stop_name: string;
  arrival: string;
  hold: boolean;
}

interface Seat {
  seat_id: string;
  status: "Booked" | "Sold" | "Unsold" | "Selected";
  sold_on: "Counter" | "Online" | null;
}

interface RouteAndPrice {
  route_id: string;
  start: string;
  dest: string;
  price: number;
}

interface BusData {
  bus_id: string;
  name: string;
  stopage: Stopage[];
  type: string;
  seat_row: number;
  seat_column: number;
  last_seat_column: number;
  seat: Seat[];
  route_and_price: RouteAndPrice[];
}

interface BookingMainComponentProps {
  data: BusData;
}

const BookingMainComponent: React.FC<BookingMainComponentProps> = ({
  data,
}) => {
  const [isWide, setWide] = useState(0);

  let selectedSeats = data?.seat;

  const handleSelectSeat = (seat_index: number) => {
    console.log(seat_index);

    if (selectedSeats[seat_index].status == "Selected") {
      selectedSeats[seat_index].status = "Unsold";
    } else {
      selectedSeats[seat_index].status == "Selected";
    }

    console.log(selectedSeats);
  };

  return (
    <div>
      <button
        onClick={() => {
          isWide === 0 ? setWide(1) : setWide(0);
        }}
        className="p-4 w-full cursor-pointer rounded-tl-lg rounded-tr-lg text-xs text-secondary bg-white font-semibold flex justify-between items-center"
      >
        <p className="uppercase font-bold">{data?.name}</p>
        <div>{isWide === 0 ? "Open" : "false"}</div>
      </button>
      {isWide === 1 && (
        <div className="p-4 bg-white rounded-bl-lg rounded-br-lg border-2">
          <p className="mb-4 text-xs">
            To know seat number(s), rest the cursor on your desired seat(s).
            Click on it to select or deselect.
          </p>
          <div className=" flex lg:flex-row md:flex-row sm:flex-col gap-6">
            {/* SEAT SELECTION */}
            <div className="lg:w-7/12 md:w-7/12 sm:w-full text-xs">
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

              <div className="p-6 border rounded-lg  grid grid-cols-4 justify-center items-center gap-4">
                {selectedSeats?.map((seat, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[10px] flex flex-col justify-center items-center"
                    >
                      {seat?.status == "Sold" || seat?.status == "Booked" ? (
                        <button
                          className={
                            "h-[48px] w-[48px] bg-secondary border-2 rounded-lg"
                          }
                          disabled={true}
                        />
                      ) : (
                        <button
                          className={
                            seat?.status == "Unsold"
                              ? "h-[48px] w-[48px] bg-white border-2 rounded-lg"
                              : "h-[48px] w-[48px] bg-green-500 border-2 rounded-lg"
                          }
                          onClick={() => {
                            handleSelectSeat(index);
                          }}
                        />
                      )}

                      <p className="text-center mt-2 font-bold">
                        {seat?.seat_id}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FARE */}
            <div className="lg:w-auto md:w-auto sm:w-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingMainComponent;
