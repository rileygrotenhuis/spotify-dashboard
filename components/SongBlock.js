import styles from './SongBlock.module.css';
import Image from 'next/image';

export default function SongBlock(props) {
    return (
        <div className={styles.SongBlockContainer}>
            <Image
                src={props.image_url}
                alt="Track Image"
                width={50}
                height={50}
            />
            <div className={styles.SongBlockNameContainer}>
                <p className={styles.SongBlockName}>{props.name}</p>
                <p className={styles.SongBlockName}>{props.artist} - {props.album}</p>
            </div>
        </div>
    );
}
