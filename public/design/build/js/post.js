webpackJsonp([5],{15:function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(s),i=function(t){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),a(n,[{key:"initDOMElements",value:function(t){this.els={_commentsTabLink:e(".comments__tab-link"),_commentsVoteArrows:e(".comments__vote-up, .comments__vote-down")}}},{key:"onDOMReady",value:function(e){var t=this,n={up:!0,down:!0};this.els._commentsVoteArrows.click(function(e){return t.makeVoteArrowActive(e,n)})}},{key:"makeVoteArrowActive",value:function(t,n){t.preventDefault();var r=e(t.currentTarget).siblings(".comments__vote-num").text();return r=parseInt(r),e(t.currentTarget).hasClass("comments__vote-up")&&!0===n.up?(e(t.currentTarget).siblings(".comments__vote-down").hasClass("active")?r+=2:r+=1,e(t.currentTarget).siblings(".comments__vote-down").removeClass("active"),e(t.currentTarget).siblings(".comments__vote-num").text(r),e(t.currentTarget).addClass("active"),n.up=!1,n.down=!0):e(t.currentTarget).hasClass("comments__vote-down")&&!0===n.down&&(e(t.currentTarget).siblings(".comments__vote-up").hasClass("active")?r-=2:r-=1,e(t.currentTarget).siblings(".comments__vote-up").removeClass("active"),e(t.currentTarget).siblings(".comments__vote-num").text(r),e(t.currentTarget).addClass("active"),n.up=!0,n.down=!1),n}}]),n}(c.default);t.default=i}).call(t,n(6))},29:function(e,t){},37:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(29),n(5);var o=n(0),u=r(o),a=n(3),s=r(a),c=n(1),i=r(c),l=n(15),f=r(l),m=n(2),_=r(m),p=n(4),v=r(p);(new u.default).call(function(){new s.default,new i.default,new f.default,new _.default,new v.default})}},[37]);