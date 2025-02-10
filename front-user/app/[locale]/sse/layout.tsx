export default function SSELayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section>
        {children}
      </section>
  );
}
