export function txtSlicer(txt: string, max: number = 80) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
}

export function numberWithCommas(num: string): string {
  return num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
