import React, { FunctionComponent, useCallback } from 'react';
import { Row, Spacer, Units, Decorator } from '@dhampir/core';
import { useDispatch, useSelector } from 'react-redux';
import { progress } from '@extensions/management/store/application';
import { ExplorerState } from '@extensions/management/store/application/API';

export const LeftBar: FunctionComponent<any> = () => {
    const dispatch = useDispatch();

    const loading = useSelector<ExplorerState>((state) => {
        return state.ui.progress
    });

    const click = useCallback(() => {
        dispatch(progress(!loading));
    }, [loading, dispatch]);

    return <Decorator fill={true}>
        <Spacer space={0.5} units={Units.EM} size={24}>
            <Row>
                <button onClick={click}>Toggle Progress</button>
            </Row>
        </Spacer>
    </Decorator>;
}
