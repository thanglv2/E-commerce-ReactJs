/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, FormEvent } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import { VerticalMenu } from 'containers/VerticalMenu';
import { HorizontalMenu } from 'containers/HorizontalMenu';
import { Section } from 'containers/Section';

const key = 'home';

export function HomePage() {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: null });

  useEffect(() => {
  }, []);

  return (
    <div>

    </div>

  );
}

export default memo(HomePage);