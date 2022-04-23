const http = require('http');  // require คือ fn เรียกใช้ http ออบเจคที่ NodeJS พัฒนาไว้แล้ว

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'}); // เพิ่ม http header 200 คือ สถานะสมบูรณ์ ข้อมูลใน body เป็นแบบ text
  response.end('Hello NodeJSn');                 // ส่งสัญญาณให้ server รู้ว่ามี header และ body สมบูรณ์พร้อมข้อความ Hello NodeJS
}).listen(8124);                                     // สร้าง http server ขึ้นมา โดยเปิด port 8124
console.log('Server running at http://127.0.0.1:8124/');
console.log('Server running at http://127.0.0.1:8124/');