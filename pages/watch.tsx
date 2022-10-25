import Head from 'next/head'
import Header from '../components/Header/Header'
import getVideo from '../lib/getVideo'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const WatchPage = (props: { video: any }) => {
  const { video } = props

  return (
    <div>
      <Head>
        <title>{video.title} - Goomba</title>

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>  
      </Head>

      <Header />

      <div className="px-52 mt-2 mb-3">
        <div className='rounded-lg overflow-hidden'>
          <Plyr 
            source={{
              type: "video",
              sources: [{ src: video.id, provider: 'youtube' }],
            }}
          />          
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: { query: { v: any } }) {
  const { v: videoID } = ctx.query

  const res = await getVideo(videoID)

  return {
    props: {
      video: res
    }
  }
}

export default WatchPage