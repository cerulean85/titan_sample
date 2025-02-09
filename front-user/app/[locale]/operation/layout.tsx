"use client"
export default function OperationLayout({
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
  