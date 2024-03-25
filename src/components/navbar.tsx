import Image from "next/image";
import logo_black from "../../public/logo-black.png";

export default function NavbarComponent() {
  return (
    <div className="flex h-[8vh] w-screen items-center justify-between bg-black px-4 text-white">
      <div className="flex items-center gap-4">
        <Image
          src={logo_black}
          alt="logo"
          height={25}
          className="border-muted-foreground rounded-md border"
        ></Image>
        <p className="text-xl font-medium">Lullaby UI</p>
      </div>
      <div className="text-muted-foreground">
        <ul className="flex gap-4">
          <li>Components</li>
          <li>Pricing</li>
          <li>Ressources</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="border-muted-foreground flex items-center gap-4 rounded-md border px-2 py-1">
          <p>Search</p>
          <kbd className="border-muted-foreground text-muted-foreground pointer-events-none right-[0.3rem] hidden h-5 select-none flex-row items-center justify-center gap-1 rounded border p-[0.3rem] px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
        <div className=" text-xl font-medium">Account</div>
      </div>
    </div>
  );
}
