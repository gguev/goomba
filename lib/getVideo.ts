import Innertube from 'youtubei.js'

// ADD ERROR HANDLING
export default async function getVideo(id: string) {
  const youtube = await new Innertube({ gl: 'US' })

  const video = await youtube.getDetails(id)

  return JSON.parse(JSON.stringify(video))
}