import Link from "next/link";

export default function HeaderInterface() {
  //Styling Attributes
  const linkStyling = "p-1 m-2 text-xl hover:underline text-white";
  const headerStyling = "flex justify-between items-center h-20 bg-black";
  const titleStyling = "text-4xl font-semibold p-4 text-white";
  const navStyling = "p-2 m-4";

  return (
    <header className={headerStyling}>
      <h2 className={titleStyling}>GameTour</h2>
      <nav className={navStyling}>
        <Link href="/" className={linkStyling}>
          Home
        </Link>
        <Link href="/about" className={linkStyling}>
          About
        </Link>
      </nav>
    </header>
  );
}