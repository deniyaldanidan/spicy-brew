import styles from '@/styles/_pages/guides.module.scss';
import getBlogs from "@/libs/getBlogs"
import URL_LIST from "@/url";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: "Blogs",
    description: "Blogs page"
}

export default function Page(){

    const {blogs} = getBlogs();

    return (
        <div className={styles.guides_page}>
            <div className={styles.hero}>
                <div className={styles.title}>Caffeine Chronicles</div>
                <div className={styles.desc}>Stories from the world of coffee</div>
            </div>
            <div className={styles.guides}>
                {
                    blogs.map(blog=>(
                        <Link key={blog.id} className={styles.guide_card} href={URL_LIST.blog(blog.id)}>
                            <Image src={URL_LIST.blogImagePath(blog.id)} alt={blog.title} priority width={750} height={600} quality={95} />
                            <div className={styles.card_conts}>
                                <div className={styles.title}>{blog.title}</div>
                                <div className={styles.excerpt}>{blog.excerpt.slice(0,80)}...</div>
                                <div className={styles.meta}>
                                    <span>by {blog.author.author_name}</span>
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}