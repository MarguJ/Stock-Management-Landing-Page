const steps = [
  "Controla un futuro riesgo de blablabla blaba blablablbla blabal blabla",
  "Controla un futuro riesgo de blablabla blaba blablablbla blabal blabla",
  "Controla un futuro riesgo de blablabla blaba blablablbla blabal blabla",
];
export function HowItWorks() {
  return (
    <section className="how-it-works" id="como-funciona">
      <h2>¿CÓMO FUNCIONA?</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
