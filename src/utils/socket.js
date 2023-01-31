import { io } from 'socket.io-client'
import { domain } from 'general/constants/Global'
const socket = io.connect(domain)

export default socket
