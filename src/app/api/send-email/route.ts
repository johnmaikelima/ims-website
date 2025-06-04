import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuração do Nodemailer - você precisará configurar com suas credenciais reais
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
  secure: process.env.EMAIL_SERVER_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, cc, subject, name, email, phone, service, message } = body;

    // Validação básica
    if (!to || !subject || !name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { message: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Configuração do e-mail
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to,
      cc: cc || undefined,
      subject: `[IMS Manutenção] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Novo Contato - IMS Manutenção</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
            <p><strong>Serviço de Interesse:</strong> ${service}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-line; background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #3b82f6;">
              ${message}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Este é um e-mail automático, por favor não responda diretamente para este endereço.</p>
            <p>© ${new Date().getFullYear()} IMS Manutenção. Todos os direitos reservados.</p>
          </div>
        </div>
      `,
    };

    // Envio do e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json(
      { message: 'Erro ao processar a solicitação de contato' },
      { status: 500 }
    );
  }
}
