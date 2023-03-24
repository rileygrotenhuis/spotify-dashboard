import * as cookie from 'cookie';
import styles from './ProfileDetails.module.css';
import Image from 'next/image';

export default function ProfileDetails(props) {
    return (
        <div className={styles.profileDetailsContainer}>
            <Image
                src={props.me.images[0].url}
                alt="Profile Picture"
                height={175}
                width={175}
                className={styles.profileDetailsImage}
            />
            <h3 className={styles.profileDetailsUsername}>
                {props.me.display_name}
            </h3>
            <div className={styles.profileDetailsStatsContainer}>
                <div className={styles.profileDetailsStatsItem}>
                    <p className={styles.profileDetailsStatsItemGreenText}>
                        {props.me.followers.total}
                    </p>
                    <p>Followers</p>
                </div>
                <div className={styles.profileDetailsStatsItem}>
                    <p className={styles.profileDetailsStatsItemGreenText}>
                        {props.playlists.total}
                    </p>
                    <p>Playlists</p>
                </div>
            </div>
        </div>
    );
}
