import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import AboutMap from "../components/AboutMap";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import TestimonialSection from "../components/TestimonialSection";
import Services from "../components/Services";
import BeforeAfter from "../components/BeforeAfter";
import MaterialsQuality from "../components/MaterialsQuality";



export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-60 text-gray-800 pt-20">
            <Navbar />
            <Hero />
            <Carousel />
            <MaterialsQuality />
            <BeforeAfter />
            <TestimonialSection />
            <AboutMap />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}