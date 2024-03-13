import { getProductStyles } from './relatedModels.js';

export const getProductsStyles = async (productIds) => {
  const styles = await Promise.all(productIds.map((id) => getProductStyles(id)));
  const defaultStyles = styles.map((stylesData) => {
    let defaultIndex = stylesData.data.results.findIndex((style) => style['default?'] === true);
    if (defaultIndex === -1) {
      defaultIndex = 0;
    }
    return stylesData.data.results[defaultIndex];
  });
  return defaultStyles;
};

export function getOutfitFromCookie() {
  const outfitCookie = document.cookie?.match(/(?:(?:^|.*;\s*)outfit\s*=\s*([^;]*).*$)|^.*$/)?.[1];
  return outfitCookie ? JSON.parse(outfitCookie) : [];
}
