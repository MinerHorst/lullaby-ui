import Image from "next/image";
import logo_black from "../../public/logo-black.png";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <div className="relative z-[500] flex h-[8vh] w-screen items-center justify-between bg-black px-4 text-white">
      <div className="flex items-center gap-4">
        <Link href={"/"} className="flex items-center gap-4">
          <Image
            src={logo_black}
            alt="logo"
            height={25}
            className="rounded-md border border-muted-foreground"
          ></Image>
          <p className="text-xl font-medium">Lullaby UI</p>
        </Link>
      </div>
      <div className="text-muted-foreground">
        <ul className="flex gap-4">
          <Link href={"/components"}>
            <li>Components</li>
          </Link>

          <li>Pricing</li>
          <li>Ressources</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 rounded-md border border-muted-foreground px-2 py-1">
          <p>Search</p>
          <kbd className="pointer-events-none right-[0.3rem] hidden h-5 select-none flex-row items-center justify-center gap-1 rounded border border-muted-foreground p-[0.3rem] px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>
    </div>
  );
}
