import { Children } from "react";
export default function Accordion(props) {
  const [summary, body] = Children.toArray(props.children);
  return (
    <details className="appearance-none contents">
      <summary className="contents">{summary}</summary>
      {body}
    </details>
  );
}
