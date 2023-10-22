import type { Metadata } from 'next'
import "@styles/globals.css";

export const metadata: Metadata = {
  title: 'Booking | Bus E-Tickting System',
  description: 'Aleeha tech Bus E-Tickting System',
}

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div> {children}</div>




  )
}


export default layout;