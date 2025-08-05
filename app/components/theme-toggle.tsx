'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className='w-9 h-9 rounded-md border border-border bg-background hover:bg-accent'>
        <span className='sr-only'>Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='w-9 h-9 rounded-md border border-border bg-background hover:bg-accent transition-colors flex items-center justify-center'
    >
      {theme === 'light' ? (
        <Moon className='h-4 w-4 text-foreground' />
      ) : (
        <Sun className='h-4 w-4 text-foreground' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </button>
  );
}
