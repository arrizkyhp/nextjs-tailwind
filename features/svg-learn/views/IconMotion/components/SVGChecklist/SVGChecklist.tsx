import {useState} from "react";

import styles from '../../IconMotion.module.scss';
import {Button} from "@@/components/ui/button";

const SVGChecklist = () => {
    const [animateChecklist, setAnimateChecklist] = useState<boolean>(false)

    const handleAnimationChecklist = () => {
        setAnimateChecklist(!animateChecklist);
    };
    return (
        <div className="flex flex-col p-2 border-2 border-dashed border-gray-300">
            <div className="flex flex-col items-center w-fit">
                    <svg viewBox="0 0 24 24" width="96">
                        <rect
                            width="8"
                            height="8"
                            y="8"
                            x="6"
                            fill="gray"
                            rx="1"
                        />
                        <path
                            className={`${styles.checkmark} ${animateChecklist ? styles.animate : styles.uncheck}`}
                            d="M7.75 11.75L10 14.25L16.25 7.75"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            pathLength="10"
                        />
                    </svg>
                <Button
                    onClick={() => {
                     handleAnimationChecklist()
                    }}
                    variant="ghost"
                    size="lg" >
                    Click
                </Button>
            </div>

        </div>

    )
}

export default SVGChecklist;
