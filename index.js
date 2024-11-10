import express from "express";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", weatherRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
