import { getQuoteData } from '../lib/getQuote';
import { QuoteElement } from './QuoteElement';

export default async function QuotePage() {
  let initialQuoteValue: string;
  let hasError: boolean = false;
  let errorMessage: string | null = null;

  // changed from a component based on React approach (useEffect) to a route handler structure, separating server and client responsibilities and handling request exceptions
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
    {/* ternary operator: if error occurs = show error message, if not = calls component */}
      {hasError ? (
        <div className="quote-display text-red-500 mb-4">Error: {errorMessage}</div>
      ) : (
        // there is a need to fetch the initial quote without the user's click, to solve it, when the component is opened is also fetched the first quote and sent to the quote element
        <QuoteElement initialQuote={initialQuoteValue} />
      )}
    </div>
  );
}