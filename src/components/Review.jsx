const Review = ({ texto, estrellas, autor, carrera, proyecto, fecha }) => {
  const defaultData = {
    texto:
      "Excelente servicio académico. La calidad del trabajo superó mis expectativas y me ayudó a obtener la máxima calificación en mi proyecto universitario.",
    estrellas: 5,
    autor: "Estudiante Satisfecho",
    carrera: "Ciencias",
    proyecto: "Proyecto Universitario",
    fecha: "2024",
  };

  const data = {
    texto: texto || defaultData.texto,
    estrellas: estrellas || defaultData.estrellas,
    autor: autor || defaultData.autor,
    carrera: carrera || defaultData.carrera,
    proyecto: proyecto || defaultData.proyecto,
    fecha: fecha || defaultData.fecha,
  };

  return (
    <div className="w-full h-min-screen bg-gradient-to-r from-light to-turquesa p-4 md:p-6 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-3">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 md:w-5 md:h-5 ${
                index < data.estrellas ? "text-yellow-400" : "text-gray-200"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs font-Garet text-gray-700">{data.fecha}</span>
      </div>
      <blockquote className="mb-4 flex-grow">
        <p className="text-gray-700 text-sm md:text-base font-Poppins-Medium leading-relaxed line-clamp-4 md:line-clamp-5">
          "{data.texto}"
        </p>
      </blockquote>
      <div className="border-t pt-3">
        <p className="font-semibold font-Garet text-gray-900 text-sm md:text-base">
          {data.autor}
        </p>
        <div className="flex flex-row gap-1 mt-1">
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 font-Garet rounded-full">
            {data.carrera}
          </span>
          <span className="text-xs text-white bg-purple-light bg-opacity-50 px-2 py-1 font-Garet rounded-full ">
            {data.proyecto}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
