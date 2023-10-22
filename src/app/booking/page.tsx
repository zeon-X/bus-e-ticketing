// In Booking.tsx

import BookingHead from '@components/booking/BookingHead';
import BookingMain from '@components/booking/BookingMain';
import React from 'react';

interface SearchParams {
  fromCity: string | undefined;
  toCity: string | undefined;
  doj: string | undefined;
  travelClass: string | undefined;
}

export default function Booking({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: SearchParams;
}) {

  // console.log(searchParams);

  return (
    <main className="">
      <BookingHead fromCity={`${searchParams?.fromCity}`} toCity={`${searchParams?.toCity}`} doj={`${searchParams?.doj}`} travelClass={`${searchParams?.travelClass}`} />
      <BookingMain />
    </main>
  );
}
