export interface PokemonModel {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<string>;
}

export interface Pokemon {
    name: string
    url: string
}