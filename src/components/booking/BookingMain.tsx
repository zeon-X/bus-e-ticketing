import React from 'react';

let busData = [
    {
        bus_id: "1",
        name: "EKOTA EXPRESS (706)",
        stopage: [
            {
                stop_id: "1",
                stop_name: "Mohakhali",
                arrival: "8:00 AM",
                hold: true
            },
            {
                stop_id: "2",
                stop_name: "Khilkhet",
                arrival: "8:20 AM",
                hold: false
            },
            {
                stop_id: "3",
                stop_name: "Mirjapur",
                arrival: "9:00 AM",
                hold: false
            },
            {
                stop_id: "4",
                stop_name: "Tangail",
                arrival: "10:00 AM",
                hold: true
            },
        ],
        type: "Non AC",
        seat_row: 10,
        seat_column: 4,
        last_seat_column: 5,
        seat: [
            [
                {
                    seat_id: "A1",
                    status: "Booked",
                    sold_on: "Counter"
                },
                {
                    seat_id: "A2",
                    status: "Sold",
                    sold_on: "Online"
                },
                {
                    seat_id: "A3",
                    status: "Sold",
                    sold_on: "Online"
                },
                {
                    seat_id: "A4",
                    status: "Sold",
                    sold_on: "Counter"
                }
            ],
            [
                {
                    seat_id: "B1",
                    status: "Unsold",
                    sold_on: null
                },
                {
                    seat_id: "B2",
                    status: "Sold",
                    sold_on: "Online"
                },
                {
                    seat_id: "B3",
                    status: "Unsold",
                    sold_on: null
                },
                {
                    seat_id: "B4",
                    status: "Sold",
                    sold_on: "Counter"
                },
            ],
            [
                {
                    seat_id: "C1",
                    status: "Booked",
                    sold_on: "Counter"
                },
                {
                    seat_id: "C2",
                    status: "Unsold",
                    sold_on: null
                },
                {
                    seat_id: "C3",
                    status: "Unsold",
                    sold_on: null
                },
                {
                    seat_id: "C4",
                    status: "Sold",
                    sold_on: "Counter"
                },
            ],
        ],
        route_and_price: [
            {
                route_id: "1",
                start: "Mohakhali",
                dest: "Tangail",
                price: 250
            },
            {
                route_id: "2",
                start: "Mohakhali",
                dest: "Mirzapur",
                price: 150
            },
            {
                route_id: "3",
                start: "Mirzapur",
                dest: "Tangail",
                price: 100
            },

        ],

    }
]

const BookingMain = () => {

    return (
        <div className='bg-white'>

        </div>
    );
};

export default BookingMain;