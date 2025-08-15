import Card from "./Card";
import { cardData } from "./data/data";
function App() {
  return (
    <main className="min-h-screen py-20 px-10 bg-Purple-50 font-barlow">
      <section className="">
        {cardData.map((item, index) => (
          <Card props={item} index={index} key={index} />
        ))}
      </section>
    </main>
  );
}

export default App;
