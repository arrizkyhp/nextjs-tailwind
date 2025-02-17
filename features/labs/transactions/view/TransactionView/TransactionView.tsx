"use client";

import TransactionDetails from "../TransctionDetails";
import {useState} from "react";
import TransactionsList from "../TransactionsList";
import {DEFAULT_TRANSACTION_DATA, TransactionDataTypes} from "@/features/labs/transactions/types/transactionDataTypes";
import { AnimatePresence, motion, MotionConfig } from "motion/react";

const TransactionView = () => {
    const [selectedTransaction, setSelectedTransaction] = useState<TransactionDataTypes>(DEFAULT_TRANSACTION_DATA);

    const handleClose = () => {
        setSelectedTransaction(DEFAULT_TRANSACTION_DATA);
    };


    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
            <div className="flex items-center justify-center h-full">
              <motion.div animate={{  height: selectedTransaction?.id ? 538 : 628}}  className="bg-white px-4 mx-4 md:mx-0 md:px-6 py-9 rounded-lg shadow-custom-shadow w-[450px] md:w-[600px]">
                      <div className="flex items-center justify-between pb-8">
                          <AnimatePresence mode="wait" initial={false}>
                          {selectedTransaction.id ? (
                              <>
                                  <motion.h1
                                      key="details-heading"
                                      className="font-bold text-[#656565] text-2xl"

                                  >
                                      Transaction&nbsp;
                                      <motion.span
                                          className="inline-block"
                                          initial={{opacity: 0, y: "-20%", filter: "blur(2px)"}}
                                          animate={{opacity: 1, y: "0", filter: "blur(0)"}}
                                          exit={{opacity: 0, y: "-20%", filter: "blur(2px)"}}
                                          transition={{duration: 0.2, type: "tween"}}
                                      >
                                          Details
                                      </motion.span>
                                  </motion.h1>
                                  <motion.button
                                      type="button"
                                      onClick={handleClose}
                                      initial={{opacity: 0, x: "20%", filter: "blur(2px)"}}
                                      animate={{opacity: 1, x: "0", filter: "blur(0)"}}
                                      exit={{opacity: 0, x: "20%", filter: "blur(2px)"}}
                                      transition={{duration: 0.2, type: "tween"}}
                                  >
                                      X
                                  </motion.button>
                              </>
                          ) : (

                              <motion.h1
                                  key="transactions-heading"
                                  className="font-bold text-[#656565] text-2xl inline-block"
                              >
                                  Transaction
                                  <motion.span
                                      className="inline-block"
                                      initial={{opacity: 0, y: "20%"}}
                                      animate={{opacity: 1, y: "0"}}
                                      exit={{opacity: 0, y: "-20%"}}
                                      transition={{ type: "tween"}}
                                  >
                                      s
                                  </motion.span>
                              </motion.h1>
                          )}
                          </AnimatePresence>
                      </div>

                  {selectedTransaction?.id ?
                      <TransactionDetails
                          setSelectedTransaction={setSelectedTransaction}
                          data={selectedTransaction}
                      /> :
                      <TransactionsList
                          setSelectedTransaction={setSelectedTransaction}
                      />
                  }
              </motion.div>
            </div>
            </MotionConfig>
        </AnimatePresence>
    )
}

export default TransactionView;
