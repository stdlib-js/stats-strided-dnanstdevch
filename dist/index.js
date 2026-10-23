"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(w,u){
var h=require('@stdlib/stats-strided-dnanvariancech/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,n,f){return p(h(e,r,a,n,f))}u.exports=x
});var d=i(function(z,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=t();function l(e,r,a,n){return m(e,r,a,n,j(e,n))}v.exports=l
});var o=i(function(A,c){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=t();R(q,"ndarray",_);c.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),s,y=O(E(__dirname,"./native.js"));b(y)?s=g:s=y;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
