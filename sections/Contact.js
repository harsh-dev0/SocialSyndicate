import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import React from "react"
import { useForm, ValidationError } from '@formspree/react';
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnelqk");
  
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>


                <div className='box'>
                  <AiFillMail size={30} className='icons' />
                  <h3>suyash.pal67@gmail.com</h3>
                  <span>Drop us a email anytime!</span>
                </div>
                <div className='box'>
                  <Link href="https://www.instagram.com/strategic_16">
                    <AiFillInstagram size={30} className='icons' />
                  </Link>
                  <h3>@strategic_16</h3>
                  <span>Checkout our Instagram Page</span>
                </div>
              </div>

            </div>
            <div className='right w-70'>
              {state.succeeded ? (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              ) : (
                <>
                  <TitleSm title='Make an online enquiry' />
                  <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

                  <form onSubmit={handleSubmit}>
                    <div className='grid-2'>
                      <div className='inputs'>
                        <span>Name</span>
                        <input type='text' name="name" />
                      </div>
                      <div className='inputs'>
                        <span>Email</span>
                        <input type='text' name="email" />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className='inputs'>
                      <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                      <textarea name="message" cols='30' rows='10'></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                    <button type="submit" disabled={state.submitting} className='button-primary'>Submit</button>
                  </form>
                </>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
