/* Керамические силуэты для макетов: символами SVG, чтобы страницы оставались автономными */
(function () {
  var SPRITE = ''
  + '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">'
  + '<defs>'
  + '<linearGradient id="clayG" x1="0" y1="0" x2="1" y2="1">'
  + '<stop offset="0" stop-color="#ecc6a0"/><stop offset=".42" stop-color="#c78a5d"/><stop offset="1" stop-color="#8b5638"/>'
  + '</linearGradient>'
  + '<linearGradient id="clayDeep" x1="0" y1="0" x2="1" y2="1">'
  + '<stop offset="0" stop-color="#a76b45"/><stop offset="1" stop-color="#6d422b"/>'
  + '</linearGradient>'
  + '<linearGradient id="glazeG" x1="0" y1="0" x2=".9" y2="1">'
  + '<stop offset="0" stop-color="#9fb3a2"/><stop offset=".55" stop-color="#6f8a78"/><stop offset="1" stop-color="#3f5247"/>'
  + '</linearGradient>'
  + '<linearGradient id="grainG" x1="0" y1="0" x2=".7" y2="1">'
  + '<stop offset="0" stop-color="#e8dcc8"/><stop offset=".5" stop-color="#cbb99e"/><stop offset="1" stop-color="#9c8a6f"/>'
  + '</linearGradient>'
  + '</defs>'

  /* 1. Высокая ваза */
  + '<symbol id="v-tall" viewBox="0 0 200 260">'
  + '<ellipse cx="100" cy="30" rx="24" ry="7" fill="#7a4a30"/>'
  + '<path d="M78 30C74 60 58 86 52 118c-6 34-2 70 12 92 10 16 22 22 36 22s26-6 36-22c14-22 18-58 12-92-6-32-22-58-26-88z" fill="url(#clayG)"/>'
  + '<path d="M78 30C74 60 58 86 52 118c-6 34-2 70 12 92 5 8 11 13 17 17-6-30-10-64-8-98 2-36 12-68 20-99z" fill="#fff" opacity=".14"/>'
  + '<ellipse cx="100" cy="30" rx="22" ry="6" fill="#e6bb93" opacity=".55"/>'
  + '</symbol>'

  /* 2. Чаша */
  + '<symbol id="v-bowl" viewBox="0 0 200 260">'
  + '<path d="M26 128c0 68 32 106 74 106s74-38 74-106z" fill="url(#clayG)"/>'
  + '<path d="M26 128c0 20 3 38 8 53 10-42 32-64 66-64s56 22 66 64c5-15 8-33 8-53z" fill="#fff" opacity=".12"/>'
  + '<ellipse cx="100" cy="128" rx="74" ry="20" fill="#8b5638"/>'
  + '<ellipse cx="100" cy="128" rx="60" ry="14" fill="#5f3a26"/>'
  + '<ellipse cx="100" cy="126" rx="60" ry="14" fill="#4a2c1c" opacity=".55"/>'
  + '</symbol>'

  /* 3. Кружка */
  + '<symbol id="v-mug" viewBox="0 0 200 260">'
  + '<path d="M158 116c26 0 34 22 32 44-2 24-16 36-34 36" fill="none" stroke="url(#clayDeep)" stroke-width="15" stroke-linecap="round"/>'
  + '<path d="M48 96c-4 0-6 4-6 10l4 108c1 10 8 16 18 16h72c10 0 17-6 18-16l4-108c0-6-2-10-6-10z" fill="url(#clayG)"/>'
  + '<path d="M48 96c-4 0-6 4-6 10l4 108c1 4 2 7 5 9l-2-121z" fill="#fff" opacity=".16"/>'
  + '<ellipse cx="100" cy="96" rx="54" ry="12" fill="#8b5638"/>'
  + '<ellipse cx="100" cy="96" rx="44" ry="8" fill="#5f3a26"/>'
  + '</symbol>'

  /* 4. Кувшин с носиком */
  + '<symbol id="v-jug" viewBox="0 0 200 260">'
  + '<path d="M72 62c2-24 18-36 40-32 16 3 24 16 22 32 16 26 28 54 28 86 0 42-28 60-62 60s-62-18-62-60c0-32 12-60 34-86z" fill="url(#clayG)"/>'
  + '<path d="M72 62c-6 14-14 28-20 44-8 22-10 44-6 62 4-40 16-72 30-96z" fill="#fff" opacity=".14"/>'
  + '<ellipse cx="101" cy="63" rx="22" ry="8" fill="#8b5638"/>'
  + '<path d="M118 32c10-2 16 4 16 12" fill="none" stroke="#e8c4a0" stroke-width="4" stroke-linecap="round" opacity=".5"/>'
  + '</symbol>'

  /* 5. Тарелка */
  + '<symbol id="v-plate" viewBox="0 0 200 260">'
  + '<ellipse cx="100" cy="150" rx="86" ry="46" fill="url(#clayDeep)"/>'
  + '<ellipse cx="100" cy="144" rx="86" ry="46" fill="url(#clayG)"/>'
  + '<ellipse cx="100" cy="144" rx="66" ry="34" fill="#e0b48c"/>'
  + '<ellipse cx="100" cy="144" rx="50" ry="24" fill="#c78a5d"/>'
  + '<ellipse cx="100" cy="140" rx="30" ry="14" fill="#e9c9a6" opacity=".8"/>'
  + '</symbol>'

  /* 6. Гончарный круг */
  + '<symbol id="v-wheel" viewBox="0 0 200 260">'
  + '<ellipse cx="100" cy="206" rx="82" ry="20" fill="#7c6149"/>'
  + '<ellipse cx="100" cy="198" rx="82" ry="20" fill="url(#grainG)"/>'
  + '<path d="M86 92c-4 26-14 44-14 66 0 18 12 30 28 30s28-12 28-30c0-22-10-40-14-66z" fill="url(#clayG)"/>'
  + '<ellipse cx="100" cy="92" rx="14" ry="5" fill="#8b5638"/>'
  + '<ellipse cx="100" cy="198" rx="40" ry="10" fill="#8a6d52" opacity=".55"/>'
  + '</symbol>'

  /* Контурные версии — для «музейного» варианта */
  + '<symbol id="l-tall" viewBox="0 0 200 260"><g fill="none" stroke="currentColor" stroke-width="1.6">'
  + '<ellipse cx="100" cy="30" rx="24" ry="7"/><path d="M78 30C74 60 58 86 52 118c-6 34-2 70 12 92 10 16 22 22 36 22s26-6 36-22c14-22 18-58 12-92-6-32-22-58-26-88z"/>'
  + '<path d="M66 150c20 10 48 10 68 0" stroke-dasharray="4 5"/><path d="M62 178c24 12 52 12 76 0" stroke-dasharray="4 5"/></g></symbol>'

  + '<symbol id="l-bowl" viewBox="0 0 200 260"><g fill="none" stroke="currentColor" stroke-width="1.6">'
  + '<path d="M26 128c0 68 32 106 74 106s74-38 74-106"/><ellipse cx="100" cy="128" rx="74" ry="20"/><ellipse cx="100" cy="128" rx="58" ry="13"/>'
  + '<path d="M46 160c16 6 105 6 108 0" stroke-dasharray="4 5"/></g></symbol>'

  + '<symbol id="l-mug" viewBox="0 0 200 260"><g fill="none" stroke="currentColor" stroke-width="1.6">'
  + '<path d="M158 116c26 0 34 22 32 44-2 24-16 36-34 36"/><path d="M48 96c-4 0-6 4-6 10l4 108c1 10 8 16 18 16h72c10 0 17-6 18-16l4-108c0-6-2-10-6-10z"/><ellipse cx="100" cy="96" rx="54" ry="12"/>'
  + '<path d="M52 150c30 8 66 8 96 0" stroke-dasharray="4 5"/></g></symbol>'

  + '<symbol id="l-jug" viewBox="0 0 200 260"><g fill="none" stroke="currentColor" stroke-width="1.6">'
  + '<path d="M72 62c2-24 18-36 40-32 16 3 24 16 22 32 16 26 28 54 28 86 0 42-28 60-62 60s-62-18-62-60c0-32 12-60 34-86z"/><ellipse cx="101" cy="63" rx="22" ry="8"/>'
  + '<path d="M62 150c26 10 52 10 78 0" stroke-dasharray="4 5"/></g></symbol>'

  + '<symbol id="l-plate" viewBox="0 0 200 260"><g fill="none" stroke="currentColor" stroke-width="1.6">'
  + '<ellipse cx="100" cy="144" rx="86" ry="46"/><ellipse cx="100" cy="144" rx="64" ry="33"/><ellipse cx="100" cy="141" rx="30" ry="14"/></g></symbol>'

  + '<symbol id="l-wheel" viewBox="0 0 200 260"><g fill="none" stroke="currentColor" stroke-width="1.6">'
  + '<ellipse cx="100" cy="198" rx="82" ry="20"/><ellipse cx="100" cy="198" rx="42" ry="10"/><path d="M86 92c-4 26-14 44-14 66 0 18 12 30 28 30s28-12 28-30c0-22-10-40-14-66z"/><ellipse cx="100" cy="92" rx="14" ry="5"/></g></symbol>';

  if (document.body) document.body.insertAdjacentHTML('afterbegin', SPRITE);
  else document.addEventListener('DOMContentLoaded', function () { document.body.insertAdjacentHTML('afterbegin', SPRITE); });
})();
