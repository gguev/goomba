import { GetServerSidePropsContext } from 'next'

const UrlRedirectPage = () => {}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let videoID
  let redirectURL
  const { resolvedUrl: url } = ctx // use ctx.req.url as backup

  if (url.includes('youtube.com')) {
    videoID = ctx.query.v
    redirectURL = `/watch?v=${videoID}`
  }

  if (url.includes('youtu.be')) {
    videoID = ctx.query.url[2]
    redirectURL = `/watch?v=${videoID}`
  }

  if (url.includes('twitch')) {
    videoID = ctx.query.url[2]
    redirectURL = `/${videoID}`
  }

  if (url.includes('twitch.tv/videos')) {
    videoID = ctx.query.url[3]
    redirectURL = `/videos/${videoID}`
  }

  return {
    redirect: {
      permanent: false,
      destination: redirectURL
    }
  }
}

export default UrlRedirectPage