import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <div className={styles.title}>
      <h1 className={styles.text}>HomePage</h1>
      <p className={styles.text}>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis.
        Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
        Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.
      </p>
      <Link href="/users"><a className={styles.btn}>See Users List</a></Link>
    </div>

  )
}
