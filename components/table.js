import { useId } from "react";
export default function Table({ colHeadings, keys, rows, caption }) {
  const prefix = useId();
  return (
    <table className="flex flex-col">
      {caption && <caption className="sr-only">{caption}</caption>}
      <thead>
        <tr className="flex justify-between">
          {colHeadings.map((heading, i) => (
            <th className="w-auto" key={prefix + i + "heading"}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr className="flex justify-between" key={prefix + i + "row"}>
            {keys.map((k, i) => {
              if (typeof k === "string") {
                return <td key={prefix + i + "data"}>{row[k]}</td>;
              } else if (typeof k === "function") {
                return <td key={prefix + i + "data"}>{k(row)}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
