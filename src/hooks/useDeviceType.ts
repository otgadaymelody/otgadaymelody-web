import { useState, useEffect } from 'react';

function getDeviceType(): string {
  const { innerWidth: width, innerHeight: height } = window;
  if (width < 744) {
    return 'mobile';
  } else if (width >= 744 && width < 1024) {
    return 'tablet';
  } else if (width >= 1024 && width < 1280) {
    return 'tablet-lg';
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
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
}
