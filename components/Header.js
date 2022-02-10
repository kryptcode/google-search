import { MenuIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const Header = ({ planets }) => {
    const router = useRouter();

    return (
        <div className="flex items-center h-[72px] border-b border-gray-200">
            <h1 className="font-semibold uppercase text-2xl ml-3">the planets</h1>

            <div className="ml-auto items-stretch space-x-4 mr-3 hidden md:flex">
                {
                    planets.map((planet) => (
                        <div 
                            className='group cursor-pointer'
                            onClick={() => router.push(`${planet.name === 'Mercury' ? '/' : planet.name.toLowerCase()}`)}
                            >
                            <h1 className="uppercase text-xl opacity-90 group-hover:opacity-100 group-hover:scale-105" >{planet.name}</h1>
                        </div>
                    ))
                }
            </div>

            <MenuIcon className='h-9 flex md:hidden ml-auto cursor-pointer' />


        </div>
    )
}

export default Header;