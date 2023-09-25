export const fallbackLng = "en";
export const languages = [fallbackLng, "ge", "ru"];
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
