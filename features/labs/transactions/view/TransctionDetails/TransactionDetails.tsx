import {TransactionProps} from "@/features/labs/transactions/types/transactionProps";
import { motion } from "motion/react";

const TransactionDetails = (props: TransactionProps) => {
    const { data } = props;
    const { id, category, date, time, name, amount, pocket, detail} = data || {}

    return (
        <>
            <div className="flex flex-col gap-5 pb-8 border-0 border-b-[3px] mb-8 border-dashed border-[#BDBDBD]">
                <div className="flex items-center justify-between">
                    <div>
                        <motion.h2
                            layoutId={`name-${id}`}
                            className="text-[24px] font-bold line-clamp-1 w-[350px]"
                        >
                            {name}
                        </motion.h2>
                        <motion.p
                            className="text-[#656565]"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: 20}}
                            transition={{duration: 0.2, delay: 0.2}}
                        >
                            {detail}
                        </motion.p>
                    </div>
                    <div className="text-right">
                        <h2 className="text-[#656565]">Date and time</h2>
                        <motion.p
                            layoutId={`date-${id}`}
                            layout="position"
                            className="text-xl"
                        >
                            <motion.span>
                                {date}
                            </motion.span>
                            {`, ${time}`}
                        </motion.p>
                    </div>
                </div>
                <div>
                    <motion.h2
                        layoutId={`amount-${id}`}
                        layout="position"
                        className={`text-[32px] font-bold ${category === "Incoming" ? 'text-[#1B862F]' : 'text-black'}`}
                    >
                        {`${category === "Incoming" ? "" : "-"}Rp${amount}`}
                    </motion.h2>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col gap-2">
                    <p className="text-[#656565]">Transaction ID</p>
                    <motion.p
                        className="text-xl"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.2, delay: 0.2}}
                    >
                        {id}
                    </motion.p>
                </div>
                <div className="text-right">
                    <h2 className="text-[#656565]">Category</h2>
                    <motion.p
                        layoutId={`category-${id}`}
                        layout="position"
                        className="text-xl">
                        {category}
                    </motion.p>
                </div>
            </div>

            <div className="flex items-start justify-between">
                <div>
                    <p className="text-[#656565]">From</p>
                    <motion.p
                        className="text-xl"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.2, delay: 0.2}}
                    >
                        {pocket}
                    </motion.p>
                </div>
            <div className="w-fit">
                <motion.div
                    layoutId={`graphic-${id}`}
                    layout="position"
                    className="flex items-center justify-center h-[111px] w-[111px] bg-[#D9D9D9] rounded-lg">
                    Icon
                </motion.div>
                </div>
            </div>
        </>
    )
}

export default TransactionDetails;
