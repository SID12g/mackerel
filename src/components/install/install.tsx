"use client";

import styles from "@/components/install/install.module.css";
import appstore from "@/../public/appstore.svg";
import playstore from "@/../public/playstore.svg";
import Image from "next/image";

export default function Install() {
  return (
    <div className={styles.container}>
      <div onClick={() => alert("사실 없습니다.")} className={styles.button}>
        <Image
          style={{ marginRight: 8 }}
          width={24}
          height={24}
          src={appstore}
          alt="appstore"
        />
        App Store
      </div>
      <div style={{ width: 20 }} />
      <div onClick={() => alert("사실 없습니다.")} className={styles.button}>
        <Image
          style={{ marginRight: 8 }}
          width={24}
          height={24}
          src={playstore}
          alt="playsotre"
        />
        Google Play
      </div>
    </div>
  );
}
