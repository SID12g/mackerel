import styles from "@/app/meal/[time]/[date]/page.module.css";
import Header from "@/components/header/header";
import Advertisement from "@/components/advertisement/advertisement";
import MealComponent from "@/components/meal/meal";
import Link from "next/link";

export default async function Meal({
  params,
}: {
  params: { time: string; date: string };
}) {
  return (
    <div>
      <Header title="급식" />
      <MealComponent time={params.time} date={params.date} />
      <div style={{ height: 28 }} />
      <Advertisement />
      <p style={{ textAlign: "center", color: "var(--assist-text-color)" }}>
        powered by
        <Link
          style={{ textDecoration: "none", color: "var(--assist-text-color)" }}
          href={"https://디미고급식.com"}
        >
          {" 디미고급식"}
        </Link>
      </p>
    </div>
  );
}
