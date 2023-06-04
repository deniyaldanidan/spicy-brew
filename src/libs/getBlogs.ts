import { cache } from "react";
import 'server-only';
import blogs from '@/blogs.json';

const getBlogs = cache(() => {

    return {blogs}
})


export default getBlogs;