import { ChangeEvent, useState } from 'react'

export function Filters({
  filterSources,
}: {
  filterSources: (query: string, filter: string) => void
}) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('default')

  function searchHandler(event: ChangeEvent<HTMLInputElement>) {
    const searchText = event.target.value
    setQuery(searchText)
    filterSources(searchText, filter)
  }

  function filterHandler(event: ChangeEvent<HTMLSelectElement>) {
    const newFilter =
      event.target.value === 'all' ? 'default' : event.target.value
    setFilter(newFilter)
    filterSources(query, newFilter)
  }

  return (
    <div className="filters">
      <div className="search">
        <img src="search.svg" alt="search icon" />
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={searchHandler}
        />
      </div>
      <div className="filter">
        <img src="chevron.svg" alt="down arrow icon" />
        <select value={filter} onChange={filterHandler} aria-label="Filter by">
          <option value="default" disabled hidden>
            Filter by
          </option>
          {filter !== 'default' ? <option value="all">All</option> : null}
          <option value="db">Database</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  )
}
