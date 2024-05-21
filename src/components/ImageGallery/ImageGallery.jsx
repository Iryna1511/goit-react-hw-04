import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ data }) {
  return (
    <ul className={css.gallery}>
      {data.map((image) => {
        return (
          <li className={css.item} key={image.id}>
            <ImageCard images={image} />
          </li>
        );
      })}
    </ul>
  );
}
