export const extractTextLength = (text?: string) =>
  text?.replaceAll(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gm, "__").length ?? 0;
