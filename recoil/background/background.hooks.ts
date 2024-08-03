import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "./background.atom"

export const useBackgroundValue=()=>{
    return useRecoilValue(backgroundAtom)
}

export const useSetBackground=()=>{
    return useSetRecoilState(backgroundAtom)
}

export const useBackground=()=>{
    return useRecoilState(backgroundAtom)
}