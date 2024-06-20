import styles from "@/components/advertisement/advertisement.module.css";
import Image from "next/image";
import Link from "next/link";
import CatAds from "@/../public/cat_ads.png";

export default function Advertisement() {
  return (
    <div className={styles.ads_wrap}>
      <Link className={styles.ads_link} href="https://sid12g.dev">
        <Image className={styles.ads} src={CatAds} alt="advertisement" />
      </Link>
    </div>
  );
}
