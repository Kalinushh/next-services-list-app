'use client';
import { ServiceCard } from '@/entities/ui/serviceCard';
import mocks from '@/mocks/services.json';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

export function ServiceList() {
  const selected = useSelector((state: RootState) => state.services.selected);
  return (
    <>
      <section className="bg-[rgb(var(--list-bg)/0.2)] rounded-xl flex flex-col gap-2 sm:gap-3 md:gap-4">
        <h2>Дополнительные услуги:</h2>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {mocks
            .filter(
              (item) => !selected.some((service) => service.id === item.id)
            )
            .map((item) => (
              <ServiceCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                isSelected={false}
              />
            ))}
        </div>
      </section>
    </>
  );
}
