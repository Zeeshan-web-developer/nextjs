import styles from "./page.module.css"
import Link from "next/link"
export default function NotFound() {
  return (
    <div className={styles.main}>
      <h2>Not fond Found</h2>
      <p>Could not find requested resource</p>
      {/* <button>Home</button> */}
      <Link
        href={{
          pathname: "/",
          query: {
            name: "Not Found",
          },
        }}
      >
        Home
      </Link>
    </div>
  )
}
