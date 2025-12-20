<script>
function drawGacha(gacha, inputs) {
  const text = gacha.slots[Math.floor(Math.random() * gacha.slots.length)];
  let result = text;
  inputs.forEach((v, i) => {
    result = result.replaceAll(`[input${i+1}]`, v || "");
  });
  gacha.count++;
  return result;
}
  function saveGachas(gachas) {
  localStorage.setItem("gachas", JSON.stringify(gachas));
}

function loadGachas() {
  return JSON.parse(localStorage.getItem("gachas")) || GACHAS;
}

</script>
