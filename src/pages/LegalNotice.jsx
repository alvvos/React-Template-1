import React from "react";
import Footer from "../components/Footer";

const LegalNotice = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-primary to-secondary py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-Garet font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent transform scale-110">
              Aviso Legal
            </h1>
            <div className="h-px bg-accent/30 w-24 mx-auto mb-6"></div>
            <p className="text-light/60 font-Poppins-Medium text-lg">
              De conformidad con la Ley 34/2002 de Servicios de la Sociedad de
              la Información
            </p>
          </div>

          <div className="bg-secondary/50 border-2 border-accent/20 rounded-2xl p-8 backdrop-blur-sm animate-fadeInUp">
            <div className="space-y-8 text-light/80 font-Poppins-Medium leading-relaxed">
              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  1. Datos Identificativos
                </h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Denominación Social:</strong> TFG Factory
                  </li>
                  <li>
                    <strong>Domicilio Social:</strong> España
                  </li>
                  <li>
                    <strong>Email:</strong> contacto@tfgfactory.com
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  2. Objeto
                </h2>
                <p>
                  TFG Factory se dedica a la prestación de servicios de
                  asesoramiento, desarrollo y redacción de Trabajos de Fin de
                  Grado (TFG), Trabajos de Fin de Máster (TFM) y otros trabajos
                  académicos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  3. Condiciones de Uso
                </h2>
                <p>
                  El acceso y uso de este sitio web atribuye la condición de
                  usuario e implica la aceptación plena de las presentes
                  condiciones. El usuario se compromete a hacer un uso adecuado
                  y lícito del sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  4. Propiedad Intelectual e Industrial
                </h2>
                <p>
                  Todos los contenidos de este sitio web son propiedad de TFG
                  Factory. Queda prohibida la reproducción, distribución y
                  comunicación pública sin autorización expresa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  5. Responsabilidad
                </h2>
                <p>
                  TFG Factory no se responsabiliza del uso ilegal que los
                  usuarios puedan hacer de los trabajos académicos
                  proporcionados. Los trabajos tienen carácter orientativo y de
                  asesoramiento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  6. Protección de Datos
                </h2>
                <p>
                  Los datos personales serán tratados conforme a nuestro Aviso
                  de Privacidad y el Reglamento General de Protección de Datos
                  (UE) 2016/679.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  7. Ley Aplicable y Jurisdicción
                </h2>
                <p>
                  Las presentes condiciones se rigen por la legislación
                  española. Para la resolución de conflictos, las partes se
                  someten a los juzgados y tribunales del domicilio del
                  consumidor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  8. Comunicaciones Comerciales
                </h2>
                <p>
                  TFG Factory podrá enviar comunicaciones comerciales por correo
                  electrónico u otros medios equivalentes, siempre que hayan
                  sido autorizadas por el usuario.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  9. Modificaciones
                </h2>
                <p>
                  TFG Factory se reserva el derecho de modificar el presente
                  aviso legal en cualquier momento. Los cambios serán publicados
                  en esta misma página.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-Garet font-bold text-light mb-4">
                  10. Contacto
                </h2>
                <p>
                  Para cualquier cuestión relacionada con este aviso legal,
                  puede contactarnos en: contacto@tfgfactory.com
                </p>
              </section>

              <div className="border-t border-accent/20 pt-6 mt-8">
                <p className="text-light/60 text-sm">
                  Este aviso legal fue actualizado el{" "}
                  {new Date().toLocaleDateString("es-ES")}
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

export default LegalNotice;
