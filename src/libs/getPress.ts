import { cache } from "react";
import 'server-only';
import press from '@/data/press.json';

const getPress = cache(() => {

    return {data: press}
})


export default getPress;