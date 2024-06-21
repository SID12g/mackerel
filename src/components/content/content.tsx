import styles from "@/components/content/content.module.css";
import person from "@/../public/person.svg";
import Image from "next/image";

export default function Content({
  title,
  number,
  name,
}: {
  title: string;
  number: string;
  name: string;
}) {
  return (
    <div className={styles.container}>
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
      <p className={styles.name}>{name}</p>
    </div>
  );
}
