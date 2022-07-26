import {mergeMapArrayToNewOne} from "@/util/object_util.js"
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

//暂时废除，实例化会带来大量的性能浪费，后续再做考虑
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
				const curHandlers=mergeMapArrayToNewOne(handlers,extendHandlers);
				return curHandlers[type].reduce((ctx,curHandler)=>{curHandler(ctx)},context);
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
	// let requestState=requestStep.init;
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
	// requestStep,
	// createRequestStatemachine,
	...api
};
export default request;
