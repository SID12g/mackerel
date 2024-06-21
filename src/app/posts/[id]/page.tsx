import styles from "@/app/posts/[id]/page.module.css";
import Advertisement from "@/components/advertisement/advertisement";
import Comment from "@/components/comment/comment";
import Content from "@/components/content/content";

export default function Posts() {
  return (
    <div className={styles.container}>
      <Content
        href="/posts/1"
        title="오늘 점심먹는 노재원 실화냐"
        number="239명"
        name="mr.noh"
        date="2024년 6월 21일"
      />
      <p className={styles.content}>
        가슴이 웅장해진다.. 오늘 스테이크 먹는 노재원 실화냐... 노재원은 너무
        맛있게 먹는다... 노재원은 솔직히 스테이크를 너무 맛있게 먹는 것 같다..
        노재원은 좀 문제가 있을지도 몰은 너무 어려워.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 72 }}>
        <button className={styles.button}>추천 (10)</button>
        <div style={{ width: 16 }} />
        <button className={styles.button}>비추천 (9)</button>
      </div>
      <Advertisement />
      <p className={styles.comment}>댓글 - 2개</p>
      <Comment
        name="황석준"
        time="10분전"
        heart={3}
        comment="솔직히 노재원은 노재원이다.."
      />
      <Comment name="유민우" time="15분전" heart={11} comment="오잉오잉" />
    </div>
  );
}
