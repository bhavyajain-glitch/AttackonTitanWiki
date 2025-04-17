import { useEffect, useState } from 'react'
import logo from './assets/logo1.png'
import Card from './Components/Card.jsx'

function App() {
  const BASE_URL = 'https://api.attackontitanapi.com'

  const [allCharacters, setAllCharacters] = useState([])
  const [featuredCharacter, setFeaturedCharacter] = useState(null)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${BASE_URL}/characters`)
        const data = await res.json()
        setFeaturedCharacter(data.results?.[4])
      } catch (err) {
        setError('Failed to load featured character.')
      } finally {
        setLoading(false)
      }
    }

    fetchFeatured()
  }, [])

  useEffect(() => {
    const trimmed = input.trim()
    if (!trimmed) {
      setAllCharacters([])
      return
    }

    const timer = setTimeout(() => {
      fetchCharacters(trimmed)
    }, 500)

    return () => clearTimeout(timer)
  }, [input])

  const fetchCharacters = async (name) => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${BASE_URL}/characters?name=${name}`)
      const data = await res.json()
      setAllCharacters(data.results || [])
    } catch (err) {
      console.error(err)
      setError('Failed to fetch characters.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="overflow-x-hidden min-h-screen w-screen px-5 bg-gradient-to-b from-[#111] to-[#20202A] text-white font-aot animate-fade-in">
      <header className="flex flex-col md:flex-row justify-between items-center py-5 gap-5">
        <div className="flex-1" />
        <img src={logo} alt="logo" className="w-64 h-auto md:w-96 drop-shadow-md" />
        <div className="flex gap-4 items-center flex-1 justify-end">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-lg text-lg pl-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#7fc7a6] shadow-md transition-all duration-300 w-56 md:w-72"
            placeholder="Search Eldians..."
          />
        </div>
      </header>

      {loading && (
        <p className="text-center text-lg mt-6 animate-pulse text-[#9fdfc4]">Loading characters...</p>
      )}

      {error && (
        <p className="text-center text-red-400 mt-2">{error}</p>
      )}

      {!loading && (
        <>
          {input.trim() && allCharacters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pb-10">
              {allCharacters.map((char) => (
                <Card character={char} key={char.id} />
              ))}
            </div>
          ) : input.trim() && allCharacters.length === 0 ? (
            <p className="text-center mt-8 text-gray-400 italic text-xl">No characters found in the Walls...</p>
          ) : (
            <div className="flex items-center justify-center flex-col mt-14">
              {featuredCharacter && <Card character={featuredCharacter} />}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App
