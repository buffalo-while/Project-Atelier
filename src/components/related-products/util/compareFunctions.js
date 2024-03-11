function parseFeature(feature) {
  if (feature.value === null) {
    return feature.feature;
  }
  return `${feature.value} ${feature.feature}`;
}

export default function compareFeatures(featuresA, featuresB) {
  const result = [];
  const parsedFeaturesA = featuresA.map((feature) => parseFeature(feature));
  const parsedFeaturesB = featuresB.map((feature) => parseFeature(feature));
  const uniqueParsedFeaturesA = parsedFeaturesA.filter((value, index, array) => array.indexOf(value) === index);
  const uniqueParsedFeaturesB = parsedFeaturesB.filter((value, index, array) => array.indexOf(value) === index);
  for (let i = 0; i < uniqueParsedFeaturesA.length; i += 1) {
    const indexB = uniqueParsedFeaturesB.indexOf(uniqueParsedFeaturesA[i]);
    if (indexB === -1) {
      result.push([true, uniqueParsedFeaturesA[i], false]);
    } else {
      result.push([true, uniqueParsedFeaturesA[i], true]);
      uniqueParsedFeaturesB.splice(indexB, 1);
    }
  }

  for (let j = 0; j < uniqueParsedFeaturesB.length; j += 1) {
    result.push([false, uniqueParsedFeaturesB[j], true]);
  }
  return result;
}
