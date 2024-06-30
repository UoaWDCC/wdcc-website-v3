interface NavItem {
  href: string;
  value: string;
}

interface HeaderProps {
  logoUrl: string;
  logoAlt: string;
  navItemsCenter: NavItem[];
  navItemsRight: NavItem[];
}

const Header = ({
  logoUrl,
  logoAlt,
  navItemsCenter,
  navItemsRight,
}: HeaderProps) => {
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
              src={logoUrl}
              alt={logoAlt}
              className="h-12 md:h-16 lg:h-20 w-auto object-contain" // Adjusted height for different screen sizes
            />
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
                  href={item.href}
                  key={index}
                  className={`${currentPath === item.href ? "text-primary highlight underline underline-offset-8 decoration-2" : ""} `}
                >
                  {item.value}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row gap-4 lg:gap-8 mx-4 text-lg lg:text-xl font-semibold cursor-pointer">
          {navItemsCenter.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className={`${currentPath === item.href ? "text-primary highlight underline underline-offset-8 decoration-2" : ""} `}
            >
              {item.value}
            </a>
          ))}
        </div>
        <div className="hidden md:flex md:flex-row gap-4 lg:gap-8 text-center flex-shrink-0 text-lg lg:text-xl cursor-pointer">
          {navItemsRight.map((item, index) =>
            item.value === `Join for ${new Date().getFullYear()}` ? (
              <a
                href={item.href}
                key={index}
                className="inline-block bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-300 py-1 lg:py-2, px-2 lg:px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.value}
              </a>
            ) : (
              <a
                href={item.href}
                key={index}
                className="inline-block py-1 lg:py-2, px-2 lg:px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.value}
              </a>
            ),
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
