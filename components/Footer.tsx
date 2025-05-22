//interface to help organize data fetched from api
interface VisitorData {
  count: number;
}

// async function that returns promise with format VisitorData 
async function getVisitorCount(): Promise<VisitorData> {
      //if prod uses env variable, if not port default 
  const baseUrl = process.env.URL_VERCEL || 'http://localhost:3000';
  //this fetch is not client side run because is fetched on the page rendering
  const res = await fetch(`${baseUrl}/api/visitors`, {
    //no-store: to request the browser to not use cached version from the request, making sure the response is new every time the api is fetched
    cache: 'no-store'
  });
    //it status different than ok, log error and throw error to return, if is ok then return the response in the json format
  if (!res.ok) {
    throw new Error('Failed to fetch visitor count');
  }
  return res.json();
}

export default async function Footer() {
  let data: VisitorData | null = null;
  let visitorDisplay: string;

// exceptions treatment while calling the api fetching function above, if the fetch is successful, the phrase will contain the number of visitors, if catched an error, the number is set to "N/A" and  an error is logged
  try {
    data = await getVisitorCount();
    visitorDisplay = `Visitors: ${data.count}`;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    visitorDisplay = "Visitors: N/A";
  }
//either way a phrase is return inside the footer element
  return (
    <footer className='flex items-center text-[#FFFFFF] w-full h-24 sm:h-1/5 justify-center bg-[#403F3F]'>
      <p>{visitorDisplay}</p>
    </footer>
  );
}