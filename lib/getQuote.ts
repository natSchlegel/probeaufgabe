export default async function getQuote() {
  let quote: string;

  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random?category=dev", {
      cache: 'no-store'
    });
    if (!res.ok) {
      console.error('Failed to fetch quote:', res.status, res.statusText);
      throw new Error('Failed to fetch quote');
    }

    quote = (await res.json()).value;

  } catch (err) {
    quote = 'Failed to load quote. Try again.';
    if (err instanceof Error) {
      console.log("Error message:" + err.message);
    }
  }

  return quote;
}
