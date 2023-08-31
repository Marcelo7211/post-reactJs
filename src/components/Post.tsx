import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comments } from './Comments';
import style from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post(props: any) {

    const [comments, setComments] = useState([
        'Olá, tudo bem? 👋',
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(new Date(props.publishedAt), "d' de' LLLL 'às' HH:mm'h'",
        {
            locale: ptBR
        });

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(props.publishedAt), {
        locale: ptBR,
        addSuffix: true
    })

    function handleDeleteComment(commnet: string) {

        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commnet;
        })

        setComments(commentsWithoutDeleteOne);
    }

    function handleNewCommentChange(event: any) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: any) {
        event?.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function handleCreateNewComment(event: any) {
        event?.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    const isCommentDesabled = newCommentText.length === 0;


    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={props.author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
                {props.content.map((content: any) => {
                    if (content.type === 'paragraph')
                        return <p key={content.content}>{content.content}</p>

                    if (content.type === 'link')
                        return <p key={content.content}> <a href="#">{content.content}</a></p>
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onChange={e => handleNewCommentChange(e)}
                    value={newCommentText}
                    placeholder='Escreva um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required

                />
                <footer>
                    <button type='submit' disabled={isCommentDesabled}>Comentar</button>
                </footer>
            </form>
            <div className={style.CommentList}>
                {comments.map(comment => {
                    return (
                        <Comments
                            key={comment}
                            content={comment}
                            onDeleteComment={handleDeleteComment}
                        />
                    )
                })}

            </div>

        </article>
    )
}
