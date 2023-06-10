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
        <h3 className="text-4xl font-extrabold">{name}</h3>
        <p className="text-base">{description}</p>
        <p className="font-extralight text-sm">{author}</p>
        <p className="font-extralight">Total Duration: {duration}</p>
        <p className="font-extralight mb-5">Published on: {publishDate}</p>
      </div>
    </div>
  );
}
