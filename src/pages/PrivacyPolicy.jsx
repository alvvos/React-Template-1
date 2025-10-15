import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-primary to-secondary py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-Garet font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent transform scale-110">
              Política de Privacidad
            </h1>
            <div className="h-px bg-accent/30 w-24 mx-auto mb-6"></div>
            <p className="text-light/60 font-Poppins-Medium text-lg">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>
          </div>

          <div className="bg-secondary/50 border-2 border-accent/20 rounded-2xl p-8 backdrop-blur-sm animate-fadeInUp">
            <div className="space-y-8 text-light/80 font-Poppins-Medium leading-relaxed">
              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  1. Responsable del tratamiento
                </h2>
                <p>
                  TFG Factory es el responsable del tratamiento de sus datos
                  personales.
                </p>
                <p>Email: contacto@tfgfactory.com</p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  2. Datos que recopilamos
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Datos de identificación (nombre, apellidos)</li>
                  <li>Datos de contacto (email, teléfono)</li>
                  <li>
                    Datos académicos (universidad, grado, tipo de trabajo)
                  </li>
                  <li>
                    Información del proyecto (título, extensión, fecha límite)
                  </li>
                  <li>Datos de comunicación y preferencias</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  3. Finalidad del tratamiento
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Gestión de solicitudes de cotización</li>
                  <li>Prestación de servicios académicos</li>
                  <li>Comunicación durante el desarrollo del proyecto</li>
                  <li>
                    Envío de información relevante sobre nuestros servicios
                  </li>
                  <li>Cumplimiento de obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  4. Base legal
                </h2>
                <p>El tratamiento se basa en:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ejecución del contrato de servicios</li>
                  <li>Consentimiento explícito del interesado</li>
                  <li>Interés legítimo para mejorar nuestros servicios</li>
                  <li>Cumplimiento de obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  5. Conservación de datos
                </h2>
                <p>Conservaremos sus datos durante:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Duración de la relación contractual y hasta 5 años después
                  </li>
                  <li>
                    Mientras mantenga el consentimiento para comunicaciones
                  </li>
                  <li>
                    Plazos legalmente establecidos para obligaciones fiscales y
                    contables
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  6. Destinatarios de los datos
                </h2>
                <p>No cedemos sus datos a terceros, excepto:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Proveedores de servicios necesarios para la ejecución del
                    trabajo
                  </li>
                  <li>
                    Autoridades competentes cuando sea legalmente requerido
                  </li>
                  <li>Plataformas de pago para procesar transacciones</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  7. Derechos del interesado
                </h2>
                <p>Tiene derecho a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Suprimir sus datos</li>
                  <li>Limitar el tratamiento</li>
                  <li>Portabilidad de datos</li>
                  <li>Oponerse al tratamiento</li>
                  <li>Retirar el consentimiento en cualquier momento</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, contacte en:
                  contacto@tfgfactory.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  8. Medidas de seguridad
                </h2>
                <p>
                  Implementamos medidas técnicas y organizativas para proteger
                  sus datos contra accesos no autorizados, pérdida o
                  destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  9. Transferencias internacionales
                </h2>
                <p>
                  No realizamos transferencias internacionales de datos fuera
                  del Espacio Económico Europeo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  10. Cookies
                </h2>
                <p>
                  Utilizamos cookies técnicas necesarias para el funcionamiento
                  del sitio. No utilizamos cookies de seguimiento o publicidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  11. Contacto
                </h2>
                <p>
                  Para cualquier consulta sobre privacidad:
                  contacto@tfgfactory.com
                </p>
              </section>

              <div className="border-t border-accent/20 pt-6 mt-8">
                <p className="text-light/60 text-sm">
                  Esta política puede actualizarse. Cualquier cambio será
                  comunicado a través de nuestro sitio web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
