"use strict";layui.define(["laytpl"],function(e){function t(e){var t=this,n=null;t.template=e.template,t.data=e.data||{},t.before=e.before,t.complete=e.complete,t.event=e.event,n=t.before&&t.before(),n?n.then&&n.then(function(){t.complete&&t.complete(t)}):(t.render(),t.complete&&t.complete(t))}var n=layui.laytpl;t.prototype.render=function(e,t){var l=this;e=_.extend(l.data,e),n(l.template).render(e,function(e){$("#dx-template").html(e),t&&t(),l.event&&l.event(l)})},e("_view",t)});