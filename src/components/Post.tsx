import { Avatar } from './Avatar';
import { Comments } from './Comments';
import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src='https://github.com/LucasCapSilva.png' />
                    <div className={style.authorInfo}>
                        <strong>Marcelo Barboza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='1 de janeiro de 2022' dateTime='2022-01-01 08:00:22'>Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href='#'>Ver mais</a></p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Escreva um comentário'
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={style.CommentList}>
                <Comments />
                <Comments /> 
                <Comments />
            </div>
           
        </article>
    )
}
