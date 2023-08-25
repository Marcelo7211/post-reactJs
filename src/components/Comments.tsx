import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comments.module.css';
import { Avatar } from './Avatar';

export function Comments() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/Marcelo7211.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcelo Barboza</strong>
                            <time title='1 de janeiro de 2022' dateTime='2022-01-01 08:13:12'> cerca de 1h atras</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devan, Parabens 👋👋</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}
