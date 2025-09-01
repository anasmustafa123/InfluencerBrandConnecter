import Packeges from './Packeges';
import { Suspense } from 'react';
import { getAllPackages } from '@/lib/package';

export default async function MarketingFilter() {
  const pkgs = await getAllPackages(false);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Packeges packages={pkgs}/>
    </Suspense>
  );
}