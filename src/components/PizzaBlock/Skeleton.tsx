import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={475}
    viewBox="0 0 280 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="241" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="285" rx="10" ry="10" width="280" height="83" />
    <rect x="0" y="393" rx="10" ry="10" width="97" height="33" />
    <rect x="123" y="382" rx="32" ry="32" width="150" height="54" />
    <circle cx="136" cy="112" r="110" />
  </ContentLoader>
);

