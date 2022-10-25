import Innertube from 'youtubei.js'

// ADD ERROR HANDLING
export default async function getVideos(query: string) {
  const youtube = await new Innertube({ gl: 'US' })

  const search = await youtube.search(query, { client: 'YOUTUBE' })
  
  return JSON.parse(JSON.stringify(search))
}