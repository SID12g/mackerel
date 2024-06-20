import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div style={{ padding: "0 20px 0 20px" }}>{children}</div>;
}
