import { units } from "../appConstants";
import PropTypes from "prop-types";
const defaultDetails = {
  air_temperature: "Missing temp",
  precipitation_rate: "",
};
export default function Weather(props) {
  const {
    instant: { details } = { details: detailsDefault },
    next_1_hours: { summary },
  } = props;
  return (
    <div className="rounded-sm px-2 py-5 bg-line bg-gradient-to-t from-white via-white to-blue-100">
      <p>Været nå</p>
      <div className="flex items-center flex-wrap">
        <div className="flex-auto flex items-center">
          {summary?.symbol_code && (
            <img className="w-20" src={summary.symbol_code + ".svg"} />
          )}
          <span className="text-red-600 font-bold text-2xl ml-3">
            {details.air_temperature}
            <span title="grader celsius" aria-label="grader celsius">
              {units.temperature}
            </span>
          </span>
        </div>
        <div className="flex-auto flex">
          <div className="flex flex-col">
            <div className="flex gap-1">
              <img className="h-5" src="thermometer.svg" alt=""></img>
              <span className="sr-only">temperatur i grader celcius</span>
              {details.air_temperature}
            </div>
            <div className="my-2 flex gap-1">
              <img className="h-5" src="umbrella.svg" alt=""></img>
              <span className="sr-only">nedbør:</span>
              {details.precipitation_rate} mm
            </div>
            <div className="flex gap-1">
              <img className="h-5 gap-1" src="wind.svg" alt=""></img>
              <span className="sr-only">vindstyrke</span>
              {details.wind_speed} ({details.wind_speed_of_gust}) m/s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Weather.PropTypes = {
  instant: PropTypes.shape({
    details: PropTypes.shape({
      air_temperature: PropTypes.number,
      precipitation_rate: PropTypes.number,
      wind_speed: PropTypes.number,
      wind_speed_of_gust: PropTypes.number,
    }),
  }),
  next_1_hours: PropTypes.shape({
    summary: PropTypes.shape({
      symbol_code: PropTypes.string,
    }),
  }),
};

Weather.defaultProp;
