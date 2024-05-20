export default function ImageCard(images) {
  return (
    <>
      <a href={images.urls.regular}>
        <img src={images.urls.small} alt={images.description} />
      </a>
    </>
  );
}
