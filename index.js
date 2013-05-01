/*
 * Module Description
 * Language Picker for FamilySearch.org. Like version in frontier, without jQuery deps.
 *
 *
 */ 

/**
 * Module Deps
 *
 */
require('query-qwery'); //query fallback for old browser
var events = require("event"); 


module.exports = function OmnitureCustomLink(el, config){

  function customLinkHandler(e) {
    if(config.dev){e.preventDefault();}
    
    var linkName = config.name || '',
        linkType = config.type || 'o';

    if (typeof s !== 'undefined' && typeof s.tl === 'function') { // if s object exists and s.tl is a function, run it.
      s.tl(el, linkType, linkName);
    };
  }
  events.bind(el,'click', customLinkHandler);
};