type HeroProps = {
  className?: string;
};

function Hero({ className = "" }: HeroProps) {
  return <div className={className + " bg-black w-full rounded-lg"}></div>;
}

export default Hero;
