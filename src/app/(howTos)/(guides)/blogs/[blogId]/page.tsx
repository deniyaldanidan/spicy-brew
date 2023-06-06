import UserImage from "@/app/components/UserImage";
import getBlog from "@/libs/getBlog"
import URL_LIST from "@/url";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaAsterisk, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from './index.module.scss';
import { generateSocialLinks } from "@/libs/helpers";
import Link from "next/link";



export default function Page({ params }: { params: { blogId: string } }) {

    const { blog } = getBlog(parseInt(params.blogId));

    if (typeof blog === "undefined") {
        notFound()
    }

    const { facebook: fbLink, twitter: twitterLink} = generateSocialLinks(URL_LIST.blog(blog.id), blog.title);

    return (
        <div className={styles.blog_page}>
            <div className={styles.blog_title}>{blog.title}</div>
            <div className={styles.blog_meta_1}>
                <span>{blog.category}</span>
                <span>|</span>
                <span>{blog.duration} Read</span>
            </div>
            <Image src={URL_LIST.blogImagePath(blog.id)} width={1100} height={400} alt={blog.title} className={styles.hero_img} priority />
            <div className={styles.meta_2}>
                <UserImage gender={blog.author.gender} username={blog.author.author_name} />
                <div className={styles.user_info}>
                    <span>{blog.author.author_name}</span>
                    <span>|</span>
                    <span>{blog.author.role}</span>
                </div>
                <div className={styles.date}>{blog.date}</div>
            </div>
            <div className={styles.excerpt}>{blog.excerpt}</div>
            <div className={styles.blog_contents}>
                {blog.content.map((cnt, i) => (
                    <div key={i} className={styles.content_sec}>
                        <div className={styles.content_title}>{cnt.para_title}</div>
                        <div className={styles.content_text}>{cnt.para_content}</div>
                    </div>
                ))}
            </div>
            <div className={styles.share_section}>
                <span>Share on:</span>
                <Link href={fbLink}>
                    <FaFacebookF />
                </Link>
                <Link href={twitterLink}>
                    <FaTwitter />
                </Link>
            </div>
            <div className={styles.end_line}>
                <FaAsterisk />
                <FaAsterisk />
                <FaAsterisk />
                <FaAsterisk />
            </div>
        </div>
    )
}