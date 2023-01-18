import io from 'socket.io-client'

// export const SOCKET_EMIT_USER_WATCH = 'user-watch';
// export const SOCKET_EVENT_USER_UPDATED = 'user-updated';
// export const SOCKET_EVENT_REVIEW_ADDED = 'review-added';
// export const SOCKET_EVENT_REVIEW_ABOUT_YOU = 'review-about-you';


const baseUrl = (process.env.NODE_ENV === 'production')? '' : '//localhost:3030'
export const socketService = createSocketService()
// export const socketService = createDummySocketService()

// For DEBUG:
// window.socketService = socketService

socketService.setup()


function createSocketService() {
  var socket = null;
  const socketService = {
    async setup() {
      console.log(' i setup' ,baseUrl );
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb=null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      console.log('i will emit', eventName, data);
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}




// Basic Tests
// function cb(x) {console.log('Got Baba:', x)}
// socketService.on('baba', cb)
// socketService.on('mama', console.log)
// socketService.on('mama', alert)
// socketService.emit('baba', 'DATA123')
// socketService.off('baba', cb)

