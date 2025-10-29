import React from 'react'

export default function SkillsSection() {
  return (
    <section 
     className='flex flex-col justify-center min-h-screen px-20 py-16 md:px-10 bg-[--Primary-background] text-[--Primary-text]'
     id='skills'>
      <h1 className="text-4xl font-semibold mb-10">Skills</h1>

      <ul className='list-disc gap-2 mt-4 ml-6 text-lg md:text-xl text-[--Secondary-color]'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  )
}
