export function randomColorGenerator() {
  var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
  bg_colour = '#' + ('000000' + bg_colour).slice(-6);
  return bg_colour;
}

export function getColorByBgColor(bgColor: string) {
  if (!bgColor) {
    return '';
  }
  return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2 ? '#000000' : '#ffffff';
}

export function saveAs(uri: string, filename: string) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
