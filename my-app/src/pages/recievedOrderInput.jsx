import React, { useState } from "react";
import Link from "next/link"
import styles from "../components/orderInput.module.css";

export default function recievedOrderInput () {
  // 受注日の入力欄
  const [orderDate, setOrderDate] = useState("");
  const [numOfItem, setnumOfItem] = useState([])

  const onChangeOrderDate = (event) => setOrderDate(event.target.value);
  const onChangeNumOfItem = (event) => setnumOfItem(event.target.value);
  //ひげの種類を設定（将来的に追加処理ができるようにstateにしてもよいかも？）
  const buttonNames = ["猫のひげ", "ウサギのひげ"];
  //商品名の設定
  const catNames = ["ミケ", "キジ", "ノビノビ", "ジャンプ", "a", "b", "c"];
  const rabbitNames = ["ネザーランドドワーフ", "ロップイヤー", "d"];
  const itemNames = [catNames, rabbitNames];

  return (
    <div>
      <div className={styles.dateInputDiv}>
        <label className={styles.label}>受注日入力</label>
        <input
          // placeholder="受注日"
          type="date"
          value={orderDate}
          onChange={onChangeOrderDate}
        />
      </div>
      <div className={styles.orderInputDiv}>
        {/* 猫、ウサギのボタン名でループ */}
        {buttonNames.map((buttonName, index) => {
          return (
            <div key={index}>
              <button>{buttonName}</button>
              <ul className={styles.itemContainer}>
                {/* 商品名でループ表示 */}
                {itemNames[index].map((item, index2) => {
                  return (
                    <div key={item} class={styles.itemRow}>
                      <li className={styles.orderRow}>
                        <div className={styles.illust}>Image</div>
                        <p className={styles.itemName}>{item}</p>
                        <div>
                          <label className={styles.label}>注文数</label>
                          <input type="number" className={styles.numItems} onChange={onChangeNumOfItem} value={numOfItem[index2]}/>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <Link href="./" ><button>入力完了</button></Link>
    </div>
  );
};
