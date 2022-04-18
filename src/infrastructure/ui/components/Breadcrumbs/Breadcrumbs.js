import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import styled from 'styled-components';
import DynamicProductBreadcrumb from './DynamicProductBreadcrumb';

const StyledBreadcrumbs = styled.nav`
  display: flex;
  margin-top: 1rem;
  .breadcrumbs--unit {
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    color: darkgray;
  }
  .breadcrumbs--link {
    color: darkgray;
  }
`;

const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: ':productId', breadcrumb: DynamicProductBreadcrumb },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <StyledBreadcrumbs role="navigation" aria-label="breadcrumbs">
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className="breadcrumbs--unit" key={breadcrumb.key}>
          <Link className="breadcrumbs--link" to={match.pathname || ''}>
            {breadcrumb}
          </Link>
          {index < breadcrumbs.length - 1 && '/'}
        </div>
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
