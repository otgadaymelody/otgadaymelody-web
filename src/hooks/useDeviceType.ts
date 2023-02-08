import { useState, useEffect } from 'react';

function getDeviceType(): string {
  const { innerWidth: width, innerHeight: height } = window;
  if (width < 744) {
    return 'mobile';
  } else if (width >= 744 && width < 1440) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

export default function useDeviceType(): string {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    function handleResize(): void {
      setDeviceType(getDeviceType());
    }

    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  return deviceType;
}
