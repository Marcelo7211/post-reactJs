import { Avatar } from './Avatar';
import style from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';

export function SideBar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src='https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=40' />

            <div className={style.profile}>
                <Avatar hasBorder src='https://github.com/Marcelo7211.png' />
                <strong>Marcelo Barboza</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    )
}
