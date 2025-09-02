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
