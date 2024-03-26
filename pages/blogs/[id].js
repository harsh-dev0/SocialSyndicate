import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  // Add a check to ensure that post is not undefined
  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Introduction' />
              <p className='desc-p'> Today getting successful and securing a spot in the top businesses of the era is extremely difficult . To be successful one must know how to communicate with the consumer and how to expand one’s brand name . At “Social Syndicate”, the significance of compelling content and strategic marketing is given the most attention because in the end the consumer will only spend his money once he has seen the brand name or the product in their daily feed. Driving business growth and fostering meaningful connections with your target audience is an important step in growing your business in today’s competitive environment . With our comprehensive suite of editing and marketing services, we empower businesses to elevate their brand presence, expand their reach, and achieve their goals.
              </p>
              <TitleSm title='Why Editing Matters:
' />
              <p className='desc-p'> Effective communication is the cornerstone of any successful business endeavor. Whether it's crafting persuasive marketing materials, refining website content, or preparing polished presentations, the importance of clear, concise, and error-free communication cannot be overstated. Our team of expert editors is dedicated to ensuring that your content is refined to perfection, free from grammatical errors, typos, and inconsistencies. By leveraging our editing services, businesses can convey their message with clarity and credibility, leaving a lasting impression on their audience.
              </p>
              <TitleSm title='The Power of Strategic Marketing:

' />
              <p className='desc-p'> In today's digital age, a strong online presence is essential for business growth and visibility. However, navigating the complexities of digital marketing can be daunting without the right strategy in place. That's where we come in. Our team of seasoned marketing professionals specializes in developing customized strategies tailored to your unique business objectives. From social media management and content creation to search engine optimization and email marketing, we employ a multi-faceted approach to help businesses stand out in a crowded marketplace and connect with their target audience effectively.

              </p>
              <TitleSm title='Our Approach:
' />
              <p className='desc-p'> At Social Syndicate, we take a collaborative and client-centric approach to every project we undertake. We understand that every business is unique, which is why we take the time to listen to your needs, understand your goals, and tailor our services to meet your specific requirements. Whether you're a small startup looking to establish your brand identity or a seasoned enterprise seeking to optimize your marketing efforts, we have the expertise and resources to help you succeed.

              </p>
              <TitleSm title='Our Commitment to Excellence:

' />
              <p className='desc-p'> Quality and customer satisfaction are at the heart of everything we do. Our team of professionals is committed to delivering results that exceed your expectations, every time. We pride ourselves on our attention to detail, creativity, and unwavering dedication to helping our clients achieve their business objectives. When you partner with Social Syndicate , you can rest assured knowing that your business is in capable hands.

                <p className='desc-p'></p>To conclude,in an increasingly competitive business landscape, having the right support and expertise can make all the difference. At Social Syndicate , we are dedicated to empowering businesses to reach their full potential through expert editing and strategic marketing solutions. Whether you're looking to refine your brand image, enhance your online presence, or drive business growth, we're here to help you every step of the way. Elevate your business with us and unlock new opportunities for success.<p />

              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
