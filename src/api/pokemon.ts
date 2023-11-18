import { AxiosInstance } from 'axios';

export default function getPokemonAPI(api: AxiosInstance) {
	return {
		getPokemon: async () => {
			const response = await api.get('/pokemon');
			return response.data;
		},
		getPokemonDetail: async (id: string) => {
			const response = await api.get(`/pokemon/${id}`);
			return response.data;
		},
	};
}
