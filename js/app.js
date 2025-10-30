// Minimal modular starter for Build-a-Well
// Export a Game class so this file can be expanded and tested independently.

export class Game {
  constructor(canvasEl, ui = {}){
    this.canvasEl = canvasEl;
    this.ui = ui; // e.g. { progressEl }
    this.progress = 0; // 0..100
    this._running = false;
    this._raf = null;

    // Bind methods
    this.loop = this.loop.bind(this);
    this.onDig = this.onDig.bind(this);
    this.onWater = this.onWater.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  init(){
    // Setup basic DOM hooks and accessibility features
    if(this.ui.progressEl){
      this.updateProgressUI();
    }

    // Example: make canvasEl focusable for keyboard controls
    this.canvasEl.tabIndex = 0;

    // Attach example event listeners (expandable later)
    const btnDig = document.getElementById('btn-dig');
    const btnWater = document.getElementById('btn-water');
    const btnReset = document.getElementById('btn-reset');

    if(btnDig) btnDig.addEventListener('click', this.onDig);
    if(btnWater) btnWater.addEventListener('click', this.onWater);
    if(btnReset) btnReset.addEventListener('click', this.onReset);

    // keyboard accessibility: space to dig
    this.canvasEl.addEventListener('keydown', (e) => {
      if(e.code === 'Space'){
        e.preventDefault();
        this.onDig();
      }
    });

    // Start minimal loop
    this.start();
  }

  start(){
    if(!this._running){
      this._running = true;
      this._raf = requestAnimationFrame(this.loop);
    }
  }

  stop(){
    this._running = false;
    if(this._raf) cancelAnimationFrame(this._raf);
  }

  loop(){
    // Update and draw loop (placeholder)
    this.draw();
    if(this._running){
      this._raf = requestAnimationFrame(this.loop);
    }
  }

  draw(){
    // Minimal placeholder — replace with Canvas/SVG/WebGL rendering later
    // We'll just show progress as a bar inside the element
    const p = Math.max(0, Math.min(1, this.progress / 100));
    // create/update bar
    let bar = this.canvasEl.querySelector('.progress-bar');
    if(!bar){
      bar = document.createElement('div');
      bar.className = 'progress-bar';
      Object.assign(bar.style, {
        position: 'absolute',
        left: '0',
        bottom: '0',
        height: '8px',
        background: 'linear-gradient(90deg,var(--accent),var(--accent-2))',
        borderTopRightRadius: '6px',
      });
      this.canvasEl.appendChild(bar);
    }
    bar.style.width = `${p * 100}%`;
  }

  onDig(){
    // simple state change to demonstrate modularity
    this.progress = Math.min(100, this.progress + 7);
    this.updateProgressUI();
  }

  onWater(){
    this.progress = Math.min(100, this.progress + 4);
    this.updateProgressUI();
  }

  onReset(){
    this.progress = 0;
    this.updateProgressUI();
  }

  updateProgressUI(){
    if(this.ui.progressEl){
      this.ui.progressEl.textContent = `${this.progress}%`;
    }
  }
}

// Auto-init when loaded in browser
document.addEventListener('DOMContentLoaded', () => {
  const wellCanvas = document.getElementById('wellCanvas');
  const progressEl = document.getElementById('progress');

  const game = new Game(wellCanvas, { progressEl });
  game.init();

  // Expose to window for quick debugging in dev
  window.__Game = game;
});
