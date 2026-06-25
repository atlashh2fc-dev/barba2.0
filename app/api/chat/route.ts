import { NextRequest, NextResponse } from "next/server";

type ChatMessage = {
  role: "assistant" | "user" | "system";
  content: string;
};

const systemPrompt = `Eres el asistente virtual profesional de Barba Gonella & Cia Abogados, estudio juridico boutique en Chile.
Tu rol es orientar de forma inicial, clara y prudente a empresas y personas que consultan por derecho laboral empresarial, litigios, derecho corporativo, derecho civil, penal empresarial, tributario, compliance y asesoria juridica integrada con contabilidad y RRHH.
No entregues asesoria legal definitiva ni prometas resultados. Indica que la informacion es orientacion preliminar y que un abogado debe revisar antecedentes.
Prioriza recopilar: nombre, empresa, area del problema, urgencia, comuna/ciudad, y medio de contacto.
Cuando corresponda, invita a agendar reunion o continuar por WhatsApp al +56 9 3415 3944.
Responde en espanol de Chile, tono sobrio, ejecutivo y confidencial. Maximo 140 palabras.`;

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { messages?: ChatMessage[] };
  const messages = (body.messages || []).slice(-8);

  if (!process.env.INCEPTION_API_KEY) {
    return NextResponse.json({
      reply:
        "Gracias por contactarnos. Para orientarte bien, indicanos el area del asunto, si corresponde a una empresa, la urgencia y una breve descripcion. Tambien puedes continuar por WhatsApp al +56 9 3415 3944 para coordinar una reunion.",
    });
  }

  const response = await fetch("https://api.inceptionlabs.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.INCEPTION_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.INCEPTION_MODEL || "mercury-2",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      max_tokens: 420,
      temperature: 0.25,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        reply:
          "Gracias. En este momento el asistente no pudo completar la respuesta. Puedes escribir directamente por WhatsApp al +56 9 3415 3944 para coordinar una reunion.",
      },
      { status: 200 },
    );
  }

  const data = await response.json();
  const reply =
    data?.choices?.[0]?.message?.content ||
    "Gracias. Para revisar tu caso, te sugerimos coordinar una reunion con el equipo.";

  return NextResponse.json({ reply });
}
