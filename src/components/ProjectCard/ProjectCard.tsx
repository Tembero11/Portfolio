import React, { useEffect, useState } from "react";
import * as styles from "./Project.module.scss";

interface IProject {
    name: string;
    title: string;
    imageSrc: string;
    logoSrc: string;
    color: string;
}

interface IProps {
    projects: IProject[];
}

export default function ProjectCard({ projects }: IProps) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentProjectIndex + 1 >= projects.length) {
                setCurrentProjectIndex(0);
                return;
            }
            setCurrentProjectIndex(currentProjectIndex + 1)
        }, 7000);
        return () => clearInterval(interval);
    }, [currentProjectIndex]);

    return (
        <div className={styles.container} style={{"--theme": projects[currentProjectIndex].color} as React.CSSProperties}>
            <div className={styles.descContainer}>

            </div>
            <div className={styles.carousel}>
                <div className={styles.cards}>
                    <div className={styles.cardBackgrounds}>
                        {projects.map(({ imageSrc }, index) => (
                            <div className={styles.cardBackground} style={{ opacity: index == currentProjectIndex ? 1 : 0, backgroundImage: `url(${imageSrc})` }}></div>
                        ))}
                    </div>
                    <div className={styles.overlay}></div>
                    <div className={styles.cardContentCarousel}>
                        {
                            projects.map(() => (
                                <div className={styles.cardContent} style={{transform: `translateX(-${currentProjectIndex * 100}%)`}}>
                                    <div className={styles.logo}>Logo Here</div>
                                    <div className={styles.titleContainer}>
                                        <h2 className={styles.title}>Title Here</h2>
                                        <a className={styles.action}>Read More</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
                <div className={styles.timeline}>
                    {
                        projects.map((_, index) => (
                            <div className={styles.timelineSection} style={{ "--time": "20%" } as React.CSSProperties}>
                                <div></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}