import Link from 'next/link'

export function Navbar() {
  return (
    <header className="w-full p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
        <div className='whitespace-nowrap'>
            <h1>OCaml's Universe</h1>
        </div>
        <div className='flex grow justify-center items-center'>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/gamejam25">Game Jam 25</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}