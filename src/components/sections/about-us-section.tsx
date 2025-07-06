import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-16 bg-kubePurple hover:bg-kubePurple">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="w-full">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-white text-left">
            About Tech Sentinel Hub
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-white/80 leading-relaxed">
              
            TechSentinels is an inclusive, student-powered and professionally guided tech community that brings together curious learners, aspiring developers, and working professionals under one unified platform. We organize meetups, workshops, and events focused on hands-on learning across a wide spectrum of technologies — from Multi-Cloud (AWS, Azure, GCP), DevOps, and Cloud Security to AI, Machine Learning, Generative AI, LLMs, RAG, Web & App Development, and Data Analytics. Our goal is to simplify the ever-evolving tech landscape and make it accessible to everyone — whether you’re in college, recently graduated, or already working in the industry. At TechSentinels, we believe in learning together, sharing openly, and building a strong ecosystem of future-ready tech leaders.
            </p>
            <Link 
              href="#what-we-do" 
              className="inline-block text-white/80 hover:text-white transition-colors font-black"
            >
              See More about Tech Sentinel Hub
            </Link>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link 
                href="https://meetup.com" 
                target="_blank"
                className="px-6 py-3 bg-white transition-colors rounded-md text-kubePurple font-medium shadow-lg"
              >
                Meetup Page
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="px-6 py-3 bg-white transition-colors rounded-md text-kubePurple font-medium shadow-lg"
              >
                LinkedIn Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
