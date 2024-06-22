
interface NavItem {
  name: string;
  route: string;
}

const navItemsCenter: NavItem[] = [
  {name: 'Home', route: '/'},
  {name: 'Team', route: '/team'},
  {name: 'Events', route: '/events'},
  {name: 'Projects', route: '/projects'},
  {name: 'Blog', route: '/blog'},
]

const navItemsRight: NavItem[] = [
  {name: 'Linktree', route: 'https://go.wdcc.co.nz/'},
  {name: 'Join for 2024', route: 'https://forms.gle/YX8RAdXGF4rTN3e27'},
]

const Header = () => {
const openMenu = () => {
  // Disable scrolling
  const body = document.querySelector<HTMLElement>("body");
  if (body) body.style.overflowY = "hidden";

  // Show menu
  const menu = document.querySelector<HTMLElement>("#hamburg-options");
  if (menu) menu.style.display = "flex";
}

const closeMenu = () => {
  // Enable scrolling
  const body = document.querySelector<HTMLElement>("body");
  if (body) body.style.overflowY = "auto";

  // Hide menu
  const menu = document.querySelector<HTMLElement>("#hamburg-options");
  if (menu) menu.style.display = "none";
}

  return (
  <header className="z-50 relative">
    <nav className="flex flex-row justify-between p-10 bg-transparent sticky items-center">
      <div>
        <a href="/" className="font-bold text-[#087df1] text-3xl lg:mr-8">WDCC</a>
      </div>
      <div className="flex md:hidden" onClick={openMenu}><img width={40} src="/hamburg.svg" /></div>
      {/* Mobile Menu */}
      <div style={{
        display: 'none'
      }} className="top-0 left-0 z-[999] rounded-xl fixed w-screen h-screen p-4 bg-white/50 backdrop-blur-lg shadow-sm" id="hamburg-options">
        <div className="flex flex-col justify-center items-center w-full h-full" onClick={closeMenu}>
          <div className="p-8 flex flex-col justify-center items-center gap-8 text-3xl">
            {navItemsCenter.concat(navItemsRight).map((item, index) => (
              <a href={item.route} key={index}>{item.name}</a>
            ))}
          </div>
        </div>
        </div>
        {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-row gap-4 lg:gap-8 mx-4 text-xl cursor-pointer">
        {navItemsCenter.map((item, index)=> (
              <a href={item.route} key={index}>{item.name}</a>
            ))}
      </div>
      <div className="hidden md:flex md:flex-row gap-4 lg:gap-8 text-center flex-shrink-0 text-xl cursor-pointer">
        {navItemsRight.map((item, index)=> (
              <a href={item.route} key={index}>{item.name}</a>
            ))}
      </div>
    </nav>
  </header>
);
};

export default Header;