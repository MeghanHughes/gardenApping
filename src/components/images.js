import React from 'react';
const { connect } = require('react-redux')

let urls = [
	'https://photos.google.com/photo/AF1QipN608c40KfkYtol930_CyKhMyFB90d6atO1uF8y',
	'https://photos.google.com/photo/AF1QipMPjqRX--jKqBrBqi2SeuRDldCOJrUViRXqAVfz',
	'https://photos.google.com/photo/AF1QipPAtKc27LDwv6cJYoJo1qJBn2492y0SupGFaroj'
]

const imageUrls = {urls}

class Images extends React.Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }
  render(){
    return (
      <div className="gallery">
        <div className="images">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}

Images.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

module.exports = connect((state) => state)(Images)
