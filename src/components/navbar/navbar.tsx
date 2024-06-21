import styles from "@/components/navbar/navbar.module.css";
import home from "@/../public/home.svg";
import clock from "@/../public/clock.svg";
import hamburger from "@/../public/hamburger.svg";
import group from "@/../public/group.svg";
import setting from "@/../public/setting.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const date = new Date().toISOString().slice(0, 10);
  function moveToMeal() {
    const hours = new Date().getHours();
    if (0 <= hours && hours < 9) return `/meal/breakfast/${date}`;
    else if (9 <= hours && hours < 13) return `/meal/lunch/${date}`;
    else return `/meal/dinner/${date}`;
  }

  return (
    <nav className={styles.container}>
      <div className={styles.wrap}>
        <Element href="/" icon={home} title="메인" />
        <Element href="/time" icon={clock} title="시간표" />
        <Element href={moveToMeal()} icon={hamburger} title="급식" />
        <Element href="/group" icon={group} title="그룹" />
        <Element href="/setting" icon={setting} title="설정" />
      </div>
    </nav>
  );
}

function Element({
  href,
  icon,
  title,
}: {
  href: string;
  icon: any;
  title: string;
}) {
  return (
    <Link href={href} className={styles.element_wrap}>
      <Image className={styles.icon} src={icon} alt="navbar-icon" />
      <p className={styles.title}>{title}</p>
    </Link>
  );
}
