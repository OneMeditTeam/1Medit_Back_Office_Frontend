import Loading from '@/components/common/Loading';
import Dashboard from '@/app/dashboard/page';
import { Suspense } from 'react';

const Home = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    </main>
  );
};
export default Home;
