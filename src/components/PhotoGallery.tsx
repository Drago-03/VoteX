import React, { useState, useEffect, useCallback, useRef } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  Share2,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Facebook,
  Twitter,
  Linkedin,
  Link,
  Filter,
  Calendar,
  MapPin,
} from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
  category: string;
  date: string;
  location: string;
}

// Define image categories
const categories = [
  "All",
  "Infrastructure",
  "Technology",
  "Events",
  "Awareness",
  "Training",
  "Process",
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://picsum.photos/800/600?eci=headquarters",
    alt: "Election Commission of India Headquarters",
    description:
      "Nirvachan Sadan - The iconic headquarters of the Election Commission of India in New Delhi",
    category: "Infrastructure",
    date: "2024",
    location: "New Delhi",
  },
  {
    id: 2,
    src: "https://picsum.photos/800/600?eci=evm",
    alt: "EVM Demonstration",
    description:
      "Election officials demonstrating the use of Electronic Voting Machines (EVMs) and VVPAT system",
    category: "Technology",
    date: "2024",
    location: "Various Locations",
  },
  {
    id: 3,
    src: "https://picsum.photos/800/600?eci=nvd",
    alt: "National Voters' Day Celebration",
    description:
      "Celebration of National Voters' Day on January 25th, promoting democratic participation",
    category: "Events",
    date: "January 25, 2024",
    location: "Pan India",
  },
  {
    id: 4,
    src: "https://picsum.photos/800/600?eci=registration",
    alt: "Voter Registration Drive",
    description:
      "Special voter registration campaign to ensure maximum electoral participation",
    category: "Awareness",
    date: "2024",
    location: "Multiple States",
  },
  {
    id: 5,
    src: "https://picsum.photos/800/600?eci=training",
    alt: "Election Officials Training",
    description:
      "Training session for election officials on electoral processes and EVM operation",
    category: "Training",
    date: "2024",
    location: "Regional Offices",
  },
  {
    id: 6,
    src: "https://picsum.photos/800/600?eci=accessible",
    alt: "Accessible Voting Facilities",
    description:
      "Special arrangements ensuring accessible voting for elderly and differently-abled voters",
    category: "Process",
    date: "2024",
    location: "Nationwide",
  },
  {
    id: 7,
    src: "https://picsum.photos/800/600?eci=counting",
    alt: "Vote Counting Process",
    description:
      "Systematic counting of votes under strict supervision and security",
    category: "Process",
    date: "2024",
    location: "Counting Centers",
  },
  {
    id: 8,
    src: "https://picsum.photos/800/600?eci=awareness",
    alt: "Voter Awareness Campaign",
    description:
      "SVEEP campaign activities to educate voters about their electoral rights and responsibilities",
    category: "Awareness",
    date: "2024",
    location: "Pan India",
  },
];

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [optimizedImages, setOptimizedImages] = useState<{
    [key: number]: string;
  }>({});
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<{ [key: number]: HTMLImageElement | null }>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [isSlideshow, setIsSlideshow] = useState(false);
  const slideshowTimerRef = useRef<NodeJS.Timeout | null>(null);
  const modalImageRef = useRef<HTMLImageElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchDistance, setTouchDistance] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [columns, setColumns] = useState(4);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedImage) return;

      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage.id
      );

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          if (currentIndex > 0) {
            setSelectedImage(galleryImages[currentIndex - 1]);
          }
          break;
        case "ArrowRight":
          e.preventDefault();
          if (currentIndex < galleryImages.length - 1) {
            setSelectedImage(galleryImages[currentIndex + 1]);
          }
          break;
        case "Escape":
          e.preventDefault();
          setSelectedImage(null);
          break;
      }
    },
    [selectedImage]
  );

  // Set up keyboard listeners
  useEffect(() => {
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage, handleKeyDown]);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = Number(entry.target.getAttribute("data-image-id"));
            if (imageId && !preloadedImages.has(imageId)) {
              const image = galleryImages.find((img) => img.id === imageId);
              if (image) {
                preloadImage(image);
              }
            }
          }
        });
      },
      { rootMargin: "50px" }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [preloadedImages]);

  const preloadImage = async (image: GalleryImage) => {
    if (preloadedImages.has(image.id)) return;

    setLoadingStates((prev) => ({ ...prev, [image.id]: true }));

    try {
      const img = new Image();

      img.onload = () => {
        setOptimizedImages((prev) => ({ ...prev, [image.id]: image.src }));
        setPreloadedImages((prev) => new Set(prev).add(image.id));
        setLoadingStates((prev) => ({ ...prev, [image.id]: false }));
      };

      img.onerror = () => {
        handleImageError(image.id);
        setLoadingStates((prev) => ({ ...prev, [image.id]: false }));
      };

      img.src = image.src;
    } catch (error) {
      handleImageError(image.id);
      setLoadingStates((prev) => ({ ...prev, [image.id]: false }));
    }
  };

  const handleImageError = (imageId: number) => {
    setImageErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  const getImageSource = (image: GalleryImage) => {
    if (imageErrors[image.id]) return image.src;
    return optimizedImages[image.id] || image.src;
  };

  const handleDownload = async (image: GalleryImage) => {
    try {
      const response = await fetch(getImageSource(image));
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${image.alt.toLowerCase().replace(/\s+/g, "-")}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const handleImageRef = (
    element: HTMLImageElement | null,
    imageId: number
  ) => {
    if (element && observerRef.current) {
      imageRefs.current[imageId] = element;
      observerRef.current.observe(element);
    }
  };

  // Handle slideshow
  useEffect(() => {
    if (isSlideshow && selectedImage) {
      slideshowTimerRef.current = setInterval(() => {
        const currentIndex = galleryImages.findIndex(
          (img) => img.id === selectedImage.id
        );
        if (currentIndex < galleryImages.length - 1) {
          setSelectedImage(galleryImages[currentIndex + 1]);
        } else {
          setSelectedImage(galleryImages[0]); // Loop back to first image
        }
      }, 3000); // Change image every 3 seconds
    }

    return () => {
      if (slideshowTimerRef.current) {
        clearInterval(slideshowTimerRef.current);
      }
    };
  }, [isSlideshow, selectedImage]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Calculate initial distance between two fingers
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchDistance(distance);
    } else {
      setTouchStart(e.touches[0].clientX);
      setTouchEnd(null);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      if (touchDistance === null) return;

      // Calculate new distance between fingers
      const newDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );

      // Calculate zoom change
      const delta = newDistance - touchDistance;
      const zoomDelta = delta * 0.01;

      setZoomLevel((prev) => {
        const newZoom = Math.max(1, Math.min(3, prev + zoomDelta));
        setIsZoomed(newZoom > 1);
        return newZoom;
      });

      setTouchDistance(newDistance);
    } else {
      setTouchEnd(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage.id
      );

      if (isLeftSwipe && currentIndex < galleryImages.length - 1) {
        setSelectedImage(galleryImages[currentIndex + 1]);
      }

      if (isRightSwipe && currentIndex > 0) {
        setSelectedImage(galleryImages[currentIndex - 1]);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle zoom functionality
  const handleZoomIn = () => {
    if (zoomLevel < 3) {
      setZoomLevel((prev) => prev + 0.5);
      setIsZoomed(true);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel((prev) => prev - 0.5);
      if (zoomLevel <= 1.5) {
        setIsZoomed(false);
        setZoomLevel(1);
        setDragPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleImageDragStart = (e: React.MouseEvent) => {
    if (isZoomed) {
      setIsDragging(true);
      setDragPosition({
        x: e.clientX - dragPosition.x,
        y: e.clientY - dragPosition.y,
      });
    }
  };

  const handleImageDragMove = (e: React.MouseEvent) => {
    if (isDragging && isZoomed) {
      const newX = e.clientX - dragPosition.x;
      const newY = e.clientY - dragPosition.y;

      // Limit dragging to image bounds
      const bounds = modalImageRef.current?.getBoundingClientRect();
      if (bounds) {
        const maxX = (bounds.width * (zoomLevel - 1)) / 2;
        const maxY = (bounds.height * (zoomLevel - 1)) / 2;

        setDragPosition({
          x: Math.max(Math.min(newX, maxX), -maxX),
          y: Math.max(Math.min(newY, maxY), -maxY),
        });
      }
    }
  };

  const handleImageDragEnd = () => {
    setIsDragging(false);
  };

  // Handle image sharing
  const handleShare = async (image: GalleryImage) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: image.alt,
          text: image.description,
          url: getImageSource(image),
        });
      } else {
        // Fallback to clipboard copy
        await navigator.clipboard.writeText(getImageSource(image));
        alert("Image URL copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing image:", error);
    }
  };

  // Handle fullscreen
  const toggleFullscreen = async () => {
    if (!isFullscreen) {
      try {
        if (galleryRef.current?.requestFullscreen) {
          await galleryRef.current.requestFullscreen();
        } else if ((galleryRef.current as any)?.webkitRequestFullscreen) {
          await (galleryRef.current as any).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } catch (error) {
        console.error("Error entering fullscreen:", error);
      }
    } else {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
        setIsFullscreen(false);
      } catch (error) {
        console.error("Error exiting fullscreen:", error);
      }
    }
  };

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  // Handle social media sharing
  const handleSocialShare = async (
    platform: "facebook" | "twitter" | "linkedin",
    image: GalleryImage
  ) => {
    const url = encodeURIComponent(getImageSource(image));
    const text = encodeURIComponent(image.description);
    const title = encodeURIComponent(image.alt);

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
        break;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  // Filter images based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Responsive columns
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 768) setColumns(2);
      else if (width < 1024) setColumns(3);
      else setColumns(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Photo Gallery
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Glimpses of Indian Democracy in Action
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-9">
                {loadingStates[image.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <LoadingSpinner />
                  </div>
                )}
                <img
                  ref={(el) => handleImageRef(el, image.id)}
                  src={getImageSource(image)}
                  alt={image.alt}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={() => handleImageError(image.id)}
                  data-image-id={image.id}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.alt}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{image.date}</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>{image.location}</span>
                  </div>
                  <p className="text-white/90 text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {selectedImage && (
          <div
            ref={galleryRef}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget && !isDragging)
                setSelectedImage(null);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Modal Controls */}
            <div className="absolute top-4 right-4 flex items-center space-x-4 z-10">
              <button
                onClick={() => setIsSlideshow(!isSlideshow)}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={isSlideshow ? "Pause slideshow" : "Start slideshow"}
              >
                {isSlideshow ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={handleZoomIn}
                className="text-white hover:text-gray-300 transition-colors"
                disabled={zoomLevel >= 3}
                aria-label="Zoom in"
              >
                <ZoomIn size={24} />
              </button>
              <button
                onClick={handleZoomOut}
                className="text-white hover:text-gray-300 transition-colors"
                disabled={zoomLevel <= 1}
                aria-label="Zoom out"
              >
                <ZoomOut size={24} />
              </button>
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={
                  isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                }
              >
                {isFullscreen ? (
                  <Minimize2 size={24} />
                ) : (
                  <Maximize2 size={24} />
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare(selectedImage);
                }}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Share image"
              >
                <Share2 size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(selectedImage);
                }}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Download image"
              >
                <Download size={24} />
              </button>
            </div>

            {/* Image Container */}
            <div className="max-w-6xl w-full relative flex-1">
              <div
                className="relative overflow-hidden"
                onMouseDown={handleImageDragStart}
                onMouseMove={handleImageDragMove}
                onMouseUp={handleImageDragEnd}
                onMouseLeave={handleImageDragEnd}
              >
                <img
                  ref={modalImageRef}
                  src={getImageSource(selectedImage)}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-200"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${dragPosition.x}px, ${dragPosition.y}px)`,
                    cursor: isZoomed ? "grab" : "default",
                  }}
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedImage.alt}
                </h3>
                <div className="flex items-center gap-4 text-white/80 mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>{selectedImage.category}</span>
                  </div>
                </div>
                <p className="text-white/90">{selectedImage.description}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                if (currentIndex > 0) {
                  setSelectedImage(filteredImages[currentIndex - 1]);
                }
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={
                filteredImages.findIndex(
                  (img) => img.id === selectedImage.id
                ) === 0
              }
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                if (currentIndex < filteredImages.length - 1) {
                  setSelectedImage(filteredImages[currentIndex + 1]);
                }
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={
                filteredImages.findIndex(
                  (img) => img.id === selectedImage.id
                ) ===
                filteredImages.length - 1
              }
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-0 right-0 px-4">
              <div className="max-w-6xl mx-auto">
                <div
                  ref={thumbnailsRef}
                  className="flex gap-2 overflow-x-auto py-2 px-4 bg-black/50 rounded-lg"
                >
                  {filteredImages.map((image) => (
                    <button
                      key={image.id}
                      onClick={() => setSelectedImage(image)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                        selectedImage.id === image.id
                          ? "ring-2 ring-primary scale-105"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={getImageSource(image)}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
