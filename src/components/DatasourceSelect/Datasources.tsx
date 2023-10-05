import { Source } from './sources'

export function Datasources({ datasources }: { datasources: Array<Source> }) {
  return (
    <>
      <div className="datasources">
        {datasources.map(({ name, image }) => {
          return (
            <button key={name}>
              <img src={image} alt={name} />
              {name}
            </button>
          )
        })}
      </div>
      {datasources.length === 0 ? (
        <h3>No results, try searching for something else!</h3>
      ) : null}
    </>
  )
}
