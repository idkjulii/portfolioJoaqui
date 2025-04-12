"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ClientBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  // Effect to handle initial theme
  useEffect(() => {
    setMounted(true);

    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set body classes
    document.body.className = cn(
      className || "antialiased",
      (savedTheme === "dark" || (!savedTheme && prefersDark)) ? "dark" : ""
    );

    // Set html class
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [className]);

  // Only render children once mounted to handle hydration mismatch
  if (!mounted) {
    return (
      <body
        className={cn(className, "antialiased")}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex items-center justify-center">
          {/* Loading state */}
        </div>
      </body>
    );
  }

  return (
    <body
      className={className}
      suppressHydrationWarning
    >
      {children}
    </body>
  );
}
