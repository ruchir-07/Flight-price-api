
# AegisCovenant Node.js Assignment
**Problem Statement:** You need to write a Node.js Script which shows flight prices between two cities

- Built using Reactjs + Typescript and Tailwind CSS
- Fully Responsive
- Deployed using vercel

*Search Flight*

![](https://i.ibb.co/n7DSGvD/1.png)

*See the results*

![](https://i.ibb.co/mGSryZn/2-1.png)

## API

**Query parameters**
- src
- dest
- date

**Example**
To get flight details between Delhi to Mumbai on 2023-06-15 (yyyy-mm-dd),
``` https://flight-price.vercel.app/flight-price?src=DEL&dest=BOM&date=2023-06-15 ```

*Output*
```json
{
"flightsData": [
	{"airline":"Vistara",
	"price":13356.16,
	"flightNumber":"UK 617",
	"logoUrl":"https://static.tacdn.com/img2/flights/airlines/logos/100x100/Vistara.png"}
	]
}
 ```
