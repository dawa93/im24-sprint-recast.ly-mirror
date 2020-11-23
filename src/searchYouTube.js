const axios = require("axios");
// api key 제거

export const searchYouTube = ({ query, max, key }, callback) => {
  let url = new URL("https://www.googleapis.com/youtube/v3/search");
  let params = {
    q: query,
    part: "snippet",
    maxResults: max,
    key: key,
    type: "video",
  };

  url.search = new URLSearchParams(params).toString();

  // fetch 사용
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => callback(data.items));

  // axios 사용
  axios.get(url).then((res) => callback(res.data.items));
};
