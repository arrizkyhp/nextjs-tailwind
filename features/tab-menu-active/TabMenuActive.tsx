import {useState} from "react";
import * as motion from "motion/react-client"

const TabMenuActive = () => {
    const TABS = ['Item 1', 'Item 2', 'Item 3'];
    const [selected, setSelected] = useState('Item 1');
    const [focused, setFocused] = useState('');

    return (
        <ul style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            background: '#1A1D23',
            borderRadius: '8px',
            width: 'fit-content',
            border: '1px solid #2B303B',
            gap: '32px',
        }}>
            {TABS.map((tab) => (
                <li
                    key={tab}
                    onFocus={() => setFocused(tab)}
                    onMouseEnter={() => setFocused(tab)}
                    style={{
                        position: 'relative',
                        listStyle: 'none',
                        cursor: 'pointer',
                        width: '50px',
                        height: '30px',
                        outline: 'none',
                    }}>
                <button
                    style={{
                        position: 'absolute',
                        left: '4px',
                        right: 0,
                        top: '6px',
                        bottom: 0,
                        zIndex: 1,
                        userSelect: 'none',
                        fontSize: '1rem',
                        color: '#E8E8FD',
                    }}
                    onClick={() => {
                        setSelected(tab);
                    }}
                >
                    {tab}

                </button>
                    {focused === tab && (
                        <motion.div
                            transition={{
                                layout: {
                                    duration: 0.2,
                                    ease: 'easeInOut',
                                }
                            }}
                            style={{
                                position: 'absolute',
                                bottom: '-2px',
                                left: '-10px',
                                right: 0,
                                width: '140%',
                                height: '110%',
                                background: '#23272F',
                                borderRadius: '8px',
                                zIndex: 0,
                            }}
                            layoutId="highlight"
                        />
                    )}
                    {selected === tab && (
                        <motion.div
                           style={{
                               position: 'absolute',
                               bottom: '-10px',
                               left: '0px',
                               right: 0,
                               height: '4px',
                               background: '#5686F5',
                               borderRadius: '8px',
                               zIndex: 0,
                           }}
                           layoutId="underline"
                        />
                    )}
                </li>
            ))}

        </ul>
    )
}

export default TabMenuActive;
