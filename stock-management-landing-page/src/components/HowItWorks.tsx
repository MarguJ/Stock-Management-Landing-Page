const steps = [
  "La app de Fischer Stock Management simplifica muchísimo el recorrido de relevamiento, ahorrando tiempo de trabajo para los empleados y por lo tanto plata para tu empresa.",
  "No solo ahorras todo eso, sino que también podes monitorear desde tu celular un ranking de productos filtrado como vos quieras y una lista de empleados con cada visita con fecha y lugar.",
  "Siendo administrador en nuestra aplicación podes monitorear, crear, modificar y eliminar tanto productos como usuarios solamente con unos clicks.",
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
