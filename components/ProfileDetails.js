import styles from './ProfileDetails.module.css';
import Image from 'next/image';

export default function ProfileDetails(props) {
    return (
        <div className={styles.profileDetailsContainer}>
            <Image 
                src={"https://i.scdn.co/image/ab6775700000ee85e3e6bd4947c267e206da3d0d"}
                alt="Profile Picture"
                height={175}
                width={175}
                className={styles.profileDetailsImage}
            />
            <h3 className={styles.profileDetailsFullName}>Riley Grotenhuis</h3>
            <div className={styles.profileDetailsStatsContainer}>
                <div className={styles.profileDetailsStatsItem}>
                    <p className={styles.profileDetailsStatsItemGreenText}>14</p>
                    <p>Followers</p>
                </div>
                <div className={styles.profileDetailsStatsItem}>
                    <p className={styles.profileDetailsStatsItemGreenText}>0</p>
                    <p>Following</p>
                </div>
                <div className={styles.profileDetailsStatsItem}>
                    <p className={styles.profileDetailsStatsItemGreenText}>4</p>
                    <p>Playlists</p>
                </div>
            </div>
        </div>
    );
};