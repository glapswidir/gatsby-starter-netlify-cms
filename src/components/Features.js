import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({gridItems}) => (
    <div>
        {gridItems.map(item => (
            <article key={item.text} className="media">
                <div className="media-left">
                    <div className="image">
                        <PreviewCompatibleImage imageInfo={item}/>
                    </div>
                </div>
                <div className="media-content">
                    <div className="content">
                        <h1 className="title">{item.heading}</h1>
                        <p>{item.text}</p>
                    </div>
                </div>
            </article>
        ))}
    </div>
)

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
            heading: PropTypes.string,
        })
    ),
}

export default FeatureGrid
