import { Link } from 'react-router-dom'
import { useState } from 'react'

import './List.css'

export default function List({ list, page }) {
  const [searchQuery, setSearchQuery] = useState('')

  // Функция для обновления поискового запроса
  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  // Фильтрация списка на основе поискового запроса
  const filteredList = list.filter((item) => {
    // Фильтрация по имени актера или названию звездолета
    return item.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div>
      <form className="search__form">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Поиск..."
        className="search-input" 
      />
    <button className="search__button">
          <ion-icon name="search"></ion-icon>
        </button>
        </form>
      <ul className="list" aria-label="starships list">
        {filteredList.map((item, index) => (
          <Link
            key={index}
            to={page === 'starships' ? `/starships/${item.url.match(/[0-9]+/)}` : `/actors/${item.url.match(/[0-9]+/)}`}
          >
            <li
              className={`list__item ${page === 'actors' ? 'list__item--actor' : ''}`}
              data-testid={`element-${index}`}
            >
              <h3>{item.name}</h3>
              {page === 'starships' && <p>{item.model}</p>}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
