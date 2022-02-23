import React from 'react';
import commonPackageTemplate from './commonPackageTemplate.jsx';

export default require('maco').template(data, React);

function data(props) {
  var model = props.model;
  console.log(JSON.stringify(props.model))

  var link = 'https://secureworks.com/' + encodeURIComponent(model.name);
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
