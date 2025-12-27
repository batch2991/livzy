import React from "react";
import { Sparkles, Award } from "lucide-react";

const PlywoodBrands = () => {
  const brands = [
    {
      name: "Century Ply",
      tagline: "Premium Quality Plywood",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Greenply",
      tagline: "Eco-Friendly Solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Action Tesa",
      tagline: "Trusted for Durability",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Merino",
      tagline: "Innovative Laminates",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-orange-200">
            <Award className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">Premium Materials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Material Brands We Use
          </h2>
          <p className="text-lg text-gray-600">
            We maintain strategic partnerships with India's leading plywood, laminates, and hardware manufacturers, ensuring uncompromising quality in every project we undertake.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-orange-100"
            >
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${brand.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-500">{brand.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-orange-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Genuine Materials</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10 Year</div>
              <div className="text-gray-600">Warranty Backed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">ISI</div>
              <div className="text-gray-600">Certified Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlywoodBrands;