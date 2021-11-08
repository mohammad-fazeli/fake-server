const jsonServer = require("json-server");
const server = jsonServer.create();

//Routes
const mobile = jsonServer.router("./db/mobile.json");
const mobileproducts = jsonServer.router("./db/mobileproducts.json");
const laptop = jsonServer.router("./db/laptop.json");
const laptopproducts = jsonServer.router("./db/laptopproducts.json");
const book = jsonServer.router("./db/book.json");
const bookpproducts = jsonServer.router("./db/bookpproducts.json");
const clothing = jsonServer.router("./db/clothing.json");
const clothingproducts = jsonServer.router("./db/clothingproducts.json");
const menshoes = jsonServer.router("./db/menshoes.json");
const menshoesproducts = jsonServer.router("./db/clothingproducts.json");
const menswear = jsonServer.router("./db/menswear.json");
const menswearproducts = jsonServer.router("./db/clothingproducts.json");
const womenshoes = jsonServer.router("./db/womenshoes.json");
const womenshoesproducts = jsonServer.router("./db/clothingproducts.json");
const womenswear = jsonServer.router("./db/laptop.json");
const womenswearproducts = jsonServer.router("./db/clothingproducts.json");
const posts = jsonServer.router("./db/posts.json");
const products = jsonServer.router("./db/products.json");
const db = jsonServer.router("./db/db.json");

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);

server.use(db);
server.use("/posts", posts);
server.use("/products", products);

server.use("/mobile", mobile);
server.use("/mobileproducts", mobileproducts);

server.use("/laptop", laptop);
server.use("/laptopproducts", laptopproducts);

server.use("/book", book);
server.use("/bookpproducts", bookpproducts);

server.use("/clothing", clothing);
server.use("/clothingproducts", clothingproducts);

server.use("/menshoes", menshoes);
server.use("/menshoesproducts", menshoesproducts);

server.use("/menswear", menswear);
server.use("/menswearproducts", menswearproducts);

server.use("/womenshoes", womenshoes);
server.use("/womenshoesproducts", womenshoesproducts);

server.use("/womenswear", womenswear);
server.use("/womenswearproducts", womenswearproducts);

server.listen(port);
