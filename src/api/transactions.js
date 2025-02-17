import axios from "axios";
import { BACK_API } from "./index.js";

export const getAllTransactions = async () => {
    try {
        const allTransactions = await axios.get(`${BACK_API}/movements`);
        console.log(allTransactions.data);
        return allTransactions.data;
    } catch (error) {
        throw new Error(error);
    }
}