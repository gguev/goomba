import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import Head from 'next/head'
import Header from '../../components/Header/Header';

import { GetServerSidePropsContext } from 'next'

const VideoPage = (props: { videoID: any; }) => {
  const { videoID } = props

  return (
    <div>
      <Head>
        <title>Twitch VOD: { videoID } - Goomba</title>

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>  
      </Head>

      <Header />

      <div className="px-52 mt-2 mb-3">
        <div className='rounded-lg overflow-hidden h-[620px]'>
          <ReactPlayer 
            url={`https://www.twitch.tv/videos/${videoID}`} 
            width="100%"
            height="100%"
            playsinline
            controls
          />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { videoID } = ctx.query

  return {
    props: {
      videoID: videoID
    }
  }
}

export default VideoPage