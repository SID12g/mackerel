import styles from "@/app/time/page.module.css";
import Advertisement from "@/components/advertisement/advertisement";
import Header from "@/components/header/header";
import axios from "axios";
// 1b2c127dc991427dbf52739db9a4ee5b
// 7530560

export default async function Time() {
  return (
    <div>
      <Header title="시간표" />
      <table className={styles.container}>
        <tbody>
          <tr>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
          <tr>
            <td>응화</td>
            <td>화학</td>
            <td>국사</td>
            <td>자료</td>
            <td>수1</td>
          </tr>
          <tr>
            <td>성직</td>
            <td>국사</td>
            <td>진로</td>
            <td>성직</td>
            <td>수2</td>
          </tr>
          <tr>
            <td>수2</td>
            <td>수1</td>
            <td>영1</td>
            <td>문학</td>
            <td>운동</td>
          </tr>
          <tr>
            <td>화학</td>
            <td>중국</td>
            <td>화학</td>
            <td>영1</td>
            <td>중국</td>
          </tr>
          <tr>
            <td>문학</td>
            <td>자료</td>
            <td>응화</td>
            <td>응화</td>
            <td>영어</td>
          </tr>
          <tr>
            <td>자료</td>
            <td>운동</td>
            <td>CA</td>
            <td>수1</td>
            <td>문학</td>
          </tr>
          <tr>
            <td>자율</td>
            <td>수2</td>
            <td></td>
            <td>국사</td>
            <td>진로</td>
          </tr>
        </tbody>
      </table>
      <div style={{ height: 28 }} />
      <Advertisement />
    </div>
  );
}
