import io from "socket.io-client";
import {getCookie} from "./handleCookie"

const token = getCookie("token");
export const socket = io('https://rent-me-now.herokuapp.com', {
    query: {token}
});