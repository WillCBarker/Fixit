import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const prompt = searchParams.get("prompt");
    const location = searchParams.get("location");

    console.log("prompt: ", prompt);
    console.log("location: ", location);
    try {
        const responseObject = await fetch(`https://nqnlwjsfn5rr3yekktfywcl27m0uxfen.lambda-url.us-east-2.on.aws/?prompt=${prompt}`);
        
        if (!responseObject.ok) {
            throw new Error("Failed to fetch data");
        }

        const responseData = await responseObject.json();
        console.log("RESPONSE: ", responseData);

        return NextResponse.json(responseData);
    } catch (error) {
        console.error("Error fetching data:", error.message);

        // Handle the error and send an appropriate response
        return NextResponse.error();
    }
    // return NextResponse.json(responseObject);
}
