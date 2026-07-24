import { useNavigate } from 'react-router-dom';
import '../style/ItemCard.scss';

const ItemCardSkeleton = ({ count = 6 }) => {
  return (
    <div className="items_grid">
      {Array.from({ length: count }).map((_, idx) => (
        <article key={idx} className="item-card item-card--skeleton">
          <div className="Item_thumbnail skeleton-box" />

          <div className="item-card__body">
            <div className="skeleton-line skeleton-title" />
            <div className="skeleton-line skeleton-summary" />
            <div className="skeleton-line skeleton-summary-short" />

            <div className="item-card__tags">
              <div className="skeleton-tag" />
              <div className="skeleton-tag" />
              <div className="skeleton-tag" />
            </div>

            <div className="item-card__date">
              <div className="skeleton-line skeleton-date" />
            </div>
          </div>

          <div className="item-card__footer">
            <div className="skeleton-line skeleton-link" />
          </div>
        </article>
      ))}
    </div>
  );
};

const ItemCard = ({ items, Loading }) => {
  const navigate = useNavigate();

  if (Loading) {
    return <ItemCardSkeleton count={6} />;
  }

  if (!items || items.length === 0) {
    return <h1 style={{ textAlign: 'center', marginTop: '10%', fontSize: '20px', color: '#fff' }}>Nothing to show</h1>;
  }

  return (
    <div className='items_grid'>
      {items.map((item, idx) => (
        <article
          key={item._id || idx}
          className="item-card"
          onClick={() => {
            navigate(`/app/items/${item._id}`);
          }}
        >
          <div className='Item_thumbnail'>
            <img src={item.previewImage} alt={item.title || ''} />
          </div>

          <div className="item-card__body">
            <h2 className="item-card__title">
              {item.title}
            </h2>

            {item.summary && (
              <p className="item-card__summary">
                {item.summary}
              </p>
            )}

            {item.tags?.length > 0 && (
              <div className="item-card__tags">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="item-card__tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="item-card__date">
              <h4>Saved :</h4>
              <p>{Math.floor((Date.now() - new Date(item.createdAt))
                / (1000 * 60 * 60 * 24))} Days ago</p>
            </div>
          </div>

          {item.url && (
            <div className="item-card__footer">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="item-card__link"
              >
                open source
              </a>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default ItemCard;