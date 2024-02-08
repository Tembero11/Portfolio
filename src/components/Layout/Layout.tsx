import React from "react";
import * as styles from "./Layout.module.scss";
import "../../styles/global.scss";

interface IProps {
    children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
    return (
        <div className={styles.page}>  
            <nav>
                { /*Logo*/ }
                <div>Tembero.dev</div>

                <ul>
                    <li><a href="">My work</a></li>
                    <li><a href="">About me</a></li>
                    <li><a href="">My skills</a></li>
                </ul>

                <button className={styles.contact}>
                    Get in touch
                </button>
            </nav>
            <main>
                {children}
            </main>
            <footer></footer>
        </div>
    );
}