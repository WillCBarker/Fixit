import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const prompt = searchParams.get("prompt")
    const location = searchParams.get("location")
    
    console.log("prompt: ", prompt)
    console.log("location: ", location)

    // Call AWS stuff here
    return NextResponse.json({"yo":"sup"})
}