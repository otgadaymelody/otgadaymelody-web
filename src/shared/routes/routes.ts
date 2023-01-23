import React from "react";
import Home from "../../pages/Home";

export interface IRoute {
   path: string;
   element: React.ElementType;
   exact?: boolean;
}

export const routes: IRoute[] = [];
