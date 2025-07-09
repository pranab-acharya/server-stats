import "dotenv/config"
import expres from "express"
import http from "http"
import { Server } from "socket.io"
import { getStats } from "./utils/getStats.js"
import cors from "cors";


const PORT = process.env.PORT || 6002;
const app = expres();

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
})
app.use(cors({
    allowedHeaders: "*",
    origin: "*"
}));

app.use(expres.static("public"));

io.on('connection', socket => {
    console.log(`Client connected: ${socket.id}`)

    const interval = setInterval(async () => {
        const stats = await getStats();
        socket.emit('server-stats', stats);
    }, process.env.POLLING_INTERVAL || 3000)

    socket.on('disconnect', () => {
        clearInterval(interval);
        console.log(`Client disconnected: ${socket.id}`)
    });
});

app.get('/', (req, res) => res.send('Real time server-stats running...'));

server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))