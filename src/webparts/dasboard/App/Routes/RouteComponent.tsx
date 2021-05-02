import React from 'react';
import { Redirect } from 'react-router';
import routes from './routes';

const RouteComponent: React.FC<IProps> = (props: IProps) => {
  return (
    <Redirect to={routes.home.path} />
  );
};

export interface IProps { }

export default RouteComponent;