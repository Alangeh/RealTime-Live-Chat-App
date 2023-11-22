var socket = new WebSocket('WS://localhost:9000/ws')

let connect = (cb) => {
    console.log("connecting...")

    socket.onopen = () => {
        console.log("Successfully connected")
    }

    socket.onmessage = (msg) => {
        console.log("Message from websocket: ", msg);
    }

    socket.onclose = (event) => {
        console.log("socket closed connection: ", event);
    }

    socket.onerror = (error) => {
        console.log("socket error: ", error)
    }
};

let sendMsg = (msg) => {
    console.log("Sending Message: ", msg);
    socket.send(msg);
}