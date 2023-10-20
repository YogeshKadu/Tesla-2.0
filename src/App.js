import Header from "./_components/Header";
import ModelS from "./_components/ModelS";
import { CarSection1, CarSection2, CarSection3, CarSection4, CarSection5 } from "./_components/CarSection";

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll bg-[#cbd7e3] scroll-smooth">
      <Header />
      <section id="model1" className="snap-center">
        <CarSection1 />
      </section>
      <section id="model2" className="snap-center">
        <CarSection2 />
      </section>
      <section id="model3" className="snap-center">
        <CarSection3 />
      </section>
      <section id="model4" className="snap-center">
        <CarSection4 />
      </section>
      <section id="model5" className="snap-center">
        <CarSection5 />
      </section>
      <section id="model5" className="snap-center">
        <CarSection5 />
      </section>
    </div>
  );
}

export default App;