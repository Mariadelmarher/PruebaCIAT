class DeforestationZone {
  lat: number
  lng: number
  radio: number // in meters
  constructor(data: any | null = null) {
    this.lat = data?.lat || 0;
    this.lng = data?.lng || 0;
    this.radio = data?.radio || 0;
  }
}
export default DeforestationZone;