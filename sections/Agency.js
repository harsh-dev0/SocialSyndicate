import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products.' />
              <p className='desc-p'>Welcome to our service agency, where we specialize in offering top-tier editing solutions and cutting-edge marketing strategies designed to propel your business to new heights. Our team of seasoned professionals is dedicated to providing expert editing services, ensuring that your content is refined to perfection, captivating your audience with its clarity and precision. But our expertise doesn't stop there. We go beyond traditional editing by crafting the perfect marketing strategies tailored to your unique business needs. Whether you're aiming to increase brand visibility, attract more customers, or boost sales, we have the know-how to make it happen.

</p>
              {/* <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div> */}
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>At our agency, we understand the intricacies of the digital landscape and leverage this knowledge to devise strategies that deliver tangible results. With our guidance, you can navigate the competitive market with confidence, standing out from the crowd and seizing every opportunity for growth.

Partner with us, and let's embark on a journey to elevate your business to the next level. Together, we'll unlock the full potential of your brand, leaving a lasting impression on your audience and driving sustainable success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Brand />
      <Testimonial />
      <Banner /> */}
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
