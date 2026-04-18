import "../styles/mansory.css";

export default function MasonryGrid({ items, onItemClick }) {
  return (
    <div className="masonry">
      {items.map((item, index) => (
        <div
          key={index}
          className="masonry-item"
          onClick={() => onItemClick(item)}
        >
          <div className="thumbnail-wrapper">
            <img src={item.thumbnail} alt={item.title} />
            <div className="overlay">
              <span>{item.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}