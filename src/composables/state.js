var room = null;

export function useState() {
  function setRoom(r) {
    room = r;
  }

  return { room, setRoom };
}
