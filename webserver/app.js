var http = require("http")
//create a server
http.createServer(function(req,res){
   console.log("server created");
   res.write("<h1>Server Created.</h1>");
   res.end();
}).listen(3002)

//file system module
const fs = require("fs")
http.createServer(function (req, res) {
   //read a file
   fs.readFile("example.html", function (err, data) {
      res.write(data);
      res.end();
   });
   //append sth to file
   fs.appendFile("example.html", "<h2>Sunu da ekle</h2>", function (err) {
      if (err) throw err;
      console.log("kaydedildi")
   });
   //create a new file

   fs.open('createdFile.html', 'w', function (err, file) {
      if (err) throw err;
      console.log('Dosya Oluşturuldu');
   });
   fs.appendFile("createdFile.html", "Yeni Oluşturulan Dosyaya Eklendi", function (err, data) {
      if (err) throw err;
      console.log("kaydedildi")
   })

   //change file name
   fs.rename("createdFile.html", "secondFile.html", function (err) { });
}).listen(3003)