import Vue from 'vue'
import Vuex,{
	Store
} from "vuex";
Vue.use(Vuex);
const store=new Vuex.Store({
	state: {
		profile: {
			username: "admin",
			psd: "123456"
	
	}
}

})
export default store;
