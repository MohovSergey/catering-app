import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { day, time, phone, name } = await req.json();

    if (!phone || !time || !day) {
      return NextResponse.json(
        { error: 'Invalid data' },
        { status: 400 }
      );
    }

    const message = `
📞 *Запрос на звонок*

📅 День: ${day}
⏰ Время: ${time}
👤 Имя: ${name}
📱 Телефон: ${phone}
    `;

    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
