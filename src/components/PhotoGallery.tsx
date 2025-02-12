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
} from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  fallbackSrc: string;
  alt: string;
  description: string;
  optimizedSrc?: string;
}

// CDN configuration for image optimization
const CDN_URL = "https://res.cloudinary.com/your-cloud-name/image/fetch/";
const CDN_PARAMS = "f_auto,q_auto,w_800,c_limit/";

const optimizeImageUrl = (url: string) => {
  if (!url.startsWith("http")) return url;
  return `${CDN_URL}${CDN_PARAMS}${encodeURIComponent(url)}`;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://eci.gov.in/uploads/monthly_2023_03/election-commission-india.jpg",
    fallbackSrc: "/assets/images/eci-building.jpg",
    alt: "Election Commission of India Headquarters",
    description:
      "Nirvachan Sadan - The iconic headquarters of the Election Commission of India in New Delhi",
  },
  {
    id: 2,
    src: "https://eci.gov.in/uploads/monthly_2023_04/evm-display.jpg",
    fallbackSrc: "/assets/images/evm-demo.jpg",
    alt: "EVM Demonstration",
    description:
      "Election officials demonstrating the use of Electronic Voting Machines (EVMs) to voters",
  },
  {
    id: 3,
    src: "https://eci.gov.in/uploads/monthly_2023_05/voter-awareness.jpg",
    fallbackSrc: "/assets/images/voter-awareness.jpg",
    alt: "Voter Awareness Campaign",
    description:
      "SVEEP activities promoting voter awareness and participation in democratic process",
  },
  {
    id: 4,
    src: "https://eci.gov.in/uploads/monthly_2023_06/accessible-voting.jpg",
    fallbackSrc: "/assets/images/accessible-voting.jpg",
    alt: "Accessible Voting",
    description:
      "Facilities for differently-abled voters ensuring inclusive participation in elections",
  },
  {
    id: 5,
    src: "https://eci.gov.in/uploads/monthly_2023_07/women-voters.jpg",
    fallbackSrc: "/assets/images/women-empowerment.jpg",
    alt: "Women Voters",
    description:
      "Women voters participating in the electoral process, showcasing gender equality in Indian democracy",
  },
  {
    id: 6,
    src: "https://eci.gov.in/uploads/monthly_2023_08/youth-voters.jpg",
    fallbackSrc: "/assets/images/youth-voters.jpg",
    alt: "Youth Participation",
    description:
      "Young voters exercising their democratic right, representing the future of Indian democracy",
  },
  {
    id: 7,
    src: "https://eci.gov.in/uploads/monthly_2023_09/counting-day.jpg",
    fallbackSrc: "/assets/images/vote-counting.jpg",
    alt: "Vote Counting Process",
    description:
      "Transparent vote counting process with EVMs under strict supervision",
  },
  {
    id: 8,
    src: "https://eci.gov.in/uploads/monthly_2023_10/model-polling.jpg",
    fallbackSrc: "/assets/images/model-polling.jpg",
    alt: "Model Polling Station",
    description:
      "A model polling station equipped with all modern facilities and safety measures",
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
      const optimizedUrl = optimizeImageUrl(image.src);
      const img = new Image();

      img.onload = () => {
        setOptimizedImages((prev) => ({ ...prev, [image.id]: optimizedUrl }));
        setPreloadedImages((prev) => new Set(prev).add(image.id));
        setLoadingStates((prev) => ({ ...prev, [image.id]: false }));
      };

      img.onerror = () => {
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          setLoadingStates((prev) => ({ ...prev, [image.id]: false }));
          setPreloadedImages((prev) => new Set(prev).add(image.id));
        };
        fallbackImg.onerror = () => {
          handleImageError(image.id);
          setLoadingStates((prev) => ({ ...prev, [image.id]: false }));
        };
        fallbackImg.src = image.fallbackSrc;
      };

      img.src = optimizedUrl;
    } catch (error) {
      handleImageError(image.id);
      setLoadingStates((prev) => ({ ...prev, [image.id]: false }));
    }
  };

  const handleImageError = (imageId: number) => {
    setImageErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  const getImageSource = (image: GalleryImage) => {
    if (imageErrors[image.id]) return image.fallbackSrc;
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

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Photo Gallery
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Glimpses of Indian Democracy in Action
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          ref={galleryRef}
        >
          {galleryImages.map((image) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.alt}
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Carousel */}
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
          <div className="max-w-6xl w-full relative flex-1">
            {/* Controls overlay */}
            <div className="absolute top-4 right-4 flex items-center space-x-4 z-10">
              <button
                onClick={() => setIsSlideshow(!isSlideshow)}
                className="text-white hover:text-gray-300"
                aria-label={isSlideshow ? "Pause slideshow" : "Start slideshow"}
              >
                {isSlideshow ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={() => handleSocialShare("facebook", selectedImage)}
                className="text-white hover:text-gray-300"
                aria-label="Share on Facebook"
              >
                <Facebook size={24} />
              </button>
              <button
                onClick={() => handleSocialShare("twitter", selectedImage)}
                className="text-white hover:text-gray-300"
                aria-label="Share on Twitter"
              >
                <Twitter size={24} />
              </button>
              <button
                onClick={() => handleSocialShare("linkedin", selectedImage)}
                className="text-white hover:text-gray-300"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare(selectedImage);
                }}
                className="text-white hover:text-gray-300"
                aria-label="Copy link"
              >
                <Link size={24} />
              </button>
              <button
                onClick={handleZoomIn}
                className="text-white hover:text-gray-300"
                disabled={zoomLevel >= 3}
                aria-label="Zoom in"
              >
                <ZoomIn size={24} />
              </button>
              <button
                onClick={handleZoomOut}
                className="text-white hover:text-gray-300"
                disabled={zoomLevel <= 1}
                aria-label="Zoom out"
              >
                <ZoomOut size={24} />
              </button>
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-gray-300"
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
            </div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                if (currentIndex > 0) {
                  setSelectedImage(galleryImages[currentIndex - 1]);
                }
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={selectedImage.id === galleryImages[0].id}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                if (currentIndex < galleryImages.length - 1) {
                  setSelectedImage(galleryImages[currentIndex + 1]);
                }
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                selectedImage.id === galleryImages[galleryImages.length - 1].id
              }
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              {loadingStates[selectedImage.id] ? (
                <div className="w-full h-96 flex items-center justify-center">
                  <LoadingSpinner size="lg" />
                </div>
              ) : (
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
                    onError={() => handleImageError(selectedImage.id)}
                  />
                </div>
              )}
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(selectedImage);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    aria-label="Download image"
                  >
                    <Download size={20} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails Navigation */}
          <div
            ref={thumbnailsRef}
            className="w-full max-w-6xl mt-4 overflow-x-auto"
          >
            <div className="flex space-x-2 px-4">
              {galleryImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImage.id === image.id
                      ? "ring-2 ring-blue-500 scale-105"
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
      )}
    </section>
  );
};

export default PhotoGallery;
