import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai"

const Footer = () => {
  const mail= "suyash.pal67@gmail.com"
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Syndicate' caption='Social' className='logobg' />
              <br />
              <span>© 2024 SOCIAL SYNDICATE. ALL RIGHTS RESERVED.</span>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              {/* <li>
                <Link href='/'>Our team</Link>
              </li>
              <li>
                <Link href='/'>Showcase</Link>
              </li> */}
              <li>
                <Link href='/'>Blog</Link>
              </li>
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/contact'>Editing</Link>
              </li>
              <li>
                <Link href='/contact'>Branding & Creative Services</Link>
              </li>
              <li>
                <Link href='/contact'>Digital Marketing</Link>
              </li>
              
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <ul >
                {/* <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li> */}
                <li>
                  <Link href='https://www.instagram.com/strategic_16 ' target='_blank'>
                  <i class="fa fa-instagram" aria-hidden="true"></i> <t/> Instagram
                  </Link>
                </li>
                <li>
                  <a href='mailto:suyash.pal67@gmail.com'>
                  <i className="fa fa-envelope" aria-hidden="true" /> <t/> Email US
                  </a>
                </li>
                <li>
                <i className="fa fa-envelope" aria-hidden="true" /> <t/> {mail}
                </li>
              </ul>
            </ul>
          </div>
          {/* <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 THE SEVEN. ALL RIGHTS RESERVED.</span>
            </div>
            {/* <div className='connect'>
              <span>GORKCODER COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div> 
          </div> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
