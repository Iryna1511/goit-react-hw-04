import { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

// import css from "./App.module.css";
import { getImages } from "../api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const imageGalleryRef = useRef();

  useEffect(() => {
    async function fetchImages() {
      if (query.trim() === "") return;
      try {
        setIsError(false);
        setIsLoading(true);
        const imagesData = await getImages(query, page);
        setImages((prevState) => [...prevState, ...imagesData.results]);
        setIsLast(() => imagesData.total_pages === page);
        if (imagesData.total === 0) {
          const notifyNoResults = () =>
            toast.error("We did not find anything for your query. Try again!", {
              position: "top-right",
            });
          return notifyNoResults();
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = async (topic) => {
    setQuery(topic);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
    console.log(imageGalleryRef.current);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {images.length > 0 && (
        <ImageGallery ref={imageGalleryRef} data={images} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMsg />}

      {images.length > 0 && !isLoading && !isLast && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </div>
  );
}

//  const handleScroll = () => {
//    const form = formRef.current;
//    const dims = form.getBoundingClientRect();

//    window.scrollTo({
//      top: dims.top,
//      behavior: "smooth",
//    });
//  };
