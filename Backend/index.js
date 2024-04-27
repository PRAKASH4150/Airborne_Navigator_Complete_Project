const path = require('path');
const fs = require('fs');
const http = require('http');
const { MongoClient } = require('mongodb');
const httpPort= process.env.PORT ||4035;

const getFileContentType = (filePath) => {
  const extName = path.extname(filePath);
  const contentTypeObj = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.html': 'text/html',
    '.png': 'image/png',
    '.pdf': 'application/pdf',
    '.jpg': 'image/jpeg'
  };
  return contentTypeObj[extName] || 'text/plain';
}

const renderErrorPage = (res) => {
  fs.readFile(path.join(__dirname, "public", "errorPage.html"), (error, data) => {
    if (error) {
      console.log("Something went wrong when rendering the error page");
      console.error(error);
    }
    else {
      res.writeHead(200, "Success", { "content-type": "text/html" });
      res.write(data, "utf-8");
      res.end();
    }
  });
}

async function establishDBConnection() {
  const userName = "moka";
  const password = "prakash"
  const uri = `mongodb+srv://${userName}:${password}@cluster0.yjhsbqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("connection happened here")
    const data = await fetchFlightDetails(client);
    return data;
  } catch (e) {
    console.log("Something went wrong while connecting to db....");
    console.error(e);
  } finally {
    await client.close();
    console.log("We closed the connection ")
  }
}

async function fetchFlightDetails(client) {
  try {
    const cursor = client.db("airborne_navigator_db").collection("flight_departures").find({});
    const results = await cursor.toArray();
    return JSON.stringify(results);
  }
  catch (error) {
    console.log("Something went wrong when fetching the data");
    console.error(error);
  }
};

http.createServer((req, res) => {
  if (req.url === '/api') {
    const content = establishDBConnection();
    content.then((bookDetails) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(bookDetails);
    }
    );
  }
  else {
    let filePath = path.join(__dirname, "public", req.url === '/' ? "index.html" : req.url);
    fs.readFile(filePath, (error, data) => {
      if (error) {
        if (error.code = "ENOENT") {
          renderErrorPage(res);
        }
      }
      else {
        const contType = getFileContentType(filePath);
        res.writeHead(200, "Success", { "content-type": contType });
        res.write(data, "utf-8");
        res.end();
      }
    });
  }
}).listen(httpPort, () => console.log(`Server running on Port ${httpPort}`));