import './index.css'

const CollegeItem = props => {
  const {collegeDetails} = props
  const {imgUrl, name} = collegeDetails

  return (
    <li className="college-item">
      <img src={imgUrl} alt={name} className="college-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default CollegeItem
