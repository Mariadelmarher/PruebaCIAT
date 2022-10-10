import App from "../../App";
import Animal from "../../classes/Animal";
import utils from "../../libs/utils/utils";
import { BASE_ANIMALS, BASE_DEFORESTATION_ZONES } from "../../mocks/moks";

class APIDatabaseAnimals {
	private app: App;
	constructor(app: App) {
		this.app = app;
	}

	getVulnerableAnimals() {
		return new Promise<Animal[]>((resolve, reject) => {
			try {
				const animalsAffected: Animal[] = []
				BASE_ANIMALS.forEach((animal) => {
					let hasZone = false
					for (const zone of BASE_DEFORESTATION_ZONES) {
						// distance between animal and zone
						const distance = utils.distance(animal.lat, animal.lng, zone.lat, zone.lng)
						if (distance <= zone.radio) {
							hasZone = true;
							break;
						}
					}
					if (hasZone) {
						animalsAffected.push(animal)
					}
				})
				resolve(animalsAffected);
			} catch (error) {
				reject(error);
			}
		});
	}
}

export default APIDatabaseAnimals;
