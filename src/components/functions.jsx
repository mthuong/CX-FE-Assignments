export function getProperty(row, selector) {
  const property = selector.split('.').reduce((acc, part) => {
    if (!acc) {
      return '';
    }

    // O(n2) when querying for an array (e.g. items[0].name)
    // Likely, the object depth will be reasonable enough that performance is not a concern
    const arr = part.match(/[^\]\\[.]+/g);

    if (arr && arr.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        return acc[arr[i]][arr[i + 1]];
      }
    }

    return acc[part];
  }, row);

  return property;
}