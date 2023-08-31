import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comments.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comments(props: any) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDelete() {
        props.onDeleteComment(props.content);
    }

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
                        <button
                            onClick={handleDelete}
                            title='Deletar comentário'
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
