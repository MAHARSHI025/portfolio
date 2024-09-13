"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Define cloudProps outside the component
const initialCloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04, // Default maxSpeed
    minSpeed: 0.02, // Default minSpeed
  },
};

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 45,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const [cloudProps, setCloudProps] = useState(initialCloudProps);
  const { theme } = useTheme();

  // Function to calculate and set maxSpeed and minSpeed based on screen width
  const updateCloudProps = () => {
    const isSmallScreen = window.innerWidth < 800;
    const newMaxSpeed = isSmallScreen ? 0.004 : 0.04;
    const newMinSpeed = isSmallScreen ? 0.02 : 0.02;

    setCloudProps((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        maxSpeed: newMaxSpeed,
        minSpeed: newMinSpeed,
      },
    }));
  };

  useEffect(() => {
    // Call it once on mount
    updateCloudProps();

    // Add a resize event listener
    window.addEventListener("resize", updateCloudProps);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateCloudProps);
  }, []);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
