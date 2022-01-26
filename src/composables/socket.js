import { io } from "socket.io-client";
import { computed, ref } from "vue";
import { useState } from "../composables/state";

var socket = null;
if (!socket) {
  socket = io(import.meta.env.VITE_WS_ENDPOINT, {
    reconnectionDelayMax: 10000,
  });
}

const rooms = ref([]);
socket.on("rooms-list", (r) => {
  console.log("rooooooms", r);
  rooms.value = r;
});

const players = ref([]);
socket.on("players-list", (p) => {
  players.value = p;
});

export function useSocket() {
  const { setRoom, setUser } = useState();

  function checkConnection() {
    return socket != null;
  }

  async function startHosting(data) {
    return new Promise((resolve, reject) => {
      if (!socket) reject();
      socket.emit("create-room", data);
      socket.on("room-created", (newRoom, user) => {
        setRoom(newRoom);
        setUser(user);
        socket.off("room-created");
        resolve();
      });
    });
  }

  async function requestStart(user) {
    return new Promise((resolve, reject) => {
      if (!socket) reject();
      socket.emit("request-start", user);
      socket.on("start-game", () => {
        socket.off("start-game");
        resolve();
      });
    });
  }

  // rooms management
  async function getRooms() {
    if (!socket) return;
    socket.emit("get-rooms");
  }

  // players management
  async function getPlayers(room) {
    if (!socket) return;
    socket.emit("get-players", room);
  }

  return { checkConnection, socket, startHosting, requestStart, getRooms, rooms, getPlayers, players };
}
