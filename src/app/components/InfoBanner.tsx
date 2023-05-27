import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';


export default function InfoBanner ({ text }: { text: string }):React.JSX.Element{
    return (
        <div className="info-banner">
            <BsFillInfoCircleFill />
            <span>{text}</span>
        </div>
    )
}