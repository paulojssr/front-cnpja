import { http } from './config'


export default {

	 show:(cnpj) => {
		return http.get(cnpj);
	 }



}