import apiConf from "@/config/api.conf.js";

const requestTransfromPromise=(url,method,data)=>new Promise(
	(resolve,reject)=>{
		uni.request({
			url: apiConf.baseURL+url,
			method: method,
			data: data,
			success: res => {
				resolve(res);
			},
			fail: (error) => {
				reject(error)
			},
			complete: () => {}
		})
	}
);
const requestStep={
	init:"init",
	requesting:"requesting",
	success:"suceess",
	fail:"fail",
};
const createRequestStatemachine=(function(){
	const handlers={
		[requestStep.init]:[],
		[requestStep.requesting]:[],
		[requestStep.success]:[],
		[requestStep.fail]:[],
	};
	return {
		statemachine(type,context,extendHandlers){
			if(handlers[type]){
				const curHandlers
				// return handlers[type].reduce((ctx,curHandler)=>curHandler(ctx),context)
			};
			return null;
		},
		use(type,handler){
			if(handlers[type]){
				handlers[type].push((type));
			}
		}
	}
})();
const simpleRequest=async function (url,method,data,handlers){
	let requestStatee=()
	try(
	
	)catch(err){
		
	}
}

const api={
	get(url,data){
		return returequestTransfromPromise(url,"get",data);
	},
	post(url,data){
		return requestTransfromPromise(url,"post",data);
	}
};

const request={
	requestStep,
	createRequestStatemachine,
	...api
};
