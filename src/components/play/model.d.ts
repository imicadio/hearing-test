export type IPlay = {
    play: boolean;
    changePlay: () => void;
    currentHz: number | string | null | undefined;
}