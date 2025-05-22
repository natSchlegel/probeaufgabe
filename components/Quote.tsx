import { getQuoteData } from '../lib/getQuote';
import { QuoteElement } from './QuoteElement';

export default async function QuotePage() {
  let initialQuoteValue: string;
  let hasError: boolean = false;
  let errorMessage: string | null = null;

  // Fetch quote and handle errors
  try {
    const data = await getQuoteData();
    initialQuoteValue = data.value;
  } catch (err) {
    if (err instanceof Error) {
      errorMessage = err.message;
    } else {
      errorMessage = 'An unknown error occurred during initial quote fetch.';
    }
    initialQuoteValue = 'Failed to load initial quote.';
    hasError = true;
  }

  return (
    <div className="w-80 mt-10 sm:mt-0 sm:ml-28 text-center">
      {/* Show error if it happens, otherwise show quote */}
      {hasError ? (
        <div className="quote-display text-red-500 mb-4">Error: {errorMessage}</div>
      ) : (
        // Pass initial quote to the component
        <QuoteElement initialQuote={initialQuoteValue} />
      )}
    </div>
  );
}
