import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import HowItWorksStep from '@/components/HowItWorksStep';
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Users, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const features = [
    { icon: <BookOpen className="h-8 w-8 mb-2 text-purple-600" />, title: "Resume Enhancement", description: "Tailored resume and cover letter optimization for H1B sponsorship positions." },
    { icon: <Briefcase className="h-8 w-8 mb-2 text-blue-600" />, title: "Job Match Evaluation", description: "Assess your likelihood of acceptance for specific H1B-friendly positions." },
    { icon: <Users className="h-8 w-8 mb-2 text-purple-600" />, title: "Career Timeline Planning", description: "Create a detailed roadmap to improve your chances of securing H1B sponsorship." },
    { icon: <GraduationCap className="h-8 w-8 mb-2 text-blue-600" />, title: "Personalized Advice", description: "Receive tailored guidance based on your field of study and career goals." },
  ];

  const howItWorksSteps = [
    { number: 1, title: "Provide Your Information", description: "Enter your details, including education, field of study, and career goals." },
    { number: 2, title: "AI Analysis", description: "Our AI agents analyze your profile and match it with H1B-friendly job opportunities." },
    { number: 3, title: "Receive Personalized Advice", description: "Get tailored recommendations, enhanced application materials, and a career roadmap." },
  ];

return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <Header showNavLinks={false} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 bg-gradient-to-br from-purple-100 via-white to-blue-100">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Your AI Career Advisor for H1B Sponsorship
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Empowering international students to navigate the complexities of H1B sponsorship and land their dream jobs in the US.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <HowItWorksStep key={index} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">About Us</h2>
            <p className="text-xl mb-8 text-gray-700">
              We're dedicated to helping international students and professionals navigate the complex world of H1B sponsorship and US job markets. Our AI-powered platform provides personalized guidance, resources, and tools to maximize your chances of success.
            </p>
            <Button asChild>
              <Link href="/chatbot">Chat with Our AI Advisor</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}