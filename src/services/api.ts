import axios from "axios";

const app = axios.create({ baseURL: "https://albaapi.herokuapp.com" });

export default app;
