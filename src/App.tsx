import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'

import styles from './App.module.css'
import { SideBar } from "./SideBar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Marcelo Barboza"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corporis? Soluta iure laudantium quas nemo, beatae enim, nisi ex quisquam voluptatibus aliquam, officia cum a reiciendis corporis at voluptate iste."
          />

          <Post
            author="Nani"
            text="Nani é legal Recusandae, corporis? Soluta iure laudantium quas nemo, beatae enim, nisi ex quisquam voluptatibus aliquam, officia cum a reiciendis corporis at voluptate iste."
          />
        </main>
      </div>
    </>
  )
}

