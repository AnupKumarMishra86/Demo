import fs from "fs";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf-8")
    return content;
  };
  
export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug
    const content = getPostContent(slug)
    return(
        <div>
            <article className="prose lg:prose-sm">
            <Markdown>{content}</Markdown>
            </article>
        </div>
    )
};

export default PostPage;