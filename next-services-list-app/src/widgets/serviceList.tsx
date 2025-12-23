'use client';

import { ServiceCard } from '@/entities/ui/serviceCard';

const moks = {
  id: 1,
  name: 'Выбор места',
  price: 1000,
};

export function ServiceList() {
  return (
    <>
      <section className="bg-[rgb(var(--list-bg)/0.2)] rounded-xl flex flex-col gap-2 sm:gap-3 md:gap-4">
        <h2>Дополнительные услуги:</h2>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <ServiceCard {...moks} />
          <ServiceCard {...moks} />
          <ServiceCard {...moks} />
          <ServiceCard {...moks} />
        </div>
      </section>
    </>
  );
}
