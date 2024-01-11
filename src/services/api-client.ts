import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bd37ed2df8ce4befa6f57949bfc36f72",
  },
});
