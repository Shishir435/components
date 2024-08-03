import { atom } from "recoil";

export const backgroundAtom=atom<Background>({
    key: 'background',
    default: {
        h: 0,
        s: 100,
        l: 50,
        a: 1
    }
})