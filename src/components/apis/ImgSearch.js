import { useEffect, useState } from "react";
import axios from "axios";

const ImgSearch = () => {
  // create a state to hold the image
  const [image, setImage] = useState(null);
  const [alt, setAlt] = useState(null);

  const apiKey2 = "BaDbEn9Gc7pvnCGJdIHICvDF1Nd_i9gYbjB-4qTzp0g"

useEffect(() => {
  axios({
    // api call from unsplash
    url: 'https://api.unsplash.com/photos/random',
    method: 'GET',
    dataResponse: 'json',
    params: {
      client_id: apiKey2,
      query: 'funny',
      }
  })
  .then((res) => {
    setImage(res.data.urls.regular);
    setAlt(res.data.alt_description);
  })
  .catch(function (error) {
      alert("No images available currently. Add a text only thought or come back later");
  });
  // eslint-disable-next-line
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