import * as motion from "motion/react-client"

const BasicMotionLearn = () => {
    const box = {
        width: 100,
        height: 100,
        backgroundColor: "#ff0088",
    }

    const ball = {
        width: 100,
        height: 100,
        backgroundColor: "#dd00ee",
        borderRadius: "50%",
    }

    return (
        <>
            <div>
                <h1 className="font-bold">First Load Rotate</h1>
                <motion.div
                    style={box}
                    animate={{rotate: 180}}
                    transition={{duration: .5}}
                />
            </div>
            <div>
                <h1 className="font-bold">Enter Animation Scale</h1>
                <motion.div
                    style={ball}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{scale: 1, opacity: 1}}
                    transition={{
                        duration: 2,
                        scale: { type: "spring", visualDuration: 0}
                    }}
                />
            </div>
        </>

    )
}

export default BasicMotionLearn;
