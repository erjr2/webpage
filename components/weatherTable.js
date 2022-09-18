export default function WeatherTable() {
  const headings = ["Tid", "Vær", "Temp", "Vind"];
  const data = [{ time: 1900, temp: 20, wind: 5, s: "Test" }];
  const keys = [
    "time",
    "temp",
    (row) => {
      return row.wind * 100;
    },
    "s",
  ];
  return <></>;
}
