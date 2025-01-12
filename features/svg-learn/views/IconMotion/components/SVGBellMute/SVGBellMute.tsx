import {Button} from "@/components/ui/button";
import {useState} from "react";

import styles from './SVGBellMute.module.scss';

const SVGBellMute = () => {
    const [animateSVG, setAnimateSVG] = useState<boolean>(false);

    const handleAnimationChecklist = () => {
        setAnimateSVG(false);
        setTimeout(() => setAnimateSVG(true), 50);
    };

    return (
        <div className="flex flex-col p-2 border-2 border-dashed border-gray-300">
            <div className="flex flex-col items-center w-fit">
                <svg width="96" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <mask id="maskBellCircle">
                            <rect width="100%" height="100%" fill="black"/>
                            <rect x="6" y="24" width="20" height="16" fill="white"/>
                        </mask>
                    </defs>
                    <path
                        className={`${styles.bellHead} ${animateSVG ? styles.animate : ''}`}
                        d="M6.66667 25.3333C6.28889 25.3333 5.97244 25.2053 5.71733 24.9493C5.46222 24.6933 5.33422 24.3769 5.33333 24C5.33244 23.6231 5.46044 23.3067 5.71733 23.0507C5.97422 22.7947 6.29067 22.6667 6.66667 22.6667H8V13.3333C8 11.4889 8.55555 9.85022 9.66667 8.41733C10.7778 6.98445 12.2222 6.04533 14 5.6V4.66667C14 4.11111 14.1947 3.63911 14.584 3.25067C14.9733 2.86222 15.4453 2.66756 16 2.66667C16.5547 2.66578 17.0271 2.86044 17.4173 3.25067C17.8076 3.64089 18.0018 4.11289 18 4.66667V5.6C19.7778 6.04444 21.2222 6.98356 22.3333 8.41733C23.4444 9.85111 24 11.4898 24 13.3333V22.6667H25.3333C25.7111 22.6667 26.028 22.7947 26.284 23.0507C26.54 23.3067 26.6676 23.6231 26.6667 24C26.6658 24.3769 26.5378 24.6938 26.2827 24.9507C26.0276 25.2076 25.7111 25.3351 25.3333 25.3333H6.66667ZM10.6667 22.6667H21.3333V13.3333C21.3333 11.8667 20.8111 10.6111 19.7667 9.56667C18.7222 8.52222 17.4667 8 16 8C14.5333 8 13.2778 8.52222 12.2333 9.56667C11.1889 10.6111 10.6667 11.8667 10.6667 13.3333V22.6667Z"
                        fill="currentColor"
                    />

                    <circle
                        className={`${styles.bellCircle} ${animateSVG ? styles.animate : ''}`}
                        cx="16"
                        cy="26"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="2"/>
                </svg>

                <Button
                    onClick={() => {
                        handleAnimationChecklist();
                    }}
                    variant="ghost"
                    size="lg"
                >
                Click
                </Button>
            </div>
        </div>
    )
}
export default SVGBellMute;
