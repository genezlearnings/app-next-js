import Image from 'next/image';

const CourseHero = ({ title, description, duration, price, image }) => {
  return (
    <section className="relative bg-gradient-to-r from-[#7b2979] to-[#9d3a9b] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-6">{description}</p>
            <div className="flex flex-wrap gap-6 mb-6">
              <div>
                <p className="text-sm text-white/80">Duration</p>
                <p className="text-xl font-semibold">{duration}</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Course Fee</p>
                <p className="text-2xl font-bold">{price}</p>
              </div>
            </div>
            <button className="bg-white text-[#7b2979] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition">
              Enroll Now
            </button>
          </div>
          <div className="md:w-1/2">
            {image && (
              <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden">
                <Image 
                  src={image} 
                  alt={title} 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
