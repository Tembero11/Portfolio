import React, { useEffect, useState } from "react";
import * as styles from "./Project.module.scss";

import githubLogo from "../../assets/github-mark.svg";

interface IProject {
    name: string;
    title: string;
    desc: string;
    imageSrc: string;
    logoSrc: string;
    color: string;
    repository?: string;
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
                {
                    projects.map(({desc, repository}, index) => (
                        <div className={styles.about} style={{transform: `translateX(${100 * index - currentProjectIndex * 100}%)`}}>
                            <p className={styles.desc}>{desc}</p>
                            <div>
                                <h3>Tech used</h3>
                            </div>
                            <h3>Stats</h3>
                            <div className={styles.stats}>
                                <div className={styles.stat}>500+ commits</div>
                                <div className={styles.stat}>1 star</div>
                                <div className={styles.stat}>1 contributor</div>
                            </div>
                            {
                                repository ? <a className={styles.repoLink} href={repository} target="_blank"><img src={githubLogo} width={28} alt="Github logo" /></a> : null
                            }
                        </div>
                    ))
                }
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
                        projects.map(({ color }, index) => (
                            <div className={styles.timelineSection} style={{ "--time": "20%" } as React.CSSProperties}>
                                <div style={{backgroundColor: color}}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}