export default function Lightbox({ item, onClose }) {
  if (!item) return null;

  return (
   <div className="lightbox" onClick={onClose}>
  <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
    
    <button className="close-btn" onClick={onClose}>✕</button>

    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="open-btn"
    >
      Open ↗
    </a>

    <iframe src={item.url} title={item.title} />
  </div>
</div>
  );
}