import store from './store';

class ModuleBuilder {

  static init ({ React }) {
    store.set('react', React);
    return this;
  }

  static build () {
    const React = store.get('react');
    const LazyEditor = React.lazy(() => import('./components/Editor'));

    const Loader = require('./components/Loader').default;

    const Editor = () => (
      <React.Suspense fallback={<Loader />}>
        <LazyEditor />
      </React.Suspense>
    );

    return {
      routes: [
        {
          exact: true,
          path: '/editor',
          component: Editor
        }
      ],
      navBarItems: [
        { path: '/editor', name: 'Editor' }
      ]
    };
  }
}

export default ModuleBuilder;