import axios from "axios";
import { BACK_API } from "./index.js";

export const getAllTransactions = async () => {
    try {
        const allTransactions = await axios.get(`${BACK_API}/movements`);
        return allTransactions.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getTransactionById = async (transactionId) => {
    try {
        const transaction = await axios.get(`${BACK_API}/movements/${transactionId}`);
        return transaction.data;
    } catch (error) {
        throw new Error(error);        
    }
}

export const updateTransaction = async (transactionId, amount, date, category, type, description) => {
    try {
        const requestBody = {
            id: transactionId,
            date, 
            type, 
            amount, 
            category, 
            description
        };
        const transaction = await axios.put(`${BACK_API}/movements/${transactionId}`, requestBody)
        return transaction.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const addTransaction = async (transactionId, amount, date, category, type, description) => {
    try {
        const requestBody = {
            transactionId,
            date,
            type,
            amount,
            category,
            description
        }
        const newTransaction = await axios.post(`${BACK_API}/movements`, requestBody)
        return newTransaction.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteTransaction = async (transactionId) => {
    try {
        const transaction = await axios.delete(`${BACK_API}/movements/${transactionId}`);
        return transaction.data; 
    } catch (error) {
        throw new Error(error);
    }
}

export const getInitialBalance = async () => {
    try {
        const response = await axios.get(`${BACK_API}/initialBalance`);
        return response.data;
    } catch (error) {
        console.error('Error fetching initial balance:', error);
        throw new Error(error);
    }
};