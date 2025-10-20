export const metadata = {
  title: 'Política de Privacidad - Multy Soluciones Moica',
  description: 'Lee la política de privacidad de Multy Soluciones Moica.',
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <article className="prose prose-neutral max-w-3xl mx-auto dark:prose-invert">
        <h1 className="font-headline">POLÍTICA DE PRIVACIDAD</h1>
        <h2>1. Información que recopilamos</h2>
        <p>
          Podemos recopilar datos personales como nombre, número de teléfono, correo electrónico u otros medios de
          contacto cuando el usuario nos escribe por WhatsApp, correo o formulario web.
        </p>

        <h2>2. Uso de la información</h2>
        <p>La información se usa únicamente para:</p>
        <ul>
          <li>Responder solicitudes o cotizaciones.</li>
          <li>Brindar atención personalizada al cliente.</li>
          <li>Enviar información relacionada con nuestros servicios (si el usuario lo autoriza).</li>
        </ul>

        <h2>3. Protección de la información</h2>
        <p>
          Multy Servicios Moica se compromete a proteger la información de los usuarios y no compartirla con terceros
          sin autorización, salvo obligación legal.
        </p>

        <h2>4. Derechos del titular</h2>
        <p>
          El usuario puede solicitar en cualquier momento la corrección, actualización o eliminación de sus datos
          personales enviando un mensaje a nuestro número o correo oficial.
        </p>

        <h2>5. Contacto</h2>
        <p>
          Para ejercer sus derechos o resolver dudas sobre esta política, puede contactarnos a través de:
        </p>
        <ul>
          <li>WhatsApp: +57(301) 2434 775</li>
        </ul>
      </article>
    </main>
  );
}
