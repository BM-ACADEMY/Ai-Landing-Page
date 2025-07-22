import React, { useState } from 'react';
import { Camera, Monitor, Users } from 'lucide-react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import ReactPaginate from 'react-paginate';
import { motion } from "framer-motion";
import Offline1 from '../assets/gallery/2024-12-09.png';
import Offline2 from '../assets/gallery/offline.jpg'

import Offline5 from '../assets/gallery/offline4.jpg'
import Offline6 from '../assets/gallery/offline5.jpg'


import Online1 from '../assets/gallery/Screenshot 2025-07-22 151934.png'
import Online2 from '../assets/gallery/online2.png'
import Online3 from '../assets/gallery/online.png'




// Updated images with online/offline categories
const staticImages = [
  {
    id: 1,
    url: Offline1,
    thumbnailUrl: Offline1,
    category: "Offline",
    description: "Offline AI Course Session - Batch 1",
  },
  {
    id: 2,
    url: Offline2,
    thumbnailUrl: Offline2,
    category: "Offline",
    description: "Offline Workshop - Pondicherry Center",
  },

  {
    id: 4,
    url: Offline5,
    thumbnailUrl: Offline5,
    category: "Offline",
    description: "Certification Ceremony",
  },

  {
    id: 6,
    url: Offline6,
    thumbnailUrl: Offline6,
    category: "Offline",
    description: "Practical Lab Session",
  },
  // Add more images here...
  {
    id: 7,
    url: Online1,
    thumbnailUrl: Online2,
    category: "Online",
    description: "Virtual AI Workshop",
  },
  {
    id: 7,
    url: Online3,
    thumbnailUrl: Online3,
    category: "Online",
    description: "Virtual AI Workshop",
  },
  // ...
];




const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Offline');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Changed from 6 to 4

  const filteredItems = staticImages.filter(item => item.category === activeTab);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0); // Reset to first page when switching tabs
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#02290c] to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-center mb-12 px-4 md:px-8"
              >
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  Academic {" "}
                  <span className="text-[#facc15] not-italic">Showcase</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Take a look at our vibrant learning environment - both online and offline sessions
          </p>
              </motion.div>

        {/* Simple Tab Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
            <button
              onClick={() => handleTabChange('Offline')}
              className={`flex items-center gap-2 px-6 py-3 font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === 'Offline'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Offline</span>
              <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded">
                {staticImages.filter(img => img.category === 'Offline').length}
              </span>
            </button>
            <button
              onClick={() => handleTabChange('Online')}
              className={`flex items-center gap-2 px-6 py-3 font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === 'Online'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Online</span>
              <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded">
                {staticImages.filter(img => img.category === 'Online').length}
              </span>
            </button>
            
          </div>
        </motion.div>

        {/* Gallery Grid - 2x2 layout for 4 images */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LightGallery
            elementClassNames="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
            plugins={[lgZoom, lgThumbnail]}
            speed={500}
            getCaptionFromTitleOrAlt={false}
          >
            {currentItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.url}
                className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10"
                data-sub-html={`<p class="text-sm text-gray-300">${item.category} Session</p>`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.description}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    {/* <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.description}
                    </h3> */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {activeTab === 'Online' ? (
                        <Monitor className="w-4 h-4 text-blue-400" />
                      ) : (
                        <Users className="w-4 h-4 text-green-400" />
                      )}
                      <span className="text-sm text-gray-300">{item.category} Session</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      activeTab === 'Online' 
                        ? 'bg-blue-500/90 text-white' 
                        : 'bg-green-500/90 text-white'
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                      <Camera className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </LightGallery>
        </motion.div>

        {/* Empty State */}
        {currentItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No images found</h3>
            <p className="text-gray-400">Try switching to the other tab to see more images.</p>
          </motion.div>
        )}

        {/* Improved Pagination */}
        {pageCount > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-2">
              <ReactPaginate
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                containerClassName={'flex items-center space-x-2'}
                pageClassName={'min-w-[40px] h-10 flex items-center justify-center rounded-lg cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-3'}
                activeClassName={`${
                  activeTab === 'Online' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-green-500 text-white'
                } hover:bg-opacity-90`}
                previousClassName={'flex items-center justify-center rounded-lg cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 text-sm font-medium'}
                nextClassName={'flex items-center justify-center rounded-lg cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 text-sm font-medium'}
                disabledClassName={'opacity-50 cursor-not-allowed hover:text-gray-300 hover:bg-transparent'}
                breakClassName={'min-w-[40px] h-10 flex items-center justify-center text-gray-400'}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
              />
            </div>
          </motion.div>
        )}

        {/* Page Info */}
        {filteredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-6"
          >
            <p className="text-gray-400 text-sm">
              Showing {offset + 1}-{Math.min(offset + itemsPerPage, filteredItems.length)} of {filteredItems.length} images
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;