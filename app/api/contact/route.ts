import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { prenom, nom, email, date, lieu, message } = await req.json();

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    const dateFormatee = date
      ? new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
      : null;

    await resend.emails.send({
      from: 'Contact Site <onboarding@resend.dev>',
      to: 'contact@maisonlamartina.fr',
      replyTo: email,
      subject: `Nouvelle demande de ${prenom} ${nom}${dateFormatee ? ` — Mariage le ${dateFormatee}` : ''}`,
      html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f4f1ee;font-family:Georgia,serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ee;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- EN-TÊTE -->
          <tr>
            <td style="background:#1A1A1A;padding:40px 48px 32px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(248,245,242,0.5);">
                Lamartina Studio
              </p>
              <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#F8F5F2;letter-spacing:0.05em;">
                Nouvelle demande de contact
              </h1>
              <div style="width:40px;height:1px;background:#8B0000;margin:20px auto 0;"></div>
            </td>
          </tr>

          <!-- CORPS -->
          <tr>
            <td style="background:#ffffff;padding:48px;">

              <!-- Identité -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td width="50%" style="padding-right:12px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#9a9590;font-family:Arial,sans-serif;">Prénom</p>
                    <p style="margin:0;font-size:16px;color:#1A1A1A;font-family:Georgia,serif;">${prenom}</p>
                  </td>
                  <td width="50%" style="padding-left:12px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#9a9590;font-family:Arial,sans-serif;">Nom</p>
                    <p style="margin:0;font-size:16px;color:#1A1A1A;font-family:Georgia,serif;">${nom}</p>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <div style="margin-bottom:28px;">
                <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#9a9590;font-family:Arial,sans-serif;">Email</p>
                <a href="mailto:${email}" style="font-size:15px;color:#8B0000;font-family:Georgia,serif;text-decoration:none;">${email}</a>
              </div>

              <!-- Date + Lieu -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td width="50%" style="padding-right:12px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#9a9590;font-family:Arial,sans-serif;">Date du mariage</p>
                    <p style="margin:0;font-size:15px;color:#1A1A1A;font-family:Georgia,serif;">${dateFormatee ?? '<span style="color:#c0bdb9;font-style:italic;">Non précisée</span>'}</p>
                  </td>
                  <td width="50%" style="padding-left:12px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#9a9590;font-family:Arial,sans-serif;">Lieu</p>
                    <p style="margin:0;font-size:15px;color:#1A1A1A;font-family:Georgia,serif;">${lieu || '<span style="color:#c0bdb9;font-style:italic;">Non précisé</span>'}</p>
                  </td>
                </tr>
              </table>

              <!-- Séparateur -->
              <div style="border-top:1px solid #e8e4e0;margin-bottom:28px;"></div>

              <!-- Message -->
              <div>
                <p style="margin:0 0 12px;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#9a9590;font-family:Arial,sans-serif;">Message</p>
                <p style="margin:0;font-size:15px;color:#1A1A1A;font-family:Georgia,serif;line-height:1.8;white-space:pre-wrap;">${message}</p>
              </div>

            </td>
          </tr>

          <!-- BOUTON RÉPONDRE -->
          <tr>
            <td style="background:#ffffff;padding:0 48px 48px;text-align:center;">
              <a href="mailto:${email}?subject=Re: Votre demande — Lamartina Studio"
                style="display:inline-block;padding:14px 36px;background:#1A1A1A;color:#F8F5F2;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;">
                Répondre à ${prenom}
              </a>
            </td>
          </tr>

          <!-- PIED DE PAGE -->
          <tr>
            <td style="padding:24px 48px;text-align:center;border-top:1px solid #e8e4e0;">
              <p style="margin:0;font-size:11px;color:#b0ada9;font-family:Arial,sans-serif;letter-spacing:0.05em;">
                Lamartina Studio · Photographe de mariage
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
  }
}
