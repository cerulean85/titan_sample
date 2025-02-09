"use client"
export default function AlarmLayout({
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
  