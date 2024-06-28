
interface NavItem {
  name: string;
  route: string;
}

const navItemsCenter: NavItem[] = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Events", route: "/events" },
  { name: "Projects", route: "/projects" },
  { name: "Blog", route: "/blog" },
];

const navItemsRight: NavItem[] = [
  { name: "Linktree", route: "https://go.wdcc.co.nz/" },
  { name: "Join for 2024", route: "https://forms.gle/YX8RAdXGF4rTN3e27" },
];

const Header = () => {
  const currentPath = window.location.pathname;
  const openMenu = () => {
    // Disable scrolling
    const body = document.querySelector<HTMLElement>("body");
    if (body) body.style.overflowY = "hidden";

    // Show menu
    const menu = document.querySelector<HTMLElement>("#hamburg-options");
    if (menu) menu.style.display = "flex";
  };

  const closeMenu = () => {
    // Enable scrolling
    const body = document.querySelector<HTMLElement>("body");
    if (body) body.style.overflowY = "auto";

    // Hide menu
    const menu = document.querySelector<HTMLElement>("#hamburg-options");
    if (menu) menu.style.display = "none";
  };

  return (
    <header className="z-50 relative">
      <nav className="flex flex-row justify-between pt-2 px-4 bg-transparent sticky items-center">
        <div className="flex items-center">
          <a href="/" className="lg:mr-8">
            <img
              src="../../public/primary_1024.png"
              alt="WDCC Logo"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain" // Adjusted height for different screen sizes
            />{" "}
          </a>
        </div>
        <div className="flex md:hidden" onClick={openMenu}>
          <img width={40} src="/hamburg.svg" />
        </div>
        {/* Mobile Menu */}
        <div
          style={{
            display: "none",
          }}
          className="top-0 left-0 z-[999] rounded-xl fixed w-screen h-screen p-4 bg-white/50 backdrop-blur-lg shadow-sm"
          id="hamburg-options"
        >
          <div
            className="flex flex-col justify-center items-center w-full h-full"
            onClick={closeMenu}
          >
            <div className="p-8 flex flex-col justify-center items-center gap-8 text-3xl">
              {navItemsCenter.concat(navItemsRight).map((item, index) => (
                <a
                  href={item.route}
                  key={index}
                  className={`${currentPath === item.route ? "text-primary highlight underline underline-offset-8 decoration-2" : ""} `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row gap-4 lg:gap-8 mx-4 text-lg lg:text-xl font-semibold cursor-pointer">
          {navItemsCenter.map((item, index) => (
            <a
              href={item.route}
              key={index}
              className={`${currentPath === item.route && item.route !== "/" ? "text-primary highlight underline underline-offset-8 decoration-2" : ""} `}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex md:flex-row gap-4 lg:gap-8 text-center flex-shrink-0 text-lg lg:text-xl cursor-pointer">
          {navItemsRight.map((item, index) =>
            item.name === "Join for 2024" ? (
              <a
                href={item.route}
                key={index}
                className="inline-block bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-300 py-1 lg:py-2, px-2 lg:px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ) : (
              <a
                href={item.route}
                key={index}
                className="inline-block py-1 lg:py-2, px-2 lg:px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ),
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

