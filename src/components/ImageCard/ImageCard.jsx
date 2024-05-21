import css from "./ImageCard.module.css";

export default function ImageCard({ images }) {
  return (
    <>
      <a href={images.urls.regular}>
        <img
          className={css.img}
          src={images.urls.small}
          alt={images.description}
        />
      </a>
    </>
  );
}
