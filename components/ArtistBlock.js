import styles from './ArtistBlock.module.css';
import Image from "next/image";

export default function ArtistBlock() {
    return (
        <div className={styles.ArtistBlockContainer}>
            <Image
                src={"https://i.scdn.co/image/ab6761610000f178c7a7b191db13668f1a6d863d"}
                alt="Artist Image"
                width={50}
                height={50}
                className={styles.ArtistBlockImage}
            />
            <p className={styles.ArtistBlockName}>Mac Demarco</p>
        </div>
    );
};