(()=>{"use strict";var t,n={6403:(t,n,i)=>{i.d(n,{Z:()=>a});var e=i(7537),s=i.n(e),r=i(3645),o=i.n(r)()(s());o.push([t.id,'body{background-color:#000}ul{list-style:none}.nav{backdrop-filter:blur(4px) saturate(250%);background-color:rgba(0,0,0,.6);border:.3vmin solid rgba(0,0,0,.1);filter:sepia(0%);color:rgba(255,255,255,.6666666667);position:absolute;z-index:1;width:fit-content;font-family:"Palatino Linotype",Palatino,Palladio,"URW Palladio L","Book Antiqua",Baskerville,"Bookman Old Style","Bitstream Charter","Nimbus Roman No9 L",Garamond,"Apple Garamond","ITC Garamond Narrow","New Century Schoolbook","Century Schoolbook","Century Schoolbook L",Georgia,serif;padding-right:40px;position:absolute;top:0;left:0;border-top:4px solid rgba(255,255,255,.6666666667);border-bottom:4px solid rgba(255,255,255,0);opacity:1;transition:opacity 4s,top 400ms,left 400ms,border-bottom 2.5s,border-top .4s;transition-timing-function:ease-out}.nav:hover{border-top:4px solid #fff}.nav .active{transition:color 400ms;color:#fff}.nav.unstuck{position:absolute;top:calc(-4rem - 8vw);left:calc(-2rem - 4vw);border-bottom:4px solid #fff;opacity:0;transition:opacity 4s,top 400ms,left 400ms,border-bottom 2.5s}.nav.unstuck:hover{opacity:1;transition:opacity .4s,top 400ms,left 400ms,border-bottom 2.5s}.menu{display:flex;flex-direction:column;flex-wrap:wrap;max-height:76px;font-size:calc(1rem + 2vw);letter-spacing:calc(.2rem + .2vw);max-height:calc(3rem + 6vw)}.menu__link{cursor:pointer;width:fit-content;transition:.3s}.menu__link:hover{text-decoration:underline;color:#fff;transition:.3s}.arrows{font-size:calc(1.5rem + 3vw);letter-spacing:calc(.1rem + .1vw);transition:1s;cursor:pointer;text-align:right}.arrows:hover{color:#fff;transition:.3s}.canvas{position:fixed;top:0;left:0;overflow:hidden;height:100vh;width:100vw}.canvas1{animation:20s linear 0s infinite alternate sats}',"",{version:3,sources:["webpack://./assets/style.scss"],names:[],mappings:"AAAA,KAAK,qBAAqB,CAAC,GAAG,eAAe,CAAC,KAAK,wCAAwC,CAAC,+BAA+B,CAAC,kCAAkC,CAAC,gBAAgB,CAAC,mCAAmC,CAAC,iBAAiB,CAAC,SAAS,CAAC,iBAAiB,CAAC,6RAA6R,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,kDAAkD,CAAC,2CAA2C,CAAC,SAAS,CAAC,4EAA4E,CAAC,mCAAmC,CAAC,WAAW,yBAAyB,CAAC,aAAa,sBAAsB,CAAC,UAAU,CAAC,aAAa,iBAAiB,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,4BAA4B,CAAC,SAAS,CAAC,6DAA6D,CAAC,mBAAmB,SAAS,CAAC,8DAA8D,CAAC,MAAM,YAAY,CAAC,qBAAqB,CAAC,cAAc,CAAC,eAAe,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,2BAA2B,CAAC,YAAY,cAAc,CAAC,iBAAiB,CAAC,cAAc,CAAC,kBAAkB,yBAAyB,CAAC,UAAU,CAAC,cAAc,CAAC,QAAQ,4BAA4B,CAAC,iCAAiC,CAAC,aAAa,CAAC,cAAc,CAAC,gBAAgB,CAAC,cAAc,UAAU,CAAC,cAAc,CAAC,QAAQ,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,eAAe,CAAC,YAAY,CAAC,WAAW,CAAC,SAAS,+CAA+C",sourcesContent:['body{background-color:#000}ul{list-style:none}.nav{backdrop-filter:blur(4px) saturate(250%);background-color:rgba(0,0,0,.6);border:.3vmin solid rgba(0,0,0,.1);filter:sepia(0%);color:rgba(255,255,255,.6666666667);position:absolute;z-index:1;width:fit-content;font-family:"Palatino Linotype",Palatino,Palladio,"URW Palladio L","Book Antiqua",Baskerville,"Bookman Old Style","Bitstream Charter","Nimbus Roman No9 L",Garamond,"Apple Garamond","ITC Garamond Narrow","New Century Schoolbook","Century Schoolbook","Century Schoolbook L",Georgia,serif;padding-right:40px;position:absolute;top:0;left:0;border-top:4px solid rgba(255,255,255,.6666666667);border-bottom:4px solid rgba(255,255,255,0);opacity:1;transition:opacity 4s,top 400ms,left 400ms,border-bottom 2.5s,border-top .4s;transition-timing-function:ease-out}.nav:hover{border-top:4px solid #fff}.nav .active{transition:color 400ms;color:#fff}.nav.unstuck{position:absolute;top:calc(-4rem - 8vw);left:calc(-2rem - 4vw);border-bottom:4px solid #fff;opacity:0;transition:opacity 4s,top 400ms,left 400ms,border-bottom 2.5s}.nav.unstuck:hover{opacity:1;transition:opacity .4s,top 400ms,left 400ms,border-bottom 2.5s}.menu{display:flex;flex-direction:column;flex-wrap:wrap;max-height:76px;font-size:calc(1rem + 2vw);letter-spacing:calc(.2rem + .2vw);max-height:calc(3rem + 6vw)}.menu__link{cursor:pointer;width:fit-content;transition:.3s}.menu__link:hover{text-decoration:underline;color:#fff;transition:.3s}.arrows{font-size:calc(1.5rem + 3vw);letter-spacing:calc(.1rem + .1vw);transition:1s;cursor:pointer;text-align:right}.arrows:hover{color:#fff;transition:.3s}.canvas{position:fixed;top:0;left:0;overflow:hidden;height:100vh;width:100vw}.canvas1{animation:20s linear 0s infinite alternate sats}'],sourceRoot:""}]);const a=o},7486:(t,n,i)=>{i.r(n),i.d(n,{default:()=>b});var e=i(3379),s=i.n(e),r=i(7795),o=i.n(r),a=i(569),h=i.n(a),d=i(3565),c=i.n(d),l=i(9216),u=i.n(l),m=i(4589),g=i.n(m),p=i(6403),A={};A.styleTagTransform=g(),A.setAttributes=c(),A.insert=h().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=u(),s()(p.Z,A);const b=p.Z&&p.Z.locals?p.Z.locals:void 0},3518:(t,n,i)=>{Object.defineProperty(n,"__esModule",{value:!0});const e=i(3607),s=i(5928),r=i(731);class o{bounds;x;y;endPoint;timeSlice=1;duration;alphaStart;scaleModRatio=1e-6;scaleModIncrease=1e-4;scaleLimit=2;sprite;constructor(t){this.bounds=t,this.x=Math.round((0,s.rndmRng)(.75*this.bounds.right,.25*this.bounds.right)),this.y=Math.round((0,s.rndmRng)(.75*this.bounds.bottom,.25*this.bounds.bottom));const n={x:this.bounds.right/2,y:this.bounds.bottom/2},i=(this.y-n.y)/(this.x-n.x),e=Math.atan(i),r=this.bounds.right>this.bounds.bottom?n.x:n.y,o=this.x<n.x?-1*r:r,a=this.y<n.y?-1*r:r,h=a<0&&o>0||a>0&&o<0?-1:1;this.endPoint={x:this.x+o*Math.cos(e),y:this.y+a*Math.sin(e)*h},this.duration=this.getDuration(2.5);const d=this.x-n.x,c=this.y-n.y;this.alphaStart=1-(Math.abs(d)+Math.abs(c))/(n.x+n.y)}getDuration(t){const n={x:this.bounds.right/2,y:this.bounds.bottom/2},i=this.bounds.right>this.bounds.bottom?n.x:n.y,e=(0,s.distanceFrom)(this.x,this.y,n.x,n.y);return 100+Math.pow(900*(1-e/i),1.1+(1-e/i)/t)}getStrokeColor(t){const n=t[Math.round((0,s.rndmRng)(t.length-1,0))];return(0,s.hslToHex)(n[0],n[1],Math.round((0,s.rndmRng)(99,60)))}update(){if(this.sprite.position.x-this.sprite.width/2>this.bounds.right||this.sprite.position.x+this.sprite.width/2<this.bounds.left||this.sprite.position.y+this.sprite.height/2<this.bounds.top||this.sprite.position.y-this.sprite.height/2>this.bounds.bottom||this.sprite.scale.x>this.scaleLimit+1||this.sprite.scale.y>this.scaleLimit+1){g.debris.splice(g.debris.indexOf(this),1),e.AnimationStage.stage.removeChild(this.sprite);const t=this.newInstance(),n=t.draw();g.debris.push(t),(n instanceof r.Graphics||n instanceof r.Sprite)&&e.AnimationStage.stage.addChild(n)}this.timeSlice+=1,this.sprite.scale.set(this.sprite.scale.x*=1.001+.3*this.duration*this.scaleModRatio,this.sprite.scale.y*=1.001+.3*this.duration*this.scaleModRatio),this.sprite.position.set((0,s.lerp)(this.x,this.endPoint.x,this.timeSlice/this.duration),(0,s.lerp)(this.y,this.endPoint.y,this.timeSlice/this.duration)),this.sprite.scale.x>this.scaleLimit&&(this.sprite.alpha=this.scaleLimit+this.alphaStart-this.sprite.scale.x),this.duration*=.999}draw(){return{}}newInstance(){return new o(this.bounds)}isOutOfBounds(t){if(t.position.x-t.w/2>this.bounds.right||t.position.x+t.w/2<this.bounds.left||t.position.y+t.h/2<this.bounds.top||t.position.y-t.h/2>this.bounds.bottom||t.scale.x>t.scaleLimit+1||t.scale.y>t.scaleLimit+1)return!0}}class a extends o{constructor(t){super(t),this.scaleLimit=.3,this.scaleModRatio=7e-7}newInstance(){return new a(this.bounds)}draw(){const t=new r.Graphics,n={bounds:this.bounds,maxMultiplier:.17,minMultiplier:.05,maxLimit:470,minLimit:150};let i=(0,s.getSize)(n);const o=Math.round((0,s.rndmRng)(3,1)),a=Math.round((0,s.rndmRng)(21,8)),h=this.bounds.right>this.bounds.bottom?this.bounds.right:this.bounds.bottom;for(let n=0;n<a;n++){const e=this.getStrokeColor(g.hueSat);t.lineStyle(Math.round((0,s.rndmRng)(14,6)),e,(0,s.rndmRng)(1,1));const r=Math.round(this.x+i*Math.cos(2*Math.PI*n/a)),o=Math.round(this.y+i*Math.sin(2*Math.PI*n/a)),d=Math.round(this.x+h*Math.cos(2*Math.PI*n/a)),c=Math.round(this.y+h*Math.sin(2*Math.PI*n/a)),l=(0,s.rndmRng)(16,8),u=(0,s.rndmRng)(16,8);(0,s.drawDashLine)(t,r,o,d,c,2*Math.PI*n/a,l,u)}for(let n=1;n<=o;n++){i=Math.round(i*(0,s.rndmRng)(2.2,1.8));const n=this.getStrokeColor(g.hueSat);t.lineStyle(Math.round((0,s.rndmRng)(7,3)),n,(0,s.rndmRng)(1,.5)),(0,s.createArc)(t,this.x,this.y,i),Math.random()>.5&&(0,s.circleShading)(t,this.x,this.y,i,n)}const d=e.app.renderer.generateTexture(t);return this.sprite=(0,s.convertToSprite)(this.x,this.y,this.alphaStart,d),this.sprite.scale.set(.02,.02),this.sprite}}class h extends o{constructor(t){super(t),this.duration=this.getDuration(3.2),this.scaleLimit=1,this.scaleModRatio=14e-7}newInstance(){return new h(this.bounds)}draw(){const t=new r.Graphics,n={bounds:this.bounds,maxMultiplier:.17,minMultiplier:.05,maxLimit:370,minLimit:100};let i=(0,s.getSize)(n);const o=Math.round((0,s.rndmRng)(5,2));for(let n=1;n<=o;n++){const n=this.getStrokeColor(g.hueSat);t.lineStyle(Math.round((0,s.rndmRng)(7,3)),n,(0,s.rndmRng)(1,.5)),(0,s.createArc)(t,this.x,this.y,i),Math.random()>.5&&(0,s.circleShading)(t,this.x,this.y,i,n),i*=(0,s.rndmRng)(1.6,1.2)}const a=e.app.renderer.generateTexture(t);return this.sprite=(0,s.convertToSprite)(this.x,this.y,this.alphaStart,a),this.sprite.scale.set(.02,.02),this.sprite}}class d extends o{constructor(t){super(t),this.scaleLimit=.3,this.scaleModRatio=7e-7}newInstance(){return new d(this.bounds)}draw(){const t=new r.Graphics,n=this.bounds.right>this.bounds.bottom?this.bounds.right:this.bounds.bottom,i=this.getStrokeColor(g.hueSat),o=(0,s.rndmRng)(Math.PI,0),a={bounds:this.bounds,maxMultiplier:.17,minMultiplier:.05,maxLimit:470,minLimit:150};let h=(0,s.getSize)(a);for(;h<this.bounds.bottom;){const n=this.getStrokeColor(g.hueSat);t.lineStyle(Math.round((0,s.rndmRng)(7,3)),n,(0,s.rndmRng)(1,.5)),Math.random()<.5?(0,s.createHalfArc)(t,this.x,this.y,h,o):(0,s.createArc)(t,this.x,this.y,h),Math.random()<.5&&(0,s.circleShading)(t,this.x,this.y,h,n),h=Math.round(h*(0,s.rndmRng)(1.8,1.4))}const d=(0,s.findNewPoint)(this.x,this.y,o,-n),c=(0,s.findNewPoint)(d.x,d.y,o,2*n);t.lineStyle(Math.round((0,s.rndmRng)(7,3)),i,(0,s.rndmRng)(1,.5)),(0,s.drawDashLine)(t,d.x,d.y,c.x,c.y,o,16,8);const l=e.app.renderer.generateTexture(t);return this.sprite=(0,s.convertToSprite)(this.x,this.y,this.alphaStart,l),this.sprite.scale.set(.02,.02),this.sprite}}class c extends o{constructor(t){super(t),this.duration=this.getDuration(3.5),this.scaleLimit=1.1,this.scaleModRatio=33e-7}newInstance(){return new c(this.bounds)}draw(){let t=0;const n=(0,s.rndmRng)(-250,0),i=(0,s.rndmRng)(350,40),o=(0,s.rndmRng)(300,-100),a=new r.Graphics,h=Math.random()<.5?1:-1;for(let e=n;e<=this.bounds.right+10;e+=(0,s.rndmRng)(14,6)){a.lineStyle(Math.round((0,s.rndmRng)(5,1)),16711422,(0,s.rndmRng)(.6,.1));const n=.5*Math.PI/(0,s.rndmRng)(30,15),r={x:e+(0,s.rndmRng)(14,6),y:Math.round(o+(e/2-Math.sin(t)*i)*h)};t+=n,a.moveTo(r.x,r.y),a.lineTo(r.x+Math.round((0,s.rndmRng)(9,5)),r.y+Math.round((0,s.rndmRng)(9,5)));const d=Math.round((0,s.rndmRng)(10,1));(0,s.splatterPoints)(r.x,r.y,d,a)}const d=e.app.renderer.generateTexture(a);return this.sprite=(0,s.convertToSprite)(this.x,this.y,this.alphaStart,d),this.sprite.scale.set(.01,.01),this.sprite}}class l extends o{constructor(t){super(t),this.scaleLimit=1.6,this.scaleModRatio=1e-6,this.duration=this.getDuration(2.8)}newInstance(){return new l(this.bounds)}draw(){let t=0;const n=new r.Graphics,i={bounds:this.bounds,maxMultiplier:.3,minMultiplier:.15,maxLimit:400,minLimit:200},o=(0,s.getSize)(i),a=(0,s.shuffle)(g.hueSat);for(let i=0;i<o;i++){t=i<o/40?0:i<o/13?1:i<o/6?2:3;const e=a[t][0],r=a[t][1],h=(0,s.hslToHex)(e,r,Math.round((0,s.rndmRng)(99,60)));n.lineStyle((0,s.rndmRng)(5,1),h,(0,s.rndmRng)(1,.5));const d=(0,s.rndmRng)(2.5,1.5),c=(0,s.rndmRng)(2.5,1.5),l=Math.round((0,s.rndmRng)(o/2/d,o/-2/d)),u=Math.round((0,s.rndmRng)(o/2/c,o/-2/c));n.moveTo(l,u),n.lineTo((0,s.rndmRng)(l-1,l-5),(0,s.rndmRng)(u-1,u-5))}const h=e.app.renderer.generateTexture(n);return this.sprite=(0,s.convertToSprite)(this.x,this.y,this.alphaStart,h),this.sprite.scale.set(.1,.1),this.sprite}}class u extends o{constructor(t){super(t),this.scaleLimit=2,this.alphaStart=1}newInstance(){return new u(this.bounds)}draw(){const t=this.getStrokeColor(g.hueSat),n=new r.Graphics;n.lineStyle(Math.round((0,s.rndmRng)(5,1)),t,(0,s.rndmRng)(1,.5)),n.lineTo(Math.round((0,s.rndmRng)(5,1)),Math.round((0,s.rndmRng)(5,1)));const i=e.app.renderer.generateTexture(n);return this.sprite=(0,s.convertToSprite)(this.x,this.y,this.alphaStart,i),this.sprite.scale.set(.3,.3),this.sprite}}class m extends o{constructor(t){super(t),this.scaleLimit=5,this.alphaStart=1}newInstance(){return new m(this.bounds)}draw(){const t=(0,s.rndmRng)(.15*this.bounds.bottom,.05*this.bounds.bottom),n={outR:t,inR:(0,s.rndmRng)(.2*t,.01*t),from:`rgba(${(0,s.rndmRng)(80,54)}, ${(0,s.rndmRng)(40,10)}, ${(0,s.rndmRng)(43,17)}, ${(0,s.rndmRng)(.5,.2)})`,to:`rgba(${(0,s.rndmRng)(80,54)}, ${(0,s.rndmRng)(40,10)}, ${(0,s.rndmRng)(43,17)}, 0)`},i=(0,s.createRadialTexture)(n);return this.sprite=(0,s.convertToSprite)(this.x,this.y,this.alphaStart,i),this.sprite.scale.set(.06,.06),this.sprite}}class g{static debris=[];static hueSat=[[360,0],[204,100],[260,31],[340,89],[179,79]];newInstance(){return new g}init(t){const n=Math.round(t.right*t.bottom/17e4),i=Math.round(t.right*t.bottom/37e3),r=Math.round((0,s.rndmRng)(8,5)),o=n<=1?2:Math.round((0,s.rndmRng)(n,2));for(let n=i;n--;){const n=new u(t),i=n.draw();g.debris.push(n),e.AnimationStage.stage.addChild(i)}for(let i=n;i--;){const n=new l(t),i=n.draw();g.debris.push(n),e.AnimationStage.stage.addChild(i)}for(let n=r;n--;){const n=new m(t),i=n.draw();g.debris.push(n),e.AnimationStage.stage.addChild(i)}for(let n=2;n--;){const n=new c(t),i=n.draw();g.debris.push(n),e.AnimationStage.stage.addChild(i)}for(let n=o;n--;){const n=new h(t),i=n.draw();g.debris.push(n),e.AnimationStage.stage.addChild(i)}for(let n=3;n--;){const n=new a(t),i=n.draw();g.debris.push(n),e.AnimationStage.stage.addChild(i)}for(let n=2;n--;){const n=new d(t),i=n.draw();g.debris.push(n),e.AnimationStage.stage.addChild(i)}}update(){if(g.debris.length>0)for(let t=g.debris.length;t--;)g.debris[t].update()}reset(t=!0){e.AnimationStage.stage.removeChildren(),g.debris.length=0,t&&this.init(e.AnimationStage.bounds)}}n.default=g},4668:(t,n,i)=>{Object.defineProperty(n,"__esModule",{value:!0});const e=i(3607),s=i(5928),r=i(731);class o{bounds;cx;cy;start;speedX;speedY;radius;curr;innerCrcmf;grooves;color;light;strokeColor;graphics;constructor(t){this.bounds=t,this.cx=Math.round((0,s.rndmRng)(this.bounds.right-15,this.bounds.left+15)),this.cy=Math.round((0,s.rndmRng)(this.bounds.bottom-15,this.bounds.top+15)),this.start=Math.random()*Math.PI*2,this.speedX=Math.cos(this.start)/(0,s.rndmRng)(5,1),this.speedY=Math.sin(this.start)/(0,s.rndmRng)(5,1),this.radius=0,this.curr=0,this.innerCrcmf=(0,s.rndmRng)(130,25),this.grooves=(0,s.rndmRng)(35,10),this.color=h.getFillColors(),this.light=(0,s.rndmRng)(60,10),this.strokeColor=h.getStrokeColors(),this.graphics=new r.Graphics,this.graphics.blendMode=r.BLEND_MODES.XOR}update(){if(this.radius<this.innerCrcmf&&void 0!==this.radius)return this.radius+=Math.round(this.innerCrcmf/this.grooves),this.graphics.beginFill((0,s.hslToHex)(Math.round(this.color+=.3),Math.round(100-(0,s.rndmRng)(50,0)),Math.round(this.light+=.1))),this.graphics.drawCircle(this.cx,this.cy,this.radius),this.graphics;this.curr<101?(this.graphics.arc(this.cx,this.cy,Math.round(this.innerCrcmf+(0,s.rndmRng)(45,10)),this.start,2*Math.PI*this.curr/100+this.start,!1).lineStyle(Math.round((0,s.rndmRng)(25,5)),parseInt(`0x${this.strokeColor}`)),this.curr+=(0,s.rndmRng)(2.3,.7),100==this.curr&&(this.graphics.cacheAsBitmap=!0)):(this.graphics.x+this.cx+this.innerCrcmf>this.bounds.right||this.graphics.x+this.cx<this.bounds.left?this.speedX*=-1:(this.graphics.y+this.cy<this.bounds.top||this.graphics.y+this.cy+this.innerCrcmf>this.bounds.bottom)&&(this.speedY*=-1),this.graphics.x-=this.speedX,this.graphics.y-=this.speedY)}}class a{bounds;sprite;startAngle=0;swing=(0,s.rndmRng)(.05,.005);sway=(0,s.rndmRng)(20,0);startX;flipSwing=Math.random()<.5?1:-1;flipSway=Math.random()<.5?1:-1;constructor(t,n,i){return this.bounds=t,this.sprite=i,this.startX=n,this.sprite.x=n,this.sprite.y=-30,this.sprite.height=(0,s.rndmRng)(1.2*this.bounds.bottom,1.1*this.bounds.bottom),this.sprite.anchor.set(.5,(0,s.rndmRng)(.3,.1)),this}update(){this.sprite.rotation>this.startAngle+this.swing&&(this.flipSwing=-1),this.sprite.rotation<=this.startAngle-this.swing&&(this.flipSwing=1),this.sprite.rotation+=this.swing*this.flipSwing/(0,s.rndmRng)(800,200),this.sprite.x>this.startX+this.sway&&(this.flipSway=-1),this.sprite.x<=this.startX-this.sway&&(this.flipSway=1),this.sprite.x+=this.sway*this.flipSway/(0,s.rndmRng)(500,40)}}class h{circles;drapes;timeouts;static strokeColors=["506EE5","68B2F8","7037CD"];static fillColors=[209,291,263];static sprites;constructor(){this.circles=[],this.timeouts=[],this.drapes=[]}static getSprite(t){return this.sprites[t]}static getStrokeColors(){return this.strokeColors[Math.floor(Math.random()*this.strokeColors.length)]}static getFillColors(){return this.fillColors[Math.floor(Math.random()*this.fillColors.length)]}createDrapes(){const t=new r.Loader;t.add("d58","./assets/images/xorCircles/58.png").add("d74","./assets/images/xorCircles/74.png").add("d106","./assets/images/xorCircles/106.png"),t.load(((t,n)=>{Object.keys(n).forEach((t=>{for(let i=0;i<e.AnimationStage.bounds.right;i++){const s=new r.Sprite(n[t].texture),o=new a(e.AnimationStage.bounds,i,s);this.drapes.push(o),e.AnimationStage.stage.addChild(o.sprite),i+=o.sprite.width}}))}))}newInstance(){return new h}init(t){this.createDrapes();for(let n=Math.round(t.right*t.bottom/47e3);n--;)this.timeouts.push(setTimeout((()=>{const n=new o(t);this.circles.push(n)}),n*(0,s.rndmRng)(2e3,900)))}update(){if(this.circles.length>0)for(let t=this.circles.length;t--;){const n=this.circles[t].update();n&&e.AnimationStage.stage.addChild(n)}if(this.drapes.length>0)for(let t=this.drapes.length;t--;)this.drapes[t].update()}reset(t){for(const t in this.timeouts)window.clearTimeout(t);e.AnimationStage.stage.removeChildren(),this.circles.length=0,t&&this.init(e.AnimationStage.bounds)}}n.default=h},3607:(t,n,i)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.app=n.AnimationStage=void 0;const e=i(3518),s=i(4668),r=i(731);i(7486);const o=i(5928);class a{static renderer;static getRenderer(){return this.renderer}static bounds;static getBounds(){return this.bounds}static stage;static getStage(){return this.stage}domElement;renderer;currentAnimation;animations={travelCosmos:new e.default,xorCircles:new s.default};constructor(t){this.domElement=document.getElementById(t),a.bounds={left:0,top:0,right:0,bottom:0}}toggleUi(){const t=document.getElementsByClassName("nav");t[0].classList.contains("unstuck")?t[0].classList.remove("unstuck"):t[0].classList.add("unstuck")}getAnimation(t){const n=t,i=document.getElementsByClassName("active");i.length>0&&i[0].classList.remove("active");const e=document.getElementsByClassName(n);return e.length>0&&e[0].classList.add("active"),this.animations[n]}switchAnimation(t){this.currentAnimation.reset(!1),this.currentAnimation=this.getAnimation(t),this.currentAnimation.init(a.bounds)}ready(){if(void 0===r)throw this.domElement.classList.add("error"),"PIXI is required to run";const t=document.getElementById("cvs0");a.bounds.right=t.offsetWidth,a.bounds.bottom=t.offsetHeight;const n={backgroundAlpha:0,view:t,clearBeforeRender:!0};Object.assign(n,{width:a.bounds.right,height:a.bounds.bottom});try{this.renderer=r.autoDetectRenderer(n),a.renderer=this.renderer}catch(t){return void alert(t.message)}let i;for(i in a.stage=new r.Container,a.stage.interactiveChildren=!1,this.animations){const t=i,n=document.createElement("li");n.appendChild(document.createTextNode(t)),n.addEventListener("click",(()=>this.switchAnimation(t))),n.classList.add("menu__link",`${t}`),document.getElementById("menu").appendChild(n)}const e=document.getElementsByClassName("arrows");e.length>0&&e[0].addEventListener("click",(()=>this.toggleUi())),window.addEventListener("resize",(0,o.debounce)(this.resize.bind(this),400)),this.startUpdate(),this.currentAnimation=this.getAnimation("xorCircles"),this.currentAnimation.init(a.bounds)}startUpdate(){requestAnimationFrame((()=>this.update()))}update(){this.currentAnimation.update(),this.renderer.render(a.stage),this.startUpdate()}resize(){const t=a.bounds.right,n=a.bounds.bottom,i=this.domElement.offsetWidth,e=this.domElement.offsetHeight;a.bounds.right=i,a.bounds.bottom=e,(Math.abs(t-i)>50||Math.abs(n-e)>50)&&(this.renderer.resize(i,e),this.currentAnimation.reset(!0))}}n.AnimationStage=a,n.app=new a("cvs0-container"),n.app.ready()},5928:(t,n,i)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.findNewPoint=n.convertToSprite=n.circleShading=n.createHalfArc=n.createArc=n.splatterPoints=n.getSize=n.drawDashLine=n.createRadialTexture=n.lerp=n.distanceFrom=n.shuffle=n.rndmRng=n.debounce=n.hslToHex=void 0;const e=i(731);function s(t,n,i){i/=100;const e=n*Math.min(i,1-i)/100,s=n=>{const s=(n+t/30)%12,r=i-e*Math.max(Math.min(s-3,9-s,1),-1);return Math.round(255*r).toString(16).padStart(2,"0")};return parseInt(`0x${s(0)}${s(8)}${s(4)}`)}n.hslToHex=s,n.debounce=function(t,n){let i;return(...e)=>{clearTimeout(i),i=setTimeout((()=>{t(...e)}),n)}},n.rndmRng=(t,n)=>Math.random()*(t-n)+n,n.shuffle=t=>{let n,i=t.length;for(;0!==i;)n=Math.floor(Math.random()*i),i--,[t[i],t[n]]=[t[n],t[i]];return t},n.distanceFrom=(t,n,i,e)=>Math.sqrt(Math.pow(t-i,2)+Math.pow(n-e,2)),n.lerp=function(t,n,i){return t+(n-t)*i},n.createRadialTexture=function(t){const n=t,i=document.createElement("canvas");i.width=2*n.outR,i.height=2*n.outR;const s=i.getContext("2d"),r=s.createRadialGradient(n.outR,n.outR,n.inR,n.outR,n.outR,n.outR);return r.addColorStop(0,n.from),r.addColorStop(1,n.to),s.fillStyle=r,s.fillRect(0,0,2*n.outR,2*n.outR),e.Texture.from(i,{width:2*n.outR,height:2*n.outR})},n.drawDashLine=function(t,i,e,s,r,o,a=16,h=8){let d=i+a*Math.cos(o),c=e+a*Math.sin(o),l=0;const u=(0,n.distanceFrom)(i,e,s,r);for(;l<u;)t.moveTo(d,c),d+=a*Math.cos(o),c+=a*Math.sin(o),t.lineTo(d,c),d+=h*Math.cos(o),c+=h*Math.sin(o),t.closePath(),l+=a+h},n.getSize=function(t){const i=Math.round((0,n.rndmRng)(t.bounds.right*t.maxMultiplier,t.bounds.right*t.minMultiplier)),e=Math.min(i,t.maxLimit),s=Math.max(i,t.minLimit);return i>e?e:s},n.splatterPoints=(t,i,e,r)=>{let o=16711422,a=0,h=0;for(let d=1;d<=e;d++)o=s(204,100,48+Math.round((0,n.rndmRng)(51,0))),r.lineStyle(Math.round((0,n.rndmRng)(9,5)),o,(0,n.rndmRng)(1,.1)),a=Math.round((0,n.rndmRng)(10*d+t,5*d+t)),h=Math.round((0,n.rndmRng)(-5*d+i,-10*d+i)),r.moveTo(a,h),r.lineTo(a+Math.round((0,n.rndmRng)(5,1)),h+Math.round((0,n.rndmRng)(5,1))),r.moveTo(t,i),o=s(260,31,70+Math.round((0,n.rndmRng)(29,0))),r.lineStyle(Math.round((0,n.rndmRng)(9,5)),o,(0,n.rndmRng)(1,.5)),a=Math.round((0,n.rndmRng)(-5*d+t,-10*d+t)),h=Math.round((0,n.rndmRng)(-5*d+i,-10*d+i)),r.moveTo(a,h),r.lineTo(a+Math.round((0,n.rndmRng)(5,1)),h+Math.round((0,n.rndmRng)(5,1))),r.moveTo(t,i),o=s(340,89,74+Math.round((0,n.rndmRng)(25,0))),r.lineStyle(Math.round((0,n.rndmRng)(9,5)),o,(0,n.rndmRng)(1,.5)),a=Math.round((0,n.rndmRng)(-5*d+t,-10*d+t)),h=Math.round((0,n.rndmRng)(10*d+i,5*d+i)),r.moveTo(a,h),r.lineTo(a+Math.round((0,n.rndmRng)(5,1)),h+Math.round((0,n.rndmRng)(5,1))),r.moveTo(t,i),o=s(179,79,74+Math.round((0,n.rndmRng)(25,0))),r.lineStyle(Math.round((0,n.rndmRng)(9,5)),o,(0,n.rndmRng)(1,.5)),a=Math.round((0,n.rndmRng)(10*d+t,5*d+t)),h=Math.round((0,n.rndmRng)(10*d+i,5*d+i)),r.moveTo(a,h),r.lineTo(a+Math.round((0,n.rndmRng)(5,1)),h+Math.round((0,n.rndmRng)(5,1))),r.moveTo(t,i)},n.createArc=function(t,i,e,s){let r=0,o=(0,n.rndmRng)(2*Math.PI,r+.2);for(;r<2*Math.PI;){const a=2*Math.PI/(0,n.rndmRng)(300,150);for(;r<=o;)t.arc(i,e,s,r,r+a),r+=1.5*a,t.closePath();o=(0,n.rndmRng)(2*Math.PI,r+.2)}},n.createHalfArc=function(t,i,e,s,r){const o=Math.random()<.5,a=Math.PI+r,h=Math.PI/(0,n.rndmRng)(150,75),d=o?-1:1;let c=r;for(;c<=a;)t.arc(i,e,s,r,r+h*d,o),c+=1.5*h,t.closePath(),r+=1.5*h*d},n.circleShading=function(t,i,e,s,r){let o=Math.floor((0,n.rndmRng)(2*Math.PI,0)),a=o+1,h=(0,n.rndmRng)(6,3.3);const d=Math.round(s/28);for(let c=0;c<d;c++){let l=o;t.lineStyle(Math.round((0,n.rndmRng)(7,3)),r,(0,n.rndmRng)(.9-.08*c,.8-.08*c)),a=o-c/30+h>2*Math.PI?o-c/6+h-2*Math.PI:o-c/6+h;const u=2*Math.PI/(0,n.rndmRng)(300,150),m=Math.round(s-c/2*18);for(;l<=a;)t.arc(i,e,m,l,l+u),l+=1.5*u,t.closePath();h-=(0,n.rndmRng)(.06*h,.002*h)+d/10*.01,o+=c/(0,n.rndmRng)(70,40)}},n.convertToSprite=function(t,n,i,s){const r=new e.Sprite(s);return r.alpha=i,r.anchor.set(.5,.5),r.position.set(t,n),r},n.findNewPoint=function(t,n,i,e){const s={x:t,y:n};return s.x=Math.cos(i)*e+t,s.y=Math.sin(i)*e+n,s}}},i={};function e(t){var s=i[t];if(void 0!==s)return s.exports;var r=i[t]={id:t,loaded:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}e.m=n,t=[],e.O=(n,i,s,r)=>{if(!i){var o=1/0;for(c=0;c<t.length;c++){for(var[i,s,r]=t[c],a=!0,h=0;h<i.length;h++)(!1&r||o>=r)&&Object.keys(e.O).every((t=>e.O[t](i[h])))?i.splice(h--,1):(a=!1,r<o&&(o=r));if(a){t.splice(c--,1);var d=s();void 0!==d&&(n=d)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,s,r]},e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t={179:0};e.O.j=n=>0===t[n];var n=(n,i)=>{var s,r,[o,a,h]=i,d=0;if(o.some((n=>0!==t[n]))){for(s in a)e.o(a,s)&&(e.m[s]=a[s]);if(h)var c=h(e)}for(n&&n(i);d<o.length;d++)r=o[d],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(c)},i=self.webpackChunk_2d_animation_gallery=self.webpackChunk_2d_animation_gallery||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})(),e.nc=void 0;var s=e.O(void 0,[74],(()=>e(3607)));s=e.O(s)})();
//# sourceMappingURL=main.7e95b3eb29caec727f77.js.map