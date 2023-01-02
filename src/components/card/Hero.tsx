type HeroProps = {
  className?: string;
  image: string;
};

function Hero({ className = "", image }: HeroProps) {
  return (
    <div className={className + " rounded-lg grid place-items-center "}>
      <img className="h-full rounded" src={image} alt="Hero Image" />
    </div>
  );
}

export default Hero;
