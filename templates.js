define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};
this["Templates"]["Gallery"] = this["Templates"]["Gallery"] || {};

this["Templates"]["Gallery"]["gallery"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li>\n\n      <div class=\"fit\">\n        <img class=\"lazy clickable\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"\n        data-original=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      </div>\n\n    </li>\n  ";
  return buffer;
  }

  buffer += "<div class=\"js-gallery-carousel carousel\">\n  <ol class=\"carousel__list\">\n\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.imgs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  </ol>\n</div>\n";
  return buffer;
  });

this["Templates"]["Gallery"]["modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"js-modal\" class=\"modal\">\n  <div id=\"js-modal__content\" class=\"modal__content full\"></div>\n  <div id=\"js-modal__close\" class=\"modal__close\"></div>\n</div>\n";
  });

return this["Templates"]["Gallery"];

});