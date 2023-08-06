import express from 'express';
import axios from 'axios';
import { IFlightData } from '../../interfaces/IFlightData';
import 'dotenv/config';

const router = express.Router();

// @route  GET api/flight-price
// @desc   get different flight prices based on source, destination and date
// @access  Public
router.get('/', async (req: express.Request, res: express.Response) => {
  const { src, dest, date } = req.query;

  console.log(src, dest, date);

  const options = {
    method: 'GET',
    url: process.env.FLIGHT_API,
    params: {
      sourceAirportCode: `${src}`,
      destinationAirportCode: `${dest}`,
      date: `${date}`,
      itineraryType: 'ONE_WAY',
      sortOrder: 'PRICE',
      numAdults: '1',
      numSeniors: '0',
      classOfService: 'ECONOMY',
      currencyCode: 'INR',
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
    },
  };

  try {
    // fectching external API
    const response = await axios.request(options);
    const { data } = response.data;
    const flightsData: {
      airline: string;
      price: number;
      flightNumber: string;
      logoUrl: string;
    }[] = [];

    // extracting data from API response
    data &&
      data.flights?.map((flight: IFlightData) => {
        if (flight.segments[0].legs.length == 1) {
          const flightData = {
            airline: flight.segments[0].legs[0].operatingCarrier.displayName,
            price: flight.purchaseLinks[0].totalPrice * 82,
            flightNumber: `${flight.segments[0].legs[0].marketingCarrierCode} ${flight.segments[0].legs[0].flightNumber}`,
            logoUrl: flight.segments[0].legs[0].operatingCarrier.logoUrl,
          };
          flightsData.push(flightData);
        }
      });
    res.status(200).json({ flightsData: flightsData });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
