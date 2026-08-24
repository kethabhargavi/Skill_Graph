import { Network, Search } from "lucide-react";

function Navbar() {
  const handleNavbarSearch = () => {
    const searchInput = document.querySelector(
      '.search-box input[aria-label="Search technology"]'
    );

    if (searchInput) {
      searchInput.focus();

      searchInput.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-inner">

        {/* BRAND */}

        <a
          href="/"
          className="brand"
          aria-label="SkillGraph Home"
        >
          <div className="brand-icon">
            <Network size={19} />
          </div>

          <span>SkillGraph</span>
        </a>

        {/* NAVIGATION */}

        <nav>
          <a href="#skills">Skills</a>

          <a href="#careers">
            Career Paths
          </a>

          <a href="#network">
            Knowledge Graph
          </a>
        </nav>

        {/* NAVBAR SEARCH */}

        <button
          className="nav-search"
          onClick={handleNavbarSearch}
          type="button"
          aria-label="Search SkillGraph"
        >
          <Search size={17} />

          <span>Search</span>

          <kbd>⌘ K</kbd>
        </button>

      </div>
    </header>
  );
}

export default Navbar;