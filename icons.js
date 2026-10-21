// Icon library: hobby icons, nav icons, and per-hobby reaction icons.
const T='fill="currentColor" fill-opacity=".16"',F='fill="currentColor"';
const ICONS={
  swimming:`<circle cx="17" cy="6" r="2.2" ${F}/><path d="M4 12.5l5-3.5 4 2 2.5-3"/><path d="M12.5 11.5l2.5 2.5"/><path d="M2 16.5c2.2 0 2.2-1.5 4.5-1.5s2.2 1.5 4.5 1.5 2.2-1.5 4.5-1.5 2.2 1.5 4.5 1.5M2 20.5c2.2 0 2.2-1.5 4.5-1.5s2.2 1.5 4.5 1.5 2.2-1.5 4.5-1.5 2.2 1.5 4.5 1.5"/>`,
  books:`<path d="M12 6.5C10 5 7 4.5 3 4.5v13.5c4 0 7 .5 9 2 2-1.5 5-2 9-2V4.5c-4 0-7 .5-9 2z" ${T}/><path d="M12 6.5v13.5M6 8.5c1.5 0 3 .2 4.5.8M6 12c1.5 0 3 .2 4.5.8M18 8.5c-1.5 0-3 .2-4.5.8M18 12c-1.5 0-3 .2-4.5.8"/>`,
  gardening:`<path d="M5.5 15h13l-1.5 6H7z" ${T}/><path d="M12 15V9.5"/><path d="M12 10.5c0-3.5-2.5-5.5-6.5-5.5 0 3.5 2.5 5.5 6.5 5.5zM12 13c0-3 2-4.5 5.5-4.5 0 3-2 4.5-5.5 4.5z" ${T}/>`,
  gaming:`<path d="M7 7h10a5 5 0 0 1 4.8 6.5l-1 3.5a2.5 2.5 0 0 1-4.2 1l-1.8-2.5H9.2L7.4 18a2.5 2.5 0 0 1-4.2-1l-1-3.5A5 5 0 0 1 7 7z" ${T}/><path d="M7.5 10v4M5.5 12h4"/><circle cx="16" cy="11" r="1" ${F}/><circle cx="18.5" cy="13.5" r="1" ${F}/>`,
  cooking:`<path d="M4.5 12h15v5a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 17z" ${T}/><path d="M3 12h18M10.5 9.5h3M12 9.5V12"/><path d="M8 3c-1 1 1 2 0 3.5M12 2c-1 1 1 2 0 3.5M16 3c-1 1 1 2 0 3.5"/>`,
  photography:`<path d="M3 8.5a2 2 0 0 1 2-2h2.5L9 4h6l1.5 2.5H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" ${T}/><circle cx="12" cy="13" r="4"/><circle cx="12" cy="13" r="1.6" ${F}/><circle cx="17.5" cy="9.5" r=".8" ${F}/>`,
  n_photos:`<rect x="3" y="4" width="18" height="16" rx="3" ${T}/><circle cx="8.5" cy="9.5" r="1.8" ${F}/><path d="M3.5 17l5.5-5 4 3.5 2.5-2 5 4"/>`,
  n_text:`<path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" ${T}/><path d="M7.5 9h9M7.5 12.5h5.5"/>`,
  n_add:`<rect x="3" y="3" width="18" height="18" rx="4" ${T}/><circle cx="7.5" cy="8" r="1" ${F}/><circle cx="7.5" cy="12" r="1" ${F}/><circle cx="7.5" cy="16" r="1" ${F}/><path d="M11 8h6M11 12h6M11 16h4"/>`,
  n_hobbies:`<path d="M12 20.5s-8-4.7-8-10.5a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 10.5-8 10.5z" ${T}/><path d="M7.5 10a2.5 2.5 0 0 1 2-2"/>`,
  n_me:`<circle cx="12" cy="12" r="9.5" ${T}/><circle cx="12" cy="9.5" r="3.2"/><path d="M5.8 18.5c1.2-2.6 3.5-4 6.2-4s5 1.4 6.200 4"/>`
};
// Themed reactions. Dislike reuses the like shape turned upside down.
const REACT={
  swimming:{like:`<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z" ${T}/>`,comment:`<circle cx="9" cy="15" r="5" ${T}/><circle cx="17" cy="8" r="3" ${T}/>`},
  books:{like:`<path d="M6 3h12v18l-6-4-6 4z" ${T}/>`,comment:`<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" ${T}/>`},
  gardening:{like:`<path d="M5 19C5 10 10 5 20 5c0 10-5 15-15 14zM5 19l8-8" ${T}/>`,comment:`<circle cx="12" cy="6" r="2.8" ${T}/><circle cx="12" cy="18" r="2.8" ${T}/><circle cx="6" cy="12" r="2.8" ${T}/><circle cx="18" cy="12" r="2.8" ${T}/><circle cx="12" cy="12" r="1.5" ${F}/>`},
  gaming:{like:`<path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.6 6.6 19.6l1.2-6L3.3 9.4l6.1-.8z" ${T}/>`,comment:`<path d="M4 5h16v11h-7l-4 4v-4H4z" ${T}/><path d="M8 10.5h.01M12 10.5h.01M16 10.5h.01"/>`},
  cooking:{like:`<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-9z" ${T}/>`,comment:`<path d="M4 17h16M6 17a6 6 0 0 1 12 0M12 9V7" ${T}/>`},
  photography:{like:`<circle cx="12" cy="12" r="8" ${T}/><path d="M12 4l4 7M20 12l-7 4M12 20l-4-7M4 12l7-4"/>`,comment:`<rect x="4" y="5" width="16" height="14" rx="1" ${T}/><path d="M8 5v14M16 5v14"/>`}
};
const HIDE='<path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"/><circle cx="12" cy="12" r="2.5"/><path d="M4 4l16 16"/>';
const svg=(inner,n=28,c="ico",flip=false)=>`<svg class="${c}" viewBox="0 0 24 24" width="${n}" height="${n}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${flip?`<g transform="rotate(180 12 12)">${inner}</g>`:inner}</svg>`;
const ico=(k,n,c)=>svg(ICONS[k],n,c);
const rico=(h,t,n=20)=>t==="hide"?svg(HIDE,n,"ri"):svg(REACT[h][t==="dislike"?"like":t],n,"ri",t==="dislike");
