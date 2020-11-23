export const searchYouTube = ({ query, max, key }, callback) => {
  let url = new URL('https://www.googleapis.com/youtube/v3/search'); 
  let params = {
    q: query,
    part: 'snippet',
    maxResults: max,
    key: key
  }

  url.search = new URLSearchParams(params).toString();  

  fetch(url)
  .then(response => response.json())
  .then(data => callback(data.items));
};