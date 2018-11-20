import React from 'react';
import './layout.css';

export const Sidebar = ({
  children,
  className,
  ...restProps
}) => (
  <div {...restProps} className={`sidebar ${className}`}>
    {children}
  </div>
);

export const SidebarHeading = ({
  children,
  className,
  ...restProps
}) => (
  <h2 {...restProps} className={`sidebar-heading ${className}`}>
    {children}
  </h2>
);

export const MainBody = ({
  children,
  className,
  ...restProps
}) => (
  <div {...restProps} className={`main-body ${className}`}>
    {children}
  </div>
);

const Layout = ({
  children,
  className,
  ...restProps
}) => (
  <div {...restProps} className={`layout ${className}`}>
    {children}
  </div>
);

export default Layout;
