import * as React from "react";

// Breakpoint constants in pixels
const MOBILE_BREAKPOINT = 768; // xs to sm breakpoint
const MD_BREAKPOINT = 992; // sm to md breakpoint
const LG_BREAKPOINT = 1200; // md to lg breakpoint
const XL_BREAKPOINT = 1400; // lg to xl breakpoint

interface ResponsiveState {
  isMobile: boolean; // < 768px
  isTablet: boolean; // >= 768px && < 992px
  isLarge: boolean; // >= 992px && < 1200px
  isXLarge: boolean; // >= 1200px && < 1400px
  isXXLarge: boolean; // >= 1400
}

export function useResponsive(): ResponsiveState {
  const [screenState, setScreenState] = React.useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isLarge: false,
    isXLarge: false,
    isXXLarge: false,
  });

  const updateScreenSize = React.useCallback(() => {
    const width = window.innerWidth;

    setScreenState({
      isMobile: width < MOBILE_BREAKPOINT,
      isTablet: width >= MOBILE_BREAKPOINT && width < MD_BREAKPOINT,
      isLarge: width >= MD_BREAKPOINT && width < LG_BREAKPOINT,
      isXLarge: width >= LG_BREAKPOINT && width < XL_BREAKPOINT,
      isXXLarge: width >= XL_BREAKPOINT,
    });
  }, []);

  React.useEffect(() => {
    // Initial check
    updateScreenSize();

    // Add resize event listener
    window.addEventListener("resize", updateScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", updateScreenSize);
  }, [updateScreenSize]);

  return screenState;
}
