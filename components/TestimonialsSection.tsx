"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Studio Owner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
    quote:
      "Move has revolutionized how we manage our studio. The automated scheduling and member engagement features have saved us countless hours, and our members love the mobile app!",
    rating: 5,
    metrics: {
      memberGrowth: "+45%",
      revenueIncrease: "+38%",
      timesSaved: "15hrs/week",
    },
  },
  {
    name: "Michael Chen",
    role: "CrossFit Box Owner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
    quote:
      "The analytics and insights provided by Move have helped us make data-driven decisions that boosted our revenue by 40%. The platform is intuitive and our trainers picked it up quickly.",
    rating: 5,
    metrics: {
      memberGrowth: "+52%",
      revenueIncrease: "+40%",
      timesSaved: "20hrs/week",
    },
  },
  {
    name: "Emma Rodriguez",
    role: "Yoga Studio Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&h=250&auto=format&fit=crop",
    quote:
      "Switching to Move was the best decision we made. The class booking system is flawless, and the integrated payment processing has simplified our billing process tremendously.",
    rating: 5,
    metrics: {
      memberGrowth: "+35%",
      revenueIncrease: "+42%",
      timesSaved: "12hrs/week",
    },
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-3 rounded-2xl bg-primary/20 text-primary dark:bg-primary/30"
            >
              <Quote className="h-8 w-8" />
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how Move is transforming fitness businesses worldwide
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white dark:bg-zinc-900 shadow-lg rounded-2xl text-center max-w-2xl mx-auto"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-200 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {testimonial.role}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="ghost"
            size="icon"
            className="swiper-button-prev h-12 w-12 rounded-full bg-white dark:bg-zinc-900 border shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="swiper-button-next h-12 w-12 rounded-full bg-white dark:bg-zinc-900 border shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
