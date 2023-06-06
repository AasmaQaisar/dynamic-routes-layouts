

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <ul>
      <li>order</li>
      <li>return</li>
      </ul>
      {children}
      <p>kuch sochna pare ga</p> 
    </div>
  )
}