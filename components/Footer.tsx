interface VisitorData {
  count: number;
}

async function getVisitorCount(): Promise<VisitorData> {
  const baseUrl = process.env.URL_VERCEL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/visitors`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch visitor count');
  }
  return res.json();
}

export default async function Footer() {
  let data: VisitorData | null = null;
  let visitorDisplay: string;

  try {
    data = await getVisitorCount();
    visitorDisplay = `Visitors: ${data.count}`;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    visitorDisplay = "Visitors: N/A";
  }

  return (
    <footer className='flex items-center text-[#FFFFFF] w-full h-24 sm:h-1/5 justify-center bg-[#403F3F]'>
      <p>{visitorDisplay}</p>
    </footer>
  );
}