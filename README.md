# NGNEON-EMU WebHub

Web estática lista para publicar en GitHub Pages.

## Enlaces oficiales

- Repositorio: <https://github.com/DOCK-PI3/NGNEON-EMU>
- Descarga Windows v1.2.3: <https://github.com/DOCK-PI3/NGNEON-EMU/releases/download/v1.2.3/NGNEON-EMU.zip>

## Estructura

```text
webhub/
├─ index.html
├─ styles.css
├─ app.js
├─ .nojekyll
└─ assets/
   ├─ ngneon-favicon.svg
   └─ screenshots/
      ├─ aof.png
      ├─ configurator-api-settings.png
      ├─ configurator-library.png
      ├─ configurator-retroachievements.png
      ├─ configurator-settings.png
      ├─ emulator-settings-audio.png
      ├─ emulator-settings-controls.png
      ├─ emulator-settings-paths.png
      ├─ emulator-settings-ra.png
      ├─ emulator-settings-system.png
      ├─ emulator-settings-video.png
      ├─ emulator-aof-loaded.png
      ├─ emulator-diggerma-loaded.png
      ├─ emulator-fatfury2-loaded.png
      ├─ emulator-preisle2-loaded.png
      ├─ emulator-s1945p-loaded.png
      ├─ emulator-shinobi-loaded.png
      ├─ garou.png
      ├─ kof98.png
      ├─ mslug.png
      ├─ preisle2.png
      ├─ s1945p.png
      ├─ shinobi-homebrew.png
      └─ svc.png
```

## Publicar en GitHub Pages

Opción recomendada:

1. Sube el repositorio a GitHub.
2. Entra en `Settings → Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Elige la rama principal.
5. Si GitHub permite elegir carpeta, selecciona `/webhub`.

Si tu repositorio solo permite publicar desde `/docs` o raíz:

- renombra `webhub/` a `docs/`, o
- copia su contenido a la rama `gh-pages`.

## Cambiar capturas

Puedes reemplazar los PNG de `assets/screenshots/` manteniendo los mismos nombres.

La web ya usa capturas reales del configurador y del menú interno:

```text
assets/screenshots/configurator-library.png
assets/screenshots/configurator-retroachievements.png
assets/screenshots/configurator-settings.png
assets/screenshots/configurator-api-settings.png
assets/screenshots/emulator-settings-video.png
assets/screenshots/emulator-settings-audio.png
assets/screenshots/emulator-settings-system.png
assets/screenshots/emulator-settings-controls.png
assets/screenshots/emulator-settings-paths.png
assets/screenshots/emulator-settings-ra.png
```

Las capturas originales con nombre largo se han conservado en la carpeta, pero
`index.html` apunta a estos alias limpios para evitar problemas con espacios en
rutas al publicar en GitHub Pages.
