import * as FaIcons from 'react-icons/fa';
const FAQSection = () => {
    return (
        <section className="py-12 bg-gradient-to-b from-secondary to-primary">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl md:text-4xl font-Garet mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-light to-accent transform scale-110">
                    Preguntas frecuentes
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            question: "¿Cuánto tiempo tardan en desarrollar un TFG/TFM?",
                            answer:
                                "El tiempo varía según la complejidad y extensión del trabajo. Para un TFG estándar suele ser de 2-4 semanas, mientras que un TFM puede llevar 3-6 semanas. Trabajamos con entregas parciales para que puedas hacer seguimiento.",
                        },
                        {
                            question: "¿Garantizan la originalidad del trabajo?",
                            answer:
                                "Sí, todos nuestros trabajos incluyen informe de originalidad verificada. Utilizamos herramientas antiplagio profesionales y entregamos el certificado correspondiente.",
                        },
                        {
                            question: "¿Ofrecen revisiones si el tutor solicita cambios?",
                            answer:
                                "Sí, incluidas revisiones ilimitadas durante el desarrollo y 30 días de soporte post-entrega para ajustes solicitados por el tutor, sin coste adicional.",
                        },
                        {
                            question: "¿Cómo manejan la confidencialidad de los datos?",
                            answer:
                                "Trabajamos con absoluta confidencialidad. Tus datos personales y académicos están protegidos y nunca compartimos información con terceros.",
                        },
                        {
                            question: "¿Puedo solicitar entregas parciales del trabajo?",
                            answer:
                                "Sí, organizamos el trabajo en entregas parciales según tu cronograma preferido. Puedes solicitar avances cuando lo necesites para presentar a tu tutor.",
                        },
                        {
                            question: "¿Qué pasa si necesito el trabajo de urgencia?",
                            answer:
                                "Ofrecemos servicio express para proyectos con plazos muy ajustados. Contacta con nosotros para evaluar la viabilidad y costes adicionales.",
                        },
                    ].map((faq, i) => (
                        <div
                            key={i}
                            className="border-2 border-accent/10 bg-secondary/30 rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 backdrop-blur-sm animate-fadeInUp"
                            style={{
                                animationDelay: `${0.3 + i * 0.1}s`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <h3 className="text-xl font-Garet font-bold mb-4 flex items-center gap-3">
                                <FaIcons.FaQuestionCircle className="text-accent w-8 h-8 md:w-6 md:h-6" />
                                {faq.question}
                            </h3>
                            <p className="text-light/80 font-Poppins-Medium pl-9">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection