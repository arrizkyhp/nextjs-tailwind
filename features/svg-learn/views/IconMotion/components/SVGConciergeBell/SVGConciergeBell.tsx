import { useState } from "react";

import styles from './SVGConciergeBell.module.scss';
import { Button } from "@/components/ui/button";

const SVGConciergeBell = () => {
    const [animateSVG, setAnimateSVG] = useState<boolean>(false);

    const handleAnimationChecklist = () => {
        setAnimateSVG(false);
        setTimeout(() => setAnimateSVG(true), 50);
    };

    return (
        <div className="flex flex-col p-2 border-2 border-dashed border-gray-300">
            <div className="flex flex-col items-center w-fit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-concierge-bell"
                >
                    <rect
                        strokeWidth="0"
                        fill="currentColor"
                        x="11.2"
                        y="5"
                        width="1.5"
                        height="3"
                    />

                    <path
                        d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"/>
                    <path d="M20 16a8 8 0 1 0-16 0 z"/>
                    <path
                        className={`${styles.bellHat} ${animateSVG ? styles.animate : ''}`}
                        d="M10 4h4"
                    />
                    <path className={`${styles.bellEffectLeft} ${animateSVG ? styles.animate : ''}`}
                          d="M9.2 8.5 Q 4.5 10.8 4.1 15"/>
                    <path className={`${styles.bellEffectRight} ${animateSVG ? styles.animate : ''}`}
                          d="M14.8 8.5 Q 19.4 10.8 20 15" />
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
    );
};

export default SVGConciergeBell;
