import React from "react";
import { ChefHat, Home, Bed, Sofa, Building, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Modular Kitchen",
      description: "Modern, functional kitchens designed to perfection with premium fittings and space optimization.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Home,
      title: "Wardrobe Design",
      description: "Custom wardrobes with smart storage solutions tailored to your space and lifestyle needs.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Sofa,
      title: "Living Room Design",
      description: "Create stunning living spaces that reflect your style and provide comfort for your family.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Bed,
      title: "Bedroom Design",
      description: "Tranquil bedroom designs that combine aesthetics with functionality for peaceful rest.",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: Sparkles,
      title: "Full Home Interior",
      description: "Complete home transformation services covering every room with cohesive design themes.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Building,
      title: "Office Interior",
      description: "Professional office spaces designed to boost productivity and create impressive work environments.",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Interior Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From concept to completion, we provide end-to-end interior design services tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50/30 hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;