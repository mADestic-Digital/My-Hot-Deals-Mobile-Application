import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    
    // Echo the input back as output
    return NextResponse.json({
      success: true,
      message: "Echo successful",
      data: body
    }, { 
      status: 200
    });
    
  } catch (error) {
    // Handle JSON parsing errors
    return NextResponse.json({
      success: false,
      message: "Invalid JSON format",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { 
      status: 400
    });
  }
}