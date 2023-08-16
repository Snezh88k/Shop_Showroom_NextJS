export const fallbackLng = "ru";
export const languages = [fallbackLng, "ge", "en"];
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
   
    supportedLngs: languages,
    fallbackLng: false,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
