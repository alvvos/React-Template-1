import React from "react";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-primary border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8">
          <div className="animate-fadeIn text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-Garet font-bold text-light mb-3 sm:mb-4">
              TFG Factory
            </h3>
            <p className="text-light/70 font-Poppins-Medium mb-4 leading-relaxed text-sm sm:text-base">
              Especialistas en desarrollo de TFG, TFM y trabajos universitarios.
              Garantía de calidad, originalidad y cumplimiento de plazos.
            </p>
            <div className="flex items-center gap-2 text-light/60 justify-center md:justify-start">
              <FaIcons.FaMapMarkerAlt className="text-accent text-sm sm:text-base" />
              <span className="font-Poppins-Medium text-xs sm:text-sm">
                España
              </span>
            </div>
          </div>

          <div
            className="animate-fadeIn text-center md:text-left"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-lg sm:text-xl font-Garet font-bold text-light mb-3 sm:mb-4">
              Contacto
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:contacto@tfgfactory.com"
                className="flex items-center gap-2 sm:gap-3 text-light/70 hover:text-accent transition-colors duration-300 group justify-center md:justify-start"
              >
                <FaIcons.FaEnvelope className="text-accent text-sm sm:text-base group-hover:scale-110 transition-transform duration-300" />
                <span className="font-Poppins-Medium text-sm sm:text-base break-all">
                  contacto@tfgfactory.com
                </span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-light/70 justify-center md:justify-start">
                <FaIcons.FaClock className="text-accent text-sm sm:text-base" />
                <span className="font-Poppins-Medium text-sm sm:text-base">
                  24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-light/60 font-Poppins-Medium text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              © {currentYear} TFG Factory. Todos los derechos reservados.
            </div>
            <div className="flex gap-3 sm:gap-4 order-1 sm:order-2">
              {[
                {
                  icon: (
                    <FaIcons.FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  ),
                  href: "#",
                  name: "Instagram",
                },
                {
                  icon: <FaIcons.FaTiktok className="w-4 h-4 sm:w-5 sm:h-5" />,
                  href: "#",
                  name: "TikTok",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 sm:p-3 bg-secondary/50 border border-accent/20 rounded-lg sm:rounded-xl text-light/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 text-center">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs text-light/50 font-Poppins-Medium">
            <div
              onClick={() => navigate("/privacidad")}
              className="hover:text-accent transition-colors duration-300 cursor-pointer text-xs sm:text-sm"
            >
              Política de privacidad
            </div>
            <span className="text-xs sm:text-sm">•</span>
            <div
              className="hover:text-accent transition-colors duration-300 cursor-pointer text-xs sm:text-sm"
              onClick={() => navigate("/legal")}
            >
              Aviso legal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
