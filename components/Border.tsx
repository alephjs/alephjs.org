import { Children, cloneElement, PropsWithChildren, ReactElement } from "react";

export default function Border(
  { color = "#999", children }: PropsWithChildren<{ color?: string }>,
) {
  return (
    Children.map(children, (child) => {
      return cloneElement(child as ReactElement, {
        style: { border: `2px solid ${color}`, background: "#fff" },
      });
    })
  );
}
