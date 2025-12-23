import { ServiceList } from '@/widgets/serviceList';
import { SelectedServicesList } from '@/widgets/selectedServicesList';
import { SummaryBlock } from '@/widgets/summaryBlock';

export default function ServicesPage() {
  return (
    <div className="p-4 max-w-screen-lg mx-auto flex flex-col gap-8">
      <ServiceList />
      <SelectedServicesList />
      <SummaryBlock />
    </div>
  );
}
