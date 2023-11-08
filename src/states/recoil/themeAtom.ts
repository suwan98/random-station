import {RecoilState, atom} from "recoil";

export const themeAtom: RecoilState<string> = atom({
  key: "theme",
  default: "light",
});
