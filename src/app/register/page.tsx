import styles from "@/app/register/page.module.css";
import Header from "@/components/header/header";

export default function Register() {
  return (
    <div>
      <Header title="회원가입" />
      <form>
        <input
          required
          className={styles.input}
          name="id"
          type="text"
          placeholder="아이디"
        />
        <input
          required
          className={styles.input}
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <input
          required
          className={styles.input}
          name="password"
          type="password"
          placeholder="비밀번호 확인"
        />
        <input
          required
          className={styles.input}
          name="password_check"
          type="password"
          placeholder="비밀번호"
        />
        <input
          required
          className={styles.input}
          name="email"
          type="email"
          placeholder="이메일"
        />
        <input
          required
          className={styles.input}
          name="name"
          type="text"
          placeholder="이름"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <input style={{ margin: 0 }} required name="check" type="radio" />
          <div style={{ width: 8 }} />
          당사
          <span style={{ marginLeft: 4, color: "#0075FF", fontWeight: 500 }}>
            약관
          </span>
          에동의합니다.
        </div>
        <button className={styles.button} type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
