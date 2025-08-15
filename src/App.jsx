import Card from "./Card";
import { cardData } from "./data/data";
function App() {
  return (
    <main className="min-h-screen py-22 px-10 bg-Purple-50 font-barlow md:flex md:items-center md:justify-center">
      <section className=" md:grid md:grid-cols-4 md:grid-rows-2 md:gap-1  md:w-9/10 ">
        {cardData.map((item, index) => (
          <Card props={item} index={index} key={index} />
        ))}
      </section>
    </main>
  );
}

export default App;
