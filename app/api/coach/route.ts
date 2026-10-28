export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages || [];
    const lastMsg = (messages[messages.length - 1]?.content || body.message || "").toLowerCase();
    let reply = "";
    if (lastMsg.includes("hi") || lastMsg.includes("hello") || !lastMsg) {
      reply = "Hi! I'm Diamond — your D-FIT AI Coach 💜. How can I help? Ask for workout, meal plan, or weight loss.";
    } else if (lastMsg.includes("workout") || lastMsg.includes("exercise") || lastMsg.includes("gym")) {
      reply = "D-FIT workout: 1. Warmup 5 mins 2. Push-ups 3x15 3. Squats 3x20 4. Plank 3x45sec 5. Jump rope 10 mins. Tell me your goal I go customize am.";
    } else if (lastMsg.includes("food") || lastMsg.includes("meal") || lastMsg.includes("diet")) {
      reply = "D-FIT meal: Breakfast Oats + eggs + banana. Lunch Rice + chicken + veggies. Dinner Fish + salad. Drink 3L water. Want 7-day plan?";
    } else {
      reply = `Got it! For "${lastMsg}" — I fit help with workout, food, and motivation. Wetin you want tackle now?`;
    }
    return Response.json({ reply });
  } catch (e) {
    return Response.json({ reply: "Diamond is here! Ask me anything about fitness." });
  }
}
