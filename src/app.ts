import express from "express";
import path from "path";
import router from "./router"
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config"

import session from "express-session";
import ConnectMongoDBSession from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDBSession(session);
var store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",
});


/* 1-ENTRANCE */
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/* 2-SESSION */
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 3// 3h
        },
        store: store,
        resave: true,   // 10:30 auth => 13:30  12:00 => 15:00
        saveUninitialized: true,
    }));

app.use(function (req, res, next) {
    const sessionInstance = req.session as T;
    res.locals.session = sessionInstance.member;
    next();
});

/* 3-VIEWS */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* 4-ROUTERS */
app.use("/admin", routerAdmin);// EJS
app.use("/", router); // REACT

export default app;