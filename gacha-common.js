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
</script>
