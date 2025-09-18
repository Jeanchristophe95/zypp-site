'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/tarifs', label: 'Tarifs & fonctionnement' },
  { href: '/rechargeur', label: 'Devenir rechargeur' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/mentions-legales', label: 'Mentions légales' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 16px',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      background: 'white',
      zIndex: 10,
    }}>
      <Link href="/" style={{ fontWeight: 700, color: 'var(--primary)' }}>ZYPP</Link>

      <ul style={{ display: 'flex', gap: 16, listStyle: 'none', margin: 0, padding: 0 }}>
        {navLinks.map(({ href, label }) => {
          const isActive = mounted && pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--primary)' : '#374151',
                  fontWeight: isActive ? 700 : 500,
                  borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                  paddingBottom: 2,
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


