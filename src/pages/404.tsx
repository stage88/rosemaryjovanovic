import * as React from 'react';

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>

      <p>
        Sorry{' '}
        <span role='img' aria-label='Pensive emoji'>😔</span>{' '}
        we couldn’t find what you were looking for.
      </p>
    </main>
  );
};

export default NotFoundPage;
