import store from './store';
import { Icon } from 'antd';

class ModuleBuilder {

  static init ({ React }) {
    store.set('react', React);
    return this;
  }

  static build () {
    const React = store.get('react');
    const LazyEditor = React.lazy(() => import('./components/Editor'));

    const Loader = () => {
      return (
        <div style={{ padding: 50 }}>
          <Icon type="loading" />
        </div>
      )
    };

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