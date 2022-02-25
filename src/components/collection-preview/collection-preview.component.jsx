import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                // this anonymous function will get called *** every time *** the component is rendered or re-rendered!
                // if the array gets too large, it may become a performance concern or if its running on slower machines
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;
