"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Import mobile open/close icons
// import ThemeToggle from "../themeToggle/ThemeToggle";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Products", url: "/products" },
  { id: 4, title: "Certificates", url: "/certificates" },
  { id: 5, title: "Contact", url: "/contact" },
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo.png"
          width={150}
          height={150}
          alt="Kayess Internationals"
          layout="fixed"
          objectFit="cover"
        />
      </Link>

      {/* Links for large screens (desktop, laptop, tablets) */}
      <div className={styles.links}>
        {/* <ThemeToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>

      {/* Mobile menu icon */}
      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.sidebarLinks}>
          {/* <ThemeToggle /> */}
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.sidebarLink}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
