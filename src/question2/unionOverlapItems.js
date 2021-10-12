export function unionOverlapItems(input) {
  return input.reduce(function (r, a) {
    var last = r[r.length - 1] || [];
    // Merge tail overlap
    if (last.startPx <= a.startPx && a.startPx <= last.endPx) {
        if (last.endPx < a.endPx) {
            last.endPx = a.endPx;
        }
        return r;
    }
    
    // Merge head and tail overlap item
    if (last.startPx >= a.startPx && last.endPx <= a.endPx) {
      if (last.startPx > a.startPx) {
        last.startPx = a.startPx;
      }

      if (last.endPx < a.endPx) {
        last.endPx = a.endPx;
      }
      return r;
    }

    // Merge head overlap item
    if (last.startPx < a.endPx && last.endPx > a.endPx) {
      if (last.startPx > a.startPx) {
        last.startPx = a.startPx;
      }
      return r;
    }
    
    return r.concat(a);
  }, []);
}
