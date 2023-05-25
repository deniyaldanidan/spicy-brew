import Link from "next/link";
import { UrlObject } from "url";

type props = {
    curr_page: number,
    totalPages: number,
    prevhref: string | UrlObject,
    nexthref: string | UrlObject
}

export default function Pagination({ curr_page, totalPages, prevhref, nexthref }: props) {
    return (
        <div className="pagination">
            {curr_page <= 1 ? "" : <Link href={prevhref}>Prev</Link>}
            <div>{curr_page} of {totalPages}</div>
            {curr_page >= totalPages ? "" : <Link href={nexthref}>Next</Link>}
        </div>
    )
}



