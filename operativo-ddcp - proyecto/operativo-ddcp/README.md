# Operativo — Dirección de Delitos contra la Propiedad

Índice de los 57 objetivos ALFA: domicilio, información relevante, comisionado a cargo,
recursos asignados y acceso al mapa.

## Archivos

| Archivo | Qué es |
|---|---|
| `datos.json` | **Los datos.** Es lo único que se toca para actualizar información. |
| `index.html` | La página armada. **Se regenera sola**, no editar a mano. |
| `styles.css` | Colores, tipografías y diseño. |
| `app.js` | La interacción: buscador y mostrar una ficha por vez. |
| `assets/escudo.png` | El escudo, recortado en círculo. |
| `construir.py` | Arma `index.html` y el archivo único de `dist/`. |
| `dist/` | **El archivo que se reparte**, con todo adentro. |

## Para ver la página

Abrir `index.html` con doble clic, o en VS Code con la extensión *Live Server*
(clic derecho sobre el archivo → *Open with Live Server*).

## Para actualizar los datos

1. Editar `datos.json`.
2. Ejecutar en la terminal, parado en esta carpeta:

       python3 construir.py

3. El archivo actualizado queda en `dist/`. Ese es el que se manda por WhatsApp.

### Campos de cada objetivo

    {
      "n": 29,                                   // número de ALFA
      "objetivo": "Orona Iván Alexis",
      "domicilio": "Nueva Zelanda N° 424, ...",
      "info": "...",                             // vacío = la fila no aparece
      "comisionado": "Guzman Florencia",
      "recursos": "MOVIL IDENTIFICABLE",         // se separa por "/" y "-"
      "lat": -31.28986,
      "lon": -64.31196,
      "mapa": "https://www.google.com/maps/..."  // pin de Google Maps
    }

Las coordenadas salen del KML `1 - ALFA 01 a 57 - OBJETIVOS.kml`.
El mapa del operativo (My Maps) se configura en `construir.py`, en `MID_MYMAPS`.

## Cómo funciona el archivo de `dist/`

Lleva estilos, script y escudo embebidos: **funciona sin internet**, salvo los mapas.

Las 57 fichas están escritas dentro del HTML, no generadas al vuelo. Por eso:

- **Con JavaScript** (Safari, Chrome, computadora): buscador y una ficha por vez.
- **Sin JavaScript** (visor de documentos de WhatsApp en iPhone): se ven el índice
  y las 57 fichas seguidas, y los números del índice saltan a cada una.

Esa es la razón de que las fichas estén escritas en el HTML. Si se cambia para
generarlas con JavaScript, deja de verse en el visor de WhatsApp del iPhone.

## Uso interno

Contiene domicilios a allanar y datos de personas investigadas. No publicar en
internet ni subir a repositorios públicos.
