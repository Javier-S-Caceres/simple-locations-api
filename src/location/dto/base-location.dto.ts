export class BaseLocationDto {
  id: string
  alias: string
  address: string
  location: {
    lat: number
    lng: number
  }
}