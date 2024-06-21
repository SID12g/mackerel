import styles from "@/app/setting/page.module.css";
import Header from "@/components/header/header";
import Image from "next/image";
import kakao from "@/../public/kakao.svg";

export default function Setting() {
  return (
    <div>
      <Header title="로그인" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 120px)",
        }}
      >
        <form className={styles.form}>
          <input
            className={styles.input}
            name="id"
            type="text"
            placeholder="아이디"
          />
          <input
            className={styles.input}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <input
            style={{ display: "none" }}
            defaultValue={"원래상남자는비번을쿼리에넣는다."}
            name="warning"
          />
          <div style={{ height: 24 }} />
          <button className={styles.button} type="submit">
            로그인
          </button>
          <button className={styles.button} type="submit">
            회원가입
          </button>
        </form>
        <p style={{ textAlign: "center", color: "var(--assist-text-color)" }}>
          or
        </p>
        <button className={styles.kakao}>
          <Image src={kakao} alt="kakao-logo" />
          <div style={{ width: 8 }} />
          카카오 로그인
        </button>
      </div>
    </div>
  );
}
