import axios from "axios";
import { FETCH_DATA } from "./ActionType";

export const getData = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => dispatch(fetchDataAction(res.data)))
    .catch((err) => console.log("error while fetching:", err));
};

export const fetchDataAction = (payload) => {
  return { type: FETCH_DATA, payload };
};
