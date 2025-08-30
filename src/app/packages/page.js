import Packeges from './Packeges';
import { Suspense } from 'react';

export default function MarketingFilter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Packeges />
    </Suspense>
  );
}