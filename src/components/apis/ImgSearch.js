import { useEffect, useState } from "react";
import axios from "axios";

const ImgSearch = () => {
// create a state to hold the image
const [image, setImage] = useState(null);
const [alt, setAlt] = useState(null);

useEffect(() => {
  axios({
    // api call from unsplash
    url: 'https://api.unsplash.com/photos/random',
    method: 'GET',
    dataResponse: 'json',
    params: {
      client_id: 'oc3aiu5YQIwIlbFho-eQ1bTkVtZTwqmVgSMNcAeFJ-k',
      query: 'funny',
      }
  })
  .then((res) => {
    setImage(res.data.urls.regular);
    setAlt(res.data.alt_description);
  })
  //handle error from Axios docs
  .catch (function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
    }
    console.error(error.config);
  });
}, []);

  return (
    <div className="imgSearchContainer">
      <div className="imgContainer">
      <img src={image} alt={alt} />
      </div>
    </div>
  )
};

export default ImgSearch;