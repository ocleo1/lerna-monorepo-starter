import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { InjectReducer } from './HOC/InjectReducer';
import { helloStore } from './store';

const FooRoutes = React.lazy(() => import(
  /* webpackChunkName: "foo" */
  '@example-lib/foo'
).then(
  ({ routes }) => ({ default: () => useRoutes(routes) })
));

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={helloStore}>
        <InjectReducer>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/foo/*" element={<FooRoutes />} />
            </Routes>
          </Suspense>
        </InjectReducer>
      </Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('hello-root'));
