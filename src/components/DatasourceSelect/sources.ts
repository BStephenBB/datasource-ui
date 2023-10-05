export type Source = {
  name: string
  image: string
  type: 'db' | 'other'
}

export const sources: Array<Source> = [
  {
    name: 'MongoDB',
    image: 'mongodb.png',
    type: 'db',
  },
  {
    name: 'Postgress',
    image: 'postgress.png',
    type: 'db',
  },
  {
    name: 'MySQL',
    image: 'mysql.png',
    type: 'db',
  },
  {
    name: 'Microsoft Access',
    image: 'microsoft-access.png',
    type: 'db',
  },
  {
    name: 'Airtable',
    image: 'airtable.png',
    type: 'other',
  },
  {
    name: 'S3',
    image: 's3.png',
    type: 'other',
  },
  {
    name: 'Cassandra',
    image: 'cassandra.png',
    type: 'db',
  },
  {
    name: 'ClickHouse',
    image: 'clickhouse.png',
    type: 'db',
  },
  {
    name: 'Couchbase',
    image: 'couchbase.png',
    type: 'db',
  },
  {
    name: 'CreateDB',
    image: 'createdb.png',
    type: 'db',
  },
  {
    name: 'd0ltdb',
    image: 'd0lt.png',
    type: 'db',
  },
  {
    name: 'DataStax',
    image: 'datastax.png',
    type: 'db',
  },
  {
    name: 'DynamoDB',
    image: 'dynamodb.png',
    type: 'db',
  },
  {
    name: 'Elasticsearch',
    image: 'elasticsearch.png',
    type: 'db',
  },
  {
    name: 'Firebird',
    image: 'firebird.png',
    type: 'db',
  },
]
