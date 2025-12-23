'use client';
import { ButtonUI } from '@/shared/ui/buttonUI';

type TServiceCard = {
  id: number;
  name: string;
  price: number;
};

export function ServiceCard(props: TServiceCard) {
  const { id, name, price } = props;
  return (
    <article
      data-id={id}
      className="rounded-lg bg-[rgb(var(--list-bg)/0.5)] px-3 py-2 sm:py-2.5"
    >
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3">
        <p className="whitespace-nowrap">{name}</p>
        <p className="whitespace-nowrap">стоимость: {price}</p>
        <ButtonUI
          name="добавить"
          type="button"
          className="bg-[rgb(var(--btn-active)/0.7)] px-2.5 py-0.5
sm:px-4 sm:py-1"
        />
      </div>
    </article>
  );
}
