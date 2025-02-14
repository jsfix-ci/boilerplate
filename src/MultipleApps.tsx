/* Styles */
import './styles.less';

/* Routing */
import './applications';
import { FunctionComponent } from "react";

import { ApplicationManager, ApplicationScope } from '@dhampir/core';

export const MultipleApps: FunctionComponent = () => {
    return <ApplicationManager scope={ApplicationScope.MULTIPLE} />;
};
