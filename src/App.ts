import FireApi from "./database/FireApi";

class App {
	started: boolean;
	api: FireApi;

	constructor(serialToken: string) {
		this.started = false;
		this.api = new FireApi(this);
	}

	initializeListeners() {
		// start many listeners
	}

	async start() {
		const that = this;
		if (that.started) return true;

		try {
			// // admin.initializeApp();
			// that.fireApp = admin.initializeApp(
			// 	{
			// 		credential: admin.credential.cert(<any>serviceAccount),
			// 	},
			// 	"localization-animals"
			// );

			// //--post initialize


			// that.initializeListeners();
			that.started = true;
			return true;
		} catch (error) {
			that.started = false;
			throw new Error(error);
		}
	}


}

export default App;
