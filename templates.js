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

this["Templates"]["Default"]["Gallery"]["gallery"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <li>\n\n      <div class=\"fit\">\n        <img class=\"lazy clickable\"\n          data-original=\""
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.screens : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          >\n      </div>\n\n    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            data-"
    + alias4(((helper = (helper = helpers.screen || (depth0 != null ? depth0.screen : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screen","hash":{},"data":data}) : helper)))
    + "=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"js-gallery-carousel carousel\">\n  <ul class=\"carousel__list\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.imgs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  </ul>\n</div>\n";
},"useData":true});

this["Templates"]["Default"]["Gallery"]["modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"js-modal  modal\">\n  <div class=\"js-modal__content  modal__content  full\"></div>\n  <div class=\"js-modal__close  modal__close\">Close</div>\n</div>\n";
},"useData":true});

return this["Templates"]["Default"]["Gallery"];

}));