export default function Layout({ children }) {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto pb-28">
        <main>{children}</main>
      </div>
    </div>
  );
}
