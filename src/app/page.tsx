import styles from "./page.module.css";
import Advertisement from "@/components/advertisement/advertisement";
import Header from "@/components/header/header";
import Content from "@/components/content/content";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="실시간 인기글" />
      <Content
        title="오늘 점심 먹는 노재원 실화냐"
        number="239명"
        name="mr.noh"
      />
      <Content
        title="오늘 점심 먹는 노재원 실화냐"
        number="239명"
        name="mr.noh"
      />
      <Content
        title="오늘 점심 먹는 노재원 실화냐"
        number="239명"
        name="mr.noh"
      />
      <Advertisement />
      <Content
        title="오늘 점심 먹는 노재원 실화냐"
        number="239명"
        name="mr.noh"
      />
      <Content
        title="오늘 점심 먹는 노재원 실화냐"
        number="239명"
        name="mr.noh"
      />
      <Content
        title="오늘 점심 먹는 노재원 실화냐"
        number="239명"
        name="mr.noh"
      />
    </div>
  );
}
