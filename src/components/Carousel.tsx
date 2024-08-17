import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

interface Props {
  children: React.ReactNode;
  interval?: number;
  className?: string;
}

const Carousel = ({
  children,
  interval = 5000, // Default interval for auto-slide
  className = "",
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalSlides = React.Children.count(children);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);

    return () => clearInterval(timer);
  }, [children, interval]);

  return (
    <Box
      className={`relative overflow-hidden ${className}`}
      position="relative"
    >
      <Box
        display="flex"
        sx={{
          transition: "transform 1s ease-in-out", // 1 second transition
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Box key={index} width="100%" flexShrink={0}>
            {child}
          </Box>
        ))}
      </Box>

      {/* Navigation Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {React.Children.map(children, (_, index) => (
          <Button
            key={index}
            sx={{
              width: currentIndex === index ? "32px" : "20px",
              height: "3px",
              borderRadius: "4px",
              transition: "all 0.3s ease",
              backgroundColor:
                currentIndex === index ? "white" : "rgba(255, 255, 255, 0.5)",
              boxShadow: currentIndex === index ? 3 : "none",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
