function Card({ character }) {
    return (
        <>
                    <div className=" p-8 rounded-3xl shadow-md flex flex-row gap-7 bg-[#403535]">
                        <img src={character.img} alt={character.name} className="rounded-xl shadow-lg shadow-[#3d6055] " 
                        referrerPolicy="no-referrer"
                        crossOrigin="anonymous"/>
                        <div className="flex flex-col justify-around flex-1">
                            <p className="text-3xl text-center font-bold mt-6">{character.name}</p>
                            <div className="flex justify-center flex-col text-center">
                                <p className="text-gray-500 text-xl">{character.description}</p>
                                <p className="text-gray-500 text-xl">Status: {character.status}</p>
                                <p className="text-gray-500 text-xl">Gender: {character.gender}</p>
                                <p className="text-gray-500 text-xl">Species: {character.species.join(", ")}</p>
                                <p className="text-gray-500 text-xl">Occupation: {character.occupation}</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
        </>
    )
}

export default Card