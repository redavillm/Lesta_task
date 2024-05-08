export interface Options {
  level: number | string;
  nation: string;
  type: string;
}

interface VehicleIcon {
  default: string;
}

interface VehicleType {
  name: string;
  title: string;
  icons: VehicleIcon;
}

interface VehicleNation {
  name: string;
  title: string;
  color: string;
  icons: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface Vehicle {
  title: string;
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  level: number;
  type: VehicleType;
  nation: VehicleNation;
}

export interface GraphQLResponse<T> {
  data: T;
}
