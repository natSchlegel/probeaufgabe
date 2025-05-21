interface QuoteData {
  value: string;
}

export async function getQuoteData(): Promise<QuoteData> {
  const res = await fetch("https://api.chucknorris.io/jokes/random?category=dev", {
    cache: 'no-store'
  });
  if (!res.ok) {
    console.error('Failed to fetch quote:', res.status, res.statusText);
    throw new Error('Failed to fetch quote');
  }
  return res.json();
}