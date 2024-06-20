import styles from "@/components/header/header.module.css";

export default function Header({ title }: { title: string }) {
  return <h1 className={styles.header}>{title}</h1>;
}
