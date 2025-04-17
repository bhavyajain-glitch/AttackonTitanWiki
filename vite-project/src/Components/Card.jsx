function Card({ character }) {
    return (
      <div className="group bg-[#2a2424] hover:bg-[#352d2d] transition-all duration-300 ease-in-out rounded-3xl p-6 shadow-2xl shadow-black hover:shadow-[#68e1fd] backdrop-blur-lg flex flex-col md:flex-row gap-6 transform hover:scale-[1.015] animate-fadeIn">
        <img
          src={character.img}
          alt={character.name}
          className="w-52 h-52 object-cover rounded-2xl shadow-lg group-hover:shadow-[#3d6055] transition-transform duration-500 ease-in-out"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
        <div className="flex flex-col justify-around flex-1 text-center md:text-left">
          <p className="text-4xl font-bold text-white tracking-wide mb-3">{character.name}</p>
          <p className="text-gray-400 text-lg">{character.description}</p>
          <p className="text-gray-400 text-lg">Status: <span className="text-white">{character.status}</span></p>
          <p className="text-gray-400 text-lg">Gender: <span className="text-white">{character.gender}</span></p>
          <p className="text-gray-400 text-lg">Species: <span className="text-white">{character.species.join(", ")}</span></p>
          <p className="text-gray-400 text-lg">Occupation: <span className="text-white">{character.occupation}</span></p>
        </div>
      </div>
    )
  }
  
  export default Card
  