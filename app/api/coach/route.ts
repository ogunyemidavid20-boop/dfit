import { NextResponse } from 'next/server';
const pidginMap: Record<string, string> = {
"you are": "you be", "you're": "you be", "i am": "I be", "i'm": "I be",
"do not": "no", "does not": "no dey", "is not": "no be",
"have": "get", "want to": "wan", "going to": "go",
"very": "well well", "really": "well well",
"money": "kolo", "food": "chop", "eat": "chop",
"come": "come", "good": "sharp", "great": "gbasky"
};
function toPidgin(text: string): string {
let out = text.toLowerCase();
for (const [en, pg] of Object.entries(pidginMap)) {
out = out.split(en).join(pg);
}
return out.charAt(0).toUpperCase() + out.slice(1) + " o!";
}
export async function POST(req: Request) {
try {
const { message } = await req.json();
let reply = "";
const m = (message || "").toLowerCase();
if (m.includes('tired')) reply = "No worry, you don try today. Rest small, drink water, we go continue tomorrow";
else if (m.includes('food') || m.includes('chop')) reply = "Try chop better protein and water plenty. No too much garri for night";
else if (m.includes('workout') || m.includes('exercise')) reply = "Sharp! Make we do 20 mins waka plus small pushup and squat";
else reply = `I hear you. ${message}. We go take am step by step, you go reach your goal small small`;
return NextResponse.json({ reply: toPidgin(reply) });
} catch (e) {
return NextResponse.json({ reply: "Omo network shake small o, try again. I dey here!" });
}
}
