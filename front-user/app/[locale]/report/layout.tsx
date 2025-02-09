"use client"
export default function ReportLayout({
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
  