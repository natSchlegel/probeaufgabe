// Runs on client side to handle user clicks without page reload
'use client';

import { useState } from 'react';
import getQuote from '../lib/getQuote';

interface QuoteElementProps {
  initialQuote: string;
}

export default function Quote({initialQuote} : QuoteElementProps) {

  // State for quote, loading, and error
  const [quote, setQuote] = useState<string>(initialQuote);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Get a new quote and update state
  const fetchNewQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getQuote();
      setQuote(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred while fetching a new quote.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-80 mt-10 sm:mt-0 sm:ml-28 text-center">
    <div className="space-y-4"> 
      {/* Show error or quote */}
      {error ? (
        <div className="quote-display text-red-500">Error: {error}</div>
      ) : (
        <div className="quote-display">
          {/* Show loading or quote */}
          {loading ? 'Loading new quote...' : quote}
        </div>
      )}
      {/* Button to get a new quote */}
      <button
        onClick={fetchNewQuote}
        disabled={loading}
        className="rounded-full font-semibold bg-[#403F3F] text-[#FFFFFF] hover:bg-[#222222] text-sm my-4 sm:my-0 h-14 w-56 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Fetching...' : 'Click Here'}
      </button>
    </div>
    </div>
  );
}
