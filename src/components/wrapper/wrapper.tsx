import styles from "@/components/wrapper/wrapper.module.css";
import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
