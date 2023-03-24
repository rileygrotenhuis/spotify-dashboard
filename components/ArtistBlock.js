import styles from './ArtistBlock.module.css';
import Image from 'next/image';

export default function ArtistBlock(props) {
    return (
        <div className={styles.ArtistBlockContainer}>
            <Image
                src={props.image_url}
                alt="Artist Image"
                width={50}
                height={50}
                className={styles.ArtistBlockImage}
            />
            <p className={styles.ArtistBlockName}>{props.name}</p>
        </div>
    );
}
