'use client';
import { ButtonUI } from '@/shared/ui/buttonUI';
import { useDispatch } from 'react-redux';
import { addService, removeService } from '@/entities/model/serviceSlice';

type TServiceCard = {
  id: number;
  name: string;
  price: number;
  isSelected: boolean;
};

export function ServiceCard(props: TServiceCard) {
  const { id, name, price, isSelected } = props;
  const dispatch = useDispatch();
  return (
    <article
      data-id={id}
      className="rounded-lg bg-[rgb(var(--list-bg)/0.5)] px-3 py-2 sm:py-2.5"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="whitespace-normal break-words">{name}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <p className="whitespace-normal break-words">стоимость: {price}</p>
          <ButtonUI
            name={isSelected ? 'удалить' : 'добавить'}
            type="button"
            onClick={() =>
              isSelected
                ? dispatch(removeService(id))
                : dispatch(addService({ id, name, price }))
            }
            className="bg-[rgb(var(--btn-active)/0.7)] px-2.5 py-0.5
sm:px-4 sm:py-1 self-start sm:self-auto"
          />
        </div>
      </div>
    </article>
  );
}
