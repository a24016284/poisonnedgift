let themeButton = document.getElementById("theme-button");
let themeLogo = document.getElementById("theme-logo");

let theme = "light"; // Valeur initiale correcte
themeButton.addEventListener("click", () => {
  if (theme === "light") {
    theme = "dark"; // Passer au thème sombre
    themeLogo.name = "sunny"; // Changer l'icône pour "sunny"
  } else {
    theme = "light"; // Passer au thème clair
    themeLogo.name = "moon"; // Changer l'icône pour "moon"
  }

  toggleDarkTheme(theme); // Appliquer les couleurs en fonction du thème
});

const root = document.documentElement;

// Fonction pour obtenir les couleurs du thème sombre
const getNightColors = () => {
  const fondNight = getComputedStyle(root).getPropertyValue("--fond-night");
  const headerDownNight = getComputedStyle(root).getPropertyValue(
    "--header-down-night"
  );
  const headerUpNight =
    getComputedStyle(root).getPropertyValue("--header-up-night");
  const TexteNight = getComputedStyle(root).getPropertyValue("--texte-night");

  return [fondNight, headerDownNight, headerUpNight, TexteNight];
};

// Fonction pour obtenir les couleurs du thème clair
const getLightColors = () => {
  const fondLight = getComputedStyle(root).getPropertyValue("--fond-light");
  const headerDownLight = getComputedStyle(root).getPropertyValue(
    "--header-down-light"
  );
  const headerUpLight =
    getComputedStyle(root).getPropertyValue("--header-up-light");
  const TexteLight = getComputedStyle(root).getPropertyValue("--texte-light");

  return [fondLight, headerDownLight, headerUpLight, TexteLight];
};

// Fonction pour appliquer les couleurs en fonction du thème
const toggleDarkTheme = (theme) => {
  const [fondNight, headerDownNight, headerUpNight, TexteNight] =
    getNightColors();
  const [fondLight, headerDownLight, headerUpLight, TexteLight] =
    getLightColors();

  if (theme === "light") {
    root.style.setProperty("--fond", fondLight);
    root.style.setProperty("--header-down", headerDownLight);
    root.style.setProperty("--header-up", headerUpLight);
    root.style.setProperty("--texte", TexteLight);
  } else if (theme === "dark") {
    root.style.setProperty("--fond", fondNight);
    root.style.setProperty("--header-down", headerDownNight);
    root.style.setProperty("--header-up", headerUpNight);
    root.style.setProperty("--texte", TexteNight);
  }
};
