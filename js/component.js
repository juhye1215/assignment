const template = document.createElement("template");
template.innerHTML = `
    <style>

.tooltip-col{
        display:inline-block;
        position:relative;
        z-index:2;
}
svg{
      width:2rem;
      cursor:pointer;
}
.cancel{
    display:none;
    width:1.25rem;
    float:right;
}
.notify-col{
      position:absolute;
      bottom:125%;
      right:0;
      z-index:9;
      min-width:20rem;
      background:#047A9C;
      color:#fff;
      box-shadow : 5px 5px 10px rgba(0,0,0, 0.1);
      font-size: 0.875rem ;
      border-radius:0.25rem;
      padding:1rem;
      transform: scale(0);
}
@media  (max-width: 495px) {
  min-width:12rem;
}

    </style>

<div class="tooltip-col">
   
    <svg viewBox="0 0 296.999 296.999" class="alert">
		<g><path d="M45.432,35.049c-0.008,0-0.017,0-0.025,0c-2.809,0-5.451,1.095-7.446,3.085c-2.017,2.012-3.128,4.691-3.128,7.543     v159.365c0,5.844,4.773,10.61,10.641,10.625c24.738,0.059,66.184,5.215,94.776,35.136V84.023c0-1.981-0.506-3.842-1.461-5.382     C115.322,40.849,70.226,35.107,45.432,35.049z" fill="#047a9c" data-original="#000000" style="" class=""/>
			<path d="M262.167,205.042V45.676c0-2.852-1.111-5.531-3.128-7.543c-1.995-1.99-4.639-3.085-7.445-3.085c-0.009,0-0.018,0-0.026,0     c-24.793,0.059-69.889,5.801-93.357,43.593c-0.955,1.54-1.46,3.401-1.46,5.382v166.779     c28.592-29.921,70.038-35.077,94.776-35.136C257.394,215.651,262.167,210.885,262.167,205.042z" fill="#047a9c" data-original="#000000" style="" class=""/>
			<path d="M286.373,71.801h-7.706v133.241c0,14.921-12.157,27.088-27.101,27.125c-20.983,0.05-55.581,4.153-80.084,27.344     c42.378-10.376,87.052-3.631,112.512,2.171c3.179,0.724,6.464-0.024,9.011-2.054c2.538-2.025,3.994-5.052,3.994-8.301V82.427     C297,76.568,292.232,71.801,286.373,71.801z" fill="#047a9c" data-original="#000000" style="" class=""/>
			<path d="M18.332,205.042V71.801h-7.706C4.768,71.801,0,76.568,0,82.427v168.897c0,3.25,1.456,6.276,3.994,8.301     c2.545,2.029,5.827,2.78,9.011,2.054c25.46-5.803,70.135-12.547,112.511-2.171c-24.502-23.19-59.1-27.292-80.083-27.342     C30.49,232.13,18.332,219.963,18.332,205.042z" fill="#047a9c" data-original="#000000" style="" class=""/></g>
    </svg>

    <div class="notify-col">
        <slot name="msg"/></slot>
    <svg version="1.1" viewBox="0 0 413.348 413.348" style="enable-background:new 0 0 512 512" xml:space="preserve" class="cancel"><g><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" fill="#ffffff" data-original="#000000" style="" class=""/></g></svg>

    </div>

</div>

`;

class dictionaryHint extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  tooltip(expandState) {
    const tooltip = this.shadowRoot.querySelector(".notify-col");
    const alert = this.shadowRoot.querySelector(".alert");
    const cancel = this.shadowRoot.querySelector(".cancel");

    if (expandState == true) {
      tooltip.style.transform = "scale(1)";
      alert.style.display = "none";
      cancel.style.display = "block";
      expandState = false;
    } else {
      tooltip.style.transform = "scale(0)";
      cancel.style.display = "none";
      alert.style.display = "block";
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".alert").addEventListener("click", () => {
      this.tooltip(true);
    });
    this.shadowRoot.querySelector(".cancel").addEventListener("click", () => {
      this.tooltip(false);
    });
  }
}

window.customElements.define("dictionary-hint", dictionaryHint);
