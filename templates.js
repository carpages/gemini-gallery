define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["galleryDefault"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<li>\n\n			<div class=\"fit-img\">\n				<img class=\"lazy clickable\" src=\"/images/primary/placeholder/loading.gif\"\n				data-original=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n			</div>\n\n		</li>\n	";
  return buffer;
  }

  buffer += "<div class=\"js-gallery-carousel carousel\">\n	<ol class=\"carousel__list\">\n\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.imgs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	</ol>\n	<div class=\"carousel__buttons carousel__buttons--medium\">\n		<i class=\"carousel__previous\" data-goto=\"--\"></i>\n		<i class=\"carousel__next\" data-goto=\"++\"></i>\n	</div>\n</div>\n";
  return buffer;
  });

return this["JST"];

});