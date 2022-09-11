import axios from "axios";

const instance = axios.create({
    baseURL: "https://631b73b11b470e0e12eec268.mockapi.io/contacts"
});

export const getContacts = async() => {
    const {data} = await instance.get('/');
    return data;
}