(()=>{"use strict";var t,e={6403:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(7537),r=i.n(s),n=i(3645),o=i.n(n)()(r());o.push([t.id,'body{background-color:#000}ul{list-style:none}.nav{backdrop-filter:blur(4px) saturate(250%);background-color:rgba(0,0,0,.6);border:.3vmin solid rgba(0,0,0,.1);filter:sepia(0%);color:rgba(255,255,255,.6666666667);position:absolute;z-index:1;width:fit-content;font-family:"Palatino Linotype",Palatino,Palladio,"URW Palladio L","Book Antiqua",Baskerville,"Bookman Old Style","Bitstream Charter","Nimbus Roman No9 L",Garamond,"Apple Garamond","ITC Garamond Narrow","New Century Schoolbook","Century Schoolbook","Century Schoolbook L",Georgia,serif;padding-right:40px;position:absolute;top:0;left:0;border-top:4px solid rgba(255,255,255,.6666666667);border-bottom:4px solid rgba(255,255,255,0);opacity:1;transition:opacity 4s,top 400ms,left 400ms,border-bottom 2.5s,border-top .4s;transition-timing-function:ease-out}.nav:hover{border-top:4px solid #fff}.nav .active{transition:color 400ms;color:#fff}.nav.unstuck{position:absolute;top:calc(-4rem - 8vw);left:calc(-2rem - 4vw);border-bottom:4px solid #fff;opacity:0;transition:opacity 4s,top 400ms,left 400ms,border-bottom 2.5s}.nav.unstuck:hover{opacity:1;transition:opacity .4s,top 400ms,left 400ms,border-bottom 2.5s}.nav.unstuck:hover .arrow{transition:transform .3s .3s;transform:rotate(0deg)}.nav.unstuck .arrow{transition:transform 1s 1s;transform:rotate(180deg)}.menu{display:flex;flex-direction:column;flex-wrap:wrap;max-height:76px;font-size:calc(1rem + 2vw);letter-spacing:calc(.2rem + .2vw);max-height:calc(3rem + 6vw)}.menu__link{cursor:pointer;width:fit-content;transition:.3s}.menu__link:hover{text-decoration:underline;color:#fff;transition:.3s}.arrows{font-size:calc(1.5rem + 3vw);letter-spacing:calc(.1rem + .1vw);transition:1s;cursor:pointer;text-align:right}.arrows:hover{color:#fff;transition:.3s}.arrows:hover .arrow{transform:rotate(180deg)}.arrows .arrow{transform:rotate(0deg);display:inline-block;transition:transform .3s .3s}.canvas{position:fixed;top:0;left:0;overflow:hidden;height:100vh;width:100vw}.canvas1{animation:20s linear 0s infinite alternate sats}',"",{version:3,sources:["webpack://./assets/style.scss"],names:[],mappings:"AAAA,KAAK,qBAAqB,CAAC,GAAG,eAAe,CAAC,KAAK,wCAAwC,CAAC,+BAA+B,CAAC,kCAAkC,CAAC,gBAAgB,CAAC,mCAAmC,CAAC,iBAAiB,CAAC,SAAS,CAAC,iBAAiB,CAAC,6RAA6R,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,kDAAkD,CAAC,2CAA2C,CAAC,SAAS,CAAC,4EAA4E,CAAC,mCAAmC,CAAC,WAAW,yBAAyB,CAAC,aAAa,sBAAsB,CAAC,UAAU,CAAC,aAAa,iBAAiB,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,4BAA4B,CAAC,SAAS,CAAC,6DAA6D,CAAC,mBAAmB,SAAS,CAAC,8DAA8D,CAAC,0BAA0B,4BAA4B,CAAC,sBAAsB,CAAC,oBAAoB,0BAA0B,CAAC,wBAAwB,CAAC,MAAM,YAAY,CAAC,qBAAqB,CAAC,cAAc,CAAC,eAAe,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,2BAA2B,CAAC,YAAY,cAAc,CAAC,iBAAiB,CAAC,cAAc,CAAC,kBAAkB,yBAAyB,CAAC,UAAU,CAAC,cAAc,CAAC,QAAQ,4BAA4B,CAAC,iCAAiC,CAAC,aAAa,CAAC,cAAc,CAAC,gBAAgB,CAAC,cAAc,UAAU,CAAC,cAAc,CAAC,qBAAqB,wBAAwB,CAAC,eAAe,sBAAsB,CAAC,oBAAoB,CAAC,4BAA4B,CAAC,QAAQ,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,eAAe,CAAC,YAAY,CAAC,WAAW,CAAC,SAAS,+CAA+C",sourcesContent:['body{background-color:#000}ul{list-style:none}.nav{backdrop-filter:blur(4px) saturate(250%);background-color:rgba(0,0,0,.6);border:.3vmin solid rgba(0,0,0,.1);filter:sepia(0%);color:rgba(255,255,255,.6666666667);position:absolute;z-index:1;width:fit-content;font-family:"Palatino Linotype",Palatino,Palladio,"URW Palladio L","Book Antiqua",Baskerville,"Bookman Old Style","Bitstream Charter","Nimbus Roman No9 L",Garamond,"Apple Garamond","ITC Garamond Narrow","New Century Schoolbook","Century Schoolbook","Century Schoolbook L",Georgia,serif;padding-right:40px;position:absolute;top:0;left:0;border-top:4px solid rgba(255,255,255,.6666666667);border-bottom:4px solid rgba(255,255,255,0);opacity:1;transition:opacity 4s,top 400ms,left 400ms,border-bottom 2.5s,border-top .4s;transition-timing-function:ease-out}.nav:hover{border-top:4px solid #fff}.nav .active{transition:color 400ms;color:#fff}.nav.unstuck{position:absolute;top:calc(-4rem - 8vw);left:calc(-2rem - 4vw);border-bottom:4px solid #fff;opacity:0;transition:opacity 4s,top 400ms,left 400ms,border-bottom 2.5s}.nav.unstuck:hover{opacity:1;transition:opacity .4s,top 400ms,left 400ms,border-bottom 2.5s}.nav.unstuck:hover .arrow{transition:transform .3s .3s;transform:rotate(0deg)}.nav.unstuck .arrow{transition:transform 1s 1s;transform:rotate(180deg)}.menu{display:flex;flex-direction:column;flex-wrap:wrap;max-height:76px;font-size:calc(1rem + 2vw);letter-spacing:calc(.2rem + .2vw);max-height:calc(3rem + 6vw)}.menu__link{cursor:pointer;width:fit-content;transition:.3s}.menu__link:hover{text-decoration:underline;color:#fff;transition:.3s}.arrows{font-size:calc(1.5rem + 3vw);letter-spacing:calc(.1rem + .1vw);transition:1s;cursor:pointer;text-align:right}.arrows:hover{color:#fff;transition:.3s}.arrows:hover .arrow{transform:rotate(180deg)}.arrows .arrow{transform:rotate(0deg);display:inline-block;transition:transform .3s .3s}.canvas{position:fixed;top:0;left:0;overflow:hidden;height:100vh;width:100vw}.canvas1{animation:20s linear 0s infinite alternate sats}'],sourceRoot:""}]);const a=o},7486:(t,e,i)=>{i.r(e),i.d(e,{default:()=>f});var s=i(3379),r=i.n(s),n=i(7795),o=i.n(n),a=i(569),h=i.n(a),d=i(3565),l=i.n(d),c=i(9216),u=i.n(c),m=i(4589),g=i.n(m),p=i(6403),A={};A.styleTagTransform=g(),A.setAttributes=l(),A.insert=h().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=u(),r()(p.Z,A);const f=p.Z&&p.Z.locals?p.Z.locals:void 0},3518:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(3607),r=i(5928),n=i(731);class o{textures=[];bounds;x=0;y=0;endPoint;timeSlice=1;duration;alphaStart;scaleModRatio=1e-6;scaleLimit=2;sprite;constructor(t){this.bounds=t,this.setStart()}setStart(){this.x=Math.round((0,r.rndmRng)(.75*this.bounds.right,.25*this.bounds.right)),this.y=Math.round((0,r.rndmRng)(.75*this.bounds.bottom,.25*this.bounds.bottom));const t={x:this.bounds.right/2,y:this.bounds.bottom/2},e=this.x-t.x,i=this.y-t.y,s=i/e,n=Math.atan(s),o=this.bounds.right>this.bounds.bottom?t.x:t.y,a=this.x<t.x?-1*o:o,h=this.y<t.y?-1*o:o,d=h<0&&a>0||h>0&&a<0?-1:1;this.endPoint={x:this.x+a*Math.cos(n),y:this.y+h*Math.sin(n)*d},this.duration=this.getDuration(2.5),this.alphaStart=1-(Math.abs(e)+Math.abs(i))/(t.x+t.y)}getDuration(t){const e={x:this.bounds.right/2,y:this.bounds.bottom/2},i=this.bounds.right>this.bounds.bottom?e.x:e.y,s=(0,r.distanceFrom)(this.x,this.y,e.x,e.y);return 1e3+Math.pow(900*(1-s/i),1.1+(1-s/i)/t)}getStrokeColor(t){const e=t[Math.round((0,r.rndmRng)(t.length-1,0))];return(0,r.hslToHex)(e[0],e[1],Math.round((0,r.rndmRng)(99,60)))}isOutOfBounds(){if(this.sprite.x-this.sprite.width/2>this.bounds.right||this.sprite.x+this.sprite.width/2<this.bounds.left||this.sprite.y+this.sprite.height/2<this.bounds.top||this.sprite.y-this.sprite.height/2>this.bounds.bottom||this.sprite.scale.x>this.scaleLimit+1||this.sprite.scale.y>this.scaleLimit+1){if(1/this.textures.length>Math.random()){const t=this.textures.shift();this.draw(),t.destroy(!0)}this.timeSlice=1,this.sprite.scale.set(1,1),this.setStart(),this.sprite.texture=this.getTexture(),this.setSprite()}}update(){this.isOutOfBounds(),this.timeSlice+=1,this.sprite.scale.set(this.sprite.scale.x*=1.001+.3*this.duration*this.scaleModRatio,this.sprite.scale.y*=1.001+.3*this.duration*this.scaleModRatio),this.sprite.position.set((0,r.lerp)(this.x,this.endPoint.x,this.timeSlice/this.duration),(0,r.lerp)(this.y,this.endPoint.y,this.timeSlice/this.duration)),this.sprite.scale.x>this.scaleLimit&&(this.sprite.alpha=this.scaleLimit+this.alphaStart-this.sprite.scale.x),this.duration*=.999}getTexture(){return this.textures[Math.round((0,r.rndmRng)(this.textures.length-1,0))]}getSprite(){return this.sprite=n.Sprite.from(this.getTexture()),this.setSprite(),this.sprite.anchor.set(.5,.5),this.sprite}draw(){throw new Error("Method not implemented.")}setSprite(){throw new Error("Method not implemented.")}}class a extends o{textures=[];constructor(t){super(t),this.scaleLimit=.3,this.scaleModRatio=7e-7}setSprite(){this.sprite.alpha=this.alphaStart,this.sprite.position.set(this.x,this.y),this.sprite.scale.set(.01,.01)}draw(){const t=new n.Graphics,e={bounds:this.bounds,maxMultiplier:.17,minMultiplier:.05,maxLimit:470,minLimit:150};let i=(0,r.getSize)(e);const o=Math.round((0,r.rndmRng)(3,1)),a=Math.round((0,r.rndmRng)(21,8)),h=this.bounds.right>this.bounds.bottom?this.bounds.right:this.bounds.bottom;for(let e=0;e<a;e++){const s=this.getStrokeColor(g.hueSat);t.lineStyle(Math.round((0,r.rndmRng)(14,6)),s,(0,r.rndmRng)(1,1));const n=Math.round(0+i*Math.cos(2*Math.PI*e/a)),o=Math.round(0+i*Math.sin(2*Math.PI*e/a)),d=Math.round(0+.9*h*Math.cos(2*Math.PI*e/a)),l=Math.round(0+.9*h*Math.sin(2*Math.PI*e/a)),c=(0,r.rndmRng)(16,8),u=(0,r.rndmRng)(16,8);(0,r.drawDashLine)(t,n,o,d,l,2*Math.PI*e/a,c,u)}for(let e=1;e<=o;e++){i=Math.round(i*(0,r.rndmRng)(2.1,1.7));const e=this.getStrokeColor(g.hueSat);t.lineStyle(Math.round((0,r.rndmRng)(7,3)),e,(0,r.rndmRng)(1,.5)),(0,r.createArc)(t,0,0,i),Math.random()>.5&&(0,r.circleShading)(t,0,0,i,e)}this.textures.push(s.AnimationStage.renderer.generateTexture(t))}}class h extends o{textures=[];constructor(t){super(t),this.duration=this.getDuration(3.2),this.scaleLimit=1,this.scaleModRatio=14e-7}setSprite(){this.sprite.alpha=this.alphaStart,this.sprite.position.set(this.x,this.y),this.sprite.scale.set(.02,.02)}draw(){const t=new n.Graphics,e={bounds:this.bounds,maxMultiplier:.1,minMultiplier:.02,maxLimit:370,minLimit:100};let i=(0,r.getSize)(e);const o=Math.round((0,r.rndmRng)(5,2));for(let e=1;e<=o;e++){const e=this.getStrokeColor(g.hueSat);t.lineStyle(Math.round((0,r.rndmRng)(7,3)),e,(0,r.rndmRng)(1,.5)),(0,r.createArc)(t,this.x,this.y,i),Math.random()>.5&&(0,r.circleShading)(t,this.x,this.y,i,e),i*=(0,r.rndmRng)(1.6,1.2)}this.textures.push(s.AnimationStage.renderer.generateTexture(t))}}class d extends o{textures=[];constructor(t){super(t),this.scaleLimit=.3,this.scaleModRatio=7e-7}setSprite(){this.sprite.alpha=this.alphaStart,this.sprite.position.set(this.x,this.y),this.sprite.scale.set(.03,.03)}draw(){const t=new n.Graphics,e=this.bounds.right>this.bounds.bottom?this.bounds.right:this.bounds.bottom,i=this.getStrokeColor(g.hueSat),o=(0,r.rndmRng)(Math.PI,0),a={bounds:this.bounds,maxMultiplier:.12,minMultiplier:.03,maxLimit:410,minLimit:120};let h=(0,r.getSize)(a);for(;h<this.bounds.bottom;){const e=this.getStrokeColor(g.hueSat);t.lineStyle(Math.round((0,r.rndmRng)(7,3)),e,(0,r.rndmRng)(1,.5)),Math.random()<.5?(0,r.createHalfArc)(t,this.x,this.y,h,o):(0,r.createArc)(t,this.x,this.y,h),Math.random()<.5&&(0,r.circleShading)(t,this.x,this.y,h,e),h=Math.round(h*(0,r.rndmRng)(1.7,1.3))}const d=(0,r.findNewPoint)(this.x,this.y,o,.6*-e),l=(0,r.findNewPoint)(d.x,d.y,o,1.2*e);t.lineStyle(Math.round((0,r.rndmRng)(7,3)),i,(0,r.rndmRng)(1,.5)),(0,r.drawDashLine)(t,d.x,d.y,l.x,l.y,o,16,8),this.textures.push(s.AnimationStage.renderer.generateTexture(t))}}class l extends o{textures=[];constructor(t){super(t),this.duration=this.getDuration(3.5),this.scaleLimit=1.1,this.scaleModRatio=11e-7}setSprite(){this.sprite.alpha=this.alphaStart,this.sprite.position.set(this.x,this.y),this.sprite.scale.set(.03,.03)}draw(){let t=0;const e=(0,r.rndmRng)(-50,0),i=(0,r.rndmRng)(350,40),o=(0,r.rndmRng)(300,-100),a=new n.Graphics,h=Math.random()<.5?1:-1;for(let s=e;s<=.8*this.bounds.right;s+=(0,r.rndmRng)(14,6)){a.lineStyle(Math.round((0,r.rndmRng)(5,1)),16711422,(0,r.rndmRng)(.6,.1));const e=.5*Math.PI/(0,r.rndmRng)(30,15),n={x:s+(0,r.rndmRng)(14,6),y:Math.round(o+(s/2-Math.sin(t)*i)*h)};t+=e,a.moveTo(n.x,n.y),a.lineTo(n.x+Math.round((0,r.rndmRng)(9,5)),n.y+Math.round((0,r.rndmRng)(9,5)));const d=Math.round((0,r.rndmRng)(10,1));(0,r.splatterPoints)(n.x,n.y,d,a)}this.textures.push(s.AnimationStage.renderer.generateTexture(a))}}class c extends o{textures=[];constructor(t){super(t),this.scaleLimit=1.6,this.scaleModRatio=1e-6,this.duration=this.getDuration(2.8)}setSprite(){this.sprite.alpha=this.alphaStart,this.sprite.position.set(this.x,this.y),this.sprite.scale.set(.09,.09)}draw(){let t=0;const e=new n.Graphics,i={bounds:this.bounds,maxMultiplier:.3,minMultiplier:.15,maxLimit:400,minLimit:200},o=(0,r.getSize)(i),a=(0,r.shuffle)(g.hueSat);for(let i=0;i<o;i++){t=i<o/40?0:i<o/13?1:i<o/6?2:3;const s=a[t][0],n=a[t][1],h=(0,r.hslToHex)(s,n,Math.round((0,r.rndmRng)(99,60)));e.lineStyle((0,r.rndmRng)(5,1),h,(0,r.rndmRng)(1,.5));const d=(0,r.rndmRng)(2.5,1.5),l=(0,r.rndmRng)(2.5,1.5),c=Math.round((0,r.rndmRng)(o/2/d,o/-2/d)),u=Math.round((0,r.rndmRng)(o/2/l,o/-2/l));e.moveTo(c,u),e.lineTo((0,r.rndmRng)(c-1,c-5),(0,r.rndmRng)(u-1,u-5))}this.textures.push(s.AnimationStage.renderer.generateTexture(e))}}class u extends o{textures=[];constructor(t){super(t),this.scaleLimit=1.5,this.alphaStart=1}setSprite(){this.sprite.alpha=this.alphaStart,this.sprite.position.set(this.x,this.y),this.sprite.scale.set(.09,.09)}draw(){const t=this.getStrokeColor(g.hueSat),e=new n.Graphics;e.lineStyle(Math.round((0,r.rndmRng)(7,3)),t,(0,r.rndmRng)(1,.5)),e.lineTo(Math.round((0,r.rndmRng)(7,3)),Math.round((0,r.rndmRng)(7,3))),this.textures.push(s.AnimationStage.renderer.generateTexture(e))}}class m extends o{textures=[];constructor(t){super(t),this.scaleLimit=5,this.alphaStart=1}setSprite(){this.sprite.alpha=this.alphaStart,this.sprite.position.set(this.x,this.y),this.sprite.scale.set(.05,.05)}draw(){const t=(0,r.rndmRng)(.15*this.bounds.bottom,.05*this.bounds.bottom),e={outR:t,inR:(0,r.rndmRng)(.2*t,.01*t),from:`rgba(${(0,r.rndmRng)(80,54)}, ${(0,r.rndmRng)(40,10)}, ${(0,r.rndmRng)(43,17)}, ${(0,r.rndmRng)(.5,.2)})`,to:`rgba(${(0,r.rndmRng)(80,54)}, ${(0,r.rndmRng)(40,10)}, ${(0,r.rndmRng)(43,17)}, 0)`},i=(0,r.createRadialTexture)(e);this.textures.push(i)}}class g{static debris=[];static hueSat=[[360,0],[204,100],[260,31],[340,89],[179,79]];init(t){const e=Math.round(t.right*t.bottom/17e4),i=Math.round(t.right*t.bottom/37e3),n=Math.round((0,r.rndmRng)(8,5)),o=e<=2?3:Math.round((0,r.rndmRng)(e,3));for(let e=i;e--;){const e=new u(t);for(let t=3;t--;)e.draw();const i=e.getSprite();g.debris.push(e),s.AnimationStage.stage.addChild(i)}for(let i=e;i--;){const e=new c(t);for(let t=3;t--;)e.draw();const i=e.getSprite();g.debris.push(e),s.AnimationStage.stage.addChild(i)}for(let e=n;e--;){const e=new m(t);for(let t=3;t--;)e.draw();const i=e.getSprite();g.debris.push(e),s.AnimationStage.stage.addChild(i)}for(let e=2;e--;){const e=new l(t);for(let t=4;t--;)e.draw();const i=e.getSprite();g.debris.push(e),s.AnimationStage.stage.addChild(i)}for(let e=o;e--;){const e=new h(t);for(let t=5;t--;)e.draw();const i=e.getSprite();g.debris.push(e),s.AnimationStage.stage.addChild(i)}for(let e=3;e--;){const e=new a(t);for(let t=4;t--;)e.draw();const i=e.getSprite();g.debris.push(e),s.AnimationStage.stage.addChild(i)}for(let e=2;e--;){const e=new d(t);for(let t=4;t--;)e.draw();const i=e.getSprite();g.debris.push(e),s.AnimationStage.stage.addChild(i)}}update(){if(g.debris.length>0)for(let t=g.debris.length;t--;)g.debris[t].update()}reset(t=!0){s.AnimationStage.stage.removeChildren(),g.debris.length=0,t&&this.init(s.AnimationStage.bounds)}}e.default=g},4668:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(3607),r=i(5928),n=i(731);class o{bounds;cx;cy;start;speedX;speedY;radius;curr;innerCrcmf;grooves;color;light;strokeColor;graphics;constructor(t){this.bounds=t,this.innerCrcmf=(0,r.rndmRng)(105,18),this.cx=Math.round((0,r.rndmRng)(this.bounds.right-85-this.innerCrcmf,this.bounds.left+85+this.innerCrcmf)),this.cy=Math.round((0,r.rndmRng)(this.bounds.bottom-85-this.innerCrcmf,this.bounds.top+85+this.innerCrcmf)),this.start=Math.random()*Math.PI*2,this.speedX=Math.cos(this.start)/(0,r.rndmRng)(5,1),this.speedY=Math.sin(this.start)/(0,r.rndmRng)(5,1),this.radius=0,this.curr=0,this.grooves=(0,r.rndmRng)(20,5),this.color=h.getFillColors(),this.light=(0,r.rndmRng)(60,10),this.strokeColor=h.getStrokeColors(),this.graphics=new n.Graphics,this.graphics.blendMode=n.BLEND_MODES.XOR}update(){if(this.radius<this.innerCrcmf&&void 0!==this.radius&&this.graphics instanceof n.Graphics)return this.radius+=Math.round(this.innerCrcmf/this.grooves),this.graphics.beginFill((0,r.hslToHex)(Math.round(this.color+=.3),Math.round(100-(0,r.rndmRng)(50,0)),Math.round(this.light+=.1))),this.graphics.drawCircle(this.cx,this.cy,this.radius),this.graphics;this.curr<101?(this.graphics instanceof n.Graphics&&(this.graphics.arc(this.cx,this.cy,Math.round(this.innerCrcmf+(0,r.rndmRng)(67,25)),this.start,2*Math.PI*this.curr/100+this.start,!1).lineStyle(Math.round((0,r.rndmRng)(22,5)),parseInt(`0x${this.strokeColor}`)),this.curr+=(0,r.rndmRng)(3.3,1.7)),this.curr>=101&&Math.random()<.5&&(this.graphics.cacheAsBitmap=!0)):(this.graphics.x+this.cx+this.graphics.width/2>this.bounds.right||this.graphics.x+this.cx-this.graphics.width/2<this.bounds.left?this.speedX*=-1:(this.graphics.y+this.cy-this.graphics.height/2<this.bounds.top||this.graphics.y+this.cy+this.graphics.width/2>this.bounds.bottom)&&(this.speedY*=-1),this.graphics.x-=this.speedX,this.graphics.y-=this.speedY)}}class a{bounds;sprite;startAngle=0;swing=(0,r.rndmRng)(.05,.005);sway=(0,r.rndmRng)(20,0);startX;flipSwing=Math.random()<.5?1:-1;flipSway=Math.random()<.5?1:-1;constructor(t,e,i){return this.bounds=t,this.sprite=i,this.startX=e,this.sprite.x=e,this.sprite.y=(0,r.rndmRng)(-20,-40),this.sprite.height=(0,r.rndmRng)(1.8*this.bounds.bottom,1.5*this.bounds.bottom),this.sprite.anchor.set(.5,(0,r.rndmRng)(.4,.1)),this}update(){this.sprite.rotation>this.startAngle+this.swing&&(this.flipSwing=-1),this.sprite.rotation<=this.startAngle-this.swing&&(this.flipSwing=1),this.sprite.rotation+=this.swing*this.flipSwing/(0,r.rndmRng)(800,200),this.sprite.x>this.startX+this.sway&&(this.flipSway=-1),this.sprite.x<=this.startX-this.sway&&(this.flipSway=1),this.sprite.x+=this.sway*this.flipSway/(0,r.rndmRng)(500,40)}}class h{static circles=[];drapes=[];timeouts=[];static strokeColors=["506EE5","68B2F8","7037CD"];static fillColors=[209,291,263];static sprites;static getSprite(t){return this.sprites[t]}static getStrokeColors(){return this.strokeColors[Math.floor(Math.random()*this.strokeColors.length)]}static getFillColors(){return this.fillColors[Math.floor(Math.random()*this.fillColors.length)]}createDrapes(){const t=new n.Loader;t.add("d58","./assets/images/xorCircles/tile58.png").add("d74","./assets/images/xorCircles/tile74.png").add("d106","./assets/images/xorCircles/tile106.png"),t.load(((t,e)=>{Object.keys(e).forEach((t=>{for(let i=0;i<s.AnimationStage.bounds.right;i++){const r=new n.Sprite(e[t].texture),o=new a(s.AnimationStage.bounds,i,r);this.drapes.push(o),s.AnimationStage.stage.addChild(o.sprite),i+=o.sprite.width}}))}))}newInstance(){return new h}init(t){this.createDrapes();for(let e=Math.round(t.right*t.bottom/5e4);e--;)this.timeouts.push(setTimeout((()=>{const e=new o(t);h.circles.push(e)}),e*(0,r.rndmRng)(2e3,900)))}update(){if(h.circles.length>0)for(let t=h.circles.length;t--;){const e=h.circles[t].update();e&&s.AnimationStage.stage.addChild(e)}if(this.drapes.length>0)for(let t=this.drapes.length;t--;)this.drapes[t].update()}reset(t){for(const t in this.timeouts)window.clearTimeout(t);s.AnimationStage.stage.removeChildren(),h.circles.length=0,t&&this.init(s.AnimationStage.bounds)}}e.default=h},3607:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.app=e.AnimationStage=void 0;const s=i(3518),r=i(4668),n=i(731);i(7486);const o=i(5928);class a{static renderer;static getRenderer(){return this.renderer}static bounds;static getBounds(){return this.bounds}static stage;static getStage(){return this.stage}domElement;renderer;currentAnimation;defaultAnimation;animations={travelCosmos:new s.default,xorCircles:new r.default};constructor(t){this.domElement=document.getElementById(t),this.defaultAnimation="travelCosmos",a.bounds={left:0,top:0,right:0,bottom:0}}toggleUi(){const t=document.getElementsByClassName("nav");t[0].classList.contains("unstuck")?t[0].classList.remove("unstuck"):t[0].classList.add("unstuck")}getAnimation(t){const e=t,i=document.getElementsByClassName("active");i.length>0&&i[0].classList.remove("active");const s=document.getElementsByClassName(e);return s.length>0&&s[0].classList.add("active"),this.animations[e]}switchAnimation(t){this.currentAnimation.reset(!1),this.currentAnimation=this.getAnimation(t),this.currentAnimation.init(a.bounds)}ready(){if(void 0===n)throw this.domElement.classList.add("error"),"PIXI is required to run";const t=document.getElementById("cvs0");a.bounds.right=t.offsetWidth,a.bounds.bottom=t.offsetHeight;const e={backgroundAlpha:0,view:t,clearBeforeRender:!0};Object.assign(e,{width:a.bounds.right,height:a.bounds.bottom});try{this.renderer=n.autoDetectRenderer(e),a.renderer=this.renderer}catch(t){return void alert(t.message)}let i;for(i in a.stage=new n.Container,a.stage.interactiveChildren=!1,this.animations){const t=i,e=document.createElement("li");e.appendChild(document.createTextNode(t)),e.addEventListener("click",(()=>this.switchAnimation(t))),e.classList.add("menu__link",`${t}`),document.getElementById("menu").appendChild(e)}const s=document.getElementsByClassName("arrows");s.length>0&&s[0].addEventListener("click",(()=>this.toggleUi())),window.addEventListener("resize",(0,o.debounce)(this.resize.bind(this),400)),this.startUpdate(),this.currentAnimation=this.getAnimation(this.defaultAnimation),this.currentAnimation.init(a.bounds)}startUpdate(){requestAnimationFrame((()=>this.update()))}update(){this.currentAnimation.update(),this.renderer.render(a.stage),this.startUpdate()}resize(){const t=a.bounds.right,e=a.bounds.bottom,i=this.domElement.offsetWidth,s=this.domElement.offsetHeight;a.bounds.right=i,a.bounds.bottom=s,(Math.abs(t-i)>50||Math.abs(e-s)>50)&&(this.renderer.resize(i,s),this.currentAnimation.reset(!0))}}e.AnimationStage=a,e.app=new a("cvs0-container"),e.app.ready()},5928:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.findNewPoint=e.convertToSprite=e.circleShading=e.createHalfArc=e.createArc=e.splatterPoints=e.getSize=e.drawDashLine=e.createRadialTexture=e.lerp=e.distanceFrom=e.shuffle=e.rndmRng=e.debounce=e.hslToHex=void 0;const s=i(731),r=i(3607);function n(t,e,i){i/=100;const s=e*Math.min(i,1-i)/100,r=e=>{const r=(e+t/30)%12,n=i-s*Math.max(Math.min(r-3,9-r,1),-1);return Math.round(255*n).toString(16).padStart(2,"0")};return parseInt(`0x${r(0)}${r(8)}${r(4)}`)}e.hslToHex=n,e.debounce=function(t,e){let i;return(...s)=>{clearTimeout(i),i=setTimeout((()=>{t(...s)}),e)}},e.rndmRng=(t,e)=>Math.random()*(t-e)+e,e.shuffle=t=>{let e,i=t.length;for(;0!==i;)e=Math.floor(Math.random()*i),i--,[t[i],t[e]]=[t[e],t[i]];return t},e.distanceFrom=(t,e,i,s)=>Math.sqrt(Math.pow(t-i,2)+Math.pow(e-s,2)),e.lerp=function(t,e,i){return t+(e-t)*i},e.createRadialTexture=function(t){const e=t,i=document.createElement("canvas");i.width=2*e.outR,i.height=2*e.outR;const r=i.getContext("2d"),n=r.createRadialGradient(e.outR,e.outR,e.inR,e.outR,e.outR,e.outR);return n.addColorStop(0,e.from),n.addColorStop(1,e.to),r.fillStyle=n,r.fillRect(0,0,2*e.outR,2*e.outR),s.Texture.from(i,{width:2*e.outR,height:2*e.outR})},e.drawDashLine=function(t,i,s,r,n,o,a=16,h=8){let d=i+a*Math.cos(o),l=s+a*Math.sin(o),c=0;const u=(0,e.distanceFrom)(i,s,r,n);for(;c<u;)t.moveTo(d,l),d+=a*Math.cos(o),l+=a*Math.sin(o),t.lineTo(d,l),d+=h*Math.cos(o),l+=h*Math.sin(o),t.closePath(),c+=a+h},e.getSize=function(t){const i=Math.round((0,e.rndmRng)(t.bounds.right*t.maxMultiplier,t.bounds.right*t.minMultiplier)),s=Math.min(i,t.maxLimit),r=Math.max(i,t.minLimit);return i>s?s:r},e.splatterPoints=(t,i,s,r)=>{let o=16711422,a=0,h=0;for(let d=1;d<=s;d++)o=n(204,100,48+Math.round((0,e.rndmRng)(51,0))),r.lineStyle(Math.round((0,e.rndmRng)(9,5)),o,(0,e.rndmRng)(1,.1)),a=Math.round((0,e.rndmRng)(20*d+t,10*d+t)),h=Math.round((0,e.rndmRng)(-10*d+i,-20*d+i)),r.moveTo(a,h),r.lineTo(a+Math.round((0,e.rndmRng)(5,1)),h+Math.round((0,e.rndmRng)(5,1))),r.moveTo(t,i),o=n(260,31,70+Math.round((0,e.rndmRng)(29,0))),r.lineStyle(Math.round((0,e.rndmRng)(9,5)),o,(0,e.rndmRng)(1,.5)),a=Math.round((0,e.rndmRng)(-10*d+t,-20*d+t)),h=Math.round((0,e.rndmRng)(-10*d+i,-20*d+i)),r.moveTo(a,h),r.lineTo(a+Math.round((0,e.rndmRng)(5,1)),h+Math.round((0,e.rndmRng)(5,1))),r.moveTo(t,i),o=n(340,89,74+Math.round((0,e.rndmRng)(25,0))),r.lineStyle(Math.round((0,e.rndmRng)(9,5)),o,(0,e.rndmRng)(1,.5)),a=Math.round((0,e.rndmRng)(-10*d+t,-20*d+t)),h=Math.round((0,e.rndmRng)(20*d+i,10*d+i)),r.moveTo(a,h),r.lineTo(a+Math.round((0,e.rndmRng)(5,1)),h+Math.round((0,e.rndmRng)(5,1))),r.moveTo(t,i),o=n(179,79,74+Math.round((0,e.rndmRng)(25,0))),r.lineStyle(Math.round((0,e.rndmRng)(9,5)),o,(0,e.rndmRng)(1,.5)),a=Math.round((0,e.rndmRng)(20*d+t,10*d+t)),h=Math.round((0,e.rndmRng)(20*d+i,10*d+i)),r.moveTo(a,h),r.lineTo(a+Math.round((0,e.rndmRng)(5,1)),h+Math.round((0,e.rndmRng)(5,1))),r.moveTo(t,i)},e.createArc=function(t,i,s,r){let n=0,o=(0,e.rndmRng)(2*Math.PI,n+.2);for(;n<2*Math.PI;){const a=2*Math.PI/(0,e.rndmRng)(300,150);for(;n<=o;)t.arc(i,s,r,n,n+a),n+=1.5*a,t.closePath();o=(0,e.rndmRng)(2*Math.PI,n+.2)}},e.createHalfArc=function(t,i,s,r,n){const o=Math.random()<.5,a=Math.PI+n,h=Math.PI/(0,e.rndmRng)(150,75),d=o?-1:1;let l=n;for(;l<=a;)t.arc(i,s,r,n,n+h*d,o),l+=1.5*h,t.closePath(),n+=1.5*h*d},e.circleShading=function(t,i,s,r,n){let o=Math.floor((0,e.rndmRng)(2*Math.PI,0)),a=o+1,h=(0,e.rndmRng)(6,3.3);const d=Math.round(r/28);for(let l=0;l<d;l++){let c=o;t.lineStyle(Math.round((0,e.rndmRng)(7,3)),n,(0,e.rndmRng)(.9-.08*l,.8-.08*l)),a=o-l/30+h>2*Math.PI?o-l/6+h-2*Math.PI:o-l/6+h;const u=2*Math.PI/(0,e.rndmRng)(300,150),m=Math.round(r-l/2*18);for(;c<=a;)t.arc(i,s,m,c,c+u),c+=1.5*u,t.closePath();h-=(0,e.rndmRng)(.06*h,.002*h)+d/10*.01,o+=l/(0,e.rndmRng)(70,40)}},e.convertToSprite=function(t,e,i,n){let o=n;return o instanceof s.Texture?o=s.Sprite.from(o):(o=s.Sprite.from(r.app.renderer.generateTexture(o)),o.alpha=i,o.anchor.set(.5,.5),o.position.set(t,e)),o},e.findNewPoint=function(t,e,i,s){const r={x:t,y:e};return r.x=Math.cos(i)*s+t,r.y=Math.sin(i)*s+e,r}}},i={};function s(t){var r=i[t];if(void 0!==r)return r.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=e,t=[],s.O=(e,i,r,n)=>{if(!i){var o=1/0;for(l=0;l<t.length;l++){for(var[i,r,n]=t[l],a=!0,h=0;h<i.length;h++)(!1&n||o>=n)&&Object.keys(s.O).every((t=>s.O[t](i[h])))?i.splice(h--,1):(a=!1,n<o&&(o=n));if(a){t.splice(l--,1);var d=r();void 0!==d&&(e=d)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[i,r,n]},s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t={179:0};s.O.j=e=>0===t[e];var e=(e,i)=>{var r,n,[o,a,h]=i,d=0;if(o.some((e=>0!==t[e]))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(h)var l=h(s)}for(e&&e(i);d<o.length;d++)n=o[d],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(l)},i=self.webpackChunk_2d_animation_gallery=self.webpackChunk_2d_animation_gallery||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),s.nc=void 0;var r=s.O(void 0,[74],(()=>s(3607)));r=s.O(r)})();
//# sourceMappingURL=main.825aed2dec2858eb38b8.js.map