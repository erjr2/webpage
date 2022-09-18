export default function WeatherTab({ data, time, summary }) {
  console.log(data);
  return (
    <div className="flex justify-between gap-6 py-3 px-4 rounded-sm">
      <div className="flex-col flex">
        <h3 className="text-lg font-bold">
          <time dateTime={time}>{new Date(time).getDate()}</time>
        </h3>
        <p>
          <span className="sr-only">temperatur</span>
          <span className="text-red-600 tex-bold">
            {data.instant.details.air_temperature}
            <span title="grader celsius" aria-label="grader celsius">
              °
            </span>
          </span>
        </p>
        <p>
          <span className="sr-only">vindstyrke</span>
          <span>{data.instant.details.wind_speed} m/s</span>
        </p>
      </div>
      <div className="flex max-w-sm justify-between">
        <div className="flex w-1/5">
          {summary.morning?.symbol && (
            <img className="w-full" src={summary.morning.symbol + ".svg"} />
          )}
        </div>
        <div className="flex w-1/5">
          {summary.midDay?.symbol && (
            <img className="w-full" src={summary.midDay.symbol + ".svg"} />
          )}
        </div>
        <div className="flex w-1/5">
          {summary.late?.symbol && (
            <img className="w-full" src={summary.late.symbol + ".svg"} />
          )}
        </div>
      </div>
    </div>
  );
}
