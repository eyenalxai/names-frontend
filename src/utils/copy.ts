export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).catch((e) => console.error(e))
}
