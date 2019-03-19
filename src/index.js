import React, {Component} from 'react';
import {render} from 'react-dom';
import {t} from 'utils';

import {HashRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routers from './routers';

import RootStore from './rootStore.js';
import {Provider} from 'mobx-react';

render(
    t(Provider, { ...new RootStore()},

        t(HashRouter, {},
            renderRoutes(routers)
        ),
    ),
    document.getElementById('root')
);