import env from "./env"

const baseURL={
	[env.envMode.dev]:"http://api.yiker.cc"
}
const apiConf={
	baseURL:baseURL[env.curEnv]
};
export default apiConf;