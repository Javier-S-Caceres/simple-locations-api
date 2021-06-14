export class BaseLocationDto {
  id: string
  alias: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
}