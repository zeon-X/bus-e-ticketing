import Link from 'next/link';
import React from 'react';

const NavigationLinks = () => {
    return (
        <>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/login"}>Login</Link>
            </li>
            <li>
                <Link href={"/register"}>Register</Link>
            </li>
            <li>
                <Link href={"/bus-information"}>Bus Information</Link>
            </li>
            <li>
                <Link href={"/contact-us"}>Contact Us</Link>
            </li>
        </>
    );
};

export default NavigationLinks;