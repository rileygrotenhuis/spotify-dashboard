import styles from './ArtistBlock.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ArtistBlock(props) {
    return (
        <div className={styles.ArtistBlockContainer}>
            <Link href={props.url}>
                <Image
                    src={props.image_url}
                    alt="Artist Image"
                    width={50}
                    height={50}
                    className={styles.ArtistBlockImage}
                />
            </Link>
            <p className={styles.ArtistBlockName}>{props.name}</p>
        </div>
    );
}
