import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery(data) {
  return (
    <ul>
      {data.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard images={image} />
          </li>
        );
      })}
    </ul>
  );
}
