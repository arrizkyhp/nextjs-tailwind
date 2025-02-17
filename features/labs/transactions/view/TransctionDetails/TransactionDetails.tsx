import {TransactionProps} from "@/features/labs/transactions/types/transactionProps";
import { motion } from "motion/react";
import Image from "next/image";

const TransactionDetails = (props: TransactionProps) => {
    const { data } = props;
    const { id, category, iconUrl, date, time, name, amount, pocket, detail} = data || {}

    return (
        <>
            <div className="flex flex-col gap-8 md:gap-5 pb-6 md:pb-8 border-0 border-b-[3px] mb-8 border-dashed border-[#BDBDBD]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <motion.h2
                            layoutId={`name-${id}`}
                            className="text-xl md:text-[24px] font-bold line-clamp-none md:line-clamp-1 w-[300px] md:w-[350px]"
                        >
                            {name}
                        </motion.h2>
                        <motion.p
                            className="text-base text-[#656565]"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: 20}}
                            transition={{duration: 0.2, delay: 0.2}}
                        >
                            {detail}
                        </motion.p>
                    </div>
                    <div className="flex flex-col gap-1 text-left md:text-right">
                        <h2 className="hidden md:block text-sm md:text-base text-[#656565]">Date and time</h2>
                        <motion.p
                            layoutId={`date-${id}`}
                            layout="position"
                            className="text-sm md:text-xl mt-1 md:mt-0"
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
                        className={`text-2xl md:text-[32px] font-bold ${category === "Incoming" ? 'text-[#1B862F]' : 'text-black'}`}
                    >
                        {`${category === "Incoming" ? "" : "-"}Rp${amount}`}
                    </motion.h2>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col gap-1 md:gap-2">
                    <p className="text-sm md:text-base text-[#656565]">Transaction ID</p>
                    <motion.p
                        className="text-base md:text-xl"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.2, delay: 0.2}}
                    >
                        {id}
                    </motion.p>
                </div>
                <div className="flex flex-col gap-1 md:gap-2 text-right">
                    <h2 className="text-sm md:text-base text-[#656565]">Category</h2>
                    <motion.p
                        layoutId={`category-${id}`}
                        layout="position"
                        className="text-base md:text-xl">
                        {category}
                    </motion.p>
                </div>
            </div>

            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm md:text-base text-[#656565]">{category === "Incoming" ? "To" : "From"}</p>
                    <motion.p
                        className="text-base md:text-xl"
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
                        <Image
                            className="dark:invert"
                            src={iconUrl || ''}
                            alt="Next.js logo"
                            width={37}
                            height={37}
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default TransactionDetails;
