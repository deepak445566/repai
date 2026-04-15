'use client'

import { Suspense } from 'react';


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingPage />
    </Suspense>
  );
}