import { Success, Info, Error, Warning } from "../assets/svg";

function PreloadImage() {
  return (
    <div className="hidden">
      <img src={Success} alt="1" />
      <img src={Info} alt="1a" />
      <img src={Error} alt="1b" />
      <img src={Warning} alt="1c" />
    </div>
  );
}

export default PreloadImage;
