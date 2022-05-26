# Setup:

### locally

Node version: 12 (it may work in the most recent versions)

Install dependencies:

```
npm ci                     # install dependencies
```

Database setup:

```
docker compose up -d       # start the database
npm run migrate:deploy     # apply pending migrations to database
npm run db-script          # populate database

```

GraphQL server:

```
npm run dev                # run in dev mode
```

Aditionally, the project contains two main unit tests (when zipcode exists and when zipcode does not exist). To run the tests, execute:

```
npm run test
```

# Usage:

Query:

```
query  {
  getZipCodeInfo(zipCode: "20710") {
    city
    county
  }
}
```

Result example:

```
{
  "data": {
    "getZipCodeInfo": {
      "city": "Bladensburg",
      "county": "Prince George's County"
    }
  }
}
```

# Notes:

### Data

- For convenience, I used an online tool to convert from CSV format to JSON. This data is stored in `data/zipCode.ts`. Then, I created the script `src/db-script.ts` to populate data into the database (Postgres).

# Improvements:

## Security

Authentication: To prevent any service abuse, we can require users to authenticate. For each user, we can implement a throttling mechanism so each one has a limited amount of resources (number of requests, server time, query complexity, etc.)

## Testing

Integration testing: Test the endpoint with a real connection to the database. This will ensure the database has the correct data and there is communication between GraphQL server and database.

## CI/CD

CI: run post commit webhooks (static analysis, unit test, code formatting)

CD: implement Continuous Deployment (eg. with Github Actions, Jenkins, etc)

## Performance

Cache Layer: Avoid requests to the database by using an in-memory cache (eg. Redis)
