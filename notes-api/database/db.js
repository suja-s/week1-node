import { data } from "../data/data.js";

export async function getDataFromDb() {
    // console.log("Fetching data from the database...", data);
    return data;
}