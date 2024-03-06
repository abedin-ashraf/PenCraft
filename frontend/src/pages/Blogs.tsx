import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"


export const Blogs = () => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard authorName="Ashraf Kajal" title="How an Ugly Single Page Website Makes $5,000 a Month with Affiliate Marketing" content="Even with a simplistic or unattractive design, a website can earn $5,000 a month through affiliate marketing by strategically targeting a lucrative niche and offering high-quality, SEO-optimized content that addresses the audience's needs. By integrating relevant affiliate links and banners within this content, leveraging email marketing to build a loyal audience, promoting content on social media, and continuously optimizing performance and strategies, the website can effectively drive traffic and increase affiliate conversions, resulting in a substantial monthly income." publishedDate="2nd Feb 2024" />

                <BlogCard authorName="Ashraf Kajal" title="How an Ugly Single Page Website Makes $5,000 a Month with Affiliate Marketing" content="Even with a simplistic or unattractive design, a website can earn $5,000 a month through affiliate marketing by strategically targeting a lucrative niche and offering high-quality, SEO-optimized content that addresses the audience's needs. By integrating relevant affiliate links and banners within this content, leveraging email marketing to build a loyal audience, promoting content on social media, and continuously optimizing performance and strategies, the website can effectively drive traffic and increase affiliate conversions, resulting in a substantial monthly income." publishedDate="2nd Feb 2024" />

                <BlogCard authorName="Ashraf Kajal" title="How an Ugly Single Page Website Makes $5,000 a Month with Affiliate Marketing" content="Even with a simplistic or unattractive design, a website can earn $5,000 a month through affiliate marketing by strategically targeting a lucrative niche and offering high-quality, SEO-optimized content that addresses the audience's needs. By integrating relevant affiliate links and banners within this content, leveraging email marketing to build a loyal audience, promoting content on social media, and continuously optimizing performance and strategies, the website can effectively drive traffic and increase affiliate conversions, resulting in a substantial monthly income." publishedDate="2nd Feb 2024" />
            </div>
        </div>
    </div>
}