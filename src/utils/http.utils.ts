export function addDefaultProtocol(url: string) {
  let urlWithHttp = url.trim();

  if (
    !urlWithHttp.startsWith("https://") &&
    !urlWithHttp.startsWith("http://")
  ) {
    urlWithHttp = `http://${urlWithHttp}`;
  }

  return urlWithHttp;
}

export function isValidUrl(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(url);
}
