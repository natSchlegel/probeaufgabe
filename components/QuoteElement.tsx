// this file needs to be run on the client side because handle the user's click to get a new quote without refreshing the page and messing up the footer info

'use client';

import { useState } from 'react';
import { getQuoteData } from '../lib/getQuote';

// makes sure the data has the correct type
interface QuoteElementProps {
  initialQuote: string;
}

export function QuoteElement({ initialQuote }: QuoteElementProps) {

//useState variables manages fetching, when is loading (waiting for response), error stores any fetch errors and quote is the current quote
  const [quote, setQuote] = useState<string>(initialQuote);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // the function  updates the variables above based on success or failure
  const fetchNewQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getQuoteData();
      setQuote(data.value);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred while fetching a new quote.');
      }
      setQuote('Failed to load new quote.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4"> 
    {/* ternary operator if error = print error on the screen, if not = display quote*/}
      {error ? (
        <div className="quote-display text-red-500">Error: {error}</div>
      ) : (
        <div className="quote-display">
          {/* if loading = show the phrase "loading...", if not loading = print quote fetched*/}
          {loading ? 'Loading new quote...' : quote}
        </div>
      )}
      {/* button calls funciton above, if loading = button turns disabled and shows "fetching", if not "click here" */}
      <button
        onClick={fetchNewQuote}
        disabled={loading}
        className="rounded-full font-semibold bg-[#403F3F] text-[#FFFFFF] hover:bg-[#222222] text-sm my-4 sm:my-0 h-14 w-56 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Fetching...' : 'Click Here'}
      </button>
    </div>
  );
}
