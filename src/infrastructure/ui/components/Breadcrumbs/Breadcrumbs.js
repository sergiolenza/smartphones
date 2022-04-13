import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import styled from 'styled-components';

const StyledBreadcrumbs = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const StyledBreadcrumb = styled.div`
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  color: darkgray;
`;
const StyledBreadcrumbLink = styled.a`
  color: darkgray;
`;

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <StyledBreadcrumbs>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <StyledBreadcrumb key={breadcrumb.key}>
          <StyledBreadcrumbLink as={Link} to={match.pathname || ''}>
            {breadcrumb}
          </StyledBreadcrumbLink>
          {index < breadcrumbs.length - 1 && '/'}
        </StyledBreadcrumb>
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
