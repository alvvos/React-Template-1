import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    degreeType: "",
    degreeName: "",
    serviceNeeded: "",
    projectTitle: "",
    pagesWords: "",
    measureType: "páginas",
    deadline: "",
    additionalInfo: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          degreeType: formData.degreeType,
          degreeName: formData.degreeName,
          serviceNeeded: formData.serviceNeeded,
          projectTitle: formData.projectTitle,
          pagesWords: formData.pagesWords,
          measureType: formData.measureType,
          deadline: formData.deadline,
          additionalInfo: formData.additionalInfo || "No proporcionada",
          user_email: formData.email,
          phone: formData.phone || "No proporcionado",
          to_email: "contacto@tfgfactory.com",
          date: new Date().toLocaleString("es-ES"),
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitSuccess(true);
        setFormData({
          degreeType: "",
          degreeName: "",
          serviceNeeded: "",
          projectTitle: "",
          pagesWords: "",
          measureType: "páginas",
          deadline: "",
          additionalInfo: "",
          email: "",
          phone: "",
        });
      }
    } catch (error) {
      setSubmitError(
        "Error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:pt-24 px-4 md:px-8 lg:px-24 mx-auto bg-gradient-to-b from-primary to-secondary relative">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Columna izquierda - Información */}
        <div
          className="w-full lg:w-1/2 animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-3xl md:text-4xl font-Garet mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent">
            Solicita tu cotización
          </h2>
          <p className="text-light/90 text-base md:text-lg font-Poppins-Medium mb-8 md:mb-10">
            Completa el formulario con los detalles de tu TFG/TFM y recibe una
            propuesta personalizada en menos de 24 horas.
          </p>

          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4 md:gap-6 p-4 md:p-6 bg-secondary/50 rounded-xl backdrop-blur-sm hover:bg-secondary/70 transition-all duration-500">
              <div className="text-2xl md:text-3xl text-accent p-3 md:p-4 bg-accent/10 rounded-full">
                <FaIcons.FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-Garet mb-2">Email</h3>
                <p className="text-light/80 font-Poppins-Medium text-sm md:text-base">
                  contacto@tfgfactory.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-secondary/50 rounded-xl backdrop-blur-sm hover:bg-secondary/70 transition-all duration-500">
              <div className="text-2xl md:text-3xl text-accent p-3 md:p-4 bg-accent/10 rounded-full">
                <FaIcons.FaClock />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-Garet mb-2">
                  Respuesta rápida
                </h3>
                <p className="text-light/80 font-Poppins-Medium text-sm md:text-base">
                  Menos de 24 horas en días laborables
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <h3 className="text-lg md:text-xl font-Garet mb-4 md:mb-6">
              Garantías incluidas
            </h3>
            <div className="space-y-3 md:space-y-4">
              {[
                "Originalidad verificada",
                "Cumplimiento de plazos",
                "Revisiones ilimitadas",
                "Soporte post-entrega",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaIcons.FaCheck className="text-accent" />
                  <span className="font-Poppins-Medium text-light/80 text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha - Formulario */}
        <div
          className="w-full lg:w-1/2 bg-secondary/50 border-2 border-accent/20 rounded-2xl p-4 md:p-8 backdrop-blur-md shadow-xl animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          <h2 className="text-2xl md:text-3xl font-Garet mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent">
            Datos de tu proyecto
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "0.7s" }}
            >
              <label className="block mb-3 text-base md:text-lg font-Poppins-Medium">
                Tipo *
              </label>
              <select
                name="degreeType"
                value={formData.degreeType}
                onChange={handleChange}
                className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light"
                required
              >
                <option value="">Seleccione...</option>
                <option value="TFG">TFG</option>
                <option value="TFM">TFM</option>
                <option value="Tesis">Tesis Doctoral</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "0.8s" }}
            >
              <label className="block mb-3 text-base md:text-lg font-Poppins-Medium">
                Nombre del Grado *
              </label>
              <input
                type="text"
                name="degreeName"
                value={formData.degreeName}
                onChange={handleChange}
                className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                placeholder="Ej: Enfermería, Profesorado, Ing Aeroespacial..."
                required
              />
            </div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "0.9s" }}
            >
              <label className="block mb-3 text-base md:text-lg font-Poppins-Medium">
                ¿Qué necesita que hagamos? *
              </label>
              <select
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light"
                required
              >
                <option value="">Seleccione...</option>
                <option value="desarrollo-completo">Desarrollo completo</option>
                <option value="correccion-estilo">Corrección de estilo</option>
                <option value="analisis-datos">Análisis de datos</option>
                <option value="redaccion-parcial">Redacción parcial</option>
                <option value="asesoramiento">Asesoramiento</option>
              </select>
            </div>

            <div className="border-t border-accent/20 pt-6 md:pt-8">
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "1s" }}
              >
                <label className="block mb-3 text-base md:text-lg font-Poppins-Medium">
                  Título del TFG *
                </label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                  placeholder="También puede poner 'libre' o 'no sé'"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="w-full md:w-1/2">
                  <label className="block mb-3 text-sm font-Poppins-Medium">
                    Nº de páginas/palabras
                  </label>
                  <input
                    type="text"
                    name="pagesWords"
                    value={formData.pagesWords}
                    onChange={handleChange}
                    className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                    placeholder="(Si lo supiera)"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block mb-3 text-sm font-Poppins-Medium">
                    ... medido en:
                  </label>
                  <select
                    name="measureType"
                    value={formData.measureType}
                    onChange={handleChange}
                    className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light"
                  >
                    <option value="páginas">páginas</option>
                    <option value="palabras">palabras</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-3 text-base md:text-lg font-Poppins-Medium">
                  ¿Cuándo es su fecha límite de depósito? *
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light"
                  required
                />
              </div>
            </div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "1.1s" }}
            >
              <label className="block mb-3 text-base md:text-lg font-Poppins-Medium">
                ¿Quiere decirnos algo en particular?
              </label>
              <textarea
                name="additionalInfo"
                rows="4"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                placeholder="Por ejemplo si necesita entregas parciales, si tiene alguna idea pensada, etc."
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div
                className="w-full md:w-1/2 animate-fadeInUp"
                style={{ animationDelay: "1.2s" }}
              >
                <label className="block mb-3 text-base md:text-lg font-Poppins-Medium">
                  Email de contacto *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div
                className="w-full md:w-1/2 animate-fadeInUp"
                style={{ animationDelay: "1.2s" }}
              >
                <label className="block mb-3 text-base md:text-lg font-Poppins-Medium">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                  placeholder="+34 123 456 789"
                />
              </div>
            </div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "1.3s" }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 md:py-5 bg-accent text-white font-Poppins-Medium hover:bg-transparent hover:text-light border-2 border-accent transition-all duration-500 rounded-xl text-base md:text-lg flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 md:h-6 md:w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>Solicitar cotización</>
                )}
              </button>
            </div>

            {submitSuccess && (
              <div className="mt-6 p-4 md:p-6 bg-green-900/50 border-2 border-green-500 rounded-xl text-center animate-fadeIn flex items-center gap-3">
                <FaIcons.FaCheckCircle className="text-green-400 text-xl md:text-2xl" />
                <div>
                  <h4 className="font-Garet text-base md:text-lg">
                    ¡Solicitud enviada con éxito!
                  </h4>
                  <p className="text-light/80 text-xs md:text-sm font-Poppins-Medium">
                    Te enviaremos la cotización en menos de 24 horas.
                  </p>
                </div>
              </div>
            )}
            {submitError && (
              <div className="mt-6 p-4 md:p-6 bg-red-900/50 border-2 border-red-500 rounded-xl text-center animate-fadeIn">
                <p className="text-red-300 font-Poppins-Medium text-sm md:text-base">
                  {submitError}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
