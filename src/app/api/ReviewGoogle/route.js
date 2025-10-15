import { NextResponse } from "next/server";

export async function GET() {
    const placeId = "ChIJU9Jn1K5b0S0R77eGR8sy7rk";
    const apiKey = process.env.GOOGLE_API_KEY;

    const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`
    );

    const data = await res.json();
    console.log(data);
    return NextResponse.json(data.result.reviews || []);
}
