var user = null;
var room = null;

export function useState() {
  function setUser(u) {
    user = u;
  }

  function setRoom(r) {
    room = r;
  }

  return { room, setRoom, user, setUser };
}
