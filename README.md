# techtask
Node.js REST API for filtering products as part of the interview with POQ

## Installation

In order to install dependencies with yarn, run the following:

```
npm install
```

To run in development mode:

```
npm run-script dev
```

To run unit-tests with jest:

```
npx jest
```

## Usage

This REST API consists of only one endpoint with optional parameters (The default port in config/serverConfig.js is set to 8000)

```
http://localhost:8000/filter
```

List of possible parameters:

Parameter | Type | Description
--------- | ---------- | -----------
maxprice | Number | Takes a desired price to filter products by
highlight | String (can have multiple values) |  Takes a set of words, seperated by comas, to highlight them in the description( ex. <em>WORD</em>)
size | String | Takes a desired size to filter products by

Example of a URL query:

```
/filter?maxprice=20&size=large&highlight=trousers,green
```
