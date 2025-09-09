import principalPage from "./views/main.js";
import placesPage from "./views/places.js";
import placePage from "./views/place.js";
import { getParams } from "./utils.js";
import aboutPage from "./views/about.js";

const routes = {
  "/": principalPage,
  "/about": aboutPage,
  "/places": placesPage,
  "/place/:name": placePage,
};

function handleRoute() {
  const currentRoute = window.location.pathname;

  for (const definedRoute of Object.keys(routes)) {
    const regex = new RegExp(
      "^" + definedRoute.replace(/:[^/]+/g, "([^/]+)") + "$"
    );
    const match = currentRoute.match(regex);

    if (match) {
      const params = getParams(definedRoute, currentRoute);
      const fn = routes[definedRoute];

      if (typeof fn === "function") {
        fn(params);
        return;
      }
    }
  }

  document.getElementById("app").innerHTML =
    "<h1>404 - Página no encontrada</h1>";
}

document.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const href = event.target.getAttribute("href");
    if (href && href.startsWith("/")) {
      event.preventDefault();
      window.history.pushState({}, "", href);
      handleRoute();
    }
  }
});

window.addEventListener("popstate", handleRoute);

handleRoute();
