'use client';

import { useState } from 'react';
import { getQuoteData } from '../lib/getQuote';

interface QuoteButtonProps {
  initialQuote: string;
}

export function QuoteButton({ initialQuote }: QuoteButtonProps) {
  const [quote, setQuote] = useState<string>(initialQuote);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
      {error ? (
        <div className="quote-display text-red-500">Error: {error}</div>
      ) : (
        <div className="quote-display">
          {loading ? 'Loading new quote...' : quote}
        </div>
      )}
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
