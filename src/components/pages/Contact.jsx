import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>

        <section className="relative z-10 overflow-hidden bg-blue-400 p-[5vh] py-20 dark:bg-dark lg:py-[120px]">
          <div className="container">
            <div
              className="-mx-4 flex flex-wrap justify-center items-center lg:justify-between">

              <motion.div
                initial={{ x : "-50%" }}
                animate={{ x : 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <span className="mb-4 block font-semibold text-primary font-mono text-xl">
                    Contact Us
                  </span>
                  <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    GET IN TOUCH WITH US
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6 italic">
                    For any questions or feedback, don't hesitate to contact us. Our team is here to assist you with any inquiries regarding our platform or services. We value your input and are committed to providing prompt support to ensure your satisfaction with Health Hub. Reach out to us anytime – <b className='text-white'>we're here to help!</b>
                  </p>

                  <div className="mb-8 flex w-full max-w-[370px]">

                    <div className="mr-6 mt-9 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_941_17577)">
                          <path
                            d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                            fill="currentColor"
                          />
                          <path
                            d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                            fill="currentColor"
                          />
                          <path
                            d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_941_17577">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="w-full italic">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Phone Number
                      </h4>
                      <div>
                        <p className="text-base text-body-color dark:text-dark-6 cursor-pointer">
                          (+91) 9352622196
                        </p>
                        <p className="text-base text-body-color dark:text-dark-6 mt-2 cursor-pointer">
                          (+91) 9518077276
                        </p>
                        <p className="text-base text-body-color dark:text-dark-6 mt-2 cursor-pointer">
                          (+91) 6398187258
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 mt-9 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Email Address
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        21103315@jiit.ac.in
                      </p>
                      <p className="text-base text-body-color mt-2 dark:text-dark-6">
                        21103324@jiit.ac.in
                      </p>
                      <p className="text-base text-body-color mt-2 dark:text-dark-6">
                        21103326@jiit.ac.in
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                  <form>
                    <ContactInputBox
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    <ContactInputBox
                      type="text"
                      name="email"
                      placeholder="Your Email"
                    />
                    <ContactInputBox
                      type="text"
                      name="phone"
                      placeholder="Your Phone"
                    />
                    <ContactTextArea
                      row="6"
                      placeholder="Your Message"
                      name="details"
                      defaultValue=""
                    />
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded border border-blue-500 border-primary bg-primary p-3 transition hover:bg-blue-400 hover:text-white"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  <div>
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: [0.8, 1.6, 1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute -right-9 -top-10 z-[-1]">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                          fill="#3056D3"
                        />
                      </svg>
                    </motion.span>

                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6  border-blue-500 "
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6  border-blue-500 "
        />
      </div>
    </>
  );
}