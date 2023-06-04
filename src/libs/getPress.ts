import { cache } from "react";
import 'server-only';
import press from '@/press.json';

const getPress = cache(() => {

    return {data: press}
})


export default getPress;