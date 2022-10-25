import Link from 'next/link'
import router from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'

function Header() {
  const [isFocused, setIsFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const handleOnFocus = () => {
    setIsFocused(true)
  }

  const handleOnBlur = () => {
    setIsFocused(false)
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    
    if (searchQuery.includes('youtube.com')) {
      let splitURL = searchQuery.split('com')
      let vidURL = splitURL[1]

      router.push(vidURL)
      return
    }

    if (searchQuery.includes('youtu.be')) {
      let splitURL = searchQuery.split('be/')
      let vidURL = splitURL[1]

      router.push(`/watch?v=${vidURL}`)
      return
    }

    if (searchQuery.includes('twitch.tv')) {
      let splitURL = searchQuery.split('tv')
      let vidURL = splitURL[1]

      router.push(vidURL)
      return
    }
    
    if (searchQuery.includes('twitch.tv/videos')) {
      let splitURL = searchQuery.split('videos/')
      let vidURL = splitURL[1]

      router.push(`/videos/${vidURL}`)
      return
    }

    router.push('/results?search=' + searchQuery)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="navbar px-52 mt-2">
      <div className="flex-1">
        <Link href={'/'}><a className="hover:shadow-white normal-case text-2xl text-white font-normal">Goomba</a></Link>
      </div>

      <form action="" onSubmit={handleOnSubmit}>
        <div className="flex-none">
          <div className="form-control">
            <div className={isFocused ? "input-group rounded-lg outline outline-2 outline-offset-2 outline-white" : "input-group"}>
              <input type="text" placeholder="Search or Enter URL" style={{width: "360px"}} className="input input-bordered bg-white border border-white h-8 border border-white text-gray-700" onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleOnChange} />
              <button className='btn btn-sm bg-black border border-white'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>                
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Header