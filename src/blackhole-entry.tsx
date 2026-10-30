import * as React from "react";
import { createRoot } from "react-dom/client";
import BlackHoleHeroSection from "./components/ui/blackhole-hero-section";

function BlackHoleHero() {
  const [compact, setCompact] = React.useState(() =>
    window.matchMedia("(max-width: 760px)").matches
  );

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const update = () => setCompact(media.matches);

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <BlackHoleHeroSection
      className="cosmoatlas-black-hole"
      distance={26}
      elevation={-6}
      roll={-20}
      focus={compact ? [0.67, 0.48] : [0.72, 0.46]}
      brightness={1.04}
      spinSpeed={0.06}
      glow={0.95}
      starBrightness={0.14}
      steps={compact ? 180 : 280}
      resolution={compact ? 0.55 : 0.68}
      maxDpr={compact ? 1.2 : 1.55}
      scrim="left"
      scrimStrength={0.84}
    />
  );
}

const app = document.querySelector<HTMLElement>("#root");
if (app) {
  let mountedElement: HTMLElement | null = null;
  let reactRoot: ReturnType<typeof createRoot> | null = null;
  let mountTimer: number | undefined;

  const mountBlackHole = () => {
    mountTimer = undefined;
    const mount = app.querySelector<HTMLElement>(".cx-blackhole-mount");
    if (!mount || mount === mountedElement) return;

    reactRoot?.unmount();
    mountedElement = mount;
    reactRoot = createRoot(mount);
    reactRoot.render(<BlackHoleHero />);
  };

  const scheduleMount = () => {
    window.clearTimeout(mountTimer);
    mountTimer = window.setTimeout(mountBlackHole, 180);
  };

  const observer = new MutationObserver(scheduleMount);
  observer.observe(app, { childList: true, subtree: true });
  scheduleMount();
}
