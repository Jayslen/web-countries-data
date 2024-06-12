import { useState } from 'react'
import data from '../mocks/countries-data.json'

const mapData = (country) => {
  return {
    name: country.name.common,
    flag: country.flags.png,
    flagDescription: country.flags.alt,
    region: country.region,
    population: country.population,
    capital: country.capital,
  }
}

export function CountriesSection() {
  const [countries, setCountries] = useState(
    data.map(mapData).sort((a, b) => a.name.localeCompare(b.name))
  )
  const [continent, setContinent] = useState(null)
  const continents = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <>
      <form
        className="flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between"
        onSubmit={(e) => {
          e.preventDefault()
          const { search } = Object.fromEntries(new FormData(e.target))
          const filteredCountries = data
            .filter((country) => {
              return country.name.common
                .toLowerCase()
                .includes(search.toLowerCase())
            })
            .map(mapData)
          setCountries(filteredCountries)
        }}
      >
        <input
          type="text"
          placeholder="Search for a country"
          name="search"
          className="bg-dark-text-light-elements-color dark:bg-dark-elements-color shadow-xl w-full md:w-96 py-3 px-4 rounded-md"
        />
        <div className="relative">
          <label
            htmlFor="show"
            className="bg-dark-text-light-elements-color dark:bg-dark-elements-color w-52 block shadow-xl py-3 px-4 rounded-md select-none cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-900"
          >
            {continent ?? 'Filter by region'}
          </label>
          <input type="checkbox" hidden id="show" className="peer" />
          <ul className="hidden peer-checked:block absolute top-14 w-52 bg-white dark:bg-dark-elements-color shadow-xl rounded-md">
            {continents.map((continent) => {
              return (
                <li
                  key={continent}
                  className="cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-900 py-3 px-4 first:rounded-t-md last:rounded-b-md"
                  onClick={() => {
                    setContinent(continent)
                    setCountries(
                      data
                        .filter((country) =>
                          continent === 'All'
                            ? true
                            : country.region === continent
                        )
                        .map(mapData)
                    )
                  }}
                >
                  {continent}
                </li>
              )
            })}
          </ul>
        </div>
      </form>
      /
      <section className="my-10">
        <ul
          className={`grid ${
            countries.length < 4
              ? 'grid-cols-4'
              : 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'
          } gap-x-24 gap-y-8`}
        >
          {countries.map((country, index) => (
            <li
              key={index}
              className="grid grid-row w-full h-[350px] shadow-xl rounded-md overflow-hidden bg-dark-text-light-elements-color dark:bg-dark-elements-color"
            >
              <a href={`${country.name}`}>
                <img
                  src={country.flag}
                  alt={country.flagDescription}
                  className="h-44 w-full object-fit"
                />
                <div className="py-4 px-6">
                  <h2 className="text-lg font-bold mb-2">{country.name}</h2>
                  <ul className="flex flex-col gap-1 text-md">
                    <li className="flex gap-1">
                      <span className="font-md">Population :</span>
                      <span>{country.population}</span>
                    </li>
                    <li className="flex gap-1">
                      <span className="font-md">Region :</span>
                      <span>{country.region}</span>
                    </li>
                    <li className="flex gap-1">
                      <span className="font-md">Capital :</span>
                      <span>{country.capital}</span>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
