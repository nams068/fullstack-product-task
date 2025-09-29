"use client";

const HeroBanner = () => {
  return (
    <section className="relative rounded-xl overflow-hidden mb-8">
      {/* Arka plan resmi */}
      <img
        src="https://i0.wp.com/neutrinobursts.com/wp-content/uploads/2020/09/grey-patterend-rug-in-living-room-1-nb.jpg?resize=800%2C430&ssl=1"
        alt="Banner"
        className="w-full h-72 sm:h-96 md:h-[400px] lg:h-[500px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Yazı içeriği */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
          Özenle seçilmiş halılar
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-white drop-shadow-md max-w-2xl">
          Evinize uygun halıları keşfedin, farklı tasarım ve renk seçenekleriyle tarzınızı yansıtın.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
