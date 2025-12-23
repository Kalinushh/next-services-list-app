'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { ServiceCard } from '@/entities/ui/serviceCard';

export function SelectedServicesList() {
  const selected = useSelector((state: RootState) => state.services.selected);
  if (selected.length === 0) return null;
  return (
    <section className="bg-[rgb(var(--list-bg)/0.2)] rounded-xl flex flex-col gap-2 sm:gap-3 md:gap-4">
      <h2>Выбранные услуги:</h2>
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        {selected.map((item) => (
          <ServiceCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            isSelected={true}
          />
        ))}
      </div>
    </section>
  );
}
