import React, { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import HeroWrapper from "./HeroWrapper";

const navItems = [
  {
    name: "Product",
    links: [
      {
        name: "Product Overview",
        href: "https://www.arcade.software/product?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Lead Generation",
        href: "https://www.arcade.software/product/capture?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Personalization",
        href: "https://www.arcade.software/product/personalization?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Integrations",
        href: "https://www.arcade.software/integrations?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Browser Extension",
        href: "https://chromewebstore.google.com/detail/arcade/gagidkjllbdgggpboolfmmdpeagghjlm?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Desktop App",
        href: "https://www.arcade.software/download?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Figma Plugin",
        href: "https://www.figma.com/community/plugin/1428419310515420089/arcade-turn-designs-into-interactive-demos?utm_source=website&utm_medium=nav_bar",
      },
    ],
  },
  {
    name: "Solutions",
    links: [
      {
        name: "Marketing",
        href: "https://www.arcade.software/solutions/marketing?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Product",
        href: "https://www.arcade.software/solutions/product?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Sales",
        href: "https://www.arcade.software/solutions/sales?utm_source=website&utm_medium=nav_bar",
      },
    ],
  },
  {
    name: "Resources",
    links: [
      {
        name: "Blog",
        href: "https://www.arcade.software/blog?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Knowledge Base",
        href: "https://docs.arcade.software/kb?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Changelog",
        href: "https://www.arcade.software/changelog?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Showcase",
        href: "https://www.arcade.software/showcase?utm_source=website&utm_medium=nav_bar",
      },
      {
        name: "Case Studies",
        href: "https://www.arcade.software/category/case-study?utm_source=website&utm_medium=nav_bar",
      },
    ],
  },
  {
    name: "Company",
    links: [
      {
        name: "Careers",
        href: "https://www.arcade.software/careers",
      },
      {
        name: "Security",
        href: "https://www.arcade.software/security",
      },
    ],
  },
  { name: "Pricing", links: [] },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="w-full bg-zinc-300 px-4 py-3 flex items-center justify-between relative">
        <div className="flex items-center">
          <img
            src="/images/logo.webp"
            alt="Logo"
            className="h-16 w-auto cursor-pointer"
            onClick={() => window.location.reload()}
          />
        </div>

        <div className="hidden md:flex flex-1 justify-center relative">
          <ul className="flex space-x-8 text-lg">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative px-2 py-1 cursor-pointer flex items-center gap-2 hover:bg-gray-200 transition-colors duration-200 rounded"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                role="menuitem"
                aria-haspopup={!!item.links.length}
                aria-expanded={hoveredItem === index}
              >
                {item.name}
                {!!item.links.length && (
                  <FaChevronDown
                    className={`transform transition-transform duration-300 ${
                      hoveredItem === index ? "rotate-180" : ""
                    }`}
                  />
                )}

                <AnimatePresence>
                  {hoveredItem === index && !!item.links.length && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-60 bg-white border shadow-lg rounded py-3 px-4 z-10"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <ul className="space-y-3">
                        {item.links.map((link, idx) => (
                          <li key={idx}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-2 py-1 rounded transition-colors duration-150"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() =>
              window.open(
                "https://app.arcade.software/auth?utm_source=website&utm_medium=nav_bar&utm_content=security&_gl=1*ozbzd0*_gcl_au*MTkwODU5MDU5OC4xNzQ3ODA4MDQz*_ga*MjQ0Mzk1ODg3LjE3NDc4MDgwNDM.*_ga_PL6X6J5TF3*czE3NDgwMDQ0NjckbzEyJGcxJHQxNzQ4MDE0ODk4JGoxOSRsMCRoMCRkTnRqTHJiRHZRUVZ4NkxlbUhTSTRXVHA5bHRCNkZEaUptUQ..",
                "_blank"
              )
            }
            className="px-6 cursor-pointer py-3 bg-white rounded text-base font-semibold hover:bg-gray-100 transition-colors"
          >
            Login
          </button>

          <button
            onClick={() =>
              window.open(
                "https://app.arcade.software/auth?utm_source=website&utm_medium=nav_bar&utm_content=security&_gl=1*113p514*_gcl_au*MTkwODU5MDU5OC4xNzQ3ODA4MDQz*_ga*MjQ0Mzk1ODg3LjE3NDc4MDgwNDM.*_ga_PL6X6J5TF3*czE3NDgwMDQ0NjckbzEyJGcxJHQxNzQ4MDE0ODk4JGoxOSRsMCRoMCRkTnRqTHJiRHZRUVZ4NkxlbUhTSTRXVHA5bHRCNkZEaUptUQ..",
                "_blank"
              )
            }
            className="px-6 cursor-pointer  py-3 bg-[#1447E6] text-white rounded-lg text-base font-semibold hover:bg-gray-800 transition-colors"
          >
            Sign Up for Free
          </button>
        </div>

        <div className="md:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute top-20 left-0 w-full bg-zinc-300 flex flex-col items-center space-y-4 py-4 md:hidden z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col items-center gap-3 text-lg w-full px-4">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="w-full flex flex-col hover:bg-gray-200 px-4 py-2 rounded cursor-pointer"
                  >
                    <div
                      className="flex justify-between items-center"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === index ? null : index
                        )
                      }
                      role="menuitem"
                      aria-haspopup={!!item.links.length}
                      aria-expanded={mobileDropdown === index}
                    >
                      <span>{item.name}</span>
                      {!!item.links.length && <FaChevronDown />}
                    </div>
                    <AnimatePresence>
                      {mobileDropdown === index && !!item.links.length && (
                        <motion.ul
                          className="mt-2 space-y-2 pl-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.links.map((link, idx) => (
                            <li key={idx}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-gray-700 hover:text-blue-600"
                              >
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col w-full px-4 gap-4">
                <button className="w-full px-6 py-3 bg-white rounded text-base font-semibold hover:bg-gray-100 transition-colors">
                  Login
                </button>
                <button className="w-full px-6 py-3 bg-black text-white rounded text-base font-semibold hover:bg-gray-800 transition-colors">
                  Get Started for Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <HeroWrapper />
    </>
  );
};

export default Navbar;
