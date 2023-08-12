import IsOpen from '@/app/_components/cafes/IsOpen';
import { cafeType } from "@/custTypes";
import Link from "next/link";
import { IoMdCafe } from "react-icons/io";
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { BiLinkExternal } from 'react-icons/bi';


/**
 * 
 * @requires /styles/components/cafe-box.scss
 */
export default function CafeBox({ cf }: { cf: cafeType }): React.JSX.Element {
    return (
        <div className="cafe_box">
            <div className="box_head">
                <div className="box_title">
                    <IoMdCafe />
                    <span>{cf.name}</span>
                </div>
                <div className="box_subtitle">{cf.locality}</div>
            </div>
            <div className="box_body">
                <div className="box_body_cont_top">
                    <IoLocationSharp />
                    {cf.address}
                </div>
                <div className="box_body_cont_bottom">
                    <div>
                        <span><FaPhoneAlt /> Phone:</span><span>{cf.phoneNo}</span>
                    </div>
                    <div>
                        <span><BsClockFill /> Hrs:</span><span>{cf.timings}</span>
                    </div>
                    <IsOpen timings={cf.timings} />
                </div>
                <Link href="https://danithedev.tech" className="box_cta">
                    <BiLinkExternal /> <span>Website</span>
                </Link>
            </div>
        </div>
    )
}