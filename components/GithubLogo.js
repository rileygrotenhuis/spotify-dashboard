import Image from "next/image";
import Link from "next/link";

export default function GithubLogo() {
    return (
        <div style={{
            position: 'fixed',
            bottom: 10,
            left: 10
        }}>
            <Link href="https://github.com/rileygrotenhuis/spotify-dashboard" target="_blank">
                <Image
                    src="/github.svg"
                    height={50}
                    width={50}
                />
            </Link>
        </div>
    );
};