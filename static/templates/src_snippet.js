!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.src_snippet=n({1:function(n,a,l,e,s){var t;return'    <br><span class="expand_spans small_button"></span>\n    <span class="div_spans">\n'+(null!=(t=l.each.call(null!=a?a:{},null!=a?a.spans:a,{name:"each",hash:{},fn:n.program(2,s,0),inverse:n.noop,data:s}))?t:"")+"    </span>\n"},2:function(n,a,l,e,s){var t,i,p=null!=a?a:{},r=l.helperMissing,u="function",_=n.escapeExpression;return'        <span class="div_span">\n            <span class="span_loc" link="'+_((i=null!=(i=l.file_name||(null!=a?a.file_name:a))?i:r,typeof i===u?i.call(p,{name:"file_name",hash:{},data:s}):i))+":"+_((i=null!=(i=l.line_start||(null!=a?a.line_start:a))?i:r,typeof i===u?i.call(p,{name:"line_start",hash:{},data:s}):i))+":"+_((i=null!=(i=l.line_end||(null!=a?a.line_end:a))?i:r,typeof i===u?i.call(p,{name:"line_end",hash:{},data:s}):i))+'" snippet="'+_((i=null!=(i=l.plain_text||(null!=a?a.plain_text:a))?i:r,typeof i===u?i.call(p,{name:"plain_text",hash:{},data:s}):i))+'">'+_((i=null!=(i=l.file_name||(null!=a?a.file_name:a))?i:r,typeof i===u?i.call(p,{name:"file_name",hash:{},data:s}):i))+":"+_((i=null!=(i=l.line_start||(null!=a?a.line_start:a))?i:r,typeof i===u?i.call(p,{name:"line_start",hash:{},data:s}):i))+":"+_((i=null!=(i=l.column_start||(null!=a?a.column_start:a))?i:r,typeof i===u?i.call(p,{name:"column_start",hash:{},data:s}):i))+": "+_((i=null!=(i=l.line_end||(null!=a?a.line_end:a))?i:r,typeof i===u?i.call(p,{name:"line_end",hash:{},data:s}):i))+":"+_((i=null!=(i=l.column_end||(null!=a?a.column_end:a))?i:r,typeof i===u?i.call(p,{name:"column_end",hash:{},data:s}):i))+'</span>\n            <div class="div_all_span_src" id="src_span_'+_((i=null!=(i=l.id||(null!=a?a.id:a))?i:r,typeof i===u?i.call(p,{name:"id",hash:{},data:s}):i))+'">\n'+(null!=(t=n.invokePartial(e.src_snippet_inner,a,{name:"src_snippet_inner",data:s,indent:"                ",helpers:l,partials:e,decorators:n.decorators}))?t:"")+"            </div>\n        </span>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,s){var t;return null!=(t=l["if"].call(null!=a?a:{},null!=a?a.spans:a,{name:"if",hash:{},fn:n.program(1,s,0),inverse:n.noop,data:s}))?t:""},usePartial:!0,useData:!0})}();