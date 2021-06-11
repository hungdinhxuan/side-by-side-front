
import React, {createContext} from 'react';
import socket from '../Services/socket';

export const socketio = socket;
export const socketContext = createContext();



