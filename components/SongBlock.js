import styles from './SongBlock.module.css';
import Image from "next/image";

export default function SongBlock() {
    return (
        <div className={styles.SongBlockContainer}>
            <Image
                src={"https://i.scdn.co/image/ab67616d00004851bfa99afb5ef0d26d5064b23b"}
                alt="Track Image"
                width={50}
                height={50}
            />
            <div className={styles.SongBlockNameContainer}>
                <p className={styles.SongBlockkName}>The Adults are Talking</p>
                <p className={styles.SongBlockkName}>The Strokes - The New Abnormal</p>
            </div>
        </div>
    );
};