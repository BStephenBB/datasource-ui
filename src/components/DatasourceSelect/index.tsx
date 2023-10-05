import { useState } from 'react'
import { Filters } from './Filters'
import { sources } from './sources'
import { Datasources } from './Datasources'
import { Card } from '../Card'

export function DatasourceSelect() {
  const [datasources, setDatasources] = useState(sources)

  function filterSources(query: string, filter: string) {
    setDatasources(
      sources.filter((source) => {
        const doesQueryMatch = source.name
          .toLowerCase()
          .includes(query.toLowerCase().trim())
        const doesFilterMatch =
          filter === 'default' ? true : source.type === filter
        return doesQueryMatch && doesFilterMatch
      })
    )
  }

  return (
    <>
      <h1>Select your datasource</h1>
      <p>
        Don{"'"}t see what you{"'"}re looking for?{' '}
        <a href="mailto:help@mindsdb.com">Make a request</a>
      </p>
      <section className="datasource-select">
        <Card
          header="Pro tip!"
          text="Write datasource name in the editor to print the form template."
        />
        <Filters filterSources={filterSources} />
        <Datasources datasources={datasources} />
      </section>
    </>
  )
}
