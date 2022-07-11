import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AIRTABLE_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_URL = process.env.AIRTABLE_API_URL;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("middleware is running");
  console.log({ req: request.nextUrl.pathname });

  // todays date and time formatted
  const today = new Date().toISOString();

  if (request.nextUrl.pathname.includes(".")) {
    console.log("Skipping middleware for static file");
    return NextResponse.next(request);
  }

  if (request.nextUrl.pathname.startsWith("/templates/userOrder")) {
    return NextResponse.redirect(new URL("/404", request.nextUrl));
  }

  if (request.nextUrl.pathname.startsWith("/resume")) {
    const match = new RegExp(/(?:.*-)([^\-]*)$/).exec(request.nextUrl.pathname);
    if (!match) return NextResponse.redirect(new URL("/404", request.nextUrl));

    const recordId = "rec" + match[1];

    console.log({ recordId });
    const res = await fetch(`${AIRTABLE_API_URL}/${recordId}`, {
      headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
    });
    if (res.status !== 200) return NextResponse.redirect(new URL("/404", request.nextUrl));
    const data = await res.json();

    const resumeType = data.fields["Resume Type"];

    const update = await fetch(`${AIRTABLE_API_URL}/${recordId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: { "Last Viewed": today, Hits: +data.fields.Hits + 1 },
      }),
    });
    console.log(update.status);

    return NextResponse.rewrite(
      new URL(`/templates/userOrder?name=${resumeType ?? "Default"}`, request.url)
    );
  } else return NextResponse.redirect(new URL("/404", request.nextUrl));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/resume/:path*", "/templates"],
};
