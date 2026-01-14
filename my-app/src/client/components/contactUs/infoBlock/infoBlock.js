import './infoBlock.css'

function InfoBlock({ icon: Icon, name, content, link }) {
  return (
    <div className="infoRow">
      <div className="infoIconWrapper">
        <Icon className="infoIcon" />
      </div>

      <div className="infoText">
        <h3>{name}</h3>
        <p>
          {link ? <a href={link}>{content}</a> : content}
        </p>
      </div>
    </div>
  );
}

export default InfoBlock;