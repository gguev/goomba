import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const AboutPage = () => {
  return (
    <div className="flex flex-col">
    <Head>
      <title>About - Goomba</title>
      
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
    </Head>
    
    <Header />
    <main className="flex flex-col px-52 pt-10">
      <h1 className='text-4xl text-white'>About Goomba</h1> 
      <div className='pt-5 pb-44'>
        <p className='text-white text-xl pb-3'>Goomba allows you to watch videos without distractions. That means...</p>
        <ul className='list-disc pl-10 pb-3'>
          <li className='text-white text-xl pb-3'>Minimal UI</li>
          <li className='text-white text-xl pb-3'>No cluttered sidebars.</li>
          <li className='text-white text-xl pb-3'>No ads. This website will never have ads because they're ugly.</li>
        </ul>
        <p className='text-white text-xl'>What remains is a video embed in 16:9 aspect ratio. Enjoy.</p>    
      </div>
    </main>      
    <Footer />
  </div>
  )
}

export default AboutPage