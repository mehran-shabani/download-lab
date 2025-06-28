import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import SliderPage from './components/SliderPage';
import { webSlides, androidSlides } from './data/slidesData';
import { Smartphone, Globe } from 'lucide-react';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [slideIndex, setSlideIndex] = useState(0);

    const appStyles = {
        fontFamily: 'Tahoma, Arial, sans-serif',
        minHeight: '100vh'
    };

    return (
        <div style={appStyles}>
            <AnimatePresence mode="wait">
                {currentPage === 'home' && (
                    <HomePage
                        key="home"
                        setCurrentPage={setCurrentPage}
                        setSlideIndex={setSlideIndex}
                    />
                )}
                {currentPage === 'web' && (
                    <SliderPage
                        key="web"
                        slides={webSlides}
                        color="from-blue-500 to-blue-700"
                        icon={Globe}
                        title="راهنمای وب اپلیکیشن"
                        subtitle="نحوه دسترسی و استفاده از هلسا از طریق مرورگر"
                        slideIndex={slideIndex}
                        setSlideIndex={setSlideIndex}
                        setCurrentPage={setCurrentPage}
                    />
                )}
                {currentPage === 'android' && (
                    <SliderPage
                        key="android"
                        slides={androidSlides}
                        color="from-green-500 to-green-700"
                        icon={Smartphone}
                        title="نصب اپلیکیشن اندروید"
                        subtitle="راهنمای گام به گام نصب هلسا روی دستگاه اندروید"
                        slideIndex={slideIndex}
                        setSlideIndex={setSlideIndex}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;