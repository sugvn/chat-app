import '../styles/name-card.css'

const NameCard = ({name}) => {
  return (
    <div className="name-card">
    <div className="pfp">
    {name[0].toUpperCase()}
    </div>
    <div className="details">
    <p className="name">{name}</p>
    <p className="info">demo text</p>
    </div>
    </div>
  )
}

export default NameCard
