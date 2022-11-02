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
  .catch (_ => {
    alert("There's an error. Please try reloading the page.");
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