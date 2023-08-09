import React, {useEffect} from 'react';
import styles from './styles.module.css';

function MainMenu() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#152938';
    }, [])

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                memory
            </h1>
            <main className={styles.menu}>
                <div className={styles.theme}>
                    <h2 className={styles.theme_title}>
                        Select Theme
                    </h2>
                    <button className={styles.numbers}>
                        Numbers
                    </button>
                    <button className={styles.icons}>
                        Icons
                    </button>
                </div>
                <div className={styles.players}>
                    <h2 className={styles.players_title}>
                        Number of Players
                    </h2>
                    <button className={styles.one}>
                        1
                    </button>
                    <button className={styles.two}>
                        2
                    </button>
                    <button className={styles.three}>
                        3
                    </button>
                    <button className={styles.four}>
                        4
                    </button>
                </div>
                <div className={styles.size}>
                    <h2 className={styles.size_title}>
                        Grid Size
                    </h2>
                    <button className={styles.fourByFour}>
                        4x4
                    </button>
                    <button className={styles.sixBySix}>
                        6x6
                    </button>
                </div>
                <button className={styles.start}>
                    Start Game
                </button>
            </main>            
        </section>

    )
}

export default MainMenu;