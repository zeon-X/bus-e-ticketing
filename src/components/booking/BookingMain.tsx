import COLORS from "@constants/COLORS";
import React from "react";
import BookingMainComponent from "./BookingMainComponent";

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
  sold_to: string | null;
}

interface RouteAndFare {
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
  seat_column_left: number;
  seat_column_right: number;
  last_seat_column: number;
  seat_left: Seat[];
  seat_right: Seat[];
  seat_last_row: Seat[];
  route_and_fare: RouteAndFare[];
}

let busData: BusData[] = [
  {
    bus_id: "1",
    name: "EKOTA EXPRESS (706)",
    stopage: [
      {
        stop_id: "1",
        stop_name: "Mohakhali",
        arrival: "8:00 AM",
        hold: true,
      },
      {
        stop_id: "2",
        stop_name: "Khilkhet",
        arrival: "8:20 AM",
        hold: false,
      },
      {
        stop_id: "3",
        stop_name: "Mirjapur",
        arrival: "9:00 AM",
        hold: false,
      },
      {
        stop_id: "4",
        stop_name: "Tangail",
        arrival: "10:00 AM",
        hold: true,
      },
    ],
    type: "Non AC",
    seat_row: 10,
    seat_column_left: 2,
    seat_column_right: 2,
    last_seat_column: 5,
    seat_left: [
      {
        seat_id: "A1",
        status: "Booked",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "A2",
        status: "Sold",
        sold_on: "Online",
        sold_to: null,
      },
      {
        seat_id: "B1",
        status: "Sold",
        sold_on: "Online",
        sold_to: null,
      },
      {
        seat_id: "B2",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },

      {
        seat_id: "C1",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "C2",
        status: "Sold",
        sold_on: "Online",
        sold_to: null,
      },
      {
        seat_id: "D1",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "D2",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },

      {
        seat_id: "E1",
        status: "Booked",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "E2",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "F1",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "F2",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "G1",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "G2",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "H1",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "H2",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },
    ],
    seat_right: [
      {
        seat_id: "A3",
        status: "Booked",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "A4",
        status: "Sold",
        sold_on: "Online",
        sold_to: null,
      },
      {
        seat_id: "B3",
        status: "Sold",
        sold_on: "Online",
        sold_to: null,
      },
      {
        seat_id: "B4",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },

      {
        seat_id: "C3",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "C4",
        status: "Sold",
        sold_on: "Online",
        sold_to: null,
      },
      {
        seat_id: "D3",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "D4",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },

      {
        seat_id: "E3",
        status: "Booked",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "E4",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "F3",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "F4",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "G3",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "G4",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "H3",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
      {
        seat_id: "H4",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },
    ],
    seat_last_row: [
      {
        seat_id: "I1",
        status: "Booked",
        sold_on: "Counter",
        sold_to: null,
      },
      {
        seat_id: "I2",
        status: "Sold",
        sold_on: "Online",
        sold_to: null,
      },
      {
        seat_id: "I3",
        status: "Sold",
        sold_on: "Online",
        sold_to: null,
      },
      {
        seat_id: "I4",
        status: "Sold",
        sold_on: "Counter",
        sold_to: null,
      },

      {
        seat_id: "I5",
        status: "Unsold",
        sold_on: null,
        sold_to: null,
      },
    ],
    route_and_fare: [
      {
        route_id: "1",
        start: "Dhaka",
        dest: "Tangail",
        price: 250,
      },
      {
        route_id: "1",
        start: "Mohakhali",
        dest: "Tangail",
        price: 250,
      },
      {
        route_id: "2",
        start: "Mohakhali",
        dest: "Mirzapur",
        price: 150,
      },
      {
        route_id: "3",
        start: "Mirzapur",
        dest: "Tangail",
        price: 100,
      },
    ],
  },
];

interface BookingQueryProps {
  fromCity: string | undefined;
  toCity: string | undefined;
  doj: string | undefined;
  travelClass: string | undefined;
}

const BookingMain: React.FC<BookingQueryProps> = ({
  fromCity,
  toCity,
  doj,
  travelClass,
}) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.offwhite }}>
      <div className="w-full max-w-[1150px] mx-auto lg:px-0 md:px-6 sm:px-4 py-4 flex lg:flex-row md:flex-col sm:flex-col gap-6">
        <div className="lg:w-auto md:w-full sm:w-full flex flex-col gap-4">
          <div className="bg-secondary p-4 rounded-lg text-xs text-white font-semibold">
            <p>
              Please Note: Other users may be in the process of purchasing
              tickets at this moment. But in case of payment failure, those
              tickets may become available time-to-time.
            </p>
          </div>
          {busData?.map((bus, index) => {
            return (
              <BookingMainComponent
                data={bus}
                routeInfo={{
                  fromCity,
                  toCity,
                  doj,
                  travelClass,
                }}
                key={bus?.bus_id}
              />
            );
          })}
        </div>
        <div className="lg:w-4/12 md:w-full sm:w-full"></div>
      </div>
    </div>
  );
};

export default BookingMain;
