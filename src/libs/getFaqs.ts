import { cache } from "react";
import 'server-only';
import faq from '@/data/faq.json';

const getFaqs = cache(() => {

    return {data: faq}
})


export default getFaqs;