!function(){var e,t=[{img:"./images/Articles-1.jpg",title:"Things to Know When Choosing the Perfect Sofa",date:"05 May",author:"John Doe",comments:"9 Comments"},{img:"./images/Articles-2.jpg",title:"Things to Know When Choosing the Perfect Sofa",date:"23 Jun",author:"John Doe",comments:"3 Comments"},{img:"./images/Articles-3.jpg",title:"Things to Know When Choosing the Perfect Sofa",date:"15 May",author:"John Doe",comments:"6 Comments"}];e=document.getElementById("latestArticles-container"),t.forEach((function(t){var n=function(e){var t=document.createElement("div");t.classList.add("card");var n=document.createElement("img");n.src=e.img,n.classList.add("card-img"),n.alt=e.title,t.appendChild(n);var o=document.createElement("h3");o.textContent=e.title,t.appendChild(o);var a=document.createElement("p");a.textContent=e.date,t.appendChild(a);var i=document.createElement("p");i.textContent="By ".concat(e.author),t.appendChild(i);var m=document.createElement("p");return m.textContent=e.comments,t.appendChild(m),t}(t);e.appendChild(n)}))}();
//# sourceMappingURL=index.4be74ddf.js.map