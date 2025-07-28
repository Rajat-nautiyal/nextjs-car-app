// app/api/cars/route.ts
export async function GET(request: Request) {
  try {
    const searchUrl = new URL(request.url);
    const make = searchUrl.searchParams.get("make")||"";
    const model = searchUrl.searchParams.get("model")||"";
    const year = searchUrl.searchParams.get("year_min")||"";
    const url = `https://auto.dev/api/listings?apikey=${process.env.API_KEY}==&make=${make}&model=${model}&year_min=${year}`;
    const res = await fetch(url);
    const data = await res.json();

    return Response.json(data);
  } catch (e) {
    console.log(e);
  }
}
