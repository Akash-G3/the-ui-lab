export default function Lightbox({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="lightbox-header">
          <h2>{item.title}</h2>
          <a href={item.url} target="_blank" rel="noreferrer">
            Open ↗
          </a>
        </div>

        <iframe
          src={item.url}
          title={item.title}
        />
      </div>
    </div>
  );
}