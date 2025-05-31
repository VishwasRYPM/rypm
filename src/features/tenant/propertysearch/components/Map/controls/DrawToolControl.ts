import mapboxgl from 'mapbox-gl';

export class DrawToolControl implements mapboxgl.IControl {
  private container: HTMLElement;
  private map: mapboxgl.Map | null = null;
  private button: HTMLButtonElement;
  private isActive: boolean = false;
  private callback: (active: boolean) => void;

  constructor(callback: (active: boolean) => void) {
    this.callback = callback;
    this.container = document.createElement('div');
    this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

    this.button = document.createElement('button');
    this.button.className = 'mapboxgl-ctrl-icon draw-tool-control-button';
    this.button.type = 'button';
    this.button.setAttribute('title', 'Draw area to filter properties');
    this.button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <path d="M11 11l5 5"></path>
      </svg>
    `;

    // Mobile-friendly button styling
    this.button.style.width = '29px';
    this.button.style.height = '29px';
    this.button.style.display = 'flex';
    this.button.style.alignItems = 'center';
    this.button.style.justifyContent = 'center';
    this.button.style.touchAction = 'manipulation'; // Prevent double-tap zoom on mobile

    this.button.addEventListener('click', this.handleClick.bind(this));
    
    // Add touch event for better mobile support
    this.button.addEventListener('touchstart', (e) => {
      e.preventDefault(); // Prevent default touch behavior
    });

    this.container.appendChild(this.button);
  }

  private handleClick = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    
    this.isActive = !this.isActive;
    this.updateButtonStyle();
    this.callback(this.isActive);
  };

  private updateButtonStyle() {
    if (this.isActive) {
      this.button.style.backgroundColor = '#001D3D';
      this.button.style.color = 'white';
    } else {
      this.button.style.backgroundColor = '';
      this.button.style.color = '';
    }
  }

  public setActive(active: boolean) {
    this.isActive = active;
    this.updateButtonStyle();
  }

  onAdd(map: mapboxgl.Map): HTMLElement {
    this.map = map;
    return this.container;
  }

  onRemove(): void {
    this.container.parentNode?.removeChild(this.container);
    this.map = null;
  }
}