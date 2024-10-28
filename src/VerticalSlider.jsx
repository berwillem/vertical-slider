import Marquee from "react-fast-marquee";
export default function VerticalSlider({ images, direction }) {
  return (
    <Marquee
      speed={50}
      direction={direction}
      delay={3}
      pauseOnHover
      className="marquee"
    >
      {images.map((image, index) => (
        <img
          src={image}
          alt="image"
          key={index}
          className={`image-${index % 2 === 0 ? "even" : "odd"}`}
        />
      ))}
    </Marquee>
  );
}
