/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, FormEvent } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import classNames from 'classnames';

// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
import styles from './HomePage.less';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeItemName } from './actions';
import { makeSelectItemName, makeSelectItems } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage() {
  // const repos = useSelector(makeSelectRepos());
  const itemName : string = useSelector(makeSelectItemName());
  // const loading : boolean = useSelector(makeSelectLoading());
  // const error : object = useSelector(makeSelectError());
  const items : any[] = useSelector(makeSelectItems());

  const dispatch = useDispatch();

  const onChangeItemName = ({target} : {target: HTMLInputElement}) => dispatch(changeItemName(target.value));
  const onSubmitForm = (evt? : FormEvent) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  };
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: null });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (itemName && itemName.trim().length > 0) onSubmitForm();
  }, []);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };

  console.log(items)

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
            <label htmlFor="itemName">
              <FormattedMessage {...messages.trymeMessage} />
              <span className={styles.centerSpan}>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </span>
              <input
                id="itemName"
                type="text"
                placeholder="products"
                value={itemName}
                onChange={onChangeItemName}
              />
            </label>
          </form>
          {/* <ReposList {...reposListProps} /> */}
        </section>
      </div>
    </article>
  );
}

export default memo(HomePage);