const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, { path: 'ws' })

app.use(cors());
app.use(express.json());
app.use('/', (req, res) => {
    res.send('hello');
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
    console.log(`listening on ${port}`);
});

io.on('connection', socket => {
    console.log('server connected');

    const fakeData1 = {
        categoryId: "station",
        datetime: 1643567425,
        heading: 0.91,
        img_x: 40,
        img_y: 70,
        x: 2.0411,
        y: 22.435,
        z: 0.0,
        battery: 97,
        deviceId: "DRONE0001",
        voltage: 21.35
    }

    const fakeDataJob = setInterval(() => {
        io.emit('data', fakeData1)
    }, 1000);
});