/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import classNames from 'classnames';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import styles from './HomePage.less';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage() {
  const repos = useSelector(makeSelectRepos());
  const username = useSelector(makeSelectUsername());
  const loading = useSelector(makeSelectLoading());
  const error = useSelector(makeSelectError());

  const dispatch = useDispatch();

  const onChangeUsername = evt => dispatch(changeUsername(evt.target.value));
  const onSubmitForm = (evt?) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  };
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: null });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <section className={classNames(styles.defaultSection, styles.center)}>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </section>
        <section  className={styles.defaultSection}>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <span className={styles.centerSpan}>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </span>
              <input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </form>
          <ReposList {...reposListProps} />
        </section>
      </div>
    </article>
  );
}

export default memo(HomePage);