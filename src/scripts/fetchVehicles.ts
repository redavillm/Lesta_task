import axios, { AxiosResponse } from "axios";
import { GraphQLResponse, Vehicle } from "../interfaces";

export async function fetchVehicles(
  languageCode: string = "ru"
): Promise<Vehicle[]> {
  const query = `
    query Vehicles($languageCode: String = "ru") {
      vehicles(lang: $languageCode) {
        title
        description
        icons {
          large
          medium
        }
        level
        type {
          name
          title
          icons {
            default
          }
        }
        nation {
          name
          title
          color
          icons {
            small
            medium
            large
          }
        }
      }
    }
  `;

  try {
    const response: AxiosResponse<GraphQLResponse<{ vehicles: Vehicle[] }>> =
      await axios.post("https://vortex.korabli.su/api/graphql/glossary/", {
        query,
        variables: { languageCode },
      });

    return response.data.data.vehicles;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
}
