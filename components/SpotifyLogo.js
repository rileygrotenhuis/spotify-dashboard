import Image from "next/image";
import Link from "next/link";

export default function SpotifyLogo() {
    return (
        <div style={{
            position: 'fixed',
            bottom: 10,
            right: 10
        }}>
            <Link href="https://open.spotify.com/" target="_blank">
                <Image
                    src="/spotify.svg"
                    height={50}
                    width={50}
                />
            </Link>
        </div>
    );
};