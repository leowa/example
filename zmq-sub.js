// https://github.com/zeromq/zeromq.js
// npm install or link zeromq first
var zmq = require('zeromq')
  , sock = zmq.socket('sub');

  sock.connect('tcp://127.0.0.1:9090');
  sock.subscribe('');
  // or sub to just one specific topic
  // sock.subscribe('sports.general');
  console.log('Subscriber connected to port 9090');

  sock.on('message', function(topic, message) {
    console.log('received a message related to:', topic.toString(), 'containing message:', message.toString());
    });
