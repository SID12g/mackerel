import styles from "@/components/content/content.module.css";
import person from "@/../public/person.svg";
import Image from "next/image";
import Link from "next/link";

export default function Content({
  href,
  title,
  number,
  name,
  date,
}: {
  href: string;
  title: string;
  number: string;
  name: string;
  date?: string;
}) {
  return (
    <div className={styles.container}>
      <Link style={{ textDecoration: "none" }} href={href}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <h1 className={styles.title}>{title}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image className={styles.icon} src={person} alt="person" />
            <p className={styles.number}>{number}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p className={styles.name}>{name}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </Link>
    </div>
  );
}
