import { cache } from "react";
import 'server-only';
import blogs from '@/data/blogs.json';

const getBlogs = cache(() => {

    return {blogs}
})


export default getBlogs;