import Image from "next/image";
import Error401 from '@/assets/401.svg';


export default function UnAuthenticated401({text}:{text:string}){
    return (
        <div className='info-page error'>
            <Image src={Error401} alt="Error 404 Happened" priority={true} />
            <p>{text}</p>
        </div>
    )
}