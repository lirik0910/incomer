import IO from 'socket.io-client';

/**
 * Create new socket connection via socket
 * and save connection in global static object
 * @param {String} host
 * @param {Number} port 
 */
var io = null;
export default (host = process.env['SOCKET_HOST'] || 'ws://127.0.0.1', port = process.env['SOCKET_PORT'] || 3400) => {
	if (!io) {
		io = IO(host + ':'+ port);
	}
	return io;
}