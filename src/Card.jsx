export default function Card({ props, index }) {
  const { name, occupation, summary, quote, image } = props;
  const backgroundColors = [
    "bg-Purple-500 text-white",
    "bg-Grey-400 text-white",
    "bg-White text-Grey-500",
    "bg-Dark-blue text-white",
    "bg-White text-Grey-500",
  ];

  return (
    <article
      className={`flex flex-col gap-4 mb-10 last-of-type:mb-0 p-8 rounded-xl  ${backgroundColors[index]}`}
      key={index}
    >
      <div className="flex items-center gap-4">
        <img
          className="rounded-full border-1 border-Purple-50 w-12 h-12"
          src={image}
          alt={`An image of ${name}`}
        />
        <div className="flex flex-col">
          <h2 className="font-semibold">{name}</h2>
          <p className="font-normal">{occupation}</p>
        </div>
      </div>
      <p className="font-medium text-2xl">{summary}</p>
      <p className="">{quote}</p>
    </article>
  );
}
