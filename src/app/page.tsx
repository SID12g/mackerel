import styles from "./page.module.css";
import Advertisement from "@/components/advertisement/advertisement";
import Header from "@/components/header/header";
import Content from "@/components/content/content";

export default function Home() {
  return (
    <div>
      <Header title="실시간 인기글" />
      <Content
        href="/posts/1"
        title="인기글 제목"
        number="239명"
        name="user1"
      />
      <Content
        href="/posts/1"
        title="인기글 제목"
        number="239명"
        name="user1"
      />
      <Content
        href="/posts/1"
        title="인기글 제목"
        number="239명"
        name="user1"
      />
      <Advertisement />
      <Content
        href="/posts/1"
        title="인기글 제목"
        number="239명"
        name="user1"
      />
      <Content
        href="/posts/1"
        title="인기글 제목"
        number="239명"
        name="user1"
      />
      <Content
        href="/posts/1"
        title="인기글 제목"
        number="239명"
        name="user1"
      />
    </div>
  );
}
