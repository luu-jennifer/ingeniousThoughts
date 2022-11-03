import { useEffect, useState } from "react";
import axios from "axios";

const ImgSearch = () => {
  // create a state to hold the image
  const [image, setImage] = useState(null);
  const [alt, setAlt] = useState(null);

  // API error message handling and display
  const message = document.getElementsByClassName("imgContainer");
  message.innerHTML = <img src="https://placeimg.com/640/480/any" alt="This is random." />
  const [errorMessage, setErrorMessage] = useState("");

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
  .catch (_ => {
          setErrorMessage(message.innerHTML);
    });
  // eslint-disable-next-line
  }, []);

  return (
    <div className="imgSearchContainer">
      <div className="imgContainer">
        <img src={image} alt={alt} />
        {errorMessage}
      </div>
    </div>
  )
};

export default ImgSearch;