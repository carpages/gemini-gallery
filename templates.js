(function(factory) {

if (typeof define === 'function' && define.amd) {

define(['handlebars'], factory);

} else if (typeof exports === 'object') {

module.exports = factory(require('handlebars'));

} else {

factory(Handlebars);

}

}(function(Handlebars) {

this["Templates"] = this["Templates"] || {};
this["Templates"]["Default"] = this["Templates"]["Default"] || {};
this["Templates"]["Default"]["Gallery"] = this["Templates"]["Default"]["Gallery"] || {};

this["Templates"]["Default"]["Gallery"]["gallery"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <li>\n\n      <div class=\"fit\">\n        <img class=\"lazy clickable\"\n          data-original=\""
    + this.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          >\n      </div>\n\n    </li>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            data-"
    + alias3(((helper = (helper = helpers.screen || (depth0 != null ? depth0.screen : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"screen","hash":{},"data":data}) : helper)))
    + "=\""
    + alias3(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"js-gallery-carousel carousel\">\n  <ul class=\"carousel__list\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.imgs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  </ul>\n</div>\n";
},"useData":true});

this["Templates"]["Default"]["Gallery"]["modal"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"js-modal  modal\">\n  <div class=\"js-modal__content  modal__content  full\"></div>\n  <div class=\"js-modal__close  modal__close\">Close</div>\n</div>\n";
},"useData":true});

return this["Templates"]["Default"]["Gallery"];

}));