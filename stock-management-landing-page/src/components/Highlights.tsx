const items = [
  ["◈", "SEGURO", "Control de accesos y\nrespaldo en la nube."],
  ["◷", "RÁPIDO", "Escaneo instantáneo\ny actualización de\nstock en vivo."],
  ["↗", "EFECTIVO", "Reportes precisos y\nreducción del margen de\nerror."],
];
export function Highlights() {
  return (
    <section className="highlights" aria-label="Beneficios principales">
      {items.map(([icon, title, text]) => (
        <article className="highlight" key={title}>
          <span className="highlight-icon">{icon}</span>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
