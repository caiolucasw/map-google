export async function fetchData(coord) {
  const url = `https://munddi.com/dev/pdvs?ne_lat=${coord.ne_lat}&ne_lng=${coord.ne_lng}&sw_lat=${coord.sw_lat}&sw_lng=${coord.sw_lng}`;
  const req = await fetch(url);
  return await req.json();
}
