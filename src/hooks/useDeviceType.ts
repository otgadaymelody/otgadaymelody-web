import { useState, useEffect } from 'react';


function getDeviceType() {
   const { innerWidth: width, innerHeight: height } = window;
   if (width < 744) {
      return "mobile";
   } else if(width >= 744 && width < 1440) {
      return 'tablet';
   } else {
      return "desktop";
   }
}

export default function useDeviceType() {
   const [deviceType, setDeviceType] = useState(getDeviceType());

   useEffect(() => {
   function handleResize() {
      setDeviceType(getDeviceType());
   }

   window.addEventListener('resize', handleResize);
   return () => window.removeEventListener('resize', handleResize);
   }, []);

   return deviceType;
}