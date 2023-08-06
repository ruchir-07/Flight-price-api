interface OperatingCarrier {
  locationId: number;
  code: string;
  logoUrl: string;
  displayName: string;
}

interface MarketingCarrier {
  locationId: number;
  code: string;
  logoUrl: string;
  displayName: string;
}

interface Leg {
  originStationCode: string;
  isDifferentOriginStation: boolean;
  destinationStationCode: string;
  isDifferentDestinationStation: boolean;
  departureDateTime: string;
  arrivalDateTime: string;
  classOfService: string;
  marketingCarrierCode: string;
  operatingCarrierCode: string;
  equipmentId: string;
  amenities: any[];
  flightNumber: number;
  seatGuruEquipmentId: number;
  seatGuruAirlineUrl: string;
  numStops: number;
  distanceInKM: number;
  isInternational: boolean;
  selfTransfer: boolean;
  operatingCarrier: OperatingCarrier;
  marketingCarrier: MarketingCarrier;
}

interface Layover {
  durationType: string;
  hasStationChange: boolean;
  durationInMinutes: number;
}

interface Segment {
  legs: Leg[];
  layovers: Layover[];
}

interface PartnerSuppliedProvider {
  id: string;
  displayName: string;
  logoUrl: string;
}

interface PurchaseLink {
  purchaseLinkId: string;
  providerId: string;
  partnerSuppliedProvider: PartnerSuppliedProvider;
  commerceName: string;
  currency: string;
  originalCurrency: string;
  seatAvailability: number;
  taxesAndFees: number;
  taxesAndFeesPerPassenger: number;
  totalPrice: number;
  totalPricePerPassenger: number;
  fareBasisCodes: any[];
  containedPurchaseLinks: any[];
  partnerData: any;
  isPaid: boolean;
  fareAttributesList: any[];
  url: string;
}

export interface IFlightData {
  segments: Segment[];
  purchaseLinks: PurchaseLink[];
}
