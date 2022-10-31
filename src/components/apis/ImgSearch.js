import { useEffect, useState } from "react";
import axios from "axios";

const ImgSearch = () => {
// create an image search modal that will display a random image from the API giphy.com
// create a state to hold the image
const [image, setImage] = useState(null);
// create a state to hold the image alt text
const [alt, setAlt] = useState(null);
// const apiKey = "KFVEc86N2FCiSy2KCYuY837hBK5ae4PN";
// create a useEffect to make an API call to get the image
useEffect(() => {
  axios({
  //   url: `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
  //   method: "GET",
  // })
  //   .then((response) => {
  //     console.log(response.data.data.title);
  //     setImage(response.data.data.embed_url);
  //     setAlt(response.data.data.title);

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
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
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