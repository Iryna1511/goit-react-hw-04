import { useEffect, useState } from "react";
// import css from "./App.module.css";
import { getImages } from "../api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  //  const [isLoading, setIsLoading] = useState(false);
  //  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (query.trim() === "") return;

    async function fetchImages() {
      try {
        const images = await getImages(query, page);
        setImages((prevState) => [...prevState, ...images]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchImages();
  }, [query, page]);
  // console.log(getArticles("sun", 1));
  return (
    <div>
      <SearchBar />
      <ImageGallery data={images} />
    </div>
  );
}

export default App;
