import { cache } from "react";
import 'server-only';
import blogs from '@/blogs.json';

const getBlog = cache((blogId:number) => {

    return {blog: blogs.find(blg=>blg.id===blogId)}
})


export default getBlog;