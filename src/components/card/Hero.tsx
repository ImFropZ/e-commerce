type HeroProps = {
  className?: string;
  image: string;
};

function Hero({ className = "", image }: HeroProps) {
  return (
    <div className={className + " bg-black w-full rounded-lg"}>
      <img className="w-full h-full rounded" src={image} alt="Hero Image" />
    </div>
  );
}

export default Hero;
