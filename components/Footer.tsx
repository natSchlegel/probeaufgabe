// Interface for the data returned from the API
interface VisitorData {
  count: number;
}

// Function to get visitor count from the API
async function getVisitorCount(): Promise<VisitorData> {
  // Use env URL in production, localhost in development
  const baseUrl = process.env.URL_VERCEL || 'http://localhost:3000';

  // Fetch data from the API
  const res = await fetch(`${baseUrl}/api/visitors`, {
    // Always get a fresh response
    cache: 'no-store'
  });

  // If request fails, throw error
  if (!res.ok) {
    throw new Error('Failed to fetch visitor count');
  }

  // Return the data as JSON
  return res.json();
}

export default async function Footer() {
  let data: VisitorData | null = null;
  let visitorDisplay: string;

  // Try to get visitor count, handle errors
  try {
    data = await getVisitorCount();
    visitorDisplay = `Visitors: ${data.count}`;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    visitorDisplay = "Visitors: N/A";
  }

  // Return the footer with the visitor info
  return (
    <footer className='flex items-center text-[#FFFFFF] w-full h-24 sm:h-1/5 justify-center bg-[#403F3F]'>
      <p>{visitorDisplay}</p>
    </footer>
  );
}
