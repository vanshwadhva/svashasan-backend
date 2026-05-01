import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: Request) {
    const body = await req.json();

    try {
        await convex.mutation("leads:createLead", {
            name: body.name,
            email: body.email,
            company: body.company,
            message: body.message,
            type: "demo_request",
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
        });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
    }
}