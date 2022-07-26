/**
 * 
 * @param {{
	 [string]:[]
 }} origin 以它为中心的对象
 * @param {{
	 [string]:[]
 }} origin1 根据第一个对象访问它的对象属
 * @@return {{
 	 [string]:[]
 }} origin1 根据第一个对象访问它的对象属
 */

const mergeMapArrayToNewOne=(origin,origin1)=>{
	const obj=Object.keys(origin).reduce((target,key)=>{
		
		const isArrayValues=[origin[key],origin1[key]].filter(Boolean).every(Array.isArray);
		if(!isArrayValues){
			throw("mergeMapArray require key must be a array");
		};
		
		target[key]=Array.isArray(origin1[key])?[...origin[key],...origin1[key]]:[...origin];
		return target;
	},{});
}