import React from 'react';
const { connect } = require('react-redux')

const urls = [
	'https://photos.google.com/photo/AF1QipN608c40KfkYtol930_CyKhMyFB90d6atO1uF8y',
	'https://photos.google.com/photo/AF1QipMPjqRX--jKqBrBqi2SeuRDldCOJrUViRXqAVfz',
	'https://photos.google.com/photo/AF1QipPAtKc27LDwv6cJYoJo1qJBn2492y0SupGFaroj'
]

const imageUrls = {urls}

function images(props){
	return (
		<div>
		<img src='https://static.pexels.com/photos/27714/pexels-photo-27714.jpg' />
		</div>
	)
}
// class Images extends React.Component {
//
// function renderImage(imageUrl) {
// 	console.log('imageUrls',imageUrls);
//
//     return (
//       <div>
//         <img src={imageUrl} />
//       </div>
//     );
//   }
//
//   render(){
//     return (
//       <div className="gallery">
//         <div className="images">
//           {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
//         </div>
//       </div>
//     );
//   }
// }
//
// Images.propTypes = {
//   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
// };

module.exports = connect((state) => state)(images)
