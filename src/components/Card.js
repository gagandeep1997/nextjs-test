export function Card({
  name,
  description,
  author,
  publishDate,
  duration,
  image,
}) {
  return (
    <div className="flex flex-row border-b-2 my-5">
      <img
        className="inline-block mb-5"
        src={image}
        alt="alt123"
        width={100}
        height={90}
      />
      <div className="ml-3">
        <h3 className="text-3xl">{name}</h3>
        <p>{description}</p>
        <p className="font-light">{author}</p>
      </div>
    </div>
  );
}
