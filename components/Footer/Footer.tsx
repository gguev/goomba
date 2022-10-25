import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-evenly">
      <p> Copyright &copy; 2022. Guillermo Guevara</p>
      <div className='flex'>
        <a className="flex text-blue-400 hover:text-blue-600 hover:underline"><Link href={'mailto: guillermo1699@hotmail.com'}>Contact</Link></a>
        <div className="mx-3">&middot;</div> 
        <a className="flex text-blue-400 hover:text-blue-600 hover:underline"><Link href={'/about'}>About</Link></a>
        <div className="mx-3">&middot;</div> 
        <a className="flex text-blue-400 hover:text-blue-600 hover:underline"><Link href={'/features'}>Features</Link></a>
                
      </div>
      <p>Watch videos without the clutter</p>
  </footer>
  )
}