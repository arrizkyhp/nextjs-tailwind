export interface TransactionDataTypes {
    id: string;
    name: string;
    date: string;
    time: string;
    amount: string;
    detail: string;
    iconUrl: string;
    pocket: string;
    category: "Incoming" | "Outgoing";
}

export const DEFAULT_TRANSACTION_DATA: TransactionDataTypes = {
    id: "",
    name: "",
    date: "",
    time: "",
    amount: "",
    detail: "",
    iconUrl: "",
    pocket: "",
    category: "Incoming",
};
