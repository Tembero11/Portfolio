import React from "react";
import * as styles from "./Project.module.scss";

interface IProps {
    projectName: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    logoSrc?: string;
    color: string;
}

export default function ProjectCard(props: IProps) {
    return (
        <div className={styles.container} style={{"--theme": "#041c2c"} as React.CSSProperties}>
            <div className={styles.logo}>Logo Here</div>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{props.title}</h2>
                <a className={styles.action}>Read More</a>
            </div>
            <div className={styles.overlay}></div>
        </div>
    );    
}