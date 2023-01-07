type HeroProps = {
  image: string;
};

function Hero({ image }: HeroProps) {
  return (
    <div className="h-full rounded-lg">
      <img className="h-full rounded mx-auto" src={image} alt="Hero Image" />
    </div>
  );
}

export default Hero;
