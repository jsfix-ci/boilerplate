import { Column, LayoutList } from '@common';
import * as React from 'react';

export const ErrorPage = props => {
    return <LayoutList fullScreen={true}><Column greedy={true}>404. Page not found.</Column></LayoutList>;
}
