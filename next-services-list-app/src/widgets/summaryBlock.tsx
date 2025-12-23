'use client';
import { ButtonUI } from '@/shared/ui/buttonUI';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

export function SummaryBlock() {
  const selected = useSelector((state: RootState) => state.services.selected);
  const count = selected.length;
  const totalPrice = selected.reduce((sum, service) => sum + service.price, 0);

  const handleSubmit = () => {
    if (count === 0) return;
    alert('Заказ успешно оформлен');
    window.location.reload();
  };
  return (
    <section className="bg-[rgb(var(--list-bg)/0.2)] rounded-xl">
      <p>Выбрано услуг:{count}</p>
      <p>Стоимость услуг:{totalPrice}</p>
      <ButtonUI
        name="Оформить заказ"
        type="button"
        onClick={handleSubmit}
        className={`
          ${
            count === 0
              ? 'bg-[rgb(var(--btn-inactive))]'
              : 'bg-[rgb(var(--btn-active)/0.7)]'
          }
          px-2.5 py-0.5 sm:px-4 sm:py-1
        `}
      />
    </section>
  );
}
