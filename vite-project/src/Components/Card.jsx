function Card({ character }) {
    return (
      <div className="group relative p-6 rounded-3xl shadow-lg flex flex-row gap-6 bg-[#2c2424] transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7fc7a6]/30 border border-[#3e3e3e] max-w-4xl mx-auto">
        
        <div className="min-w-[160px] min-h-[220px] max-w-[160px] max-h-[220px] overflow-hidden rounded-xl shadow-md transition-all duration-300">
          <img
            src={character.img}
            alt={character.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
          />
        </div>
  
        <div className="flex flex-col justify-between flex-1 py-2">
          <p className="text-2xl md:text-3xl text-center font-bold text-[#d4e9e2]">{character.name}</p>
  
          <div className="flex flex-col gap-1 text-center mt-3">
            <p className="text-gray-400 text-base md:text-lg">{character.description}</p>
            <p className="text-gray-400 text-base md:text-lg">Status: {character.status}</p>
            <p className="text-gray-400 text-base md:text-lg">Gender: {character.gender}</p>
            <p className="text-gray-400 text-base md:text-lg">Species: {character.species.join(", ")}</p>
            <p className="text-gray-400 text-base md:text-lg">Occupation: {character.occupation}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Card
  