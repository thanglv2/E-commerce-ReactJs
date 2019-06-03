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
import { Button } from 'react-bootstrap';

// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
import H2 from 'components/H2';
import ProductItem from 'components/ProductItem';
// import ReposList from 'components/ReposList';
import styles from './HomePage.less';
import messages from './messages';
// import { loadRepos } from '../App/actions';
import { changeItemName, loadItems } from './actions';
import { makeSelectItemName, makeSelectItems, makeLoadingItems } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage() {
  // const repos = useSelector(makeSelectRepos());
  const itemName: string = useSelector(makeSelectItemName());
  const globalStyles = (window as any).globalStyles;
  console.log(globalStyles)

  // const loading : boolean = useSelector(makeSelectLoading());
  // const error : object = useSelector(makeSelectError());
  const items: any[] = useSelector(makeSelectItems());
  const loadingItems: boolean = useSelector(makeLoadingItems());

  const dispatch = useDispatch();

  const onChangeItemName = ({ target }: { target: HTMLInputElement }) => dispatch(changeItemName(target.value));
  const onSubmitForm = (evt?: FormEvent) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadItems());
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

  return (
    <div className="container">
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
        <section className={styles.defaultSection}>
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
        <section className={classNames(styles.defaultSection, styles.center)}>
          {loadingItems && <span className={styles.centerSpan}>Loading...</span>}
        </section>
        <Button variant="primary">Test bootstrap</Button>
      </div>
      {[0, 1, 2, 3, 4].map(item => (
        <div className="col-md-3">
          <ProductItem />
        </div>
      )
      )}
    </div>
  );
}

export default memo(HomePage);