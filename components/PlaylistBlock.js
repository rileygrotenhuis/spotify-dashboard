import styles from './PlaylistBlock.module.css';
import Image from "next/image";

export default function PlaylistBlock() {
    return (
        <div className={styles.PlaylistBlockContainer}>
            <Image
                src={"https://i.scdn.co/image/ab6761610000f178c7a7b191db13668f1a6d863d"}
                alt="Artist Image"
                width={50}
                height={50}
                className={styles.PlaylistBlockImage}
            />
            <div className={styles.PlaylistBlockNameContainer}>
                <p className={styles.PlaylistBlockkName}>Vibes #1</p>
                <p className={styles.PlaylistBlockkName}>11 Tracks</p>
            </div>
        </div>
    );
};