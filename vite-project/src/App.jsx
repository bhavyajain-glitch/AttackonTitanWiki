import { Fragment, useEffect, useState } from 'react'
import logo from './assets/logo1.png'
import Card from './Components/Card.jsx'
import SplashCursor from './Components/SplashCursor.jsx'



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
    <Fragment>
      <SplashCursor />
    <div className="min-h-screen w-screen px-5 bg-gradient-to-br from-[#0e1111] via-[#1a2222] to-[#151515] text-white font-['Orbitron']">
      <header className="flex flex-col md:flex-row justify-between items-center py-8 gap-6">
        <div className="flex-1" />
        <img src={logo} alt="logo" className="w-64 h-auto md:w-80 animate-fadeInUp" />
        <div className="flex-1 flex justify-end">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-lg text-lg px-4 py-2 bg-white text-black outline-none shadow-md focus:shadow-[#62e0fc] transition duration-300"
            placeholder="Search Eldians..."
          />
        </div>
      </header>

      {loading && <p className="text-center text-lg mt-5 animate-pulse">Loading...</p>}
      {error && <p className="text-center text-red-400 mt-2">{error}</p>}

      {!loading && (
        <>
          {input.trim() && allCharacters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {allCharacters.map((char) => (
                <Card character={char} key={char.id} />
              ))}
            </div>
          ) : input.trim() && allCharacters.length === 0 ? (
            <p className="text-center mt-6 text-gray-300">No characters found.</p>
          ) : (
            <div className="flex items-center justify-center flex-col mt-10 animate-fadeInUp">
              {featuredCharacter && <Card character={featuredCharacter} />}
            </div>
          )}
        </>
      )}
    </div>
    </Fragment>
  )
}

export default App
