import cafes from "@/cafes";
import { cache } from "react";
import 'server-only';

var data: typeof cafes;
const pageLimit = 9 as const;

const getCafes = cache((state?: string, city?: string, page?: number) => {

    if (city?.length) {
        const list = cafes.filter(cf => cf.city === city);
        list.length ? (data=list) : (data=cafes);
    } else if (state?.length) {
        const list = cafes.filter(cf => cf.state === state);
        list.length ? (data=list) : (data=cafes);
    } else {
        data = cafes;
    }

    if (data.length > pageLimit) {
        const totalPages = Math.ceil(data.length / pageLimit);

        const curr_page:number = (typeof page === "number" && page > 0 && totalPages >= page) ? page : 1;

        var start = (pageLimit * curr_page) - pageLimit;
        var end = (pageLimit * curr_page);

        return { cafes: data.slice(start, end), size: data.length, totalPages}
    }

    return { cafes: data, size: data.length }
})

export default getCafes;