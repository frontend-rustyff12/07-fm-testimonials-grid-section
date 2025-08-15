export default function Card({ props, index }) {
  const { name, occupation, summary, quote, image } = props;
  const backgroundColors = [
    "bg-Purple-500 text-white",
    "bg-Grey-400 text-white",
    "bg-White text-Grey-500",
    "bg-Dark-blue text-white",
    "bg-White text-Grey-500",
  ];

  const gridPosition = [
    "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 md:bg-[url('/public/bg-pattern-quotation.svg')] bg-no-repeat bg-position-(--custom-bg-position)",
    "md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2",
    "md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3",
    "md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3",
    "md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3",
  ];

  return (
    <article
      className={`grid grid-cols-[45px_auto] grid-rows-[16px_16px_auto_minmax(auto,1fr)] py-8 px-7 m-4 mb-12 md:m-4 rounded-xl shadow-[35px_50px_20px_5px_rgba(0,_0,_0,_0.15)] ${backgroundColors[index]} ${gridPosition[index]} `}
      key={index}
    >
      <img
        className="h-10 w-auto rounded-full border-1 border-Purple-50 col-start-1 col-end-2 row-start-1 row-end-3 "
        src={image}
        alt={`An image of ${name}`}
      />

      <h2 className="font-medium text-sm col-start-2 col-end-3 row-start-1 row-end-2">
        {name}
      </h2>
      <p className="font-normal text-xs mt-0.5 col-start-2 col-end-3 row-start-2 row-end-3">
        {occupation}
      </p>

      <p className="font-medium text-xl my-4 col-start-1 col-end-3 row-start-3 row-end-4">
        {summary}
      </p>
      <p className="text-sm/1.6 line-h col-start-1 col-end-3 row-start-4 row-end-5">
        {quote}
      </p>
    </article>
  );
}
