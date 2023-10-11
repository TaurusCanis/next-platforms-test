import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({ message: "GET Request works!" })
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    if (body.data){
        return NextResponse.json({ message: `POST Request works! Hello, ${body.data}` })
    }
    return NextResponse.json({ message: 'POST Request works!' })
}