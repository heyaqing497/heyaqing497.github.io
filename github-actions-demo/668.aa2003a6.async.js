!(function(){"use strict";var Iy=Object.defineProperty,Ly=Object.defineProperties;var Dy=Object.getOwnPropertyDescriptors;var z0=Object.getOwnPropertySymbols;var Uy=Object.prototype.hasOwnProperty,Ny=Object.prototype.propertyIsEnumerable;var V0=Math.pow,k0=(Yn,hn,cn)=>hn in Yn?Iy(Yn,hn,{enumerable:!0,configurable:!0,writable:!0,value:cn}):Yn[hn]=cn,va=(Yn,hn)=>{for(var cn in hn||(hn={}))Uy.call(hn,cn)&&k0(Yn,cn,hn[cn]);if(z0)for(var cn of z0(hn))Ny.call(hn,cn)&&k0(Yn,cn,hn[cn]);return Yn},G0=(Yn,hn)=>Ly(Yn,Dy(hn));var as=(Yn,hn,cn)=>new Promise((Ht,Ma)=>{var $n=fi=>{try{er(cn.next(fi))}catch(oo){Ma(oo)}},so=fi=>{try{er(cn.throw(fi))}catch(oo){Ma(oo)}},er=fi=>fi.done?Ht(fi.value):Promise.resolve(fi.value).then($n,so);er((cn=cn.apply(Yn,hn)).next())});(self.webpackChunkheyaqing=self.webpackChunkheyaqing||[]).push([[668],{48460:function(Yn,hn,cn){cn.d(hn,{EK:function(){return dc},Lo:function(){return pd},N9:function(){return Os},cU:function(){return ic},m4:function(){return Ah},o8:function(){return oa},qX:function(){return _o}});let Ht=Float32Array;function Ma(c){const u=Ht;return Ht=c,u}function $n(c,u,f){const x=new Ht(3);return c&&(x[0]=c),u&&(x[1]=u),f&&(x[2]=f),x}function so(c,u,f){return f=f||new Ht(3),f[0]=c[0]+u[0],f[1]=c[1]+u[1],f[2]=c[2]+u[2],f}function er(c,u,f){return f=f||new Ht(3),f[0]=c[0]-u[0],f[1]=c[1]-u[1],f[2]=c[2]-u[2],f}function fi(c,u,f,x){return x=x||new Ht(3),x[0]=c[0]+f*(u[0]-c[0]),x[1]=c[1]+f*(u[1]-c[1]),x[2]=c[2]+f*(u[2]-c[2]),x}function oo(c,u,f,x){return x=x||new Ht(3),x[0]=c[0]+f[0]*(u[0]-c[0]),x[1]=c[1]+f[1]*(u[1]-c[1]),x[2]=c[2]+f[2]*(u[2]-c[2]),x}function cp(c,u,f){return f=f||new Ht(3),f[0]=Math.max(c[0],u[0]),f[1]=Math.max(c[1],u[1]),f[2]=Math.max(c[2],u[2]),f}function Dc(c,u,f){return f=f||new Ht(3),f[0]=Math.min(c[0],u[0]),f[1]=Math.min(c[1],u[1]),f[2]=Math.min(c[2],u[2]),f}function th(c,u,f){return f=f||new Ht(3),f[0]=c[0]*u,f[1]=c[1]*u,f[2]=c[2]*u,f}function di(c,u,f){return f=f||new Ht(3),f[0]=c[0]/u,f[1]=c[1]/u,f[2]=c[2]/u,f}function ti(c,u,f){f=f||new Ht(3);const x=c[2]*u[0]-c[0]*u[2],S=c[0]*u[1]-c[1]*u[0];return f[0]=c[1]*u[2]-c[2]*u[1],f[1]=x,f[2]=S,f}function Cn(c,u){return c[0]*u[0]+c[1]*u[1]+c[2]*u[2]}function pi(c){return Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])}function Ii(c){return c[0]*c[0]+c[1]*c[1]+c[2]*c[2]}function Tr(c,u){const f=c[0]-u[0],x=c[1]-u[1],S=c[2]-u[2];return Math.sqrt(f*f+x*x+S*S)}function Uc(c,u){const f=c[0]-u[0],x=c[1]-u[1],S=c[2]-u[2];return f*f+x*x+S*S}function cs(c,u){u=u||new Ht(3);const f=c[0]*c[0]+c[1]*c[1]+c[2]*c[2],x=Math.sqrt(f);return x>1e-5?(u[0]=c[0]/x,u[1]=c[1]/x,u[2]=c[2]/x):(u[0]=0,u[1]=0,u[2]=0),u}function Nc(c,u){return u=u||new Ht(3),u[0]=-c[0],u[1]=-c[1],u[2]=-c[2],u}function nh(c,u){return u=u||new Ht(3),u[0]=c[0],u[1]=c[1],u[2]=c[2],u}function Li(c,u,f){return f=f||new Ht(3),f[0]=c[0]*u[0],f[1]=c[1]*u[1],f[2]=c[2]*u[2],f}function ih(c,u,f){return f=f||new Ht(3),f[0]=c[0]/u[0],f[1]=c[1]/u[1],f[2]=c[2]/u[2],f}var lp=Object.freeze({__proto__:null,add:so,copy:nh,create:$n,cross:ti,distance:Tr,distanceSq:Uc,divide:ih,divScalar:di,dot:Cn,lerp:fi,lerpV:oo,length:pi,lengthSq:Ii,max:cp,min:Dc,mulScalar:th,multiply:Li,negate:Nc,normalize:cs,setDefaultType:Ma,subtract:er});let It=Float32Array;function Fc(c){const u=It;return It=c,u}function rh(c,u){return u=u||new It(16),u[0]=-c[0],u[1]=-c[1],u[2]=-c[2],u[3]=-c[3],u[4]=-c[4],u[5]=-c[5],u[6]=-c[6],u[7]=-c[7],u[8]=-c[8],u[9]=-c[9],u[10]=-c[10],u[11]=-c[11],u[12]=-c[12],u[13]=-c[13],u[14]=-c[14],u[15]=-c[15],u}function sh(){return new It(16).fill(0)}function Oc(c,u){return u=u||new It(16),u[0]=c[0],u[1]=c[1],u[2]=c[2],u[3]=c[3],u[4]=c[4],u[5]=c[5],u[6]=c[6],u[7]=c[7],u[8]=c[8],u[9]=c[9],u[10]=c[10],u[11]=c[11],u[12]=c[12],u[13]=c[13],u[14]=c[14],u[15]=c[15],u}function Sa(c){return c=c||new It(16),c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function ba(c,u){if(u=u||new It(16),u===c){let Te;return Te=c[1],c[1]=c[4],c[4]=Te,Te=c[2],c[2]=c[8],c[8]=Te,Te=c[3],c[3]=c[12],c[12]=Te,Te=c[6],c[6]=c[9],c[9]=Te,Te=c[7],c[7]=c[13],c[13]=Te,Te=c[11],c[11]=c[14],c[14]=Te,u}const f=c[0*4+0],x=c[0*4+1],S=c[0*4+2],A=c[0*4+3],C=c[1*4+0],I=c[1*4+1],O=c[1*4+2],k=c[1*4+3],X=c[2*4+0],q=c[2*4+1],H=c[2*4+2],ie=c[2*4+3],Z=c[3*4+0],re=c[3*4+1],me=c[3*4+2],Me=c[3*4+3];return u[0]=f,u[1]=C,u[2]=X,u[3]=Z,u[4]=x,u[5]=I,u[6]=q,u[7]=re,u[8]=S,u[9]=O,u[10]=H,u[11]=me,u[12]=A,u[13]=k,u[14]=ie,u[15]=Me,u}function ls(c,u){u=u||new It(16);const f=c[0*4+0],x=c[0*4+1],S=c[0*4+2],A=c[0*4+3],C=c[1*4+0],I=c[1*4+1],O=c[1*4+2],k=c[1*4+3],X=c[2*4+0],q=c[2*4+1],H=c[2*4+2],ie=c[2*4+3],Z=c[3*4+0],re=c[3*4+1],me=c[3*4+2],Me=c[3*4+3],Te=H*Me,Ge=me*ie,Je=O*Me,Be=me*k,Ke=O*ie,_t=H*k,At=S*Me,Pt=me*A,Dt=S*ie,Bt=H*A,on=S*k,nn=O*A,mn=X*re,gn=Z*q,_n=C*re,xn=Z*I,yn=C*q,Mr=X*I,zs=f*re,ks=Z*x,Vs=f*q,Gs=X*x,Hs=f*I,Ws=C*x,Sr=Te*I+Be*q+Ke*re-(Ge*I+Je*q+_t*re),Kt=Ge*x+At*q+Bt*re-(Te*x+Pt*q+Dt*re),jt=Je*x+Pt*I+on*re-(Be*x+At*I+nn*re),Xs=_t*x+Dt*I+nn*q-(Ke*x+Bt*I+on*q),vn=1/(f*Sr+C*Kt+X*jt+Z*Xs);return u[0]=vn*Sr,u[1]=vn*Kt,u[2]=vn*jt,u[3]=vn*Xs,u[4]=vn*(Ge*C+Je*X+_t*Z-(Te*C+Be*X+Ke*Z)),u[5]=vn*(Te*f+Pt*X+Dt*Z-(Ge*f+At*X+Bt*Z)),u[6]=vn*(Be*f+At*C+nn*Z-(Je*f+Pt*C+on*Z)),u[7]=vn*(Ke*f+Bt*C+on*X-(_t*f+Dt*C+nn*X)),u[8]=vn*(mn*k+xn*ie+yn*Me-(gn*k+_n*ie+Mr*Me)),u[9]=vn*(gn*A+zs*ie+Gs*Me-(mn*A+ks*ie+Vs*Me)),u[10]=vn*(_n*A+ks*k+Hs*Me-(xn*A+zs*k+Ws*Me)),u[11]=vn*(Mr*A+Vs*k+Ws*ie-(yn*A+Gs*k+Hs*ie)),u[12]=vn*(_n*H+Mr*me+gn*O-(yn*me+mn*O+xn*H)),u[13]=vn*(Vs*me+mn*S+ks*H-(zs*H+Gs*me+gn*S)),u[14]=vn*(zs*O+Ws*me+xn*S-(Hs*me+_n*S+ks*O)),u[15]=vn*(Hs*H+yn*S+Gs*O-(Vs*O+Ws*H+Mr*S)),u}function oh(c,u,f){f=f||new It(16);const x=c[0],S=c[1],A=c[2],C=c[3],I=c[4+0],O=c[4+1],k=c[4+2],X=c[4+3],q=c[8+0],H=c[8+1],ie=c[8+2],Z=c[8+3],re=c[12+0],me=c[12+1],Me=c[12+2],Te=c[12+3],Ge=u[0],Je=u[1],Be=u[2],Ke=u[3],_t=u[4+0],At=u[4+1],Pt=u[4+2],Dt=u[4+3],Bt=u[8+0],on=u[8+1],nn=u[8+2],mn=u[8+3],gn=u[12+0],_n=u[12+1],xn=u[12+2],yn=u[12+3];return f[0]=x*Ge+I*Je+q*Be+re*Ke,f[1]=S*Ge+O*Je+H*Be+me*Ke,f[2]=A*Ge+k*Je+ie*Be+Me*Ke,f[3]=C*Ge+X*Je+Z*Be+Te*Ke,f[4]=x*_t+I*At+q*Pt+re*Dt,f[5]=S*_t+O*At+H*Pt+me*Dt,f[6]=A*_t+k*At+ie*Pt+Me*Dt,f[7]=C*_t+X*At+Z*Pt+Te*Dt,f[8]=x*Bt+I*on+q*nn+re*mn,f[9]=S*Bt+O*on+H*nn+me*mn,f[10]=A*Bt+k*on+ie*nn+Me*mn,f[11]=C*Bt+X*on+Z*nn+Te*mn,f[12]=x*gn+I*_n+q*xn+re*yn,f[13]=S*gn+O*_n+H*xn+me*yn,f[14]=A*gn+k*_n+ie*xn+Me*yn,f[15]=C*gn+X*_n+Z*xn+Te*yn,f}function ah(c,u,f){return f=f||Sa(),c!==f&&(f[0]=c[0],f[1]=c[1],f[2]=c[2],f[3]=c[3],f[4]=c[4],f[5]=c[5],f[6]=c[6],f[7]=c[7],f[8]=c[8],f[9]=c[9],f[10]=c[10],f[11]=c[11]),f[12]=u[0],f[13]=u[1],f[14]=u[2],f[15]=1,f}function ch(c,u){return u=u||$n(),u[0]=c[12],u[1]=c[13],u[2]=c[14],u}function lh(c,u,f){f=f||$n();const x=u*4;return f[0]=c[x+0],f[1]=c[x+1],f[2]=c[x+2],f}function uh(c,u,f,x){x!==c&&(x=Oc(c,x));const S=f*4;return x[S+0]=u[0],x[S+1]=u[1],x[S+2]=u[2],x}function hh(c,u,f,x,S){S=S||new It(16);const A=Math.tan(Math.PI*.5-.5*c),C=1/(f-x);return S[0]=A/u,S[1]=0,S[2]=0,S[3]=0,S[4]=0,S[5]=A,S[6]=0,S[7]=0,S[8]=0,S[9]=0,S[10]=(f+x)*C,S[11]=-1,S[12]=0,S[13]=0,S[14]=f*x*C*2,S[15]=0,S}function fh(c,u,f,x,S,A,C){return C=C||new It(16),C[0]=2/(u-c),C[1]=0,C[2]=0,C[3]=0,C[4]=0,C[5]=2/(x-f),C[6]=0,C[7]=0,C[8]=0,C[9]=0,C[10]=2/(S-A),C[11]=0,C[12]=(u+c)/(c-u),C[13]=(x+f)/(f-x),C[14]=(A+S)/(S-A),C[15]=1,C}function dh(c,u,f,x,S,A,C){C=C||new It(16);const I=u-c,O=x-f,k=S-A;return C[0]=2*S/I,C[1]=0,C[2]=0,C[3]=0,C[4]=0,C[5]=2*S/O,C[6]=0,C[7]=0,C[8]=(c+u)/I,C[9]=(x+f)/O,C[10]=A/k,C[11]=-1,C[12]=0,C[13]=0,C[14]=S*A/k,C[15]=0,C}let Di,tr,mi;function ph(c,u,f,x){return x=x||new It(16),Di=Di||$n(),tr=tr||$n(),mi=mi||$n(),cs(er(c,u,mi),mi),cs(ti(f,mi,Di),Di),cs(ti(mi,Di,tr),tr),x[0]=Di[0],x[1]=Di[1],x[2]=Di[2],x[3]=0,x[4]=tr[0],x[5]=tr[1],x[6]=tr[2],x[7]=0,x[8]=mi[0],x[9]=mi[1],x[10]=mi[2],x[11]=0,x[12]=c[0],x[13]=c[1],x[14]=c[2],x[15]=1,x}function ao(c,u){return u=u||new It(16),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=c[0],u[13]=c[1],u[14]=c[2],u[15]=1,u}function mh(c,u,f){f=f||new It(16);const x=u[0],S=u[1],A=u[2],C=c[0],I=c[1],O=c[2],k=c[3],X=c[1*4+0],q=c[1*4+1],H=c[1*4+2],ie=c[1*4+3],Z=c[2*4+0],re=c[2*4+1],me=c[2*4+2],Me=c[2*4+3],Te=c[3*4+0],Ge=c[3*4+1],Je=c[3*4+2],Be=c[3*4+3];return c!==f&&(f[0]=C,f[1]=I,f[2]=O,f[3]=k,f[4]=X,f[5]=q,f[6]=H,f[7]=ie,f[8]=Z,f[9]=re,f[10]=me,f[11]=Me),f[12]=C*x+X*S+Z*A+Te,f[13]=I*x+q*S+re*A+Ge,f[14]=O*x+H*S+me*A+Je,f[15]=k*x+ie*S+Me*A+Be,f}function gh(c,u){u=u||new It(16);const f=Math.cos(c),x=Math.sin(c);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=f,u[6]=x,u[7]=0,u[8]=0,u[9]=-x,u[10]=f,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function _h(c,u,f){f=f||new It(16);const x=c[4],S=c[5],A=c[6],C=c[7],I=c[8],O=c[9],k=c[10],X=c[11],q=Math.cos(u),H=Math.sin(u);return f[4]=q*x+H*I,f[5]=q*S+H*O,f[6]=q*A+H*k,f[7]=q*C+H*X,f[8]=q*I-H*x,f[9]=q*O-H*S,f[10]=q*k-H*A,f[11]=q*X-H*C,c!==f&&(f[0]=c[0],f[1]=c[1],f[2]=c[2],f[3]=c[3],f[12]=c[12],f[13]=c[13],f[14]=c[14],f[15]=c[15]),f}function xh(c,u){u=u||new It(16);const f=Math.cos(c),x=Math.sin(c);return u[0]=f,u[1]=0,u[2]=-x,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=x,u[9]=0,u[10]=f,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function co(c,u,f){f=f||new It(16);const x=c[0*4+0],S=c[0*4+1],A=c[0*4+2],C=c[0*4+3],I=c[2*4+0],O=c[2*4+1],k=c[2*4+2],X=c[2*4+3],q=Math.cos(u),H=Math.sin(u);return f[0]=q*x-H*I,f[1]=q*S-H*O,f[2]=q*A-H*k,f[3]=q*C-H*X,f[8]=q*I+H*x,f[9]=q*O+H*S,f[10]=q*k+H*A,f[11]=q*X+H*C,c!==f&&(f[4]=c[4],f[5]=c[5],f[6]=c[6],f[7]=c[7],f[12]=c[12],f[13]=c[13],f[14]=c[14],f[15]=c[15]),f}function yh(c,u){u=u||new It(16);const f=Math.cos(c),x=Math.sin(c);return u[0]=f,u[1]=x,u[2]=0,u[3]=0,u[4]=-x,u[5]=f,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function vh(c,u,f){f=f||new It(16);const x=c[0*4+0],S=c[0*4+1],A=c[0*4+2],C=c[0*4+3],I=c[1*4+0],O=c[1*4+1],k=c[1*4+2],X=c[1*4+3],q=Math.cos(u),H=Math.sin(u);return f[0]=q*x+H*I,f[1]=q*S+H*O,f[2]=q*A+H*k,f[3]=q*C+H*X,f[4]=q*I-H*x,f[5]=q*O-H*S,f[6]=q*k-H*A,f[7]=q*X-H*C,c!==f&&(f[8]=c[8],f[9]=c[9],f[10]=c[10],f[11]=c[11],f[12]=c[12],f[13]=c[13],f[14]=c[14],f[15]=c[15]),f}function Ui(c,u,f){f=f||new It(16);let x=c[0],S=c[1],A=c[2];const C=Math.sqrt(x*x+S*S+A*A);x/=C,S/=C,A/=C;const I=x*x,O=S*S,k=A*A,X=Math.cos(u),q=Math.sin(u),H=1-X;return f[0]=I+(1-I)*X,f[1]=x*S*H+A*q,f[2]=x*A*H-S*q,f[3]=0,f[4]=x*S*H-A*q,f[5]=O+(1-O)*X,f[6]=S*A*H+x*q,f[7]=0,f[8]=x*A*H+S*q,f[9]=S*A*H-x*q,f[10]=k+(1-k)*X,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function Mh(c,u,f,x){x=x||new It(16);let S=u[0],A=u[1],C=u[2];const I=Math.sqrt(S*S+A*A+C*C);S/=I,A/=I,C/=I;const O=S*S,k=A*A,X=C*C,q=Math.cos(f),H=Math.sin(f),ie=1-q,Z=O+(1-O)*q,re=S*A*ie+C*H,me=S*C*ie-A*H,Me=S*A*ie-C*H,Te=k+(1-k)*q,Ge=A*C*ie+S*H,Je=S*C*ie+A*H,Be=A*C*ie-S*H,Ke=X+(1-X)*q,_t=c[0],At=c[1],Pt=c[2],Dt=c[3],Bt=c[4],on=c[5],nn=c[6],mn=c[7],gn=c[8],_n=c[9],xn=c[10],yn=c[11];return x[0]=Z*_t+re*Bt+me*gn,x[1]=Z*At+re*on+me*_n,x[2]=Z*Pt+re*nn+me*xn,x[3]=Z*Dt+re*mn+me*yn,x[4]=Me*_t+Te*Bt+Ge*gn,x[5]=Me*At+Te*on+Ge*_n,x[6]=Me*Pt+Te*nn+Ge*xn,x[7]=Me*Dt+Te*mn+Ge*yn,x[8]=Je*_t+Be*Bt+Ke*gn,x[9]=Je*At+Be*on+Ke*_n,x[10]=Je*Pt+Be*nn+Ke*xn,x[11]=Je*Dt+Be*mn+Ke*yn,c!==x&&(x[12]=c[12],x[13]=c[13],x[14]=c[14],x[15]=c[15]),x}function Sh(c,u){return u=u||new It(16),u[0]=c[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=c[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=c[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function bh(c,u,f){f=f||new It(16);const x=u[0],S=u[1],A=u[2];return f[0]=x*c[0*4+0],f[1]=x*c[0*4+1],f[2]=x*c[0*4+2],f[3]=x*c[0*4+3],f[4]=S*c[1*4+0],f[5]=S*c[1*4+1],f[6]=S*c[1*4+2],f[7]=S*c[1*4+3],f[8]=A*c[2*4+0],f[9]=A*c[2*4+1],f[10]=A*c[2*4+2],f[11]=A*c[2*4+3],c!==f&&(f[12]=c[12],f[13]=c[13],f[14]=c[14],f[15]=c[15]),f}function Bc(c,u,f){f=f||$n();const x=u[0],S=u[1],A=u[2],C=x*c[0*4+3]+S*c[1*4+3]+A*c[2*4+3]+c[3*4+3];return f[0]=(x*c[0*4+0]+S*c[1*4+0]+A*c[2*4+0]+c[3*4+0])/C,f[1]=(x*c[0*4+1]+S*c[1*4+1]+A*c[2*4+1]+c[3*4+1])/C,f[2]=(x*c[0*4+2]+S*c[1*4+2]+A*c[2*4+2]+c[3*4+2])/C,f}function zc(c,u,f){f=f||$n();const x=u[0],S=u[1],A=u[2];return f[0]=x*c[0*4+0]+S*c[1*4+0]+A*c[2*4+0],f[1]=x*c[0*4+1]+S*c[1*4+1]+A*c[2*4+1],f[2]=x*c[0*4+2]+S*c[1*4+2]+A*c[2*4+2],f}function Eh(c,u,f){f=f||$n();const x=ls(c),S=u[0],A=u[1],C=u[2];return f[0]=S*x[0*4+0]+A*x[0*4+1]+C*x[0*4+2],f[1]=S*x[1*4+0]+A*x[1*4+1]+C*x[1*4+2],f[2]=S*x[2*4+0]+A*x[2*4+1]+C*x[2*4+2],f}var Ah=Object.freeze({__proto__:null,axisRotate:Mh,axisRotation:Ui,copy:Oc,create:sh,frustum:dh,getAxis:lh,getTranslation:ch,identity:Sa,inverse:ls,lookAt:ph,multiply:oh,negate:rh,ortho:fh,perspective:hh,rotateX:_h,rotateY:co,rotateZ:vh,rotationX:gh,rotationY:xh,rotationZ:yh,scale:bh,scaling:Sh,setAxis:uh,setDefaultType:Fc,setTranslation:ah,transformDirection:zc,transformNormal:Eh,transformPoint:Bc,translate:mh,translation:ao,transpose:ba});const lo=5120,us=5121,hs=5122,ni=5123,gi=5124,wr=5125,Rr=5126,fs=32819,uo=32820,Sn=33635,ho=5131,Zt=33640,Ea=35899,up=35902,Cr=36269,hp=34042,Ft={};{const c=Ft;c[lo]=Int8Array,c[us]=Uint8Array,c[hs]=Int16Array,c[ni]=Uint16Array,c[gi]=Int32Array,c[wr]=Uint32Array,c[Rr]=Float32Array,c[fs]=Uint16Array,c[uo]=Uint16Array,c[Sn]=Uint16Array,c[ho]=Uint16Array,c[Zt]=Uint32Array,c[Ea]=Uint32Array,c[up]=Uint32Array,c[Cr]=Uint32Array,c[hp]=Uint32Array}function Ni(c){if(c instanceof Int8Array)return lo;if(c instanceof Uint8Array||c instanceof Uint8ClampedArray)return us;if(c instanceof Int16Array)return hs;if(c instanceof Uint16Array)return ni;if(c instanceof Int32Array)return gi;if(c instanceof Uint32Array)return wr;if(c instanceof Float32Array)return Rr;throw new Error("unsupported typed array type")}function kc(c){if(c===Int8Array)return lo;if(c===Uint8Array||c===Uint8ClampedArray)return us;if(c===Int16Array)return hs;if(c===Uint16Array)return ni;if(c===Int32Array)return gi;if(c===Uint32Array)return wr;if(c===Float32Array)return Rr;throw new Error("unsupported typed array type")}function Zn(c){const u=Ft[c];if(!u)throw new Error("unknown gl type");return u}const ds=typeof SharedArrayBuffer!="undefined"?function(u){return u&&u.buffer&&(u.buffer instanceof ArrayBuffer||u.buffer instanceof SharedArrayBuffer)}:function(u){return u&&u.buffer&&u.buffer instanceof ArrayBuffer};var nr=Object.freeze({__proto__:null,getGLTypeForTypedArray:Ni,getGLTypeForTypedArrayType:kc,getTypedArrayTypeForGLType:Zn,isArrayBuffer:ds});function Th(c,u,f){c.forEach(function(x){const S=u[x];S!==void 0&&(f[x]=S)})}function Aa(c,u){Object.keys(u).forEach(function(f){u.hasOwnProperty(f)&&c.hasOwnProperty(f)&&(u[f]=c[f])})}function fo(...c){console.error(...c)}function Ta(...c){console.warn(...c)}const _i=new Map;function bn(c,u){if(!c||typeof c!="object")return!1;let f=_i.get(u);f||(f=new WeakMap,_i.set(u,f));let x=f.get(c);if(x===void 0){const S=Object.prototype.toString.call(c);x=S.substring(8,S.length-1)===u,f.set(c,x)}return x}function ps(c,u){return typeof WebGLBuffer!="undefined"&&bn(u,"WebGLBuffer")}function wa(c,u){return typeof WebGLRenderbuffer!="undefined"&&bn(u,"WebGLRenderbuffer")}function ms(c,u){return typeof WebGLTexture!="undefined"&&bn(u,"WebGLTexture")}function ir(c,u){return typeof WebGLSampler!="undefined"&&bn(u,"WebGLSampler")}const Vc=35044,Ot=34962,Gc=34963,wh=34660,rr=5120,Pr=5121,Hc=5122,Wc=5123,Rh=5124,Xc=5125,Ra=5126,Ir={attribPrefix:""};function Ca(c){Ir.attribPrefix=c}function po(c){Aa(c,Ir)}function mo(c,u,f,x,S){c.bindBuffer(u,f),c.bufferData(u,x,S||Vc)}function gs(c,u,f,x){if(ps(c,u))return u;f=f||Ot;const S=c.createBuffer();return mo(c,f,S,u,x),S}function Pa(c){return c==="indices"}function qc(c){return c===Int8Array||c===Uint8Array}function _s(c){return c.length?c:c.data}const Yc=/coord|texture/i,$c=/color|colour/i;function Zc(c,u){let f;if(Yc.test(c)?f=2:$c.test(c)?f=4:f=3,u%f>0)throw new Error(`Can not guess numComponents for attribute '${c}'. Tried ${f} but ${u} values is not evenly divisible by ${f}. You should specify it.`);return f}function xs(c,u,f){return c.numComponents||c.size||Zc(u,f||_s(c).length)}function Lr(c,u){if(ds(c))return c;if(ds(c.data))return c.data;Array.isArray(c)&&(c={data:c});let f=c.type?go(c.type):void 0;return f||(Pa(u)?f=Uint16Array:f=Float32Array),new f(c.data)}function Jc(c){return typeof c=="number"?c:c?kc(c):Ra}function go(c){return typeof c=="number"?Zn(c):c||Float32Array}function Kc(c,u){return{buffer:u.buffer,numValues:2*3*4,type:Jc(u.type),arrayType:go(u.type)}}function jc(c,u){const f=u.data||u,x=go(u.type),S=f*x.BYTES_PER_ELEMENT,A=c.createBuffer();return c.bindBuffer(Ot,A),c.bufferData(Ot,S,u.drawType||Vc),{buffer:A,numValues:f,type:kc(x),arrayType:x}}function Qc(c,u,f){const x=Lr(u,f);return{arrayType:x.constructor,buffer:gs(c,x,void 0,u.drawType),type:Ni(x),numValues:0}}function Ia(c,u){const f={};return Object.keys(u).forEach(function(x){if(!Pa(x)){const S=u[x],A=S.attrib||S.name||S.attribName||Ir.attribPrefix+x;if(S.value){if(!Array.isArray(S.value)&&!ds(S.value))throw new Error("array.value is not array or typedarray");f[A]={value:S.value}}else{let C;S.buffer&&S.buffer instanceof WebGLBuffer?C=Kc:typeof S=="number"||typeof S.data=="number"?C=jc:C=Qc;const{buffer:I,type:O,numValues:k,arrayType:X}=C(c,S,x),q=S.normalize!==void 0?S.normalize:qc(X),H=xs(S,x,k);f[A]={buffer:I,numComponents:H,type:O,normalize:q,stride:S.stride||0,offset:S.offset||0,divisor:S.divisor===void 0?void 0:S.divisor,drawType:S.drawType}}}}),c.bindBuffer(Ot,null),f}function el(c,u,f,x){f=Lr(f),x!==void 0?(c.bindBuffer(Ot,u.buffer),c.bufferSubData(Ot,x,f)):mo(c,Ot,u.buffer,f,u.drawType)}function tl(c,u){return u===rr||u===Pr?1:u===Hc||u===Wc?2:u===Rh||u===Xc||u===Ra?4:0}const sr=["position","positions","a_position"];function nl(c){let u,f;for(f=0;f<sr.length&&(u=sr[f],!(u in c));++f);f===sr.length&&(u=Object.keys(c)[0]);const x=c[u],S=_s(x).length;if(S===void 0)return 1;const A=xs(x,u),C=S/A;if(S%A>0)throw new Error(`numComponents ${A} not correct for length ${S}`);return C}function il(c,u){let f,x;for(x=0;x<sr.length&&(f=sr[x],!(f in u||(f=Ir.attribPrefix+f,f in u)));++x);x===sr.length&&(f=Object.keys(u)[0]);const S=u[f];if(!S.buffer)return 1;c.bindBuffer(Ot,S.buffer);const A=c.getBufferParameter(Ot,wh);c.bindBuffer(Ot,null);const C=tl(c,S.type),I=A/C,O=S.numComponents||S.size,k=I/O;if(k%1!==0)throw new Error(`numComponents ${O} not correct for length ${length}`);return k}function _o(c,u,f){const x=Ia(c,u),S=Object.assign({},f||{});S.attribs=Object.assign({},f?f.attribs:{},x);const A=u.indices;if(A){const C=Lr(A,"indices");S.indices=gs(c,C,Gc),S.numElements=C.length,S.elementType=Ni(C)}else S.numElements||(S.numElements=il(c,S.attribs));return S}function xo(c,u,f){const x=f==="indices"?Gc:Ot,S=Lr(u,f);return gs(c,S,x)}function La(c,u){const f={};return Object.keys(u).forEach(function(x){f[x]=xo(c,u[x],x)}),u.indices?(f.numElements=u.indices.length,f.elementType=Ni(Lr(u.indices))):f.numElements=nl(u),f}var Ch=Object.freeze({__proto__:null,createAttribsFromArrays:Ia,createBuffersFromArrays:La,createBufferFromArray:xo,createBufferFromTypedArray:gs,createBufferInfoFromArrays:_o,setAttribInfoBufferFromArray:el,setAttributePrefix:Ca,setAttributeDefaults_:po,getNumComponents_:xs,getArray_:_s});const or=_s,rl=xs;function Da(c,u){let f=0;return c.push=function(){for(let x=0;x<arguments.length;++x){const S=arguments[x];if(S instanceof Array||ds(S))for(let A=0;A<S.length;++A)c[f++]=S[A];else c[f++]=S}},c.reset=function(x){f=x||0},c.numComponents=u,Object.defineProperty(c,"numElements",{get:function(){return this.length/this.numComponents|0}}),c}function pt(c,u,f){const x=f||Float32Array;return Da(new x(c*u),c)}function Ph(c){return c!=="indices"}function Ih(c){const u=c.indices,f={},x=u.length;function S(A){const C=c[A],I=C.numComponents,O=pt(I,x,C.constructor);for(let k=0;k<x;++k){const q=u[k]*I;for(let H=0;H<I;++H)O.push(C[q+H])}f[A]=O}return Object.keys(c).filter(Ph).forEach(S),f}function Lh(c){if(c.indices)throw new Error("can not flatten normals of indexed vertices. deindex them first");const u=c.normal,f=u.length;for(let x=0;x<f;x+=9){const S=u[x+0],A=u[x+1],C=u[x+2],I=u[x+3],O=u[x+4],k=u[x+5],X=u[x+6],q=u[x+7],H=u[x+8];let ie=S+I+X,Z=A+O+q,re=C+k+H;const me=Math.sqrt(ie*ie+Z*Z+re*re);ie/=me,Z/=me,re/=me,u[x+0]=ie,u[x+1]=Z,u[x+2]=re,u[x+3]=ie,u[x+4]=Z,u[x+5]=re,u[x+6]=ie,u[x+7]=Z,u[x+8]=re}return c}function Dr(c,u,f){const x=c.length,S=new Float32Array(3);for(let A=0;A<x;A+=3)f(u,[c[A],c[A+1],c[A+2]],S),c[A]=S[0],c[A+1]=S[1],c[A+2]=S[2]}function yo(c,u,f){f=f||$n();const x=u[0],S=u[1],A=u[2];return f[0]=x*c[0*4+0]+S*c[0*4+1]+A*c[0*4+2],f[1]=x*c[1*4+0]+S*c[1*4+1]+A*c[1*4+2],f[2]=x*c[2*4+0]+S*c[2*4+1]+A*c[2*4+2],f}function vo(c,u){return Dr(c,u,zc),c}function ar(c,u){return Dr(c,ls(u),yo),c}function cr(c,u){return Dr(c,u,Bc),c}function ys(c,u){return Object.keys(c).forEach(function(f){const x=c[f];f.indexOf("pos")>=0?cr(x,u):f.indexOf("tan")>=0||f.indexOf("binorm")>=0?vo(x,u):f.indexOf("norm")>=0&&ar(x,u)}),c}function vs(c,u,f){return c=c||2,u=u||0,f=f||0,c*=.5,{position:{numComponents:2,data:[u+-1*c,f+-1*c,u+1*c,f+-1*c,u+-1*c,f+1*c,u+1*c,f+1*c]},normal:[0,0,1,0,0,1,0,0,1,0,0,1],texcoord:[0,0,1,0,0,1,1,1],indices:[0,1,2,2,1,3]}}function Mo(c,u,f,x,S){c=c||1,u=u||1,f=f||1,x=x||1,S=S||Sa();const A=(f+1)*(x+1),C=pt(3,A),I=pt(3,A),O=pt(2,A);for(let H=0;H<=x;H++)for(let ie=0;ie<=f;ie++){const Z=ie/f,re=H/x;C.push(c*Z-c*.5,0,u*re-u*.5),I.push(0,1,0),O.push(Z,re)}const k=f+1,X=pt(3,f*x*2,Uint16Array);for(let H=0;H<x;H++)for(let ie=0;ie<f;ie++)X.push((H+0)*k+ie,(H+1)*k+ie,(H+0)*k+ie+1),X.push((H+1)*k+ie,(H+1)*k+ie+1,(H+0)*k+ie+1);return ys({position:C,normal:I,texcoord:O,indices:X},S)}function sl(c,u,f,x,S,A,C){if(u<=0||f<=0)throw new Error("subdivisionAxis and subdivisionHeight must be > 0");x=x||0,S=S||Math.PI,A=A||0,C=C||Math.PI*2;const I=S-x,O=C-A,k=(u+1)*(f+1),X=pt(3,k),q=pt(3,k),H=pt(2,k);for(let re=0;re<=f;re++)for(let me=0;me<=u;me++){const Me=me/u,Te=re/f,Ge=O*Me+A,Je=I*Te+x,Be=Math.sin(Ge),Ke=Math.cos(Ge),_t=Math.sin(Je),At=Math.cos(Je),Pt=Ke*_t,Dt=At,Bt=Be*_t;X.push(c*Pt,c*Dt,c*Bt),q.push(Pt,Dt,Bt),H.push(1-Me,Te)}const ie=u+1,Z=pt(3,u*f*2,Uint16Array);for(let re=0;re<u;re++)for(let me=0;me<f;me++)Z.push((me+0)*ie+re,(me+0)*ie+re+1,(me+1)*ie+re),Z.push((me+1)*ie+re,(me+0)*ie+re+1,(me+1)*ie+re+1);return{position:X,normal:q,texcoord:H,indices:Z}}const fp=[[3,7,5,1],[6,2,0,4],[6,7,3,2],[0,1,5,4],[7,6,4,5],[2,3,1,0]];function ol(c){c=c||1;const u=c/2,f=[[-u,-u,-u],[+u,-u,-u],[-u,+u,-u],[+u,+u,-u],[-u,-u,+u],[+u,-u,+u],[-u,+u,+u],[+u,+u,+u]],x=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],S=[[1,0],[0,0],[0,1],[1,1]],A=6*4,C=pt(3,A),I=pt(3,A),O=pt(2,A),k=pt(3,6*2,Uint16Array);for(let X=0;X<6;++X){const q=fp[X];for(let ie=0;ie<4;++ie){const Z=f[q[ie]],re=x[X],me=S[ie];C.push(Z),I.push(re),O.push(me)}const H=4*X;k.push(H+0,H+1,H+2),k.push(H+0,H+2,H+3)}return{position:C,normal:I,texcoord:O,indices:k}}function So(c,u,f,x,S,A,C){if(x<3)throw new Error("radialSubdivisions must be 3 or greater");if(S<1)throw new Error("verticalSubdivisions must be 1 or greater");const I=A===void 0?!0:A,O=C===void 0?!0:C,k=(I?2:0)+(O?2:0),X=(x+1)*(S+1+k),q=pt(3,X),H=pt(3,X),ie=pt(2,X),Z=pt(3,x*(S+k/2)*2,Uint16Array),re=x+1,me=Math.atan2(c-u,f),Me=Math.cos(me),Te=Math.sin(me),Ge=I?-2:0,Je=S+(O?2:0);for(let Be=Ge;Be<=Je;++Be){let Ke=Be/S,_t=f*Ke,At;Be<0?(_t=0,Ke=1,At=c):Be>S?(_t=f,Ke=1,At=u):At=c+(u-c)*(Be/S),(Be===-2||Be===S+2)&&(At=0,Ke=0),_t-=f/2;for(let Pt=0;Pt<re;++Pt){const Dt=Math.sin(Pt*Math.PI*2/x),Bt=Math.cos(Pt*Math.PI*2/x);q.push(Dt*At,_t,Bt*At),Be<0?H.push(0,-1,0):Be>S?H.push(0,1,0):At===0?H.push(0,0,0):H.push(Dt*Me,Te,Bt*Me),ie.push(Pt/x,1-Ke)}}for(let Be=0;Be<S+k;++Be)if(!(Be===1&&I||Be===S+k-2&&O))for(let Ke=0;Ke<x;++Ke)Z.push(re*(Be+0)+0+Ke,re*(Be+0)+1+Ke,re*(Be+1)+1+Ke),Z.push(re*(Be+0)+0+Ke,re*(Be+1)+1+Ke,re*(Be+1)+0+Ke);return{position:q,normal:H,texcoord:ie,indices:Z}}function al(c,u){u=u||[];const f=[];for(let x=0;x<c.length;x+=4){const S=c[x],A=c.slice(x+1,x+4);A.push.apply(A,u);for(let C=0;C<S;++C)f.push.apply(f,A)}return f}function xi(){const c=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],u=[.22,.19,.22,.79,.34,.19,.22,.79,.34,.79,.34,.19,.34,.19,.34,.31,.62,.19,.34,.31,.62,.31,.62,.19,.34,.43,.34,.55,.49,.43,.34,.55,.49,.55,.49,.43,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0],f=al([18,0,0,1,18,0,0,-1,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,-1,0,6,-1,0,0]),x=al([18,200,70,120,18,80,70,200,6,70,200,210,6,200,200,70,6,210,100,70,6,210,160,70,6,70,180,210,6,100,70,210,6,76,210,100,6,140,210,80,6,90,130,110,6,160,160,220],[255]),S=c.length/3,A={position:pt(3,S),texcoord:pt(2,S),normal:pt(3,S),color:pt(4,S,Uint8Array),indices:pt(3,S/3,Uint16Array)};A.position.push(c),A.texcoord.push(u),A.normal.push(f),A.color.push(x);for(let C=0;C<S;++C)A.indices.push(C);return A}function bo(c,u,f,x,S,A,C){if(S<=0)throw new Error("subdivisionDown must be > 0");A=A||0,C=C||1;const I=2,O=C-A,k=(S+1)*2*(2+I),X=pt(3,k),q=pt(3,k),H=pt(2,k);function ie(Te,Ge,Je){return Te+(Ge-Te)*Je}function Z(Te,Ge,Je,Be,Ke,_t){for(let At=0;At<=S;At++){const Pt=Ge/(I-1),Dt=At/S,Bt=(Pt-.5)*2,on=(A+Dt*O)*Math.PI,nn=Math.sin(on),mn=Math.cos(on),gn=ie(c,Te,nn),_n=Bt*x,xn=mn*c,yn=nn*gn;X.push(_n,xn,yn);const Mr=so(Li([0,nn,mn],Je),Be);q.push(Mr),H.push(Pt*Ke+_t,Dt)}}for(let Te=0;Te<I;Te++){const Ge=(Te/(I-1)-.5)*2;Z(u,Te,[1,1,1],[0,0,0],1,0),Z(u,Te,[0,0,0],[Ge,0,0],0,0),Z(f,Te,[1,1,1],[0,0,0],1,0),Z(f,Te,[0,0,0],[Ge,0,0],0,1)}const re=pt(3,S*2*(2+I),Uint16Array);function me(Te,Ge){for(let Je=0;Je<S;++Je)re.push(Te+Je+0,Te+Je+1,Ge+Je+0),re.push(Te+Je+1,Ge+Je+1,Ge+Je+0)}const Me=S+1;return me(Me*0,Me*4),me(Me*5,Me*7),me(Me*6,Me*2),me(Me*3,Me*1),{position:X,normal:q,texcoord:H,indices:re}}function ii(c,u,f,x,S,A){return So(c,c,u,f,x,S,A)}function zn(c,u,f,x,S,A){if(f<3)throw new Error("radialSubdivisions must be 3 or greater");if(x<3)throw new Error("verticalSubdivisions must be 3 or greater");S=S||0,A=A||Math.PI*2;const C=A-S,I=f+1,O=x+1,k=I*O,X=pt(3,k),q=pt(3,k),H=pt(2,k),ie=pt(3,f*x*2,Uint16Array);for(let Z=0;Z<O;++Z){const re=Z/x,me=re*Math.PI*2,Me=Math.sin(me),Te=c+Me*u,Ge=Math.cos(me),Je=Ge*u;for(let Be=0;Be<I;++Be){const Ke=Be/f,_t=S+Ke*C,At=Math.sin(_t),Pt=Math.cos(_t),Dt=At*Te,Bt=Pt*Te,on=At*Me,nn=Pt*Me;X.push(Dt,Je,Bt),q.push(on,Ge,nn),H.push(Ke,1-re)}}for(let Z=0;Z<x;++Z)for(let re=0;re<f;++re){const me=1+re,Me=1+Z;ie.push(I*Z+re,I*Me+re,I*Z+me),ie.push(I*Me+re,I*Me+me,I*Z+me)}return{position:X,normal:q,texcoord:H,indices:ie}}function ri(c,u,f,x,S){if(u<3)throw new Error("divisions must be at least 3");f=f||1,S=S||1,x=x||0;const A=(u+1)*(f+1),C=pt(3,A),I=pt(3,A),O=pt(2,A),k=pt(3,f*u*2,Uint16Array);let X=0;const q=c-x,H=u+1;for(let ie=0;ie<=f;++ie){const Z=x+q*Math.pow(ie/f,S);for(let re=0;re<=u;++re){const me=2*Math.PI*re/u,Me=Z*Math.cos(me),Te=Z*Math.sin(me);if(C.push(Me,0,Te),I.push(0,1,0),O.push(1-re/u,ie/f),ie>0&&re!==u){const Ge=X+(re+1),Je=X+re,Be=X+re-H,Ke=X+(re+1)-H;k.push(Ge,Je,Be),k.push(Ge,Be,Ke)}}X+=u+1}return{position:C,normal:I,texcoord:O,indices:k}}function Ua(c){return Math.random()*c|0}function Eo(c,u){u=u||{};const f=c.position.numElements,x=pt(4,f,Uint8Array),S=u.rand||function(A,C){return C<3?Ua(256):255};if(c.color=x,c.indices)for(let A=0;A<f;++A)x.push(S(A,0),S(A,1),S(A,2),S(A,3));else{const A=u.vertsPerColor||3,C=f/A;for(let I=0;I<C;++I){const O=[S(I,0),S(I,1),S(I,2),S(I,3)];for(let k=0;k<A;++k)x.push(O)}}return c}function kn(c){return function(u){const f=c.apply(this,Array.prototype.slice.call(arguments,1));return La(u,f)}}function vt(c){return function(u){const f=c.apply(null,Array.prototype.slice.call(arguments,1));return _o(u,f)}}const Ao=["numComponents","size","type","normalize","stride","offset","attrib","name","attribName"];function Ur(c,u,f,x){x=x||0;const S=c.length;for(let A=0;A<S;++A)u[f+A]=c[A]+x}function Dh(c,u){const f=or(c),x=new f.constructor(u);let S=x;return f.numComponents&&f.numElements&&Da(x,f.numComponents),c.data&&(S={data:x},Th(Ao,c,S)),S}function Nr(c){const u={};let f;for(let I=0;I<c.length;++I){const O=c[I];Object.keys(O).forEach(function(k){u[k]||(u[k]=[]),!f&&k!=="indices"&&(f=k);const X=O[k],q=rl(X,k),ie=or(X).length/q;u[k].push(ie)})}function x(I){let O=0,k;for(let X=0;X<c.length;++X){const H=c[X][I],ie=or(H);O+=ie.length,(!k||H.data)&&(k=H)}return{length:O,spec:k}}function S(I,O,k){let X=0,q=0;for(let H=0;H<c.length;++H){const Z=c[H][I],re=or(Z);I==="indices"?(Ur(re,k,q,X),X+=O[H]):Ur(re,k,q),q+=re.length}}const A=u[f],C={};return Object.keys(u).forEach(function(I){const O=x(I),k=Dh(O.spec,O.length);S(I,A,or(k)),C[I]=k}),C}function dp(c){const u={};return Object.keys(c).forEach(function(f){const x=c[f],S=or(x),A=Dh(x,S.length);Ur(S,or(A),0),u[f]=A}),u}const pp=vt(xi),mp=kn(xi),gp=vt(ol),_p=kn(ol),xp=vt(Mo),yp=kn(Mo),vp=vt(sl),Mp=kn(sl),Sp=vt(So),bp=kn(So),Ep=vt(vs),Ap=kn(vs),Na=vt(bo),cl=kn(bo),Uh=vt(ii),Nh=kn(ii),ll=vt(zn),Fh=kn(zn),Oh=vt(ri),Bh=kn(ri);var W0=Object.freeze({__proto__:null,create3DFBufferInfo:pp,create3DFBuffers:mp,create3DFVertices:xi,createAugmentedTypedArray:pt,createCubeBufferInfo:gp,createCubeBuffers:_p,createCubeVertices:ol,createPlaneBufferInfo:xp,createPlaneBuffers:yp,createPlaneVertices:Mo,createSphereBufferInfo:vp,createSphereBuffers:Mp,createSphereVertices:sl,createTruncatedConeBufferInfo:Sp,createTruncatedConeBuffers:bp,createTruncatedConeVertices:So,createXYQuadBufferInfo:Ep,createXYQuadBuffers:Ap,createXYQuadVertices:vs,createCresentBufferInfo:Na,createCresentBuffers:cl,createCresentVertices:bo,createCrescentBufferInfo:Na,createCrescentBuffers:cl,createCrescentVertices:bo,createCylinderBufferInfo:Uh,createCylinderBuffers:Nh,createCylinderVertices:ii,createTorusBufferInfo:ll,createTorusBuffers:Fh,createTorusVertices:zn,createDiscBufferInfo:Oh,createDiscBuffers:Bh,createDiscVertices:ri,deindexVertices:Ih,flattenNormals:Lh,makeRandomVertexColors:Eo,reorientDirections:vo,reorientNormals:ar,reorientPositions:cr,reorientVertices:ys,concatVertices:Nr,duplicateVertices:dp});function Ms(c){return!!c.texStorage2D}function wp(c){return!c.texStorage2D}const To=function(){const c={},u={};function f(x){const S=x.constructor.name;if(!c[S]){for(const A in x)if(typeof x[A]=="number"){const C=u[x[A]];u[x[A]]=C?`${C} | ${A}`:A}c[S]=!0}}return function(S,A){return f(S),u[A]||(typeof A=="number"?`0x${A.toString(16)}`:A)}}();var X0=Object.freeze({__proto__:null,glEnumToString:To,isWebGL1:wp,isWebGL2:Ms});const yi={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},Ss=ds,zh=function(){let c;return function(){return c=c||(typeof document!="undefined"&&document.createElement?document.createElement("canvas").getContext("2d"):null),c}}(),wo=6406,Pn=6407,Mt=6408,Fr=6409,Fi=6410,Wt=6402,Ro=34041,si=33071,Or=9728,Vn=9729,Et=3553,Jn=34067,Oi=32879,Bi=35866,zi=34069,kh=34070,Vh=34071,Gh=34072,Hh=34073,Wh=34074,Oa=10241,Ba=10240,Co=10242,Po=10243,ul=32882,za=33082,Xh=33083,Io=33084,qh=33085,En=34892,it=34893,hl=3317,ue=3314,rt=32878,Lo=3316,ka=3315,fl=32877,Br=37443,bs=37441,Yh=37440,dl=33321,pl=36756,ml=33325,gl=33326,Do=33330,$h=33329,Rt=33338,zr=33337,Va=33340,kr=33339,_l=33323,Zh=36757,Vr=33327,Ga=33328,Jh=33336,fn=33335,Ct=33332,Kh=33331,lr=33334,Ha=33333,Rp=32849,xl=35905,Cp=36194,Gn=36758,U=35898,Wa=35901,yl=34843,In=34837,vi=36221,Kn=36239,Uo=36215,Gr=36233,Hr=36209,Wr=36227,ki=32856,Vi=35907,ur=36759,Es=32855,No=32854,Fo=32857,hr=34842,Xa=34836,jh=36220,As=36238,qa=36975,An=36214,Mi=36232,Ya=36226,Oo=36208,Gi=33189,$a=33190,Bo=36012,Za=36013,Ts=35056,He=5120,wt=5121,Ln=5122,Xr=5123,zo=5124,Dn=5125,en=5126,Un=32819,Ja=32820,Ka=33635,zt=5131,fr=36193,ja=33640,vl=35899,qr=35902,Si=36269,ko=34042,bi=33319,dr=33320,ws=6403,Hi=36244,Wi=36248,Ei=36249,Ml={};{const c=Ml;c[wo]={numColorComponents:1},c[Fr]={numColorComponents:1},c[Fi]={numColorComponents:2},c[Pn]={numColorComponents:3},c[Mt]={numColorComponents:4},c[ws]={numColorComponents:1},c[Hi]={numColorComponents:1},c[bi]={numColorComponents:2},c[dr]={numColorComponents:2},c[Pn]={numColorComponents:3},c[Wi]={numColorComponents:3},c[Mt]={numColorComponents:4},c[Ei]={numColorComponents:4},c[Wt]={numColorComponents:1},c[Ro]={numColorComponents:2}}let Qa;function Yr(c){if(!Qa){const u={};u[wo]={textureFormat:wo,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[wt,zt,fr,en]},u[Fr]={textureFormat:Fr,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[wt,zt,fr,en]},u[Fi]={textureFormat:Fi,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[wt,zt,fr,en]},u[Pn]={textureFormat:Pn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[wt,zt,fr,en,Ka]},u[Mt]={textureFormat:Mt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[wt,zt,fr,en,Un,Ja]},u[Wt]={textureFormat:Wt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[Dn,Xr]},u[dl]={textureFormat:ws,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[wt]},u[pl]={textureFormat:ws,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[He]},u[ml]={textureFormat:ws,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[en,zt]},u[gl]={textureFormat:ws,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[en]},u[Do]={textureFormat:Hi,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[wt]},u[$h]={textureFormat:Hi,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[He]},u[Ct]={textureFormat:Hi,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Xr]},u[Kh]={textureFormat:Hi,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Ln]},u[lr]={textureFormat:Hi,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Dn]},u[Ha]={textureFormat:Hi,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[zo]},u[_l]={textureFormat:bi,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[wt]},u[Zh]={textureFormat:bi,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[He]},u[Vr]={textureFormat:bi,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[en,zt]},u[Ga]={textureFormat:bi,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[en]},u[Jh]={textureFormat:dr,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[wt]},u[fn]={textureFormat:dr,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[He]},u[Rt]={textureFormat:dr,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Xr]},u[zr]={textureFormat:dr,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ln]},u[Va]={textureFormat:dr,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Dn]},u[kr]={textureFormat:dr,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[zo]},u[Rp]={textureFormat:Pn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[wt]},u[xl]={textureFormat:Pn,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[wt]},u[Cp]={textureFormat:Pn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[wt,Ka]},u[Gn]={textureFormat:Pn,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[He]},u[U]={textureFormat:Pn,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[en,zt,vl]},u[Wa]={textureFormat:Pn,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[en,zt,qr]},u[yl]={textureFormat:Pn,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[en,zt]},u[In]={textureFormat:Pn,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[en]},u[vi]={textureFormat:Wi,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[wt]},u[Kn]={textureFormat:Wi,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[He]},u[Uo]={textureFormat:Wi,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Xr]},u[Gr]={textureFormat:Wi,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Ln]},u[Hr]={textureFormat:Wi,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[Dn]},u[Wr]={textureFormat:Wi,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[zo]},u[ki]={textureFormat:Mt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[wt]},u[Vi]={textureFormat:Mt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[wt]},u[ur]={textureFormat:Mt,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[He]},u[Es]={textureFormat:Mt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[wt,Ja,ja]},u[No]={textureFormat:Mt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[wt,Un]},u[Fo]={textureFormat:Mt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[ja]},u[hr]={textureFormat:Mt,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[en,zt]},u[Xa]={textureFormat:Mt,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[en]},u[jh]={textureFormat:Ei,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[wt]},u[As]={textureFormat:Ei,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[He]},u[qa]={textureFormat:Ei,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ja]},u[An]={textureFormat:Ei,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Xr]},u[Mi]={textureFormat:Ei,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ln]},u[Ya]={textureFormat:Ei,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[zo]},u[Oo]={textureFormat:Ei,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[Dn]},u[Gi]={textureFormat:Wt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[Xr,Dn]},u[$a]={textureFormat:Wt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Dn]},u[Bo]={textureFormat:Wt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[en]},u[Ts]={textureFormat:Ro,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ko]},u[Za]={textureFormat:Ro,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Si]},Object.keys(u).forEach(function(f){const x=u[f];x.bytesPerElementMap={},x.bytesPerElement.forEach(function(S,A){const C=x.type[A];x.bytesPerElementMap[C]=S})}),Qa=u}return Qa[c]}function Vo(c,u){const f=Yr(c);if(!f)throw"unknown internal format";const x=f.bytesPerElementMap[u];if(x===void 0)throw"unknown internal format";return x}function Lt(c){const u=Yr(c);if(!u)throw"unknown internal format";return{format:u.textureFormat,type:u.type[0]}}function qn(c){return(c&c-1)===0}function oi(c,u,f,x){if(!Ms(c))return qn(u)&&qn(f);const S=Yr(x);if(!S)throw"unknown internal format";return S.colorRenderable&&S.textureFilterable}function Go(c){const u=Yr(c);if(!u)throw"unknown internal format";return u.textureFilterable}function Ai(c){const u=Ml[c];if(!u)throw"unknown format: "+c;return u.numColorComponents}function pr(c,u,f){return Ss(u)?Ni(u):f||wt}function Ti(c,u,f,x,S){if(S%1!==0)throw"can't guess dimensions";if(!f&&!x){const A=Math.sqrt(S/(u===Jn?6:1));A%1===0?(f=A,x=A):(f=S,x=1)}else if(x){if(!f&&(f=S/x,f%1))throw"can't guess dimensions"}else if(x=S/f,x%1)throw"can't guess dimensions";return{width:f,height:x}}function ec(c){yi.textureColor=new Uint8Array([c[0]*255,c[1]*255,c[2]*255,c[3]*255])}function Ho(c){Aa(c,yi),c.textureColor&&ec(c.textureColor)}function Xi(c,u){u.colorspaceConversion!==void 0&&c.pixelStorei(Br,u.colorspaceConversion),u.premultiplyAlpha!==void 0&&c.pixelStorei(bs,u.premultiplyAlpha),u.flipY!==void 0&&c.pixelStorei(Yh,u.flipY)}function Wo(c){c.pixelStorei(hl,4),Ms(c)&&(c.pixelStorei(ue,0),c.pixelStorei(rt,0),c.pixelStorei(Lo,0),c.pixelStorei(ka,0),c.pixelStorei(fl,0))}function Hn(c,u,f,x){x.minMag&&(f.call(c,u,Oa,x.minMag),f.call(c,u,Ba,x.minMag)),x.min&&f.call(c,u,Oa,x.min),x.mag&&f.call(c,u,Ba,x.mag),x.wrap&&(f.call(c,u,Co,x.wrap),f.call(c,u,Po,x.wrap),(u===Oi||ir(c,u))&&f.call(c,u,ul,x.wrap)),x.wrapR&&f.call(c,u,ul,x.wrapR),x.wrapS&&f.call(c,u,Co,x.wrapS),x.wrapT&&f.call(c,u,Po,x.wrapT),x.minLod!==void 0&&f.call(c,u,za,x.minLod),x.maxLod!==void 0&&f.call(c,u,Xh,x.maxLod),x.baseLevel!==void 0&&f.call(c,u,Io,x.baseLevel),x.maxLevel!==void 0&&f.call(c,u,qh,x.maxLevel),x.compareFunc!==void 0&&f.call(c,u,it,x.compareFunc),x.compareMode!==void 0&&f.call(c,u,En,x.compareMode)}function Xo(c,u,f){const x=f.target||Et;c.bindTexture(x,u),Hn(c,x,c.texParameteri,f)}function wi(c,u,f){Hn(c,u,c.samplerParameteri,f)}function Rs(c,u){const f=c.createSampler();return wi(c,f,u),f}function tc(c,u){const f={};return Object.keys(u).forEach(function(x){f[x]=Rs(c,u[x])}),f}function Le(c){return c=c||yi.textureColor,Ss(c)?c:new Uint8Array([c[0]*255,c[1]*255,c[2]*255,c[3]*255])}function tn(c,u,f,x,S,A){f=f||yi.textureOptions,A=A||Mt;const C=f.target||Et;if(x=x||f.width,S=S||f.height,c.bindTexture(C,u),oi(c,x,S,A))c.generateMipmap(C);else{const I=Go(A)?Vn:Or;c.texParameteri(C,Oa,I),c.texParameteri(C,Ba,I),c.texParameteri(C,Co,si),c.texParameteri(C,Po,si)}}function Cs(c){return c.auto===!0||c.auto===void 0&&c.level===void 0}function qi(c,u){return u=u||{},u.cubeFaceOrder||[zi,kh,Vh,Gh,Hh,Wh]}function Ri(c,u){const x=qi(c,u).map(function(S,A){return{face:S,ndx:A}});return x.sort(function(S,A){return S.face-A.face}),x}function jn(c,u,f,x){x=x||yi.textureOptions;const S=x.target||Et,A=x.level||0;let C=f.width,I=f.height;const O=x.internalFormat||x.format||Mt,k=Lt(O),X=x.format||k.format,q=x.type||k.type;if(Xi(c,x),c.bindTexture(S,u),S===Jn){const H=f.width,ie=f.height;let Z,re;if(H/6===ie)Z=ie,re=[0,0,1,0,2,0,3,0,4,0,5,0];else if(ie/6===H)Z=H,re=[0,0,0,1,0,2,0,3,0,4,0,5];else if(H/3===ie/2)Z=H/3,re=[0,0,1,0,2,0,0,1,1,1,2,1];else if(H/2===ie/3)Z=H/2,re=[0,0,1,0,0,1,1,1,0,2,1,2];else throw"can't figure out cube map from element: "+(f.src?f.src:f.nodeName);const me=zh();me?(me.canvas.width=Z,me.canvas.height=Z,C=Z,I=Z,Ri(c,x).forEach(function(Me){const Te=re[Me.ndx*2+0]*Z,Ge=re[Me.ndx*2+1]*Z;me.drawImage(f,Te,Ge,Z,Z,0,0,Z,Z),c.texImage2D(Me.face,A,O,X,q,me.canvas)}),me.canvas.width=1,me.canvas.height=1):typeof createImageBitmap!="undefined"&&(C=Z,I=Z,Ri(c,x).forEach(function(Me){const Te=re[Me.ndx*2+0]*Z,Ge=re[Me.ndx*2+1]*Z;c.texImage2D(Me.face,A,O,Z,Z,0,X,q,null),createImageBitmap(f,Te,Ge,Z,Z,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(function(Je){Xi(c,x),c.bindTexture(S,u),c.texImage2D(Me.face,A,O,X,q,Je),Cs(x)&&tn(c,u,x,C,I,O)})}))}else if(S===Oi||S===Bi){const H=Math.min(f.width,f.height),ie=Math.max(f.width,f.height),Z=ie/H;if(Z%1!==0)throw"can not compute 3D dimensions of element";const re=f.width===ie?1:0,me=f.height===ie?1:0;c.pixelStorei(hl,1),c.pixelStorei(ue,f.width),c.pixelStorei(rt,0),c.pixelStorei(fl,0),c.texImage3D(S,A,O,H,H,H,0,X,q,null);for(let Me=0;Me<Z;++Me){const Te=Me*H*re,Ge=Me*H*me;c.pixelStorei(Lo,Te),c.pixelStorei(ka,Ge),c.texSubImage3D(S,A,0,0,Me,H,H,1,X,q,f)}Wo(c)}else c.texImage2D(S,A,O,X,q,f);Cs(x)&&tn(c,u,x,C,I,O),Xo(c,u,x)}function $r(){}function Nn(c){if(typeof document!="undefined"){const u=document.createElement("a");return u.href=c,u.hostname===location.hostname&&u.port===location.port&&u.protocol===location.protocol}else{const u=new URL(location.href).origin;return new URL(c,location.href).origin===u}}function Ps(c,u){return u===void 0&&!Nn(c)?"anonymous":u}function Pp(c,u,f){f=f||$r;let x;if(u=u!==void 0?u:yi.crossOrigin,u=Ps(c,u),typeof Image!="undefined"){x=new Image,u!==void 0&&(x.crossOrigin=u);const S=function(){x.removeEventListener("error",A),x.removeEventListener("load",C),x=null},A=function(){const O="couldn't load image: "+c;fo(O),f(O,x),S()},C=function(){f(null,x),S()};return x.addEventListener("error",A),x.addEventListener("load",C),x.src=c,x}else if(typeof ImageBitmap!="undefined"){let S,A;const C=function(){f(S,A)},I={};u&&(I.mode="cors"),fetch(c,I).then(function(O){if(!O.ok)throw O;return O.blob()}).then(function(O){return createImageBitmap(O,{premultiplyAlpha:"none",colorSpaceConversion:"none"})}).then(function(O){A=O,setTimeout(C)}).catch(function(O){S=O,setTimeout(C)}),x=null}return x}function Xt(c){return typeof ImageBitmap!="undefined"&&c instanceof ImageBitmap||typeof ImageData!="undefined"&&c instanceof ImageData||typeof HTMLElement!="undefined"&&c instanceof HTMLElement}function Zr(c,u,f){return Xt(c)?(setTimeout(function(){f(null,c)}),c):Pp(c,u,f)}function kt(c,u,f){f=f||yi.textureOptions;const x=f.target||Et;if(c.bindTexture(x,u),f.color===!1)return;const S=Le(f.color);if(x===Jn)for(let A=0;A<6;++A)c.texImage2D(zi+A,0,Mt,1,1,0,Mt,wt,S);else x===Oi||x===Bi?c.texImage3D(x,0,Mt,1,1,1,0,Mt,wt,S):c.texImage2D(x,0,Mt,1,1,0,Mt,wt,S)}function Qh(c,u,f,x){return x=x||$r,f=f||yi.textureOptions,kt(c,u,f),f=Object.assign({},f),Zr(f.src,f.crossOrigin,function(A,C){A?x(A,u,C):(jn(c,u,C,f),x(null,u,C))})}function Ip(c,u,f,x){x=x||$r;const S=f.src;if(S.length!==6)throw"there must be 6 urls for a cubemap";const A=f.level||0,C=f.internalFormat||f.format||Mt,I=Lt(C),O=f.format||I.format,k=f.type||wt,X=f.target||Et;if(X!==Jn)throw"target must be TEXTURE_CUBE_MAP";kt(c,u,f),f=Object.assign({},f);let q=6;const H=[],ie=qi(c,f);let Z;function re(me){return function(Me,Te){--q,Me?H.push(Me):Te.width!==Te.height?H.push("cubemap face img is not a square: "+Te.src):(Xi(c,f),c.bindTexture(X,u),q===5?qi().forEach(function(Ge){c.texImage2D(Ge,A,C,O,k,Te)}):c.texImage2D(me,A,C,O,k,Te),Cs(f)&&c.generateMipmap(X)),q===0&&x(H.length?H:void 0,u,Z)}}Z=S.map(function(me,Me){return Zr(me,f.crossOrigin,re(ie[Me]))})}function Lp(c,u,f,x){x=x||$r;const S=f.src,A=f.internalFormat||f.format||Mt,C=Lt(A),I=f.format||C.format,O=f.type||wt,k=f.target||Bi;if(k!==Oi&&k!==Bi)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";kt(c,u,f),f=Object.assign({},f);let X=S.length;const q=[];let H;const ie=f.level||0;let Z=f.width,re=f.height;const me=S.length;let Me=!0;function Te(Ge){return function(Je,Be){if(--X,Je)q.push(Je);else{if(Xi(c,f),c.bindTexture(k,u),Me){Me=!1,Z=f.width||Be.width,re=f.height||Be.height,c.texImage3D(k,ie,A,Z,re,me,0,I,O,null);for(let Ke=0;Ke<me;++Ke)c.texSubImage3D(k,ie,0,0,Ke,Z,re,1,I,O,Be)}else{let Ke=Be,_t;(Be.width!==Z||Be.height!==re)&&(_t=zh(),Ke=_t.canvas,_t.canvas.width=Z,_t.canvas.height=re,_t.drawImage(Be,0,0,Z,re)),c.texSubImage3D(k,ie,0,0,Ge,Z,re,1,I,O,Ke),_t&&Ke===_t.canvas&&(_t.canvas.width=0,_t.canvas.height=0)}Cs(f)&&c.generateMipmap(k)}X===0&&x(q.length?q:void 0,u,H)}}H=S.map(function(Ge,Je){return Zr(Ge,f.crossOrigin,Te(Je))})}function ef(c,u,f,x){x=x||yi.textureOptions;const S=x.target||Et;c.bindTexture(S,u);let A=x.width,C=x.height,I=x.depth;const O=x.level||0,k=x.internalFormat||x.format||Mt,X=Lt(k),q=x.format||X.format,H=x.type||pr(c,f,X.type);if(Ss(f))f instanceof Uint8ClampedArray&&(f=new Uint8Array(f.buffer));else{const me=Zn(H);f=new me(f)}const ie=Vo(k,H),Z=f.byteLength/ie;if(Z%1)throw"length wrong size for format: "+To(c,q);let re;if(S===Oi||S===Bi)if(!A&&!C&&!I){const me=Math.cbrt(Z);if(me%1!==0)throw"can't guess cube size of array of numElements: "+Z;A=me,C=me,I=me}else A&&(!C||!I)?(re=Ti(c,S,C,I,Z/A),C=re.width,I=re.height):C&&(!A||!I)?(re=Ti(c,S,A,I,Z/C),A=re.width,I=re.height):(re=Ti(c,S,A,C,Z/I),A=re.width,C=re.height);else re=Ti(c,S,A,C,Z),A=re.width,C=re.height;if(Wo(c),c.pixelStorei(hl,x.unpackAlignment||1),Xi(c,x),S===Jn){const me=ie/f.BYTES_PER_ELEMENT,Me=Z/6*me;Ri(c,x).forEach(Te=>{const Ge=Me*Te.ndx,Je=f.subarray(Ge,Ge+Me);c.texImage2D(Te.face,O,k,A,C,0,q,H,Je)})}else S===Oi||S===Bi?c.texImage3D(S,O,k,A,C,I,0,q,H,f):c.texImage2D(S,O,k,A,C,0,q,H,f);return{width:A,height:C,depth:I,type:H}}function nc(c,u,f){const x=f.target||Et;c.bindTexture(x,u);const S=f.level||0,A=f.internalFormat||f.format||Mt,C=Lt(A),I=f.format||C.format,O=f.type||C.type;if(Xi(c,f),x===Jn)for(let k=0;k<6;++k)c.texImage2D(zi+k,S,A,f.width,f.height,0,I,O,null);else x===Oi||x===Bi?c.texImage3D(x,S,A,f.width,f.height,f.depth,0,I,O,null):c.texImage2D(x,S,A,f.width,f.height,0,I,O,null)}function ic(c,u,f){f=f||$r,u=u||yi.textureOptions;const x=c.createTexture(),S=u.target||Et;let A=u.width||1,C=u.height||1;const I=u.internalFormat||Mt;c.bindTexture(S,x),S===Jn&&(c.texParameteri(S,Co,si),c.texParameteri(S,Po,si));let O=u.src;if(O)if(typeof O=="function"&&(O=O(c,u)),typeof O=="string")Qh(c,x,u,f);else if(Ss(O)||Array.isArray(O)&&(typeof O[0]=="number"||Array.isArray(O[0])||Ss(O[0]))){const k=ef(c,x,O,u);A=k.width,C=k.height}else Array.isArray(O)&&(typeof O[0]=="string"||Xt(O[0]))?S===Jn?Ip(c,x,u,f):Lp(c,x,u,f):(jn(c,x,O,u),A=O.width,C=O.height);else nc(c,x,u);return Cs(u)&&tn(c,x,u,A,C,I),Xo(c,x,u),x}function rc(c,u,f,x,S,A){x=x||f.width,S=S||f.height,A=A||f.depth;const C=f.target||Et;c.bindTexture(C,u);const I=f.level||0,O=f.internalFormat||f.format||Mt,k=Lt(O),X=f.format||k.format;let q;const H=f.src;if(H&&(Ss(H)||Array.isArray(H)&&typeof H[0]=="number")?q=f.type||pr(c,H,k.type):q=f.type||k.type,C===Jn)for(let ie=0;ie<6;++ie)c.texImage2D(zi+ie,I,O,x,S,0,X,q,null);else C===Oi||C===Bi?c.texImage3D(C,I,O,x,S,A,0,X,q,null):c.texImage2D(C,I,O,x,S,0,X,q,null)}function Dp(c){return typeof c=="string"||Array.isArray(c)&&typeof c[0]=="string"}function ze(c,u,f){f=f||$r;let x=0;const S=[],A={},C={};function I(){x===0&&setTimeout(function(){f(S.length?S:void 0,A,C)},0)}return Object.keys(u).forEach(function(O){const k=u[O];let X;Dp(k.src)&&(X=function(q,H,ie){C[O]=ie,--x,q&&S.push(q),I()},++x),A[O]=ic(c,k,X)}),I(),A}var Up=Object.freeze({__proto__:null,setTextureDefaults_:Ho,createSampler:Rs,createSamplers:tc,setSamplerParameters:wi,createTexture:ic,setEmptyTexture:nc,setTextureFromArray:ef,loadTextureFromUrl:Qh,setTextureFromElement:jn,setTextureFilteringForSize:tn,setTextureParameters:Xo,setDefaultTextureColor:ec,createTextures:ze,resizeTexture:rc,canGenerateMipmap:oi,canFilter:Go,getNumComponentsForFormat:Ai,getBytesPerElementForInternalFormat:Vo,getFormatAndTypeForInternalFormat:Lt});const Fn=fo,sc=Ta;function Yi(c){return typeof document!="undefined"&&document.getElementById?document.getElementById(c):null}const dn=33984,Is=35048,qt=34962,ft=34963,qo=35345,$i=35982,Ls=36386,Sl=35713,Jr=35714,Kr=35632,jr=35633,oc=35981,Ds=35718,Yo=35721,$o=35971,Zo=35382,bl=35396,El=35398,Al=35392,Jo=35395,mr=5126,ln=35664,Tl=35665,Us=35666,Ci=5124,gr=35667,pn=35668,wl=35669,ac=35670,Rl=35671,Cl=35672,Pl=35673,ai=35674,Ko=35675,Pi=35676,Il=35678,Ll=35680,un=35679,Qr=35682,es=35685,tf=35686,jo=35687,nf=35688,cc=35689,rf=35690,sf=36289,_r=36292,xr=36293,ts=5125,Ns=36294,lc=36295,Dl=36296,Fs=36298,of=36299,af=36300,cf=36303,lf=36306,uf=36307,hf=36308,ff=36311,Qo=3553,ea=34067,uc=32879,ta=35866,tt={};function Ul(c,u){return tt[u].bindPoint}function df(c,u){return function(f){c.uniform1f(u,f)}}function pf(c,u){return function(f){c.uniform1fv(u,f)}}function mf(c,u){return function(f){c.uniform2fv(u,f)}}function gf(c,u){return function(f){c.uniform3fv(u,f)}}function _f(c,u){return function(f){c.uniform4fv(u,f)}}function Nl(c,u){return function(f){c.uniform1i(u,f)}}function Fl(c,u){return function(f){c.uniform1iv(u,f)}}function Ol(c,u){return function(f){c.uniform2iv(u,f)}}function Bl(c,u){return function(f){c.uniform3iv(u,f)}}function zl(c,u){return function(f){c.uniform4iv(u,f)}}function xf(c,u){return function(f){c.uniform1ui(u,f)}}function yf(c,u){return function(f){c.uniform1uiv(u,f)}}function vf(c,u){return function(f){c.uniform2uiv(u,f)}}function Mf(c,u){return function(f){c.uniform3uiv(u,f)}}function Sf(c,u){return function(f){c.uniform4uiv(u,f)}}function bf(c,u){return function(f){c.uniformMatrix2fv(u,!1,f)}}function Ef(c,u){return function(f){c.uniformMatrix3fv(u,!1,f)}}function Af(c,u){return function(f){c.uniformMatrix4fv(u,!1,f)}}function Tf(c,u){return function(f){c.uniformMatrix2x3fv(u,!1,f)}}function wf(c,u){return function(f){c.uniformMatrix3x2fv(u,!1,f)}}function Rf(c,u){return function(f){c.uniformMatrix2x4fv(u,!1,f)}}function Cf(c,u){return function(f){c.uniformMatrix4x2fv(u,!1,f)}}function Pf(c,u){return function(f){c.uniformMatrix3x4fv(u,!1,f)}}function If(c,u){return function(f){c.uniformMatrix4x3fv(u,!1,f)}}function Tn(c,u,f,x){const S=Ul(c,u);return Ms(c)?function(A){let C,I;!A||ms(c,A)?(C=A,I=null):(C=A.texture,I=A.sampler),c.uniform1i(x,f),c.activeTexture(dn+f),c.bindTexture(S,C),c.bindSampler(f,I)}:function(A){c.uniform1i(x,f),c.activeTexture(dn+f),c.bindTexture(S,A)}}function wn(c,u,f,x,S){const A=Ul(c,u),C=new Int32Array(S);for(let I=0;I<S;++I)C[I]=f+I;return Ms(c)?function(I){c.uniform1iv(x,C),I.forEach(function(O,k){c.activeTexture(dn+C[k]);let X,q;!O||ms(c,O)?(X=O,q=null):(X=O.texture,q=O.sampler),c.bindSampler(f,q),c.bindTexture(A,X)})}:function(I){c.uniform1iv(x,C),I.forEach(function(O,k){c.activeTexture(dn+C[k]),c.bindTexture(A,O)})}}tt[mr]={Type:Float32Array,size:4,setter:df,arraySetter:pf},tt[ln]={Type:Float32Array,size:8,setter:mf,cols:2},tt[Tl]={Type:Float32Array,size:12,setter:gf,cols:3},tt[Us]={Type:Float32Array,size:16,setter:_f,cols:4},tt[Ci]={Type:Int32Array,size:4,setter:Nl,arraySetter:Fl},tt[gr]={Type:Int32Array,size:8,setter:Ol,cols:2},tt[pn]={Type:Int32Array,size:12,setter:Bl,cols:3},tt[wl]={Type:Int32Array,size:16,setter:zl,cols:4},tt[ts]={Type:Uint32Array,size:4,setter:xf,arraySetter:yf},tt[Ns]={Type:Uint32Array,size:8,setter:vf,cols:2},tt[lc]={Type:Uint32Array,size:12,setter:Mf,cols:3},tt[Dl]={Type:Uint32Array,size:16,setter:Sf,cols:4},tt[ac]={Type:Uint32Array,size:4,setter:Nl,arraySetter:Fl},tt[Rl]={Type:Uint32Array,size:8,setter:Ol,cols:2},tt[Cl]={Type:Uint32Array,size:12,setter:Bl,cols:3},tt[Pl]={Type:Uint32Array,size:16,setter:zl,cols:4},tt[ai]={Type:Float32Array,size:32,setter:bf,rows:2,cols:2},tt[Ko]={Type:Float32Array,size:48,setter:Ef,rows:3,cols:3},tt[Pi]={Type:Float32Array,size:64,setter:Af,rows:4,cols:4},tt[es]={Type:Float32Array,size:32,setter:Tf,rows:2,cols:3},tt[tf]={Type:Float32Array,size:32,setter:Rf,rows:2,cols:4},tt[jo]={Type:Float32Array,size:48,setter:wf,rows:3,cols:2},tt[nf]={Type:Float32Array,size:48,setter:Pf,rows:3,cols:4},tt[cc]={Type:Float32Array,size:64,setter:Cf,rows:4,cols:2},tt[rf]={Type:Float32Array,size:64,setter:If,rows:4,cols:3},tt[Il]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:Qo},tt[Ll]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:ea},tt[un]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:uc},tt[Qr]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:Qo},tt[sf]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:ta},tt[_r]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:ta},tt[xr]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:ea},tt[Fs]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:Qo},tt[of]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:uc},tt[af]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:ea},tt[cf]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:ta},tt[lf]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:Qo},tt[uf]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:uc},tt[hf]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:ea},tt[ff]={Type:null,size:0,setter:Tn,arraySetter:wn,bindPoint:ta};function na(c,u){return function(f){if(f.value)switch(c.disableVertexAttribArray(u),f.value.length){case 4:c.vertexAttrib4fv(u,f.value);break;case 3:c.vertexAttrib3fv(u,f.value);break;case 2:c.vertexAttrib2fv(u,f.value);break;case 1:c.vertexAttrib1fv(u,f.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else c.bindBuffer(qt,f.buffer),c.enableVertexAttribArray(u),c.vertexAttribPointer(u,f.numComponents||f.size,f.type||mr,f.normalize||!1,f.stride||0,f.offset||0),c.vertexAttribDivisor&&c.vertexAttribDivisor(u,f.divisor||0)}}function Zi(c,u){return function(f){if(f.value)if(c.disableVertexAttribArray(u),f.value.length===4)c.vertexAttrib4iv(u,f.value);else throw new Error("The length of an integer constant value must be 4!");else c.bindBuffer(qt,f.buffer),c.enableVertexAttribArray(u),c.vertexAttribIPointer(u,f.numComponents||f.size,f.type||Ci,f.stride||0,f.offset||0),c.vertexAttribDivisor&&c.vertexAttribDivisor(u,f.divisor||0)}}function ia(c,u){return function(f){if(f.value)if(c.disableVertexAttribArray(u),f.value.length===4)c.vertexAttrib4uiv(u,f.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else c.bindBuffer(qt,f.buffer),c.enableVertexAttribArray(u),c.vertexAttribIPointer(u,f.numComponents||f.size,f.type||ts,f.stride||0,f.offset||0),c.vertexAttribDivisor&&c.vertexAttribDivisor(u,f.divisor||0)}}function hc(c,u,f){const x=f.size,S=f.count;return function(A){c.bindBuffer(qt,A.buffer);const C=A.size||A.numComponents||x,I=C/S,O=A.type||mr,X=tt[O].size*C,q=A.normalize||!1,H=A.offset||0,ie=X/S;for(let Z=0;Z<S;++Z)c.enableVertexAttribArray(u+Z),c.vertexAttribPointer(u+Z,I,O,q,X,H+ie*Z),c.vertexAttribDivisor&&c.vertexAttribDivisor(u+Z,A.divisor||0)}}const Jt={};Jt[mr]={size:4,setter:na},Jt[ln]={size:8,setter:na},Jt[Tl]={size:12,setter:na},Jt[Us]={size:16,setter:na},Jt[Ci]={size:4,setter:Zi},Jt[gr]={size:8,setter:Zi},Jt[pn]={size:12,setter:Zi},Jt[wl]={size:16,setter:Zi},Jt[ts]={size:4,setter:ia},Jt[Ns]={size:8,setter:ia},Jt[lc]={size:12,setter:ia},Jt[Dl]={size:16,setter:ia},Jt[ac]={size:4,setter:Zi},Jt[Rl]={size:8,setter:Zi},Jt[Cl]={size:12,setter:Zi},Jt[Pl]={size:16,setter:Zi},Jt[ai]={size:4,setter:hc,count:2},Jt[Ko]={size:9,setter:hc,count:3},Jt[Pi]={size:16,setter:hc,count:4};const Lf=/ERROR:\s*\d+:(\d+)/gi;function Df(c,u="",f=0){const x=[...u.matchAll(Lf)],S=new Map(x.map((A,C)=>{const I=parseInt(A[1]),O=x[C+1],k=O?O.index:u.length,X=u.substring(A.index,k);return[I-1,X]}));return c.split(`
`).map((A,C)=>{const I=S.get(C);return`${C+1+f}: ${A}${I?`

^^^ ${I}`:""}`}).join(`
`)}const kl=/^[ \t]*\n/;function Vl(c){let u=0;return kl.test(c)&&(u=1,c=c.replace(kl,"")),{lineOffset:u,shaderSource:c}}function Gl(c,u){return c.errorCallback(u),c.callback&&setTimeout(()=>{c.callback(`${u}
${c.errors.join(`
`)}`)}),null}function Uf(c,u,f,x){if(x=x||Fn,!c.getShaderParameter(f,Sl)){const A=c.getShaderInfoLog(f),{lineOffset:C,shaderSource:I}=Vl(c.getShaderSource(f)),O=`${Df(I,A,C)}
Error compiling ${To(c,u)}: ${A}`;return x(O),O}return""}function ns(c,u,f){let x,S,A;if(typeof u=="function"&&(f=u,u=void 0),typeof c=="function")f=c,c=void 0;else if(c&&!Array.isArray(c)){const k=c;f=k.errorCallback,c=k.attribLocations,x=k.transformFeedbackVaryings,S=k.transformFeedbackMode,A=k.callback}const C=f||Fn,I=[],O={errorCallback(k,...X){I.push(k),C(k,...X)},transformFeedbackVaryings:x,transformFeedbackMode:S,callback:A,errors:I};{let k={};Array.isArray(c)?c.forEach(function(X,q){k[X]=u?u[q]:q}):k=c||{},O.attribLocations=k}return O}const Nf=["VERTEX_SHADER","FRAGMENT_SHADER"];function Ff(c,u){if(u.indexOf("frag")>=0)return Kr;if(u.indexOf("vert")>=0)return jr}function Of(c,u,f){const x=c.getAttachedShaders(u);for(const S of x)f.has(S)&&c.deleteShader(S);c.deleteProgram(u)}const Bf=(c=0)=>new Promise(u=>setTimeout(u,c));function Hl(c,u,f){const x=c.createProgram(),{attribLocations:S,transformFeedbackVaryings:A,transformFeedbackMode:C}=ns(f);for(let I=0;I<u.length;++I){let O=u[I];if(typeof O=="string"){const k=Yi(O),X=k?k.text:O;let q=c[Nf[I]];k&&k.type&&(q=Ff(c,k.type)||q),O=c.createShader(q),c.shaderSource(O,Vl(X).shaderSource),c.compileShader(O),c.attachShader(x,O)}}Object.entries(S).forEach(([I,O])=>c.bindAttribLocation(x,O,I));{let I=A;I&&(I.attribs&&(I=I.attribs),Array.isArray(I)||(I=Object.keys(I)),c.transformFeedbackVaryings(x,I,C||oc))}return c.linkProgram(x),x}function ra(c,u,f,x,S){const A=ns(f,x,S),C=new Set(u),I=Hl(c,u,A);function O(k,X){const q=Xl(k,X,A.errorCallback);return q&&Of(k,X,C),q}if(A.callback){Wl(c,I).then(()=>{const k=O(c,I);A.callback(k,k?void 0:I)});return}return O(c,I)?void 0:I}function sa(c){return function(u,f,...x){return new Promise((S,A)=>{const C=ns(...x);C.callback=(I,O)=>{I?A(I):S(O)},c(u,f,C)})}}const zf=sa(ra),kf=sa(dc);function Wl(c,u){return as(this,null,function*(){const f=c.getExtension("KHR_parallel_shader_compile"),x=f?(A,C)=>A.getProgramParameter(C,f.COMPLETION_STATUS_KHR):()=>!0;let S=0;do yield Bf(S),S=1e3/60;while(!x(c,u))})}function Vf(c,u){return as(this,null,function*(){for(const f of Object.values(u))yield Wl(c,f)})}function Xl(c,u,f){if(f=f||Fn,!c.getProgramParameter(u,Jr)){const S=c.getProgramInfoLog(u);f(`Error in program linking: ${S}`);const C=c.getAttachedShaders(u).map(I=>Uf(c,c.getShaderParameter(I,c.SHADER_TYPE),I,f));return`${S}
${C.filter(I=>I).join(`
`)}`}}function Gf(c,u,f,x,S){const A=ns(f,x,S),C=[];for(const I of u){const O=Yi(I);if(!O)return Gl(A,`unknown script element: ${I}`);C.push(O.text)}return ra(c,C,A)}function ql(c,u,f,x,S){return ra(c,u,f,x,S)}function Yl(c){const u=c.name;return u.startsWith("gl_")||u.startsWith("webgl_")}const Hf=/(\.|\[|]|\w+)/g,Wf=c=>c>="0"&&c<="9";function $l(c,u,f,x){const S=c.split(Hf).filter(I=>I!=="");let A=0,C="";for(;;){const I=S[A++];C+=I;const O=Wf(I[0]),k=O?parseInt(I):I;if(O&&(C+=S[A++]),A===S.length){f[k]=u;break}else{const q=S[A++],H=q==="[",ie=f[k]||(H?[]:{});f[k]=ie,f=ie,x[C]=x[C]||function(Z){return function(re){nu(Z,re)}}(ie),C+=q}}}function Zl(c,u){let f=0;function x(I,O,k){const X=O.name.endsWith("[0]"),q=O.type,H=tt[q];if(!H)throw new Error(`unknown type: 0x${q.toString(16)}`);let ie;if(H.bindPoint){const Z=f;f+=O.size,X?ie=H.arraySetter(c,q,Z,k,O.size):ie=H.setter(c,q,Z,k,O.size)}else H.arraySetter&&X?ie=H.arraySetter(c,k):ie=H.setter(c,k);return ie.location=k,ie}const S={},A={},C=c.getProgramParameter(u,Ds);for(let I=0;I<C;++I){const O=c.getActiveUniform(u,I);if(Yl(O))continue;let k=O.name;k.endsWith("[0]")&&(k=k.substr(0,k.length-3));const X=c.getUniformLocation(u,O.name);if(X){const q=x(u,O,X);S[k]=q,$l(k,q,A,S)}}return S}function Jl(c,u){const f={},x=c.getProgramParameter(u,$o);for(let S=0;S<x;++S){const A=c.getTransformFeedbackVarying(u,S);f[A.name]={index:S,type:A.type,size:A.size}}return f}function Kl(c,u,f){u.transformFeedbackInfo&&(u=u.transformFeedbackInfo),f.attribs&&(f=f.attribs);for(const x in f){const S=u[x];if(S){const A=f[x];A.offset?c.bindBufferRange($i,S.index,A.buffer,A.offset,A.size):c.bindBufferBase($i,S.index,A.buffer)}}}function Xf(c,u,f){const x=c.createTransformFeedback();return c.bindTransformFeedback(Ls,x),c.useProgram(u.program),Kl(c,u,f),c.bindTransformFeedback(Ls,null),x}function jl(c,u){const f=c.getProgramParameter(u,Ds),x=[],S=[];for(let I=0;I<f;++I){S.push(I),x.push({});const O=c.getActiveUniform(u,I);x[I].name=O.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(I){const O=I[0],k=I[1];c.getActiveUniforms(u,S,c[O]).forEach(function(X,q){x[q][k]=X})});const A={},C=c.getProgramParameter(u,Zo);for(let I=0;I<C;++I){const O=c.getActiveUniformBlockName(u,I),k={index:c.getUniformBlockIndex(u,O),usedByVertexShader:c.getActiveUniformBlockParameter(u,I,bl),usedByFragmentShader:c.getActiveUniformBlockParameter(u,I,El),size:c.getActiveUniformBlockParameter(u,I,Al),uniformIndices:c.getActiveUniformBlockParameter(u,I,Jo)};k.used=k.usedByVertexShader||k.usedByFragmentShader,A[O]=k}return{blockSpecs:A,uniformData:x}}const Ql=/\[\d+\]\.$/,qf=(c,u)=>((c+(u-1))/u|0)*u;function Yf(c,u,f,x){if(u||f){x=x||1;const A=c.length/4;return function(C){let I=0,O=0;for(let k=0;k<A;++k){for(let X=0;X<x;++X)c[I++]=C[O++];I+=4-x}}}else return function(S){S.length?c.set(S):c[0]=S}}function eu(c,u,f,x){const S=f.blockSpecs,A=f.uniformData,C=S[x];if(!C)return sc("no uniform block object named:",x),{name:x,uniforms:{}};const I=new ArrayBuffer(C.size),O=c.createBuffer(),k=C.index;c.bindBuffer(qo,O),c.uniformBlockBinding(u,C.index,k);let X=x+".";Ql.test(X)&&(X=X.replace(Ql,"."));const q={},H={},ie={};return C.uniformIndices.forEach(function(Z){const re=A[Z];let me=re.name;me.startsWith(X)&&(me=me.substr(X.length));const Me=me.endsWith("[0]");Me&&(me=me.substr(0,me.length-3));const Te=tt[re.type],Ge=Te.Type,Je=Me?qf(Te.size,16)*re.size:Te.size*re.size,Be=new Ge(I,re.offset,Je/Ge.BYTES_PER_ELEMENT);q[me]=Be;const Ke=Yf(Be,Me,Te.rows,Te.cols);H[me]=Ke,$l(me,Ke,ie,H)}),{name:x,array:I,asFloat:new Float32Array(I),buffer:O,uniforms:q,setters:H}}function $f(c,u,f){return eu(c,u.program,u.uniformBlockSpec,f)}function tu(c,u,f){const S=(u.uniformBlockSpec||u).blockSpecs[f.name];if(S){const A=S.index;return c.bindBufferRange(qo,A,f.buffer,f.offset||0,f.array.byteLength),!0}return!1}function Zf(c,u,f){tu(c,u,f)&&c.bufferData(qo,f.array,Is)}function Jf(c,u){const f=c.setters;for(const x in u){const S=f[x];if(S){const A=u[x];S(A)}}}function nu(c,u){for(const f in u){const x=c[f];typeof x=="function"?x(u[f]):nu(c[f],u[f])}}function Os(c,...u){const f=c.uniformSetters||c,x=u.length;for(let S=0;S<x;++S){const A=u[S];if(Array.isArray(A)){const C=A.length;for(let I=0;I<C;++I)Os(f,A[I])}else for(const C in A){const I=f[C];I&&I(A[C])}}}const Kf=Os;function iu(c,u){const f={},x=c.getProgramParameter(u,Yo);for(let S=0;S<x;++S){const A=c.getActiveAttrib(u,S);if(Yl(A))continue;const C=c.getAttribLocation(u,A.name),I=Jt[A.type],O=I.setter(c,C,I);O.location=C,f[A.name]=O}return f}function fc(c,u){for(const f in u){const x=c[f];x&&x(u[f])}}function oa(c,u,f){f.vertexArrayObject?c.bindVertexArray(f.vertexArrayObject):(fc(u.attribSetters||u,f.attribs),f.indices&&c.bindBuffer(ft,f.indices))}function aa(c,u){const f=Zl(c,u),x=iu(c,u),S={program:u,uniformSetters:f,attribSetters:x};return Ms(c)&&(S.uniformBlockSpec=jl(c,u),S.transformFeedbackInfo=Jl(c,u)),S}const jf=/\s|{|}|;/;function dc(c,u,f,x,S){const A=ns(f,x,S),C=[];if(u=u.map(function(k){if(!jf.test(k)){const X=Yi(k);if(X)k=X.text;else{const q=`no element with id: ${k}`;A.errorCallback(q),C.push(q)}}return k}),C.length)return Gl(A,"");const I=A.callback;I&&(A.callback=(k,X)=>{I(k,k?void 0:aa(c,X))});const O=ql(c,u,A);return O?aa(c,O):null}function ru(c,u,f,x,S){for(const[A,C]of Object.entries(u)){const I=va({},S),O=f[A];Array.isArray(O)||Object.assign(I,O);const k=Xl(c,C,I.errorCallback);if(k){for(const X of Object.values(u)){const q=c.getAttachedShaders(X);c.deleteProgram(X);for(const H of q)x.has(H)||c.deleteShader(H)}return k}}}function pc(c,u,f={}){const x=new Set,S=Object.fromEntries(Object.entries(u).map(([C,I])=>{const O=va({},f),k=Array.isArray(I)?I:I.shaders;return Array.isArray(I)||Object.assign(O,I),k.forEach(x.add,x),[C,Hl(c,k,O)]}));if(f.callback){Vf(c,S).then(()=>{const C=ru(c,S,u,x,f);f.callback(C,C?void 0:S)});return}return ru(c,S,u,x,f)?void 0:S}function su(c,u,f){f=ns(f);function x(C,I){return Object.fromEntries(Object.entries(I).map(([O,k])=>[O,aa(C,k)]))}const S=f.callback;S&&(f.callback=(C,I)=>{S(C,C?void 0:x(c,I))});const A=pc(c,u,f);if(!(S||!A))return x(c,A)}const Qf=sa(pc),ed=sa(su);var Np=Object.freeze({__proto__:null,createAttributeSetters:iu,createProgram:ra,createProgramAsync:zf,createPrograms:pc,createProgramsAsync:Qf,createProgramFromScripts:Gf,createProgramFromSources:ql,createProgramInfo:dc,createProgramInfoAsync:kf,createProgramInfos:su,createProgramInfosAsync:ed,createProgramInfoFromProgram:aa,createUniformSetters:Zl,createUniformBlockSpecFromProgram:jl,createUniformBlockInfoFromProgram:eu,createUniformBlockInfo:$f,createTransformFeedback:Xf,createTransformFeedbackInfo:Jl,bindTransformFeedbackInfo:Kl,setAttributes:fc,setBuffersAndAttributes:oa,setUniforms:Os,setUniformsAndBindTextures:Kf,setUniformBlock:Zf,setBlockUniforms:Jf,bindUniformBlock:tu});const ou=4,au=5123;function cu(c,u,f,x,S,A){f=f===void 0?ou:f;const C=u.indices,I=u.elementType,O=x===void 0?u.numElements:x;S=S===void 0?0:S,I||C?A!==void 0?c.drawElementsInstanced(f,O,I===void 0?au:u.elementType,S,A):c.drawElements(f,O,I===void 0?au:u.elementType,S):A!==void 0?c.drawArraysInstanced(f,S,O,A):c.drawArrays(f,S,O)}function td(c,u){let f=null,x=null;u.forEach(function(S){if(S.active===!1)return;const A=S.programInfo,C=S.vertexArrayInfo||S.bufferInfo;let I=!1;const O=S.type===void 0?ou:S.type;A!==f&&(f=A,c.useProgram(A.program),I=!0),(I||C!==x)&&(x&&x.vertexArrayObject&&!C.vertexArrayObject&&c.bindVertexArray(null),x=C,oa(c,A,C)),Os(A,S.uniforms),cu(c,C,O,S.count,S.offset,S.instanceCount)}),x&&x.vertexArrayObject&&c.bindVertexArray(null)}var Fp=Object.freeze({__proto__:null,drawBufferInfo:cu,drawObjectList:td});const lu=36160,yr=36161,nd=3553,id=5121,rd=6402,sd=6408,Op=33190,Bp=36012,zp=35056,kp=36013,Vp=32854,Gp=32855,Hp=36194,od=33189,ad=6401,cd=36168,uu=34041,hu=36064,mc=36096,ld=36128,fu=33306,du=33071,pu=9729,ud=[{format:sd,type:id,min:pu,wrap:du},{format:uu}],ci={};ci[uu]=fu,ci[ad]=ld,ci[cd]=ld,ci[rd]=mc,ci[od]=mc,ci[Op]=mc,ci[Bp]=mc,ci[zp]=fu,ci[kp]=fu;function Wp(c,u){return ci[c]||ci[u]}const vr={};vr[Vp]=!0,vr[Gp]=!0,vr[Hp]=!0,vr[uu]=!0,vr[od]=!0,vr[ad]=!0,vr[cd]=!0;function Xp(c){return vr[c]}const qp=32;function Yp(c){return c>=hu&&c<hu+qp}function $p(c,u,f,x){const S=lu,A=c.createFramebuffer();c.bindFramebuffer(S,A),f=f||c.drawingBufferWidth,x=x||c.drawingBufferHeight,u=u||ud;const C=[],I={framebuffer:A,attachments:[],width:f,height:x};return u.forEach(function(O,k){let X=O.attachment;const q=O.samples,H=O.format;let ie=O.attachmentPoint||Wp(H,O.internalFormat);if(ie||(ie=hu+k),Yp(ie)&&C.push(ie),!X)if(q!==void 0||Xp(H))X=c.createRenderbuffer(),c.bindRenderbuffer(yr,X),q>1?c.renderbufferStorageMultisample(yr,q,H,f,x):c.renderbufferStorage(yr,H,f,x);else{const Z=Object.assign({},O);Z.width=f,Z.height=x,Z.auto===void 0&&(Z.auto=!1,Z.min=Z.min||Z.minMag||pu,Z.mag=Z.mag||Z.minMag||pu,Z.wrapS=Z.wrapS||Z.wrap||du,Z.wrapT=Z.wrapT||Z.wrap||du),X=ic(c,Z)}if(wa(c,X))c.framebufferRenderbuffer(S,ie,yr,X);else if(ms(c,X))O.layer!==void 0?c.framebufferTextureLayer(S,ie,X,O.level||0,O.layer):c.framebufferTexture2D(S,ie,O.target||nd,X,O.level||0);else throw new Error("unknown attachment type");I.attachments.push(X)}),c.drawBuffers&&c.drawBuffers(C),I}function Zp(c,u,f,x,S){x=x||c.drawingBufferWidth,S=S||c.drawingBufferHeight,u.width=x,u.height=S,f=f||ud,f.forEach(function(A,C){const I=u.attachments[C],O=A.format,k=A.samples;if(k!==void 0||wa(c,I))c.bindRenderbuffer(yr,I),k>1?c.renderbufferStorageMultisample(yr,k,O,x,S):c.renderbufferStorage(yr,O,x,S);else if(ms(c,I))rc(c,I,A,x,S);else throw new Error("unknown attachment type")})}function Jp(c,u,f){f=f||lu,u?(c.bindFramebuffer(f,u.framebuffer),c.viewport(0,0,u.width,u.height)):(c.bindFramebuffer(f,null),c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight))}var q0=Object.freeze({__proto__:null,bindFramebufferInfo:Jp,createFramebufferInfo:$p,resizeFramebufferInfo:Zp});const Kp=34963;function jp(c,u,f){const x=c.createVertexArray();return c.bindVertexArray(x),u.length||(u=[u]),u.forEach(function(S){oa(c,S,f)}),c.bindVertexArray(null),{numElements:f.numElements,elementType:f.elementType,vertexArrayObject:x}}function hd(c,u,f,x){const S=c.createVertexArray();return c.bindVertexArray(S),fc(u,f),x&&c.bindBuffer(Kp,x),c.bindVertexArray(null),S}function Qp(c,u,f){return hd(c,u.attribSetters||u,f.attribs,f.indices)}var Y0=Object.freeze({__proto__:null,createVertexArrayInfo:jp,createVAOAndSetAttributes:hd,createVAOFromBufferInfo:Qp});const mu={addExtensionsToContext:!0};function lt(c){Aa(c,mu),po(c),Ho(c)}const Ae=/^(.*?)_/;function li(c,u){To(c,0);const f=c.getExtension(u);if(f){const x={},S=Ae.exec(u)[1],A="_"+S;for(const C in f){const I=f[C],O=typeof I=="function",k=O?S:A;let X=C;C.endsWith(k)&&(X=C.substring(0,C.length-k.length)),c[X]!==void 0?!O&&c[X]!==I&&Ta(X,c[X],I,C):O?c[X]=function(q){return function(){return q.apply(f,arguments)}}(I):(c[X]=I,x[X]=I)}x.constructor={name:f.constructor.name},To(x,0)}return f}const Bs=null;function Ji(c){for(let u=0;u<Bs.length;++u)li(c,Bs[u])}function fd(c,u){const f=["webgl","experimental-webgl"];let x=null;for(let S=0;S<f.length;++S)if(x=c.getContext(f[S],u),x){mu.addExtensionsToContext&&Ji(x);break}return x}function em(c,u){return fd(c,u)}function dd(c,u){const f=["webgl2","webgl","experimental-webgl"];let x=null;for(let S=0;S<f.length;++S)if(x=c.getContext(f[S],u),x){mu.addExtensionsToContext&&Ji(x);break}return x}function tm(c,u){return dd(c,u)}function pd(c,u){u=u||1,u=Math.max(0,u);const f=c.clientWidth*u|0,x=c.clientHeight*u|0;return c.width!==f||c.height!==x?(c.width=f,c.height=x,!0):!1}},99477:function(Yn,hn,cn){cn.d(hn,{CP7:function(){return pm},DvJ:function(){return Ci},Kj0:function(){return ln},Pa4:function(){return U},YBo:function(){return n0},cPb:function(){return un},cek:function(){return h0},xsS:function(){return mm}});const Ht="162",Ma={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},so=0,er=1,fi=2,oo=3,cp=0,Dc=1,th=2,di=3,ti=0,Cn=1,pi=2,Ii=0,Tr=1,Uc=2,cs=3,Nc=4,nh=5,Li=100,ih=101,lp=102,It=103,Fc=104,rh=200,sh=201,Oc=202,Sa=203,ba=204,ls=205,oh=206,ah=207,ch=208,lh=209,uh=210,hh=211,fh=212,dh=213,Di=214,tr=0,mi=1,ph=2,ao=3,mh=4,gh=5,_h=6,xh=7,co=0,yh=1,vh=2,Ui=0,Mh=1,Sh=2,bh=3,Bc=4,zc=5,Eh=6,Ah=7,lo="attached",us="detached",hs=300,ni=301,gi=302,wr=303,Rr=304,fs=306,uo=1e3,Sn=1001,ho=1002,Zt=1003,Ea=1004,up=1004,Cr=1005,hp=1005,Ft=1006,Ni=1007,kc=1007,Zn=1008,ds=1008,nr=1009,Th=1010,Aa=1011,fo=1012,Ta=1013,_i=1014,bn=1015,ps=1016,wa=1017,ms=1018,ir=1020,Vc=1021,Ot=1023,Gc=1024,wh=1025,rr=1026,Pr=1027,Hc=1028,Wc=1029,Rh=1030,Xc=1031,Ra=1033,Ir=33776,Ca=33777,po=33778,mo=33779,gs=35840,Pa=35841,qc=35842,_s=35843,Yc=36196,$c=37492,Zc=37496,xs=37808,Lr=37809,Jc=37810,go=37811,Kc=37812,jc=37813,Qc=37814,Ia=37815,el=37816,tl=37817,sr=37818,nl=37819,il=37820,_o=37821,xo=36492,La=36494,Ch=36495,or=36283,rl=36284,Da=36285,pt=36286,Ph=2200,Ih=2201,Lh=2202,Dr=2300,yo=2301,vo=2302,ar=2400,cr=2401,ys=2402,vs=2500,Mo=2501,sl=0,fp=1,ol=2,So=3200,al=3201,xi=0,bo=1,ii="",zn="srgb",ri="srgb-linear",Ua="display-p3",Eo="display-p3-linear",kn="linear",vt="srgb",Ao="rec709",Ur="p3",Dh=0,Nr=7680,dp=7681,pp=7682,mp=7683,gp=34055,_p=34056,xp=5386,yp=512,vp=513,Mp=514,Sp=515,bp=516,Ep=517,Ap=518,Na=519,cl=512,Uh=513,Nh=514,ll=515,Fh=516,Oh=517,Bh=518,Tp=519,Fa=35044,H0=35048,W0=35040,Ms=35045,wp=35049,To=35041,X0=35046,yi=35050,Ss=35042,zh="100",wo="300 es",Pn=1035,Mt=2e3,Fr=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ro=1234567;const si=Math.PI/180,Or=180/Math.PI;function Vn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function Jn(s,e){return(s%e+e)%e}function Oi(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Bi(s,e,t){return s!==e?(t-s)/(e-s):0}function zi(s,e,t){return(1-t)*s+t*e}function kh(s,e,t,n){return zi(s,e,1-Math.exp(-t*n))}function Vh(s,e=1){return e-Math.abs(Jn(s,e*2)-e)}function Gh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Oa(s,e){return s+Math.random()*(e-s)}function Ba(s){return s*(.5-Math.random())}function Co(s){s!==void 0&&(Ro=s);let e=Ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Po(s){return s*si}function ul(s){return s*Or}function za(s){return(s&s-1)===0&&s!==0}function Xh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Io(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qh(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+n)/2),d=o((e+n)/2),p=r((e-n)/2),m=o((e-n)/2),g=r((n-e)/2),y=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*p,l*m,a*h);break;case"YZY":s.set(l*m,a*d,l*p,a*h);break;case"ZXZ":s.set(l*p,l*m,a*d,a*h);break;case"XZX":s.set(a*d,l*y,l*g,a*h);break;case"YXY":s.set(l*g,a*d,l*y,a*h);break;case"ZYZ":s.set(l*y,l*g,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const hl={DEG2RAD:si,RAD2DEG:Or,generateUUID:Vn,clamp:Et,euclideanModulo:Jn,mapLinear:Oi,inverseLerp:Bi,lerp:zi,damp:kh,pingpong:Vh,smoothstep:Gh,smootherstep:Hh,randInt:Wh,randFloat:Oa,randFloatSpread:Ba,seededRandom:Co,degToRad:Po,radToDeg:ul,isPowerOfTwo:za,ceilPowerOfTwo:Xh,floorPowerOfTwo:Io,setQuaternionFromProperEuler:qh,normalize:it,denormalize:En};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,r,o,a,l,h){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,h)}set(e,t,n,i,r,o,a,l,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],d=n[4],p=n[7],m=n[2],g=n[5],y=n[8],b=i[0],v=i[3],_=i[6],E=i[1],M=i[4],w=i[7],B=i[2],L=i[5],D=i[8];return r[0]=o*b+a*E+l*B,r[3]=o*v+a*M+l*L,r[6]=o*_+a*w+l*D,r[1]=h*b+d*E+p*B,r[4]=h*v+d*M+p*L,r[7]=h*_+d*w+p*D,r[2]=m*b+g*E+y*B,r[5]=m*v+g*M+y*L,r[8]=m*_+g*w+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8];return t*o*d-t*a*h-n*r*d+n*a*l+i*r*h-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8],p=d*o-a*h,m=a*l-d*r,g=h*r-o*l,y=t*p+n*m+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return e[0]=p*b,e[1]=(i*h-d*n)*b,e[2]=(a*n-i*o)*b,e[3]=m*b,e[4]=(d*t-i*l)*b,e[5]=(i*r-a*t)*b,e[6]=g*b,e[7]=(n*l-h*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-i*h,i*l,-i*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new rt;function ka(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const fl={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Br(s,e){return new fl[s](e)}function bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yh(){const s=bs("canvas");return s.style.display="block",s}const dl={};function pl(s){s in dl||(dl[s]=!0,console.warn(s))}const ml=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gl=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[ri]:{transfer:kn,primaries:Ao,toReference:s=>s,fromReference:s=>s},[zn]:{transfer:vt,primaries:Ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Eo]:{transfer:kn,primaries:Ur,toReference:s=>s.applyMatrix3(gl),fromReference:s=>s.applyMatrix3(ml)},[Ua]:{transfer:vt,primaries:Ur,toReference:s=>s.convertSRGBToLinear().applyMatrix3(gl),fromReference:s=>s.applyMatrix3(ml).convertLinearToSRGB()}},$h=new Set([ri,Eo]),Rt={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!$h.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Do[e].toReference,i=Do[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Do[s].primaries},getTransfer:function(s){return s===ii?kn:Do[s].transfer}};function zr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Va(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let kr;class _l{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kr===void 0&&(kr=bs("canvas")),kr.width=e.width,kr.height=e.height;const n=kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class Vr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ga(i[o].image)):r.push(Ga(i[o]))}else r=Ga(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ga(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?_l.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class fn extends Fi{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Sn,i=Sn,r=Ft,o=Zn,a=Ot,l=nr,h=fn.DEFAULT_ANISOTROPY,d=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Vn(),this.name="",this.source=new Vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}fn.DEFAULT_IMAGE=null,fn.DEFAULT_MAPPING=hs,fn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,h=l[0],d=l[4],p=l[8],m=l[1],g=l[5],y=l[9],b=l[2],v=l[6],_=l[10];if(Math.abs(d-m)<.01&&Math.abs(p-b)<.01&&Math.abs(y-v)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+b)<.1&&Math.abs(y+v)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,w=(g+1)/2,B=(_+1)/2,L=(d+m)/4,D=(p+b)/4,V=(y+v)/4;return M>w&&M>B?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=L/n,r=D/n):w>B?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=L/i,r=V/i):B<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(B),n=D/r,i=V/r),this.set(n,i,r,t),this}let E=Math.sqrt((v-y)*(v-y)+(p-b)*(p-b)+(m-d)*(m-d));return Math.abs(E)<.001&&(E=1),this.x=(v-y)/E,this.y=(p-b)/E,this.z=(m-d)/E,this.w=Math.acos((h+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends Kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ha extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rp extends null{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ha(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class xl extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cp extends null{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new xl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Gn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],h=n[i+1],d=n[i+2],p=n[i+3];const m=r[o+0],g=r[o+1],y=r[o+2],b=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=b;return}if(p!==b||l!==m||h!==g||d!==y){let v=1-a;const _=l*m+h*g+d*y+p*b,E=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const B=Math.sqrt(M),L=Math.atan2(B,_*E);v=Math.sin(v*L)/B,a=Math.sin(a*L)/B}const w=a*E;if(l=l*v+m*w,h=h*v+g*w,d=d*v+y*w,p=p*v+b*w,v===1-a){const B=1/Math.sqrt(l*l+h*h+d*d+p*p);l*=B,h*=B,d*=B,p*=B}}e[t]=l,e[t+1]=h,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],h=n[i+2],d=n[i+3],p=r[o],m=r[o+1],g=r[o+2],y=r[o+3];return e[t]=a*y+d*p+l*g-h*m,e[t+1]=l*y+d*m+h*p-a*g,e[t+2]=h*y+d*g+a*m-l*p,e[t+3]=d*y-a*p-l*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),d=a(i/2),p=a(r/2),m=l(n/2),g=l(i/2),y=l(r/2);switch(o){case"XYZ":this._x=m*d*p+h*g*y,this._y=h*g*p-m*d*y,this._z=h*d*y+m*g*p,this._w=h*d*p-m*g*y;break;case"YXZ":this._x=m*d*p+h*g*y,this._y=h*g*p-m*d*y,this._z=h*d*y-m*g*p,this._w=h*d*p+m*g*y;break;case"ZXY":this._x=m*d*p-h*g*y,this._y=h*g*p+m*d*y,this._z=h*d*y+m*g*p,this._w=h*d*p-m*g*y;break;case"ZYX":this._x=m*d*p-h*g*y,this._y=h*g*p+m*d*y,this._z=h*d*y-m*g*p,this._w=h*d*p+m*g*y;break;case"YZX":this._x=m*d*p+h*g*y,this._y=h*g*p+m*d*y,this._z=h*d*y-m*g*p,this._w=h*d*p-m*g*y;break;case"XZY":this._x=m*d*p-h*g*y,this._y=h*g*p-m*d*y,this._z=h*d*y+m*g*p,this._w=h*d*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],d=t[6],p=t[10],m=n+a+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-h)*g,this._z=(o-i)*g}else if(n>a&&n>p){const g=2*Math.sqrt(1+n-a-p);this._w=(d-l)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(r+h)/g}else if(a>p){const g=2*Math.sqrt(1+a-n-p);this._w=(r-h)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+p-n-a);this._w=(o-i)/g,this._x=(r+h)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,d=t._w;return this._x=n*d+o*a+i*h-r*l,this._y=i*d+o*l+r*a-n*h,this._z=r*d+o*h+n*l-i*a,this._w=o*d-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,a),p=Math.sin((1-t)*d)/h,m=Math.sin(t*d)/h;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*i-a*n),d=2*(a*t-r*i),p=2*(r*n-o*t);return this.x=t+l*h+o*p-a*d,this.y=n+l*d+a*h-r*p,this.z=i+l*p+r*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new U,yl=new Gn;class In{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),No.subVectors(this.max,Es),Gr.subVectors(e.a,Es),Hr.subVectors(e.b,Es),Wr.subVectors(e.c,Es),ki.subVectors(Hr,Gr),Vi.subVectors(Wr,Hr),ur.subVectors(Gr,Wr);let t=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-ur.z,ur.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,ur.z,0,-ur.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-ur.y,ur.x,0];return!Xa(t,Gr,Hr,Wr,No)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Gr,Hr,Wr,No))?!1:(Fo.crossVectors(ki,Vi),t=[Fo.x,Fo.y,Fo.z],Xa(t,Gr,Hr,Wr,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new U,new U,new U,new U,new U,new U,new U,new U],Kn=new U,Uo=new In,Gr=new U,Hr=new U,Wr=new U,ki=new U,Vi=new U,ur=new U,Es=new U,No=new U,Fo=new U,hr=new U;function Xa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hr.fromArray(s,r);const a=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=e.dot(hr),h=t.dot(hr),d=n.dot(hr);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}const jh=new In,As=new U,qa=new U;class An{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(qa)),this.expandByPoint(As.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new U,Ya=new U,Oo=new U,Gi=new U,$a=new U,Bo=new U,Za=new U;class Ts{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ya.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Ya);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Oo),a=Gi.dot(this.direction),l=-Gi.dot(Oo),h=Gi.lengthSq(),d=Math.abs(1-o*o);let p,m,g,y;if(d>0)if(p=o*l-a,m=o*a-l,y=r*d,p>=0)if(m>=-y)if(m<=y){const b=1/d;p*=b,m*=b,g=p*(p+o*m+2*a)+m*(o*p+m+2*l)+h}else m=r,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+h;else m=-r,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+h;else m<=-y?(p=Math.max(0,-(-o*r+a)),m=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+m*(m+2*l)+h):m<=y?(p=0,m=Math.min(Math.max(-r,-l),r),g=m*(m+2*l)+h):(p=Math.max(0,-(o*r+a)),m=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+m*(m+2*l)+h);else m=o>0?-r:r,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Ya).addScaledVector(Oo,m),g}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),d>=0?(r=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,r){$a.subVectors(t,e),Bo.subVectors(n,e),Za.crossVectors($a,Bo);let o=this.direction.dot(Za),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(Bo.crossVectors(Gi,Bo));if(l<0)return null;const h=a*this.direction.dot($a.cross(Gi));if(h<0||l+h>o)return null;const d=-a*Gi.dot(Za);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,r,o,a,l,h,d,p,m,g,y,b,v){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,h,d,p,m,g,y,b,v)}set(e,t,n,i,r,o,a,l,h,d,p,m,g,y,b,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=h,_[6]=d,_[10]=p,_[14]=m,_[3]=g,_[7]=y,_[11]=b,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wt.setFromMatrixColumn(e,0).length(),r=1/wt.setFromMatrixColumn(e,1).length(),o=1/wt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const m=o*d,g=o*p,y=a*d,b=a*p;t[0]=l*d,t[4]=-l*p,t[8]=h,t[1]=g+y*h,t[5]=m-b*h,t[9]=-a*l,t[2]=b-m*h,t[6]=y+g*h,t[10]=o*l}else if(e.order==="YXZ"){const m=l*d,g=l*p,y=h*d,b=h*p;t[0]=m+b*a,t[4]=y*a-g,t[8]=o*h,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=g*a-y,t[6]=b+m*a,t[10]=o*l}else if(e.order==="ZXY"){const m=l*d,g=l*p,y=h*d,b=h*p;t[0]=m-b*a,t[4]=-o*p,t[8]=y+g*a,t[1]=g+y*a,t[5]=o*d,t[9]=b-m*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const m=o*d,g=o*p,y=a*d,b=a*p;t[0]=l*d,t[4]=y*h-g,t[8]=m*h+b,t[1]=l*p,t[5]=b*h+m,t[9]=g*h-y,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*h,y=a*l,b=a*h;t[0]=l*d,t[4]=b-m*p,t[8]=y*p+g,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-h*d,t[6]=g*p+y,t[10]=m-b*p}else if(e.order==="XZY"){const m=o*l,g=o*h,y=a*l,b=a*h;t[0]=l*d,t[4]=-p,t[8]=h*d,t[1]=m*p+b,t[5]=o*d,t[9]=g*p-y,t[2]=y*p-g,t[6]=a*d,t[10]=b*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xr,e,zo)}lookAt(e,t,n){const i=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Dn.crossVectors(n,Un),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Dn.crossVectors(n,Un)),Dn.normalize(),en.crossVectors(Un,Dn),i[0]=Dn.x,i[4]=en.x,i[8]=Un.x,i[1]=Dn.y,i[5]=en.y,i[9]=Un.y,i[2]=Dn.z,i[6]=en.z,i[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],d=n[1],p=n[5],m=n[9],g=n[13],y=n[2],b=n[6],v=n[10],_=n[14],E=n[3],M=n[7],w=n[11],B=n[15],L=i[0],D=i[4],V=i[8],$=i[12],T=i[1],F=i[5],fe=i[9],de=i[13],G=i[2],se=i[6],ee=i[10],he=i[14],ae=i[3],ce=i[7],ve=i[11],ye=i[15];return r[0]=o*L+a*T+l*G+h*ae,r[4]=o*D+a*F+l*se+h*ce,r[8]=o*V+a*fe+l*ee+h*ve,r[12]=o*$+a*de+l*he+h*ye,r[1]=d*L+p*T+m*G+g*ae,r[5]=d*D+p*F+m*se+g*ce,r[9]=d*V+p*fe+m*ee+g*ve,r[13]=d*$+p*de+m*he+g*ye,r[2]=y*L+b*T+v*G+_*ae,r[6]=y*D+b*F+v*se+_*ce,r[10]=y*V+b*fe+v*ee+_*ve,r[14]=y*$+b*de+v*he+_*ye,r[3]=E*L+M*T+w*G+B*ae,r[7]=E*D+M*F+w*se+B*ce,r[11]=E*V+M*fe+w*ee+B*ve,r[15]=E*$+M*de+w*he+B*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],d=e[2],p=e[6],m=e[10],g=e[14],y=e[3],b=e[7],v=e[11],_=e[15];return y*(+r*l*p-i*h*p-r*a*m+n*h*m+i*a*g-n*l*g)+b*(+t*l*g-t*h*m+r*o*m-i*o*g+i*h*d-r*l*d)+v*(+t*h*p-t*a*g-r*o*p+n*o*g+r*a*d-n*h*d)+_*(-i*a*d-t*l*p+t*a*m+i*o*p-n*o*m+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8],p=e[9],m=e[10],g=e[11],y=e[12],b=e[13],v=e[14],_=e[15],E=p*v*h-b*m*h+b*l*g-a*v*g-p*l*_+a*m*_,M=y*m*h-d*v*h-y*l*g+o*v*g+d*l*_-o*m*_,w=d*b*h-y*p*h+y*a*g-o*b*g-d*a*_+o*p*_,B=y*p*l-d*b*l-y*a*m+o*b*m+d*a*v-o*p*v,L=t*E+n*M+i*w+r*B;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=E*D,e[1]=(b*m*r-p*v*r-b*i*g+n*v*g+p*i*_-n*m*_)*D,e[2]=(a*v*r-b*l*r+b*i*h-n*v*h-a*i*_+n*l*_)*D,e[3]=(p*l*r-a*m*r-p*i*h+n*m*h+a*i*g-n*l*g)*D,e[4]=M*D,e[5]=(d*v*r-y*m*r+y*i*g-t*v*g-d*i*_+t*m*_)*D,e[6]=(y*l*r-o*v*r-y*i*h+t*v*h+o*i*_-t*l*_)*D,e[7]=(o*m*r-d*l*r+d*i*h-t*m*h-o*i*g+t*l*g)*D,e[8]=w*D,e[9]=(y*p*r-d*b*r-y*n*g+t*b*g+d*n*_-t*p*_)*D,e[10]=(o*b*r-y*a*r+y*n*h-t*b*h-o*n*_+t*a*_)*D,e[11]=(d*a*r-o*p*r-d*n*h+t*p*h+o*n*g-t*a*g)*D,e[12]=B*D,e[13]=(d*b*i-y*p*i+y*n*m-t*b*m-d*n*v+t*p*v)*D,e[14]=(y*a*i-o*b*i-y*n*l+t*b*l+o*n*v-t*a*v)*D,e[15]=(o*p*i-d*a*i+d*n*l-t*p*l-o*n*m+t*a*m)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,h=r*o,d=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,d*a+n,d*l-i*o,0,h*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,d=o+o,p=a+a,m=r*h,g=r*d,y=r*p,b=o*d,v=o*p,_=a*p,E=l*h,M=l*d,w=l*p,B=n.x,L=n.y,D=n.z;return i[0]=(1-(b+_))*B,i[1]=(g+w)*B,i[2]=(y-M)*B,i[3]=0,i[4]=(g-w)*L,i[5]=(1-(m+_))*L,i[6]=(v+E)*L,i[7]=0,i[8]=(y+M)*D,i[9]=(v-E)*D,i[10]=(1-(m+b))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=wt.set(i[0],i[1],i[2]).length();const o=wt.set(i[4],i[5],i[6]).length(),a=wt.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);const h=1/r,d=1/o,p=1/a;return Ln.elements[0]*=h,Ln.elements[1]*=h,Ln.elements[2]*=h,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=p,Ln.elements[9]*=p,Ln.elements[10]*=p,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Mt){const l=this.elements,h=2*r/(t-e),d=2*r/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,y;if(a===Mt)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Fr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Mt){const l=this.elements,h=1/(t-e),d=1/(n-i),p=1/(o-r),m=(t+e)*h,g=(n+i)*d;let y,b;if(a===Mt)y=(o+r)*p,b=-2*p;else if(a===Fr)y=r*p,b=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=b,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wt=new U,Ln=new He,Xr=new U(0,0,0),zo=new U(1,1,1),Dn=new U,en=new U,Un=new U,Ja=new He,Ka=new Gn;class zt{constructor(e=0,t=0,n=0,i=zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],d=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ja,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zt.DEFAULT_ORDER="XYZ";class fr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ja=0;const vl=new U,qr=new Gn,Si=new He,ko=new U,bi=new U,dr=new U,ws=new Gn,Hi=new U(1,0,0),Wi=new U(0,1,0),Ei=new U(0,0,1),Ml={type:"added"},Qa={type:"removed"},Yr={type:"childadded",child:null},Vo={type:"childremoved",child:null};class Lt extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ja++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new U,t=new zt,n=new Gn,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new rt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Hi,e)}rotateY(e){return this.rotateOnAxis(Wi,e)}rotateZ(e){return this.rotateOnAxis(Ei,e)}translateOnAxis(e,t){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hi,e)}translateY(e){return this.translateOnAxis(Wi,e)}translateZ(e){return this.translateOnAxis(Ei,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(bi,ko,this.up):Si.lookAt(ko,bi,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),qr.setFromRotationMatrix(Si),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ml),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qa),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,dr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,ws,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const p=l[h];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),d=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(a){const l=[];for(const h in a){const d=a[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new U(0,1,0),Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new U,oi=new U,Go=new U,Ai=new U,pr=new U,Ti=new U,ec=new U,Ho=new U,Xi=new U,Wo=new U;class Hn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qn.subVectors(i,t),oi.subVectors(n,t),Go.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(oi),l=qn.dot(Go),h=oi.dot(oi),d=oi.dot(Go),p=o*h-a*a;if(p===0)return r.set(0,0,0),null;const m=1/p,g=(h*l-a*d)*m,y=(o*d-a*l)*m;return r.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),oi.subVectors(e,t),qn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),qn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;pr.subVectors(i,n),Ti.subVectors(r,n),Ho.subVectors(e,n);const l=pr.dot(Ho),h=Ti.dot(Ho);if(l<=0&&h<=0)return t.copy(n);Xi.subVectors(e,i);const d=pr.dot(Xi),p=Ti.dot(Xi);if(d>=0&&p<=d)return t.copy(i);const m=l*p-d*h;if(m<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(pr,o);Wo.subVectors(e,r);const g=pr.dot(Wo),y=Ti.dot(Wo);if(y>=0&&g<=y)return t.copy(r);const b=g*h-l*y;if(b<=0&&h>=0&&y<=0)return a=h/(h-y),t.copy(n).addScaledVector(Ti,a);const v=d*y-g*p;if(v<=0&&p-d>=0&&g-y>=0)return ec.subVectors(r,i),a=(p-d)/(p-d+(g-y)),t.copy(i).addScaledVector(ec,a);const _=1/(v+b+m);return o=b*_,a=m*_,t.copy(n).addScaledVector(pr,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function tc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=Jn(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return Rt.toWorkingColorSpace(this,i),this}setStyle(e,t=zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){const n=Xo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Rt.fromWorkingColorSpace(tn.copy(this),e),Math.round(Et(tn.r*255,0,255))*65536+Math.round(Et(tn.g*255,0,255))*256+Math.round(Et(tn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,h;const d=(a+o)/2;if(a===o)l=0,h=0;else{const p=o-a;switch(h=d<=.5?p/(o+a):p/(2-o-a),o){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=zn){Rt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Rs);const n=zi(wi.h,Rs.h,t),i=zi(wi.s,Rs.s,t),r=zi(wi.l,Rs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Le;Le.NAMES=Xo;let Cs=0;class qi extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cs++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Tr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=ls,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==ls&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ri extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jn=$r();function $r(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const h=l-127;h<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):h<-14?(n[l]=1024>>-h-14,n[l|256]=1024>>-h-14|32768,i[l]=-h-1,i[l|256]=-h-1):h<=15?(n[l]=h+15<<10,n[l|256]=h+15<<10|32768,i[l]=13,i[l|256]=13):h<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,d=0;for(;!(h&8388608);)h<<=1,d-=8388608;h&=-8388609,d+=947912704,r[l]=h|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Nn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Et(s,-65504,65504),jn.floatView[0]=s;const e=jn.uint32View[0],t=e>>23&511;return jn.baseTable[t]+((e&8388607)>>jn.shiftTable[t])}function Ps(s){const e=s>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[e]+(s&1023)]+jn.exponentTable[e],jn.floatView[0]}const Pp={toHalfFloat:Nn,fromHalfFloat:Ps},Xt=new U,Zr=new ue;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class Qh extends null{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Ip extends null{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Lp extends null{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class ef extends null{constructor(e,t,n){super(new Int16Array(e),t,n)}}class nc extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ic extends null{constructor(e,t,n){super(new Int32Array(e),t,n)}}class rc extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dp extends null{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ps(this.array[e*this.itemSize]);return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=Nn(t),this}getY(e){let t=Ps(this.array[e*this.itemSize+1]);return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=Nn(t),this}getZ(e){let t=Ps(this.array[e*this.itemSize+2]);return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=Nn(t),this}getW(e){let t=Ps(this.array[e*this.itemSize+3]);return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=Nn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=Nn(t),this.array[e+1]=Nn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=Nn(t),this.array[e+1]=Nn(n),this.array[e+2]=Nn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=Nn(t),this.array[e+1]=Nn(n),this.array[e+2]=Nn(i),this.array[e+3]=Nn(r),this}}class ze extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Up=0;const Fn=new He,sc=new Lt,Yi=new U,dn=new In,Is=new In,qt=new U;class ft extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ka(e)?rc:nc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(dn.min,Is.min),dn.expandByPoint(qt),qt.addVectors(dn.max,Is.max),dn.expandByPoint(qt)):(dn.expandByPoint(Is.min),dn.expandByPoint(Is.max))}dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)qt.fromBufferAttribute(a,h),l&&(Yi.fromBufferAttribute(e,h),qt.add(Yi)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<n.count;V++)a[V]=new U,l[V]=new U;const h=new U,d=new U,p=new U,m=new ue,g=new ue,y=new ue,b=new U,v=new U;function _(V,$,T){h.fromBufferAttribute(n,V),d.fromBufferAttribute(n,$),p.fromBufferAttribute(n,T),m.fromBufferAttribute(r,V),g.fromBufferAttribute(r,$),y.fromBufferAttribute(r,T),d.sub(h),p.sub(h),g.sub(m),y.sub(m);const F=1/(g.x*y.y-y.x*g.y);isFinite(F)&&(b.copy(d).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(F),v.copy(p).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(F),a[V].add(b),a[$].add(b),a[T].add(b),l[V].add(v),l[$].add(v),l[T].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let V=0,$=E.length;V<$;++V){const T=E[V],F=T.start,fe=T.count;for(let de=F,G=F+fe;de<G;de+=3)_(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const M=new U,w=new U,B=new U,L=new U;function D(V){B.fromBufferAttribute(i,V),L.copy(B);const $=a[V];M.copy($),M.sub(B.multiplyScalar(B.dot($))).normalize(),w.crossVectors(L,$);const F=w.dot(l[V])<0?-1:1;o.setXYZW(V,M.x,M.y,M.z,F)}for(let V=0,$=E.length;V<$;++V){const T=E[V],F=T.start,fe=T.count;for(let de=F,G=F+fe;de<G;de+=3)D(e.getX(de+0)),D(e.getX(de+1)),D(e.getX(de+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new U,r=new U,o=new U,a=new U,l=new U,h=new U,d=new U,p=new U;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),b=e.getX(m+1),v=e.getX(m+2);i.fromBufferAttribute(t,y),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,v),d.subVectors(o,r),p.subVectors(i,r),d.cross(p),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,v),a.add(d),l.add(d),h.add(d),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,r),p.subVectors(i,r),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const h=a.array,d=a.itemSize,p=a.normalized,m=new h.constructor(l.length*d);let g=0,y=0;for(let b=0,v=l.length;b<v;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*d;for(let _=0;_<d;_++)m[y++]=h[g++]}return new kt(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ft,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=e(l,n);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let d=0,p=h.length;d<p;d++){const m=h[d],g=e(m,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];d.push(g.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],p=r[h];for(let m=0,g=p.length;m<g;m++)d.push(p[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new He,$i=new Ts,Ls=new An,Sl=new U,Jr=new U,Kr=new U,jr=new U,oc=new U,Ds=new U,Yo=new ue,$o=new ue,Zo=new ue,bl=new U,El=new U,Al=new U,Jo=new U,mr=new U;class ln extends Lt{constructor(e=new ft,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ds.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=a[l],p=r[l];d!==0&&(oc.fromBufferAttribute(p,e),o?Ds.addScaledVector(oc,d):Ds.addScaledVector(oc.sub(t),d))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Ls.containsPoint($i.origin)===!1&&($i.intersectSphere(Ls,Sl)===null||$i.origin.distanceToSquared(Sl)>V0(e.far-e.near,2)))&&(qo.copy(r).invert(),$i.copy(e.ray).applyMatrix4(qo),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,m=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,b=m.length;y<b;y++){const v=m[y],_=o[v.materialIndex],E=Math.max(v.start,g.start),M=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let w=E,B=M;w<B;w+=3){const L=a.getX(w),D=a.getX(w+1),V=a.getX(w+2);i=Us(this,_,e,n,h,d,p,L,D,V),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let v=y,_=b;v<_;v+=3){const E=a.getX(v),M=a.getX(v+1),w=a.getX(v+2);i=Us(this,o,e,n,h,d,p,E,M,w),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,b=m.length;y<b;y++){const v=m[y],_=o[v.materialIndex],E=Math.max(v.start,g.start),M=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let w=E,B=M;w<B;w+=3){const L=w,D=w+1,V=w+2;i=Us(this,_,e,n,h,d,p,L,D,V),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let v=y,_=b;v<_;v+=3){const E=v,M=v+1,w=v+2;i=Us(this,o,e,n,h,d,p,E,M,w),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function Tl(s,e,t,n,i,r,o,a){let l;if(e.side===Cn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ti,a),l===null)return null;mr.copy(a),mr.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(mr);return h<t.near||h>t.far?null:{distance:h,point:mr.clone(),object:s}}function Us(s,e,t,n,i,r,o,a,l,h){s.getVertexPosition(a,Jr),s.getVertexPosition(l,Kr),s.getVertexPosition(h,jr);const d=Tl(s,e,t,n,Jr,Kr,jr,Jo);if(d){i&&(Yo.fromBufferAttribute(i,a),$o.fromBufferAttribute(i,l),Zo.fromBufferAttribute(i,h),d.uv=Hn.getInterpolation(Jo,Jr,Kr,jr,Yo,$o,Zo,new ue)),r&&(Yo.fromBufferAttribute(r,a),$o.fromBufferAttribute(r,l),Zo.fromBufferAttribute(r,h),d.uv1=Hn.getInterpolation(Jo,Jr,Kr,jr,Yo,$o,Zo,new ue)),o&&(bl.fromBufferAttribute(o,a),El.fromBufferAttribute(o,l),Al.fromBufferAttribute(o,h),d.normal=Hn.getInterpolation(Jo,Jr,Kr,jr,bl,El,Al,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c:h,normal:new U,materialIndex:0};Hn.getNormal(Jr,Kr,jr,p.normal),d.face=p}return d}class Ci extends ft{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],d=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,i,o,2),y("x","z","y",1,-1,e,n,-t,i,o,3),y("x","y","z",1,-1,e,t,n,i,r,4),y("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2));function y(b,v,_,E,M,w,B,L,D,V,$){const T=w/D,F=B/V,fe=w/2,de=B/2,G=L/2,se=D+1,ee=V+1;let he=0,ae=0;const ce=new U;for(let ve=0;ve<ee;ve++){const ye=ve*F-de;for(let Fe=0;Fe<se;Fe++){const st=Fe*T-fe;ce[b]=st*E,ce[v]=ye*M,ce[_]=G,h.push(ce.x,ce.y,ce.z),ce[b]=0,ce[v]=0,ce[_]=L>0?1:-1,d.push(ce.x,ce.y,ce.z),p.push(Fe/D),p.push(1-ve/V),he+=1}}for(let ve=0;ve<V;ve++)for(let ye=0;ye<D;ye++){const Fe=m+ye+se*ve,st=m+ye+se*(ve+1),te=m+(ye+1)+se*(ve+1),_e=m+(ye+1)+se*ve;l.push(Fe,st,_e),l.push(st,te,_e),ae+=6}a.addGroup(g,ae,$),g+=ae,m+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(s){const e={};for(let t=0;t<s.length;t++){const n=gr(s[t]);for(const i in n)e[i]=n[i]}return e}function wl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ac(s){return s.getRenderTarget()===null?s.outputColorSpace:Rt.workingColorSpace}const Rl={clone:gr,merge:pn};var Cl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cl,this.fragmentShader=Pl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=wl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ko extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new U,Il=new ue,Ll=new ue;class un extends Ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(si*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(si*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Ll),t.subVectors(Ll,Il)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(si*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qr=-90,es=1;class tf extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(Qr,es,e,t);i.layers=this.layers,this.add(i);const r=new un(Qr,es,e,t);r.layers=this.layers,this.add(r);const o=new un(Qr,es,e,t);o.layers=this.layers,this.add(o);const a=new un(Qr,es,e,t);a.layers=this.layers,this.add(a);const l=new un(Qr,es,e,t);l.layers=this.layers,this.add(l);const h=new un(Qr,es,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const h of t)this.remove(h);if(e===Mt)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class jo extends fn{constructor(e,t,n,i,r,o,a,l,h,d){e=e!==void 0?e:[],t=t!==void 0?t:ni,super(e,t,n,i,r,o,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nf extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ci(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Ii});r.uniforms.tEquirect.value=t;const o=new ln(i,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Ft),new tf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const cc=new U,rf=new U,sf=new rt;class _r{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cc.subVectors(n,t).cross(rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sf.getNormalMatrix(e),i=this.coplanarPoint(cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new An,ts=new U;class Ns{constructor(e=new _r,t=new _r,n=new _r,i=new _r,r=new _r,o=new _r){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mt){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],d=i[5],p=i[6],m=i[7],g=i[8],y=i[9],b=i[10],v=i[11],_=i[12],E=i[13],M=i[14],w=i[15];if(n[0].setComponents(l-r,m-h,v-g,w-_).normalize(),n[1].setComponents(l+r,m+h,v+g,w+_).normalize(),n[2].setComponents(l+o,m+d,v+y,w+E).normalize(),n[3].setComponents(l-o,m-d,v-y,w-E).normalize(),n[4].setComponents(l-a,m-p,v-b,w-M).normalize(),t===Mt)n[5].setComponents(l+a,m+p,v+b,w+M).normalize();else if(t===Fr)n[5].setComponents(a,p,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ts.x=i.normal.x>0?e.max.x:e.min.x,ts.y=i.normal.y>0?e.max.y:e.min.y,ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Dl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,d){const p=h.array,m=h.usage,g=p.byteLength,y=s.createBuffer();s.bindBuffer(d,y),s.bufferData(d,p,m),h.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,d,p){const m=d.array,g=d._updateRange,y=d.updateRanges;if(s.bindBuffer(p,h),g.count===-1&&y.length===0&&s.bufferSubData(p,0,m),y.length!==0){for(let b=0,v=y.length;b<v;b++){const _=y[b];t?s.bufferSubData(p,_.start*m.BYTES_PER_ELEMENT,m,_.start,_.count):s.bufferSubData(p,_.start*m.BYTES_PER_ELEMENT,m.subarray(_.start,_.start+_.count))}d.clearUpdateRanges()}g.count!==-1&&(t?s.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):s.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function l(h,d){if(h.isGLBufferAttribute){const m=n.get(h);(!m||m.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);if(p===void 0)n.set(h,i(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:o,remove:a,update:l}}class Fs extends ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),h=a+1,d=l+1,p=e/a,m=t/l,g=[],y=[],b=[],v=[];for(let _=0;_<d;_++){const E=_*m-o;for(let M=0;M<h;M++){const w=M*p-r;y.push(w,-E,0),b.push(0,0,1),v.push(M/a),v.push(1-_/l)}}for(let _=0;_<l;_++)for(let E=0;E<a;E++){const M=E+h*_,w=E+h*(_+1),B=E+1+h*(_+1),L=E+1+h*_;g.push(M,w,L),g.push(w,B,L)}this.setIndex(g),this.setAttribute("position",new ze(y,3)),this.setAttribute("normal",new ze(b,3)),this.setAttribute("uv",new ze(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ea=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ta=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tt=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ul=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ol=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tn=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wn=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,na=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zi=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ia=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jt=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ns=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ff=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ra=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sa=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ql=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$l=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ql=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Os=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oa=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aa=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ru=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,su=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ou=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yr=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lt={alphahash_fragment:of,alphahash_pars_fragment:af,alphamap_fragment:cf,alphamap_pars_fragment:lf,alphatest_fragment:uf,alphatest_pars_fragment:hf,aomap_fragment:ff,aomap_pars_fragment:Qo,batching_pars_vertex:ea,batching_vertex:uc,begin_vertex:ta,beginnormal_vertex:tt,bsdfs:Ul,iridescence_fragment:df,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:Nl,color_fragment:Fl,color_pars_fragment:Ol,color_pars_vertex:Bl,color_vertex:zl,common:xf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:vf,displacementmap_pars_vertex:Mf,displacementmap_vertex:Sf,emissivemap_fragment:bf,emissivemap_pars_fragment:Ef,colorspace_fragment:Af,colorspace_pars_fragment:Tf,envmap_fragment:wf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Cf,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:Vl,envmap_vertex:If,fog_vertex:Tn,fog_pars_vertex:wn,fog_fragment:na,fog_pars_fragment:Zi,gradientmap_pars_fragment:ia,lightmap_fragment:hc,lightmap_pars_fragment:Jt,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:kl,lights_toon_fragment:Gl,lights_toon_pars_fragment:Uf,lights_phong_fragment:ns,lights_phong_pars_fragment:Nf,lights_physical_fragment:Ff,lights_physical_pars_fragment:Of,lights_fragment_begin:Bf,lights_fragment_maps:Hl,lights_fragment_end:ra,logdepthbuf_fragment:sa,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Wl,map_fragment:Vf,map_pars_fragment:Xl,map_particle_fragment:Gf,map_particle_pars_fragment:ql,metalnessmap_fragment:Yl,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Wf,morphcolor_vertex:$l,morphnormal_vertex:Zl,morphtarget_pars_vertex:Jl,morphtarget_vertex:Kl,normal_fragment_begin:Xf,normal_fragment_maps:jl,normal_pars_fragment:Ql,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:eu,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:tu,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:Jf,opaque_fragment:nu,packing:Os,premultiplied_alpha_fragment:Kf,project_vertex:iu,dithering_fragment:fc,dithering_pars_fragment:oa,roughnessmap_fragment:aa,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:dc,shadowmap_pars_vertex:ru,shadowmap_vertex:pc,shadowmask_pars_fragment:su,skinbase_vertex:Qf,skinning_pars_vertex:ed,skinning_vertex:Np,skinnormal_vertex:ou,specularmap_fragment:au,specularmap_pars_fragment:cu,tonemapping_fragment:td,tonemapping_pars_fragment:Fp,transmission_fragment:lu,transmission_pars_fragment:yr,uv_pars_fragment:nd,uv_pars_vertex:id,uv_vertex:rd,worldpos_vertex:sd,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},li={basic:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:pn([Ae.points,Ae.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:pn([Ae.common,Ae.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:pn([Ae.sprite,Ae.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:pn([Ae.lights,Ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};li.physical={uniforms:pn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Bs={r:0,b:0,g:0},Ji=new zt,fd=new He;function em(s,e,t,n,i,r,o){const a=new Le(0);let l=r===!0?0:1,h,d,p=null,m=0,g=null;function y(v,_){let E=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?b(a,l):M&&M.isColor&&(b(M,1),E=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===fs)?(d===void 0&&(d=new ln(new Ci(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:gr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Ji.copy(_.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(fd.makeRotationFromEuler(Ji)),d.material.toneMapped=Rt.getTransfer(M.colorSpace)!==vt,(p!==M||m!==M.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,p=M,m=M.version,g=s.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ln(new Fs(2,2),new ai({name:"BackgroundMaterial",uniforms:gr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||m!==M.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,p=M,m=M.version,g=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function b(v,_){v.getRGB(Bs,ac(s)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,b(a,l)},render:y}}function dd(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=v(null);let h=l,d=!1;function p(G,se,ee,he,ae){let ce=!1;if(o){const ve=b(he,ee,se);h!==ve&&(h=ve,g(h.object)),ce=_(G,he,ee,ae),ce&&E(G,he,ee,ae)}else{const ve=se.wireframe===!0;(h.geometry!==he.id||h.program!==ee.id||h.wireframe!==ve)&&(h.geometry=he.id,h.program=ee.id,h.wireframe=ve,ce=!0)}ae!==null&&t.update(ae,s.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,V(G,se,ee,he),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ae).buffer))}function m(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function g(G){return n.isWebGL2?s.bindVertexArray(G):r.bindVertexArrayOES(G)}function y(G){return n.isWebGL2?s.deleteVertexArray(G):r.deleteVertexArrayOES(G)}function b(G,se,ee){const he=ee.wireframe===!0;let ae=a[G.id];ae===void 0&&(ae={},a[G.id]=ae);let ce=ae[se.id];ce===void 0&&(ce={},ae[se.id]=ce);let ve=ce[he];return ve===void 0&&(ve=v(m()),ce[he]=ve),ve}function v(G){const se=[],ee=[],he=[];for(let ae=0;ae<i;ae++)se[ae]=0,ee[ae]=0,he[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:ee,attributeDivisors:he,object:G,attributes:{},index:null}}function _(G,se,ee,he){const ae=h.attributes,ce=se.attributes;let ve=0;const ye=ee.getAttributes();for(const Fe in ye)if(ye[Fe].location>=0){const te=ae[Fe];let _e=ce[Fe];if(_e===void 0&&(Fe==="instanceMatrix"&&G.instanceMatrix&&(_e=G.instanceMatrix),Fe==="instanceColor"&&G.instanceColor&&(_e=G.instanceColor)),te===void 0||te.attribute!==_e||_e&&te.data!==_e.data)return!0;ve++}return h.attributesNum!==ve||h.index!==he}function E(G,se,ee,he){const ae={},ce=se.attributes;let ve=0;const ye=ee.getAttributes();for(const Fe in ye)if(ye[Fe].location>=0){let te=ce[Fe];te===void 0&&(Fe==="instanceMatrix"&&G.instanceMatrix&&(te=G.instanceMatrix),Fe==="instanceColor"&&G.instanceColor&&(te=G.instanceColor));const _e={};_e.attribute=te,te&&te.data&&(_e.data=te.data),ae[Fe]=_e,ve++}h.attributes=ae,h.attributesNum=ve,h.index=he}function M(){const G=h.newAttributes;for(let se=0,ee=G.length;se<ee;se++)G[se]=0}function w(G){B(G,0)}function B(G,se){const ee=h.newAttributes,he=h.enabledAttributes,ae=h.attributeDivisors;ee[G]=1,he[G]===0&&(s.enableVertexAttribArray(G),he[G]=1),ae[G]!==se&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,se),ae[G]=se)}function L(){const G=h.newAttributes,se=h.enabledAttributes;for(let ee=0,he=se.length;ee<he;ee++)se[ee]!==G[ee]&&(s.disableVertexAttribArray(ee),se[ee]=0)}function D(G,se,ee,he,ae,ce,ve){ve===!0?s.vertexAttribIPointer(G,se,ee,ae,ce):s.vertexAttribPointer(G,se,ee,he,ae,ce)}function V(G,se,ee,he){if(n.isWebGL2===!1&&(G.isInstancedMesh||he.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const ae=he.attributes,ce=ee.getAttributes(),ve=se.defaultAttributeValues;for(const ye in ce){const Fe=ce[ye];if(Fe.location>=0){let st=ae[ye];if(st===void 0&&(ye==="instanceMatrix"&&G.instanceMatrix&&(st=G.instanceMatrix),ye==="instanceColor"&&G.instanceColor&&(st=G.instanceColor)),st!==void 0){const te=st.normalized,_e=st.itemSize,Ue=t.get(st);if(Ue===void 0)continue;const $e=Ue.buffer,We=Ue.type,ke=Ue.bytesPerElement,mt=n.isWebGL2===!0&&(We===s.INT||We===s.UNSIGNED_INT||st.gpuType===Ta);if(st.isInterleavedBufferAttribute){const Ze=st.data,z=Ze.stride,Ee=st.offset;if(Ze.isInstancedInterleavedBuffer){for(let le=0;le<Fe.locationSize;le++)B(Fe.location+le,Ze.meshPerAttribute);G.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let le=0;le<Fe.locationSize;le++)w(Fe.location+le);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let le=0;le<Fe.locationSize;le++)D(Fe.location+le,_e/Fe.locationSize,We,te,z*ke,(Ee+_e/Fe.locationSize*le)*ke,mt)}else{if(st.isInstancedBufferAttribute){for(let Ze=0;Ze<Fe.locationSize;Ze++)B(Fe.location+Ze,st.meshPerAttribute);G.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ze=0;Ze<Fe.locationSize;Ze++)w(Fe.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let Ze=0;Ze<Fe.locationSize;Ze++)D(Fe.location+Ze,_e/Fe.locationSize,We,te,_e*ke,_e/Fe.locationSize*Ze*ke,mt)}}else if(ve!==void 0){const te=ve[ye];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(Fe.location,te);break;case 3:s.vertexAttrib3fv(Fe.location,te);break;case 4:s.vertexAttrib4fv(Fe.location,te);break;default:s.vertexAttrib1fv(Fe.location,te)}}}}L()}function $(){fe();for(const G in a){const se=a[G];for(const ee in se){const he=se[ee];for(const ae in he)y(he[ae].object),delete he[ae];delete se[ee]}delete a[G]}}function T(G){if(a[G.id]===void 0)return;const se=a[G.id];for(const ee in se){const he=se[ee];for(const ae in he)y(he[ae].object),delete he[ae];delete se[ee]}delete a[G.id]}function F(G){for(const se in a){const ee=a[se];if(ee[G.id]===void 0)continue;const he=ee[G.id];for(const ae in he)y(he[ae].object),delete he[ae];delete ee[G.id]}}function fe(){de(),d=!0,h!==l&&(h=l,g(h.object))}function de(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:fe,resetDefaultState:de,dispose:$,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:w,disableUnusedAttributes:L}}function tm(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}function a(d,p){s.drawArrays(r,d,p),t.update(p,r,1)}function l(d,p,m){if(m===0)return;let g,y;if(i)g=s,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](r,d,p,m),t.update(p,r,m)}function h(d,p,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<m;y++)this.render(d[y],p[y]);else{g.multiDrawArraysWEBGL(r,d,0,p,0,m);let y=0;for(let b=0;b<m;b++)y+=p[b];t.update(y,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=h}function pd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const h=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,w=o||e.has("OES_texture_float"),B=M&&w,L=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:B,maxSamples:L}}function c(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new _r,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,b=p.clipIntersection,v=p.clipShadows,_=s.get(p);if(!i||y===null||y.length===0||r&&!v)r?d(null):h();else{const E=r?0:n,M=E*4;let w=_.clippingState||null;l.value=w,w=d(y,m,M,g);for(let B=0;B!==M;++B)w[B]=t[B];_.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,g,y){const b=p!==null?p.length:0;let v=null;if(b!==0){if(v=l.value,y!==!0||v===null){const _=g+b*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(v===null||v.length<_)&&(v=new Float32Array(_));for(let M=0,w=g;M!==b;++M,w+=4)o.copy(p[M]).applyMatrix4(E,a),o.normal.toArray(v,w),v[w+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}function u(s){let e=new WeakMap;function t(o,a){return a===wr?o.mapping=ni:a===Rr&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wr||a===Rr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new nf(l.height);return h.fromEquirectangularTexture(s,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class f extends Ko{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const x=4,S=[.125,.215,.35,.446,.526,.582],A=20,C=new f,I=new Le;let O=null,k=0,X=0;const q=(1+Math.sqrt(5))/2,H=1/q,ie=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,q,H),new U(0,q,-H),new U(H,0,q),new U(-H,0,q),new U(q,H,0),new U(-q,H,0)];class Z{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){O=this._renderer.getRenderTarget(),k=this._renderer.getActiveCubeFace(),X=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Je(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ge(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(O,k,X),e.scissorTest=!1,Me(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),O=this._renderer.getRenderTarget(),k=this._renderer.getActiveCubeFace(),X=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ps,format:Ot,colorSpace:ri,depthBuffer:!1},i=me(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=me(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=re(r)),this._blurMaterial=Te(r,e,t)}return i}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,C)}_sceneToCubeUV(e,t,n,i){const a=new un(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(I),d.toneMapping=Ui,d.autoClear=!1;const g=new Ri({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),y=new ln(new Ci,g);let b=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,b=!0):(g.color.copy(I),b=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(a.up.set(0,l[_],0),a.lookAt(h[_],0,0)):E===1?(a.up.set(0,0,l[_]),a.lookAt(0,h[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,h[_]));const M=this._cubeSize;Me(i,E*M,_>2?M:0,M,M),d.setRenderTarget(i),b&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ni||e.mapping===gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Je()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ge());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Me(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,C)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ie[(i-1)%ie.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new ln(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*A-1),b=r/y,v=isFinite(r)?1+Math.floor(d*b):A;v>A&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${A}`);const _=[];let E=0;for(let D=0;D<A;++D){const V=D/b,$=Math.exp(-V*V/2);_.push($),D===0?E+=$:D<v&&(E+=2*$)}for(let D=0;D<_.length;D++)_[D]=_[D]/E;m.envMap.value=e.texture,m.samples.value=v,m.weights.value=_,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:M}=this;m.dTheta.value=y,m.mipInt.value=M-n;const w=this._sizeLods[i],B=3*w*(i>M-x?i-M+x:0),L=4*(this._cubeSize-w);Me(t,B,L,3*w,2*w),l.setRenderTarget(t),l.render(p,C)}}function re(s){const e=[],t=[],n=[];let i=s;const r=s-x+1+S.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-x?l=S[o-s+x-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),d=-h,p=1+h,m=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,y=6,b=3,v=2,_=1,E=new Float32Array(b*y*g),M=new Float32Array(v*y*g),w=new Float32Array(_*y*g);for(let L=0;L<g;L++){const D=L%3*2/3-1,V=L>2?0:-1,$=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];E.set($,b*y*L),M.set(m,v*y*L);const T=[L,L,L,L,L,L];w.set(T,_*y*L)}const B=new ft;B.setAttribute("position",new kt(E,b)),B.setAttribute("uv",new kt(M,v)),B.setAttribute("faceIndex",new kt(w,_)),e.push(B),i>x&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function me(s,e,t){const n=new lr(s,e,t);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Me(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Te(s,e,t){const n=new Float32Array(A),i=new U(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:A,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Be(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ge(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Be(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Je(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Be(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Be(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ke(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===wr||l===Rr,d=l===ni||l===gi;if(h||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Z(s)),p=h?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(h&&p&&p.height>0||d&&p&&i(p)){t===null&&(t=new Z(s));const m=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",r),m.texture}else return null}}}return a}function i(a){let l=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _t(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function At(s,e,t,n){const i={},r=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const b=m.morphAttributes[y];for(let v=0,_=b.length;v<_;v++)e.remove(b[v])}m.removeEventListener("dispose",o),delete i[m.id];const g=r.get(m);g&&(e.remove(g),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(p,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,t.memory.geometries++),m}function l(p){const m=p.attributes;for(const y in m)e.update(m[y],s.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const b=g[y];for(let v=0,_=b.length;v<_;v++)e.update(b[v],s.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,y=p.attributes.position;let b=0;if(g!==null){const E=g.array;b=g.version;for(let M=0,w=E.length;M<w;M+=3){const B=E[M+0],L=E[M+1],D=E[M+2];m.push(B,L,L,D,D,B)}}else if(y!==void 0){const E=y.array;b=y.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const B=M+0,L=M+1,D=M+2;m.push(B,L,L,D,D,B)}}else return;const v=new(ka(m)?rc:nc)(m,1);v.version=b;const _=r.get(p);_&&e.remove(_),r.set(p,v)}function d(p){const m=r.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function Pt(s,e,t,n){const i=n.isWebGL2;let r;function o(g){r=g}let a,l;function h(g){a=g.type,l=g.bytesPerElement}function d(g,y){s.drawElements(r,y,a,g*l),t.update(y,r,1)}function p(g,y,b){if(b===0)return;let v,_;if(i)v=s,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](r,y,a,g*l,b),t.update(y,r,b)}function m(g,y,b){if(b===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<b;_++)this.render(g[_]/l,y[_]);else{v.multiDrawElementsWEBGL(r,y,0,a,g,0,b);let _=0;for(let E=0;E<b;E++)_+=y[E];t.update(_,r,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function Dt(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bt(s,e){return s[0]-e[0]}function on(s,e){return Math.abs(e[1])-Math.abs(s[1])}function nn(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,d,p){const m=h.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=g!==void 0?g.length:0;let b=r.get(d);if(b===void 0||b.count!==y){let fe=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",fe)};b!==void 0&&b.texture.dispose();const v=d.morphAttributes.position!==void 0,_=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let L=0;v===!0&&(L=1),_===!0&&(L=2),E===!0&&(L=3);let D=d.attributes.position.count*L,V=1;D>e.maxTextureSize&&(V=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const $=new Float32Array(D*V*4*y),T=new Ha($,D,V,y);T.type=bn,T.needsUpdate=!0;const F=L*4;for(let de=0;de<y;de++){const G=M[de],se=w[de],ee=B[de],he=D*V*4*de;for(let ae=0;ae<G.count;ae++){const ce=ae*F;v===!0&&(o.fromBufferAttribute(G,ae),$[he+ce+0]=o.x,$[he+ce+1]=o.y,$[he+ce+2]=o.z,$[he+ce+3]=0),_===!0&&(o.fromBufferAttribute(se,ae),$[he+ce+4]=o.x,$[he+ce+5]=o.y,$[he+ce+6]=o.z,$[he+ce+7]=0),E===!0&&(o.fromBufferAttribute(ee,ae),$[he+ce+8]=o.x,$[he+ce+9]=o.y,$[he+ce+10]=o.z,$[he+ce+11]=ee.itemSize===4?o.w:1)}}b={count:y,texture:T,size:new ue(D,V)},r.set(d,b),d.addEventListener("dispose",fe)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,t);else{let v=0;for(let E=0;E<m.length;E++)v+=m[E];const _=d.morphTargetsRelative?1:1-v;p.getUniforms().setValue(s,"morphTargetBaseInfluence",_),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{const g=m===void 0?0:m.length;let y=n[d.id];if(y===void 0||y.length!==g){y=[];for(let M=0;M<g;M++)y[M]=[M,0];n[d.id]=y}for(let M=0;M<g;M++){const w=y[M];w[0]=M,w[1]=m[M]}y.sort(on);for(let M=0;M<8;M++)M<g&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Bt);const b=d.morphAttributes.position,v=d.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const w=a[M],B=w[0],L=w[1];B!==Number.MAX_SAFE_INTEGER&&L?(b&&d.getAttribute("morphTarget"+M)!==b[B]&&d.setAttribute("morphTarget"+M,b[B]),v&&d.getAttribute("morphNormal"+M)!==v[B]&&d.setAttribute("morphNormal"+M,v[B]),i[M]=L,_+=L):(b&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),v&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),i[M]=0)}const E=d.morphTargetsRelative?1:1-_;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function mn(s,e,t,n){let i=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,p=e.get(l,d);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function o(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class gn extends fn{constructor(e,t,n,i,r,o,a,l,h,d){if(d=d!==void 0?d:rr,d!==rr&&d!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===rr&&(n=_i),n===void 0&&d===Pr&&(n=ir),super(null,i,r,o,a,l,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _n=new fn,xn=new gn(1,1);xn.compareFunction=ll;const yn=new Ha,Mr=new xl,zs=new jo,ks=[],Vs=[],Gs=new Float32Array(16),Hs=new Float32Array(9),Ws=new Float32Array(4);function Sr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ks[i];if(r===void 0&&(r=new Float32Array(i),ks[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function jt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xs(s,e){let t=Vs[e];t===void 0&&(t=new Int32Array(e),Vs[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vn(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),jt(t,e)}}function Z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),jt(t,e)}}function J0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),jt(t,e)}}function K0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Ws.set(n),s.uniformMatrix2fv(this.addr,!1,Ws),jt(t,n)}}function j0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Hs.set(n),s.uniformMatrix3fv(this.addr,!1,Hs),jt(t,n)}}function Q0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Gs.set(n),s.uniformMatrix4fv(this.addr,!1,Gs),jt(t,n)}}function eg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),jt(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),jt(t,e)}}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),jt(t,e)}}function rg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),jt(t,e)}}function og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),jt(t,e)}}function ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),jt(t,e)}}function cg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?xn:_n;t.setTexture2D(e||r,i)}function lg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mr,i)}function ug(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zs,i)}function hg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yn,i)}function fg(s){switch(s){case 5126:return vn;case 35664:return $0;case 35665:return Z0;case 35666:return J0;case 35674:return K0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return rg;case 36294:return sg;case 36295:return og;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(s,e){s.uniform1fv(this.addr,e)}function pg(s,e){const t=Sr(e,this.size,2);s.uniform2fv(this.addr,t)}function mg(s,e){const t=Sr(e,this.size,3);s.uniform3fv(this.addr,t)}function gg(s,e){const t=Sr(e,this.size,4);s.uniform4fv(this.addr,t)}function _g(s,e){const t=Sr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xg(s,e){const t=Sr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yg(s,e){const t=Sr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vg(s,e){s.uniform1iv(this.addr,e)}function Mg(s,e){s.uniform2iv(this.addr,e)}function Sg(s,e){s.uniform3iv(this.addr,e)}function bg(s,e){s.uniform4iv(this.addr,e)}function Eg(s,e){s.uniform1uiv(this.addr,e)}function Ag(s,e){s.uniform2uiv(this.addr,e)}function Tg(s,e){s.uniform3uiv(this.addr,e)}function wg(s,e){s.uniform4uiv(this.addr,e)}function Rg(s,e,t){const n=this.cache,i=e.length,r=Xs(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||_n,r[o])}function Cg(s,e,t){const n=this.cache,i=e.length,r=Xs(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mr,r[o])}function Pg(s,e,t){const n=this.cache,i=e.length,r=Xs(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||zs,r[o])}function Ig(s,e,t){const n=this.cache,i=e.length,r=Xs(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yn,r[o])}function Lg(s){switch(s){case 5126:return dg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return vg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return bg;case 5125:return Eg;case 36294:return Ag;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ig}}class Dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fg(t.type)}}class Ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lg(t.type)}}class Ng{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const md=/(\w+)(\])?(\[|\.)?/g;function nm(s,e){s.seq.push(e),s.map[e.id]=e}function Fg(s,e,t){const n=s.name,i=n.length;for(md.lastIndex=0;;){const r=md.exec(n),o=md.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){nm(t,h===void 0?new Dg(a,s,e):new Ug(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new Ng(a),nm(t,p)),t=p}}}class gu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Fg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function im(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Og=37297;let Bg=0;function zg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kg(s){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(s);let n;switch(e===t?n="":e===Ur&&t===Ao?n="LinearDisplayP3ToLinearSRGB":e===Ao&&t===Ur&&(n="LinearSRGBToLinearDisplayP3"),s){case ri:case Eo:return[n,"LinearTransferOETF"];case zn:case Ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function rm(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+zg(s.getShaderSource(e),o)}else return i}function Vg(s,e){const t=kg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gg(s,e){let t;switch(e){case Mh:t="Linear";break;case Sh:t="Reinhard";break;case bh:t="OptimizedCineon";break;case Bc:t="ACESFilmic";break;case Eh:t="AgX";break;case Ah:t="Neutral";break;case zc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ca).join(`
`)}function Wg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Xg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ca(s){return s!==""}function sm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function om(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(s){return s.replace(Yg,Zg)}const $g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zg(s,e){let t=lt[e];if(t===void 0){const n=$g.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gd(t)}const Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function am(s){return s.replace(Jg,Kg)}function Kg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===th?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function Qg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ni:case gi:e="ENVMAP_TYPE_CUBE";break;case fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function t_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case co:e="ENVMAP_BLENDING_MULTIPLY";break;case yh:e="ENVMAP_BLENDING_MIX";break;case vh:e="ENVMAP_BLENDING_ADD";break}return e}function n_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function i_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jg(t),h=Qg(t),d=e_(t),p=t_(t),m=n_(t),g=t.isWebGL2?"":Hg(t),y=Wg(t),b=Xg(r),v=i.createProgram();let _,E,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ca).join(`
`),_.length>0&&(_+=`
`),E=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ca).join(`
`),E.length>0&&(E+=`
`)):(_=[cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),E=[g,cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Vg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),o=gd(o),o=sm(o,t),o=om(o,t),a=gd(a),a=sm(a,t),a=om(a,t),o=am(o),a=am(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=M+_+o,B=M+E+a,L=im(i,i.VERTEX_SHADER,w),D=im(i,i.FRAGMENT_SHADER,B);i.attachShader(v,L),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function V(fe){if(s.debug.checkShaderErrors){const de=i.getProgramInfoLog(v).trim(),G=i.getShaderInfoLog(L).trim(),se=i.getShaderInfoLog(D).trim();let ee=!0,he=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,D);else{const ae=rm(i,L,"vertex"),ce=rm(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+fe.name+`
Material Type: `+fe.type+`

Program Info Log: `+de+`
`+ae+`
`+ce)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(G===""||se==="")&&(he=!1);he&&(fe.diagnostics={runnable:ee,programLog:de,vertexShader:{log:G,prefix:_},fragmentShader:{log:se,prefix:E}})}i.deleteShader(L),i.deleteShader(D),$=new gu(i,v),T=qg(i,v)}let $;this.getUniforms=function(){return $===void 0&&V(this),$};let T;this.getAttributes=function(){return T===void 0&&V(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(v,Og)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=D,this}let r_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new o_(e),t.set(e,n)),n}}class o_{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}}function a_(s,e,t,n,i,r,o){const a=new fr,l=new s_,h=new Set,d=[],p=i.isWebGL2,m=i.logarithmicDepthBuffer,g=i.vertexTextures;let y=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return h.add(T),T===0?"uv":`uv${T}`}function _(T,F,fe,de,G){const se=de.fog,ee=G.geometry,he=T.isMeshStandardMaterial?de.environment:null,ae=(T.isMeshStandardMaterial?t:e).get(T.envMap||he),ce=ae&&ae.mapping===fs?ae.image.height:null,ve=b[T.type];T.precision!==null&&(y=i.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const ye=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Fe=ye!==void 0?ye.length:0;let st=0;ee.morphAttributes.position!==void 0&&(st=1),ee.morphAttributes.normal!==void 0&&(st=2),ee.morphAttributes.color!==void 0&&(st=3);let te,_e,Ue,$e;if(ve){const Ut=li[ve];te=Ut.vertexShader,_e=Ut.fragmentShader}else te=T.vertexShader,_e=T.fragmentShader,l.update(T),Ue=l.getVertexShaderID(T),$e=l.getFragmentShaderID(T);const We=s.getRenderTarget(),ke=G.isInstancedMesh===!0,mt=G.isBatchedMesh===!0,Ze=!!T.map,z=!!T.matcap,Ee=!!ae,le=!!T.aoMap,Se=!!T.lightMap,pe=!!T.bumpMap,Oe=!!T.normalMap,De=!!T.displacementMap,Ve=!!T.emissiveMap,xt=!!T.metalnessMap,N=!!T.roughnessMap,R=T.anisotropy>0,ne=T.clearcoat>0,oe=T.iridescence>0,xe=T.sheen>0,ge=T.transmission>0,ot=R&&!!T.anisotropyMap,Qe=ne&&!!T.clearcoatMap,Re=ne&&!!T.clearcoatNormalMap,Ce=ne&&!!T.clearcoatRoughnessMap,at=oe&&!!T.iridescenceMap,be=oe&&!!T.iridescenceThicknessMap,an=xe&&!!T.sheenColorMap,yt=xe&&!!T.sheenRoughnessMap,je=!!T.specularMap,Xe=!!T.specularColorMap,qe=!!T.specularIntensityMap,bt=ge&&!!T.transmissionMap,ut=ge&&!!T.thicknessMap,Vt=!!T.gradientMap,W=!!T.alphaMap,Pe=T.alphaTest>0,K=!!T.alphaHash,we=!!T.extensions;let Ie=Ui;T.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Ie=s.toneMapping);const St={isWebGL2:p,shaderID:ve,shaderType:T.type,shaderName:T.name,vertexShader:te,fragmentShader:_e,defines:T.defines,customVertexShaderID:Ue,customFragmentShaderID:$e,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:mt,instancing:ke,instancingColor:ke&&G.instanceColor!==null,instancingMorph:ke&&G.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:We===null?s.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:ri,alphaToCoverage:!!T.alphaToCoverage,map:Ze,matcap:z,envMap:Ee,envMapMode:Ee&&ae.mapping,envMapCubeUVHeight:ce,aoMap:le,lightMap:Se,bumpMap:pe,normalMap:Oe,displacementMap:g&&De,emissiveMap:Ve,normalMapObjectSpace:Oe&&T.normalMapType===bo,normalMapTangentSpace:Oe&&T.normalMapType===xi,metalnessMap:xt,roughnessMap:N,anisotropy:R,anisotropyMap:ot,clearcoat:ne,clearcoatMap:Qe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ce,iridescence:oe,iridescenceMap:at,iridescenceThicknessMap:be,sheen:xe,sheenColorMap:an,sheenRoughnessMap:yt,specularMap:je,specularColorMap:Xe,specularIntensityMap:qe,transmission:ge,transmissionMap:bt,thicknessMap:ut,gradientMap:Vt,opaque:T.transparent===!1&&T.blending===Tr&&T.alphaToCoverage===!1,alphaMap:W,alphaTest:Pe,alphaHash:K,combine:T.combine,mapUv:Ze&&v(T.map.channel),aoMapUv:le&&v(T.aoMap.channel),lightMapUv:Se&&v(T.lightMap.channel),bumpMapUv:pe&&v(T.bumpMap.channel),normalMapUv:Oe&&v(T.normalMap.channel),displacementMapUv:De&&v(T.displacementMap.channel),emissiveMapUv:Ve&&v(T.emissiveMap.channel),metalnessMapUv:xt&&v(T.metalnessMap.channel),roughnessMapUv:N&&v(T.roughnessMap.channel),anisotropyMapUv:ot&&v(T.anisotropyMap.channel),clearcoatMapUv:Qe&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:an&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(T.sheenRoughnessMap.channel),specularMapUv:je&&v(T.specularMap.channel),specularColorMapUv:Xe&&v(T.specularColorMap.channel),specularIntensityMapUv:qe&&v(T.specularIntensityMap.channel),transmissionMapUv:bt&&v(T.transmissionMap.channel),thicknessMapUv:ut&&v(T.thicknessMap.channel),alphaMapUv:W&&v(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Oe||R),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ee.attributes.uv&&(Ze||W),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:G.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:st,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&fe.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pi,flipSided:T.side===Cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:we&&T.extensions.derivatives===!0,extensionFragDepth:we&&T.extensions.fragDepth===!0,extensionDrawBuffers:we&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return St.vertexUv1s=h.has(1),St.vertexUv2s=h.has(2),St.vertexUv3s=h.has(3),h.clear(),St}function E(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const fe in T.defines)F.push(fe),F.push(T.defines[fe]);return T.isRawShaderMaterial===!1&&(M(F,T),w(F,T),F.push(s.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function M(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function w(T,F){a.disableAll(),F.isWebGL2&&a.enable(0),F.supportsVertexTextures&&a.enable(1),F.instancing&&a.enable(2),F.instancingColor&&a.enable(3),F.instancingMorph&&a.enable(4),F.matcap&&a.enable(5),F.envMap&&a.enable(6),F.normalMapObjectSpace&&a.enable(7),F.normalMapTangentSpace&&a.enable(8),F.clearcoat&&a.enable(9),F.iridescence&&a.enable(10),F.alphaTest&&a.enable(11),F.vertexColors&&a.enable(12),F.vertexAlphas&&a.enable(13),F.vertexUv1s&&a.enable(14),F.vertexUv2s&&a.enable(15),F.vertexUv3s&&a.enable(16),F.vertexTangents&&a.enable(17),F.anisotropy&&a.enable(18),F.alphaHash&&a.enable(19),F.batching&&a.enable(20),T.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.skinning&&a.enable(4),F.morphTargets&&a.enable(5),F.morphNormals&&a.enable(6),F.morphColors&&a.enable(7),F.premultipliedAlpha&&a.enable(8),F.shadowMapEnabled&&a.enable(9),F.useLegacyLights&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),F.alphaToCoverage&&a.enable(20),T.push(a.mask)}function B(T){const F=b[T.type];let fe;if(F){const de=li[F];fe=Rl.clone(de.uniforms)}else fe=T.uniforms;return fe}function L(T,F){let fe;for(let de=0,G=d.length;de<G;de++){const se=d[de];if(se.cacheKey===F){fe=se,++fe.usedTimes;break}}return fe===void 0&&(fe=new i_(s,F,T,r),d.push(fe)),fe}function D(T){if(--T.usedTimes===0){const F=d.indexOf(T);d[F]=d[d.length-1],d.pop(),T.destroy()}}function V(T){l.remove(T)}function $(){l.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:B,acquireProgram:L,releaseProgram:D,releaseShaderCache:V,programs:d,dispose:$}}function c_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function l_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function um(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(p,m,g,y,b,v){let _=s[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:b,group:v},s[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=b,_.group=v),e++,_}function a(p,m,g,y,b,v){const _=o(p,m,g,y,b,v);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function l(p,m,g,y,b,v){const _=o(p,m,g,y,b,v);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||l_),n.length>1&&n.sort(m||lm),i.length>1&&i.sort(m||lm)}function d(){for(let p=e,m=s.length;p<m;p++){const g=s[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:h}}function u_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new um,s.set(n,[o])):i>=r.length?(o=new um,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function h_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Le};break;case"SpotLight":t={position:new U,direction:new U,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function f_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let d_=0;function p_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function m_(s,e){const t=new h_,n=f_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new U);const r=new U,o=new He,a=new He;function l(d,p){let m=0,g=0,y=0;for(let fe=0;fe<9;fe++)i.probe[fe].set(0,0,0);let b=0,v=0,_=0,E=0,M=0,w=0,B=0,L=0,D=0,V=0,$=0;d.sort(p_);const T=p===!0?Math.PI:1;for(let fe=0,de=d.length;fe<de;fe++){const G=d[fe],se=G.color,ee=G.intensity,he=G.distance,ae=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)m+=se.r*ee*T,g+=se.g*ee*T,y+=se.b*ee*T;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)i.probe[ce].addScaledVector(G.sh.coefficients[ce],ee);$++}else if(G.isDirectionalLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*T),G.castShadow){const ve=G.shadow,ye=n.get(G);ye.shadowBias=ve.bias,ye.shadowNormalBias=ve.normalBias,ye.shadowRadius=ve.radius,ye.shadowMapSize=ve.mapSize,i.directionalShadow[b]=ye,i.directionalShadowMap[b]=ae,i.directionalShadowMatrix[b]=G.shadow.matrix,w++}i.directional[b]=ce,b++}else if(G.isSpotLight){const ce=t.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(se).multiplyScalar(ee*T),ce.distance=he,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,i.spot[_]=ce;const ve=G.shadow;if(G.map&&(i.spotLightMap[D]=G.map,D++,ve.updateMatrices(G),G.castShadow&&V++),i.spotLightMatrix[_]=ve.matrix,G.castShadow){const ye=n.get(G);ye.shadowBias=ve.bias,ye.shadowNormalBias=ve.normalBias,ye.shadowRadius=ve.radius,ye.shadowMapSize=ve.mapSize,i.spotShadow[_]=ye,i.spotShadowMap[_]=ae,L++}_++}else if(G.isRectAreaLight){const ce=t.get(G);ce.color.copy(se).multiplyScalar(ee),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),i.rectArea[E]=ce,E++}else if(G.isPointLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*T),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const ve=G.shadow,ye=n.get(G);ye.shadowBias=ve.bias,ye.shadowNormalBias=ve.normalBias,ye.shadowRadius=ve.radius,ye.shadowMapSize=ve.mapSize,ye.shadowCameraNear=ve.camera.near,ye.shadowCameraFar=ve.camera.far,i.pointShadow[v]=ye,i.pointShadowMap[v]=ae,i.pointShadowMatrix[v]=G.shadow.matrix,B++}i.point[v]=ce,v++}else if(G.isHemisphereLight){const ce=t.get(G);ce.skyColor.copy(G.color).multiplyScalar(ee*T),ce.groundColor.copy(G.groundColor).multiplyScalar(ee*T),i.hemi[M]=ce,M++}}E>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=y;const F=i.hash;(F.directionalLength!==b||F.pointLength!==v||F.spotLength!==_||F.rectAreaLength!==E||F.hemiLength!==M||F.numDirectionalShadows!==w||F.numPointShadows!==B||F.numSpotShadows!==L||F.numSpotMaps!==D||F.numLightProbes!==$)&&(i.directional.length=b,i.spot.length=_,i.rectArea.length=E,i.point.length=v,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=B,i.pointShadowMap.length=B,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=B,i.spotLightMatrix.length=L+D-V,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=$,F.directionalLength=b,F.pointLength=v,F.spotLength=_,F.rectAreaLength=E,F.hemiLength=M,F.numDirectionalShadows=w,F.numPointShadows=B,F.numSpotShadows=L,F.numSpotMaps=D,F.numLightProbes=$,i.version=d_++)}function h(d,p){let m=0,g=0,y=0,b=0,v=0;const _=p.matrixWorldInverse;for(let E=0,M=d.length;E<M;E++){const w=d[E];if(w.isDirectionalLight){const B=i.directional[m];B.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(_),m++}else if(w.isSpotLight){const B=i.spot[y];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(_),B.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(_),y++}else if(w.isRectAreaLight){const B=i.rectArea[b];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),B.halfWidth.applyMatrix4(a),B.halfHeight.applyMatrix4(a),b++}else if(w.isPointLight){const B=i.point[g];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(_),g++}else if(w.isHemisphereLight){const B=i.hemi[v];B.direction.setFromMatrixPosition(w.matrixWorld),B.direction.transformDirection(_),v++}}}return{setup:l,setupView:h,state:i}}function hm(s,e){const t=new m_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(p){n.push(p)}function a(p){i.push(p)}function l(p){t.setup(n,p)}function h(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function g_(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new hm(s,e),t.set(r,[l])):o>=a.length?(l=new hm(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class fm extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=So,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dm extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y_(s,e,t){let n=new Ns;const i=new ue,r=new ue,o=new Ct,a=new fm({depthPacking:al}),l=new dm,h={},d=t.maxTextureSize,p={[ti]:Cn,[Cn]:ti,[pi]:pi},m=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:__,fragmentShader:x_}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new ft;y.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ln(y,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let _=this.type;this.render=function(L,D,V){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;const $=s.getRenderTarget(),T=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),fe=s.state;fe.setBlending(Ii),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const de=_!==di&&this.type===di,G=_===di&&this.type!==di;for(let se=0,ee=L.length;se<ee;se++){const he=L[se],ae=he.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;i.copy(ae.mapSize);const ce=ae.getFrameExtents();if(i.multiply(ce),r.copy(ae.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/ce.x),i.x=r.x*ce.x,ae.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/ce.y),i.y=r.y*ce.y,ae.mapSize.y=r.y)),ae.map===null||de===!0||G===!0){const ye=this.type!==di?{minFilter:Zt,magFilter:Zt}:{};ae.map!==null&&ae.map.dispose(),ae.map=new lr(i.x,i.y,ye),ae.map.texture.name=he.name+".shadowMap",ae.camera.updateProjectionMatrix()}s.setRenderTarget(ae.map),s.clear();const ve=ae.getViewportCount();for(let ye=0;ye<ve;ye++){const Fe=ae.getViewport(ye);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),fe.viewport(o),ae.updateMatrices(he,ye),n=ae.getFrustum(),w(D,V,ae.camera,he,this.type)}ae.isPointLightShadow!==!0&&this.type===di&&E(ae,V),ae.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget($,T,F)};function E(L,D){const V=e.update(b);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new lr(i.x,i.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(D,null,V,m,b,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(D,null,V,g,b,null)}function M(L,D,V,$){let T=null;const F=V.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)T=F;else if(T=V.isPointLight===!0?l:a,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const fe=T.uuid,de=D.uuid;let G=h[fe];G===void 0&&(G={},h[fe]=G);let se=G[de];se===void 0&&(se=T.clone(),G[de]=se,D.addEventListener("dispose",B)),T=se}if(T.visible=D.visible,T.wireframe=D.wireframe,$===di?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:p[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const fe=s.properties.get(T);fe.light=V}return T}function w(L,D,V,$,T){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===di)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,L.matrixWorld);const de=e.update(L),G=L.material;if(Array.isArray(G)){const se=de.groups;for(let ee=0,he=se.length;ee<he;ee++){const ae=se[ee],ce=G[ae.materialIndex];if(ce&&ce.visible){const ve=M(L,ce,$,T);L.onBeforeShadow(s,L,D,V,de,ve,ae),s.renderBufferDirect(V,null,de,ve,L,ae),L.onAfterShadow(s,L,D,V,de,ve,ae)}}}else if(G.visible){const se=M(L,G,$,T);L.onBeforeShadow(s,L,D,V,de,se,null),s.renderBufferDirect(V,null,de,se,L,null),L.onAfterShadow(s,L,D,V,de,se,null)}}const fe=L.children;for(let de=0,G=fe.length;de<G;de++)w(fe[de],D,V,$,T)}function B(L){L.target.removeEventListener("dispose",B);for(const V in h){const $=h[V],T=L.target.uuid;T in $&&($[T].dispose(),delete $[T])}}}function v_(s,e,t){const n=t.isWebGL2;function i(){let W=!1;const Pe=new Ct;let K=null;const we=new Ct(0,0,0,0);return{setMask:function(Ie){K!==Ie&&!W&&(s.colorMask(Ie,Ie,Ie,Ie),K=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,St,Ut,Rn,ui){ui===!0&&(Ie*=Rn,St*=Rn,Ut*=Rn),Pe.set(Ie,St,Ut,Rn),we.equals(Pe)===!1&&(s.clearColor(Ie,St,Ut,Rn),we.copy(Pe))},reset:function(){W=!1,K=null,we.set(-1,0,0,0)}}}function r(){let W=!1,Pe=null,K=null,we=null;return{setTest:function(Ie){Ie?ke(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(Ie){Pe!==Ie&&!W&&(s.depthMask(Ie),Pe=Ie)},setFunc:function(Ie){if(K!==Ie){switch(Ie){case tr:s.depthFunc(s.NEVER);break;case mi:s.depthFunc(s.ALWAYS);break;case ph:s.depthFunc(s.LESS);break;case ao:s.depthFunc(s.LEQUAL);break;case mh:s.depthFunc(s.EQUAL);break;case gh:s.depthFunc(s.GEQUAL);break;case _h:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=Ie}},setLocked:function(Ie){W=Ie},setClear:function(Ie){we!==Ie&&(s.clearDepth(Ie),we=Ie)},reset:function(){W=!1,Pe=null,K=null,we=null}}}function o(){let W=!1,Pe=null,K=null,we=null,Ie=null,St=null,Ut=null,Rn=null,ui=null;return{setTest:function(Nt){W||(Nt?ke(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(Nt){Pe!==Nt&&!W&&(s.stencilMask(Nt),Pe=Nt)},setFunc:function(Nt,Xn,Qi){(K!==Nt||we!==Xn||Ie!==Qi)&&(s.stencilFunc(Nt,Xn,Qi),K=Nt,we=Xn,Ie=Qi)},setOp:function(Nt,Xn,Qi){(St!==Nt||Ut!==Xn||Rn!==Qi)&&(s.stencilOp(Nt,Xn,Qi),St=Nt,Ut=Xn,Rn=Qi)},setLocked:function(Nt){W=Nt},setClear:function(Nt){ui!==Nt&&(s.clearStencil(Nt),ui=Nt)},reset:function(){W=!1,Pe=null,K=null,we=null,Ie=null,St=null,Ut=null,Rn=null,ui=null}}}const a=new i,l=new r,h=new o,d=new WeakMap,p=new WeakMap;let m={},g={},y=new WeakMap,b=[],v=null,_=!1,E=null,M=null,w=null,B=null,L=null,D=null,V=null,$=new Le(0,0,0),T=0,F=!1,fe=null,de=null,G=null,se=null,ee=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const ve=s.getParameter(s.VERSION);ve.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ve)[1]),ae=ce>=1):ve.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),ae=ce>=2);let ye=null,Fe={};const st=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),_e=new Ct().fromArray(st),Ue=new Ct().fromArray(te);function $e(W,Pe,K,we){const Ie=new Uint8Array(4),St=s.createTexture();s.bindTexture(W,St),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<K;Ut++)n&&(W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY)?s.texImage3D(Pe,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Pe+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return St}const We={};We[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),We[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),We[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),ke(s.DEPTH_TEST),l.setFunc(ao),De(!1),Ve(er),ke(s.CULL_FACE),pe(Ii);function ke(W){m[W]!==!0&&(s.enable(W),m[W]=!0)}function mt(W){m[W]!==!1&&(s.disable(W),m[W]=!1)}function Ze(W,Pe){return g[W]!==Pe?(s.bindFramebuffer(W,Pe),g[W]=Pe,n&&(W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function z(W,Pe){let K=b,we=!1;if(W){K=y.get(Pe),K===void 0&&(K=[],y.set(Pe,K));const Ie=W.textures;if(K.length!==Ie.length||K[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Ut=Ie.length;St<Ut;St++)K[St]=s.COLOR_ATTACHMENT0+St;K.length=Ie.length,we=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,we=!0);if(we)if(t.isWebGL2)s.drawBuffers(K);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ee(W){return v!==W?(s.useProgram(W),v=W,!0):!1}const le={[Li]:s.FUNC_ADD,[ih]:s.FUNC_SUBTRACT,[lp]:s.FUNC_REVERSE_SUBTRACT};if(n)le[It]=s.MIN,le[Fc]=s.MAX;else{const W=e.get("EXT_blend_minmax");W!==null&&(le[It]=W.MIN_EXT,le[Fc]=W.MAX_EXT)}const Se={[rh]:s.ZERO,[sh]:s.ONE,[Oc]:s.SRC_COLOR,[ba]:s.SRC_ALPHA,[uh]:s.SRC_ALPHA_SATURATE,[ch]:s.DST_COLOR,[oh]:s.DST_ALPHA,[Sa]:s.ONE_MINUS_SRC_COLOR,[ls]:s.ONE_MINUS_SRC_ALPHA,[lh]:s.ONE_MINUS_DST_COLOR,[ah]:s.ONE_MINUS_DST_ALPHA,[hh]:s.CONSTANT_COLOR,[fh]:s.ONE_MINUS_CONSTANT_COLOR,[dh]:s.CONSTANT_ALPHA,[Di]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Pe,K,we,Ie,St,Ut,Rn,ui,Nt){if(W===Ii){_===!0&&(mt(s.BLEND),_=!1);return}if(_===!1&&(ke(s.BLEND),_=!0),W!==nh){if(W!==E||Nt!==F){if((M!==Li||L!==Li)&&(s.blendEquation(s.FUNC_ADD),M=Li,L=Li),Nt)switch(W){case Tr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uc:s.blendFunc(s.ONE,s.ONE);break;case cs:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Tr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case cs:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}w=null,B=null,D=null,V=null,$.set(0,0,0),T=0,E=W,F=Nt}return}Ie=Ie||Pe,St=St||K,Ut=Ut||we,(Pe!==M||Ie!==L)&&(s.blendEquationSeparate(le[Pe],le[Ie]),M=Pe,L=Ie),(K!==w||we!==B||St!==D||Ut!==V)&&(s.blendFuncSeparate(Se[K],Se[we],Se[St],Se[Ut]),w=K,B=we,D=St,V=Ut),(Rn.equals($)===!1||ui!==T)&&(s.blendColor(Rn.r,Rn.g,Rn.b,ui),$.copy(Rn),T=ui),E=W,F=!1}function Oe(W,Pe){W.side===pi?mt(s.CULL_FACE):ke(s.CULL_FACE);let K=W.side===Cn;Pe&&(K=!K),De(K),W.blending===Tr&&W.transparent===!1?pe(Ii):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const we=W.stencilWrite;h.setTest(we),we&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),N(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ke(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(W){fe!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),fe=W)}function Ve(W){W!==so?(ke(s.CULL_FACE),W!==de&&(W===er?s.cullFace(s.BACK):W===fi?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),de=W}function xt(W){W!==G&&(ae&&s.lineWidth(W),G=W)}function N(W,Pe,K){W?(ke(s.POLYGON_OFFSET_FILL),(se!==Pe||ee!==K)&&(s.polygonOffset(Pe,K),se=Pe,ee=K)):mt(s.POLYGON_OFFSET_FILL)}function R(W){W?ke(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function ne(W){W===void 0&&(W=s.TEXTURE0+he-1),ye!==W&&(s.activeTexture(W),ye=W)}function oe(W,Pe,K){K===void 0&&(ye===null?K=s.TEXTURE0+he-1:K=ye);let we=Fe[K];we===void 0&&(we={type:void 0,texture:void 0},Fe[K]=we),(we.type!==W||we.texture!==Pe)&&(ye!==K&&(s.activeTexture(K),ye=K),s.bindTexture(W,Pe||We[W]),we.type=W,we.texture=Pe)}function xe(){const W=Fe[ye];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ot(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function an(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(W){_e.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),_e.copy(W))}function qe(W){Ue.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ue.copy(W))}function bt(W,Pe){let K=p.get(Pe);K===void 0&&(K=new WeakMap,p.set(Pe,K));let we=K.get(W);we===void 0&&(we=s.getUniformBlockIndex(Pe,W.name),K.set(W,we))}function ut(W,Pe){const we=p.get(Pe).get(W);d.get(Pe)!==we&&(s.uniformBlockBinding(Pe,we,W.__bindingPointIndex),d.set(Pe,we))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ye=null,Fe={},g={},y=new WeakMap,b=[],v=null,_=!1,E=null,M=null,w=null,B=null,L=null,D=null,V=null,$=new Le(0,0,0),T=0,F=!1,fe=null,de=null,G=null,se=null,ee=null,_e.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:ke,disable:mt,bindFramebuffer:Ze,drawBuffers:z,useProgram:Ee,setBlending:pe,setMaterial:Oe,setFlipSided:De,setCullFace:Ve,setLineWidth:xt,setPolygonOffset:N,setScissorTest:R,activeTexture:ne,bindTexture:oe,unbindTexture:xe,compressedTexImage2D:ge,compressedTexImage3D:ot,texImage2D:yt,texImage3D:je,updateUBOMapping:bt,uniformBlockBinding:ut,texStorage2D:be,texStorage3D:an,texSubImage2D:Qe,texSubImage3D:Re,compressedTexSubImage2D:Ce,compressedTexSubImage3D:at,scissor:Xe,viewport:qe,reset:Vt}}function M_(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ue,p=new WeakMap;let m;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(N){}function b(N,R){return y?new OffscreenCanvas(N,R):bs("canvas")}function v(N,R,ne,oe){let xe=1;const ge=xt(N);if((ge.width>oe||ge.height>oe)&&(xe=oe/Math.max(ge.width,ge.height)),xe<1||R===!0)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){const ot=R?Io:Math.floor,Qe=ot(xe*ge.width),Re=ot(xe*ge.height);m===void 0&&(m=b(Qe,Re));const Ce=ne?b(Qe,Re):m;return Ce.width=Qe,Ce.height=Re,Ce.getContext("2d").drawImage(N,0,0,Qe,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Qe+"x"+Re+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function _(N){const R=xt(N);return za(R.width)&&za(R.height)}function E(N){return a?!1:N.wrapS!==Sn||N.wrapT!==Sn||N.minFilter!==Zt&&N.minFilter!==Ft}function M(N,R){return N.generateMipmaps&&R&&N.minFilter!==Zt&&N.minFilter!==Ft}function w(N){s.generateMipmap(N)}function B(N,R,ne,oe,xe=!1){if(a===!1)return R;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge=R;if(R===s.RED&&(ne===s.FLOAT&&(ge=s.R32F),ne===s.HALF_FLOAT&&(ge=s.R16F),ne===s.UNSIGNED_BYTE&&(ge=s.R8)),R===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ge=s.R8UI),ne===s.UNSIGNED_SHORT&&(ge=s.R16UI),ne===s.UNSIGNED_INT&&(ge=s.R32UI),ne===s.BYTE&&(ge=s.R8I),ne===s.SHORT&&(ge=s.R16I),ne===s.INT&&(ge=s.R32I)),R===s.RG&&(ne===s.FLOAT&&(ge=s.RG32F),ne===s.HALF_FLOAT&&(ge=s.RG16F),ne===s.UNSIGNED_BYTE&&(ge=s.RG8)),R===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ge=s.RG8UI),ne===s.UNSIGNED_SHORT&&(ge=s.RG16UI),ne===s.UNSIGNED_INT&&(ge=s.RG32UI),ne===s.BYTE&&(ge=s.RG8I),ne===s.SHORT&&(ge=s.RG16I),ne===s.INT&&(ge=s.RG32I)),R===s.RGBA){const ot=xe?kn:Rt.getTransfer(oe);ne===s.FLOAT&&(ge=s.RGBA32F),ne===s.HALF_FLOAT&&(ge=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(ge=ot===vt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function L(N,R,ne){return M(N,ne)===!0||N.isFramebufferTexture&&N.minFilter!==Zt&&N.minFilter!==Ft?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function D(N){return N===Zt||N===Ea||N===Cr?s.NEAREST:s.LINEAR}function V(N){const R=N.target;R.removeEventListener("dispose",V),T(R),R.isVideoTexture&&p.delete(R)}function $(N){const R=N.target;R.removeEventListener("dispose",$),fe(R)}function T(N){const R=n.get(N);if(R.__webglInit===void 0)return;const ne=N.source,oe=g.get(ne);if(oe){const xe=oe[R.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&F(N),Object.keys(oe).length===0&&g.delete(ne)}n.remove(N)}function F(N){const R=n.get(N);s.deleteTexture(R.__webglTexture);const ne=N.source,oe=g.get(ne);delete oe[R.__cacheKey],o.memory.textures--}function fe(N){const R=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(R.__webglFramebuffer[oe]))for(let xe=0;xe<R.__webglFramebuffer[oe].length;xe++)s.deleteFramebuffer(R.__webglFramebuffer[oe][xe]);else s.deleteFramebuffer(R.__webglFramebuffer[oe]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[oe])}else{if(Array.isArray(R.__webglFramebuffer))for(let oe=0;oe<R.__webglFramebuffer.length;oe++)s.deleteFramebuffer(R.__webglFramebuffer[oe]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let oe=0;oe<R.__webglColorRenderbuffer.length;oe++)R.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[oe]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ne=N.textures;for(let oe=0,xe=ne.length;oe<xe;oe++){const ge=n.get(ne[oe]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(ne[oe])}n.remove(N)}let de=0;function G(){de=0}function se(){const N=de;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),de+=1,N}function ee(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function he(N,R){const ne=n.get(N);if(N.isVideoTexture&&De(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const oe=N.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(ne,N,R);return}}t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+R)}function ae(N,R){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){Ue(ne,N,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+R)}function ce(N,R){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){Ue(ne,N,R);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+R)}function ve(N,R){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){$e(ne,N,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+R)}const ye={[uo]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[ho]:s.MIRRORED_REPEAT},Fe={[Zt]:s.NEAREST,[Ea]:s.NEAREST_MIPMAP_NEAREST,[Cr]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[Ni]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},st={[cl]:s.NEVER,[Tp]:s.ALWAYS,[Uh]:s.LESS,[ll]:s.LEQUAL,[Nh]:s.EQUAL,[Bh]:s.GEQUAL,[Fh]:s.GREATER,[Oh]:s.NOTEQUAL};function te(N,R,ne){if(R.type===bn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ft||R.magFilter===Ni||R.magFilter===Cr||R.magFilter===Zn||R.minFilter===Ft||R.minFilter===Ni||R.minFilter===Cr||R.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ne?(s.texParameteri(N,s.TEXTURE_WRAP_S,ye[R.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ye[R.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ye[R.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Fe[R.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Fe[R.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(R.wrapS!==Sn||R.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,D(R.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,D(R.minFilter)),R.minFilter!==Zt&&R.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,st[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Zt||R.minFilter!==Cr&&R.minFilter!==Zn||R.type===bn&&e.has("OES_texture_float_linear")===!1||a===!1&&R.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function _e(N,R){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",V));const oe=R.source;let xe=g.get(oe);xe===void 0&&(xe={},g.set(oe,xe));const ge=ee(R);if(ge!==N.__cacheKey){xe[ge]===void 0&&(xe[ge]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),xe[ge].usedTimes++;const ot=xe[N.__cacheKey];ot!==void 0&&(xe[N.__cacheKey].usedTimes--,ot.usedTimes===0&&F(R)),N.__cacheKey=ge,N.__webglTexture=xe[ge].texture}return ne}function Ue(N,R,ne){let oe=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=s.TEXTURE_3D);const xe=_e(N,R),ge=R.source;t.bindTexture(oe,N.__webglTexture,s.TEXTURE0+ne);const ot=n.get(ge);if(ge.version!==ot.__version||xe===!0){t.activeTexture(s.TEXTURE0+ne);const Qe=Rt.getPrimaries(Rt.workingColorSpace),Re=R.colorSpace===ii?null:Rt.getPrimaries(R.colorSpace),Ce=R.colorSpace===ii||Qe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const at=E(R)&&_(R.image)===!1;let be=v(R.image,at,!1,i.maxTextureSize);be=Ve(R,be);const an=_(be)||a,yt=r.convert(R.format,R.colorSpace);let je=r.convert(R.type),Xe=B(R.internalFormat,yt,je,R.colorSpace,R.isVideoTexture);te(oe,R,an);let qe;const bt=R.mipmaps,ut=a&&R.isVideoTexture!==!0&&Xe!==Yc,Vt=ot.__version===void 0||xe===!0,W=ge.dataReady,Pe=L(R,be,an);if(R.isDepthTexture)Xe=s.DEPTH_COMPONENT,a?R.type===bn?Xe=s.DEPTH_COMPONENT32F:R.type===_i?Xe=s.DEPTH_COMPONENT24:R.type===ir?Xe=s.DEPTH24_STENCIL8:Xe=s.DEPTH_COMPONENT16:R.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===rr&&Xe===s.DEPTH_COMPONENT&&R.type!==fo&&R.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=_i,je=r.convert(R.type)),R.format===Pr&&Xe===s.DEPTH_COMPONENT&&(Xe=s.DEPTH_STENCIL,R.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=ir,je=r.convert(R.type))),Vt&&(ut?t.texStorage2D(s.TEXTURE_2D,1,Xe,be.width,be.height):t.texImage2D(s.TEXTURE_2D,0,Xe,be.width,be.height,0,yt,je,null));else if(R.isDataTexture)if(bt.length>0&&an){ut&&Vt&&t.texStorage2D(s.TEXTURE_2D,Pe,Xe,bt[0].width,bt[0].height);for(let K=0,we=bt.length;K<we;K++)qe=bt[K],ut?W&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,qe.width,qe.height,yt,je,qe.data):t.texImage2D(s.TEXTURE_2D,K,Xe,qe.width,qe.height,0,yt,je,qe.data);R.generateMipmaps=!1}else ut?(Vt&&t.texStorage2D(s.TEXTURE_2D,Pe,Xe,be.width,be.height),W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,yt,je,be.data)):t.texImage2D(s.TEXTURE_2D,0,Xe,be.width,be.height,0,yt,je,be.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ut&&Vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Xe,bt[0].width,bt[0].height,be.depth);for(let K=0,we=bt.length;K<we;K++)qe=bt[K],R.format!==Ot?yt!==null?ut?W&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,qe.width,qe.height,be.depth,yt,qe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Xe,qe.width,qe.height,be.depth,0,qe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,qe.width,qe.height,be.depth,yt,je,qe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Xe,qe.width,qe.height,be.depth,0,yt,je,qe.data)}else{ut&&Vt&&t.texStorage2D(s.TEXTURE_2D,Pe,Xe,bt[0].width,bt[0].height);for(let K=0,we=bt.length;K<we;K++)qe=bt[K],R.format!==Ot?yt!==null?ut?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,qe.width,qe.height,yt,qe.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Xe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?W&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,qe.width,qe.height,yt,je,qe.data):t.texImage2D(s.TEXTURE_2D,K,Xe,qe.width,qe.height,0,yt,je,qe.data)}else if(R.isDataArrayTexture)ut?(Vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Xe,be.width,be.height,be.depth),W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,yt,je,be.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,be.width,be.height,be.depth,0,yt,je,be.data);else if(R.isData3DTexture)ut?(Vt&&t.texStorage3D(s.TEXTURE_3D,Pe,Xe,be.width,be.height,be.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,yt,je,be.data)):t.texImage3D(s.TEXTURE_3D,0,Xe,be.width,be.height,be.depth,0,yt,je,be.data);else if(R.isFramebufferTexture){if(Vt)if(ut)t.texStorage2D(s.TEXTURE_2D,Pe,Xe,be.width,be.height);else{let K=be.width,we=be.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,Xe,K,we,0,yt,je,null),K>>=1,we>>=1}}else if(bt.length>0&&an){if(ut&&Vt){const K=xt(bt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Xe,K.width,K.height)}for(let K=0,we=bt.length;K<we;K++)qe=bt[K],ut?W&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,yt,je,qe):t.texImage2D(s.TEXTURE_2D,K,Xe,yt,je,qe);R.generateMipmaps=!1}else if(ut){if(Vt){const K=xt(be);t.texStorage2D(s.TEXTURE_2D,Pe,Xe,K.width,K.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,je,be)}else t.texImage2D(s.TEXTURE_2D,0,Xe,yt,je,be);M(R,an)&&w(oe),ot.__version=ge.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function $e(N,R,ne){if(R.image.length!==6)return;const oe=_e(N,R),xe=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ne);const ge=n.get(xe);if(xe.version!==ge.__version||oe===!0){t.activeTexture(s.TEXTURE0+ne);const ot=Rt.getPrimaries(Rt.workingColorSpace),Qe=R.colorSpace===ii?null:Rt.getPrimaries(R.colorSpace),Re=R.colorSpace===ii||ot===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=R.isCompressedTexture||R.image[0].isCompressedTexture,at=R.image[0]&&R.image[0].isDataTexture,be=[];for(let K=0;K<6;K++)!Ce&&!at?be[K]=v(R.image[K],!1,!0,i.maxCubemapSize):be[K]=at?R.image[K].image:R.image[K],be[K]=Ve(R,be[K]);const an=be[0],yt=_(an)||a,je=r.convert(R.format,R.colorSpace),Xe=r.convert(R.type),qe=B(R.internalFormat,je,Xe,R.colorSpace),bt=a&&R.isVideoTexture!==!0,ut=ge.__version===void 0||oe===!0,Vt=xe.dataReady;let W=L(R,an,yt);te(s.TEXTURE_CUBE_MAP,R,yt);let Pe;if(Ce){bt&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,W,qe,an.width,an.height);for(let K=0;K<6;K++){Pe=be[K].mipmaps;for(let we=0;we<Pe.length;we++){const Ie=Pe[we];R.format!==Ot?je!==null?bt?Vt&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,0,0,Ie.width,Ie.height,je,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,0,0,Ie.width,Ie.height,je,Xe,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,qe,Ie.width,Ie.height,0,je,Xe,Ie.data)}}}else{if(Pe=R.mipmaps,bt&&ut){Pe.length>0&&W++;const K=xt(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,W,qe,K.width,K.height)}for(let K=0;K<6;K++)if(at){bt?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be[K].width,be[K].height,je,Xe,be[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qe,be[K].width,be[K].height,0,je,Xe,be[K].data);for(let we=0;we<Pe.length;we++){const St=Pe[we].image[K].image;bt?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,0,0,St.width,St.height,je,Xe,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,qe,St.width,St.height,0,je,Xe,St.data)}}else{bt?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,je,Xe,be[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qe,je,Xe,be[K]);for(let we=0;we<Pe.length;we++){const Ie=Pe[we];bt?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,0,0,je,Xe,Ie.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,qe,je,Xe,Ie.image[K])}}}M(R,yt)&&w(s.TEXTURE_CUBE_MAP),ge.__version=xe.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function We(N,R,ne,oe,xe,ge){const ot=r.convert(ne.format,ne.colorSpace),Qe=r.convert(ne.type),Re=B(ne.internalFormat,ot,Qe,ne.colorSpace);if(!n.get(R).__hasExternalTextures){const at=Math.max(1,R.width>>ge),be=Math.max(1,R.height>>ge);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,ge,Re,at,be,R.depth,0,ot,Qe,null):t.texImage2D(xe,ge,Re,at,be,0,ot,Qe,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Oe(R)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,xe,n.get(ne).__webglTexture,0,pe(R)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,xe,n.get(ne).__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(N,R,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,N),R.depthBuffer&&!R.stencilBuffer){let oe=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ne||Oe(R)){const xe=R.depthTexture;xe&&xe.isDepthTexture&&(xe.type===bn?oe=s.DEPTH_COMPONENT32F:xe.type===_i&&(oe=s.DEPTH_COMPONENT24));const ge=pe(R);Oe(R)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,oe,R.width,R.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,oe,R.width,R.height)}else s.renderbufferStorage(s.RENDERBUFFER,oe,R.width,R.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(R.depthBuffer&&R.stencilBuffer){const oe=pe(R);ne&&Oe(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,R.width,R.height):Oe(R)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const oe=R.textures;for(let xe=0;xe<oe.length;xe++){const ge=oe[xe],ot=r.convert(ge.format,ge.colorSpace),Qe=r.convert(ge.type),Re=B(ge.internalFormat,ot,Qe,ge.colorSpace),Ce=pe(R);ne&&Oe(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,Re,R.width,R.height):Oe(R)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,Re,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Re,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function mt(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),he(R.depthTexture,0);const oe=n.get(R.depthTexture).__webglTexture,xe=pe(R);if(R.depthTexture.format===rr)Oe(R)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(R.depthTexture.format===Pr)Oe(R)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ze(N){const R=n.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");mt(R.__webglFramebuffer,N)}else if(ne){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]=s.createRenderbuffer(),ke(R.__webglDepthbuffer[oe],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=s.createRenderbuffer(),ke(R.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function z(N,R,ne){const oe=n.get(N);R!==void 0&&We(oe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Ze(N)}function Ee(N){const R=N.texture,ne=n.get(N),oe=n.get(R);N.addEventListener("dispose",$);const xe=N.textures,ge=N.isWebGLCubeRenderTarget===!0,ot=xe.length>1,Qe=_(N)||a;if(ot||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=R.version,o.memory.textures++),ge){ne.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(a&&R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer[Re]=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)ne.__webglFramebuffer[Re][Ce]=s.createFramebuffer()}else ne.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(a&&R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)ne.__webglFramebuffer[Re]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(ot)if(i.drawBuffers)for(let Re=0,Ce=xe.length;Re<Ce;Re++){const at=n.get(xe[Re]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&Oe(N)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Ce=xe[Re];ne.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Re]);const at=r.convert(Ce.format,Ce.colorSpace),be=r.convert(Ce.type),an=B(Ce.internalFormat,at,be,Ce.colorSpace,N.isXRRenderTarget===!0),yt=pe(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,an,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(ne.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),te(s.TEXTURE_CUBE_MAP,R,Qe);for(let Re=0;Re<6;Re++)if(a&&R.mipmaps&&R.mipmaps.length>0)for(let Ce=0;Ce<R.mipmaps.length;Ce++)We(ne.__webglFramebuffer[Re][Ce],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce);else We(ne.__webglFramebuffer[Re],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);M(R,Qe)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ot){for(let Re=0,Ce=xe.length;Re<Ce;Re++){const at=xe[Re],be=n.get(at);t.bindTexture(s.TEXTURE_2D,be.__webglTexture),te(s.TEXTURE_2D,at,Qe),We(ne.__webglFramebuffer,N,at,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),M(at,Qe)&&w(s.TEXTURE_2D)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,oe.__webglTexture),te(Re,R,Qe),a&&R.mipmaps&&R.mipmaps.length>0)for(let Ce=0;Ce<R.mipmaps.length;Ce++)We(ne.__webglFramebuffer[Ce],N,R,s.COLOR_ATTACHMENT0,Re,Ce);else We(ne.__webglFramebuffer,N,R,s.COLOR_ATTACHMENT0,Re,0);M(R,Qe)&&w(Re),t.unbindTexture()}N.depthBuffer&&Ze(N)}function le(N){const R=_(N)||a,ne=N.textures;for(let oe=0,xe=ne.length;oe<xe;oe++){const ge=ne[oe];if(M(ge,R)){const ot=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Qe=n.get(ge).__webglTexture;t.bindTexture(ot,Qe),w(ot),t.unbindTexture()}}}function Se(N){if(a&&N.samples>0&&Oe(N)===!1){const R=N.textures,ne=N.width,oe=N.height;let xe=s.COLOR_BUFFER_BIT;const ge=[],ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Qe=n.get(N),Re=R.length>1;if(Re)for(let Ce=0;Ce<R.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let Ce=0;Ce<R.length;Ce++){ge.push(s.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&ge.push(ot);const at=Qe.__ignoreDepthValues!==void 0?Qe.__ignoreDepthValues:!1;if(at===!1&&(N.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Re&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Qe.__webglColorRenderbuffer[Ce]),at===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ot]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ot])),Re){const be=n.get(R[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,ne,oe,0,0,ne,oe,xe,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ce=0;Ce<R.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Qe.__webglColorRenderbuffer[Ce]);const at=n.get(R[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,at,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}}function pe(N){return Math.min(i.maxSamples,N.samples)}function Oe(N){const R=n.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function De(N){const R=o.render.frame;p.get(N)!==R&&(p.set(N,R),N.update())}function Ve(N,R){const ne=N.colorSpace,oe=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Pn||ne!==ri&&ne!==ii&&(Rt.getTransfer(ne)===vt?a===!1?e.has("EXT_sRGB")===!0&&oe===Ot?(N.format=Pn,N.minFilter=Ft,N.generateMipmaps=!1):R=_l.sRGBToLinear(R):(oe!==Ot||xe!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),R}function xt(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=se,this.resetTextureUnits=G,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=ve,this.rebindTextures=z,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Oe}function S_(s,e,t){const n=t.isWebGL2;function i(r,o=ii){let a;const l=Rt.getTransfer(o);if(r===nr)return s.UNSIGNED_BYTE;if(r===wa)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ms)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Th)return s.BYTE;if(r===Aa)return s.SHORT;if(r===fo)return s.UNSIGNED_SHORT;if(r===Ta)return s.INT;if(r===_i)return s.UNSIGNED_INT;if(r===bn)return s.FLOAT;if(r===ps)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vc)return s.ALPHA;if(r===Ot)return s.RGBA;if(r===Gc)return s.LUMINANCE;if(r===wh)return s.LUMINANCE_ALPHA;if(r===rr)return s.DEPTH_COMPONENT;if(r===Pr)return s.DEPTH_STENCIL;if(r===Pn)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Hc)return s.RED;if(r===Wc)return s.RED_INTEGER;if(r===Rh)return s.RG;if(r===Xc)return s.RG_INTEGER;if(r===Ra)return s.RGBA_INTEGER;if(r===Ir||r===Ca||r===po||r===mo)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ir)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ir)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===po)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gs||r===Pa||r===qc||r===_s)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===gs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_s)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$c||r===Zc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===$c)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Zc)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xs||r===Lr||r===Jc||r===go||r===Kc||r===jc||r===Qc||r===Ia||r===el||r===tl||r===sr||r===nl||r===il||r===_o)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===xs)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lr)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jc)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===go)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kc)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jc)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qc)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ia)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===el)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sr)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===il)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_o)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xo||r===La||r===Ch)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===xo)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===La)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ch)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===or||r===rl||r===Da||r===pt)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===xo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Da)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pt)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ir?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class b_ extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gc extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E_={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const b of e.hand.values()){const v=t.getJointPose(b,n),_=this._getHandJoint(h,b);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=d.position.distanceTo(p.position),g=.02,y=.005;h.inputState.pinching&&m>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new fn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new ai({extensions:{fragDepth:!0},vertexShader:A_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ln(new Fs(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class R_ extends Fi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,h=null,d=null,p=null,m=null,g=null,y=null;const b=new w_,v=t.getContextAttributes();let _=null,E=null;const M=[],w=[],B=new ue;let L=null;const D=new un;D.layers.enable(1),D.viewport=new Ct;const V=new un;V.layers.enable(2),V.viewport=new Ct;const $=[D,V],T=new b_;T.layers.enable(1),T.layers.enable(2);let F=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=M[te];return _e===void 0&&(_e=new _d,M[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=M[te];return _e===void 0&&(_e=new _d,M[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=M[te];return _e===void 0&&(_e=new _d,M[te]=_e),_e.getHandSpace()};function de(te){const _e=w.indexOf(te.inputSource);if(_e===-1)return;const Ue=M[_e];Ue!==void 0&&(Ue.update(te.inputSource,te.frame,h||o),Ue.dispatchEvent({type:te.type,data:te.inputSource}))}function G(){i.removeEventListener("select",de),i.removeEventListener("selectstart",de),i.removeEventListener("selectend",de),i.removeEventListener("squeeze",de),i.removeEventListener("squeezestart",de),i.removeEventListener("squeezeend",de),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",se);for(let te=0;te<M.length;te++){const _e=w[te];_e!==null&&(w[te]=null,M[te].disconnect(_e))}F=null,fe=null,b.reset(),e.setRenderTarget(_),g=null,m=null,p=null,i=null,E=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=function(te){return as(this,null,function*(){if(i=te,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",de),i.addEventListener("selectstart",de),i.addEventListener("selectend",de),i.addEventListener("squeeze",de),i.addEventListener("squeezestart",de),i.addEventListener("squeezeend",de),i.addEventListener("end",G),i.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&(yield t.makeXRCompatible()),L=e.getPixelRatio(),e.getSize(B),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const _e={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new lr(g.framebufferWidth,g.framebufferHeight,{format:Ot,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let _e=null,Ue=null,$e=null;v.depth&&($e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?Pr:rr,Ue=v.stencil?ir:_i);const We={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:r};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(We),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new lr(m.textureWidth,m.textureHeight,{format:Ot,type:nr,depthTexture:new gn(m.textureWidth,m.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ke=e.properties.get(E);ke.__ignoreDepthValues=m.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=yield i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function se(te){for(let _e=0;_e<te.removed.length;_e++){const Ue=te.removed[_e],$e=w.indexOf(Ue);$e>=0&&(w[$e]=null,M[$e].disconnect(Ue))}for(let _e=0;_e<te.added.length;_e++){const Ue=te.added[_e];let $e=w.indexOf(Ue);if($e===-1){for(let ke=0;ke<M.length;ke++)if(ke>=w.length){w.push(Ue),$e=ke;break}else if(w[ke]===null){w[ke]=Ue,$e=ke;break}if($e===-1)break}const We=M[$e];We&&We.connect(Ue)}}const ee=new U,he=new U;function ae(te,_e,Ue){ee.setFromMatrixPosition(_e.matrixWorld),he.setFromMatrixPosition(Ue.matrixWorld);const $e=ee.distanceTo(he),We=_e.projectionMatrix.elements,ke=Ue.projectionMatrix.elements,mt=We[14]/(We[10]-1),Ze=We[14]/(We[10]+1),z=(We[9]+1)/We[5],Ee=(We[9]-1)/We[5],le=(We[8]-1)/We[0],Se=(ke[8]+1)/ke[0],pe=mt*le,Oe=mt*Se,De=$e/(-le+Se),Ve=De*-le;_e.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ve),te.translateZ(De),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const xt=mt+De,N=Ze+De,R=pe-Ve,ne=Oe+($e-Ve),oe=z*Ze/N*xt,xe=Ee*Ze/N*xt;te.projectionMatrix.makePerspective(R,ne,oe,xe,xt,N),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ce(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;b.texture!==null&&(te.near=b.depthNear,te.far=b.depthFar),T.near=V.near=D.near=te.near,T.far=V.far=D.far=te.far,(F!==T.near||fe!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,fe=T.far,D.near=F,D.far=fe,V.near=F,V.far=fe,D.updateProjectionMatrix(),V.updateProjectionMatrix(),te.updateProjectionMatrix());const _e=te.parent,Ue=T.cameras;ce(T,_e);for(let $e=0;$e<Ue.length;$e++)ce(Ue[$e],_e);Ue.length===2?ae(T,D,V):T.projectionMatrix.copy(D.projectionMatrix),ve(te,T,_e)};function ve(te,_e,Ue){Ue===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(Ue.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Or*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(te){l=te,m!==null&&(m.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return b.texture!==null};let ye=null;function Fe(te,_e){if(d=_e.getViewerPose(h||o),y=_e,d!==null){const Ue=d.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let $e=!1;Ue.length!==T.cameras.length&&(T.cameras.length=0,$e=!0);for(let ke=0;ke<Ue.length;ke++){const mt=Ue[ke];let Ze=null;if(g!==null)Ze=g.getViewport(mt);else{const Ee=p.getViewSubImage(m,mt);Ze=Ee.viewport,ke===0&&(e.setRenderTargetTextures(E,Ee.colorTexture,m.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(E))}let z=$[ke];z===void 0&&(z=new un,z.layers.enable(ke),z.viewport=new Ct,$[ke]=z),z.matrix.fromArray(mt.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(mt.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ke===0&&(T.matrix.copy(z.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),$e===!0&&T.cameras.push(z)}const We=i.enabledFeatures;if(We&&We.includes("depth-sensing")){const ke=p.getDepthInformation(Ue[0]);ke&&ke.isValid&&ke.texture&&b.init(e,ke,i.renderState)}}for(let Ue=0;Ue<M.length;Ue++){const $e=w[Ue],We=M[Ue];$e!==null&&We!==void 0&&We.update($e,_e,h||o)}b.render(e,T),ye&&ye(te,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),y=null}const st=new lc;st.setAnimationLoop(Fe),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const qs=new zt,C_=new He;function P_(s,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,ac(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function i(v,_,E,M,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(v,_):_.isMeshToonMaterial?(r(v,_),p(v,_)):_.isMeshPhongMaterial?(r(v,_),d(v,_)):_.isMeshStandardMaterial?(r(v,_),m(v,_),_.isMeshPhysicalMaterial&&g(v,_,w)):_.isMeshMatcapMaterial?(r(v,_),y(v,_)):_.isMeshDepthMaterial?r(v,_):_.isMeshDistanceMaterial?(r(v,_),b(v,_)):_.isMeshNormalMaterial?r(v,_):_.isLineBasicMaterial?(o(v,_),_.isLineDashedMaterial&&a(v,_)):_.isPointsMaterial?l(v,_,E,M):_.isSpriteMaterial?h(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Cn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Cn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const E=e.get(_),M=E.envMap,w=E.envMapRotation;if(M&&(v.envMap.value=M,qs.copy(w),qs.x*=-1,qs.y*=-1,qs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),v.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(qs)),v.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const B=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*B,t(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function o(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function a(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function l(v,_,E,M){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*E,v.scale.value=M*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function d(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function p(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function m(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function g(v,_,E){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Cn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,_){_.matcap&&(v.matcap.value=_.matcap)}function b(v,_){const E=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(E.matrixWorld),v.nearDistance.value=E.shadow.camera.near,v.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I_(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){const w=M.program;n.uniformBlockBinding(E,w)}function h(E,M){let w=i[E.id];w===void 0&&(y(E),w=d(E),i[E.id]=w,E.addEventListener("dispose",v));const B=M.program;n.updateUBOMapping(E,B);const L=e.render.frame;r[E.id]!==L&&(m(E),r[E.id]=L)}function d(E){const M=p();E.__bindingPointIndex=M;const w=s.createBuffer(),B=E.__size,L=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,B,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const M=i[E.id],w=E.uniforms,B=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let L=0,D=w.length;L<D;L++){const V=Array.isArray(w[L])?w[L]:[w[L]];for(let $=0,T=V.length;$<T;$++){const F=V[$];if(g(F,L,$,B)===!0){const fe=F.__offset,de=Array.isArray(F.value)?F.value:[F.value];let G=0;for(let se=0;se<de.length;se++){const ee=de[se],he=b(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,fe+G,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,G),G+=he.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,fe,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(E,M,w,B){const L=E.value,D=M+"_"+w;if(B[D]===void 0)return typeof L=="number"||typeof L=="boolean"?B[D]=L:B[D]=L.clone(),!0;{const V=B[D];if(typeof L=="number"||typeof L=="boolean"){if(V!==L)return B[D]=L,!0}else if(V.equals(L)===!1)return V.copy(L),!0}return!1}function y(E){const M=E.uniforms;let w=0;const B=16;for(let D=0,V=M.length;D<V;D++){const $=Array.isArray(M[D])?M[D]:[M[D]];for(let T=0,F=$.length;T<F;T++){const fe=$[T],de=Array.isArray(fe.value)?fe.value:[fe.value];for(let G=0,se=de.length;G<se;G++){const ee=de[G],he=b(ee),ae=w%B;ae!==0&&B-ae<he.boundary&&(w+=B-ae),fe.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=w,w+=he.storage}}}const L=w%B;return L>0&&(w+=B-L),E.__size=w,E.__cache={},this}function b(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function v(E){const M=E.target;M.removeEventListener("dispose",v);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:h,dispose:_}}class pm{constructor(e={}){const{canvas:t=Yh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const g=new Uint32Array(4),y=new Int32Array(4);let b=null,v=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;const M=this;let w=!1,B=0,L=0,D=null,V=-1,$=null;const T=new Ct,F=new Ct;let fe=null;const de=new Le(0);let G=0,se=t.width,ee=t.height,he=1,ae=null,ce=null;const ve=new Ct(0,0,se,ee),ye=new Ct(0,0,se,ee);let Fe=!1;const st=new Ns;let te=!1,_e=!1,Ue=null;const $e=new He,We=new ue,ke=new U,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return D===null?he:1}let z=n;function Ee(P,Y){for(let j=0;j<P.length;j++){const Q=P[j],J=t.getContext(Q,Y);if(J!==null)return J}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ht}`),t.addEventListener("webglcontextlost",Vt,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),z===null){const Y=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&Y.shift(),z=Ee(Y,P),z===null)throw Ee(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let le,Se,pe,Oe,De,Ve,xt,N,R,ne,oe,xe,ge,ot,Qe,Re,Ce,at,be,an,yt,je,Xe,qe;function bt(){le=new _t(z),Se=new pd(z,le,e),le.init(Se),je=new S_(z,le,Se),pe=new v_(z,le,Se),Oe=new Dt(z),De=new c_,Ve=new M_(z,le,pe,De,Se,je,Oe),xt=new u(M),N=new Ke(M),R=new Dl(z,Se),Xe=new dd(z,le,R,Se),ne=new At(z,R,Oe,Xe),oe=new mn(z,ne,R,Oe),be=new nn(z,Se,Ve),Re=new c(De),xe=new a_(M,xt,N,le,Se,Xe,Re),ge=new P_(M,De),ot=new u_,Qe=new g_(le,Se),at=new em(M,xt,N,pe,oe,m,l),Ce=new y_(M,oe,Se),qe=new I_(z,Oe,Se,pe),an=new tm(z,le,Oe,Se),yt=new Pt(z,le,Oe,Se),Oe.programs=xe.programs,M.capabilities=Se,M.extensions=le,M.properties=De,M.renderLists=ot,M.shadowMap=Ce,M.state=pe,M.info=Oe}bt();const ut=new R_(M,z);this.xr=ut,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=le.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=le.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(P){P!==void 0&&(he=P,this.setSize(se,ee,!1))},this.getSize=function(P){return P.set(se,ee)},this.setSize=function(P,Y,j=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=P,ee=Y,t.width=Math.floor(P*he),t.height=Math.floor(Y*he),j===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(se*he,ee*he).floor()},this.setDrawingBufferSize=function(P,Y,j){se=P,ee=Y,he=j,t.width=Math.floor(P*j),t.height=Math.floor(Y*j),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(ve)},this.setViewport=function(P,Y,j,Q){P.isVector4?ve.set(P.x,P.y,P.z,P.w):ve.set(P,Y,j,Q),pe.viewport(T.copy(ve).multiplyScalar(he).round())},this.getScissor=function(P){return P.copy(ye)},this.setScissor=function(P,Y,j,Q){P.isVector4?ye.set(P.x,P.y,P.z,P.w):ye.set(P,Y,j,Q),pe.scissor(F.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(P){pe.setScissorTest(Fe=P)},this.setOpaqueSort=function(P){ae=P},this.setTransparentSort=function(P){ce=P},this.getClearColor=function(P){return P.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(P=!0,Y=!0,j=!0){let Q=0;if(P){let J=!1;if(D!==null){const Ne=D.texture.format;J=Ne===Ra||Ne===Xc||Ne===Wc}if(J){const Ne=D.texture.type,Ye=Ne===nr||Ne===_i||Ne===fo||Ne===ir||Ne===wa||Ne===ms,et=at.getClearColor(),nt=at.getClearAlpha(),gt=et.r,ct=et.g,ht=et.b;Ye?(g[0]=gt,g[1]=ct,g[2]=ht,g[3]=nt,z.clearBufferuiv(z.COLOR,0,g)):(y[0]=gt,y[1]=ct,y[2]=ht,y[3]=nt,z.clearBufferiv(z.COLOR,0,y))}else Q|=z.COLOR_BUFFER_BIT}Y&&(Q|=z.DEPTH_BUFFER_BIT),j&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ot.dispose(),Qe.dispose(),De.dispose(),xt.dispose(),N.dispose(),oe.dispose(),Xe.dispose(),qe.dispose(),xe.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ui),ut.removeEventListener("sessionend",Nt),Ue&&(Ue.dispose(),Ue=null),Xn.stop()};function Vt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const P=Oe.autoReset,Y=Ce.enabled,j=Ce.autoUpdate,Q=Ce.needsUpdate,J=Ce.type;bt(),Oe.autoReset=P,Ce.enabled=Y,Ce.autoUpdate=j,Ce.needsUpdate=Q,Ce.type=J}function Pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function K(P){const Y=P.target;Y.removeEventListener("dispose",K),we(Y)}function we(P){Ie(P),De.remove(P)}function Ie(P){const Y=De.get(P).programs;Y!==void 0&&(Y.forEach(function(j){xe.releaseProgram(j)}),P.isShaderMaterial&&xe.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,j,Q,J,Ne){Y===null&&(Y=mt);const Ye=J.isMesh&&J.matrixWorld.determinant()<0,et=wy(P,Y,j,Q,J);pe.setMaterial(Q,Ye);let nt=j.index,gt=1;if(Q.wireframe===!0){if(nt=ne.getWireframeAttribute(j),nt===void 0)return;gt=2}const ct=j.drawRange,ht=j.attributes.position;let sn=ct.start*gt,ei=(ct.start+ct.count)*gt;Ne!==null&&(sn=Math.max(sn,Ne.start*gt),ei=Math.min(ei,(Ne.start+Ne.count)*gt)),nt!==null?(sn=Math.max(sn,0),ei=Math.min(ei,nt.count)):ht!=null&&(sn=Math.max(sn,0),ei=Math.min(ei,ht.count));const Mn=ei-sn;if(Mn<0||Mn===1/0)return;Xe.setup(J,Q,et,j,nt);let Ar,$t=an;if(nt!==null&&(Ar=R.get(nt),$t=yt,$t.setIndex(Ar)),J.isMesh)Q.wireframe===!0?(pe.setLineWidth(Q.wireframeLinewidth*Ze()),$t.setMode(z.LINES)):$t.setMode(z.TRIANGLES);else if(J.isLine){let dt=Q.linewidth;dt===void 0&&(dt=1),pe.setLineWidth(dt*Ze()),J.isLineSegments?$t.setMode(z.LINES):J.isLineLoop?$t.setMode(z.LINE_LOOP):$t.setMode(z.LINE_STRIP)}else J.isPoints?$t.setMode(z.POINTS):J.isSprite&&$t.setMode(z.TRIANGLES);if(J.isBatchedMesh)$t.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)$t.renderInstances(sn,Mn,J.count);else if(j.isInstancedBufferGeometry){const dt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,rp=Math.min(j.instanceCount,dt);$t.renderInstances(sn,Mn,rp)}else $t.render(sn,Mn)};function St(P,Y,j){P.transparent===!0&&P.side===pi&&P.forceSinglePass===!1?(P.side=Cn,P.needsUpdate=!0,eh(P,Y,j),P.side=ti,P.needsUpdate=!0,eh(P,Y,j),P.side=pi):eh(P,Y,j)}this.compile=function(P,Y,j=null){j===null&&(j=P),v=Qe.get(j),v.init(),E.push(v),j.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),P!==j&&P.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),v.setupLights(M._useLegacyLights);const Q=new Set;return P.traverse(function(J){const Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let Ye=0;Ye<Ne.length;Ye++){const et=Ne[Ye];St(et,j,J),Q.add(et)}else St(Ne,j,J),Q.add(Ne)}),E.pop(),v=null,Q},this.compileAsync=function(P,Y,j=null){const Q=this.compile(P,Y,j);return new Promise(J=>{function Ne(){if(Q.forEach(function(Ye){De.get(Ye).currentProgram.isReady()&&Q.delete(Ye)}),Q.size===0){J(P);return}setTimeout(Ne,10)}le.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ut=null;function Rn(P){Ut&&Ut(P)}function ui(){Xn.stop()}function Nt(){Xn.start()}const Xn=new lc;Xn.setAnimationLoop(Rn),typeof self!="undefined"&&Xn.setContext(self),this.setAnimationLoop=function(P){Ut=P,ut.setAnimationLoop(P),P===null?Xn.stop():Xn.start()},ut.addEventListener("sessionstart",ui),ut.addEventListener("sessionend",Nt),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Y),Y=ut.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,Y,D),v=Qe.get(P,E.length),v.init(),E.push(v),$e.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),st.setFromProjectionMatrix($e),_e=this.localClippingEnabled,te=Re.init(this.clippingPlanes,_e),b=ot.get(P,_.length),b.init(),_.push(b),Qi(P,Y,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(ae,ce),this.info.render.frame++,te===!0&&Re.beginShadows();const j=v.state.shadowsArray;if(Ce.render(j,P,Y),te===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1)&&at.render(b,P),v.setupLights(M._useLegacyLights),Y.isArrayCamera){const Q=Y.cameras;for(let J=0,Ne=Q.length;J<Ne;J++){const Ye=Q[J];D0(b,P,Ye,Ye.viewport)}}else D0(b,P,Y);D!==null&&(Ve.updateMultisampleRenderTarget(D),Ve.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(M,P,Y),Xe.resetDefaultState(),V=-1,$=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function Qi(P,Y,j,Q){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)j=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||st.intersectsSprite(P)){Q&&ke.setFromMatrixPosition(P.matrixWorld).applyMatrix4($e);const Ye=oe.update(P),et=P.material;et.visible&&b.push(P,Ye,et,j,ke.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||st.intersectsObject(P))){const Ye=oe.update(P),et=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ke.copy(P.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ke.copy(Ye.boundingSphere.center)),ke.applyMatrix4(P.matrixWorld).applyMatrix4($e)),Array.isArray(et)){const nt=Ye.groups;for(let gt=0,ct=nt.length;gt<ct;gt++){const ht=nt[gt],sn=et[ht.materialIndex];sn&&sn.visible&&b.push(P,Ye,sn,j,ke.z,ht)}}else et.visible&&b.push(P,Ye,et,j,ke.z,null)}}const Ne=P.children;for(let Ye=0,et=Ne.length;Ye<et;Ye++)Qi(Ne[Ye],Y,j,Q)}function D0(P,Y,j,Q){const J=P.opaque,Ne=P.transmissive,Ye=P.transparent;v.setupLightsView(j),te===!0&&Re.setGlobalState(M.clippingPlanes,j),Ne.length>0&&Ty(J,Ne,Y,j),Q&&pe.viewport(T.copy(Q)),J.length>0&&Qu(J,Y,j),Ne.length>0&&Qu(Ne,Y,j),Ye.length>0&&Qu(Ye,Y,j),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ty(P,Y,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Ne=Se.isWebGL2;Ue===null&&(Ue=new lr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?ps:nr,minFilter:Zn,samples:Ne?4:0})),M.getDrawingBufferSize(We),Ne?Ue.setSize(We.x,We.y):Ue.setSize(Io(We.x),Io(We.y));const Ye=M.getRenderTarget();M.setRenderTarget(Ue),M.getClearColor(de),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear();const et=M.toneMapping;M.toneMapping=Ui,Qu(P,j,Q),Ve.updateMultisampleRenderTarget(Ue),Ve.updateRenderTargetMipmap(Ue);let nt=!1;for(let gt=0,ct=Y.length;gt<ct;gt++){const ht=Y[gt],sn=ht.object,ei=ht.geometry,Mn=ht.material,Ar=ht.group;if(Mn.side===pi&&sn.layers.test(Q.layers)){const $t=Mn.side;Mn.side=Cn,Mn.needsUpdate=!0,U0(sn,j,Q,ei,Mn,Ar),Mn.side=$t,Mn.needsUpdate=!0,nt=!0}}nt===!0&&(Ve.updateMultisampleRenderTarget(Ue),Ve.updateRenderTargetMipmap(Ue)),M.setRenderTarget(Ye),M.setClearColor(de,G),M.toneMapping=et}function Qu(P,Y,j){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ne=P.length;J<Ne;J++){const Ye=P[J],et=Ye.object,nt=Ye.geometry,gt=Q===null?Ye.material:Q,ct=Ye.group;et.layers.test(j.layers)&&U0(et,Y,j,nt,gt,ct)}}function U0(P,Y,j,Q,J,Ne){P.onBeforeRender(M,Y,j,Q,J,Ne),P.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(M,Y,j,Q,P,Ne),J.transparent===!0&&J.side===pi&&J.forceSinglePass===!1?(J.side=Cn,J.needsUpdate=!0,M.renderBufferDirect(j,Y,Q,J,P,Ne),J.side=ti,J.needsUpdate=!0,M.renderBufferDirect(j,Y,Q,J,P,Ne),J.side=pi):M.renderBufferDirect(j,Y,Q,J,P,Ne),P.onAfterRender(M,Y,j,Q,J,Ne)}function eh(P,Y,j){Y.isScene!==!0&&(Y=mt);const Q=De.get(P),J=v.state.lights,Ne=v.state.shadowsArray,Ye=J.state.version,et=xe.getParameters(P,J.state,Ne,Y,j),nt=xe.getProgramCacheKey(et);let gt=Q.programs;Q.environment=P.isMeshStandardMaterial?Y.environment:null,Q.fog=Y.fog,Q.envMap=(P.isMeshStandardMaterial?N:xt).get(P.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,gt===void 0&&(P.addEventListener("dispose",K),gt=new Map,Q.programs=gt);let ct=gt.get(nt);if(ct!==void 0){if(Q.currentProgram===ct&&Q.lightsStateVersion===Ye)return F0(P,et),ct}else et.uniforms=xe.getUniforms(P),P.onBuild(j,et,M),P.onBeforeCompile(et,M),ct=xe.acquireProgram(et,nt),gt.set(nt,ct),Q.uniforms=et.uniforms;const ht=Q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ht.clippingPlanes=Re.uniform),F0(P,et),Q.needsLights=Cy(P),Q.lightsStateVersion=Ye,Q.needsLights&&(ht.ambientLightColor.value=J.state.ambient,ht.lightProbe.value=J.state.probe,ht.directionalLights.value=J.state.directional,ht.directionalLightShadows.value=J.state.directionalShadow,ht.spotLights.value=J.state.spot,ht.spotLightShadows.value=J.state.spotShadow,ht.rectAreaLights.value=J.state.rectArea,ht.ltc_1.value=J.state.rectAreaLTC1,ht.ltc_2.value=J.state.rectAreaLTC2,ht.pointLights.value=J.state.point,ht.pointLightShadows.value=J.state.pointShadow,ht.hemisphereLights.value=J.state.hemi,ht.directionalShadowMap.value=J.state.directionalShadowMap,ht.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ht.spotShadowMap.value=J.state.spotShadowMap,ht.spotLightMatrix.value=J.state.spotLightMatrix,ht.spotLightMap.value=J.state.spotLightMap,ht.pointShadowMap.value=J.state.pointShadowMap,ht.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.currentProgram=ct,Q.uniformsList=null,ct}function N0(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=gu.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function F0(P,Y){const j=De.get(P);j.outputColorSpace=Y.outputColorSpace,j.batching=Y.batching,j.instancing=Y.instancing,j.instancingColor=Y.instancingColor,j.instancingMorph=Y.instancingMorph,j.skinning=Y.skinning,j.morphTargets=Y.morphTargets,j.morphNormals=Y.morphNormals,j.morphColors=Y.morphColors,j.morphTargetsCount=Y.morphTargetsCount,j.numClippingPlanes=Y.numClippingPlanes,j.numIntersection=Y.numClipIntersection,j.vertexAlphas=Y.vertexAlphas,j.vertexTangents=Y.vertexTangents,j.toneMapping=Y.toneMapping}function wy(P,Y,j,Q,J){Y.isScene!==!0&&(Y=mt),Ve.resetTextureUnits();const Ne=Y.fog,Ye=Q.isMeshStandardMaterial?Y.environment:null,et=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ri,nt=(Q.isMeshStandardMaterial?N:xt).get(Q.envMap||Ye),gt=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ct=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ht=!!j.morphAttributes.position,sn=!!j.morphAttributes.normal,ei=!!j.morphAttributes.color;let Mn=Ui;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mn=M.toneMapping);const Ar=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$t=Ar!==void 0?Ar.length:0,dt=De.get(Q),rp=v.state.lights;if(te===!0&&(_e===!0||P!==$)){const hi=P===$&&Q.id===V;Re.setState(Q,P,hi)}let Gt=!1;Q.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==rp.state.version||dt.outputColorSpace!==et||J.isBatchedMesh&&dt.batching===!1||!J.isBatchedMesh&&dt.batching===!0||J.isInstancedMesh&&dt.instancing===!1||!J.isInstancedMesh&&dt.instancing===!0||J.isSkinnedMesh&&dt.skinning===!1||!J.isSkinnedMesh&&dt.skinning===!0||J.isInstancedMesh&&dt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&dt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&dt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&dt.instancingMorph===!1&&J.morphTexture!==null||dt.envMap!==nt||Q.fog===!0&&dt.fog!==Ne||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Re.numPlanes||dt.numIntersection!==Re.numIntersection)||dt.vertexAlphas!==gt||dt.vertexTangents!==ct||dt.morphTargets!==ht||dt.morphNormals!==sn||dt.morphColors!==ei||dt.toneMapping!==Mn||Se.isWebGL2===!0&&dt.morphTargetsCount!==$t)&&(Gt=!0):(Gt=!0,dt.__version=Q.version);let io=dt.currentProgram;Gt===!0&&(io=eh(Q,Y,J));let O0=!1,Lc=!1,sp=!1;const Bn=io.getUniforms(),ro=dt.uniforms;if(pe.useProgram(io.program)&&(O0=!0,Lc=!0,sp=!0),Q.id!==V&&(V=Q.id,Lc=!0),O0||$!==P){Bn.setValue(z,"projectionMatrix",P.projectionMatrix),Bn.setValue(z,"viewMatrix",P.matrixWorldInverse);const hi=Bn.map.cameraPosition;hi!==void 0&&hi.setValue(z,ke.setFromMatrixPosition(P.matrixWorld)),Se.logarithmicDepthBuffer&&Bn.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Bn.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),$!==P&&($=P,Lc=!0,sp=!0)}if(J.isSkinnedMesh){Bn.setOptional(z,J,"bindMatrix"),Bn.setOptional(z,J,"bindMatrixInverse");const hi=J.skeleton;hi&&(Se.floatVertexTextures?(hi.boneTexture===null&&hi.computeBoneTexture(),Bn.setValue(z,"boneTexture",hi.boneTexture,Ve)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Bn.setOptional(z,J,"batchingTexture"),Bn.setValue(z,"batchingTexture",J._matricesTexture,Ve));const op=j.morphAttributes;if((op.position!==void 0||op.normal!==void 0||op.color!==void 0&&Se.isWebGL2===!0)&&be.update(J,j,io),(Lc||dt.receiveShadow!==J.receiveShadow)&&(dt.receiveShadow=J.receiveShadow,Bn.setValue(z,"receiveShadow",J.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ro.envMap.value=nt,ro.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),Lc&&(Bn.setValue(z,"toneMappingExposure",M.toneMappingExposure),dt.needsLights&&Ry(ro,sp),Ne&&Q.fog===!0&&ge.refreshFogUniforms(ro,Ne),ge.refreshMaterialUniforms(ro,Q,he,ee,Ue),gu.upload(z,N0(dt),ro,Ve)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(gu.upload(z,N0(dt),ro,Ve),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Bn.setValue(z,"center",J.center),Bn.setValue(z,"modelViewMatrix",J.modelViewMatrix),Bn.setValue(z,"normalMatrix",J.normalMatrix),Bn.setValue(z,"modelMatrix",J.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const hi=Q.uniformsGroups;for(let ap=0,Py=hi.length;ap<Py;ap++)if(Se.isWebGL2){const B0=hi[ap];qe.update(B0,io),qe.bind(B0,io)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return io}function Ry(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Cy(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,Y,j){De.get(P.texture).__webglTexture=Y,De.get(P.depthTexture).__webglTexture=j;const Q=De.get(P);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const j=De.get(P);j.__webglFramebuffer=Y,j.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,j=0){D=P,B=Y,L=j;let Q=!0,J=null,Ne=!1,Ye=!1;if(P){const nt=De.get(P);nt.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1):nt.__webglFramebuffer===void 0?Ve.setupRenderTarget(P):nt.__hasExternalTextures&&Ve.rebindTextures(P,De.get(P.texture).__webglTexture,De.get(P.depthTexture).__webglTexture);const gt=P.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(Ye=!0);const ct=De.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ct[Y])?J=ct[Y][j]:J=ct[Y],Ne=!0):Se.isWebGL2&&P.samples>0&&Ve.useMultisampledRTT(P)===!1?J=De.get(P).__webglMultisampledFramebuffer:Array.isArray(ct)?J=ct[j]:J=ct,T.copy(P.viewport),F.copy(P.scissor),fe=P.scissorTest}else T.copy(ve).multiplyScalar(he).floor(),F.copy(ye).multiplyScalar(he).floor(),fe=Fe;if(pe.bindFramebuffer(z.FRAMEBUFFER,J)&&Se.drawBuffers&&Q&&pe.drawBuffers(P,J),pe.viewport(T),pe.scissor(F),pe.setScissorTest(fe),Ne){const nt=De.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt.__webglTexture,j)}else if(Ye){const nt=De.get(P.texture),gt=Y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,nt.__webglTexture,j||0,gt)}V=-1},this.readRenderTargetPixels=function(P,Y,j,Q,J,Ne,Ye){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(et=et[Ye]),et){pe.bindFramebuffer(z.FRAMEBUFFER,et);try{const nt=P.texture,gt=nt.format,ct=nt.type;if(gt!==Ot&&je.convert(gt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=ct===ps&&(le.has("EXT_color_buffer_half_float")||Se.isWebGL2&&le.has("EXT_color_buffer_float"));if(ct!==nr&&je.convert(ct)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ct===bn&&(Se.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-Q&&j>=0&&j<=P.height-J&&z.readPixels(Y,j,Q,J,je.convert(gt),je.convert(ct),Ne)}finally{const nt=D!==null?De.get(D).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,nt)}}},this.copyFramebufferToTexture=function(P,Y,j=0){const Q=Math.pow(2,-j),J=Math.floor(Y.image.width*Q),Ne=Math.floor(Y.image.height*Q);Ve.setTexture2D(Y,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,P.x,P.y,J,Ne),pe.unbindTexture()},this.copyTextureToTexture=function(P,Y,j,Q=0){const J=Y.image.width,Ne=Y.image.height,Ye=je.convert(j.format),et=je.convert(j.type);Ve.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment),Y.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Q,P.x,P.y,J,Ne,Ye,et,Y.image.data):Y.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Q,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ye,Y.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Q,P.x,P.y,Ye,et,Y.image),Q===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,j,Q,J=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=Math.round(P.max.x-P.min.x),Ye=Math.round(P.max.y-P.min.y),et=P.max.z-P.min.z+1,nt=je.convert(Q.format),gt=je.convert(Q.type);let ct;if(Q.isData3DTexture)Ve.setTexture3D(Q,0),ct=z.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)Ve.setTexture2DArray(Q,0),ct=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Q.unpackAlignment);const ht=z.getParameter(z.UNPACK_ROW_LENGTH),sn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ei=z.getParameter(z.UNPACK_SKIP_PIXELS),Mn=z.getParameter(z.UNPACK_SKIP_ROWS),Ar=z.getParameter(z.UNPACK_SKIP_IMAGES),$t=j.isCompressedTexture?j.mipmaps[J]:j.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,$t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,$t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,P.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,P.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,P.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(ct,J,Y.x,Y.y,Y.z,Ne,Ye,et,nt,gt,$t.data):Q.isCompressedArrayTexture?z.compressedTexSubImage3D(ct,J,Y.x,Y.y,Y.z,Ne,Ye,et,nt,$t.data):z.texSubImage3D(ct,J,Y.x,Y.y,Y.z,Ne,Ye,et,nt,gt,$t),z.pixelStorei(z.UNPACK_ROW_LENGTH,ht),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,sn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ei),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ar),J===0&&Q.generateMipmaps&&z.generateMipmap(ct),pe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ve.setTextureCube(P,0):P.isData3DTexture?Ve.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ve.setTexture2DArray(P,0):Ve.setTexture2D(P,0),pe.unbindTexture()},this.resetState=function(){B=0,L=0,D=null,pe.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ua?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Eo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class L_ extends pm{}L_.prototype.isWebGL1Renderer=!0;class xd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new xd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new yd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mm extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wn=new U;class la{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new la(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _m extends null{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ua;const _c=new U,ha=new U,fa=new U,da=new ue,xc=new ue,xm=new He,_u=new U,yc=new U,xu=new U,ym=new ue,vd=new ue,vm=new ue;class D_ extends null{constructor(e=new _m){if(super(),this.isSprite=!0,this.type="Sprite",ua===void 0){ua=new ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gm(t,5);ua.setIndex([0,1,2,0,2,3]),ua.setAttribute("position",new la(n,3,0,!1)),ua.setAttribute("uv",new la(n,2,3,!1))}this.geometry=ua,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ha.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ha.multiplyScalar(-fa.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;yu(_u.set(-.5,-.5,0),fa,o,ha,i,r),yu(yc.set(.5,-.5,0),fa,o,ha,i,r),yu(xu.set(.5,.5,0),fa,o,ha,i,r),ym.set(0,0),vd.set(1,0),vm.set(1,1);let a=e.ray.intersectTriangle(_u,yc,xu,!1,_c);if(a===null&&(yu(yc.set(-.5,.5,0),fa,o,ha,i,r),vd.set(0,1),a=e.ray.intersectTriangle(_u,xu,yc,!1,_c),a===null))return;const l=e.ray.origin.distanceTo(_c);l<e.near||l>e.far||t.push({distance:l,point:_c.clone(),uv:Hn.getInterpolation(_c,_u,yc,xu,ym,vd,vm,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function yu(s,e,t,n,i,r){da.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(xc.x=r*da.x-i*da.y,xc.y=i*da.x+r*da.y):xc.copy(da),s.copy(e),s.x+=xc.x,s.y+=xc.y,s.applyMatrix4(xm)}const vu=new U,Mm=new U;class U_ extends null{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){vu.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(vu);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){vu.setFromMatrixPosition(e.matrixWorld),Mm.setFromMatrixPosition(this.matrixWorld);const n=vu.distanceTo(Mm)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Sm=new U,bm=new Ct,Em=new Ct,N_=new U,Am=new He,Mu=new U,Md=new An,Tm=new He,Sd=new Ts;class F_ extends null{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lo,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mu),this.boundingBox.expandByPoint(Mu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mu),this.boundingSphere.expandByPoint(Mu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Md.copy(this.boundingSphere),Md.applyMatrix4(i),e.ray.intersectsSphere(Md)!==!1&&(Tm.copy(i).invert(),Sd.copy(e.ray).applyMatrix4(Tm),!(this.boundingBox!==null&&Sd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===us?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bm.fromBufferAttribute(i.attributes.skinIndex,e),Em.fromBufferAttribute(i.attributes.skinWeight,e),Sm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Em.getComponent(r);if(o!==0){const a=bm.getComponent(r);Am.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(N_.copy(Sm).applyMatrix4(Am),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wm extends null{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ys extends null{constructor(e=null,t=1,n=1,i,r,o,a,l,h=Zt,d=Zt,p,m){super(null,o,a,l,h,d,i,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rm=new He,O_=new He;class bd{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:O_;Rm.multiplyMatrices(a,t[r]),Rm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new bd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ys(t,e,e,Ot,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new wm),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class vc extends null{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pa=new He,Cm=new He,Su=null,Pm=new In,B_=new He,Mc=new ln,Sc=new An;class z_ extends null{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,B_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pa),Pm.copy(e.boundingBox).applyMatrix4(pa),this.boundingBox.union(Pm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pa),Sc.copy(e.boundingSphere).applyMatrix4(pa),this.boundingSphere.union(Sc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Mc.geometry=this.geometry,Mc.material=this.material,Mc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(n),e.ray.intersectsSphere(Sc)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,pa),Cm.multiplyMatrices(n,pa),Mc.matrixWorld=Cm,Mc.raycast(e,Su);for(let o=0,a=Su.length;o<a;o++){const l=Su[o];l.instanceId=r,l.object=this,t.push(l)}Su.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ys(new Float32Array(i*this.count),i,this.count,Hc,bn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function k_(s,e){return s.z-e.z}function V_(s,e){return e.z-s.z}class G_{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}}const ma="batchId",is=new He,Im=new He,H_=new He,Lm=new He,Ed=new Ns,bu=new In,$s=new An,bc=new U,Ad=new G_,On=new ln,Eu=null;function W_(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class X_ extends null{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new ft,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ys(t,e,e,Ot,bn);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const l=e.getAttribute(a),{array:h,itemSize:d,normalized:p}=l,m=new h.constructor(n*d),g=new l.constructor(m,d,p);g.setUsage(l.usage),t.setAttribute(a,g)}if(e.getIndex()!==null){const a=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new kt(a,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(ma,new kt(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(ma))throw new Error(`BatchedMesh: Geometry cannot use attribute "${ma}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===ma)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,is),this.getBoundingBoxAt(i,bu).applyMatrix4(is),t.union(bu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,is),this.getBoundingSphereAt(i,$s).applyMatrix4(is),t.union($s))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const h=e.getIndex(),d=h!==null;if(d&&(n===-1?i.indexCount=h.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._visibility,m=this._active,g=this._matricesTexture,y=this._matricesTexture.image.data;p.push(!0),m.push(!0);const b=this._geometryCount;this._geometryCount++,H_.toArray(y,b*16),g.needsUpdate=!0,o.push(i),a.push({start:d?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new In,sphereInitialized:!1,sphere:new An});const v=this.geometry.getAttribute(ma);for(let _=0;_<i.vertexCount;_++)v.setX(i.vertexStart+_,b);return v.needsUpdate=!0,this.setGeometryAt(b,e),b}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,h=a.vertexCount;for(const g in n.attributes){if(g===ma)continue;const y=t.getAttribute(g),b=n.getAttribute(g);W_(y,b,l);const v=y.itemSize;for(let _=y.count,E=h;_<E;_++){const M=l+_;for(let w=0;w<v;w++)b.setComponent(M,w,0)}b.needsUpdate=!0}if(i){const g=a.indexStart;for(let y=0;y<o.count;y++)r.setX(g+y,l+o.getX(y));for(let y=o.count,b=a.indexCount;y<b;y++)r.setX(g+y,l);r.needsUpdate=!0}const d=this._bounds[e];t.boundingBox!==null?(d.box.copy(t.boundingBox),d.boxInitialized=!0):d.boxInitialized=!1,t.boundingSphere!==null?(d.sphere.copy(t.boundingSphere),d.sphereInitialized=!0):d.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?o.count:m.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],r=i.box,o=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const a=o.index,l=o.attributes.position,h=this._drawRanges[e];for(let d=h.start,p=h.start+h.count;d<p;d++){let m=d;a&&(m=a.getX(m)),r.expandByPoint(bc.fromBufferAttribute(l,m))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],r=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,bu),bu.getCenter(r.center);const a=o.index,l=o.attributes.position,h=this._drawRanges[e];let d=0;for(let p=h.start,m=h.start+h.count;p<m;p++){let g=p;a&&(g=a.getX(g)),bc.fromBufferAttribute(l,g),d=Math.max(d,r.center.distanceToSquared(bc))}r.radius=Math.sqrt(d),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,r=this._geometryCount;return e>=r||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,r=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,l=this.geometry;On.material=this.material,On.geometry.index=l.index,On.geometry.attributes=l.attributes,On.geometry.boundingBox===null&&(On.geometry.boundingBox=new In),On.geometry.boundingSphere===null&&(On.geometry.boundingSphere=new An);for(let h=0;h<o;h++){if(!n[h]||!i[h])continue;const d=r[h];On.geometry.setDrawRange(d.start,d.count),this.getMatrixAt(h,On.matrixWorld).premultiply(a),this.getBoundingBoxAt(h,On.geometry.boundingBox),this.getBoundingSphereAt(h,On.geometry.boundingSphere),On.raycast(e,Eu);for(let p=0,m=Eu.length;p<m;p++){const g=Eu[p];g.object=this,g.batchId=h,t.push(g)}Eu.length=0}On.material=null,On.geometry.index=null,On.geometry.attributes={},On.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>va({},t)),this._reservedRanges=e._reservedRanges.map(t=>va({},t)),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._active,h=this._visibility,d=this._multiDrawStarts,p=this._multiDrawCounts,m=this._drawRanges,g=this.perObjectFrustumCulled;g&&(Lm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ed.setFromProjectionMatrix(Lm,e.coordinateSystem));let y=0;if(this.sortObjects){Im.copy(this.matrixWorld).invert(),bc.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Im);for(let _=0,E=h.length;_<E;_++)if(h[_]&&l[_]){this.getMatrixAt(_,is),this.getBoundingSphereAt(_,$s).applyMatrix4(is);let M=!1;if(g&&(M=!Ed.intersectsSphere($s)),!M){const w=bc.distanceTo($s.center);Ad.push(m[_],w)}}const b=Ad.list,v=this.customSort;v===null?b.sort(r.transparent?V_:k_):v.call(this,b,n);for(let _=0,E=b.length;_<E;_++){const M=b[_];d[y]=M.start*a,p[y]=M.count,y++}Ad.reset()}else for(let b=0,v=h.length;b<v;b++)if(h[b]&&l[b]){let _=!1;if(g&&(this.getMatrixAt(b,is),this.getBoundingSphereAt(b,$s).applyMatrix4(is),_=!Ed.intersectsSphere($s)),!_){const E=m[b];d[y]=E.start*a,p[y]=E.count,y++}}this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,o){this.onBeforeRender(e,null,i,r,o)}}class Qn extends null{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dm=new U,Um=new U,Nm=new He,Td=new Ts,Au=new An;class Tu extends null{constructor(e=new ft,t=new Qn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Dm.fromBufferAttribute(t,i-1),Um.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dm.distanceTo(Um);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Au.copy(n.boundingSphere),Au.applyMatrix4(i),Au.radius+=r,e.ray.intersectsSphere(Au)===!1)return;Nm.copy(i).invert(),Td.copy(e.ray).applyMatrix4(Nm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new U,d=new U,p=new U,m=new U,g=this.isLineSegments?2:1,y=n.index,v=n.attributes.position;if(y!==null){const _=Math.max(0,o.start),E=Math.min(y.count,o.start+o.count);for(let M=_,w=E-1;M<w;M+=g){const B=y.getX(M),L=y.getX(M+1);if(h.fromBufferAttribute(v,B),d.fromBufferAttribute(v,L),Td.distanceSqToSegment(h,d,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(m);V<e.near||V>e.far||t.push({distance:V,point:p.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),E=Math.min(v.count,o.start+o.count);for(let M=_,w=E-1;M<w;M+=g){if(h.fromBufferAttribute(v,M),d.fromBufferAttribute(v,M+1),Td.distanceSqToSegment(h,d,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(m);L<e.near||L>e.far||t.push({distance:L,point:p.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Fm=new U,Om=new U;class Bm extends null{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Fm.fromBufferAttribute(t,i),Om.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fm.distanceTo(Om);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q_ extends null{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zm extends null{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const km=new He,wd=new Ts,wu=new An,Ru=new U;class Y_ extends null{constructor(e=new ft,t=new zm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wu.copy(n.boundingSphere),wu.applyMatrix4(i),wu.radius+=r,e.ray.intersectsSphere(wu)===!1)return;km.copy(i).invert(),wd.copy(e.ray).applyMatrix4(km);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=m,b=g;y<b;y++){const v=h.getX(y);Ru.fromBufferAttribute(p,v),Vm(Ru,v,l,i,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let y=m,b=g;y<b;y++)Ru.fromBufferAttribute(p,y),Vm(Ru,y,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vm(s,e,t,n,i,r,o){const a=wd.distanceSqToPoint(s);if(a<t){const l=new U;wd.closestPointToPoint(s,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Fy extends null{constructor(e,t,n,i,r,o,a,l,h){super(e,t,n,i,r,o,a,l,h),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Ft,this.magFilter=r!==void 0?r:Ft,this.generateMipmaps=!1;const d=this;function p(){d.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Oy extends null{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Zt,this.minFilter=Zt,this.generateMipmaps=!1,this.needsUpdate=!0}}class $_ extends null{constructor(e,t,n,i,r,o,a,l,h,d,p,m){super(null,o,a,l,h,d,i,r,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class By extends null{constructor(e,t,n,i,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Sn}}class zy extends null{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ni),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class ky extends null{constructor(e,t,n,i,r,o,a,l,h){super(e,t,n,i,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const d=n[i],m=n[i+1]-d,g=(o-d)/m;return(i+g)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ue:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],r=[],o=[],a=new U,l=new He;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new U)}r[0]=new U,o[0]=new U;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(i[g-1],i[g]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Et(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,y))}o[g].crossVectors(i[g],r[g])}if(t===!0){let g=Math.acos(Et(r[0].dot(r[e]),-1,1));g/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(i[y],g*y)),o[y].crossVectors(i[y],r[y])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rd extends Ki{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,g=h-this.aY;l=m*d-g*p+this.aX,h=m*p+g*d+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Z_ extends Rd{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cd(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){i(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,d,p){let m=(o-r)/h-(a-r)/(h+d)+(a-o)/d,g=(a-o)/d-(l-o)/(d+p)+(l-a)/p;m*=d,g*=d,i(o,a,m,g)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Cu=new U,Pd=new Cd,Id=new Cd,Ld=new Cd;class J_ extends Ki{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,d;this.closed||a>0?h=i[(a-1)%r]:(Cu.subVectors(i[0],i[1]).add(i[0]),h=Cu);const p=i[a%r],m=i[(a+1)%r];if(this.closed||a+2<r?d=i[(a+2)%r]:(Cu.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=Cu),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),g),b=Math.pow(p.distanceToSquared(m),g),v=Math.pow(m.distanceToSquared(d),g);b<1e-4&&(b=1),y<1e-4&&(y=b),v<1e-4&&(v=b),Pd.initNonuniformCatmullRom(h.x,p.x,m.x,d.x,y,b,v),Id.initNonuniformCatmullRom(h.y,p.y,m.y,d.y,y,b,v),Ld.initNonuniformCatmullRom(h.z,p.z,m.z,d.z,y,b,v)}else this.curveType==="catmullrom"&&(Pd.initCatmullRom(h.x,p.x,m.x,d.x,this.tension),Id.initCatmullRom(h.y,p.y,m.y,d.y,this.tension),Ld.initCatmullRom(h.z,p.z,m.z,d.z,this.tension));return n.set(Pd.calc(l),Id.calc(l),Ld.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gm(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function K_(s,e){const t=1-s;return t*t*e}function j_(s,e){return 2*(1-s)*s*e}function Q_(s,e){return s*s*e}function Ec(s,e,t,n){return K_(s,e)+j_(s,t)+Q_(s,n)}function ex(s,e){const t=1-s;return t*t*t*e}function tx(s,e){const t=1-s;return 3*t*t*s*e}function nx(s,e){return 3*(1-s)*s*s*e}function ix(s,e){return s*s*s*e}function Ac(s,e,t,n,i){return ex(s,e)+tx(s,t)+nx(s,n)+ix(s,i)}class Hm extends Ki{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ac(e,i.x,r.x,o.x,a.x),Ac(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rx extends Ki{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ac(e,i.x,r.x,o.x,a.x),Ac(e,i.y,r.y,o.y,a.y),Ac(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wm extends Ki{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sx extends Ki{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xm extends Ki{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ec(e,i.x,r.x,o.x),Ec(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qm extends Ki{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ec(e,i.x,r.x,o.x),Ec(e,i.y,r.y,o.y),Ec(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ym extends Ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],h=i[o],d=i[o>i.length-2?i.length-1:o+1],p=i[o>i.length-3?i.length-1:o+2];return n.set(Gm(a,l.x,h.x,d.x,p.x),Gm(a,l.y,h.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var Pu=Object.freeze({__proto__:null,ArcCurve:Z_,CatmullRomCurve3:J_,CubicBezierCurve:Hm,CubicBezierCurve3:rx,EllipseCurve:Rd,LineCurve:Wm,LineCurve3:sx,QuadraticBezierCurve:Xm,QuadraticBezierCurve3:qm,SplineCurve:Ym});class ox extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let h=0;h<l.length;h++){const d=l[h];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Pu[i.type]().fromJSON(i))}return this}}class Iu extends ox{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wm(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Xm(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Hm(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ym(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+h,t+d,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const h=new Rd(e,t,n,i,r,o,a,l);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Lu extends ft{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Et(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],d=1/t,p=new U,m=new ue,g=new U,y=new U,b=new U;let v=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:v=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-v,g.z=_*0,b.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:v=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-v,g.z=_*0,y.copy(g),g.x+=b.x,g.y+=b.y,g.z+=b.z,g.normalize(),l.push(g.x,g.y,g.z),b.copy(y)}for(let E=0;E<=t;E++){const M=n+E*d*i,w=Math.sin(M),B=Math.cos(M);for(let L=0;L<=e.length-1;L++){p.x=e[L].x*w,p.y=e[L].y,p.z=e[L].x*B,o.push(p.x,p.y,p.z),m.x=E/t,m.y=L/(e.length-1),a.push(m.x,m.y);const D=l[3*L+0]*w,V=l[3*L+1],$=l[3*L+0]*B;h.push(D,V,$)}}for(let E=0;E<t;E++)for(let M=0;M<e.length-1;M++){const w=M+E*e.length,B=w,L=w+e.length,D=w+e.length+1,V=w+1;r.push(B,L,V),r.push(D,V,L)}this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.points,e.segments,e.phiStart,e.phiLength)}}class Dd extends Lu{constructor(e=1,t=1,n=4,i=8){const r=new Iu;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Dd(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ud extends ft{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],h=new U,d=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),o.push(h.x,h.y,h.z),a.push(0,0,1),d.x=(o[m]/e+1)/2,d.y=(o[m+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tc extends ft{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;i=Math.floor(i),r=Math.floor(r);const d=[],p=[],m=[],g=[];let y=0;const b=[],v=n/2;let _=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(m,3)),this.setAttribute("uv",new ze(g,2));function E(){const w=new U,B=new U;let L=0;const D=(t-e)/n;for(let V=0;V<=r;V++){const $=[],T=V/r,F=T*(t-e)+e;for(let fe=0;fe<=i;fe++){const de=fe/i,G=de*l+a,se=Math.sin(G),ee=Math.cos(G);B.x=F*se,B.y=-T*n+v,B.z=F*ee,p.push(B.x,B.y,B.z),w.set(se,D,ee).normalize(),m.push(w.x,w.y,w.z),g.push(de,1-T),$.push(y++)}b.push($)}for(let V=0;V<i;V++)for(let $=0;$<r;$++){const T=b[$][V],F=b[$+1][V],fe=b[$+1][V+1],de=b[$][V+1];d.push(T,F,de),d.push(F,fe,de),L+=6}h.addGroup(_,L,0),_+=L}function M(w){const B=y,L=new ue,D=new U;let V=0;const $=w===!0?e:t,T=w===!0?1:-1;for(let fe=1;fe<=i;fe++)p.push(0,v*T,0),m.push(0,T,0),g.push(.5,.5),y++;const F=y;for(let fe=0;fe<=i;fe++){const G=fe/i*l+a,se=Math.cos(G),ee=Math.sin(G);D.x=$*ee,D.y=v*T,D.z=$*se,p.push(D.x,D.y,D.z),m.push(0,T,0),L.x=se*.5+.5,L.y=ee*.5*T+.5,g.push(L.x,L.y),y++}for(let fe=0;fe<i;fe++){const de=B+fe,G=F+fe;w===!0?d.push(G,G+1,de):d.push(G+1,G,de),V+=3}h.addGroup(_,V,w===!0?1:2),_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nd extends Tc{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zs extends ft{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),h(n),d(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new U,w=new U,B=new U;for(let L=0;L<t.length;L+=3)g(t[L+0],M),g(t[L+1],w),g(t[L+2],B),l(M,w,B,E)}function l(E,M,w,B){const L=B+1,D=[];for(let V=0;V<=L;V++){D[V]=[];const $=E.clone().lerp(w,V/L),T=M.clone().lerp(w,V/L),F=L-V;for(let fe=0;fe<=F;fe++)fe===0&&V===L?D[V][fe]=$:D[V][fe]=$.clone().lerp(T,fe/F)}for(let V=0;V<L;V++)for(let $=0;$<2*(L-V)-1;$++){const T=Math.floor($/2);$%2===0?(m(D[V][T+1]),m(D[V+1][T]),m(D[V][T])):(m(D[V][T+1]),m(D[V+1][T+1]),m(D[V+1][T]))}}function h(E){const M=new U;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(E),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function d(){const E=new U;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const w=v(E)/2/Math.PI+.5,B=_(E)/Math.PI+.5;o.push(w,1-B)}y(),p()}function p(){for(let E=0;E<o.length;E+=6){const M=o[E+0],w=o[E+2],B=o[E+4],L=Math.max(M,w,B),D=Math.min(M,w,B);L>.9&&D<.1&&(M<.2&&(o[E+0]+=1),w<.2&&(o[E+2]+=1),B<.2&&(o[E+4]+=1))}}function m(E){r.push(E.x,E.y,E.z)}function g(E,M){const w=E*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function y(){const E=new U,M=new U,w=new U,B=new U,L=new ue,D=new ue,V=new ue;for(let $=0,T=0;$<r.length;$+=9,T+=6){E.set(r[$+0],r[$+1],r[$+2]),M.set(r[$+3],r[$+4],r[$+5]),w.set(r[$+6],r[$+7],r[$+8]),L.set(o[T+0],o[T+1]),D.set(o[T+2],o[T+3]),V.set(o[T+4],o[T+5]),B.copy(E).add(M).add(w).divideScalar(3);const F=v(B);b(L,T+0,E,F),b(D,T+2,M,F),b(V,T+4,w,F)}}function b(E,M,w,B){B<0&&E.x===1&&(o[M]=E.x-1),w.x===0&&w.z===0&&(o[M]=B/2/Math.PI+.5)}function v(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.vertices,e.indices,e.radius,e.details)}}class Fd extends Zs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fd(e.radius,e.detail)}}const Du=new U,Uu=new U,Od=new U,Nu=new Hn;class ax extends ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(si*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,h=[0,0,0],d=["a","b","c"],p=new Array(3),m={},g=[];for(let y=0;y<l;y+=3){o?(h[0]=o.getX(y),h[1]=o.getX(y+1),h[2]=o.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:b,b:v,c:_}=Nu;if(b.fromBufferAttribute(a,h[0]),v.fromBufferAttribute(a,h[1]),_.fromBufferAttribute(a,h[2]),Nu.getNormal(Od),p[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,p[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const M=(E+1)%3,w=p[E],B=p[M],L=Nu[d[E]],D=Nu[d[M]],V=`${w}_${B}`,$=`${B}_${w}`;$ in m&&m[$]?(Od.dot(m[$].normal)<=r&&(g.push(L.x,L.y,L.z),g.push(D.x,D.y,D.z)),m[$]=null):V in m||(m[V]={index0:h[E],index1:h[M],normal:Od.clone()})}}for(const y in m)if(m[y]){const{index0:b,index1:v}=m[y];Du.fromBufferAttribute(a,b),Uu.fromBufferAttribute(a,v),g.push(Du.x,Du.y,Du.z),g.push(Uu.x,Uu.y,Uu.z)}this.setAttribute("position",new ze(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ga extends Iu{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Iu().fromJSON(i))}return this}}const cx={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=$m(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h,d,p,m,g;if(n&&(r=dx(s,e,r,t)),s.length>80*t){a=h=s[0],l=d=s[1];for(let y=t;y<i;y+=t)p=s[y],m=s[y+1],p<a&&(a=p),m<l&&(l=m),p>h&&(h=p),m>d&&(d=m);g=Math.max(h-a,d-l),g=g!==0?32767/g:0}return wc(r,o,t,a,l,g,0),o}};function $m(s,e,t,n,i){let r,o;if(i===Ex(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Km(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Km(r,s[r],s[r+1],o);return o&&Fu(o,o.next)&&(Cc(o),o=o.next),o}function Js(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Fu(t,t.next)||Yt(t.prev,t,t.next)===0)){if(Cc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wc(s,e,t,n,i,r,o){if(!s)return;!o&&r&&xx(s,n,i,r);let a=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?ux(s,n,i,r):lx(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(h.i/t|0),Cc(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=hx(Js(s),e,t),wc(s,e,t,n,i,r,2)):o===2&&fx(s,e,t,n,i,r):wc(Js(s),e,t,n,i,r,1);break}}}function lx(s){const e=s.prev,t=s,n=s.next;if(Yt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,h=n.y,d=i<r?i<o?i:o:r<o?r:o,p=a<l?a<h?a:h:l<h?l:h,m=i>r?i>o?i:o:r>o?r:o,g=a>l?a>h?a:h:l>h?l:h;let y=n.next;for(;y!==e;){if(y.x>=d&&y.x<=m&&y.y>=p&&y.y<=g&&_a(i,a,r,l,o,h,y.x,y.y)&&Yt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function ux(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Yt(i,r,o)>=0)return!1;const a=i.x,l=r.x,h=o.x,d=i.y,p=r.y,m=o.y,g=a<l?a<h?a:h:l<h?l:h,y=d<p?d<m?d:m:p<m?p:m,b=a>l?a>h?a:h:l>h?l:h,v=d>p?d>m?d:m:p>m?p:m,_=Bd(g,y,e,t,n),E=Bd(b,v,e,t,n);let M=s.prevZ,w=s.nextZ;for(;M&&M.z>=_&&w&&w.z<=E;){if(M.x>=g&&M.x<=b&&M.y>=y&&M.y<=v&&M!==i&&M!==o&&_a(a,d,l,p,h,m,M.x,M.y)&&Yt(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=g&&w.x<=b&&w.y>=y&&w.y<=v&&w!==i&&w!==o&&_a(a,d,l,p,h,m,w.x,w.y)&&Yt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=_;){if(M.x>=g&&M.x<=b&&M.y>=y&&M.y<=v&&M!==i&&M!==o&&_a(a,d,l,p,h,m,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=E;){if(w.x>=g&&w.x<=b&&w.y>=y&&w.y<=v&&w!==i&&w!==o&&_a(a,d,l,p,h,m,w.x,w.y)&&Yt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function hx(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Fu(i,r)&&Zm(i,n,n.next,r)&&Rc(i,r)&&Rc(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Cc(n),Cc(n.next),n=s=r),n=n.next}while(n!==s);return Js(n)}function fx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mx(o,a)){let l=Jm(o,a);o=Js(o,o.next),l=Js(l,l.next),wc(o,e,t,n,i,r,0),wc(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function dx(s,e,t,n){const i=[];let r,o,a,l,h;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,h=$m(s,a,l,n,!1),h===h.next&&(h.steiner=!0),i.push(vx(h));for(i.sort(px),r=0;r<i.length;r++)t=mx(i[r],t);return t}function px(s,e){return s.x-e.x}function mx(s,e){const t=gx(s,e);if(!t)return e;const n=Jm(t,s);return Js(n,n.next),Js(t,t.next)}function gx(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const m=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=r&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,h=i.y;let d=1/0,p;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&_a(o<h?r:n,o,l,h,o<h?n:r,o,t.x,t.y)&&(p=Math.abs(o-t.y)/(r-t.x),Rc(t,s)&&(p<d||p===d&&(t.x>i.x||t.x===i.x&&_x(i,t)))&&(i=t,d=p)),t=t.next;while(t!==a);return i}function _x(s,e){return Yt(s.prev,s,e.prev)<0&&Yt(e.next,s,s.next)<0}function xx(s,e,t,n){let i=s;do i.z===0&&(i.z=Bd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,yx(i)}function yx(s){let e,t,n,i,r,o,a,l,h=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<h&&(a++,n=n.nextZ,!!n);e++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,h*=2}while(o>1);return s}function Bd(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function vx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function _a(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Mx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Sx(s,e)&&(Rc(s,e)&&Rc(e,s)&&bx(s,e)&&(Yt(s.prev,s,e.prev)||Yt(s,e.prev,e))||Fu(s,e)&&Yt(s.prev,s,s.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Fu(s,e){return s.x===e.x&&s.y===e.y}function Zm(s,e,t,n){const i=Bu(Yt(s,e,t)),r=Bu(Yt(s,e,n)),o=Bu(Yt(t,n,s)),a=Bu(Yt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ou(s,t,e)||r===0&&Ou(s,n,e)||o===0&&Ou(t,s,n)||a===0&&Ou(t,e,n))}function Ou(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Bu(s){return s>0?1:s<0?-1:0}function Sx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Rc(s,e){return Yt(s.prev,s,s.next)<0?Yt(s,e,s.next)>=0&&Yt(s,s.prev,e)>=0:Yt(s,e,s.prev)<0||Yt(s,s.next,e)<0}function bx(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Jm(s,e){const t=new zd(s.i,s.x,s.y),n=new zd(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Km(s,e,t,n){const i=new zd(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function zd(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ex(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class br{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return br.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];jm(e),Qm(n,e);let o=e.length;t.forEach(jm);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Qm(n,t[l]);const a=cx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function jm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class kd extends ft{constructor(e=new ga([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const h=e[a];o(h)}this.setAttribute("position",new ze(i,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function o(a){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:g-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Ax;let M,w=!1,B,L,D,V;_&&(M=_.getSpacedPoints(d),w=!0,m=!1,B=_.computeFrenetFrames(d,!1),L=new U,D=new U,V=new U),m||(v=0,g=0,y=0,b=0);const $=a.extractPoints(h);let T=$.shape;const F=$.holes;if(!br.isClockWise(T)){T=T.reverse();for(let z=0,Ee=F.length;z<Ee;z++){const le=F[z];br.isClockWise(le)&&(F[z]=le.reverse())}}const de=br.triangulateShape(T,F),G=T;for(let z=0,Ee=F.length;z<Ee;z++){const le=F[z];T=T.concat(le)}function se(z,Ee,le){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(Ee,le)}const ee=T.length,he=de.length;function ae(z,Ee,le){let Se,pe,Oe;const De=z.x-Ee.x,Ve=z.y-Ee.y,xt=le.x-z.x,N=le.y-z.y,R=De*De+Ve*Ve,ne=De*N-Ve*xt;if(Math.abs(ne)>Number.EPSILON){const oe=Math.sqrt(R),xe=Math.sqrt(xt*xt+N*N),ge=Ee.x-Ve/oe,ot=Ee.y+De/oe,Qe=le.x-N/xe,Re=le.y+xt/xe,Ce=((Qe-ge)*N-(Re-ot)*xt)/(De*N-Ve*xt);Se=ge+De*Ce-z.x,pe=ot+Ve*Ce-z.y;const at=Se*Se+pe*pe;if(at<=2)return new ue(Se,pe);Oe=Math.sqrt(at/2)}else{let oe=!1;De>Number.EPSILON?xt>Number.EPSILON&&(oe=!0):De<-Number.EPSILON?xt<-Number.EPSILON&&(oe=!0):Math.sign(Ve)===Math.sign(N)&&(oe=!0),oe?(Se=-Ve,pe=De,Oe=Math.sqrt(R)):(Se=De,pe=Ve,Oe=Math.sqrt(R/2))}return new ue(Se/Oe,pe/Oe)}const ce=[];for(let z=0,Ee=G.length,le=Ee-1,Se=z+1;z<Ee;z++,le++,Se++)le===Ee&&(le=0),Se===Ee&&(Se=0),ce[z]=ae(G[z],G[le],G[Se]);const ve=[];let ye,Fe=ce.concat();for(let z=0,Ee=F.length;z<Ee;z++){const le=F[z];ye=[];for(let Se=0,pe=le.length,Oe=pe-1,De=Se+1;Se<pe;Se++,Oe++,De++)Oe===pe&&(Oe=0),De===pe&&(De=0),ye[Se]=ae(le[Se],le[Oe],le[De]);ve.push(ye),Fe=Fe.concat(ye)}for(let z=0;z<v;z++){const Ee=z/v,le=g*Math.cos(Ee*Math.PI/2),Se=y*Math.sin(Ee*Math.PI/2)+b;for(let pe=0,Oe=G.length;pe<Oe;pe++){const De=se(G[pe],ce[pe],Se);$e(De.x,De.y,-le)}for(let pe=0,Oe=F.length;pe<Oe;pe++){const De=F[pe];ye=ve[pe];for(let Ve=0,xt=De.length;Ve<xt;Ve++){const N=se(De[Ve],ye[Ve],Se);$e(N.x,N.y,-le)}}}const st=y+b;for(let z=0;z<ee;z++){const Ee=m?se(T[z],Fe[z],st):T[z];w?(D.copy(B.normals[0]).multiplyScalar(Ee.x),L.copy(B.binormals[0]).multiplyScalar(Ee.y),V.copy(M[0]).add(D).add(L),$e(V.x,V.y,V.z)):$e(Ee.x,Ee.y,0)}for(let z=1;z<=d;z++)for(let Ee=0;Ee<ee;Ee++){const le=m?se(T[Ee],Fe[Ee],st):T[Ee];w?(D.copy(B.normals[z]).multiplyScalar(le.x),L.copy(B.binormals[z]).multiplyScalar(le.y),V.copy(M[z]).add(D).add(L),$e(V.x,V.y,V.z)):$e(le.x,le.y,p/d*z)}for(let z=v-1;z>=0;z--){const Ee=z/v,le=g*Math.cos(Ee*Math.PI/2),Se=y*Math.sin(Ee*Math.PI/2)+b;for(let pe=0,Oe=G.length;pe<Oe;pe++){const De=se(G[pe],ce[pe],Se);$e(De.x,De.y,p+le)}for(let pe=0,Oe=F.length;pe<Oe;pe++){const De=F[pe];ye=ve[pe];for(let Ve=0,xt=De.length;Ve<xt;Ve++){const N=se(De[Ve],ye[Ve],Se);w?$e(N.x,N.y+M[d-1].y,M[d-1].x+le):$e(N.x,N.y,p+le)}}}te(),_e();function te(){const z=i.length/3;if(m){let Ee=0,le=ee*Ee;for(let Se=0;Se<he;Se++){const pe=de[Se];We(pe[2]+le,pe[1]+le,pe[0]+le)}Ee=d+v*2,le=ee*Ee;for(let Se=0;Se<he;Se++){const pe=de[Se];We(pe[0]+le,pe[1]+le,pe[2]+le)}}else{for(let Ee=0;Ee<he;Ee++){const le=de[Ee];We(le[2],le[1],le[0])}for(let Ee=0;Ee<he;Ee++){const le=de[Ee];We(le[0]+ee*d,le[1]+ee*d,le[2]+ee*d)}}n.addGroup(z,i.length/3-z,0)}function _e(){const z=i.length/3;let Ee=0;Ue(G,Ee),Ee+=G.length;for(let le=0,Se=F.length;le<Se;le++){const pe=F[le];Ue(pe,Ee),Ee+=pe.length}n.addGroup(z,i.length/3-z,1)}function Ue(z,Ee){let le=z.length;for(;--le>=0;){const Se=le;let pe=le-1;pe<0&&(pe=z.length-1);for(let Oe=0,De=d+v*2;Oe<De;Oe++){const Ve=ee*Oe,xt=ee*(Oe+1),N=Ee+Se+Ve,R=Ee+pe+Ve,ne=Ee+pe+xt,oe=Ee+Se+xt;ke(N,R,ne,oe)}}}function $e(z,Ee,le){l.push(z),l.push(Ee),l.push(le)}function We(z,Ee,le){mt(z),mt(Ee),mt(le);const Se=i.length/3,pe=E.generateTopUV(n,i,Se-3,Se-2,Se-1);Ze(pe[0]),Ze(pe[1]),Ze(pe[2])}function ke(z,Ee,le,Se){mt(z),mt(Ee),mt(Se),mt(Ee),mt(le),mt(Se);const pe=i.length/3,Oe=E.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);Ze(Oe[0]),Ze(Oe[1]),Ze(Oe[3]),Ze(Oe[1]),Ze(Oe[2]),Ze(Oe[3])}function mt(z){i.push(l[z*3+0]),i.push(l[z*3+1]),i.push(l[z*3+2])}function Ze(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Pu[i.type]().fromJSON(i)),new kd(n,e.options)}}const Ax={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],h=e[i*3],d=e[i*3+1];return[new ue(r,o),new ue(a,l),new ue(h,d)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],h=e[n*3],d=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],y=e[i*3+2],b=e[r*3],v=e[r*3+1],_=e[r*3+2];return Math.abs(a-d)<Math.abs(o-h)?[new ue(o,1-l),new ue(h,1-p),new ue(m,1-y),new ue(b,1-_)]:[new ue(a,1-l),new ue(d,1-p),new ue(g,1-y),new ue(v,1-_)]}};function Tx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vd extends Zs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vd(e.radius,e.detail)}}class zu extends Zs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zu(e.radius,e.detail)}}class Gd extends ft{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],h=[],d=[];let p=e;const m=(t-e)/i,g=new U,y=new ue;for(let b=0;b<=i;b++){for(let v=0;v<=n;v++){const _=r+v/n*o;g.x=p*Math.cos(_),g.y=p*Math.sin(_),l.push(g.x,g.y,g.z),h.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,d.push(y.x,y.y)}p+=m}for(let b=0;b<i;b++){const v=b*(n+1);for(let _=0;_<n;_++){const E=_+v,M=E,w=E+n+1,B=E+n+2,L=E+1;a.push(M,w,L),a.push(w,B,L)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hd extends ft{constructor(e=new ga([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let d=0;d<e.length;d++)h(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ze(i,3)),this.setAttribute("normal",new ze(r,3)),this.setAttribute("uv",new ze(o,2));function h(d){const p=i.length/3,m=d.extractPoints(t);let g=m.shape;const y=m.holes;br.isClockWise(g)===!1&&(g=g.reverse());for(let v=0,_=y.length;v<_;v++){const E=y[v];br.isClockWise(E)===!0&&(y[v]=E.reverse())}const b=br.triangulateShape(g,y);for(let v=0,_=y.length;v<_;v++){const E=y[v];g=g.concat(E)}for(let v=0,_=g.length;v<_;v++){const E=g[v];i.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let v=0,_=b.length;v<_;v++){const E=b[v],M=E[0]+p,w=E[1]+p,B=E[2]+p;n.push(M,w,B),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return wx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Hd(n,e.curveSegments)}}function wx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class ku extends ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const d=[],p=new U,m=new U,g=[],y=[],b=[],v=[];for(let _=0;_<=n;_++){const E=[],M=_/n;let w=0;_===0&&o===0?w=.5/t:_===n&&l===Math.PI&&(w=-.5/t);for(let B=0;B<=t;B++){const L=B/t;p.x=-e*Math.cos(i+L*r)*Math.sin(o+M*a),p.y=e*Math.cos(o+M*a),p.z=e*Math.sin(i+L*r)*Math.sin(o+M*a),y.push(p.x,p.y,p.z),m.copy(p).normalize(),b.push(m.x,m.y,m.z),v.push(L+w,1-M),E.push(h++)}d.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const M=d[_][E+1],w=d[_][E],B=d[_+1][E],L=d[_+1][E+1];(_!==0||o>0)&&g.push(M,w,L),(_!==n-1||l<Math.PI)&&g.push(w,B,L)}this.setIndex(g),this.setAttribute("position",new ze(y,3)),this.setAttribute("normal",new ze(b,3)),this.setAttribute("uv",new ze(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wd extends Zs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wd(e.radius,e.detail)}}class Xd extends ft{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],h=[],d=new U,p=new U,m=new U;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){const b=y/i*r,v=g/n*Math.PI*2;p.x=(e+t*Math.cos(v))*Math.cos(b),p.y=(e+t*Math.cos(v))*Math.sin(b),p.z=t*Math.sin(v),a.push(p.x,p.y,p.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),m.subVectors(p,d).normalize(),l.push(m.x,m.y,m.z),h.push(y/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){const b=(i+1)*g+y-1,v=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,E=(i+1)*g+y;o.push(b,v,E),o.push(v,_,E)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qd extends ft{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],h=[],d=[],p=new U,m=new U,g=new U,y=new U,b=new U,v=new U,_=new U;for(let M=0;M<=n;++M){const w=M/n*r*Math.PI*2;E(w,r,o,e,g),E(w+.01,r,o,e,y),v.subVectors(y,g),_.addVectors(y,g),b.crossVectors(v,_),_.crossVectors(b,v),b.normalize(),_.normalize();for(let B=0;B<=i;++B){const L=B/i*Math.PI*2,D=-t*Math.cos(L),V=t*Math.sin(L);p.x=g.x+(D*_.x+V*b.x),p.y=g.y+(D*_.y+V*b.y),p.z=g.z+(D*_.z+V*b.z),l.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),d.push(M/n),d.push(B/i)}}for(let M=1;M<=n;M++)for(let w=1;w<=i;w++){const B=(i+1)*(M-1)+(w-1),L=(i+1)*M+(w-1),D=(i+1)*M+w,V=(i+1)*(M-1)+w;a.push(B,L,V),a.push(L,D,V)}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(d,2));function E(M,w,B,L,D){const V=Math.cos(M),$=Math.sin(M),T=B/w*M,F=Math.cos(T);D.x=L*(2+F)*.5*V,D.y=L*(2+F)*$*.5,D.z=L*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Yd extends ft{constructor(e=new qm(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,h=new ue;let d=new U;const p=[],m=[],g=[],y=[];b(),this.setIndex(y),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(m,3)),this.setAttribute("uv",new ze(g,2));function b(){for(let M=0;M<t;M++)v(M);v(r===!1?t:0),E(),_()}function v(M){d=e.getPointAt(M/t,d);const w=o.normals[M],B=o.binormals[M];for(let L=0;L<=i;L++){const D=L/i*Math.PI*2,V=Math.sin(D),$=-Math.cos(D);l.x=$*w.x+V*B.x,l.y=$*w.y+V*B.y,l.z=$*w.z+V*B.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,p.push(a.x,a.y,a.z)}}function _(){for(let M=1;M<=t;M++)for(let w=1;w<=i;w++){const B=(i+1)*(M-1)+(w-1),L=(i+1)*M+(w-1),D=(i+1)*M+w,V=(i+1)*(M-1)+w;y.push(B,L,V),y.push(L,D,V)}}function E(){for(let M=0;M<=t;M++)for(let w=0;w<=i;w++)h.x=M/t,h.y=w/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yd(new Pu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Rx extends ft{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new U,r=new U;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let h=0,d=l.length;h<d;++h){const p=l[h],m=p.start,g=p.count;for(let y=m,b=m+g;y<b;y+=3)for(let v=0;v<3;v++){const _=a.getX(y+v),E=a.getX(y+(v+1)%3);i.fromBufferAttribute(o,_),r.fromBufferAttribute(o,E),e0(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let h=0;h<3;h++){const d=3*a+h,p=3*a+(h+1)%3;i.fromBufferAttribute(o,d),r.fromBufferAttribute(o,p),e0(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function e0(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var t0=Object.freeze({__proto__:null,BoxGeometry:Ci,CapsuleGeometry:Dd,CircleGeometry:Ud,ConeGeometry:Nd,CylinderGeometry:Tc,DodecahedronGeometry:Fd,EdgesGeometry:ax,ExtrudeGeometry:kd,IcosahedronGeometry:Vd,LatheGeometry:Lu,OctahedronGeometry:zu,PlaneGeometry:Fs,PolyhedronGeometry:Zs,RingGeometry:Gd,ShapeGeometry:Hd,SphereGeometry:ku,TetrahedronGeometry:Wd,TorusGeometry:Xd,TorusKnotGeometry:qd,TubeGeometry:Yd,WireframeGeometry:Rx});class Cx extends null{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Px extends null{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ix extends null{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lx extends null{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dx extends null{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ux extends null{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Nx extends null{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class n0 extends qi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fx extends null{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Le(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ox extends null{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ks(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function i0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function r0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $d(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Zd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function Bx(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const h=r.tracks[l],d=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const y=h.times[g]*i;if(!(y<t||y>=n)){p.push(h.times[g]);for(let b=0;b<d;++b)m.push(h.values[g*d+b])}}p.length!==0&&(h.times=Ks(p,h.times.constructor),h.values=Ks(m,h.values.constructor),o.push(h))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function zx(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const h=s.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(h===void 0)continue;let d=0;const p=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const y=a.times.length-1;let b;if(r<=a.times[0]){const _=d,E=p-d;b=a.values.slice(_,E)}else if(r>=a.times[y]){const _=y*p+d,E=_+p-d;b=a.values.slice(_,E)}else{const _=a.createInterpolant(),E=d,M=p-d;_.evaluate(r),b=_.resultBuffer.slice(E,M)}l==="quaternion"&&new Gn().fromArray(b).normalize().conjugate().toArray(b);const v=h.times.length;for(let _=0;_<v;++_){const E=_*g+m;if(l==="quaternion")Gn.multiplyQuaternionsFlat(h.values,E,b,0,h.values,E);else{const M=g-m*2;for(let w=0;w<M;++w)h.values[E+w]-=b[w]}}}return s.blendMode=Mo,s}const Vy={convertArray:Ks,isTypedArray:i0,getKeyframeOrder:r0,sortedArray:$d,flattenJSON:Zd,subclip:Bx,makeClipAdditive:zx};class Vu{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kx extends Vu{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ar,endingEnd:ar}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cr:r=e,a=2*t-n;break;case ys:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cr:o=e,l=2*n-t;break;case ys:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,d=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),b=y*y,v=b*y,_=-m*v+2*m*b-m*y,E=(1+m)*v+(-1.5-2*m)*b+(-.5+m)*y+1,M=(-1-g)*v+(1.5+g)*b+.5*y,w=g*v-g*b;for(let B=0;B!==a;++B)r[B]=_*o[d+B]+E*o[h+B]+M*o[l+B]+w*o[p+B];return r}}class s0 extends Vu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,d=(n-t)/(i-t),p=1-d;for(let m=0;m!==a;++m)r[m]=o[h+m]*p+o[l+m]*d;return r}}class Vx extends Vu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new s0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case vo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&i0(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const h=e[a],d=e[a+1];if(h!==d&&(a!==1||h!==e[0]))if(i)l=!0;else{const p=a*n,m=p-n,g=p+n;for(let y=0;y!==n;++y){const b=t[p+y];if(b!==t[m+y]||b!==t[g+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const p=a*n,m=o*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ji.prototype.TimeBufferType=Float32Array,ji.prototype.ValueBufferType=Float32Array,ji.prototype.DefaultInterpolation=yo;class xa extends ji{}xa.prototype.ValueTypeName="bool",xa.prototype.ValueBufferType=Array,xa.prototype.DefaultInterpolation=Dr,xa.prototype.InterpolantFactoryMethodLinear=void 0,xa.prototype.InterpolantFactoryMethodSmooth=void 0;class o0 extends ji{}o0.prototype.ValueTypeName="color";class Gu extends ji{}Gu.prototype.ValueTypeName="number";class Gx extends Vu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let h=e*a;for(let d=h+a;h!==d;h+=4)Gn.slerpFlat(r,0,o,h-a,o,h,l);return r}}class Pc extends ji{InterpolantFactoryMethodLinear(e){return new Gx(this.times,this.values,this.getValueSize(),e)}}Pc.prototype.ValueTypeName="quaternion",Pc.prototype.DefaultInterpolation=yo,Pc.prototype.InterpolantFactoryMethodSmooth=void 0;class ya extends ji{}ya.prototype.ValueTypeName="string",ya.prototype.ValueBufferType=Array,ya.prototype.DefaultInterpolation=Dr,ya.prototype.InterpolantFactoryMethodLinear=void 0,ya.prototype.InterpolantFactoryMethodSmooth=void 0;class Hu extends ji{}Hu.prototype.ValueTypeName="vector";class Wu{constructor(e,t=-1,n,i=vs){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Wx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ji.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],h=[];l.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);const d=r0(l);l=$d(l,1,d),h=$d(h,1,d),!i&&l[0]===0&&(l.push(r),h.push(h[0])),o.push(new Gu(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const h=e[a],d=h.name.match(r);if(d&&d.length>1){const p=d[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,y,b){if(g.length!==0){const v=[],_=[];Zd(g,v,_,y),v.length!==0&&b.push(new p(m,v,_))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let b=0;b<m[y].morphTargets.length;b++)g[m[y].morphTargets[b]]=-1;for(const b in g){const v=[],_=[];for(let E=0;E!==m[y].morphTargets.length;++E){const M=m[y];v.push(M.time),_.push(M.morphTarget===b?1:0)}i.push(new Gu(".morphTargetInfluence["+b+"]",v,_))}l=g.length*o}else{const g=".bones["+t[p].name+"]";n(Hu,g+".position",m,"pos",i),n(Pc,g+".quaternion",m,"rot",i),n(Hu,g+".scale",m,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gu;case"vector":case"vector2":case"vector3":case"vector4":return Hu;case"color":return o0;case"quaternion":return Pc;case"bool":case"boolean":return xa;case"string":return ya}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Wx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hx(s.type);if(s.times===void 0){const t=[],n=[];Zd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const rs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class a0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){const p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],y=h[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return y}return null}}}const Xx=new a0;class qx{constructor(e){this.manager=e!==void 0?e:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qx.DEFAULT_MATERIAL_NAME="__DEFAULT";const Er={};class Yx extends null{constructor(e,t){super(e),this.response=t}}class ss extends null{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=rs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Er[e]!==void 0){Er[e].push({onLoad:t,onProgress:n,onError:i});return}Er[e]=[],Er[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||h.body===void 0||h.body.getReader===void 0)return h;const d=Er[e],p=h.body.getReader(),m=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),g=m?parseInt(m):0,y=g!==0;let b=0;const v=new ReadableStream({start(_){E();function E(){p.read().then(({done:M,value:w})=>{if(M)_.close();else{b+=w.byteLength;const B=new ProgressEvent("progress",{lengthComputable:y,loaded:b,total:g});for(let L=0,D=d.length;L<D;L++){const V=d[L];V.onProgress&&V.onProgress(B)}_.enqueue(w),E()}})}}});return new Response(v)}else throw new Yx(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return h.json();default:if(a===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(a),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{rs.add(e,h);const d=Er[e];delete Er[e];for(let p=0,m=d.length;p<m;p++){const g=d[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const d=Er[e];if(d===void 0)throw this.manager.itemError(e),h;delete Er[e];for(let p=0,m=d.length;p<m;p++){const g=d[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gy extends null{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ss(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Wu.parse(e[n]);t.push(i)}return t}}class Hy extends null{constructor(e){super(e)}load(e,t,n,i){const r=this,o=[],a=new $_,l=new ss(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let h=0;function d(p){l.load(e[p],function(m){const g=r.parse(m,!0);o[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(a.minFilter=Ft),a.image=o,a.format=g.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)d(p);else l.load(e,function(p){const m=r.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let y=0;y<g;y++){o[y]={mipmaps:[]};for(let b=0;b<m.mipmapCount;b++)o[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+b]),o[y].format=m.format,o[y].width=m.width,o[y].height=m.height}a.image=o}else a.image.width=m.width,a.image.height=m.height,a.mipmaps=m.mipmaps;m.mipmapCount===1&&(a.minFilter=Ft),a.format=m.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Xu extends null{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=bs("img");function l(){d(),rs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(p){d(),i&&i(p),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Wy extends null{constructor(e){super(e)}load(e,t,n,i){const r=new jo;r.colorSpace=zn;const o=new Xu(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(h){o.load(e[h],function(d){r.images[h]=d,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let h=0;h<e.length;++h)l(h);return r}}class Xy extends null{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Ys,a=new ss(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let h;try{h=r.parse(l)}catch(d){if(i!==void 0)i(d);else{console.error(d);return}}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:Sn,o.wrapT=h.wrapT!==void 0?h.wrapT:Sn,o.magFilter=h.magFilter!==void 0?h.magFilter:Ft,o.minFilter=h.minFilter!==void 0?h.minFilter:Ft,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=Zn),h.mipmapCount===1&&(o.minFilter=Ft),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,t&&t(o,h)},n,i),o}}class qy extends null{constructor(e){super(e)}load(e,t,n,i){const r=new fn,o=new Xu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class $x extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Zx extends null{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Jd=new He,c0=new U,l0=new U;class Jx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;c0.setFromMatrixPosition(e.matrixWorld),t.position.copy(c0),l0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(l0),t.updateMatrixWorld(),Jd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kx extends null{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jx extends null{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Kx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const u0=new He,Ic=new U,Kd=new U;class Qx extends Jx{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ic.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ic),Kd.copy(n.position),Kd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kd),n.updateMatrixWorld(),i.makeTranslation(-Ic.x,-Ic.y,-Ic.z),u0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(u0)}}class h0 extends $x{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ey extends null{constructor(){super(new f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ty extends null{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ey}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ny extends null{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class iy extends null{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ry{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class sy extends null{constructor(e=new ry,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class jd extends null{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new ss(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=jd.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Le().setHex(o.value);break;case"v2":i.uniforms[r].value=new ue().fromArray(o.value);break;case"v3":i.uniforms[r].value=new U().fromArray(o.value);break;case"v4":i.uniforms[r].value=new Ct().fromArray(o.value);break;case"m3":i.uniforms[r].value=new rt().fromArray(o.value);break;case"m4":i.uniforms[r].value=new He().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ue().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Cx,SpriteMaterial:_m,RawShaderMaterial:Px,ShaderMaterial:ai,PointsMaterial:zm,MeshPhysicalMaterial:Lx,MeshStandardMaterial:Ix,MeshPhongMaterial:Dx,MeshToonMaterial:Ux,MeshNormalMaterial:Nx,MeshLambertMaterial:n0,MeshDepthMaterial:fm,MeshDistanceMaterial:dm,MeshBasicMaterial:Ri,MeshMatcapMaterial:Fx,LineDashedMaterial:Ox,LineBasicMaterial:Qn,Material:qi};return new t[e]}}class f0{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class oy extends null{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ay extends null{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ss(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,y){if(t[y]!==void 0)return t[y];const v=g.interleavedBuffers[y],_=r(g,v.buffer),E=Br(v.type,_),M=new gm(E,v.stride);return M.uuid=v.uuid,t[y]=M,M}function r(g,y){if(n[y]!==void 0)return n[y];const v=g.arrayBuffers[y],_=new Uint32Array(v).buffer;return n[y]=_,_}const o=e.isInstancedBufferGeometry?new oy:new ft,a=e.data.index;if(a!==void 0){const g=Br(a.type,a.array);o.setIndex(new kt(g,1))}const l=e.data.attributes;for(const g in l){const y=l[g];let b;if(y.isInterleavedBufferAttribute){const v=i(e.data,y.data);b=new la(v,y.itemSize,y.offset,y.normalized)}else{const v=Br(y.type,y.array),_=y.isInstancedBufferAttribute?vc:kt;b=new _(v,y.itemSize,y.normalized)}y.name!==void 0&&(b.name=y.name),y.usage!==void 0&&b.setUsage(y.usage),o.setAttribute(g,b)}const h=e.data.morphAttributes;if(h)for(const g in h){const y=h[g],b=[];for(let v=0,_=y.length;v<_;v++){const E=y[v];let M;if(E.isInterleavedBufferAttribute){const w=i(e.data,E.data);M=new la(w,E.itemSize,E.offset,E.normalized)}else{const w=Br(E.type,E.array);M=new kt(w,E.itemSize,E.normalized)}E.name!==void 0&&(M.name=E.name),b.push(M)}o.morphAttributes[g]=b}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,y=p.length;g!==y;++g){const b=p[g];o.addGroup(b.start,b.count,b.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new U;m.center!==void 0&&g.fromArray(m.center),o.boundingSphere=new An(g,m.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Yy extends null{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?f0.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new ss(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let h=null;try{h=JSON.parse(l)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const d=h.metadata;if(d===void 0||d.type===void 0||d.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(h,t)},n,i)}loadAsync(e,t){return as(this,null,function*(){const n=this,i=this.path===""?f0.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new ss(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=yield r.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return yield n.parseAsync(a)})}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(h)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),h=this.parseObject(e.object,r,l,a,n),d=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,d),t!==void 0){let p=!1;for(const m in o)if(o[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}parseAsync(e){return as(this,null,function*(){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=yield this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),h=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,h),l})}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new ga().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new bd().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new ay;for(let r=0,o=e.length;r<o;r++){let a;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in t0?a=t0[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new jd;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Wu.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const h=l,d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return o(d)}else return l.data?{data:Br(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new a0(t);r=new Xu(l),r.setCrossOrigin(this.crossOrigin);for(let h=0,d=e.length;h<d;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let y=0,b=m.length;y<b;y++){const v=m[y],_=a(v);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new Ys(_.data,_.width,_.height)))}i[p.uuid]=new Vr(g)}else{const g=a(p.url);i[p.uuid]=new Vr(g)}}}return i}parseImagesAsync(e){return as(this,null,function*(){const t=this,n={};let i;function r(o){return as(this,null,function*(){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return yield i.loadAsync(l)}else return o.data?{data:Br(o.type,o.data),width:o.width,height:o.height}:null})}if(e!==void 0&&e.length>0){i=new Xu(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],h=l.url;if(Array.isArray(h)){const d=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=yield r(g);y!==null&&(y instanceof HTMLImageElement?d.push(y):d.push(new Ys(y.data,y.width,y.height)))}n[l.uuid]=new Vr(d)}else{const d=yield r(l.url);n[l.uuid]=new Vr(d)}}}return n})}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],h=l.data;let d;Array.isArray(h)?(d=new jo,h.length===6&&(d.needsUpdate=!0)):(h&&h.data?d=new Ys:d=new fn,h&&(d.needsUpdate=!0)),d.source=l,d.uuid=a.uuid,a.name!==void 0&&(d.name=a.name),a.mapping!==void 0&&(d.mapping=n(a.mapping,cy)),a.channel!==void 0&&(d.channel=a.channel),a.offset!==void 0&&d.offset.fromArray(a.offset),a.repeat!==void 0&&d.repeat.fromArray(a.repeat),a.center!==void 0&&d.center.fromArray(a.center),a.rotation!==void 0&&(d.rotation=a.rotation),a.wrap!==void 0&&(d.wrapS=n(a.wrap[0],d0),d.wrapT=n(a.wrap[1],d0)),a.format!==void 0&&(d.format=a.format),a.internalFormat!==void 0&&(d.internalFormat=a.internalFormat),a.type!==void 0&&(d.type=a.type),a.colorSpace!==void 0&&(d.colorSpace=a.colorSpace),a.minFilter!==void 0&&(d.minFilter=n(a.minFilter,p0)),a.magFilter!==void 0&&(d.magFilter=n(a.magFilter,p0)),a.anisotropy!==void 0&&(d.anisotropy=a.anisotropy),a.flipY!==void 0&&(d.flipY=a.flipY),a.generateMipmaps!==void 0&&(d.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(d.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(d.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(d.compareFunction=a.compareFunction),a.userData!==void 0&&(d.userData=a.userData),i[a.uuid]=d}return i}parseObject(e,t,n,i,r){let o;function a(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function l(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let y=0,b=m.length;y<b;y++){const v=m[y];n[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),g.push(n[v])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let d,p;switch(e.type){case"Scene":o=new mm,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Le(e.background):o.background=h(e.background)),e.environment!==void 0&&(o.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new yd(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new xd(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new un(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new f(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new ny(e.color,e.intensity);break;case"DirectionalLight":o=new ty(e.color,e.intensity);break;case"PointLight":o=new h0(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new iy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new jx(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new Zx(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new sy().fromJSON(e);break;case"SkinnedMesh":d=a(e.geometry),p=l(e.material),o=new F_(d,p),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":d=a(e.geometry),p=l(e.material),o=new ln(d,p);break;case"InstancedMesh":d=a(e.geometry),p=l(e.material);const m=e.count,g=e.instanceMatrix,y=e.instanceColor;o=new z_(d,p,m),o.instanceMatrix=new vc(new Float32Array(g.array),16),y!==void 0&&(o.instanceColor=new vc(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":d=a(e.geometry),p=l(e.material),o=new X_(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,p),o.geometry=d,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(b=>{const v=new In;v.min.fromArray(b.boxMin),v.max.fromArray(b.boxMax);const _=new An;return _.radius=b.sphereRadius,_.center.fromArray(b.sphereCenter),{boxInitialized:b.boxInitialized,box:v,sphereInitialized:b.sphereInitialized,sphere:_}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=h(e.matricesTexture.uuid);break;case"LOD":o=new U_;break;case"Line":o=new Tu(a(e.geometry),l(e.material));break;case"LineLoop":o=new q_(a(e.geometry),l(e.material));break;case"LineSegments":o=new Bm(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Y_(a(e.geometry),l(e.material));break;case"Sprite":o=new D_(l(e.material));break;case"Group":o=new gc;break;case"Bone":o=new wm;break;default:o=new Lt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)o.add(this.parseObject(m[g],t,n,i,r))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const y=m[g];o.animations.push(r[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const y=m[g],b=o.getObjectByProperty("uuid",y.object);b!==void 0&&o.addLevel(b,y.distance,y.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const cy={UVMapping:hs,CubeReflectionMapping:ni,CubeRefractionMapping:gi,EquirectangularReflectionMapping:wr,EquirectangularRefractionMapping:Rr,CubeUVReflectionMapping:fs},d0={RepeatWrapping:uo,ClampToEdgeWrapping:Sn,MirroredRepeatWrapping:ho},p0={NearestFilter:Zt,NearestMipmapNearestFilter:Ea,NearestMipmapLinearFilter:Cr,LinearFilter:Ft,LinearMipmapNearestFilter:Ni,LinearMipmapLinearFilter:Zn};class $y extends null{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return rs.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),rs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});rs.add(e,l),r.manager.itemStart(e)}}let qu;class m0{static getContext(){return qu===void 0&&(qu=new(window.AudioContext||window.webkitAudioContext)),qu}static setContext(e){qu=e}}class Zy extends null{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ss(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const h=l.slice(0);m0.getContext().decodeAudioData(h,function(p){t(p)}).catch(a)}catch(h){a(h)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const g0=new He,_0=new He,js=new He;class Jy{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new un,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new un,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,js.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,o=t.near*Math.tan(si*t.fov*.5)/t.zoom;let a,l;_0.elements[12]=-i,g0.elements[12]=i,a=-o*t.aspect+r,l=o*t.aspect+r,js.elements[0]=2*t.near/(l-a),js.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(js),a=-o*t.aspect-r,l=o*t.aspect-r,js.elements[0]=2*t.near/(l-a),js.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(js)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(_0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(g0)}}class ly{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=x0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=x0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function x0(){return(typeof performance=="undefined"?Date:performance).now()}const Qs=new U,y0=new Gn,uy=new U,eo=new U;class Ky extends null{constructor(){super(),this.type="AudioListener",this.context=m0.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ly}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Qs,y0,uy),eo.set(0,0,-1).applyQuaternion(y0),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Qs.x,i),t.positionY.linearRampToValueAtTime(Qs.y,i),t.positionZ.linearRampToValueAtTime(Qs.z,i),t.forwardX.linearRampToValueAtTime(eo.x,i),t.forwardY.linearRampToValueAtTime(eo.y,i),t.forwardZ.linearRampToValueAtTime(eo.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Qs.x,Qs.y,Qs.z),t.setOrientation(eo.x,eo.y,eo.z,n.x,n.y,n.z)}}class jy extends null{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const to=new U,v0=new Gn,hy=new U,no=new U;class Qy extends null{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(to,v0,hy),no.set(0,0,1).applyQuaternion(v0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(to.x,n),t.positionY.linearRampToValueAtTime(to.y,n),t.positionZ.linearRampToValueAtTime(to.z,n),t.orientationX.linearRampToValueAtTime(no.x,n),t.orientationY.linearRampToValueAtTime(no.y,n),t.orientationZ.linearRampToValueAtTime(no.z,n)}else t.setPosition(to.x,to.y,to.z),t.setOrientation(no.x,no.y,no.z)}}class ev{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class fy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Gn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Gn.multiplyQuaternionsFlat(e,o,e,t,e,n),Gn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Qd="\\[\\]\\.:\\/",dy=new RegExp("["+Qd+"]","g"),ep="[^"+Qd+"]",py="[^"+Qd.replace("\\.","")+"]",my=/((?:WC+[\/:])*)/.source.replace("WC",ep),gy=/(WCOD+)?/.source.replace("WCOD",py),_y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ep),xy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ep),yy=new RegExp("^"+my+gy+_y+xy+"$"),vy=["material","materials","bones","map"];class My{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dy,"")}static parseTrackName(e){const t=yy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);vy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=My,Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray],Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tv{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Vn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=e.length,h=this.nCachedObjects_;for(let d=0,p=arguments.length;d!==p;++d){const m=arguments[d],g=m.uuid;let y=t[g];if(y===void 0){y=l++,t[g]=y,e.push(m);for(let b=0,v=o;b!==v;++b)r[b].push(new Tt(m,n[b],i[b]))}else if(y<h){a=e[y];const b=--h,v=e[b];t[v.uuid]=y,e[y]=v,t[g]=b,e[b]=m;for(let _=0,E=o;_!==E;++_){const M=r[_],w=M[b];let B=M[y];M[y]=w,B===void 0&&(B=new Tt(m,n[_],i[_])),M[b]=B}}else e[y]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],h=l.uuid,d=t[h];if(d!==void 0&&d>=r){const p=r++,m=e[p];t[m.uuid]=d,e[d]=m,t[h]=p,e[p]=l;for(let g=0,y=i;g!==y;++g){const b=n[g],v=b[p],_=b[d];b[d]=v,b[p]=_}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const h=arguments[a],d=h.uuid,p=t[d];if(p!==void 0)if(delete t[d],p<r){const m=--r,g=e[m],y=--o,b=e[y];t[g.uuid]=p,e[p]=g,t[b.uuid]=m,e[m]=b,e.pop();for(let v=0,_=i;v!==_;++v){const E=n[v],M=E[m],w=E[y];E[p]=M,E[m]=w,E.pop()}}else{const m=--o,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let y=0,b=i;y!==b;++y){const v=n[y];v[p]=v[m],v.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,h=l.length,d=this.nCachedObjects_,p=new Array(h);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(p);for(let m=d,g=l.length;m!==g;++m){const y=l[m];p[m]=new Tt(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],h=e[a];t[h]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class Sy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ar,endingEnd:ar};for(let h=0;h!==o;++h){const d=r[h].createInterpolant(null);a[h]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ih,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,h=a.sampleValues;return l[0]=r,l[1]=r+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Mo:for(let d=0,p=l.length;d!==p;++d)l[d].evaluate(o),h[d].accumulateAdditive(a);break;case vs:default:for(let d=0,p=l.length;d!==p;++d)l[d].evaluate(o),h[d].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Lh;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Ph){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=cr,i.endingEnd=cr):(e?i.endingStart=this.zeroSlopeAtStart?cr:ar:i.endingStart=ys,t?i.endingEnd=this.zeroSlopeAtEnd?cr:ar:i.endingEnd=ys)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const by=new Float32Array(1);class nv extends null{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let d=h[l];d===void 0&&(d={},h[l]=d);for(let p=0;p!==r;++p){const m=i[p],g=m.name;let y=d[g];if(y!==void 0)++y.referenceCount,o[p]=y;else{if(y=o[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,l,g));continue}const b=t&&t._propertyBindings[p].binding.parsedPath;y=new fy(Tt.create(n,g,b),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,l,g),o[p]=y}a[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,h=l[l.length-1],d=e._byClipCacheIndex;h._byClipCacheIndex=d,l[d]=h,l.pop(),e._byClipCacheIndex=null;const p=a.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new s0(new Float32Array(2),new Float32Array(2),1,by),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Wu.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=vs),l!==void 0){const p=l.actionByRoot[r];if(p!==void 0&&p.blendMode===n)return p;h=l.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const d=new Sy(this,o,t,n);return this._bindAction(d,h),this._addInactiveAction(d,a,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Wu.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)a[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const h=o[a];this._deactivateAction(h);const d=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=d,t[d]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class M0{constructor(e){this.value=e}clone(){return new M0(this.value.clone===void 0?this.value:this.value.clone())}}let Ey=0;class iv extends null{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ey++}),this.name="",this.usage=Fa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class rv extends null{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class sv{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const S0=new He;class ov{constructor(e,t,n=0,i=1/0){this.ray=new Ts(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return S0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(S0),this}intersectObject(e,t=!0,n=[]){return tp(e,this,n,t),n.sort(b0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)tp(e[i],this,n,t);return n.sort(b0),n}}function b0(s,e){return s.distance-e.distance}function tp(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)tp(i[r],e,t,!0)}}class av{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cv{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const E0=new ue;class lv{constructor(e=new ue(1/0,1/0),t=new ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=E0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,E0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const A0=new U,Yu=new U;class uv{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){A0.subVectors(e,this.start),Yu.subVectors(this.end,this.start);const n=Yu.dot(Yu);let r=Yu.dot(A0)/n;return t&&(r=Et(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const T0=new U;class hv extends null{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ft,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const h=o/l*Math.PI*2,d=a/l*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(d),Math.sin(d),1)}n.setAttribute("position",new ze(i,3));const r=new Qn({fog:!1,toneMapped:!1});this.cone=new Bm(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),T0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(T0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const os=new U,$u=new He,np=new He;class fv extends null{constructor(e){const t=w0(e),n=new ft,i=[],r=[],o=new Le(0,0,1),a=new Le(0,1,0);for(let h=0;h<t.length;h++){const d=t[h];d.parent&&d.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new ze(i,3)),n.setAttribute("color",new ze(r,3));const l=new Qn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");np.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&($u.multiplyMatrices(np,a.matrixWorld),os.setFromMatrixPosition($u),i.setXYZ(o,os.x,os.y,os.z),$u.multiplyMatrices(np,a.parent.matrixWorld),os.setFromMatrixPosition($u),i.setXYZ(o+1,os.x,os.y,os.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function w0(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,w0(s.children[t]));return e}class dv extends null{constructor(e,t,n){const i=new ku(t,4,2),r=new Ri({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Ay=new U,R0=new Le,C0=new Le;class pv extends null{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new zu(t);i.rotateY(Math.PI*.5),this.material=new Ri({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new kt(o,3)),this.add(new ln(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");R0.copy(this.light.color),C0.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?R0:C0;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Ay.setFromMatrixPosition(this.light.matrixWorld).negate())}}class mv extends null{constructor(e=10,t=10,n=4473924,i=8947848){n=new Le(n),i=new Le(i);const r=t/2,o=e/t,a=e/2,l=[],h=[];for(let m=0,g=0,y=-a;m<=t;m++,y+=o){l.push(-a,0,y,a,0,y),l.push(y,0,-a,y,0,a);const b=m===r?n:i;b.toArray(h,g),g+=3,b.toArray(h,g),g+=3,b.toArray(h,g),g+=3,b.toArray(h,g),g+=3}const d=new ft;d.setAttribute("position",new ze(l,3)),d.setAttribute("color",new ze(h,3));const p=new Qn({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class gv extends null{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new Le(r),o=new Le(o);const a=[],l=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,y=Math.cos(m)*e;a.push(0,0,0),a.push(g,0,y);const b=p&1?r:o;l.push(b.r,b.g,b.b),l.push(b.r,b.g,b.b)}for(let p=0;p<n;p++){const m=p&1?r:o,g=e-e/n*p;for(let y=0;y<i;y++){let b=y/i*(Math.PI*2),v=Math.sin(b)*g,_=Math.cos(b)*g;a.push(v,0,_),l.push(m.r,m.g,m.b),b=(y+1)/i*(Math.PI*2),v=Math.sin(b)*g,_=Math.cos(b)*g,a.push(v,0,_),l.push(m.r,m.g,m.b)}}const h=new ft;h.setAttribute("position",new ze(a,3)),h.setAttribute("color",new ze(l,3));const d=new Qn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const P0=new U,Zu=new U,I0=new U;class _v extends null{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new ft;i.setAttribute("position",new ze([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Qn({fog:!1,toneMapped:!1});this.lightPlane=new Tu(i,r),this.add(this.lightPlane),i=new ft,i.setAttribute("position",new ze([0,0,0,0,0,1],3)),this.targetLine=new Tu(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),P0.setFromMatrixPosition(this.light.matrixWorld),Zu.setFromMatrixPosition(this.light.target.matrixWorld),I0.subVectors(Zu,P0),this.lightPlane.lookAt(Zu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Zu),this.targetLine.scale.z=I0.length()}}const Ju=new U,Qt=new Ko;class xv extends null{constructor(e){const t=new ft,n=new Qn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(y,b){l(y),l(b)}function l(y){i.push(0,0,0),r.push(0,0,0),o[y]===void 0&&(o[y]=[]),o[y].push(i.length/3-1)}t.setAttribute("position",new ze(i,3)),t.setAttribute("color",new ze(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new Le(16755200),d=new Le(16711680),p=new Le(43775),m=new Le(16777215),g=new Le(3355443);this.setColors(h,d,p,m,g)}setColors(e,t,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Qt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),rn("c",t,e,Qt,0,0,-1),rn("t",t,e,Qt,0,0,1),rn("n1",t,e,Qt,-n,-i,-1),rn("n2",t,e,Qt,n,-i,-1),rn("n3",t,e,Qt,-n,i,-1),rn("n4",t,e,Qt,n,i,-1),rn("f1",t,e,Qt,-n,-i,1),rn("f2",t,e,Qt,n,-i,1),rn("f3",t,e,Qt,-n,i,1),rn("f4",t,e,Qt,n,i,1),rn("u1",t,e,Qt,n*.7,i*1.1,-1),rn("u2",t,e,Qt,-n*.7,i*1.1,-1),rn("u3",t,e,Qt,0,i*2,-1),rn("cf1",t,e,Qt,-n,0,1),rn("cf2",t,e,Qt,n,0,1),rn("cf3",t,e,Qt,0,-i,1),rn("cf4",t,e,Qt,0,i,1),rn("cn1",t,e,Qt,-n,0,-1),rn("cn2",t,e,Qt,n,0,-1),rn("cn3",t,e,Qt,0,-i,-1),rn("cn4",t,e,Qt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function rn(s,e,t,n,i,r,o){Ju.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const l=t.getAttribute("position");for(let h=0,d=a.length;h<d;h++)l.setXYZ(a[h],Ju.x,Ju.y,Ju.z)}}const Ku=new In;class yv extends null{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new ft;r.setIndex(new kt(n,1)),r.setAttribute("position",new kt(i,3)),super(r,new Qn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ku.setFromObject(this.object),Ku.isEmpty())return;const t=Ku.min,n=Ku.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class vv extends null{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ft;r.setIndex(new kt(n,1)),r.setAttribute("position",new ze(i,3)),super(r,new Qn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Mv extends null{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new ft;o.setAttribute("position",new ze(r,3)),o.computeBoundingSphere(),super(o,new Qn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ft;l.setAttribute("position",new ze(a,3)),l.computeBoundingSphere(),this.add(new ln(l,new Ri({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const L0=new U;let ju,ip;class Sv extends null{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",ju===void 0&&(ju=new ft,ju.setAttribute("position",new ze([0,0,0,0,1,0],3)),ip=new Tc(0,.5,1,5,1),ip.translate(0,-.5,0)),this.position.copy(t),this.line=new Tu(ju,new Qn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ln(ip,new Ri({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{L0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(L0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class bv extends null{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ft;i.setAttribute("position",new ze(t,3)),i.setAttribute("color",new ze(n,3));const r=new Qn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Le,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ev{constructor(){this.type="ShapePath",this.color=new Le,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Iu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let M=0,w=_.length;M<w;M++){const B=_[M],L=new ga;L.curves=B.curves,E.push(L)}return E}function n(_,E){const M=E.length;let w=!1;for(let B=M-1,L=0;L<M;B=L++){let D=E[B],V=E[L],$=V.x-D.x,T=V.y-D.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(D=E[L],$=-$,V=E[B],T=-T),_.y<D.y||_.y>V.y)continue;if(_.y===D.y){if(_.x===D.x)return!0}else{const F=T*(_.x-D.x)-$*(_.y-D.y);if(F===0)return!0;if(F<0)continue;w=!w}}else{if(_.y!==D.y)continue;if(V.x<=_.x&&_.x<=D.x||D.x<=_.x&&_.x<=V.x)return!0}}return w}const i=br.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const h=[];if(r.length===1)return a=r[0],l=new ga,l.curves=a.curves,h.push(l),h;let d=!i(r[0].getPoints());d=e?!d:d;const p=[],m=[];let g=[],y=0,b;m[y]=void 0,g[y]=[];for(let _=0,E=r.length;_<E;_++)a=r[_],b=a.getPoints(),o=i(b),o=e?!o:o,o?(!d&&m[y]&&y++,m[y]={s:new ga,p:b},m[y].s.curves=a.curves,d&&y++,g[y]=[]):g[y].push({h:a,p:b[0]});if(!m[0])return t(r);if(m.length>1){let _=!1,E=0;for(let M=0,w=m.length;M<w;M++)p[M]=[];for(let M=0,w=m.length;M<w;M++){const B=g[M];for(let L=0;L<B.length;L++){const D=B[L];let V=!0;for(let $=0;$<m.length;$++)n(D.p,m[$].p)&&(M!==$&&E++,V?(V=!1,p[$].push(D)):_=!0);V&&p[M].push(D)}}E>0&&_===!1&&(g=p)}let v;for(let _=0,E=m.length;_<E;_++){l=m[_].s,h.push(l),v=g[_];for(let M=0,w=v.length;M<w;M++)l.holes.push(v[M].h)}return h}}class Av extends null{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,G0(va({},i),{count:n})),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ht}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ht)}}]);
}());