import styles from "@/app/posts/[id]/page.module.css";
import Advertisement from "@/components/advertisement/advertisement";
import Comment from "@/components/comment/comment";
import Content from "@/components/content/content";

export default function Posts() {
  return (
    <div className={styles.container}>
      <Content
        href="/posts/1"
        title="인기글 제목"
        number="239명"
        name="user1"
        date="2024년 6월 21일"
      />
      <p className={styles.content}>
        본문 내용입니다. 내용을 입력해주세요. 본문 내용입니다. 내용을
        입력해주세요. 본문 내용입니다. 내용을 입력해주세요. 본문 내용입니다.
        내용을 입력해주세요. 본문 내용입니다. 내용을 입력해주세요.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 72 }}>
        <button className={styles.button}>추천 (10)</button>
        <div style={{ width: 16 }} />
        <button className={styles.button}>비추천 (9)</button>
      </div>
      <Advertisement />
      <p className={styles.comment}>댓글 - 2개</p>
      <Comment name="황석준" time="10분전" heart={3} comment="추천합니다." />
      <Comment
        name="황석준의 영혼"
        time="15분전"
        heart={11}
        comment="인정합니다."
      />
    </div>
  );
}
