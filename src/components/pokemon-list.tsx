'use client';

type Props = {
	pokemonList: any[];
};

export default function PokemonList({ pokemonList }: Props) {
	return (
		<ul>
			{pokemonList?.map((pokemon: any, index: number) => {
				return (
					<li
						className="py-2 px-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer hover:text-red-500"
						key={index}
						onClick={() => {
							window.location.href = `/pokemon/${pokemon.name}`;
						}}
					>
						{pokemon.name}
					</li>
				);
			})}
		</ul>
	);
}
