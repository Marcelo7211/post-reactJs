import { Post } from "./components/Post";
import { Header } from "./components/Header";
import './global.css'

import styles from './App.module.css'
import { SideBar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucasCapSilva.png',
      name: 'Lucas Cap Silva',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }       
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  }, {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Marcelo7211.png',
      name: 'Marcelo Barboza',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Ola tudo bem 👋' },
      { type: 'paragraph', content: 'Só estou aqui pela merenda!!! vai ter comida lol 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }       
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

