import React, { useEffect } from 'react';
import useItems from '../../Hooks/useItems';
import './ItemCard.scss';

const ItemCard = () => {
  const { context, getItemsHandler } = useItems();
  const { Items } = context;

  useEffect(() => {
    getItemsHandler();
  }, []);


  return (
    <div className="items-grid">
      {Items.map((item) => (
        <article className="item-card" key={item.id ?? item.title}>
          <div className="item-card__body">
            <h2 className="item-card__title">{item.title}</h2>

            {item.summary && (
              <p className="item-card__summary">{item.summary}</p>
            )}

            {item.tags?.length > 0 && (
              <div className="item-card__tags">
                {item.tags.map((tag) => (
                  <span className="item-card__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {item.url && (
            <div className="item-card__footer">
              <a
                className="item-card__link"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.url}
              </a>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default ItemCard;