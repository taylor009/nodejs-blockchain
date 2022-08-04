const Websocket = require('ws');

const P2P = process.env.P2P || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2pServer {
	constructor(blockchain) {
		this.blockchain = blockchain;
		this.sockets = [];
	}

	listen() {
		const server = new Websocket.Server({ port: P2P });
		server.on('connection', socket => this.connectSocket(socket));
		console.log(`Listening for peer-to-peer connections on ${P2P}`);
	}

	connectSocket(socket) {
		this.sockets.push(socket);
		console.log('Connected to a new peer');
		socket.on('message', message => this.messageHandler(message, socket));
	}
}
