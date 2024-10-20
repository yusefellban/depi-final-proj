import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error("error:" + err));

export const fetchFromTMDB = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjM1MDk4ZWJmMzM2ZmJlY2UzMmRkZDIwN2VkYzQ0NiIsIm5iZiI6MTcyOTQxMzY4NS4wOTM5OTYsInN1YiI6IjY3MTRjMDM1OTlmMjJmMzI2YWFkNjNkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zurm9NP8opRZfFHLthNfn4ld3hMdgi5mJiYRDZx49rU",
    },
  };
  const res = await axios.get(url, options);
  if (res.status !== 200) {
    throw new Error("Failed to fetch data from TMDB" + res.statusText);
  }
  return res.data;
};
