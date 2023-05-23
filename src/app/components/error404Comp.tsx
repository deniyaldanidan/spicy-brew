'use client';

import React from 'react';
import Image from 'next/image';
import Error404 from '@/assets/404.svg';
import { useRouter } from 'next/navigation';
import { FaAngleDoubleLeft } from 'react-icons/fa';

export default function Error404Comp({text}:{text:string}): React.JSX.Element {
    const router= useRouter();

    return (
        <div className='info-page error'>
            <Image src={Error404} alt="Error 404 Happened" />
            <p>{text}</p>
            <button onClick={() => router.back()} >
                <FaAngleDoubleLeft />
                <span>Go Back</span>
            </button>
        </div>
    )
}