(this["webpackJsonpboom-fest"]=this["webpackJsonpboom-fest"]||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/Ilya.358068ad.glb"},31:function(e,t,n){e.exports=n.p+"static/media/Ilya.eda2eb49.mp3"},32:function(e,t,n){e.exports=n.p+"static/media/Ilya.a14d2aae.png"},33:function(e,t,n){e.exports=n.p+"static/media/Fedya.546ed2c9.glb"},34:function(e,t,n){e.exports=n.p+"static/media/Fedya.1672a261.mp3"},35:function(e,t,n){e.exports=n.p+"static/media/Fedya.ee720b13.png"},36:function(e,t,n){e.exports=n.p+"static/media/Martha.a7628e86.glb"},37:function(e,t,n){e.exports=n.p+"static/media/Martha.882922a4.mp3"},38:function(e,t,n){e.exports=n.p+"static/media/Martha.a56dd548.png"},39:function(e,t,n){e.exports=n.p+"static/media/Kira.24733a11.glb"},40:function(e,t,n){e.exports=n.p+"static/media/Kira.6ab9ee94.mp3"},41:function(e,t,n){e.exports=n.p+"static/media/Kira.0896bacb.png"},42:function(e,t,n){e.exports=n.p+"static/media/Mark.9b246715.glb"},43:function(e,t,n){e.exports=n.p+"static/media/Mark.76df59b7.mp3"},44:function(e,t,n){e.exports=n.p+"static/media/Mark.afe4e615.png"},45:function(e,t,n){e.exports=n(54)},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(19),c=n.n(i),o=n(26),s=n(24),u=n(1),l=n(3),d=n(4),m=n(58),f=n(59),p=function(e){return e.show&&r.a.createElement("div",{className:"video-modal",onClick:function(){return e.hide()}},r.a.createElement("div",{className:"video-modal__container"},r.a.createElement("div",{className:"video-modal__container__abs-container"},r.a.createElement("iframe",{title:"video",src:"https://www.youtube.com/embed/YgrfRoEcKxA?autoplay=1",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))},h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).render=function(){var e,t=["greenfrog","wifi","battery-25","magnifyingglass"].map((function(e){return r.a.createElement("div",{className:"header__right-icons__item header__right-icons__item--".concat(e)})}));return r.a.createElement("div",{className:"header",ref:a.headerRef},r.a.createElement("div",{className:"header__left-icons"},t[0],r.a.createElement("div",{className:"header__left-icons__item header__left-icons__item--text"},r.a.createElement("b",null,"\u0424\u0430\u0439\u043d\u0434\u0435\u0440")),["\u0424\u0430\u0435\u043b","\u042d\u0434\u0438\u0442","\u0412\u0438\u0443","\u0413\u043e","\u0412\u0438\u043d\u0434\u043e\u0443","\u0425\u0430\u043b\u043f"].map((function(e){return r.a.createElement("div",{className:"header__left-icons__item header__left-icons__item--text ".concat(a.state.headerActive===e&&"header__left-icons__item--active"),onClick:function(){return a.setState({headerActive:!a.state.headerActive&&e})},onMouseOver:function(){return a.state.headerActive&&a.setState({headerActive:e})}},e,r.a.createElement("div",{className:"header__left-icons__item__menu"},"\u0424\u0430\u0435\u043b"===e?r.a.createElement("div",{className:"header__left-icons__item__menu__item",onClick:function(){return a.setState({showVideo:!0,headerActive:!1})}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u0430\u043a..."):r.a.createElement("div",{className:"header__left-icons__item__menu__item header__left-icons__item__menu__item--disabled"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442")))}))),r.a.createElement("div",{className:"header__right-icons"},t[1],r.a.createElement("div",{className:"header__right-icons__item header__right-icons__item--text header__right-icons__item--battery-percentage"},"25%"),t[2],r.a.createElement("div",{className:"header__right-icons__item header__right-icons__item--text"},(e=Object(m.a)(new Date,"iii HH:mm",{locale:f.a})).charAt(0).toUpperCase()+e.slice(1)),t[3],r.a.createElement("div",{onClick:a.props.fullScreenToggler,className:"header__right-icons__item header__right-icons__item--text header__right-icons__item header__right-icons__item--fullscreen"},"\u0424\u0443\u043b\u0441\u043a\u0440\u0438\u043d")),r.a.createElement(p,{show:a.state.showVideo,hide:function(){return a.setState({showVideo:!1})}}))},a.state={headerActive:!1,showVideo:!1},a.headerRef=r.a.createRef(),document.addEventListener("click",(function(e){!a.state.headerActive||a.headerRef.current&&e.target===a.headerRef.current||a.setState({headerActive:!1})})),a}return n}(r.a.Component),_=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e.render=function(){return r.a.createElement("div",{className:"folder-window"},r.a.createElement("div",{className:"folder-window__header"},r.a.createElement("div",{className:"folder-window__header__name"},e.props.name),r.a.createElement("div",{className:"folder-window__header__buttons"},r.a.createElement("div",{className:"folder-window__header__buttons__item folder-window__header__buttons__item--close",onClick:function(){return e.props.close()}}),r.a.createElement("div",{className:"folder-window__header__buttons__item"}),r.a.createElement("div",{className:"folder-window__header__buttons__item"}))),r.a.createElement("div",{className:"folder-window__content"},e.props.children))},e}return n}(r.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).clickFolder=function(e){a.setState({selected:!0,opened:a.state.wasClickedResently,wasClickedResently:!0}),a.clickedTimeout&&(clearTimeout(a.clickedTimeout),a.clickedTimeout=void 0),a.clickedTimeout=setTimeout((function(){return a.setState({wasClickedResently:!1})}),300)},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"folder-icon ".concat(a.state.selected&&"folder-icon--selected")},r.a.createElement("div",{ref:a.folderIconRef,className:"folder-icon__icon",onClick:a.clickFolder}),r.a.createElement("div",{ref:a.folderNameRef,className:"folder-icon__name",onClick:a.clickFolder},a.props.name)),a.state.opened&&c.a.createPortal(r.a.createElement(_,{name:a.props.name,close:function(){return a.setState({opened:!1})}},a.props.children),document.getElementById("App")))},a.state={state:"idle",selected:!1,opened:!1,wasClickedResently:!1},a.folderIconRef=r.a.createRef(),a.folderNameRef=r.a.createRef(),document.addEventListener("click",(function(e){!a.state.selected||a.folderIconRef.current&&e.target===a.folderIconRef.current||a.folderNameRef.current&&e.target===a.folderNameRef.current||a.setState({selected:!1})})),a}return n}(r.a.Component),b=n(5),g=n(27),E=n(23),w=n(0),O=n(28),y=(n(55),n(51),function e(t){Object(u.a)(this,e),this.init=function(){},this.animate=function(e){},this.dispose=function(){},this.props=t}),N={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*Math.pow(e,2):(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},easeIn:function(e,t){return Math.pow(e,t)},easeOut:function(e,t){return 1-N.easeIn(1-e,t)},easeInOut:function(e,t){return e<.5?N.easeIn(2*e,t)/2:1-N.easeIn(2*(1-e),t)/2},easeIn2:function(e){return N.easeIn(e,1.5)},easeOut2:function(e){return N.easeOut(e,1.5)},easeInOut2:function(e){return N.easeInOut(e,1.5)}},j=N,R=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).init=function(e){var t=e.clientWidth,n=e.clientHeight,r=t>1200;a.scene.renderer=new w.WebGLRenderer({antialias:!r,alpha:!0}),a.scene.renderer.setClearColor(0,0),a.scene.renderer.setSize(t,n),a.scene.renderer.setPixelRatio(window.devicePixelRatio),a.scene.renderer.shadowMap.enabled=!0,e.appendChild(a.scene.renderer.domElement),a.scene.camera=new w.PerspectiveCamera(75,t/n,.1,1e3),a.scene.controls=new O.a(a.scene.camera,a.scene.renderer.domElement),a.scene.controls.enabled=!1,a.scene.camera.position.z=-25,a.scene.camera.position.y=12.5,a.scene.controls.update(),a.initUnits(),a.frameId||(a.frameId=requestAnimationFrame(a.animate))},a.dispose=function(){a.disposeUnits(),cancelAnimationFrame(a.frameId)},a.resize=function(e,t){a.scene.renderer&&a.scene.camera&&(a.scene.camera.aspect=e/t,a.scene.camera.updateProjectionMatrix(),a.scene.renderer.setSize(e,t),a.scene.renderer.setPixelRatio(window.devicePixelRatio))},a.animate=function(){a.scene.frameNumber=(a.scene.frameNumber+1)%5e3;var e=a.scene.renderer.domElement.getBoundingClientRect(),t=e.left,n=e.right,r=e.top,i=(e.bottom<0||r>a.scene.renderer.domElement.clientHeight||n<0||a.scene.renderer.domElement.clientWidth,a.scene),c=(i.composer,i.controls),o=i.units,s=(i.clock,i.renderer);Object.keys(o).forEach((function(e){return o[e].animate(Object(E.a)({THREE:w},a.scene,{input:a.scene.units.Controls,maxFrameNumber:5e3,react:a.props.react}))})),c.update(),s.render(a.scene.scene,a.scene.camera),a.frameId=window.requestAnimationFrame(a.animate)},a.initUnits=function(){var e=Object(E.a)({THREE:w},a.scene,{input:a.scene.units.Controls,maxFrameNumber:5e3,react:a.props.react});Object.keys(a.props.units).forEach((function(t){var n=a.props.units[t];!n.disabled^a.scene.unitsToggled&&(a.scene.units[t]=new n.unit(Object(E.a)({},e,{},n.args)),a.scene.units[t].init&&a.scene.units[t].init())}))},a.disposeUnits=function(){var e=a.scene,t=e.scene,n=e.units;for(Object.keys(n).forEach((function(e){return n[e].dispose()}));t.children.length>0;)t.remove(t.children[0])},a.toggleUnits=function(){a.disposeUnits(),a.scene.unitsToggled=!a.scene.unitsToggled,a.initUnits()},a.scene={renderer:void 0,camera:void 0,scene:new w.Scene,composer:void 0,controls:void 0,clock:new w.Clock,frameNumber:0,units:{},unitsToggled:!1},a}return n}(function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).animateTransitions=function(){var e=[];a.transitions.forEach((function(t){if(t.currentFrame>=t.numberOfFrames)e.push(t);else{var n=t.currentFrame/t.numberOfFrames,a=j[t.timingFuntion]||function(e){return e};t.variable.copy(t.initialValue.clone().lerp(t.value,a(n))),t.currentFrame++}})),e.forEach((function(e){e.onComplete&&e.onComplete(),a.unregisterTransition(e.id)}))},a.registerTransition=function(e){return a.transitions.push({id:a.currentId=(a.currentId+1)%Number.MAX_SAFE_INTEGER,variable:e.variable,value:e.value.clone(),initialValue:e.variable.clone(),numberOfFrames:e.numberOfFrames||10,currentFrame:0,timingFuntion:e.timingFuntion||"none",onComplete:e.onComplete||function(){}}),a.currentId},a.unregisterTransition=function(e){var t=a.transitions.map((function(e){return e.id})).indexOf(e);-1!==t&&a.transitions.splice(t,1)},a.unregisterAllTransitions=function(){return a.transitions.length=0},a.noActiveTransitions=function(){return 0===a.transitions.length},a.transitions=[],a.currentId=0,a}return n}(y)),k=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).componentWillUnmount=function(){a.scene.dispose()},a.render=function(){return r.a.createElement("div",{className:"Viewer",ref:a.viewerRef})},a.state={coinsCollected:0},a.viewerRef=new r.a.createRef,a.scene=new R({react:{},units:e.units}),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.resizeObs=new g.a(this.resize.bind(this)).observe(this.viewerRef.current),this.scene.init(this.viewerRef.current)}},{key:"resize",value:function(){var e=this.viewerRef.current;e&&this.scene.resize(e.clientWidth,e.clientHeight)}}]),n}(r.a.Component),x=n(18),F=n.n(x),I=n(21),C=n(29),A=function(){var e=Object(I.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){return(new C.a).load(t,(function(t){return e(t)}),(function(e){return console.log(e.loaded/e.total*100+"% loaded")}),(function(e){return n(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).loadModel=Object(I.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(a.props.file);case 2:a.gtlf=e.sent,a.model=a.gtlf.scene,a.mixer=new w.AnimationMixer(a.gtlf.scene),a.actions=[],a.gtlf.animations.forEach((function(e,t){a.actions.push(a.mixer.clipAction(e)),a.actions[t].play()})),a.model.scale.set(7.5,7.5,7.5),a.model.position.set(0,-7.5,0),a.props.scene.add(a.model);case 10:case"end":return e.stop()}}),e)}))),a.animate=function(e){var t=e.frameNumber/e.maxFrameNumber*7;a.model&&(a.model.rotation.y=2*t*Math.PI),a.mixer&&a.mixer.update(e.clock.getDelta())},a.dispose=function(e){},a.loadModel(),a}return n}(y),T=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(u.a)(this,n),(a=t.call(this,e)).animate=function(e){},a.dispose=function(){};var r=e.scene,i=e.THREE;return a.light0=new i.HemisphereLight(16777215,4473924,1.35),a.light0.position.set(0,25,0),r.add(a.light0),a}return n}(y),S=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e.render=function(){return r.a.createElement(k,{id:"sceneClosed",units:{head:{unit:M,args:{file:e.props.file},disabled:!1},lights:{unit:T,disabled:!1}}})},e}return n}(r.a.Component),Q=function(e){return e>9?e:"0".concat(e)},U=function(e){return"".concat(Q(Math.floor(e/60)),":").concat(Q(Math.floor(e%60)))},H=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={status:"loading...",playing:!1},e.componentDidMount=function(){e.audioFile=new Audio,e.audioFile.addEventListener("canplay",(function(){e.updateStatus(),e.audioFile.play()})),e.audioFile.addEventListener("timeupdate",(function(){return e.updateStatus()})),e.audioFile.addEventListener("ended",(function(){})),e.audioFile.preload="auto",e.audioFile.src=e.props.file,e.audioFile.load()},e.componentWillUnmount=function(){return e.audioFile.pause()},e.updateStatus=function(){return e.setState({status:"".concat(U(e.audioFile.currentTime)," / ").concat(U(e.audioFile.duration))})},e.render=function(){return r.a.createElement("div",{className:"audio"},r.a.createElement("div",{className:"audio__button",onClick:function(){return e.setState({playing:!e.state.playing})}}),r.a.createElement("div",{className:"audio__status"},e.state.status))},e}return n}(r.a.Component),P=n(30),z=n.n(P),W=n(31),L=n.n(W),V=n(32),K=n.n(V),q=n(33),B=n.n(q),D=n(34),G=n.n(D),J=n(35),X=n.n(J),Y=n(36),$=n.n(Y),Z=n(37),ee=n.n(Z),te=n(38),ne=n.n(te),ae=n(39),re=n.n(ae),ie=n(40),ce=n.n(ie),oe=n(41),se=n.n(oe),ue=n(42),le=n.n(ue),de=n(43),me=n.n(de),fe=n(44),pe=n.n(fe),he={Ilya:{model:z.a,audio:L.a,QR:K.a},Fedya:{model:B.a,audio:G.a,QR:X.a},Martha:{model:$.a,audio:ee.a,QR:ne.a},Kira:{model:re.a,audio:ce.a,QR:se.a},Mark:{model:le.a,audio:me.a,QR:pe.a}},_e=function(e){return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player__model"},r.a.createElement(S,{file:he[e.name].model})),r.a.createElement("div",{className:"player__qr"},r.a.createElement("img",{src:he[e.name].QR}),r.a.createElement("div",{className:"player__qr__text"},"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u043a\u043e\u0434, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0430\u0441\u0441\u043a\u0430\u0437 \u0432 AR")),r.a.createElement("div",{className:"player__audio"},r.a.createElement(H,{file:he[e.name].audio})))},ve=[{ru:"\u0418\u043b\u044c\u044f",en:"Ilya"},{ru:"\u0424\u0435\u0434\u044f",en:"Fedya"},{ru:"\u041c\u0430\u0440\u0442\u0430",en:"Martha"},{ru:"\u041a\u0438\u0440\u0430",en:"Kira"},{ru:"\u041c\u0430\u0440\u043a",en:"Mark"}],be=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e.render=function(){return r.a.createElement("div",{className:"desktop"},ve.map((function(e){return r.a.createElement(v,{name:e.ru},r.a.createElement(_e,{name:e.en}))})))},e}return n}(r.a.Component);n(53);var ge=function(){var e=Object(s.b)();return r.a.createElement(s.a,{handle:e},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App",id:"App"},r.a.createElement(h,{fullScreenToggler:e.enter}),r.a.createElement(be,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.0ab76882.chunk.js.map