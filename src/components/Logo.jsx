import hm from "../assets/HeroMandala.svg";
import vf from "../assets/VFilmsLogo.png"; // ← this import can be removed if you don't need the VFilms logo anymore
// Replace the SVG VIcon with an image placeholder
const Logo = () => {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
      {/* Mandala background */}
      <img
        src={hm}
        alt="Decorative mandala background"
        className="absolute inset-0 w-full h-full object-contain opacity-70"
      />

      {/* Foreground image placeholder (replace src below) */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src={vf}
          alt="Logo"
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
