import { useEffect, useState } from "react";
import axios from "axios";

const ImgSearch = () => {
  console.log("ImgSearch rendered");
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
    .catch((err) => console.log(err));
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