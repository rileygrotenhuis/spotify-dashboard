import styles from './SongBlock.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function SongBlock(props) {
    return (
        <div className={styles.SongBlockContainer}>
            <Link href={props.url}>
                <Image
                    src={props.image_url}
                    alt="Track Image"
                    width={50}
                    height={50}
                />
            </Link>
            <div className={styles.SongBlockNameContainer}>
                <p className={styles.SongBlockName}>{props.name}</p>
                <p className={styles.SongBlockName}>
                    {props.artist} - {props.album}
                </p>
            </div>
        </div>
    );
}
