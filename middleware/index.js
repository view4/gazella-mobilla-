import axios from "axios";

import {baseUrl} from "./constants"; 


const get = (url) => {

    console.log(baseUrl + url)
    return axios.get(baseUrl + url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};


const post = (url, body) => {
    return axios.post(baseUrl + url, body)
    .then((res) => res)
    .catch((err) => console.log(err));

}

export { get, post };