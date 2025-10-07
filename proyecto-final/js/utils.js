export function getParams(definedRoute, currentRoute) {
  const regex = new RegExp(
    "^" + definedRoute.replace(/:[^/]+/g, "([^/]+)") + "$"
  );
  const match = currentRoute.match(regex);

  if (!match) return null;

  const params = {};
  const paramNames = definedRoute.match(/:[^/]+/g);

  if (paramNames) {
    paramNames.forEach((paramName, index) => {
      params[paramName.slice(1)] = decodeURIComponent(match[index + 1]);
    });
  }

  return params;
}

export function initRandomMainImage(images) {
  const mainImage = document.getElementById("main-carousel-image");
  let lastIndex = -1;

  setInterval(() => {
    let index;
    do {
      index = Math.floor(Math.random() * images.length);
    } while (index === lastIndex);

    lastIndex = index;

    mainImage.style.opacity = 0;

    setTimeout(() => {
      mainImage.src = images[index];
      mainImage.style.opacity = 1;
    }, 300);
  }, 4000);
}

export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
