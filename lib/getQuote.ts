//interface to help organize data fetched from api
interface QuoteData {
  value: string;
}

// async function that returns promise with format quotedata 
export async function getQuoteData(): Promise<QuoteData> {
  const res = await fetch("https://api.chucknorris.io/jokes/random?category=dev", {
    //no-store: to request the browser to not use cached version from the request, making sure the response is new every time the api is fetched
    cache: 'no-store'
  });
  //it status different than ok = log error and throw error, if status ok then return the response in json format
  if (!res.ok) {
    console.error('Failed to fetch quote:', res.status, res.statusText);
    throw new Error('Failed to fetch quote');
  }
  return res.json();
}