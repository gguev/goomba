import Head from 'next/head'
import Link from 'next/link'
import { GetServerSidePropsContext, NextPage } from 'next/types'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import getVideos from '../lib/getVideos'


const ResultsPage: NextPage = (props: any) => {
  const { query, videos } = props.results
  
  return (
    <div>
      <Head>
        <title>Results for "{query}" - Goomba</title>

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      
      <Header />

      <div className='px-52 mt-5'>
        <h1 className='text-4xl text-white mb-10'>Results for "{query}"</h1>  
        {
          videos.map((video: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; channel: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }; metadata: { published: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined } }) => {
            return (
              <div className='py-6' key={video.id}>
                <h1 className='text-4xl pb-3 text-blue-400 hover:text-blue-600 hover:underline'><Link href={`/watch?v=${video.id}`}>{video.title}</Link></h1>
                <h1>{video.channel.name} - {video.metadata.published}</h1>
              </div>
            )
          })
        }
      </div>
      <Footer />      
    </div>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { search: query } = ctx.query

  const res = await getVideos(query as string)

  return {
    props: {
      results: res
    }
  }
}

export default ResultsPage