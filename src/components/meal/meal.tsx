"use client";

import styles from "@/components/meal/meal.module.css";
import axios from "axios";
import left from "@/../public/arrow-left.svg";
import right from "@/../public/arrow-right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Meal {
  breakfast: string;
  lunch: string;
  dinner: string;
  date: string;
}

export default function MealComponent({
  time,
  date,
}: {
  time: string;
  date: string;
}) {
  const router = useRouter();
  const hours = new Date().getHours();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://api.xn--299a1v27nvthhjj.com/meal/${date}`
        );
        setMeal(response.data);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    fetchMeal();
  }, [date, hours]);

  function formatTime(time: string) {
    if (time === "breakfast") return "아침";
    else if (time === "lunch") return "점심";
    else if (time === "dinner") return "저녁";
    else return "로딩중..";
  }

  const mealData =
    time === "breakfast"
      ? meal?.breakfast
      : time === "lunch"
      ? meal?.lunch
      : time === "dinner"
      ? meal?.dinner
      : "정보 없음";

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.time}>{formatTime(time)}</h1>
        {mealData?.split("/").map((data: string, index: number) => (
          <div className={styles.item} key={index}>
            {data}
          </div>
        ))}
      </div>
      <div className={styles.wrap}>
        <input
          onChange={(e) => router.push(`/meal/${time}/${e.target.value}`)}
          defaultValue={date}
          className={styles.date}
          type="date"
        />
        <div style={{ display: "flex" }}>
          <div
            onClick={() => {
              if (time === "lunch") router.push(`/meal/breakfast/${date}`);
              else if (time === "dinner") router.push(`/meal/lunch/${date}`);
            }}
            className={styles.arrow}
          >
            <Image width={24} height={24} src={left} alt="left" />
          </div>
          <div style={{ width: 20 }} />
          <div
            onClick={() => {
              if (time === "breakfast") router.push(`/meal/lunch/${date}`);
              else if (time === "lunch") router.push(`/meal/dinner/${date}`);
            }}
            className={styles.arrow}
          >
            <Image width={24} height={24} src={right} alt="right" />
          </div>
        </div>
      </div>
    </div>
  );
}
