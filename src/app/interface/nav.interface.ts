
export interface NavInterface {
  routeDetails: RouteDetails;
  phrazeState: PhrazeState;
  isShowSearch: boolean;
  currentPosition: {lat: number, lon: number};
}

export interface RouteDetails {
  routePoints: [[]];
  routeLegs: Array<LegDetails>;
  routeLength: number;
  routeDuration: number;
}

export interface LegDetails {
  index: number;
  coords: [];
  text: string;
}

export enum PhrazeState {
  IDLE = 'IDLE',
  PREVIEW = 'PREVIEW',
  NAVIGATION = 'NAVIGATION'
}

