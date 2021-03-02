import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  // const onClickInput = () => {
  //   return (
  //     <Link href="./recievedOrderInput" ><a></a></Link>
  //   );
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjsでの開発体験</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} >猫のひげ　受注・在庫管理アプリ</h1>
        <div className={styles.buttonArea}>
          <Link href="./recievedOrderInput" >
          <button className={styles.button} >入力画面</button>
          </Link>
          <button className={styles.button} >在庫管理</button>
          <button className={styles.button} >注文サイクル確認</button>
          <button className={styles.button} >管理画面</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <footer />
      </footer>
    </div>
  )
}
