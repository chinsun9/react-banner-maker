// Property 'write' does not exist on type 'Clipboard'.
// ....
export function copyToClipboard() {
  const canvas = document.querySelector(`#myCanvas`);
  if (!canvas) {
    return;
  }
  canvas.toBlob(function (blob) {
    // eslint-disable-next-line no-undef
    const item = new ClipboardItem({ 'image/png': blob });
    navigator.clipboard.write([item]);
  });
}
