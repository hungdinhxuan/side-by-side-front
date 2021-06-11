import io from "socket.io-client";
import {getCookie} from "./handleCookie"

export const socket = io('https://rent-me-now.herokuapp.com', {
    query: getCookie("token")
});