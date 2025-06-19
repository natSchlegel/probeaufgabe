import React from 'react';
import Image from 'next/image';
import ChuckNorrisImage from '../public/chuck-norris.png';
import Quote from './Quote';
import getQuote from '../lib/getQuote';

const Main = async () => {

  const initialQuote = await getQuote();

  return (
    <main className="flex flex-1 h-3/4 sm:flex-none mt-6 sm:mt-0 items-center justify-center">
        <div className="flex flex-wrap items-center justify-center h-full">
          <Image src={ChuckNorrisImage} alt="Chuck Norris" className="rounded-lg h-4/5 w-4/5 sm:w-auto shadow-lg object-contain"/> 
            <Quote initialQuote={initialQuote}/> 
        </div>
    </main>
  )
}

export default Main
