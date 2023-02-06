import type React from "react";

export declare interface BlockBackgroundProps extends React.AllHTMLAttributes<HTMLDivElement> {
   mediatorsClasses: {
      topLeft: string,
      topRight: string,
      bottomLeft: string,
      bottomRight: string,
   };
}