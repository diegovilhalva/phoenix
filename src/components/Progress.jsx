import PropTypes from "prop-types"


const CircularProgress = ({classes = '',size= ''}) => {
  return (
    <div className={`circular-progress ${size} ${classes}`}></div>
  )
}

CircularProgress.propTypes = {
    classes: PropTypes.string,
    size: PropTypes.string
}

export default CircularProgress