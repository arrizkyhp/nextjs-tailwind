import {useState} from "react";

import styles from '../../IconMotion.module.scss';
import {Button} from "@@/components/ui/button";

const SVGDownload = () => {
    const [animate, setAnimate] = useState<boolean>(false)

    const handleAnimation = () => {
        setAnimate(false);
        setTimeout(() => setAnimate(true), 10);
    };

    return (
            <div className="flex flex-col p-2 border-2 border-dashed border-gray-300">
                    <svg width="96" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                           strokeLinejoin="round">
                            <g id="arrow" className={`${styles.arrow} ${animate ? styles.animate : ""}`}>
                                <line x1="12" y1="14" x2="12" y2="4"/>
                                <polyline points="9,11 12,14 15,11"/>
                            </g>
                            <polyline id="tray" className={`${styles.tray} ${animate ? styles.animate : ""}`}
                                      points="5,15 5,19 19,19 19,15"></polyline>
                        </g>
                    </svg>
                <Button
                    onClick={() => {
                        handleAnimation()
                    }}
                    variant="ghost"
                    size="lg" >
                    Click
                </Button>
            </div>
    )
}

export default SVGDownload;
