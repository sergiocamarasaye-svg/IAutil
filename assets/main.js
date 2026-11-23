(function(){
var b=document.getElementById('mb'),m=document.getElementById('mn');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
function cp(t,x){var o=x.textContent;function ok(){x.textContent='¡Copiado!';setTimeout(function(){x.textContent=o},1800)}
function fb(){var a=document.createElement('textarea');a.value=t;a.setAttribute('readonly','');a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');ok()}catch(e){x.textContent='Selecciona y copia'}document.body.removeChild(a)}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,fb)}else fb()}
document.querySelectorAll('.cp').forEach(function(x){x.addEventListener('click',function(){var s=x.getAttribute('data-t');cp(s?document.getElementById(s).textContent:x.getAttribute('data-p'),x)})});
var f=document.getElementById('cf');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var o=document.getElementById('cm'),bt=f.querySelector('button'),d={};
new FormData(f).forEach(function(v,k){d[k]=v});if(d._honey)return;
if(!d.nombre.trim()||!d.mensaje.trim()||!f.email.checkValidity()){o.textContent='Rellena nombre, un email válido y el mensaje.';return}
d._subject='Mensaje desde IA ÚTIL';bt.disabled=true;o.textContent='Enviando...';
fetch('https://formsubmit.co/ajax/aprendeconiautil@gmail.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)})
.then(function(r){return r.json()}).then(function(j){if(j.success===true||j.success==='true'){o.textContent='¡Mensaje enviado! Gracias por escribirnos.';f.reset()}else throw 0})
.catch(function(){o.textContent='No se ha podido enviar. Escríbenos a aprendeconiautil@gmail.com'}).then(function(){bt.disabled=false})})}
/* Consentimiento: nada publicitario se carga sin aceptación. Ver README para la CMP certificada (TCF) */
var AD='ca-pub-XXXXXXXXXXXXXXXX',c=document.getElementById('ck');if(!c)return;
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
function get(){try{return localStorage.getItem('iautil_consent')}catch(e){return null}}
function set(v){try{localStorage.setItem('iautil_consent',v)}catch(e){}}
function apply(v){if(v!=='1')return;gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});
if(AD.indexOf('XXXX')>-1||document.getElementById('adsjs'))return;var s=document.createElement('script');s.id='adsjs';s.async=true;s.crossOrigin='anonymous';s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+AD;document.head.appendChild(s)}
var v=get();apply(v);if(!v)c.hidden=false;
function done(x){set(x);c.hidden=true;apply(x)}
document.getElementById('ok').onclick=function(){done('1')};
document.getElementById('no').onclick=function(){done('0')};
document.getElementById('sv').onclick=function(){done(document.getElementById('ads').checked?'1':'0')};
document.querySelectorAll('.cks').forEach(function(x){x.addEventListener('click',function(){c.hidden=false;document.getElementById('ads').checked=get()==='1'})});
})();
