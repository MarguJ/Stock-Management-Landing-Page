const items = [
  ["/images/seguro.png", "SEGURO", "Control de accesos y\nrespaldo en la nube."],
  ["/images/reloj.png", "RÁPIDO", "Escaneo instantáneo\ny actualización de\nstock en vivo."],
  ["/images/efectivo.png", "EFECTIVO", "Reportes precisos y\nreducción del margen de\nerror."],
];
export function Highlights() {
  return (
    <section className="highlights" aria-label="Beneficios principales">
      {items.map(([icon, title, text]) => (
        <article className="highlight" key={title}>
          <span className="highlight-icon"><img src={icon} alt="" /></span>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
