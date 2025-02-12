import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { LoadingSpinner } from "../components/LoadingSpinner";
import {
  ChevronLeft,
  FileText,
  AlertTriangle,
  Printer,
  Share2,
  List,
  X,
  ExternalLink,
  Check,
  Link as LinkIcon,
} from "lucide-react";

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

const LegalDocument: React.FC = () => {
  const { documentType } = useParams<{ documentType: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);
  const [showToc, setShowToc] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Track active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    const headings = contentRef.current?.querySelectorAll("h2, h3");
    headings?.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [content]);

  // Generate table of contents from markdown content
  useEffect(() => {
    if (content && contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      const tocItems: TableOfContentsItem[] = Array.from(headings).map(
        (heading) => ({
          id:
            heading.id ||
            heading.textContent?.toLowerCase().replace(/\s+/g, "-") ||
            "",
          title: heading.textContent || "",
          level: parseInt(heading.tagName[1]),
        })
      );
      setToc(tocItems);

      // Add IDs to headings if they don't have them
      headings.forEach((heading) => {
        if (!heading.id) {
          heading.id =
            heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
        }
      });
    }
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        setLoading(true);
        setError(null);

        let fileName = "";
        switch (documentType) {
          case "privacy":
            fileName = "PRIVACY.md";
            break;
          case "terms":
            fileName = "TERMS_OF_SERVICE.md";
            break;
          case "disclaimer":
            fileName = "DISCLAIMER.md";
            break;
          default:
            throw new Error("Invalid document type");
        }

        const response = await fetch(`/${fileName}`);
        if (!response.ok) {
          throw new Error("Failed to load document");
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [documentType]);

  const getTitle = () => {
    switch (documentType) {
      case "privacy":
        return "Privacy Policy";
      case "terms":
        return "Terms of Service";
      case "disclaimer":
        return "Disclaimer";
      default:
        return "Legal Document";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowToc(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: getTitle(),
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-4 text-gray-600">Loading {getTitle()}...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Document
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Backdrop overlay when ToC is open */}
      {showToc && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity z-40"
          onClick={() => setShowToc(false)}
          aria-hidden="true"
        />
      )}

      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/legal/terms"
            className="hover:text-primary transition-colors"
          >
            Legal
          </Link>
          <span>/</span>
          <span className="text-gray-900">{getTitle()}</span>
        </nav>

        {/* Document Header */}
        <div className="bg-white rounded-t-xl shadow-sm p-8 mb-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {getTitle()}
              </h1>
              <p className="text-gray-500">
                Last updated: {new Date().toLocaleDateString("en-IN")}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowToc(!showToc)}
                className="p-2 text-gray-500 hover:text-primary transition-colors relative"
                aria-label="Toggle table of contents"
              >
                {showToc ? <X size={20} /> : <List size={20} />}
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-white text-xs flex items-center justify-center">
                  {toc.length}
                </span>
              </button>
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-primary transition-colors"
                aria-label="Share document"
              >
                <Share2 size={20} />
              </button>
              <button
                onClick={handlePrint}
                className="p-2 text-gray-500 hover:text-primary transition-colors print:hidden"
                aria-label="Print document"
              >
                <Printer size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Table of Contents Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            showToc ? "translate-x-0" : "translate-x-full"
          } z-50 overflow-y-auto`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Table of Contents</h2>
              <button
                onClick={() => setShowToc(false)}
                className="text-gray-500 hover:text-primary"
                aria-label="Close table of contents"
              >
                <X size={20} />
              </button>
            </div>
            <nav>
              <ul className="space-y-3">
                {toc.map((item) => (
                  <li
                    key={item.id}
                    style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex items-center justify-between w-full pr-2 text-sm text-left transition-colors ${
                        activeSection === item.id
                          ? "text-primary font-medium"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      <span>{item.title}</span>
                      {activeSection === item.id && (
                        <Check size={14} className="text-primary" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Document Content */}
        <div className="bg-white rounded-b-xl shadow-sm p-8" ref={contentRef}>
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-600 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-headings:scroll-mt-20">
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    {props.children}
                    <ExternalLink size={14} />
                  </a>
                ),
                h2: ({ node, ...props }) => (
                  <h2 {...props} className="group flex items-center gap-2">
                    <span>{props.children}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          window.location.href + "#" + props.id
                        );
                        alert("Section link copied to clipboard!");
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy section link"
                    >
                      <LinkIcon
                        size={16}
                        className="text-gray-400 hover:text-primary"
                      />
                    </button>
                  </h2>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-110 print:hidden"
            aria-label="Back to top"
          >
            <ChevronLeft className="h-6 w-6 transform rotate-90" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LegalDocument;
