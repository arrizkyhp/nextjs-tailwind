import {Dispatch, SetStateAction} from "react";
import {TransactionDataTypes} from "@/features/labs/transactions/types/transactionDataTypes";

export interface TransactionProps {
    setSelectedTransaction: Dispatch<SetStateAction<TransactionDataTypes>>;
    data?: TransactionDataTypes;
}
