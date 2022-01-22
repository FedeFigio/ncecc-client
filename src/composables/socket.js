import { io } from "socket.io-client";
import { useState } from "../composables/state";

var socket = null;
if (!socket) {
  socket = io("ws://192.168.1.213:3001", {
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

  return { checkConnection, socket, startHosting };
}
