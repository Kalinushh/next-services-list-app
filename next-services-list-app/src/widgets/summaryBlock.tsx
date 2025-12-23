'use client';
import { ButtonUI } from '@/shared/ui/buttonUI';

export function SummaryBlock() {
  return (
    <section className="bg-[rgb(var(--list-bg)/0.2)] rounded-xl">
      <p>Выбрано услуг:</p>
      <p>Стоимость услуг:</p>
      <ButtonUI
        name="Оформить заказ"
        type="button"
        className="bg-[rgb(var(--btn-active)/0.7)] px-2.5 py-0.5
sm:px-4 sm:py-1"
      />
    </section>
  );
}
