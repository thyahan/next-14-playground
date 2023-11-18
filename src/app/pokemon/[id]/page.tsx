import api from '@/api/api';
import getPokemonAPI from '@/api/pokemon';

const pokemonAPI = getPokemonAPI(api);

export default async function PokemonDetail({ params }: { params: any }) {
	const id = params.id;
	const detail = typeof id === 'string' ? await pokemonAPI.getPokemonDetail(id).then((res) => res) : null;

	return (
		<div className="w-[480px] mx-auto">
			<h1 className="text-xl text-center py-4 sticky bg-white shadow-md top-0">Pokemon Detail</h1>
			<div className="py-2">
				<a href="/" className="text-red-500 underline cursor-pointer">
					Back
				</a>
			</div>
			<div className="p-4 bg-gray-200">
				<p className="font-mono">name: {detail.name}</p>
				<p className="font-mono">species: {detail.species?.name}</p>
				<p className="font-mono">weight: {detail.weight}</p>
			</div>
		</div>
	);
}
