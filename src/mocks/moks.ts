import Animal from "../classes/Animal"
import DeforestationZone from "../classes/DeforestationZone"

// mock data
export const BASE_ANIMALS: Animal[] = [
  { lat: 3.3794714104844874, lng: -76.51045666087066, owner: "pepe", name: "cow" },
  { lat: 3.37946806355368, lng: -76.5103138332461, owner: "pepe2", name: "pio" },
  { lat: 3.379456683988607, lng: -76.5101549123613, owner: "pepe3", name: "cow" },
]

export const BASE_DEFORESTATION_ZONES: DeforestationZone[] = [
  { lat: 3.3794714104844874, lng: -76.51045666087066, radio: 5 },
  { lat: 3.379448651355524, lng: -76.50991351355255, radio: 10 }
]