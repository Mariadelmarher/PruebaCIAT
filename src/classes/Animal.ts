class Animal {
  lat: number
  lng: number
  name: string
  owner: string
  constructor(data: any | null = null) {
    this.lat = data?.lat || 0;
    this.lng = data?.lng || 0;
    this.name = data?.name || "";
    this.owner = data?.owner || "";
  }
}
export default Animal;