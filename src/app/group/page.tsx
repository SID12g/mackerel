import styles from "@/app/group/page.module.css";
import Advertisement from "@/components/advertisement/advertisement";
import Content from "@/components/content/content";
import Header from "@/components/header/header";

export default function Group() {
  return (
    <div>
      <Header title="그룹" />
      <Content
        href="/group/1"
        title="템플스테이 가실 분 구합니다."
        number="4명/ 6명"
        name="mr.hwang"
      />
      <Content
        href="/group/1"
        title="템플스테이 가실 분 구합니다."
        number="4명/ 6명"
        name="mr.hwang"
      />
      <Content
        href="/group/1"
        title="템플스테이 가실 분 구합니다."
        number="4명/ 6명"
        name="mr.hwang"
      />
      <Advertisement />
      <Content
        href="/group/1"
        title="템플스테이 가실 분 구합니다."
        number="4명/ 6명"
        name="mr.hwang"
      />
      <Content
        href="/group/1"
        title="템플스테이 가실 분 구합니다."
        number="4명/ 6명"
        name="mr.hwang"
      />
      <Content
        href="/group/1"
        title="템플스테이 가실 분 구합니다."
        number="4명/ 6명"
        name="mr.hwang"
      />
    </div>
  );
}
