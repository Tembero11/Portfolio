import React from "react";
import * as styles from "./Card.module.scss";

interface IProps {
    children: React.ReactNode;
}

export default function Card({ children }: IProps) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}