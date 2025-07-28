// app/api/cars/route.ts
export async function GET(request: Request) {
  try {
    const url = `https://auto.dev/api/listings?apikey=${process.env.API_KEY}==`;
    const res = await fetch(url);
    const data = await res.json();

    return Response.json(data);
  } catch (e) {
    console.log(e);
  }
}
