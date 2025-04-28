import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Img1 from "../../assets/images/quiz1.png";
import Img2 from "../../assets/images/quiz1.png";
import Img3 from "../../assets/images/quiz1.png";

const quizImages = [Img1, Img2, Img3];

const questions = [
  "Ready to grab the best deals?",
  "Find amazing coupons and save big!",
  "Shop smarter with exclusive offers!",
];

export default function HomePage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleStartCouponCapture = () => {
    navigate("/coupon-capture");
  };

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Carousel Background */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        {quizImages.map((image, index) => (
          <div key={index} className="w-full h-screen">
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vouchery - Smart Coupon Platform
        </motion.h1>

        <motion.p
          key={currentQuestion}
          className="text-lg md:text-2xl max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {questions[currentQuestion]}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            onClick={handleStartCouponCapture}
          >
            Start Exploring
          </button>
        </motion.div>
      </div>
    </div>
  );
}
