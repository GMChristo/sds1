export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION';

export type Game = {
    id: number;
    platform: string;
    title: GamePlatform;
    label: string;
    value: number;
}