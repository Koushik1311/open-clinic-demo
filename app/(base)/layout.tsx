import Header from "@/components/layouts/Header";

export default function BaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mt-40">
      {/* Header */}
      <Header />
      <div>{children}</div>
      {/* Footer */}
    </div>
  );
}
