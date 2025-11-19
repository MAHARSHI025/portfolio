"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({ items, className }) => {
  return <FloatingDockUnified items={items} className={className} />;
};

const FloatingDockUnified = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  const [iconSize, setIconSize] = useState(50); // dynamic mobile size

  // Auto-resize icons on mobile so they always fit center
  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      const maxIcons = items.length;
      const padding = 20;

      // calculate available width
      const available = screenWidth - padding * 2;

      // compute icon size so all fit without scroll
      let size = Math.min(55, available / maxIcons);

      // minimum icon size
      size = Math.max(size, 35);

      setIconSize(size);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [items.length]);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 items-end justify-center gap-4 rounded-2xl " +
          "bg-gray-50 px-4 pb-3 dark:bg-neutral-900 w-full",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          iconSize={iconSize}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href, iconSize }) {
  let ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640;

  // desktop only magnify animation
  let distance = useTransform(mouseX, (val) => {
    if (isMobile) return 9999;
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - bounds.x - bounds.width / 2;
  });

  let width = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 70, 40])
  );
  let height = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 50, 40])
  );

  let widthIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 30, 20])
  );
  let heightIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 30, 20])
  );

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{
          width: isMobile ? iconSize : width,
          height: isMobile ? iconSize : height,
        }}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        className="relative flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        {/* Tooltip (desktop only) */}
        <AnimatePresence>
          {hovered && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border 
                bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 
                dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          style={{
            width: isMobile ? iconSize * 0.55 : widthIcon,
            height: isMobile ? iconSize * 0.55 : heightIcon,
          }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
