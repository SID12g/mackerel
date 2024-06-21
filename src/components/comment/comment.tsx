import styles from "@/components/comment/comment.module.css";
import heart_img from "@/../public/heart.svg";
import Image from "next/image";

export default function Comment({
  name,
  time,
  heart,
  comment,
}: {
  name: string;
  time: string;
  heart: number;
  comment: string;
}) {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <p className={styles.info}>
          {name} - {time}
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image style={{ marginRight: 4 }} src={heart_img} alt="heart" />
          <p className={styles.heart}>{heart}</p>
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
}
