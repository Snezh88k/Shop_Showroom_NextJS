import axios from "axios";
import { NextResponse } from "next/server";

const TOKEN = "6038802604:AAGJX09ew1KdPN9Fk1bGVd_VhCLkGX5yn6g";
const CHAT_ID = "-1001874434119";

export async function POST(request: Request) {
  const { message } = await request.json();

  const response = await axios.post(
    `https://api.telegram.org/bot${TOKEN}/sendMessage`,
    {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    }
  );

  return NextResponse.json(`запрос проше ${response}`);
}
