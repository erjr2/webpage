import Accordion from "../components/accordion";
import Layout from "../components/layout";
import WeatherTab from "../components/weatherTab";
import WeatherTable from "../components/table";
import { useEffect, useState } from "react";
import { groupBy, timeIt, getDailySummary } from "../functions";
import useFetch from "../hooks/useFetch";
import Weather from "../components/weather";
import Script from "next/script";
export default function Home() {
  const [data, setData] = useState(false);
  const [lastUpdate, setLastUpdate] = useState();

  const [resData, error] = useFetch(
    "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=59.9333&lon=10.7166"
  );
  useEffect(() => {
    if (resData) {
      setLastUpdate(resData.properties.meta.updated_at);
      setData(resData.properties.timeseries);
    }
  }, [resData]);

  return (
    <>
      <Script src="table.js"></Script>
      <Layout>
        <div className="flex">
          <button id="_jsPrevButton" className="w-4">
            Forrige
          </button>
          <div id="_jsTableContainer" className="flex-auto"></div>
          <button id="_jsNextButton" className="w-4">
            Neste
          </button>
        </div>
      </Layout>
    </>
  );
}
