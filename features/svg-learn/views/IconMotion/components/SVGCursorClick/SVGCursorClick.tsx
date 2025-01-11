import { useState } from "react";

import styles from './SVGCursorClick.module.scss';
import {Button} from "@/components/ui/button";

const SVGCursorClick = () => {
    const [animateSVG, setAnimateSVG] = useState<boolean>(false)

    const handleAnimationChecklist = () => {
        setAnimateSVG(false);
        setTimeout(() => setAnimateSVG(true), 40);
    };
    return (
        <div className="flex flex-col p-2 border-2 border-dashed border-gray-300">
            <div className="flex flex-col items-center w-fit">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width="96"
                    fill="none"
                >
                    <defs>
                        <mask id="mask">
                            <rect width="100%" height="100%" fill="white"/>
                            <rect className={`${styles.maskRect} ${animateSVG ? styles.animate : ''}`} x="11" y="12" width="14" height="14" fill="black"/>
                            <circle className={`${styles.maskCircleX} ${animateSVG ? styles.animate : ''}`} cx="11" cy="20" r="0.75" fill="white"/>
                            <circle className={`${styles.maskCircleY} ${animateSVG ? styles.animate : ''}`} cx="20.75" cy="12" r="0.75" fill="white"/>
                        </mask>
                    </defs>
                    <rect
                        mask="url(#mask)"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        x="3.25"
                        y="4.75"
                        width="17.5"
                        height="15.25"
                        rx="2"
                    />
                    <circle className={`${styles.circleOne} ${animateSVG ? styles.animate : ''}`} r="1.25" fill="currentColor" cx="6.75" cy="8.5"/>
                    <circle className={`${styles.circleTwo} ${animateSVG ? styles.animate : ''}`} r="1.25" fill="currentColor" cx="10.25" cy="8.5"/>
                    <circle className={`${styles.circleThree} ${animateSVG ? styles.animate : ''}`} r="1.25" fill="currentColor" cx="13.75" cy="8.5"/>
                    <path
                        className={`${styles.cursor} ${animateSVG ? styles.animate : ''}`}
                        d="M15.5 15.5L22 17.5L19 19L17.5 22L15.5 15.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <Button
                    onClick={() => {
                        handleAnimationChecklist()
                    }}
                    variant="ghost"
                    size="lg">
                    Click
                </Button>
            </div>

        </div>

    )
}

export default SVGCursorClick;
