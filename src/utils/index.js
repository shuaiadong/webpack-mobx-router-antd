import React from 'React';
export const t = (tag, config, ...children) => {
    return React.createElement(tag, config, ...children)
}