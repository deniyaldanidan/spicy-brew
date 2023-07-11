import { cache } from "react";
import 'server-only';
import guides from '@/data/brewing.json';

const getGuides = cache(() => {

    return {guides}
})


export default getGuides;