"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

function Chevron({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Images/logo.png"
            alt="Budhanilkantha School logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-sm bg-white/90 p-1"
          />
          <span className="font-script text-[34px] leading-[0.85] text-white">
            Budhanilkantha
            <br />
            <span className="pl-1">School</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-75"
              >
                {item.label}
                {item.children && <Chevron />}
              </Link>

              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full min-w-[200px] rounded-sm bg-black/55 py-2 shadow-xl backdrop-blur-sm">
                  {item.children.map((child, index) => (
                    <Link
                      key={`${item.label}-${child.label}-${child.href}-${index}`}
                      href={child.href}
                      className="block px-4 py-[7px] text-[13px] leading-snug text-white hover:text-[#3aa94f]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/50 text-white xl:hidden"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            {mobileOpen ? (
              <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4l-6.3 6.3-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3z" />
            ) : (
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full max-h-[70vh] overflow-y-auto bg-white shadow-xl xl:hidden">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[#eee]">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-4 py-3 text-[15px] font-semibold text-[#1c2340]"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() =>
                      setMobileSub((s) => (s === item.label ? null : item.label))
                    }
                    className="px-4 py-3 text-[#1c2340]"
                  >
                    <Chevron className="h-4 w-4" />
                  </button>
                )}
              </div>
              {item.children && mobileSub === item.label && (
                <div className="bg-[#fafafa] pb-2">
                  {item.children.map((child, index) => (
                    <Link
                      key={`${item.label}-${child.label}-${child.href}-${index}`}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-7 py-2 text-[14px] text-[#444]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}