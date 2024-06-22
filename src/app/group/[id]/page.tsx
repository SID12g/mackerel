import styles from "@/app/group/[id]/page.module.css";
import Advertisement from "@/components/advertisement/advertisement";
import Comment from "@/components/comment/comment";
import Content from "@/components/content/content";

export default function Group({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className={styles.container}>
        <Content
          href="/group/1"
          title="템플스테이 가실 분 구합니다."
          number="4명 / 6명"
          name="mr.hwang"
        />
        <p className={styles.content}>참가 상태: 안함</p>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 72 }}
        >
          <button className={styles.button}>참가</button>
        </div>
        <Advertisement />
        <p className={styles.comment}>댓글 - 1개</p>
        <Comment
          name="나는 노재원이 아니다."
          time="15분전"
          heart={11}
          comment="나도 가고싶다."
        />
      </div>
    </div>
  );
}
