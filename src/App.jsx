import VerticalSlider from "./VerticalSlider.jsx";
import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";
import person4 from "./assets/person4.jpg";
import person5 from "./assets/person5.jpg";
import person6 from "./assets/person6.jpg";
import person7 from "./assets/person7.jpg";
import person8 from "./assets/person8.jpg";
export default function App() {
  const set1 = [person1, person2, person3, person4];
  const set2 = [person5, person6, person7, person8];
  return (
    <>
      <div className="network">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,
          harum iusto mollitia illum dolorum ipsa ducimus dolorem nulla
          laudantium tempora reiciendis aperiam iure praesentium maxime fugiat
          in.
        </h1>
        <div className="set1">
          <VerticalSlider images={set1} direction={"up"} />
        </div>
        <div className="set2">
          <VerticalSlider images={set2} direction={"down"} />
        </div>
      </div>
    </>
  );
}
