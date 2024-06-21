import styles from "@/app/meal/[time]/[date]/page.module.css";
import Header from "@/components/header/header";
import Advertisement from "@/components/advertisement/advertisement";
import MealComponent from "@/components/meal/meal";

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
    </div>
  );
}
