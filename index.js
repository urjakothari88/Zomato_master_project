//Importing ENV variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";



//config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//Microservice Routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Menu from "./API/Menu";
import Order from "./API/Orders";
import Review from "./API/Review";


//Database Connection
import ConnectDB from "./database/connection";
import passport from "passport";


const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);
routeConfig(passport);





// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/review", Review);




zomato.get("/",(req,res) => res.json({message: "Setup Success"}));

zomato.listen(4000, ()=>
ConnectDB().then(()=>console.log("Server is  running🚀"))
.catch(()=>console.log("Server is  running, but DB connection failed")));

