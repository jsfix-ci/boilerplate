import React, { createContext } from 'react';
import { RouteChildrenProps } from 'react-router';

import { useNavigation } from '@core/hooks/useNavigation';
import { NavigationNode } from '@core/routing';

export interface NavigationContent {
    nodes: NavigationNode[];
}

export interface NavDataProvideProps extends RouteChildrenProps {
    expand?: boolean
}

export const NavigationContext = createContext<NavigationContent>({ nodes: [] })
export const NavDataProvider: React.FunctionComponent<NavDataProvideProps> = ({
                                                                                  match,
                                                                                  children,
                                                                                  expand = false,
                                                                              }) => {

    const nodes = useNavigation(match?.path!, expand);

    return <NavigationContext.Provider value={{ nodes }}>
        {children}
    </NavigationContext.Provider>;
};
