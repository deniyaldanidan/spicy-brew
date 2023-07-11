import { cache } from "react";
import 'server-only';
import careers from '@/data/careers.json';

const getCareers = cache(() => {

    return {data: careers}
})


export default getCareers;