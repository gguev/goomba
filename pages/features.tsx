import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const FeaturesPage = () => {
  return (
    <div className="flex flex-col">
    <Head>
      <title>Features - Goomba</title>
      
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
    </Head>
    
    <Header />
    <main className="flex flex-col px-52 pt-10">
      <h1 className='text-4xl text-white'>Supported Websites</h1> 
      <div className='pt-5'>
        <ul className='list-disc pl-10 pb-3'>
          <li className='text-white text-xl pb-3'>YouTube (Videos + Livestreams)</li>
          <li className='text-white text-xl pb-3'>Twitch (VODs + Livestreams)</li>
        </ul>  
      </div>

      <div className="pt-16">
        <h1 className="text-4xl text-white">Search</h1>
        <p className='text-white text-xl pb-3 pt-5'>You can enter URLs into the search bar, including shortened links.</p>
        <ul className='list-disc pl-10 pb-3'>
          <li className='text-white text-xl pb-3'>https://www.youtube.com/watch?v=-ZVZgCrHy5E</li>
          <li className='text-white text-xl pb-3'>https://youtu.be/v3-KGSuJy_s</li>
        </ul>  
        <p className='text-white text-xl pb-3'>They'll take you straight to the video.</p>
      </div>

      <div className="pt-16">
        <h1 className="text-4xl text-white">On Supported Websites</h1>
        <p className='text-white text-xl pb-3 pt-5'>Add 'goomba.com/' before a URL to open up the video in Rooble.</p>
        <ul className='list-disc pl-10 pb-3'>
          <li className='text-white text-xl pb-3'>goomba.com/https://www.youtube.com/watch?v=-ZVZgCrHy5E</li>
          <li className='text-white text-xl pb-3'>goomba.com/https://www.twitch.tv/ratirl/</li>
        </ul>  
        <p className='text-white text-xl pb-3'>They'll take you straight to the video.</p>
      </div>


    </main>      
    <Footer />
    </div>
  )
}

export default FeaturesPage