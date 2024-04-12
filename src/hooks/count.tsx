import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ViewerData {
  message: string;
  totalViews: number;
  todayViews: number;
  today: string;
  averageView: number;
  urls:string[];
}

// function for calling all viewer data api
async function getAllViewerData(
  encryptedUUID: string,
): Promise<ViewerData> {
  const response = await fetch(
    "https://pageview-tracker.vercel.app/api/getallviewer",
    {
      method: "POST",

      body: JSON.stringify({
        encryptedUUID
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const responseData: any = await response.json();

  if (responseData) {
    return responseData;
  } else {
    throw new Error("Invalid response data format");
  }
}

// hook about getting and passing all viewer data
const usePageTraffic = (encryptedUUID: string) => {
  // const url = window.location.href;
  const formData = {
    encryptedUUID,
    // urlParam: url,
  };

  const [totalViews, setTotalViews] = useState<number>(0);
  const [todayViews, setTodayViews] = useState<number>(0);
  const [averageView, setAverageView] = useState<number>(0);
  const [allUrls, setAllUrls] = useState<string[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getAllViewerData(encryptedUUID);
        setTotalViews(responseData.totalViews);
        setTodayViews(responseData.todayViews);
        setAverageView(responseData.averageView);
        setAllUrls(responseData.urls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return { totalViews,todayViews,averageView,allUrls };

};

// function for calling specific url viewer data api
async function getUrlTrafficData(
  encryptedUUID: string,
  urlParam: string
): Promise<ViewerData> {
  const response = await fetch(
    "https://pageview-tracker.vercel.app/api/geturldata",
    {
      method: "POST", 

      body: JSON.stringify({
        encryptedUUID,
        urlParam,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const responseData: any = await response.json();

  if (responseData) {
    return responseData;
  } else {
    throw new Error("Invalid response data format");
  }
}

// hook about getting and passing specific url viewer data
const useUrlTraffic = (encryptedUUID: string,url:string) => {
  // const url = window.location.href;
  const formData = {
    encryptedUUID,
    urlParam: url,
  };

  const [totalUrlViews, setTotalUrlViews] = useState<number>(0);
  const [todayUrlViews, setTodayUrlViews] = useState<number>(0);
  const [averageUrlView, setAverageUrlView] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getUrlTrafficData(encryptedUUID, url);
        setTotalUrlViews(responseData.totalViews);
        setTodayUrlViews(responseData.todayViews);
        setAverageUrlView(responseData.averageView);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { totalUrlViews,todayUrlViews,averageUrlView }; // Return the view data or null if loading/error
};

// function for calling tracking page data api
async function getTrackingPage(
  encryptedUUID: string,
  urlParam: string
): Promise<ViewerData> {
  const response = await fetch(
    "https://pageview-tracker.vercel.app/api/trackingpage",
    {
      method: "POST",

      body: JSON.stringify({
        encryptedUUID,
        urlParam,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const responseData: any = await response.json();

  if (responseData) {
    return responseData;
  } else {
    throw new Error("Invalid response data format");
  }
}

// hook about adding tracking page data into DB
const useTrackingPage = (encryptedUUID: string) => {
  const location = useLocation();
  // const [url, setUrl] = useState(location.pathname); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getTrackingPage(encryptedUUID, location.pathname);
        // ... handle response data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 

  }, [location, encryptedUUID]); 

  return null; // Or return any data needed from the hook
};



export { usePageTraffic,useUrlTraffic,useTrackingPage };
