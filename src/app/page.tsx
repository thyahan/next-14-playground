import api from '@/api/api';
import getPokemonAPI from '@/api/pokemon';
import PokemonList from '@/components/pokemon-list';

const pokemonAPI = getPokemonAPI(api);

export default async function Home() {
	const pokemonList = await pokemonAPI.getPokemon().then((res) => res.results);

	return (
		<div className="w-[480px] mx-auto">
			<h1 className="text-xl text-center py-4 sticky bg-white shadow-md top-0">Pokemon List</h1>

			<PokemonList pokemonList={pokemonList} />
		</div>
	);
}
