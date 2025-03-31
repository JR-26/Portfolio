import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certificates = [
  { id: 1, title: "Certificate 1", image: "src/assets/achievements/certificate1.jpg" },
  { id: 2, title: "Certificate 2", image: "src/assets/achievements/certificate2.png" },
  { id: 3, title: "Certificate 3", image: "src/assets/achievements/certificate3.png" },
  { id: 4, title: "Certificate 4", image: "src/assets/achievements/certificate4.png" },
  { id: 5, title: "Certificate 5", image: "src/assets/achievements/certificate5.jpg" },
  { id: 6, title: "Certificate 6", image: "src/assets/achievements/certificate6.jpg" },
  { id: 7, title: "Certificate 7", image: "src/assets/achievements/certificate7.jpg" },
  { id: 8, title: "Certificate 8", image: "src/assets/achievements/certificate8.jpg" },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  // Handle custom pagination styling
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector(".custom-pagination")?.classList.add("flex", "justify-center", "mt-4");
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  const handleCertificateClick = (cert, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelected(cert);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelected(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center p-6 rounded-2xl shadow-lg"
    >
      <motion.h2
        className="my-10 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Certificates
      </motion.h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true, el: ".custom-pagination" }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="w-full max-w-4xl mb-8"
      >
        {certificates.map((cert) => (
          <SwiperSlide
            key={cert.id}
            onClick={(e) => handleCertificateClick(cert, e)}
            onTouchStart={(e) => e.stopPropagation()} // Prevent Swiper from capturing touch events
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="transform transition-all duration-300 cursor-pointer"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 md:h-64 lg:h-48 object-cover rounded-xl shadow-lg"
              />
              <p className="text-center mt-2 font-medium">{cert.title}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination with adjusted position */}
      <div className="w-full flex justify-center">
        <div className="custom-pagination mt-4"></div>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={handleCloseModal}
          onTouchStart={(e) => e.stopPropagation()} // Prevent touch events from bubbling
        >
          <motion.img
            src={selected.image}
            alt={selected.title}
            className="max-w-[90%] max-h-[80vh] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            onTouchStart={(e) => e.stopPropagation()} // Prevent touch events on image
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certificates;