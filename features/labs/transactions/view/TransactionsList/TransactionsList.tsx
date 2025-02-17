import {transactionsData} from "@/features/labs/transactions/constants/transactionsData";
import {TransactionProps} from "@/features/labs/transactions/types/transactionProps";
import { motion} from "motion/react";
import Image from "next/image";

const TransactionsList = (props: TransactionProps) => {
    const { setSelectedTransaction } = props;

    return (
        <>
            <div
                className="flex flex-col gap-6"
            >
                {transactionsData.map((transaction) => (
                    <motion.div
                        className="flex flex-col gap-6"
                        key={transaction.id}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                    >
                        <button
                            onClick={() => setSelectedTransaction(transaction)}
                            className="flex rounded-lg md:py-2.5 py-4 px-2 md:px-4 bg-[#ECECEC] hover:bg-[#E4E4E4] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.25)] gap-3 md:gap-5 items-center cursor-pointer"
                        >
                            <div className="w-fit">
                                <motion.div
                                    layoutId={`graphic-${transaction.id}`}
                                    layout="position"
                                    className="flex items-center justify-center h-[41px] w-[41px] md:h-[85px] md:w-[85px] bg-[#D9D9D9] rounded-full">
                                    <Image
                                        className="dark:invert w-[21px] h-[21px] md:w-[37px] md:h-[37px]"
                                        src={transaction.iconUrl}
                                        alt="Next.js logo"
                                        width={37}
                                        height={37}
                                        priority
                                    />
                                </motion.div>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="text-left">
                                    <motion.h2
                                        layoutId={`name-${transaction.id}`}
                                        className="text-base md:text-xl font-bold line-clamp-1 w-[130px] md:w-[250px]"
                                    >
                                        {transaction.name}
                                    </motion.h2>
                                    <motion.p
                                        layoutId={`date-${transaction.id}`}
                                        layout="position"
                                        className="text-sm md:text-base text-[#656565]"
                                    >
                                        <motion.span>
                                            {transaction.date}
                                        </motion.span>
                                    </motion.p>
                                </div>
                                <div className="text-right">
                                    <motion.h2
                                        layoutId={`amount-${transaction.id}`}
                                        layout="position"
                                        className={`text-base md:text-xl font-bold ${transaction.category === "Incoming" ? 'text-[#1B862F]' : 'text-black'}`}
                                    >
                                        {`${transaction.category === "Incoming" ? "" : "-"}Rp${transaction.amount}`}
                                    </motion.h2>
                                    <motion.p
                                        layoutId={`category-${transaction.id}`}
                                        layout="position"
                                        className="text-sm md:text-base text-[#656565]"
                                    >
                                        {transaction.category}
                                    </motion.p>
                                </div>
                            </div>
                        </button>
                    </motion.div>
                ))}
            </div>
        </>
    )
}


export default TransactionsList;
