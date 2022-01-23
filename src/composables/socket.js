import { io } from "socket.io-client";
import { useState } from "../composables/state";

var socket = null;
if (!socket) {
  socket = io(import.meta.env.VITE_WS_ENDPOINT, {
    reconnectionDelayMax: 10000,
  });
}

export function useSocket() {
  const { setRoom } = useState();

  function checkConnection() {
    return socket != null;
  }

  async function startHosting(data) {
    return new Promise((resolve, reject) => {
      if (!socket) reject();
      socket.emit("start-hosting", data);
      socket.on("hosting-started", (newRoom) => {
        setRoom(newRoom);
        resolve(newRoom);
      });
    });
  }

  async function requestStart(user) {
    return new Promise((resolve, reject) => {
      if (!socket) reject();
      socket.emit("request-start", data);
      socket.on("start-game", () => {
        
        resolve();
      });
    });
  }

  return { checkConnection, socket, startHosting, requestStart };
}
