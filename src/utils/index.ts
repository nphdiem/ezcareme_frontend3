export function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function calculateStars(rating: number, standard: number) {
  const ratingArr = Array.from(Array(standard + 1).keys()).slice(1);
  return ratingArr.map((num) => {
    const delta = num - rating;
    if (delta <= 0) return "full";
    if (delta >= 1 || (delta < 1 && delta > 0.5)) return "empty";
    return "half";
  });
}

export function formatRoute(route: string, ...args: (string | number)[]) {
  let index = 0;
  return route
    .split("/")
    .map((r) => (r.includes(":") ? (args[index++] ? args[index - 1] : r) : r))
    .join("/");
}
