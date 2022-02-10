import { LinkIcon } from '@heroicons/react/solid'
import Image from 'next/image';

const PlanetInfo = ({ planet }) => {
    return (
        <main className='grid grid-cols-2 gap-x-20 pt-10'>
            <div className='col-span-full md:col-span-1 flex items-center justify-center h-[500px]'>
            <Image src={planet.images.planet} height={300} width={300} objectFit='contain' />
            </div>

            <div className='col-span-full md:col-span-1 flex flex-col justify-center text-center md:text-left space-y-8 h-auto mb-9 md:mb-0'>
                <h1 className='text-[70px] uppercase font-bold'>{planet.name}</h1>
                <p className='text-md text-gray-500 tracking-wide font-spartan max-w-full md:max-w-[450px] p-4 md:p-0'>{planet.overview.content}</p>
                <p>
                Source: {' '}
                <a className='text-gray-300 text-md lowercase underline' href={planet.overview.source}>
                    Wiki
                    <LinkIcon className='pl-2 h-5 inline' />
                </a>
                </p>
            </div>

            <div className="col-span-full flex justify-center space-x-2 md:space-x-7">
            <div className='stats'>
                <h4>rotation time</h4>
                <h2>{planet.rotation}</h2>
            </div>
            <div className='stats'>
                <h4>revolution time</h4>
                <h2>{planet.revolution}</h2>
            </div>
            <div className='stats'>
                <h4>radius</h4>
                <h2>{planet.radius}</h2>
            </div>
            <div className='stats'>
                <h4>Avg. Temp</h4>
                <h2>{planet.temperature}</h2>
            </div>
            </div>
        </main>
    )
}

export default PlanetInfo
