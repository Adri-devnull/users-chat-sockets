let allUsers = [];
let messages = [];

const establishSocketConnection = (socket, io) => {
  console.log("Cliente conectado");

  // INTRODUCE AL USUARIO AL CHAT
  socket.on("login", (username) => {
    socket.username = username;
    allUsers.push({ id: socket.id, username });
    io.emit("users", allUsers);
  });
  // DESCONECTA AL USUARIO DEL CHAT
  socket.on("disconnect", () => {
    allUsers = allUsers.filter((user) => socket.id !== user.id);
    io.emit("users", allUsers);
  });

  // RECIBE MENSAJE DEL USUARIO Y DEVUELVE TODOS
  socket.on("message", (msg) => {
    messages.push({
      username: socket.username,
      message: msg.msg,
      color: msg.color
    });
    io.emit("allMessages", messages);
  });

  io.emit("allMessages", messages);

  // MUESTRA TODOS LOS USUARIOS DEL CHAT A CADA UNO DE LOS SOCKETS
  io.emit("users", allUsers);
};

module.exports = establishSocketConnection;
