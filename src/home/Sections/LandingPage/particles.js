const NEON_COLORS = [
  "#7c3aed", "#6d28d9", "#4f46e5",
  "#0ea5e9", "#06b6d4", "#8b5cf6",
  "#a855f7", "#3b82f6",
];

// Gravitasyon efekti ayarları — buradan kolayca değiştirilebilir
const GRAVITY_RADIUS   = 220;  // px — etki yarıçapı
const GRAVITY_STRENGTH = 0.018; // güç — büyütürsen daha sert çeker
const MAX_SPEED        = 2.2;   // px/frame — hız üst sınırı
const DRIFT_RECOVERY   = 0.04;  // orijinal yörüngeye dönüş hızı

export class Particle {
  constructor(w, h) {
    this.reset(w, h);
  }

  reset(w, h) {
    this.x      = Math.random() * w;
    this.y      = Math.random() * h;
    this.baseVx = (Math.random() - 0.5) * 0.45;
    this.baseVy = (Math.random() - 0.5) * 0.45;
    this.vx     = this.baseVx;
    this.vy     = this.baseVy;
    this.r      = Math.random() * 2.5 + 1;
    this.alpha  = Math.random() * 0.45 + 0.15;
    this.color  = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
    this.life   = Math.random() * 300 + 200;
    this.age    = 0;
  }

  /**
   * @param {number} w        canvas genişliği
   * @param {number} h        canvas yüksekliği
   * @param {number} mx       fare X
   * @param {number} my       fare Y
   * @param {number} gravity  0→1 aktiflik katsayısı
   */
  update(w, h, mx, my, gravity) {
    const dx   = mx - this.x;
    const dy   = my - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < GRAVITY_RADIUS && dist > 1) {
      const falloff = Math.pow(1 - dist / GRAVITY_RADIUS, 1.5);
      const force   = GRAVITY_STRENGTH * falloff * gravity;
      this.vx += (dx / dist) * force;
      this.vy += (dy / dist) * force;
    }

    // Orijinal yörüngeye yumuşak geri dönüş
    this.vx += (this.baseVx - this.vx) * DRIFT_RECOVERY;
    this.vy += (this.baseVy - this.vy) * DRIFT_RECOVERY;

    // Hız sınırı
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > MAX_SPEED) {
      this.vx = (this.vx / speed) * MAX_SPEED;
      this.vy = (this.vy / speed) * MAX_SPEED;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.age++;

    const oob = this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10;
    if (this.age >= this.life || oob) this.reset(w, h);
  }

  draw(ctx) {
    const fade = Math.sin((this.age / this.life) * Math.PI);
    ctx.save();
    ctx.globalAlpha = this.alpha * fade;
    ctx.fillStyle   = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}
