import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className=""
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
          md:w-[2px] md:left-[30px] xs:left-[20px] 
          "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Developer"
            company="20Pila platform"
            companyLink="https://www.vintepila.com.br/"
            time="2018 - 2021"
            address=""
            work="Worked as a freelancer on the 20Pila platform, where I undertook a diverse range of web development projects.
         Specialized in website creation and optimization, working with both WordPress and programming in JavaScript and ReactJS.
         Collaborated with clients from various sectors, including businesses and educational institutions, to meet their specific web development needs.
         Executed maintenance tasks and made adjustments to existing websites, enhancing usability and performance.
         Actively participated in resolving technical challenges and implementing effective solutions.
         Worked autonomously, managing deadlines and client communication to ensure satisfaction and successful project delivery.
         Gained valuable experience in tackling complex problems, ensuring websites were both functional and visually appealing."
          />

          <Details
            position="Junior Software Developer"
            company="Centro Médico de Campinas"
            companyLink="https://www.fcmc.com.br/"
            time="2021 - 2024"
            address="Campinas,SP"
            work="Developed an internal application to streamline information sharing among nursing departments, restricted solely to nurses, doctors, and senior team members. Utilized React, Node.js, Express, and MongoDB technologies for data storage.
            Contributed to enhancing the Clinical Department's aspect by implementing validations on the website to prevent outdated access to medical records.
            Improved the website's form by adding new features and developing a liability waiver to ensure the security of client information.
            Integrated WhatsApp into the hospital environment and provided information to clients."
          />

          <Details
            position="Mid-Level Front-End Developer"
            company="Incentivar"
            companyLink="https://www.incentivar.io"
            time="2023 - Present"
            address="Campinas, SP"
            work="Working on internal projects at Incentivar.io, developing and maintaining modern web applications using technologies such as React, Next.js, Zustand, and Material-UI. I build dynamic and validated forms with React Hook Form and Zod, create responsive user interfaces, and implement interactive data tables with server-side pagination, filtering, and bulk actions. My work involves close integration with RESTful APIs, applying clean code practices, and delivering consistent and user-focused experiences."
          />


        </ul>
      </div>
    </div>
  )
}

export default Experience
