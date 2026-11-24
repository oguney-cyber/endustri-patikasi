/* Konu kartlarındaki şekiller. Slayttaki şekiller ve tablolar bu uygulama için yeniden çizildi (SVG, tema renkleriyle).
   Kartta kullanım: tek başına bir satırda "@fig kimlik". */
(function (root) {
  'use strict';
  const e = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const n1 = (v) => Math.round(v * 10) / 10;
  const T = (x, y, s, o) => { o = o || {}; return `<text x="${n1(x)}" y="${n1(y)}"${o.a ? ` text-anchor="${o.a}"` : ''}${o.c ? ` class="${o.c}"` : ''}${o.r ? ` transform="rotate(${o.r} ${n1(x)} ${n1(y)})"` : ''}>${e(s)}</text>`; };
  const L = (x1, y1, x2, y2, c) => `<line x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}" class="${c || 'ax'}"/>`;
  const PL = (pts, c) => `<polyline points="${pts.map(p => n1(p[0]) + ',' + n1(p[1])).join(' ')}" class="${c}"/>`;
  const PG = (pts, c) => `<polygon points="${pts.map(p => n1(p[0]) + ',' + n1(p[1])).join(' ')}" class="${c}"/>`;
  const RC = (x, y, w, h, c, rx) => `<rect x="${n1(x)}" y="${n1(y)}" width="${n1(w)}" height="${n1(h)}" rx="${rx == null ? 8 : rx}" class="${c}"/>`;
  const CI = (x, y, r, c) => `<circle cx="${n1(x)}" cy="${n1(y)}" r="${r}" class="${c}"/>`;
  function AR(x1, y1, x2, y2, c, hs) {
    c = c || 'ar'; hs = hs || 10;
    const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - hs * Math.cos(a), by = y2 - hs * Math.sin(a), px = Math.sin(a) * hs * 0.55, py = -Math.cos(a) * hs * 0.55;
    return L(x1, y1, bx, by, c) + `<polygon points="${n1(x2)},${n1(y2)} ${n1(bx + px)},${n1(by + py)} ${n1(bx - px)},${n1(by - py)}" class="${c}h"/>`;
  }
  const TM = (x, y, lines, o) => lines.map((s, k) => T(x, y + k * ((o && o.lh) || 17), s, Object.assign({ a: 'middle' }, o || {}))).join('');
  const BOX = (x, y, w, h, lines, c, tc) => RC(x, y, w, h, c || 'bx') + TM(x + w / 2, y + h / 2 - (lines.length - 1) * 8.5 + 5, lines, { c: tc || '' });
  const SVG = (w, h, body) => `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" focusable="false">${body}</svg>`;
  const LEG = (x, y, items, dx) => items.map((it, k) => { const xx = x + (dx ? k * dx : 0), yy = y + (dx ? 0 : k * 19); return L(xx, yy - 5, xx + 22, yy - 5, it[0]) + T(xx + 28, yy, it[1], { c: 'lg' }); }).join('');
  const smp = (fn, a, b, n) => Array.from({ length: (n || 60) + 1 }, (_, k) => { const t = a + (b - a) * k / (n || 60); return fn(t); });

  // Zaman/veri grafikleri için koordinat sistemi
  function frame(o) {
    const W = o.w || 520, H = o.h || 300, m = Object.assign({ l: 46, r: 14, t: 14, b: 44 }, o.m || {});
    const X = (v) => m.l + (v - o.x[0]) / (o.x[1] - o.x[0]) * (W - m.l - m.r);
    const Y = (v) => H - m.b - (v - o.y[0]) / (o.y[1] - o.y[0]) * (H - m.t - m.b);
    let s = '';
    (o.shade || []).forEach(b => { s += RC(X(b[0]), m.t, X(b[1]) - X(b[0]), H - m.b - m.t, 'sh', 0); });
    (o.yt || []).forEach(v => { s += L(m.l, Y(v), W - m.r, Y(v), 'gr') + T(m.l - 6, Y(v) + 4.5, (o.yf || String)(v), { a: 'end', c: 'tk' }); });
    (o.xt || []).forEach(v => { s += L(X(v), H - m.b, X(v), H - m.b + 5, 'ax') + T(X(v), H - m.b + 19, (o.xf || String)(v), { a: 'middle', c: 'tk' }); });
    s += L(m.l, m.t - 4, m.l, H - m.b, 'ax') + L(m.l, H - m.b, W - m.r + 4, H - m.b, 'ax');
    if (o.xl) s += T((m.l + W - m.r) / 2, H - 5, o.xl, { a: 'middle', c: 'lb' });
    if (o.yl) s += T(13, (m.t + H - m.b) / 2, o.yl, { a: 'middle', c: 'lb', r: -90 });
    return { X, Y, W, H, m, s, line: (pts, c) => PL(pts.map(p => [X(p[0]), Y(p[1])]), c) };
  }
  // İktisat diyagramı ekseni: oklu eksenler, uç etiketleri, isteğe bağlı işaretler
  function E(o) {
    const W = o.w || 520, H = o.h || 336, m = Object.assign({ l: 54, r: 26, t: 30, b: 50 }, o.m || {});
    const X = (v) => m.l + v / o.xm * (W - m.l - m.r), Y = (v) => H - m.b - v / o.ym * (H - m.t - m.b);
    let s = AR(m.l, H - m.b, m.l, m.t - 16, 'ax', 8) + AR(m.l, H - m.b, W - m.r + 14, H - m.b, 'ax', 8);
    s += T(m.l + 8, m.t - 10, o.yl || '', { c: 'lb' }) + T(W - m.r + 12, H - m.b + 38, o.xl || '', { a: 'end', c: 'lb' }) + T(m.l - 8, H - m.b + 16, '0', { a: 'end', c: 'tk' });
    (o.xt || []).forEach(t => { s += L(X(t[0]), H - m.b, X(t[0]), H - m.b + 5, 'ax') + T(X(t[0]), H - m.b + 18, t[1], { a: 'middle', c: 'tk' }); });
    (o.yt || []).forEach(t => { s += L(m.l - 5, Y(t[0]), m.l, Y(t[0]), 'ax') + T(m.l - 8, Y(t[0]) + 4.5, t[1], { a: 'end', c: 'tk' }); });
    const P = (pts, c) => PL(pts.map(p => [X(p[0]), Y(p[1])]), c);
    const D = (x, y, lab, dx, dy, c) => CI(X(x), Y(y), 5, c || 'pt') + (lab ? T(X(x) + (dx == null ? 9 : dx), Y(y) + (dy == null ? -8 : dy), lab, { c: 'hd' }) : '');
    const G = (x, y) => L(X(x), Y(y), X(x), Y(0), 'gd') + L(X(x), Y(y), X(0), Y(y), 'gd');
    return { X, Y, W, H, m, s, P, D, G };
  }
  // tanjant noktasında verilen eğimde kayıtsızlık eğrisi: y = A x^(-a)
  function ic(x0, y0, slope, x1, x2) { const a = slope * x0 / y0, A = y0 * Math.pow(x0, a); return smp(x => [x, A * Math.pow(x, -a)], x1, x2, 50); }
  // içbükey PPF (çeyrek elips): yatay uç a, dikey uç b
  const ppfE = (a, b) => smp(t => [a * Math.cos(t), b * Math.sin(t)], 0, Math.PI / 2, 60);
  const ppfAt = (a, b, slope) => { const t = Math.atan(b / (a * slope)); return [a * Math.cos(t), b * Math.sin(t)]; };   // |eğim| = slope olan nokta
  const clipY = (pts, lo, hi) => pts.filter(p => p[1] >= lo && p[1] <= hi);
  // sayı doğrusu: değerleri sıralı gösterir
  function numline(items, o) {
    o = o || {}; const W = 520, H = o.h || 110, lo = o.lo, hi = o.hi, x = (v) => 30 + (v - lo) / (hi - lo) * (W - 60), y = 52;
    let s = AR(16, y, W - 10, y, 'ax', 8) + L(x(0), y - 8, x(0), y + 8, 'ax') + T(x(0), y + 26, '0', { a: 'middle', c: 'tk' });
    items.forEach((it, k) => { s += CI(x(it[0]), y, 6, it[2] || 'pt') + T(x(it[0]), y - 16 - (k % 2) * 0, it[1], { a: 'middle', c: 'hd' }) + T(x(it[0]), y + 26, (it[0] > 0 ? '+' : '') + it[0] + '%', { a: 'middle', c: 'tk' }) + (it[3] ? T(x(it[0]), y + 44, it[3], { a: 'middle', c: 'lg' }) : ''); });
    if (o.cap) s += T(W / 2, H - 6, o.cap, { a: 'middle', c: 'lb' });
    return SVG(W, H, s);
  }
  // yatay çubuk grafik
  function hbars(rows, o) {
    o = o || {}; const W = 520, rh = o.rh || 24, H = 20 + rows.length * rh + 20, lw = o.lw || 170, mx = o.max || Math.max(...rows.map(r => r[1]));
    let s = '';
    rows.forEach((r, k) => { const y = 14 + k * rh, w = (W - lw - 60) * r[1] / mx; s += T(lw - 8, y + rh / 2 + 4, r[0], { a: 'end', c: 'lg' }) + RC(lw, y + 3, w, rh - 8, r[2] || 'b1', 3) + T(lw + w + 6, y + rh / 2 + 4, r[1] + (o.unit || ''), { c: 'tk' }); });
    if (o.cap) s += T(W / 2, H - 4, o.cap, { a: 'middle', c: 'lb' });
    return SVG(W, H, s);
  }

  const F = {};
  // yatay referans çizgisi ve etiket (eksenden eğriye)
  const HL = (A, y, x2, lab) => L(A.X(0), A.Y(y), A.X(x2), A.Y(y), 'gd') + (lab ? T(A.X(0) - 8, A.Y(y) + 4.5, lab, { a: 'end', c: 'tk' }) : '');
  const VL = (A, x, y2, lab) => L(A.X(x), A.Y(0), A.X(x), A.Y(y2), 'gd') + (lab ? T(A.X(x), A.Y(0) + 18, lab, { a: 'middle', c: 'tk' }) : '');
  const AREA = (A, pts, c) => PG(pts.map(p => [A.X(p[0]), A.Y(p[1])]), c);

  /* ======================= Ödeme matrisi (Böl. 4, 7) ======================= */
  // pay[r][c] = [1. oyuncu, 2. oyuncu]; o.ne: [[r,c]], o.goneR / o.goneC: silinen satır/sütun indisleri
  function mat(rows, cols, pay, o) {
    o = o || {};
    const cw = o.cw || 104, rh = o.rh || 58, x0 = 118, y0 = 54, W = x0 + cols.length * cw + 16, H = y0 + rows.length * rh + 40;
    let s = T(x0 + cols.length * cw / 2, 18, o.p2 || '2. oyuncu', { a: 'middle', c: 'p2t' }) + T(22, y0 + rows.length * rh / 2 + 5, o.p1 || '1. oyuncu', { a: 'middle', c: 'p1t', r: -90 });
    cols.forEach((c, j) => { s += T(x0 + j * cw + cw / 2, y0 - 10, c, { a: 'middle', c: 'hd' }); });
    rows.forEach((r, i) => {
      s += T(x0 - 12, y0 + i * rh + rh / 2 + 5, r, { a: 'end', c: 'hd' });
      cols.forEach((c, j) => {
        const x = x0 + j * cw, y = y0 + i * rh, ne = (o.ne || []).some(p => p[0] === i && p[1] === j), gone = (o.goneR || []).includes(i) || (o.goneC || []).includes(j);
        s += RC(x, y, cw, rh, gone ? 'gone' : ne ? 'ne' : 'bx', 0);
        s += T(x + 14, y + rh - 14, String(pay[i][j][0]), { c: 'p1t' }) + T(x + cw - 14, y + 22, String(pay[i][j][1]), { a: 'end', c: 'p2t' });
      });
    });
    s += T(x0, H - 10, o.note || 'Sol alt: 1. oyuncunun getirisi · sağ üst: 2. oyuncunun', { c: 'lg' });
    return SVG(Math.max(W, 420), H, s);
  }

  /* ======================= Bölüm 1 ======================= */
  F.markup = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'Miktar, Q', yl: 'Fiyat, P', xt: [[4, 'Q_M'], [8, 'Q_C']], yt: [[6, 'P_M'], [2, 'MC']] });
    let s = A.s + AREA(A, [[0, 2], [0, 6], [4, 6], [4, 2]], 'shg') + A.P([[0, 10], [10, 0]], 'l1') + A.P([[0, 10], [5, 0]], 'l4 dsh') + A.P([[0, 2], [10, 2]], 'l3');
    s += A.D(4, 6, 'A') + A.D(8, 2, 'C', 8, -8) + HL(A, 6, 4) + VL(A, 4, 6);
    s += AR(A.X(4.6), A.Y(5.6), A.X(4.6), A.Y(2.4), 'ar2', 8) + T(A.X(4.9), A.Y(4.2), 'P − MC', { c: 'tb' });
    s += LEG(330, 24, [['l1', 'talep D'], ['l4 dsh', 'marjinal gelir MR'], ['l3', 'marjinal maliyet MC']]);
    return { t: 'Piyasa gücü: fiyatı marjinal maliyetin üstüne koyabilmek', n: 'Tekel MR = MC olan miktarı (Q_M) seçer ve fiyatı talep eğrisinden okur (P_M). Kırmızı ok P − MC farkı. Lerner endeksi bu farkın fiyata oranı: L = (P − MC)/P = (6 − 2)/6 ≈ 0.67. Tam rekabette P = MC, L = 0.', svg: SVG(A.W, A.H, s) };
  })();
  F.lernerline = { t: 'Lerner endeksinin aralığı', n: 'MC ≥ 0 ve P ≥ MC olduğu sürece L 0 ile 1 arasındadır. L = 0: tam rekabet (P = MC). L 1\'e yaklaştıkça fiyat maliyetin çok üstünde: piyasa gücü büyük. L = 1 ancak MC = 0 iken.',
    svg: (() => { const W = 520, H = 120, x = (v) => 40 + v * 440; let s = AR(30, 56, 500, 56, 'ax', 8); [[0, 'tam rekabet', 'P = MC'], [0.5, 'orta', 'P = 2·MC'], [0.67, 'slayttaki tekel', '(6−2)/6'], [1, 'MC = 0', '']].forEach((it, k) => { s += CI(x(it[0]), 56, 6, k === 2 ? 'ptp' : 'pt') + T(x(it[0]), 40 - (k === 2 ? 0 : 0), String(it[0] === 0.67 ? '0.67' : it[0]), { a: 'middle', c: 'hd' }) + T(x(it[0]), 80, it[1], { a: k === 3 ? 'end' : k === 0 ? 'start' : 'middle', c: 'lg' }) + T(x(it[0]), 98, it[2], { a: k === 3 ? 'end' : k === 0 ? 'start' : 'middle', c: 'tk' }); }); return SVG(W, H, s); })() };
  F.welfare = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'Miktar', yl: 'Fiyat', xt: [[4, '4'], [8, '8']], yt: [[6, '6'], [2, '2'], [10, '10']] });
    let s = A.s + AREA(A, [[0, 10], [0, 6], [4, 6]], 'b0') + AREA(A, [[0, 6], [4, 6], [4, 2], [0, 2]], 'shg') + AREA(A, [[4, 6], [8, 2], [4, 2]], 'sh');
    s += A.P([[0, 10], [10, 0]], 'l1') + A.P([[0, 2], [10, 2]], 'l3') + A.D(4, 6, '') + A.D(8, 2, '');
    s += T(A.X(1.2), A.Y(7.1), 'CS = 8', { c: 'hd' }) + T(A.X(1.4), A.Y(3.8), 'kâr = 16', { c: 'hd' }) + T(A.X(5.1), A.Y(3.2), 'DWL = 8', { c: 'tb' });
    return { t: 'Piyasa gücünün maliyeti: transfer ve ölü ağırlık kaybı', n: 'Talep P = 10 − Q, MC = 2. Tekel 4 birim satar, fiyat 6. Rekabette 8 birim, fiyat 2 olurdu: tüketici artığı 32. Tekelde tüketiciye 8 kalır, 16 kâr olarak firmaya geçer (transfer), 8 hiç kimsenin olmaz: ölü ağırlık kaybı (dağıtım etkinsizliği).', svg: SVG(A.W, A.H, s) };
  })();

  /* ======================= Bölüm 2 ======================= */
  F.pizza = (() => {
    const A = E({ xm: 4, ym: 3.4, xl: 'q (dilim)', yl: 'p (dolar)', xt: [[1, '1'], [2, '2'], [3, '3']], yt: [[3, '3.0'], [1.5, '1.5'], [1, '1.0'], [0.2, '0.2']] });
    let s = A.s + AREA(A, [[0, 1], [0, 3], [1, 3], [1, 1.5], [2, 1.5], [2, 1]], 'shg');
    s += A.P([[0, 3], [1, 3], [1, 1.5], [2, 1.5], [2, 0.2], [3, 0.2], [3, 0]], 'l1') + A.P([[0, 1], [3.8, 1]], 'l2');
    s += T(A.X(0.5), A.Y(2.1), '2.0', { a: 'middle', c: 'hd' }) + T(A.X(1.5), A.Y(1.2), '0.5', { a: 'middle', c: 'hd' }) + T(A.X(3.75), A.Y(1) - 8, 'fiyat = 1', { a: 'end', c: 'tb' });
    return { t: 'Şekil 2.1 · Pizza dilimi talebi', n: 'Birinci dilime 3, ikinciye 1.5, üçüncüye 0.2 dolar ödemeye razısın (ödeme isteği, WTP). Fiyat 1 iken WTP\'si fiyattan yüksek olan 2 dilimi alırsın. Tüketici artığı = (3 − 1) + (1.5 − 1) = 2.5 (yeşil alan).', svg: SVG(A.W, A.H, s) };
  })();
  F.mktdem = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'Q', yl: 'p', xt: [[6, "Q'"]], yt: [[4, "p'"]] });
    const s = A.s + AREA(A, [[0, 10], [0, 4], [6, 4]], 'shg') + A.P([[0, 10], [10, 0]], 'l1') + A.P([[0, 4], [9.5, 4]], 'l2') + VL(A, 6, 4) + T(A.X(1.6), A.Y(5.8), 'CS', { c: 'hd' }) + A.D(6, 4, '');
    return { t: 'Şekil 2.2 · Piyasa talebi', n: 'Piyasa talebi bireysel talepleri yatay toplayarak bulunur (her fiyatta istenen miktarlar toplanır). Tüketici çok olunca basamaklar yumuşar ve düz bir eğri gibi görünür. Tüketici artığı fiyat çizgisinin üstündeki üçgen.', svg: SVG(A.W, A.H, s) };
  })();
  F.costs = (() => {
    const A = E({ xm: 10, ym: 12, xl: 'Çıktı (Q)', yl: 'Maliyet', h: 340 });
    // VC = k(2q − 0.5q² + 0.06q³), FC = 7: eğriler birbirine tutarlı
    const k = 1.4, FC = 7, avc = (q) => k * (2 - 0.5 * q + 0.06 * q * q), mc = (q) => k * (2 - q + 0.18 * q * q), afc = (q) => FC / q, atc = (q) => avc(q) + afc(q);
    const qA = 0.5 / 0.12, qT = smp(q => [q, atc(q)], 2, 9.5, 600).reduce((m, p) => p[1] < m[1] ? p : m)[0];
    let s = A.s + A.P(smp(q => [q, afc(q)], 0.75, 9.6, 40), 'l5') + A.P(smp(q => [q, avc(q)], 0.3, 9.6, 40), 'l3') + A.P(smp(q => [q, atc(q)], 0.9, 9.6, 50).filter(p => p[1] < 9.8), 'l1') + A.P(smp(q => [q, mc(q)], 0.3, 9.6, 50).filter(p => p[1] < 9.8), 'l2');
    s += A.D(qA, avc(qA), '') + A.D(qT, atc(qT), '');
    s += LEG(140, 24, [['l2', 'MC (marjinal)'], ['l1', 'ATC (ortalama toplam)']], 190) + LEG(140, 44, [['l3', 'AVC (ortalama değişken)'], ['l5', 'AFC (ortalama sabit)']], 190);
    return { t: 'Maliyet eğrilerinin şekli (kısa dönem)', n: 'AFC = FC/Q hep düşer (sabit maliyet daha çok birime yayılır). MC önce düşer (uzmanlaşma), sonra artar (azalan verim). AVC ve ATC U biçimli; MC ikisini de en düşük noktalarından keser (işaretli noktalar): ek birimin maliyeti ortalamanın altındaysa ortalamayı düşürür, üstündeyse yükseltir. Sabit maliyet olduğu için bunlar kısa dönem eğrileri.', svg: SVG(A.W, A.H, s) };
  })();
  F.tshirt = (() => {
    const A = E({ xm: 64, ym: 5, xl: 'q (tişört / hafta)', yl: 'euro', xt: [[40, '40'], [48, '48'], [56, '56']], yt: [[2, '2'], [3, '3'], [4, '4']] });
    const ac = (q) => { const fx = 20, v = q <= 40 ? 2 * q : q <= 48 ? 80 + 3 * (q - 40) : 104 + 4 * (q - 48); return (fx + v) / q; };
    let s = A.s + A.P([[0, 2], [40, 2]], 'l1') + A.P([[40, 3], [48, 3]], 'l1') + A.P([[48, 4], [56, 4]], 'l1') + L(A.X(40), A.Y(2), A.X(40), A.Y(3), 'gd') + L(A.X(48), A.Y(3), A.X(48), A.Y(4), 'gd') + L(A.X(56), A.Y(4), A.X(56), A.Y(0), 'gd');
    s += A.P(smp(q => [q, ac(q)], 6, 56, 100).filter(p => p[1] < 4.9), 'l2') + T(A.X(56) + 6, A.Y(ac(56)) + 4, 'AC', { c: 'tb' }) + T(A.X(30), A.Y(2) - 8, 'MC', { c: 'tp' });
    s += T(A.X(20), A.Y(2) + 22, 'hafta içi: 1 + 1', { a: 'middle', c: 'lg' }) + T(A.X(44), A.Y(3) - 10, 'Cmt', { a: 'middle', c: 'lg' }) + T(A.X(52), A.Y(4) - 10, 'Pzr', { a: 'middle', c: 'lg' });
    return { t: 'Tişört fabrikasında MC ve AC', n: 'Makine kirası 20 euro (sabit). Her tişört 1 euro malzeme + işçinin bir saatlik ücreti: hafta içi 1, cumartesi 2, pazar 3 euro. Bu yüzden MC ilk 40 tişörtte 2, 41–48 arası 3, 49–56 arası 4 euro. AC sabit maliyet yayıldıkça düşer, pahalı hafta sonu saatleriyle yeniden yükselir; 56\'da AC = 156/56 ≈ 2.79.', svg: SVG(A.W, A.H, s) };
  })();
  F.scale = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'Q', yl: 'uzun dönem AC', xt: [[3.5, 'MES']] });
    const f = (q) => q < 3.5 ? 3 + 0.4 * (3.5 - q) * (3.5 - q) : q < 6.5 ? 3 : 3 + 0.4 * (q - 6.5) * (q - 6.5);
    let s = A.s + A.P(smp(q => [q, f(q)], 0.6, 9.6, 80).filter(p => p[1] < 9.5), 'l1') + VL(A, 3.5, 3);
    s += T(A.X(1.8), A.Y(7.6), 'ölçek ekonomisi', { a: 'middle', c: 'tg' }) + T(A.X(1.8), A.Y(7.6) + 17, '(AC düşer)', { a: 'middle', c: 'lg' }) + T(A.X(5), A.Y(3) - 12, 'ölçeğe göre sabit getiri', { a: 'middle', c: 'lg' }) + T(A.X(8.4), A.Y(7.6), 'ölçek eşekonomisi', { a: 'middle', c: 'tb' }) + T(A.X(8.4), A.Y(7.6) + 17, '(AC artar)', { a: 'middle', c: 'lg' });
    return { t: 'Ölçek ekonomileri ve asgari etkin ölçek (MES)', n: 'Uzun dönem AC eğrisi (bütün girdiler ayarlanabilir). MES: ortalama maliyetin en düşük düzeyine ulaşılan en küçük üretim. MES pazara göre büyükse (gazete basımı) az firma, küçükse (tesisatçılık) çok firma beklenir.', svg: SVG(A.W, A.H, s) };
  })();
  F.alloc = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'q', yl: 'p', xt: [[4, "q'"], [6.15, "q''"]], yt: [[6, "p'"]] });
    const mc = (q) => 1.5 + 0.4 * q;
    let s = A.s + AREA(A, [[0, 10], [0, 6], [4, 6]], 'b0') + AREA(A, [[0, 6], [4, 6], [4, mc(4)], [0, mc(0)]], 'shg') + AREA(A, [[4, 6], [6.15, 10 - 6.15], [4, mc(4)]], 'sh');
    s += A.P([[0, 10], [10, 0]], 'l1') + A.P(smp(q => [q, mc(q)], 0, 9.5, 2), 'l2') + HL(A, 6, 4) + VL(A, 4, 6) + VL(A, 6.15, 3.85);
    s += T(A.X(1), A.Y(7.2), 'CS', { c: 'hd' }) + T(A.X(1.3), A.Y(4), 'PS', { c: 'hd' }) + T(A.X(4.3), A.Y(4.6), 'EL', { c: 'tb' }) + T(A.X(9.2), A.Y(mc(9.2)) - 8, 'MC', { a: 'end', c: 'tb' });
    return { t: 'Şekil 2.5 · Tüketici artığı, üretici artığı ve etkinlik kaybı', n: "Firma p' fiyatını koyup q' satıyor. q' ile q'' arasındaki tüketiciler malı maliyetinden fazlaya değer biçiyor ama alamıyor: bu fırsat kaybı EL (efficiency loss, ölü ağırlık kaybı). Toplam artık (CS + PS) en büyük q''de, yani P = MC'de olur: dağıtım (allocative) etkinliği.", svg: SVG(A.W, A.H, s) };
  })();
  F.prodineff = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'q', yl: 'p', xt: [[4.4, "q'"]], yt: [[5.6, "p'"]] });
    const mcH = (q) => 3 + 0.6 * q, mcL = (q) => 2 + 0.45 * q;
    let s = A.s + AREA(A, [[0, mcH(0)], [4.4, mcH(4.4)], [4.4, mcL(4.4)], [0, mcL(0)]], 'sh') + A.P([[0, 10], [10, 0]], 'l1') + A.P(smp(q => [q, mcH(q)], 0, 9, 2), 'l2') + A.P(smp(q => [q, mcL(q)], 0, 9.5, 2), 'l3');
    s += HL(A, 5.6, 4.4) + VL(A, 4.4, 5.6) + T(A.X(1.6), A.Y(3.55), 'EL', { c: 'tb' }) + T(A.X(9), A.Y(mcH(9)) - 8, 'MC_H', { a: 'end', c: 'tb' }) + T(A.X(9.5), A.Y(mcL(9.5)) - 8, 'MC_L', { a: 'end', c: 'tg' });
    return { t: 'Şekil 2.6 · Üretim etkinsizliği', n: 'Aynı miktar daha düşük maliyetle (MC_L) üretilebilecekken yüksek maliyetle (MC_H) üretiliyor. İki eğri arasındaki alan boşa giden kaynak. Rekabet baskısı az olan büyük firmalarda sık görülür (yöneticiler maliyeti sıkı denetlemez).', svg: SVG(A.W, A.H, s) };
  })();

  /* ======================= Bölüm 3 ======================= */
  F.agency = (() => {
    const W = 520, H = 190;
    let s = AR2(60, 60, 460, 60) + CI(60, 60, 7, 'pt') + CI(460, 60, 7, 'pt') + CI(260, 60, 7, 'ptp');
    s += TM(60, 92, ['sabit maaş', 'risk en az', 'teşvik en az'], { c: 'lg' }) + TM(460, 92, ['yönetici firmayı satın alır', '(management buyout)', 'risk ve teşvik en çok'], { c: 'lg' }) + TM(260, 92, ['sabit maaş + kâra bağlı ödeme', '(örneğin hisse opsiyonu)', 'gerçekte görülen'], { c: 'tp' });
    s += T(260, 30, 'Yöneticiye ne kadar risk yüklenmeli?', { a: 'middle', c: 'hd' });
    return { t: 'Vekâlet (agency) sorununda en iyi sözleşme', n: 'Yönetici riskten kaçınmıyor olsaydı en iyisi firmayı ona satmaktı: bütün kâr onun, teşvik tam. Ama yöneticilerin parası kısıtlı ve riskten kaçınırlar. Bu yüzden sözleşme sigorta (sabit maaş) ile teşvik (kâra bağlı ödeme) arasında denge kurar; sorunu hafifletir ama tamamen çözmez.', svg: SVG(W, H, s) };
  })();
  function AR2(x1, y1, x2, y2) { return AR((x1 + x2) / 2, y1, x1 + 2, y1, 'ar', 8) + AR((x1 + x2) / 2, y2, x2 - 2, y2, 'ar', 8); }
  F.bound = (() => {
    const W = 520, H = 250;
    let s = BOX(200, 100, 120, 46, ['Volkswagen'], 'bxp');
    [['Skoda', 40], ['SEAT', 200], ['Bentley', 360]].forEach((b, k) => { s += BOX(b[1], 14, 120, 40, [b[0]]) + L(260, 100, b[1] + 60, 54, 'ar'); });
    s += T(20, 84, 'yatay genişleme', { c: 'tp' });
    s += BOX(200, 196, 120, 40, ['lastik üreticisi'], 'bxw') + AR(260, 148, 260, 194, 'ar3', 8) + T(330, 178, 'dikey bütünleşme', { c: 'tg' });
    return { t: 'Firmanın sınırları: yatay ve dikey', n: 'Yatay genişleme: aynı aşamada daha çok ürün ya da marka (VW\'nin Skoda, SEAT, Bentley\'i alması). Dikey bütünleşme: üretim zincirinde daha çok aşamanın firma içinde olması (VW bir lastik üreticisi alsaydı).', svg: SVG(W, H, s) };
  })();
  F.holdup = (() => {
    const W = 520, H = 330, st = [['Fisher, GM için', 'özel kalıplara yatırım yapar'], ['uzun dönem sözleşme', 'ister ve alır'], ['otomobil talebi', 'beklenenden yüksek'], ['GM sözleşmeyi', 'aleyhine bulur, pazarlık ister'], ['sözleşme sonrası', 'fırsatçılık (hold-up)'], ['GM, Fisher Body\'yi', 'satın alır (1924–1926)']];
    let s = '';
    st.forEach((v, k) => { const x = 14 + (k % 2) * 260, y = 14 + Math.floor(k / 2) * 104; s += BOX(x, y, 232, 62, v, k === 5 ? 'bxp' : k === 4 ? 'bxr' : 'bx'); });
    s += AR(246, 45, 272, 45, 'ar', 7) + AR(388, 78, 140, 116, 'ar', 7) + AR(246, 149, 272, 149, 'ar', 7) + AR(388, 182, 140, 220, 'ar', 7) + AR(246, 253, 272, 253, 'ar', 7);
    s += T(260, 324, 'Sonra yeni sorun: firma içindeki kaporta fabrikası kaliteye daha az özen gösterdi.', { a: 'middle', c: 'lg' });
    return { t: 'GM ve Fisher Body: varlığa özgü yatırım ve hold-up', n: 'Metal kaporta için Fisher\'ın yalnız GM\'ye yarayan (varlığa özgü) yatırım yapması gerekti. Yatırımdan sonra iki taraf da birbirine bağlandı; koşullar değişince biri ötekini sıkıştırabilir (hold-up). Bu risk büyükse işlem piyasadan firma içine alınır: dikey bütünleşme.', svg: SVG(W, H, s) };
  })();
  F.learn = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'toplam üretilen uçak (birikimli)', yl: 'birim maliyet' });
    const c = (x) => 2 + 7 * Math.exp(-0.45 * x);
    let s = A.s + A.P(smp(x => [x, c(x)], 0.3, 9.6, 60), 'l1') + A.D(1.5, c(1.5), 'Lockheed', 10, -6) + A.D(3, c(3), 'McDonnell Douglas', 10, -6) + A.D(7.5, c(7.5), 'Boeing', 0, -12);
    return { t: 'Öğrenme eğrisi: tarih önemlidir (şematik)', n: '1970\'lerde geniş gövdeli uçak pazarında Boeing, McDonnell Douglas ve Lockheed başta eşitti. Rolls-Royce motor sorunları Lockheed\'in üretimini yavaşlattı, 1980\'deki kazalar DC10\'a güveni sarstı. Çok üreten Boeing öğrenme eğrisinde aşağı indi ve kalıcı maliyet üstünlüğü kazandı.', svg: SVG(A.W, A.H, s) };
  })();

  /* ======================= Bölüm 4 ======================= */
  const PD = [[[5, 5], [3, 6]], [[6, 3], [4, 4]]];
  F.pd = { t: 'Şekil 4.1 · Tutsak ikilemi', n: 'Her iki oyuncu için de ikinci strateji (B ve R) baskın: rakip ne yaparsa yapsın daha çok kazandırır (6 > 5, 4 > 3). Denge (B, R): 4, 4. Oysa (T, L) ikisine de 5 verirdi. Fiyat rekabeti aynı yapıda: T, L = yüksek fiyat, B, R = düşük fiyat.', svg: mat(['T', 'B'], ['L', 'R'], PD, { ne: [[1, 1]] }) };
  const G42 = [[[1, 1], [2, 0], [1, 1]], [[0, 0], [0, 1], [0, 0]], [[2, 1], [1, 0], [2, 2]]];
  F.ieds0 = { t: 'Şekil 4.2 · Baskın olmayan stratejilerin ardışık elenmesi (başlangıç)', n: 'Baskın strateji yok: 1. oyuncu için hiçbir satır her durumda en iyi değil. Ama baskılanan (dominated) bir strateji var: T, M\'den her durumda iyi (1 > 0, 2 > 0, 1 > 0).', svg: mat(['T', 'M', 'B'], ['L', 'C', 'R'], G42, {}) };
  F.ieds1 = { t: 'Adım 1–2: M ve C elenir', n: 'M, T tarafından baskılanıyor: sil. M gidince 2. oyuncu için C, R tarafından baskılanıyor (T satırında 0 < 1, B satırında 0 < 2): sil. Dikkat: M dururken C elenemezdi (M satırında C = 1 > R = 0).', svg: mat(['T', 'M', 'B'], ['L', 'C', 'R'], G42, { goneR: [1], goneC: [1] }) };
  F.ieds2 = { t: 'Adım 3–4: T ve L elenir, çözüm (B, R)', n: 'Kalan 2×2\'de B, T\'den iyi (2 > 1, 2 > 1): T\'yi sil. Sonra 2. oyuncu için R, L\'den iyi (2 > 1): L\'yi sil. Tek hücre kalır: (B, R) = 2, 2.', svg: mat(['T', 'M', 'B'], ['L', 'C', 'R'], G42, { goneR: [0, 1], goneC: [0, 1], ne: [[2, 2]] }) };
  F.dubious = { t: 'Şekil 4.3 · IEDS\'nin şüpheli kullanımı', n: '2. oyuncu için R, L\'yi baskılıyor (1 > 0): L elenir. Sonra 1. oyuncu B\'yi seçer (2 > 1). IEDS çözümü (B, R). Ama 2. oyuncu yanılıp L oynarsa 1. oyuncu −100 alır. Rakibin rasyonelliğinden emin değilsen garantili 1 veren T daha akıllıca olabilir.', svg: mat(['T', 'B'], ['L', 'R'], [[[1, 0], [1, 1]], [[-100, 0], [2, 1]]], { ne: [[1, 1]] }) };
  F.nash44 = { t: 'Şekil 4.4 · Nash dengesi', n: 'Baskın strateji ve IEDS çözümü yok. Nash kontrolü: (T, C) hücresinde 1. oyuncu C sütununda en iyiyi alıyor (2 > 1 > 0), 2. oyuncu T satırında en iyiyi (2 > 1). Slayttaki tabloya göre (B, R) de Nash: R sütununda 2 en büyük, B satırında 2 en büyük.', svg: mat(['T', 'M', 'B'], ['L', 'C', 'R'], [[[2, 1], [2, 2], [0, 1]], [[1, 1], [1, 1], [1, 1]], [[0, 1], [0, 0], [2, 2]]], { ne: [[0, 1], [2, 2]] }) };
  F.multi = { t: 'Şekil 4.5 · Birden çok Nash dengesi', n: '(T, L) ve (B, R) ikisi de Nash: kimse tek başına sapmak istemez. Hangisinin oynanacağını oyun söylemez; tarih, alışkanlık ya da odak noktası belirler.', svg: mat(['T', 'B'], ['L', 'R'], [[[1, 2], [0, 0]], [[0, 0], [2, 1]]], { ne: [[0, 0], [1, 1]] }) };
  F.tree = (() => {
    const W = 540, H = 300;
    let s = CI(260, 36, 18, 'bx') + T(260, 41, '1', { a: 'middle', c: 'p1t' }) + L(248, 50, 150, 120, 'ax') + L(272, 50, 380, 120, 'ax') + T(186, 80, 'e (gir)', { a: 'end', c: 'lg' }) + T(338, 80, 'ē (girme)', { c: 'lg' });
    s += BOX(330, 122, 130, 52, ['Π₁ = 0', 'Π₂ = 50']) + CI(150, 138, 18, 'bx') + T(150, 143, '2', { a: 'middle', c: 'p2t' });
    s += L(138, 152, 70, 228, 'ar2') + L(162, 152, 240, 228, 'ar3') + T(82, 188, 'r (savaş)', { a: 'end', c: 'tb' }) + T(222, 188, 'r̄ (uzlaş)', { c: 'tg' });
    s += BOX(10, 230, 130, 52, ['Π₁ = −10', 'Π₂ = −10'], 'bxr') + BOX(180, 230, 130, 52, ['Π₁ = 10', 'Π₂ = 20'], 'bxw');
    s += T(340, 210, 'Geriye doğru:', { c: 'hd' }) + T(340, 230, '2. oyuncu: 20 > −10 → r̄', { c: 'lg' }) + T(340, 250, '1. oyuncu: 10 > 0 → e', { c: 'lg' }) + T(340, 272, 'Çözüm: (e, r̄) = 10, 20', { c: 'tp' });
    return { t: 'Şekil 4.6 · Ardışık giriş oyunu', n: 'Önce 1. oyuncu (giren) girer ya da girmez; girerse 2. oyuncu (yerleşik) savaşır ya da uzlaşır. İki Nash dengesi var: (e, r̄) ve (ē, r). İkincisi "girersen savaşırım" tehdidine dayanır ama tehdit inanılmazdır: giriş olunca savaşmak 2\'ye −10, uzlaşmak 20 getirir. Geriye doğru tümevarım inanılmaz tehdidi eler.', svg: SVG(W, H, s) };
  })();
  F.stage = { t: 'Şekil 4.10 · İki kez oynanan oyunun aşama oyunu', n: 'Tek seferlik oyunun iki Nash dengesi var: (M, C) = 4, 4 ve (B, R) = 1, 1. (T, L) = 5, 5 tek seferde denge değil (1. oyuncu M\'ye geçip 6 alır). İki kez oynanınca: "ilk turda T/L oyna; rakip uyduysa ikinci turda iyi dengeyi (M, C), uymadıysa kötü dengeyi (B, R) oyna." Uymak 5 + 4 = 9, sapmak 6 + 1 = 7 getirir.', svg: mat(['T', 'M', 'B'], ['L', 'C', 'R'], [[[5, 5], [3, 6], [0, 0]], [[6, 3], [4, 4], [0, 0]], [[0, 0], [0, 0], [1, 1]]], { ne: [[1, 1], [2, 2]] }) };

  /* ======================= Bölüm 5 ======================= */
  F.elast = (() => {
    const W = 520, H = 260;
    const pan = (ox, steep, lab) => {
      const X = (v) => ox + v * 20, Y = (v) => 215 - v * 18; let s = AR(ox, 215, ox, 20, 'ax', 7) + AR(ox, 215, ox + 225, 215, 'ax', 7);
      const a = steep ? 10 : 5.2, b = steep ? 1.25 : 0.3, c = 2.5, Q = (a - c) / (2 * b), P = (a + c) / 2;
      s += PL([[X(0), Y(a)], [X(Math.min(10.5, a / b)), Y(Math.max(0, a - b * Math.min(10.5, a / b)))]], 'l1') + PL([[X(0), Y(a)], [X(Math.min(10.5, a / (2 * b))), Y(Math.max(0, a - 2 * b * Math.min(10.5, a / (2 * b))))]], 'l4 dsh') + PL([[X(0), Y(c)], [X(10.5), Y(c)]], 'l3');
      s += L(X(Q), Y(P), X(Q), Y(0), 'gd') + L(X(0), Y(P), X(Q), Y(P), 'gd') + CI(X(Q), Y(P), 5, 'pt') + T(ox - 6, Y(P) + 4, 'p_M', { a: 'end', c: 'tk' }) + T(ox + 112, 248, lab, { a: 'middle', c: 'lg' });
      s += AR(X(Q) + 10, Y(P) - 3, X(Q) + 10, Y(c) + 3, 'ar2', 6);
      return s;
    };
    return { t: 'Şekil 5.1 · Talep esnekliği ve tekel marjı', n: 'Esnekliği düşük talepte (solda) tüketiciler fiyata az tepki verir: tekel fiyatı maliyetin çok üstüne koyar. Esnek talepte (sağda) marj küçüktür. Kural: (P − MC)/P = 1/|ε|.', svg: SVG(W, H, pan(30, true, 'düşük esneklik: büyük marj') + pan(285, false, 'yüksek esneklik: küçük marj')) };
  })();
  F.monolin = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'Miktar', yl: 'Fiyat', xt: [[3.2, 'Q*']], yt: [[10, 'a'], [2, 'α'], [6.8, 'P*']] });
    const mc = (q) => 2 + 0.5 * q, Q = 3.2;
    let s = A.s + A.P([[0, 10], [10, 0]], 'l1') + A.P([[0, 10], [5, 0]], 'l4') + A.P(smp(q => [q, mc(q)], 0, 9.5, 2), 'l3');
    s += A.D(Q, 10 - Q, 'A') + A.D(Q, mc(Q), '', 0, 0) + HL(A, 10 - Q, Q) + VL(A, Q, 10 - Q);
    s += LEG(300, 24, [['l1', 'p(Q) = a − bQ'], ['l4', 'MR(Q) = a − 2bQ'], ['l3', 'MC(Q) = α + 2βQ']]);
    return { t: 'Doğrusal talepte tekel', n: 'Toplam gelir TR = (a − bQ)Q, türevi MR = a − 2bQ: talepte aynı kesişim, iki kat eğim. MC = α + 2βQ ise toplam maliyet TC = αQ + βQ² (+ sabit). MR = MC: a − 2bQ = α + 2βQ ⇒ Q* = (a − α)/(2(b + β)); fiyat talepten: P* = a − bQ*.', svg: SVG(A.W, A.H, s) };
  })();
  F.domfirm = (() => {
    const A = E({ xm: 20, ym: 10, xl: 'Q', yl: 'P', xt: [[10, '10'], [12, '12'], [20, '20']], yt: [[10, '10'], [9, '9'], [4, '4 = fringe MC'], [1, '1']] });
    let s = A.s + A.P([[0, 10], [20, 0]], 'l1') + A.P([[0, 9], [10, 4], [12, 4], [20, 0]], 'l2 dsh') + A.P([[0, 1], [19, 1]], 'l3');
    s += A.D(12, 4, 'P = 4, Q = 12', 8, -10) + VL(A, 12, 4) + HL(A, 4, 10);
    s += LEG(300, 24, [['l1', 'piyasa talebi D'], ['l2 dsh', 'kalan talep D_R'], ['l3', 'baskın firmanın MC = 1']]);
    return { t: 'Şekil 5.2 · Baskın firma ve kalan (residual) talep', n: 'Küçük rakipler (fringe) fiyat 4 doların üstündeyse kapasiteleri K = 2 kadar satar; baskın firmaya kalan talep, piyasa talebinin 2 birim sola kaydırılmış hâli. Fiyat 4 doların altındaysa rakipler satmaz ve kalan talep piyasa talebine eşit. Slayttaki örnekte (Q = 20 − 2P) en iyisi P = 4 koyup rakipleri piyasadan atmak: Q = 12, kâr 36; paylaşmak (P = 5) 32 getirir.', svg: SVG(A.W, A.H, s) };
  })();
  F.reg = (() => {
    const A = E({ xm: 10, ym: 10, xl: 'Miktar', yl: 'Fiyat', xt: [[4, '4 = Q_M'], [8, '8 = Q_C']], yt: [[10, '10'], [6, '6 = P_M'], [2, '2 = P_C']] });
    let s = A.s + AREA(A, [[4, 6], [8, 2], [4, 2]], 'sh') + A.P([[0, 10], [10, 0]], 'l1') + A.P([[0, 10], [5, 0]], 'l4 dsh') + A.P([[0, 2], [9.8, 2]], 'l3');
    s += A.D(4, 6, 'A') + A.D(4, 2, 'B', -16, 18) + A.D(8, 2, 'C', 8, -8) + HL(A, 6, 4) + VL(A, 4, 6) + VL(A, 8, 2) + T(A.X(4.8), A.Y(3.2), 'DWL = 8', { c: 'tb' });
    s += LEG(340, 24, [['l1', 'talep D'], ['l4 dsh', 'MR'], ['l3', 'MC']]);
    return { t: 'Düzenleme: tekelin ölü ağırlık kaybı', n: 'Talep P = 10 − Q, MC = 2. Tekel: MR = 10 − 2Q = 2 ⇒ Q = 4, P = 6. Rekabet: P = MC ⇒ Q = 8. Ölü ağırlık kaybı ABC üçgeni: ½ × (8 − 4) × (6 − 2) = 8. Düzenleyici fiyatı MC\'ye (2) indirirse kayıp kalkar ama firma sabit maliyetini karşılayamaz.', svg: SVG(A.W, A.H, s) };
  })();

  /* ======================= Bölüm 6 ======================= */
  F.pclr = (() => {
    const A = E({ xm: 80, ym: 10, xl: 'q (firma)', yl: 'P', xt: [[40, 'q = 40']], yt: [[5, 'P = 5']] });
    const ac = (q) => 80 / q + 1 + 0.05 * q, mc = (q) => 1 + 0.1 * q;
    let s = A.s + A.P(smp(q => [q, ac(q)], 9, 78, 60).filter(p => p[1] < 9.6), 'l1') + A.P(smp(q => [q, mc(q)], 0, 78, 2), 'l2') + A.P([[0, 5], [78, 5]], 'l3');
    s += A.D(40, 5, '', 0, 0) + VL(A, 40, 5) + T(A.X(74), A.Y(ac(74)) - 8, 'AC', { a: 'end', c: 'tp' }) + T(A.X(78), A.Y(mc(78)) + 16, 'MC', { a: 'end', c: 'tb' });
    return { t: 'Uzun dönem tam rekabet dengesi', n: 'TC = 80 + q + 0.05q². Serbest giriş kârı sıfıra indirir: fiyat AC\'nin en düşük noktasına iner. AC\'nin minimumu: −F/q² + 0.05 = 0 ⇒ q = √(80/0.05) = 40, AC = 2 + 1 + 2 = 5. MC de burada 5: P = MC = min AC.', svg: SVG(A.W, A.H, s) };
  })();
  function mcomp(lr) {
    const A = E({ xm: 8, ym: 6, xl: 'q', yl: 'p' });
    // TC = 2.2 + 1.2q + 0.25q²: AC ve MC tutarlı
    const ac = (q) => 2.2 / q + 1.2 + 0.25 * q, mcf = (q) => 1.2 + 0.5 * q;
    const a = lr ? 3.4 : 5, b = lr ? 0.3 : 0.6;     // uzun dönem: talep AC'ye q = 2'de teğet
    const qs = (a - 1.2) / (2 * b + 0.5), ps = a - b * qs;
    let s = A.s + A.P(smp(q => [q, ac(q)], 0.45, 7.8, 60).filter(p => p[1] < 5.8), 'l1') + A.P(smp(q => [q, mcf(q)], 0, 7.8, 2).filter(p => p[1] < 5.8), 'l2') + A.P([[0, a], [Math.min(7.8, a / b), Math.max(0, a - b * Math.min(7.8, a / b))]], 'l5') + A.P([[0, a], [a / (2 * b), 0]], 'l4 dsh');
    if (!lr) s += AREA(A, [[0, ps], [qs, ps], [qs, ac(qs)], [0, ac(qs)]], 'shg') + T(A.X(qs / 2), A.Y((ps + ac(qs)) / 2) + 5, 'kâr', { a: 'middle', c: 'hd' });
    s += A.D(qs, ps, '', 0, 0) + A.D(qs, mcf(qs), '', 0, 0) + HL(A, ps, qs, lr ? 'p = AC' : 'p') + VL(A, qs, ps, 'q*');
    if (lr) s += VL(A, Math.sqrt(2.2 / 0.25), ac(Math.sqrt(2.2 / 0.25))) + T(A.X(Math.sqrt(2.2 / 0.25)), A.Y(0) + 34, 'min AC', { a: 'middle', c: 'lg' });
    s += LEG(330, 24, [['l5', 'firmanın talebi d'], ['l4 dsh', 'MR'], ['l2', 'MC'], ['l1', 'AC']]);
    return SVG(A.W, A.H + (lr ? 14 : 0), s);
  }
  F.mcsr = { t: 'Şekil 6.2 · Tekelci rekabette kısa dönem', n: 'Grafik tekelinkine benzer: MR = MC miktarı, fiyat firmanın talep eğrisinden. Fark: firmanın talebi d piyasa talebi değil; yakın ikameler olduğu için piyasa talebinden daha esnek. Fiyat AC\'nin üstünde: kâr var, bu giriş çeker.', svg: mcomp(false) };
  F.mclr = { t: 'Tekelci rekabette uzun dönem', n: 'Kâr yeni firmaları çeker; her firmanın talebi sola kayar ve AC\'ye teğet olana kadar daralır: P = AC, kâr 0. Ama P > MC kalır (küçük ölü ağırlık kaybı) ve firmalar AC\'nin en düşük noktasının solunda üretir (atıl kapasite). Karşılığında çeşitlilik var: herkesin kotu aynı olsun ister miydin?', svg: mcomp(true) };

  /* ======================= Bölüm 7 ======================= */
  F.bdem = (() => {
    const W = 520, H = 220; let s = '';
    [['p₁ < p₂', 'firma 1 bütün talebi alır: D(p₁)', 'bxw'], ['p₁ = p₂', 'talep yarı yarıya: ½ D(p)', 'bxp'], ['p₁ > p₂', 'firma 1\'e talep yok: 0', 'bxr']].forEach((r, k) => { s += BOX(14, 14 + k * 66, 130, 52, [r[0]], r[2]) + AR(148, 40 + k * 66, 186, 40 + k * 66, 'ar', 7) + T(196, 45 + k * 66, r[1], { c: 'lg' }); });
    return { t: 'Bertrand: aynı ürün, en ucuz satan alır', n: 'Ürünler aynı olduğu için tüketici en düşük fiyatlıya gider. Bu yüzden fiyatı rakibin bir kuruş altına çekmek bütün pazarı getirir; denge ancak iki firma da P = MC koyunca oluşur.', svg: SVG(W, H, s) };
  })();
  F.cap = (() => {
    const A = E({ xm: 12, ym: 12, xl: 'Q', yl: 'P', xt: [[3, '3'], [6, '6'], [9, '9'], [12, '12']], yt: [[12, '12'], [9, '9'], [6, '6'], [3, '3'], [2, '2 = MC']] });
    let s = A.s + A.P([[0, 12], [12, 0]], 'l1') + A.P([[0, 9], [9, 0]], 'l5 dsh') + A.P([[0, 9], [4.5, 0]], 'l4 dsh') + A.P([[0, 2], [11.5, 2]], 'l3');
    s += A.D(6, 6, 'P = 6') + A.D(3, 6, '', 0, 0) + A.D(3, 3, 'MR = 3', 8, 16) + HL(A, 6, 6) + VL(A, 3, 6);
    s += LEG(300, 24, [['l1', 'talep P = 12 − Q'], ['l5 dsh', 'kalan talep 9 − Q'], ['l4 dsh', 'kalan MR = 9 − 2Q'], ['l3', 'MC = 2']]);
    return { t: 'Kapasite kısıtlı Bertrand (K = 3)', n: 'P₁ = P₂ = 6: talep 6, her firma kapasitesi olan 3\'ü satar, kâr 12. Fiyat kırmak işe yaramaz (zaten tam kapasite). Fiyatı artırınca rakip 3 satar, firmaya kalan talep 9 − P; bu talepte Q = 3\'te MR = 3 > MC = 2, yani üretimi kısıp fiyatı yükseltmek kârı azaltır. Bu yüzden (6, 6) Nash dengesi; P = MC = 2 değil.', svg: SVG(A.W, A.H, s) };
  })();
  F.react = (() => {
    const A = E({ xm: 12, ym: 12, xl: 'q₁', yl: 'q₂', xt: [[3, '3'], [4, '4'], [4.5, '4.5'], [6, '6'], [12, '12']], yt: [[3, '3'], [4, '4'], [6, '6'], [12, '12']] });
    let s = A.s + A.P([[0, 12], [6, 0]], 'l1') + A.P([[0, 6], [12, 0]], 'l2') + A.P([[0, 6], [6, 0]], 'l5 dsh');
    s += A.D(4, 4, 'Nash (4, 4)', 8, -6) + A.D(3, 3, '(3, 3)', -48, 18) + A.D(4.5, 3, '', 0, 0) + AR(A.X(3.15), A.Y(3), A.X(4.35), A.Y(3), 'ar2', 7) + T(A.X(4.6), A.Y(3) + 18, 'sapma 4.5', { c: 'tb' });
    s += LEG(300, 24, [['l1', 'firma 1: q₁ = 6 − q₂/2'], ['l2', 'firma 2: q₂ = 6 − q₁/2'], ['l5 dsh', 'toplam 6 (tekel miktarı)']]);
    return { t: 'Cournot tepki fonksiyonları (P = 12 − Q, maliyet 0)', n: 'Her firmanın en iyi cevabı rakibin miktarına bağlı: q₁ = 6 − q₂/2. İki doğrunun kesiştiği (4, 4) Nash dengesi: P = 4, her firma 16 kâr. (3, 3) ikisine de daha çok kâr (18) verirdi ama kendiliğinden sürmez: rakip 3 üretirken en iyi cevap 4.5.', svg: SVG(A.W, A.H, s) };
  })();

  /* ======================= Bölüm 8 ======================= */
  F.pdv = (() => {
    const W = 520, H = 250; let s = '';
    const pan = (ox, hs, lab) => { let t = AR(ox, 210, ox, 30, 'ax', 7) + AR(ox, 210, ox + 220, 210, 'ax', 7) + T(ox + 110, 238, lab, { a: 'middle', c: 'hd' }); hs.forEach((h, k) => { t += RC(ox + 8 + k * 26, 210 - h, 20, h, k === 0 && hs.length > 1 && hs[1] === 0 ? 'b2' : 'b1', 0); }); return t; };
    s += pan(20, [160, 0, 0, 0, 0, 0, 0], 'Sap (fiyat kır)') + pan(280, [80, 72, 65, 58, 52, 47, 42], 'Uy (gizlice anlaş)');
    s += T(60, 52, 'bugün π_M', { c: 'tb' }) + T(80, 196, 'sonra hep p = c: 0', { c: 'lg' }) + T(330, 116, 'her dönem π_M/2, iskontolu', { c: 'lg' });
    return { t: 'Grim trigger: sapmak mı, uymak mı?', n: 'Sapan firma bugün tekel kârının neredeyse tamamını alır, sonra sonsuza kadar Bertrand dengesi (p = c, kâr 0) gelir. Uyan firma her dönem yarısını alır; bugünkü değeri $(\\pi^M/2)/(1 - \\delta)$. Uymak daha iyi ⇔ $\\frac{\\pi^M/2}{1 - \\delta} \\ge \\pi^M$ ⇔ $\\delta \\ge 1/2$.', svg: SVG(W, H, s) };
  })();
  F.deltan = (() => {
    const fr = frame({ x: [1, 12], y: [0, 1], xt: [2, 3, 4, 5, 6, 8, 10, 12], yt: [0, 0.25, 0.5, 0.75, 1], yl: 'gereken en küçük δ', xl: 'firma sayısı N', h: 280 });
    const pts = smp(n => [n, 1 - 1 / n], 1, 12, 44);
    let s = fr.s + fr.line(pts, 'l1');
    [[2, 0.5], [3, 0.667], [10, 0.9]].forEach(p => { s += CI(fr.X(p[0]), fr.Y(p[1]), 5, 'pt') + T(fr.X(p[0]) + 8, fr.Y(p[1]) + 18, String(p[1]), { c: 'hd' }); });
    return { t: 'Firma sayısı arttıkça gizli anlaşma zorlaşır', n: 'N firmanın Bertrand gizli anlaşmasında uymanın koşulu δ ≥ 1 − 1/N. İki firma için ½, üç firma için ⅔, on firma için 0.9. Çok firma: herkesin payı küçük, sapınca bütün pazarı almanın cazibesi büyük.', svg: SVG(fr.W, fr.H, s) };
  })();
  F.ccoll = { t: 'Cournot\'ta grim trigger (Q = 14 − P, MC = 2)', n: 'Tekel: q = 6, P = 8, kâr 36 (her firmaya 18). Cournot dengesi: her firma 4, P = 6, kâr 16. Sapma: rakip 3 üretirken en iyi cevap 4.5, P = 6.5, kâr 20.25. Koşul: 18/(1 − δ) ≥ 20.25 + 16δ/(1 − δ) ⇔ δ ≥ (20.25 − 18)/(20.25 − 16) = 9/17 ≈ 0.53.',
    svg: hbars([['anlaşma: π_M/2', 18, 'b1'], ['sapma: π_x', 20.25, 'b2'], ['ceza: Cournot π_NE', 16, 'b4']], { lw: 170, rh: 34, max: 24 }) };

  root.FIGS = F;
})(typeof window !== 'undefined' ? window : globalThis);
