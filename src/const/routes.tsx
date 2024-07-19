import { Overview } from '../pages/Overview/Overview';

export type TRoutes = {
  name: string;
  title: string;
  path: () => string;
  count?: number;
  component: () => JSX.Element;
};

export const routes: TRoutes[] = [
  {
    name: 'overview',
    title: 'Overview',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;}
  },
  {
    name: 'users',
    title: 'Users',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;},
  },
  {
    name: 'agents',
    title: 'Agents',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;},
  },
  {
    name: 'cards',
    title: 'Cards',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;},
    count: 10,
  },
  {
    name: 'bitcoin',
    title: 'Bitcoin',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;},
  },
  {
    name: 'payments',
    title: 'payments',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;},
    count: 10,
  },
  {
    name: 'transactions',
    title: 'Transactions',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;},
  },
  {
    name: 'statistics',
    title: 'Statistics',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;},
  },
  {
    name: 'logout',
    title: 'Logout',
    path () {return '/' + this.name;},
    component () {return <Overview title={this.title} />;},
  },
];
