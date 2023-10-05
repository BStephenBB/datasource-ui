// this would probably be exanded to make the icon dynamic
export function Card({ header, text }: { header: string; text: string }) {
  return (
    <div className="card">
      <img src="light.svg" alt="a light bulb icon" />
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  )
}
