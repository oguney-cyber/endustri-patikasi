/* Soru üreticileri (Endüstri İktisadı Patikası). Her üretici {en, tr, opts:[doğru, ...yanlışlar], ex} döndürür. */
(function (root) {
  'use strict';
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const f = (x, d) => { let s = (+x).toFixed(d); if (/^-0\.?0*$/.test(s)) s = s.slice(1); return s; };
  const g0 = (x, d) => { const s = f(x, d == null ? 2 : d); return s.includes('.') ? s.replace(/\.?0+$/, '') : s; };
  const isZero = (s) => /^[-+]?0(\.0+)?%?$/.test(s);

  // Sayısal şıklar: doğru + yanlışlar; eksik kalırsa doğru değerin yakınından doldur (sıfır gibi görünen şık yok)
  function nopts(correct, wrongs, d, opt) {
    opt = opt || {};
    const lo = opt.min != null ? opt.min : -Infinity, hi = opt.max != null ? opt.max : Infinity;
    const fmt = opt.fmt || ((x) => g0(x, d));
    const c = fmt(correct); const out = [c];
    for (const w of wrongs) {
      if (w == null || !isFinite(w) || w < lo || w > hi) continue;
      const s = fmt(w); if (isZero(s) || out.includes(s)) continue; out.push(s); if (out.length === 4) break;
    }
    const st = [0.2, -0.2, 0.4, -0.4, 0.6, 0.12, -0.12, 0.8, -0.6, 1];
    for (let k = 0; out.length < 4 && k < 40; k++) {
      const s0 = st[k % st.length] * (1 + Math.floor(k / st.length));
      const base = Math.abs(correct) < 1e-9 ? 1 : Math.abs(correct);
      const v = correct + s0 * base * (opt.spread || 0.5);
      if (v < lo || v > hi) continue;
      const s = fmt(v); if (isZero(s) || out.includes(s)) continue; out.push(s);
    }
    return out;
  }
  // Diğer şıkları açıkla: W = [[değer, neden], ...]
  function why(opts, W, fmt) {
    const m = {}; W.forEach(w => { if (w[0] != null && isFinite(w[0])) { const s = fmt(w[0]); if (!(s in m)) m[s] = w[1]; } });
    const lines = opts.slice(1).map(o => `• ${o}: ${m[o] || 'hiçbir adım bu sayıyı vermez; dikkatsiz okumaya karşı konmuş yakın bir sayı.'}`);
    return '\n\n**Diğer şıklar neden yanlış?**\n' + lines.join('\n');
  }
  function whyT(opts, M) { return '\n\n**Diğer şıklar neden yanlış?**\n' + opts.slice(1).map(o => `• ${o}: ${M[o] || 'modelin sonucuyla çelişir.'}`).join('\n'); }
  const steps = (...a) => a.filter(Boolean).map((s, i) => `**Adım ${i + 1}: ${s[0]}**\n${s[1]}`).join('\n\n');
  const fast = (t) => `\n\n:::ipucu Hızlı yol (sınavda)\n${t}\n:::`;
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const num = (d) => (x) => g0(x, d);

  const G = {};

  /* ---------- Bölüm 1: Lerner endeksi ---------- */
  G.lerner = () => {
    const v = R(0, 3), F2 = num(3);
    if (v === 0) {
      const P = pick([10, 12, 20, 25, 40, 50, 80, 100, 120, 200]), MC = Math.round(P * R(15, 85) / 100);
      const L = (P - MC) / P, W = [[(P - MC) / MC, 'paydaya MC konmuş; Lerner fiyata böler.'], [MC / P, 'MC/P: maliyetin fiyattaki payı, endeksin tersi (1 − L).'], [P - MC, 'yalnızca P − MC farkı; fiyata bölmek unutulmuş.']];
      const opts = nopts(L, W.map(w => w[0]), 3, { fmt: F2 });
      return { en: `A firm sells its product at a price of ${P} dollars and its marginal cost is ${MC} dollars. What is the Lerner index?`, tr: `Fiyat ${P}, marjinal maliyet ${MC}. Lerner endeksi kaçtır?`, opts,
        ex: steps(['Tanım', '$L = \\frac{P - MC}{P}$: fiyatın ne kadarı maliyetin üstünde.'], ['Sayıları koy', `$L = \\frac{${P} - ${MC}}{${P}} = \\frac{${P - MC}}{${P}} = ${F2(L)}$`]) + `\n\nL 0 ile 1 arasında: 0 tam rekabet (P = MC), 1'e yaklaştıkça piyasa gücü büyük.` + why(opts, W, F2) + fast('Farkı fiyata böl: (P − MC)/P.') };
    }
    if (v === 1) {
      const MC = pick([4, 6, 8, 10, 12, 15, 20, 30]), L = pick([0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8]), P = MC / (1 - L);
      const W = [[MC * (1 + L), 'MC × (1 + L): yüzde marj maliyet üstüne eklenmiş; Lerner fiyata göre tanımlı.'], [MC / L, 'MC/L: formül ters çevrilmiş.'], [MC * L, 'MC × L: marjın kendisi bile değil.']];
      const opts = nopts(P, W.map(w => w[0]), 2);
      return { en: `A firm's marginal cost is ${MC} and its Lerner index is ${L}. What price does it charge?`, tr: `MC = ${MC}, Lerner endeksi ${L}. Fiyat kaçtır?`, opts,
        ex: steps(['Formülü fiyat için çöz', `$L = \\frac{P - MC}{P} = 1 - \\frac{MC}{P} \\Rightarrow P = \\frac{MC}{1 - L}$`], ['Sayıları koy', `$P = \\frac{${MC}}{1 - ${L}} = \\frac{${MC}}{${g0(1 - L)}} = ${g0(P)}$`], ['Kontrol', `$(${g0(P)} - ${MC})/${g0(P)} = ${g0(L, 3)}$ ✓`]) + why(opts, W, num(2)) + fast('P = MC/(1 − L).') };
    }
    if (v === 2) {
      const e = pick([1.25, 1.5, 2, 2.5, 3, 4, 5, 8, 10]), L = 1 / e;
      const W = [[e, 'esnekliğin kendisi; Lerner onun tersi.'], [1 - 1 / e, '1 − 1/|ε|: bu MC/P oranı.'], [e - 1, 'anlamsız bir fark.']];
      const opts = nopts(L, W.map(w => w[0]), 3, { fmt: F2, max: 1 });
      return { en: `A monopolist maximizes profit. The absolute value of the price elasticity of demand at the optimal price is ${e}. What is its Lerner index?`, tr: `Kârını en çoklayan tekelin optimum fiyattaki talep esnekliği (mutlak) ${e}. Lerner endeksi kaçtır?`, opts,
        ex: steps(['Tekel kuralı', 'MR = MC ve $MR = P(1 - 1/|\\varepsilon|)$ olduğundan $\\frac{P - MC}{P} = \\frac{1}{|\\varepsilon|}$.'], ['Sayıyı koy', `$L = 1/${e} = ${F2(L)}$`]) + `\n\nEsnek talep (büyük |ε|) küçük marj demek: tüketiciler kolayca vazgeçiyor.` + why(opts, W, F2) + fast('Tekelde L = 1/|ε|.') };
    }
    const rev = pick([200, 400, 500, 800, 1000, 1600, 2000]), pr = Math.round(rev * R(5, 40) / 100);
    const L = pr / rev, W = [[pr / (rev - pr), 'kâr ÷ toplam maliyet; Lerner yaklaşımında payda gelir.'], [(rev - pr) / rev, 'maliyetin gelirdeki payı (1 − L).'], [pr / 100, 'kâr 100\'e bölünmüş.']];
    const opts = nopts(L, W.map(w => w[0]), 3, { fmt: F2 });
    return { en: `Marginal cost is hard to observe, so we approximate it with average cost. A firm has total revenue of ${rev} and profit of ${pr}. What is the approximate Lerner index?`, tr: `MC yerine AC kullanılıyor. Gelir ${rev}, kâr ${pr}. Yaklaşık Lerner endeksi kaçtır?`, opts,
      ex: steps(['MC ≈ AC varsayımı', '$L \\approx \\frac{P - AC}{P} = \\frac{Pq - AC\\cdot q}{Pq} = \\frac{\\text{kâr}}{\\text{toplam gelir}}$'], ['Sayıları koy', `$L \\approx ${pr}/${rev} = ${F2(L)}$`]) + why(opts, W, F2) + fast('L ≈ kâr / gelir.') };
  };

  /* ---------- Bölüm 2: talep, maliyet, karar ---------- */
  G.pizzaCS = () => {
    let wtp; do { wtp = [R(25, 45) / 10, R(12, 24) / 10, R(4, 11) / 10, R(1, 3) / 10].sort((a, b) => b - a); } while (new Set(wtp).size < 4);
    const p = pick([0.5, 0.8, 1, 1.2, 1.5, 2]).valueOf(); if (wtp.includes(p)) return G.pizzaCS();
    const q = wtp.filter(w => w > p).length; if (q === 0) return G.pizzaCS();
    const cs = wtp.filter(w => w > p).reduce((s, w) => s + w - p, 0), askQ = Math.random() < 0.3;
    const sumW = wtp.filter(w => w > p).reduce((s, w) => s + w, 0);
    const W = askQ ? [[q + 1, 'ödeme isteği fiyatın altındaki dilim de sayılmış.'], [q - 1 || 4, 'bir dilim eksik sayılmış.'], [4, 'bütün dilimler sayılmış.']] : [[sumW, 'ödeme isteklerinin toplamı; fiyat düşülmemiş.'], [wtp[0] - p, 'yalnız birinci dilimin artığı.'], [wtp.reduce((s, w) => s + w - p, 0), 'fiyatın altındaki dilimlerin eksi artığı da eklenmiş.']];
    const opts = nopts(askQ ? q : cs, W.map(w => w[0]), 2, { min: 0.05 });
    return { en: `A consumer is willing to pay ${wtp.map(w => g0(w)).join(', ')} dollars for the first, second, third and fourth slice of pizza. Slices cost ${g0(p)} dollar each. ${askQ ? 'How many slices does she buy?' : 'What is her consumer surplus?'}`, tr: `Dilimlere ödeme istekleri ${wtp.map(w => g0(w)).join(', ')}; fiyat ${g0(p)}. ${askQ ? 'Kaç dilim alır?' : 'Tüketici artığı kaçtır?'}`, opts,
      ex: steps(['Hangi dilimler alınır?', `Ödeme isteği fiyattan yüksek olanlar: ${wtp.filter(w => w > p).map(w => g0(w)).join(', ')} → ${q} dilim.`], !askQ && ['Artığı topla', `Her dilimde ödeme isteği − fiyat: ${wtp.filter(w => w > p).map(w => `(${g0(w)} − ${g0(p)})`).join(' + ')} = ${g0(cs)}`]) + `\n\nSlayttaki örnek: 3, 1.5, 0.2 ve fiyat 1 → 2 dilim, artık 2.5.` + why(opts, W, num(2)) + fast('Fiyattan büyük ödeme isteklerinden fiyatı çıkarıp topla.') };
  };
  G.elastMkt = () => {
    const a = pick([3, 4, 5, 6, 8, 10, 12]), b = pick([1, 2, 4, 5]), N = pick([10, 20, 50, 100, 200]), P0 = R(1, a - 1);
    const slope = N / b, Q0 = N * (a - P0) / b, e = P0 / (a - P0), askE = Math.random() < 0.6;
    const W = askE ? [[(a - P0) / P0, 'oran ters kurulmuş (Q/P yerine).'], [b * P0 / (a - P0), 'eğim olarak bireysel b kullanılmış.'], [slope, 'yalnızca eğim |dQ/dP|; P/Q ile çarpılmamış.']] : [[(a - P0) / b, 'bir tüketicinin talebi; N ile çarpılmamış.'], [N * (a - P0) * b, 'b ile bölmek yerine çarpılmış.'], [N * a / b, 'fiyat düşülmemiş.']];
    const opts = nopts(askE ? e : Q0, W.map(w => w[0]), 3, { min: 0.001 });
    return { en: `Each of ${N} identical consumers has inverse demand $P = ${a} - ${b === 1 ? '' : b}q$. ${askE ? `What is the (absolute) price elasticity of market demand at $P = ${P0}$?` : `What is market demand at $P = ${P0}$?`}`, tr: `${N} özdeş tüketici, her biri $P = ${a} - ${b === 1 ? '' : b}q$. ${askE ? `$P = ${P0}$'te piyasa talebinin esnekliği (mutlak) kaçtır?` : `$P = ${P0}$'te piyasa talebi kaçtır?`}`, opts,
      ex: steps(['Bireysel talebi q için çöz', `$q = \\frac{${a} - P}{${b}}$`], ['Yatay topla (N tüketici)', `$Q = ${N}\\cdot\\frac{${a} - P}{${b}} = ${g0(N * a / b)} - ${g0(slope)}P$`], askE ? ['Esneklik', `$|\\varepsilon| = \\frac{dQ}{dP}\\cdot\\frac{P}{Q}$ (mutlak) $= ${g0(slope)}\\times\\frac{${P0}}{${g0(Q0)}} = ${g0(e, 3)}$`] : ['Fiyatı koy', `$Q = ${g0(N * a / b)} - ${g0(slope)}\\times ${P0} = ${g0(Q0)}$`]) + (askE ? `\n\nTüketici sayısı esnekliği değiştirmez: $|\\varepsilon| = P/(${a} - P)$. Slayttaki örnek (P = 3 − 4q, 100 kişi): $Q = 75 - 25P$, $|\\varepsilon| = P/(3 - P)$.` : '') + why(opts, W, num(3)) + fast(askE ? 'Doğrusal talepte |ε| = P/(a − P): tüketici sayısı ve b sadeleşir.' : 'Q = N(a − P)/b.') };
  };
  G.costCalc = () => {
    const F = pick([10, 20, 30, 40, 50]), m1 = R(1, 3), m2 = m1 + R(1, 2), n1 = pick([20, 30, 40]), n2 = pick([8, 10]), q = n1 + R(1, n2);
    const TC = F + m1 * n1 + m2 * (q - n1), v = R(0, 3);
    const lab = ['total cost', 'average cost', 'average variable cost', 'marginal cost of the last unit'][v];
    const ans = [TC, TC / q, (TC - F) / q, m2][v];
    const W = [[F + m1 * q, 'bütün birimler ucuz maliyetle sayılmış.'], [TC / q, 'ortalama (toplam) maliyet.'], [(TC - F) / q, 'ortalama değişken maliyet.'], [m2, 'son birimin maliyeti (MC).'], [TC, 'toplam maliyet.'], [TC - F, 'değişken maliyet.'], [m1, 'ilk birimlerin MC\'si; son birim daha pahalı.'], [F / q, 'ortalama sabit maliyet.']].filter(w => Math.abs(w[0] - ans) > 1e-9);
    const opts = nopts(ans, W.map(w => w[0]), 2);
    return { en: `A factory leases a machine for ${F} euros a week. The first ${n1} units cost ${m1} euros each to produce (materials and weekday labor); each additional unit costs ${m2} euros (weekend wages). The factory produces ${q} units. What is the ${lab}?`, tr: `Makine kirası ${F}. İlk ${n1} birim ${m1}, sonrakiler ${m2} euro. Üretim ${q}. ${['Toplam maliyet', 'Ortalama maliyet', 'Ortalama değişken maliyet', 'Son birimin marjinal maliyeti'][v]} kaçtır?`, opts,
      ex: steps(['Sabit ve değişken', `FC = ${F} (kira, üretimden bağımsız). VC = $${m1}\\times${n1} + ${m2}\\times${q - n1} = ${TC - F}$.`], ['Toplam', `TC = FC + VC = $${F} + ${TC - F} = ${TC}$.`], v === 1 && ['Ortalama', `AC = TC/q = $${TC}/${q} = ${g0(TC / q)}$`], v === 2 && ['Ortalama değişken', `AVC = VC/q = $${TC - F}/${q} = ${g0((TC - F) / q)}$`], v === 3 && ['Marjinal', `${q}. birim ${n1}'den sonra üretiliyor: MC = ${m2}.`]) + `\n\nSlayttaki tişört fabrikası: kira 20, 40 birimde TC = 100, AC = 2.5, AVC = 2, MC = 2.` + why(opts, W, num(2)) + fast('TC = FC + Σ(birim maliyetler); AC = TC/q; MC = son birimin ek maliyeti.') };
  };
  G.stepSupply = () => {
    const m = [R(1, 3)]; m.push(m[0] + R(1, 2)); m.push(m[1] + R(1, 2));
    const n = [pick([30, 40]), pick([6, 8, 10]), pick([6, 8, 10])], cap = [n[0], n[0] + n[1], n[0] + n[1] + n[2]];
    const k = R(0, 2), P = m[k] + 0.5;
    const ans = cap[k];
    const W = [[cap[2], 'tam kapasite; ama fiyat en pahalı birimlerin MC\'sini karşılamıyor.'], [k ? cap[k - 1] : cap[1], 'bir basamak eksik ya da fazla.'], [n[k], 'yalnızca o basamaktaki birim sayısı.'], [k < 2 ? cap[k + 1] : cap[0], 'fiyatın üstündeki MC basamağı da sayılmış.']];
    const opts = nopts(ans, W.map(w => w[0]), 0);
    return { en: `A price-taking firm's marginal cost is ${m[0]} for the first ${n[0]} units, ${m[1]} for units ${n[0] + 1}–${cap[1]} and ${m[2]} for units ${cap[1] + 1}–${cap[2]} (capacity). The buyer pays ${g0(P)} per unit and buys any amount. How many units does the firm produce?`, tr: `MC: ilk ${n[0]} birim ${m[0]}, ${n[0] + 1}–${cap[1]} arası ${m[1]}, ${cap[1] + 1}–${cap[2]} arası ${m[2]}. Fiyat ${g0(P)}. Firma kaç birim üretir?`, opts,
      ex: steps(['Kural: P ≥ MC olan her birimi üret', `Fiyat ${g0(P)}. MC'si ${m.filter(x => x <= P).join(', ')} olan birimler kârlı; ${m.filter(x => x > P).join(', ') || '—'} olanlar zararlı.`], ['Say', `Üretim = ${ans} birim.`]) + `\n\nSlayttaki örnek: MC 2 / 3 / 4, fiyat 3.5 → 48 tişört. Tam kapasite için en az P = 4 gerekir (ve uzun dönemde P ≥ AC).` + why(opts, W, num(0)) + fast('Fiyatın altında kalan MC basamaklarının sonuna kadar üret.') };
  };
  G.acTable = () => {
    const q = pick([100, 150, 200, 250, 300]), a = 1;   // AC(q) = q → TC = q²
    const mcq = q * q - (q - 1) * (q - 1), mcq1 = (q + 1) * (q + 1) - q * q, v = R(0, 1);
    if (v === 0) {
      const P = pick([q + 50, 2 * q - 10, mcq1 + R(1, 30), mcq1 - R(1, 20)]); const yes = P > mcq1;
      const opts = yes ? ['Yes, because the price exceeds the marginal cost of the next unit (' + mcq1 + ')', 'No, because the price is below the average cost', 'No, because the price is below the marginal cost of the next unit', 'Yes, because the price exceeds the average cost'] : ['No, because the marginal cost of the next unit (' + mcq1 + ') exceeds the price', 'Yes, because the price exceeds the average cost of ' + (q + 1), 'Yes, because the price exceeds the marginal cost of the current unit', 'No, because average cost is rising'];
      const M = {}; M[opts[1]] = 'ortalama maliyete bakılmış; ek birim kararı MC\'ye bakarak verilir.'; M[opts[2]] = yes ? 'sonraki birimin MC\'si fiyattan düşük, bu ifade yanlış.' : 'mevcut birimin MC\'si değil, sonraki birimin MC\'si önemli.'; M[opts[3]] = yes ? 'sonuç doğru ama gerekçe yanlış: karar MC\'ye göre.' : 'AC artıyor olsa bile ölçüt MC ile fiyatın karşılaştırması.';
      return { en: `Average cost is ${q - 1} at ${q - 1} units, ${q} at ${q} units and ${q + 1} at ${q + 1} units. You produce ${q} units. Should you produce one more unit if you can sell it at a price of ${P}?`, tr: `AC: ${q - 1} birimde ${q - 1}, ${q} birimde ${q}, ${q + 1} birimde ${q + 1}. ${q} üretiyorsun. Bir birim daha ${P}'ye satılabiliyorsa üretmeli misin?`, opts,
        ex: steps(['Toplam maliyetleri bul', `TC = AC × q: $TC(${q}) = ${q * q}$, $TC(${q + 1}) = ${(q + 1) * (q + 1)}$.`], ['Sonraki birimin MC\'si', `$MC = ${(q + 1) * (q + 1)} - ${q * q} = ${mcq1}$`], ['Karşılaştır', `Fiyat ${P} ${yes ? '>' : '<'} ${mcq1}: ${yes ? 'üret' : 'üretme'}.`]) + whyT(opts, M) + fast('AC(q) = q ise TC = q², MC(q+1) = 2q + 1.') };
    }
    const ans = `${mcq} ≤ P ≤ ${mcq1}`, opts = [ans, `${q - 1} ≤ P ≤ ${q + 1}`, `P ≥ ${q}`, `${q} ≤ P ≤ ${mcq1}`];
    const M = {}; M[opts[1]] = 'ortalama maliyetlerle aralık kurulmuş; kâr en çoklamada MC kullanılır.'; M[opts[2]] = 'yalnızca P ≥ AC koşulu (kâr pozitif); optimum miktarı belirlemez.'; M[opts[3]] = 'alt sınır AC alınmış; alt sınır q. birimin MC\'si olmalı.';
    return { en: `Average cost is ${q - 1} at ${q - 1} units, ${q} at ${q} units and ${q + 1} at ${q + 1} units. For a competitive firm, what is the range of prices for which ${q} units is the profit-maximizing output?`, tr: `AC tablosu: ${q - 1}, ${q}, ${q + 1}. Rekabetçi firma için ${q} birimin kâr en çoklayan miktar olduğu fiyat aralığı nedir?`, opts,
      ex: steps(['Toplam maliyetler', `$TC(${q - 1}) = ${(q - 1) * (q - 1)}$, $TC(${q}) = ${q * q}$, $TC(${q + 1}) = ${(q + 1) * (q + 1)}$`], ['İki marjinal maliyet', `${q}. birim: ${mcq}; ${q + 1}. birim: ${mcq1}.`], ['Koşul', `${q}. birimi üretmek kârlı olmalı (P ≥ ${mcq}), ${q + 1}. birim kârsız olmalı (P ≤ ${mcq1}).`]) + whyT(opts, M) + fast('MC(q) ≤ P ≤ MC(q+1); AC = q ise 2q − 1 ≤ P ≤ 2q + 1.') };
  };
  G.sunk = () => {
    const S = R(2, 8), Rm = R(2, 9), B = R(3, 12); if (B === Rm || B === S + Rm) return G.sunk();
    const go = B > Rm; if (go && B >= S + Rm) return G.sunk();
    const opts = go ? [`Continue: the benefit (${B}) exceeds the remaining cost (${Rm}); the ${S} already spent is sunk`, `Stop: the total cost (${S + Rm}) exceeds the benefit (${B})`, `Stop: the money already spent (${S}) is lost anyway`, `Continue only if the benefit exceeds ${S + Rm}`] : [`Stop: the remaining cost (${Rm}) exceeds the benefit (${B}); the ${S} already spent is sunk`, `Continue: otherwise the ${S} already spent is wasted`, `Continue: the benefit (${B}) exceeds the amount already spent (${S})`, `Stop only if the total cost (${S + Rm}) exceeds the benefit`];
    const M = {}; opts.slice(1).forEach(o => { M[o] = /total cost|exceeds \d+$|exceeds the benefit$/.test(o) ? 'batık maliyet (' + S + ') hesaba katılmış; kararda yalnızca bundan sonraki maliyet önemli.' : 'geçmişte harcanan para geri gelmez; karara etkisi olmamalı.'; });
    return { en: `A project has already cost ${S} billion dollars, which cannot be recovered. Finishing it requires ${Rm} billion more, and the completed project yields a benefit of ${B} billion. What should be done?`, tr: `Projeye ${S} milyar harcandı (geri gelmez). Bitirmek için ${Rm} milyar daha gerek, fayda ${B} milyar. Ne yapılmalı?`, opts,
      ex: steps(['Batık maliyeti ayır', `${S} milyar geri alınamaz: batık maliyet (sunk cost). Hangi karar verilirse verilsin harcanmış olarak kalır.`], ['Bundan sonrasını karşılaştır', `Ek fayda ${B}, ek maliyet ${Rm}: ${go ? 'devam et' : 'durdur'}.`]) + `\n\nSlayttaki örnekler: baraj (kalan maliyet 5 < yeni enerji 7: devam) ve Maçka–Maslak tüneli (fayda 5 < kalan 6: yapma, 3 batık).` + whyT(opts, M) + fast('Geçmişi unut: kalan maliyet < fayda ise devam.') };
  };
  G.mrElast = () => {
    const P = pick([10, 12, 20, 30, 40, 60, 100]), e = pick([1.25, 1.5, 2, 2.5, 4, 5]);
    const MR = P * (1 - 1 / e), W = [[P * (1 + 1 / e), 'işaret ters; MR fiyattan küçüktür.'], [P / e, 'yalnızca P/|ε|.'], [P * (1 - e), 'formül ters kurulmuş.']];
    const opts = nopts(MR, W.map(w => w[0]), 2);
    return { en: `At the current price of ${P}, the absolute price elasticity of demand is ${e}. What is marginal revenue?`, tr: `Fiyat ${P}, talep esnekliği (mutlak) ${e}. Marjinal gelir kaçtır?`, opts,
      ex: steps(['Formül', '$MR = P\\left(1 - \\frac{1}{|\\varepsilon|}\\right)$ (Cabral denklem 2.2)'], ['Sayıları koy', `$MR = ${P}\\times(1 - 1/${e}) = ${P}\\times${g0(1 - 1 / e, 3)} = ${g0(MR)}$`]) + `\n\nMR < P: fazla satmak için fiyat bütün birimlerde düşer. Tam rekabette $|\\varepsilon| \\to \\infty$, MR = P.` + why(opts, W, num(2)) + fast('MR = P(1 − 1/|ε|).') };
  };

  /* ---------- Bölüm 4: oyunlar ---------- */
  function rnd2x2() { let p; do { p = [[[R(0, 9), R(0, 9)], [R(0, 9), R(0, 9)]], [[R(0, 9), R(0, 9)], [R(0, 9), R(0, 9)]]]; } while (p[0][0][0] === p[1][0][0] || p[0][1][0] === p[1][1][0] || p[0][0][1] === p[0][1][1] || p[1][0][1] === p[1][1][1]); return p; }
  const tbl2 = (p) => `\n| | L | R |\n| T | (${p[0][0][0]}, ${p[0][0][1]}) | (${p[0][1][0]}, ${p[0][1][1]}) |\n| B | (${p[1][0][0]}, ${p[1][0][1]}) | (${p[1][1][0]}, ${p[1][1][1]}) |`;
  const RN = ['T', 'B'], CN = ['L', 'R'];
  G.nash2x2 = () => {
    const p = rnd2x2(), ne = [];
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) if (p[i][j][0] > p[1 - i][j][0] && p[i][j][1] > p[i][1 - j][1]) ne.push(`(${RN[i]}, ${CN[j]})`);
    const lab = ne.length === 0 ? 'No Nash equilibrium in pure strategies' : ne.length === 1 ? `Only ${ne[0]}` : `Both ${ne[0]} and ${ne[1]}`;
    const all = ['Only (T, L)', 'Only (T, R)', 'Only (B, L)', 'Only (B, R)', 'Both (T, L) and (B, R)', 'Both (T, R) and (B, L)', 'No Nash equilibrium in pure strategies'];
    const opts = [lab].concat(shuffle(all.filter(x => x !== lab)).slice(0, 3));
    const checks = [];
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { const ok1 = p[i][j][0] > p[1 - i][j][0], ok2 = p[i][j][1] > p[i][1 - j][1]; checks.push(`(${RN[i]}, ${CN[j]}): 1. oyuncu ${p[i][j][0]} vs ${p[1 - i][j][0]} ${ok1 ? '✓' : '✗'}, 2. oyuncu ${p[i][j][1]} vs ${p[i][1 - j][1]} ${ok2 ? '✓' : '✗'}`); }
    const isNE = (i, j) => p[i][j][0] > p[1 - i][j][0] && p[i][j][1] > p[i][1 - j][1];
    const dev = (i, j) => { const r = []; if (!(p[i][j][0] > p[1 - i][j][0])) r.push(`1. oyuncu ${RN[1 - i]} satırına geçer (${p[1 - i][j][0]} > ${p[i][j][0]})`); if (!(p[i][j][1] > p[i][1 - j][1])) r.push(`2. oyuncu ${CN[1 - j]} sütununa geçer (${p[i][1 - j][1]} > ${p[i][j][1]})`); return r.join(', '); };
    const M = {}; opts.slice(1).forEach(o => {
      if (/^No Nash/.test(o)) { M[o] = `${ne.join(' ve ')} ${ne.length > 1 ? 'hücrelerinde' : 'hücresinde'} kimse tek başına sapmak istemiyor: saf stratejili denge var.`; return; }
      const cl = [...o.matchAll(/\((\w), (\w)\)/g)].map(x => [RN.indexOf(x[1]), CN.indexOf(x[2])]), r = [];
      cl.forEach(([i, j]) => { if (!isNE(i, j)) r.push(`(${RN[i]}, ${CN[j]}) denge değil: ${dev(i, j)}`); });
      ne.forEach(c => { if (!cl.some(([i, j]) => `(${RN[i]}, ${CN[j]})` === c)) r.push(`${c} de denge ama bu şık onu dışarıda bırakıyor`); });
      M[o] = r.join('; ') + '.';
    });
    return { en: 'In the game below, the first number is player 1\'s payoff (rows) and the second is player 2\'s payoff (columns). What are the Nash equilibria in pure strategies?' + tbl2(p), tr: 'Satır oyuncusu 1, sütun oyuncusu 2; ilk sayı 1\'in getirisi. Saf stratejili Nash dengeleri hangileri?', opts,
      ex: steps(['Her hücreyi sına', 'Nash: hücrede 1. oyuncunun getirisi aynı sütunda öteki satırdakinden, 2. oyuncununki aynı satırda öteki sütundakinden büyük olmalı.\n' + checks.map(c => '• ' + c).join('\n')], ['Sonuç', lab === all[6] ? 'Hiçbir hücrede iki ✓ yok: saf stratejili denge yok.' : `İki ✓ olan hücre(ler): ${ne.join(' ve ')}.`]) + whyT(opts, M) + fast('Her sütunda 1. oyuncunun en büyüğünün, her satırda 2. oyuncunun en büyüğünün altını çiz; iki çizgili hücre Nash.') };
  };
  G.dom2x2 = () => {
    const p = rnd2x2(), who = R(1, 2);
    let d;
    if (who === 1) d = p[0][0][0] > p[1][0][0] && p[0][1][0] > p[1][1][0] ? 'T' : p[1][0][0] > p[0][0][0] && p[1][1][0] > p[0][1][0] ? 'B' : null;
    else d = p[0][0][1] > p[0][1][1] && p[1][0][1] > p[1][1][1] ? 'L' : p[0][1][1] > p[0][0][1] && p[1][1][1] > p[1][0][1] ? 'R' : null;
    const names = who === 1 ? ['T', 'B'] : ['L', 'R'];
    const lab = d ? `Yes, ${d}` : 'No dominant strategy';
    const opts = [lab].concat([`Yes, ${names[0]}`, `Yes, ${names[1]}`, 'No dominant strategy'].filter(x => x !== lab)).concat(['Yes, both strategies']).slice(0, 4);
    const cmp = who === 1 ? `L sütununda T ${p[0][0][0]} / B ${p[1][0][0]}; R sütununda T ${p[0][1][0]} / B ${p[1][1][0]}` : `T satırında L ${p[0][0][1]} / R ${p[0][1][1]}; B satırında L ${p[1][0][1]} / R ${p[1][1][1]}`;
    const M = {}; opts.slice(1).forEach(o => { M[o] = o === 'Yes, both strategies' ? 'iki strateji birbirine aynı anda baskın olamaz.' : 'karşılaştırma bu stratejinin her durumda daha iyi olmadığını gösteriyor.'; });
    return { en: `In the game below (first number: player 1, rows; second: player 2, columns), does player ${who} have a dominant strategy?` + tbl2(p), tr: `${who}. oyuncunun baskın stratejisi var mı?`, opts,
      ex: steps(['Rakibin her hamlesine karşı karşılaştır', cmp + '.'], ['Sonuç', d ? `${d} her durumda daha iyi: baskın strateji.` : 'Bir durumda biri, öteki durumda öteki daha iyi: baskın strateji yok.']) + whyT(opts, M) + fast('Baskın strateji: rakibin bütün hamlelerinde daha büyük getiri. Tek bir karşı örnek yeter.') };
  };
  G.entry = () => {
    const out2 = R(30, 60), fight1 = -R(5, 15), fight2v = R(0, 1) ? -R(2, 15) : R(25, 45), acc1 = R(5, 15), acc2 = R(10, 25);
    if (fight2v === acc2) return G.entry();
    const fights = fight2v > acc2;
    const ans = fights ? 'Firm 1 stays out (the threat to fight is credible)' : 'Firm 1 enters and firm 2 accommodates';
    const opts = [ans, fights ? 'Firm 1 enters and firm 2 accommodates' : 'Firm 1 stays out because firm 2 threatens to fight', 'Firm 1 enters and firm 2 fights', fights ? 'Firm 1 enters because the threat is not credible' : 'Firm 1 stays out (the threat to fight is credible)'];
    const M = {}; M[opts[1]] = fights ? '2. oyuncu girişten sonra savaşmayı tercih eder (' + fight2v + ' > ' + acc2 + '): uzlaşma beklentisi yanlış.' : 'tehdit inanılmaz: girişten sonra savaşmak 2\'ye ' + fight2v + ', uzlaşmak ' + acc2 + ' getirir.'; M[opts[2]] = fights ? 'savaşılacağını bilen 1 girmez (' + fight1 + ' < 0).' : '2 girişten sonra savaşmaz.'; M[opts[3]] = fights ? 'tehdit inanılır, çünkü savaşmak 2\'ye daha çok getirir.' : 'tehdit inanılır değil.';
    return { en: `Firm 1 decides whether to enter. If it stays out, payoffs are (0, ${out2}). If it enters, firm 2 decides to fight, giving (${fight1}, ${fight2v}), or to accommodate, giving (${acc1}, ${acc2}). The first number is firm 1's payoff. What is the backward-induction outcome?`, tr: `Girmezse (0, ${out2}); girerse 2 savaşır (${fight1}, ${fight2v}) ya da uzlaşır (${acc1}, ${acc2}). Geriye doğru tümevarım sonucu nedir?`, opts,
      ex: steps(['Sondan başla: 2. oyuncu', `Giriş olduysa 2 savaşırsa ${fight2v}, uzlaşırsa ${acc2} alır → ${fights ? 'savaşır' : 'uzlaşır'}.`], ['1. oyuncu', `Girerse ${fights ? fight1 : acc1}, girmezse 0 alır → ${fights ? 'girmez' : 'girer'}.`]) + `\n\nSlayttaki oyun (Şekil 4.6): savaşmak 2'ye −10, uzlaşmak 20 → tehdit inanılmaz, sonuç (gir, uzlaş) = 10, 20.` + whyT(opts, M) + fast('Son karar vereni çöz, sonra ondan önceki oyuncuya geç.') };
  };
  G.twoStage = () => {
    const coop = R(5, 8), dev = coop + R(1, 3), good = R(3, coop - 1), bad = R(0, good - 1);
    const follow = coop + good, deviate = dev + bad, ok = follow >= deviate, ask = R(0, 1);
    const ans = ask ? follow : deviate;
    const W = [[ask ? deviate : follow, ask ? 'sapmanın toplamı.' : 'uymanın toplamı.'], [coop + bad, 'ikinci turda kötü denge uymaya eklenmiş.'], [dev + good, 'sapınca da iyi denge oynanacağı sanılmış (ceza unutulmuş).']];
    const opts = nopts(ans, W.map(w => w[0]), 0);
    return { en: `A stage game is played twice. Cooperating in round 1 gives ${coop} to each player; a player who deviates in round 1 gets ${dev}. The stage game has two Nash equilibria, paying ${good} (good) and ${bad} (bad) to each player. Strategy: cooperate in round 1; in round 2 play the good equilibrium if both cooperated, otherwise the bad one. What is a player's total payoff if she ${ask ? 'follows this strategy' : 'deviates in round 1'}?`, tr: `Aşama oyunu iki kez. 1. turda uyum ${coop}, sapma ${dev}; ikinci turda iyi denge ${good}, kötü ${bad}. ${ask ? 'Uyan' : 'Sapan'} oyuncunun toplamı kaçtır?`, opts,
      ex: steps(['Uyarsa', `${coop} + ${good} = ${follow}`], ['Saparsa', `${dev} (bugün) + ${bad} (ceza: kötü denge) = ${deviate}`], ['Karşılaştır', `${follow} ${ok ? '≥' : '<'} ${deviate}: ${ok ? 'uymak denge' : 'işbirliği sürmez'}.`]) + `\n\nSlayttaki örnek: 5 + 4 = 9 > 6 + 1 = 7.` + why(opts, W, num(0)) + fast('Uy: işbirliği + iyi denge; sap: sapma kazancı + kötü denge.') };
  };

  /* ---------- Bölüm 5: tekel ---------- */
  G.monoLin = () => {
    const b = pick([1, 2, 0.5]), c = R(1, 10), a = c + 2 * b * R(2, 12) * (b === 0.5 ? 2 : 1), v = R(0, 3);
    const Q = (a - c) / (2 * b), P = (a + c) / 2, pi = (P - c) * Q, dwl = (P - c) * ((a - c) / b - Q) / 2;
    const lab = ['quantity', 'price', 'profit', 'deadweight loss'][v], ans = [Q, P, pi, dwl][v];
    const W = [[(a - c) / b, 'rekabetçi miktar (P = MC); tekel yarısını üretir.'], [c, 'rekabetçi fiyat (MC).'], [P * Q, 'toplam gelir; maliyet düşülmemiş.'], [Q, 'tekel miktarı.'], [P, 'tekel fiyatı.'], [pi, 'tekel kârı.'], [dwl, 'ölü ağırlık kaybı.'], [(a - c) / (3 * b), 'Cournot firma miktarı.'], [dwl * 2, 'üçgenin ½\'si unutulmuş.']].filter(w => Math.abs(w[0] - ans) > 1e-9);
    const opts = nopts(ans, W.map(w => w[0]), 2, { min: 0.01 });
    return { en: `A monopolist faces inverse demand $P = ${a} - ${b === 1 ? '' : b}Q$ and has constant marginal cost ${c} (no fixed cost). What is the monopoly ${lab}?`, tr: `Tekel: $P = ${a} - ${b === 1 ? '' : b}Q$, MC = ${c}. Tekel ${['miktarı', 'fiyatı', 'kârı', 'ölü ağırlık kaybı'][v]} kaçtır?`, opts,
      ex: steps(['MR', `$MR = ${a} - ${g0(2 * b)}Q$ (aynı kesişim, iki kat eğim)`], ['MR = MC', `$${a} - ${g0(2 * b)}Q = ${c} \\Rightarrow Q = ${g0(Q)}$`], ['Fiyat talepten', `$P = ${a} - ${g0(b)}\\times${g0(Q)} = ${g0(P)}$`], v >= 2 && ['Kâr', `$(P - MC)Q = (${g0(P)} - ${c})\\times${g0(Q)} = ${g0(pi)}$`], v === 3 && ['Ölü ağırlık kaybı', `Rekabette $Q^C = (${a} - ${c})/${g0(b)} = ${g0((a - c) / b)}$. $DWL = \\tfrac12(${g0(P)} - ${c})(${g0((a - c) / b)} - ${g0(Q)}) = ${g0(dwl)}$`]) + why(opts, W, num(2)) + fast('Q = (a − c)/(2b), P = (a + c)/2, kâr = (a − c)²/(4b), DWL = kâr/2.') };
  };
  G.monoQuad = () => {
    const b = pick([1, 2]), beta = pick([0.5, 1, 1.5]), alpha = R(2, 10), k = R(2, 8), a = alpha + 2 * (b + beta) * k, cq = (x) => x === 1 ? '' : g0(x);
    const Q = (a - alpha) / (2 * (b + beta)), P = a - b * Q, askP = R(0, 1);
    const W = askP ? [[alpha + 2 * beta * Q, 'MC\'den okunmuş; fiyat talep eğrisinden okunur.'], [a - 2 * b * Q, 'MR\'dan okunmuş.'], [(a + alpha) / 2, 'sabit MC formülü uygulanmış.']] : [[(a - alpha) / (2 * b), 'MC\'nin eğimi (2β) unutulmuş.'], [(a - alpha) / (b + 2 * beta), 'MR yerine talep kullanılmış (P = MC).'], [(a - alpha) / (2 * b + beta), 'MC eğimi 2β yerine β alınmış.']];
    const opts = nopts(askP ? P : Q, W.map(w => w[0]), 2, { min: 0.01 });
    return { en: `A monopolist faces $p(Q) = ${a} - ${b === 1 ? '' : b}Q$ and has $MC(Q) = ${alpha} + ${cq(2 * beta)}Q$. What is the profit-maximizing ${askP ? 'price' : 'quantity'}?`, tr: `$p = ${a} - ${b === 1 ? '' : b}Q$, $MC = ${alpha} + ${cq(2 * beta)}Q$. Kârı en çoklayan ${askP ? 'fiyat' : 'miktar'} kaçtır?`, opts,
      ex: steps(['MR', `$MR = ${a} - ${2 * b}Q$`], ['MR = MC', `$${a} - ${2 * b}Q = ${alpha} + ${cq(2 * beta)}Q \\Rightarrow Q^* = \\frac{${a} - ${alpha}}{${2 * b} + ${g0(2 * beta)}} = ${g0(Q)}$`], askP && ['Fiyat', `$p = ${a} - ${b}\\times${g0(Q)} = ${g0(P)}$`]) + `\n\nToplam maliyet $TC = ${alpha}Q + ${g0(beta)}Q^2$ (+ sabit); türevi MC.` + why(opts, W, num(2)) + fast('Q* = (a − α)/(2(b + β)), P* = a − bQ*.') };
  };
  G.monoElast = () => {
    const e = pick([1.5, 2, 2.5, 3, 4, 5]), MC = pick([2, 3, 4, 5, 6, 8, 10, 12]);
    const P = MC / (1 - 1 / e), W = [[MC * (1 + 1 / e), 'MC × (1 + 1/|ε|): formül yanlış.'], [MC * e, 'MC × |ε|.'], [MC / e, 'MC/|ε|.']];
    const opts = nopts(P, W.map(w => w[0]), 2);
    return { en: `A monopolist faces a constant-elasticity demand with $|\\varepsilon| = ${e}$ (for example, $Q = A/P^{${e}}$) and has constant marginal cost ${MC}. What is the profit-maximizing price?`, tr: `Sabit esneklikli talep, $|\\varepsilon| = ${e}$, MC = ${MC}. Optimal fiyat kaçtır?`, opts,
      ex: steps(['Kural', '$\\frac{P - MC}{P} = \\frac{1}{|\\varepsilon|} \\Rightarrow P = \\frac{MC}{1 - 1/|\\varepsilon|}$'], ['Sayıları koy', `$P = \\frac{${MC}}{1 - 1/${e}} = \\frac{${MC}}{${g0(1 - 1 / e, 3)}} = ${g0(P)}$`]) + `\n\nSlayttaki ödev: TC = 2Q, $Q = 10000/P^2$ → $|\\varepsilon| = 2$ sabit, P = 2/(1 − ½) = 4. Esneklik fiyatla değişmez.` + why(opts, W, num(2)) + fast('|ε| = 2 ise P = 2·MC; genel olarak P = MC·|ε|/(|ε| − 1).') };
  };
  G.domFirm = () => {
    for (let t = 0; t < 50; t++) {
      const A = pick([16, 18, 20, 24, 28, 30]), B = pick([1, 2]), cf = R(3, 6), K = R(1, 4), cd = R(0, 2);
      if (A / B <= cf + 1) continue;
      // seçenek 1: P ≤ cf, rakipler 0 satar (P = cf'de satmadıkları varsayılır)
      const pu1 = (A / B + cd) / 2, p1 = Math.min(pu1, cf), q1 = A - B * p1, pi1 = (p1 - cd) * q1;
      // seçenek 2: P > cf, kalan talep A − K − BP
      const pu2 = ((A - K) / B + cd) / 2; if (pu2 <= cf + 0.01) continue;
      const q2 = A - K - B * pu2, pi2 = (pu2 - cd) * q2;
      if (Math.abs(pi1 - pi2) < 0.5) continue;
      const best = pi1 > pi2 ? p1 : pu2;
      const W = [[pi1 > pi2 ? pu2 : p1, pi1 > pi2 ? 'rakiplerle paylaşma seçeneğinin fiyatı; daha az kârlı.' : 'rakipleri atma seçeneğinin fiyatı; daha az kârlı.'], [pu1, 'bütün piyasa talebinde tekel fiyatı; ama bu fiyat rakiplerin maliyetinin üstünde, rakipler satar.'], [cf, 'rakiplerin maliyeti.'], [cd, 'baskın firmanın maliyeti (P = MC).']];
      const opts = nopts(best, W.map(w => w[0]), 2);
      return { en: `Market demand is $Q = ${A} - ${B === 1 ? '' : B}P$. A competitive fringe has constant marginal cost ${cf} and total capacity ${K}; it sells its whole capacity whenever the price exceeds ${cf} and nothing otherwise. The dominant firm has constant marginal cost ${cd}. What price maximizes the dominant firm's profit?`, tr: `Talep $Q = ${A} - ${B === 1 ? '' : B}P$; küçük rakipler MC = ${cf}, kapasite ${K}; baskın firma MC = ${cd}. Baskın firmanın en iyi fiyatı kaçtır?`, opts,
        ex: steps(['Seçenek 1: rakipleri at (P ≤ ' + cf + ')', `Bütün talep: $P = ${g0(A / B)} - ${B === 1 ? 'Q' : 'Q/' + B}$. Kısıtsız optimum $P = (${g0(A / B)} + ${cd})/2 = ${g0(pu1)}$${pu1 > cf ? ` > ${cf}, sınırda kal: P = ${cf}` : ''}. $Q = ${g0(q1)}$, kâr $(${g0(p1)} - ${cd})\\times${g0(q1)} = ${g0(pi1)}$.`], ['Seçenek 2: paylaş (P > ' + cf + ')', `Kalan talep $Q = ${A - K} - ${B === 1 ? '' : B}P$. Optimum $P = (${g0((A - K) / B)} + ${cd})/2 = ${g0(pu2)}$, $Q = ${g0(q2)}$, kâr ${g0(pi2)}.`], ['Karşılaştır', `${g0(pi1)} ${pi1 > pi2 ? '>' : '<'} ${g0(pi2)}: P = ${g0(best)}.`]) + `\n\nSlayttaki örnek (Q = 20 − 2P, K = 2, rakip MC 4, baskın MC 1): atma 36 > paylaşma 32, P = 4.` + why(opts, W, num(2)) + fast('İki seçeneği ayrı tekel problemi gibi çöz (biri sınırda), kârları karşılaştır.') };
    }
    return G.monoLin();
  };

  /* ---------- Bölüm 6: tam rekabet ---------- */
  G.pcShort = () => {
    const a = R(1, 5), b = pick([0.05, 0.1, 0.25, 0.5]), q = pick([10, 20, 30, 40, 50, 60, 80, 100]), P = a + 2 * b * q, F = pick([20, 40, 80, 100]);
    if (b === 0.5 && q > 40) return G.pcShort();
    const pi = P * q - (F + a * q + b * q * q), ask = R(0, 1); if (Math.abs(pi) < 1e-9) return G.pcShort();
    const W = ask ? [[P * q - (a * q + b * q * q), 'sabit maliyet düşülmemiş.'], [P * q, 'yalnızca gelir.'], [(P - a) * q, 'MC yerine sabit a ile çarpılmış.']] : [[(P - a) / b, '2b yerine b ile bölünmüş (MC = a + 2bq).'], [(P - a) / (4 * b), '4b ile bölünmüş.'], [P / (2 * b), 'a düşülmemiş.']];
    const opts = nopts(ask ? pi : q, W.map(w => w[0]), 2);
    return { en: `A competitive firm has $TC(q) = ${F} + ${a === 1 ? '' : a}q + ${b}q^2$. The market price is ${g0(P)}. ${ask ? 'What is the firm\'s profit at its optimal output?' : 'What output maximizes profit?'}`, tr: `$TC = ${F} + ${a === 1 ? '' : a}q + ${b}q^2$, fiyat ${g0(P)}. ${ask ? 'Optimal üretimde kâr kaçtır?' : 'Kârı en çoklayan miktar kaçtır?'}`, opts,
      ex: steps(['MC', `$MC = ${a} + ${g0(2 * b)}q$`], ['P = MC', `$${a} + ${g0(2 * b)}q = ${g0(P)} \\Rightarrow q = ${q}$`], ask && ['Kâr', `$${g0(P)}\\times${q} - (${F} + ${a}\\times${q} + ${b}\\times${q}^2) = ${g0(P * q)} - ${g0(F + a * q + b * q * q)} = ${g0(pi)}$`]) + `\n\nSlayttaki örnek: TC = F + q + 0.05q², P = 11 → q = 100.` + why(opts, W, num(2)) + fast('q = (P − a)/(2b).') };
  };
  G.pcMarket = () => {
    const a = 1, b = 0.05, N = pick([100, 200, 300, 400]), Pst = R(4, 8), A = N * 10 * (Pst - 1) + 50 * Pst, B = 50;
    const Q = A - B * Pst, q = 10 * Pst - 10, ask = R(0, 2);
    const ans = [Pst, Q, q][ask];
    const W = [[Pst + 1, 'arz denkleminde −N\'li sabit unutulmuş.'], [Q, 'piyasa miktarı.'], [q, 'firma miktarı.'], [Q / 10, 'birim karışıklığı.'], [Pst - 1, 'yakın bir hata.']].filter(w => Math.abs(w[0] - ans) > 1e-9);
    const opts = nopts(ans, W.map(w => w[0]), 2, { min: 0.5 });
    return { en: `There are ${N} identical competitive firms, each with $TC(q) = F + q + 0.05q^2$. Market demand is $Q_D = ${A} - ${B}P$. In the short-run equilibrium, what is ${['the price', 'the market quantity', 'each firm\'s output'][ask]}?`, tr: `${N} özdeş firma, $TC = F + q + 0.05q^2$; talep $Q_D = ${A} - ${B}P$. Kısa dönem dengede ${['fiyat', 'piyasa miktarı', 'firma başına üretim'][ask]} kaçtır?`, opts,
      ex: steps(['Firma arzı', '$MC = 1 + 0.1q = P \\Rightarrow q(P) = 10P - 10$ (P > 1)'], ['Piyasa arzı', `$Q_S = ${N}(10P - 10) = ${10 * N}P - ${10 * N}$`], ['Arz = talep', `$${10 * N}P - ${10 * N} = ${A} - ${B}P \\Rightarrow P = ${Pst}$`], ['Miktarlar', `$Q = ${A} - ${B}\\times${Pst} = ${Q}$, firma başına $10\\times${Pst} - 10 = ${q}$`]) + `\n\nSlayttaki örnek: 200 firma, $Q_D = 10300 - 50P$ → P = 6, Q = 10000, q = 50.` + why(opts, W, num(2)) + fast('Firma arzını N ile çarp, talebe eşitle.') };
  };
  G.pcLong = () => {
    const pairs = [[80, 0.05, 40], [125, 0.05, 50], [45, 0.05, 30], [100, 0.25, 20], [64, 0.25, 16], [90, 0.1, 30], [160, 0.1, 40], [250, 0.1, 50], [40, 0.1, 20]];
    const [F, b, qL] = pick(pairs), a = R(1, 4), PL = a + 2 * Math.sqrt(F * b), A = pick([5000, 8000, 10000, 10300, 12000]), Bd = 50;
    const Q = A - Bd * PL, N = Math.floor(Q / qL), ask = R(0, 2);
    const ans = [qL, PL, N][ask];
    const W = ask === 0 ? [[Math.sqrt(F / (2 * b)), 'karekökte 2b kullanılmış.'], [F / b, 'karekök alınmamış.'], [F * b, 'çarpılmış.']] : ask === 1 ? [[a + Math.sqrt(F * b), 'F·b\'nin 2 katı alınmamış.'], [a + 2 * b * qL + F, 'AC yerine MC + F.'], [F / qL, 'yalnızca ortalama sabit maliyet.']] : [[Math.ceil(Q / qL), 'yukarı yuvarlanmış; firma sayısı aşağı yuvarlanır.'], [Math.round(A / qL), 'fiyat düşülmeden talep kesişimi kullanılmış.'], [N * 2, 'yakın hata.']];
    const opts = nopts(ans, W.map(w => w[0]), 2, { min: 0.5 });
    return { en: `Each firm has $TC(q) = ${F} + ${a === 1 ? '' : a}q + ${b}q^2$ and there is free entry. ${ask === 2 ? `Market demand is $Q_D = ${A} - ${Bd}P$. How many firms are active in the long-run equilibrium?` : `What is the long-run equilibrium ${ask ? 'price' : 'output of each firm'}?`}`, tr: `$TC = ${F} + ${a === 1 ? '' : a}q + ${b}q^2$, serbest giriş. ${ask === 2 ? `Talep $Q_D = ${A} - ${Bd}P$. Uzun dönemde kaç firma olur?` : `Uzun dönem ${ask ? 'fiyatı' : 'firma üretimi'} kaçtır?`}`, opts,
      ex: steps(['AC\'nin en düşük noktası', `$AC = \\frac{${F}}{q} + ${a} + ${b}q$; türev $-\\frac{${F}}{q^2} + ${b} = 0 \\Rightarrow q = \\sqrt{${F}/${b}} = ${qL}$`], ['Uzun dönem fiyat', `$P = \\min AC = \\frac{${F}}{${qL}} + ${a} + ${b}\\times${qL} = ${g0(PL)}$`], ask === 2 && ['Firma sayısı', `$Q = ${A} - ${Bd}\\times${g0(PL)} = ${g0(Q)}$; $${g0(Q)}/${qL} = ${g0(Q / qL)}$ → ${N} firma (aşağı yuvarla).`]) + `\n\nSlayttaki örnek: F = 80 → q = 40, P = 5; talep 10300 − 50P → 10050/40 = 251.25 → 251 firma.` + why(opts, W, num(2)) + fast('q = √(F/b), P = a + 2√(Fb).') };
  };
  G.diffCost = () => {
    const c = pick([5, 10, 15]), w = pick([1, 2, 4]), P = c + 2 * w * pick([3, 4, 5, 6]) , qR = (P - c) / (2 * w), qM = (P - c) / w, M = (P - c) * qR - w * qR * qR;
    const v = R(0, 2), ans = [qM, M, M + (P - c) * qM - (w / 2) * qM * qM - M][v];
    const lab = ['the special firm\'s output', 'the manager salary M that makes this price the long-run equilibrium price', 'the special firm\'s profit (rent) when M takes that value'][v];
    const W = [[qR, 'normal firmanın üretimi (ücret w).'], [M * 2, 'yakın hata.'], [(P - c) * qM, 'maliyetin wq² kısmı düşülmemiş.'], [qM * 2, 'ücret yarıya inerken üretim 4 katına çıkarılmış.']].filter(x => Math.abs(x[0] - ans) > 1e-9);
    const opts = nopts(ans, W.map(x => x[0]), 2, { min: 0.5 });
    return { en: `Every firm has $TC(q) = M + ${c}q + wq^2$, where M is the manager's salary and w the wage. The price is ${P} and the market wage is ${w}. One special firm pays only half the wage (${g0(w / 2)}) because workers like its manager. What is ${lab}?`, tr: `$TC = M + ${c}q + wq^2$, P = ${P}, ücret ${w}; özel firma yarı ücret öder. ${['Özel firmanın üretimi', 'Bu fiyatı uzun dönem fiyatı yapan M', 'O M değerinde özel firmanın kârı (rant)'][v]} kaçtır?`, opts,
      ex: steps(['Normal firma', `$MC = ${c} + ${2 * w}q = ${P} \\Rightarrow q = ${g0(qR)}$; kâr $= ${P}\\times${g0(qR)} - M - ${c}\\times${g0(qR)} - ${w}\\times${g0(qR)}^2 = ${g0(M)} - M$`], ['Özel firma', `$MC = ${c} + ${g0(w)}q = ${P} \\Rightarrow q = ${g0(qM)}$`], ['Uzun dönem', `Normal firmalar sıfır kâr etmeli: M = ${g0(M)}. Özel firmanın kârı $${P}\\times${g0(qM)} - ${g0(M)} - ${c}\\times${g0(qM)} - ${g0(w / 2)}\\times${g0(qM)}^2 = ${g0((P - c) * qM - (w / 2) * qM * qM - M)}$: maliyet üstünlüğünden gelen rant.`]) + `\n\nSlayttaki Merlin örneği: P = 30, w = 2 → normal q = 5, Merlin q = 10; M = 50, Merlin'in rantı 50.` + why(opts, W, num(2)) + fast('MC = P her firma için ayrı; marjinal firma P = AC ile sıfır kâr eder, ucuz firma rant alır.') };
  };
  G.monoComp = () => {
    const a = 1, b = 0.05, F = pick([20, 40, 60]), d = pick([7, 10, 13, 16]), e = 0.1;
    const q = (d - a) / (2 * e + 2 * b), P = d - e * q, AC = F / q + a + b * q, pi = (P - AC) * q, ask = R(0, 2); if (Math.abs(pi) < 1e-6) return G.monoComp();
    const ans = [q, P, pi][ask];
    const W = [[(d - a) / (e + 2 * b), 'MR yerine talep kullanılmış (P = MC).'], [d - e * (d - a) / (e + 2 * b), 'P = MC fiyatı.'], [P * q, 'yalnızca gelir.'], [(P - a) * q, 'yalnızca değişken maliyetin bir kısmı düşülmüş.']];
    const opts = nopts(ans, W.map(w => w[0]), 2);
    return { en: `A monopolistically competitive firm has $TC(q) = ${F} + q + 0.05q^2$ and faces the demand $P = ${d} - 0.1q$. What is ${['its output', 'its price', 'its profit'][ask]} in the short run?`, tr: `Tekelci rekabet: $TC = ${F} + q + 0.05q^2$, firmanın talebi $P = ${d} - 0.1q$. Kısa dönemde ${['üretim', 'fiyat', 'kâr'][ask]} kaçtır?`, opts,
      ex: steps(['MR = MC', `$MR = ${d} - 0.2q$, $MC = 1 + 0.1q$ ⇒ $${d - 1} = 0.3q \\Rightarrow q = ${g0(q)}$`], ['Fiyat', `$P = ${d} - 0.1\\times${g0(q)} = ${g0(P)}$`], ['Kâr', `$AC = ${F}/${g0(q)} + 1 + 0.05\\times${g0(q)} = ${g0(AC)}$; kâr $(${g0(P)} - ${g0(AC)})\\times${g0(q)} = ${g0(pi)}$`]) + `\n\n${pi > 0 ? 'Kâr pozitif: uzun dönem dengesi değil; giriş olur, firmanın talebi sola kayar, kâr sıfıra iner.' : 'Kâr sıfır ya da negatif.'} Slayttaki ödev (F = 40, d = 10): q = 30, P = 7, kâr 95.` + why(opts, W, num(2)) + fast('Tekel gibi çöz: MR = MC, fiyat firmanın talebinden.') };
  };

  /* ---------- Bölüm 7: oligopol ---------- */
  G.cournot2 = () => {
    const b = pick([1, 1, 2, 0.5]), c = R(0, 8), a = c + 3 * b * R(2, 10) * (b === 0.5 ? 2 : 1), ask = R(0, 2);
    const q = (a - c) / (3 * b), P = a - 2 * b * q, pi = (P - c) * q, ans = [q, P, pi][ask];
    const W = [[(a - c) / (2 * b), 'tekel miktarı; Cournot firması daha az üretir.'], [(a - c) / (4 * b), 'tekel miktarının yarısı (gizli anlaşma).'], [c, 'Bertrand fiyatı (P = MC).'], [(a + c) / 2, 'tekel fiyatı.'], [(a - c) * (a - c) / (4 * b), 'tekel kârı.'], [2 * pi, 'iki firmanın toplam kârı.']].filter(w => Math.abs(w[0] - ans) > 1e-9);
    const opts = nopts(ans, W.map(w => w[0]), 2, { min: 0.01 });
    return { en: `Two firms compete à la Cournot. Inverse demand is $P = ${a} - ${b === 1 ? '' : b}Q$ and each firm has constant marginal cost ${c}. What is ${['each firm\'s equilibrium output', 'the equilibrium price', 'each firm\'s equilibrium profit'][ask]}?`, tr: `Cournot, $P = ${a} - ${b === 1 ? '' : b}Q$, MC = ${c}. ${['Firma miktarı', 'Denge fiyatı', 'Firma kârı'][ask]} kaçtır?`, opts,
      ex: steps(['Firma 1\'in kârı', `$\\pi_1 = (${a} - ${b === 1 ? '' : b}(q_1 + q_2))q_1 - ${c}q_1$`], ['Tepki fonksiyonu', `Türev sıfır: $q_1 = \\frac{${a} - ${c}}{${g0(2 * b)}} - \\frac{q_2}{2}$`], ['Simetrik denge', `$q_1 = q_2 = \\frac{a - c}{3b} = \\frac{${a - c}}{${g0(3 * b)}} = ${g0(q)}$`], ['Fiyat ve kâr', `$P = ${a} - ${g0(b)}\\times${g0(2 * q)} = ${g0(P)}$; kâr $(${g0(P)} - ${c})\\times${g0(q)} = ${g0(pi)}$`]) + why(opts, W, num(2)) + fast('q = (a − c)/(3b), P = (a + 2c)/3, kâr = b·q².') };
  };
  G.cournotAsym = () => {
    const c1 = R(0, 4), c2 = c1 + R(1, 3); let a = c2 + R(6, 14); a += (3 - (a + c1 + c2) % 3) % 3;
    const q1 = (a - 2 * c1 + c2) / 3, q2 = (a - 2 * c2 + c1) / 3, P = a - q1 - q2, ask = R(0, 2);
    const ans = [q1, q2, P][ask];
    const W = [[(a - c1) / 3, 'simetrik formül kendi maliyetiyle kullanılmış.'], [(a - 2 * c2 + c1) / 3, 'firma 2\'nin miktarı.'], [(a - 2 * c1 + c2) / 3, 'firma 1\'in miktarı.'], [(a + c1 + c2) / 3, 'denge fiyatı.'], [(a - c1) / 2, 'tekel miktarı.']].filter(w => Math.abs(w[0] - ans) > 1e-9);
    const opts = nopts(ans, W.map(w => w[0]), 2, { min: 0.01 });
    return { en: `Cournot duopoly with inverse demand $P = ${a} - Q$. Firm 1's marginal cost is ${c1} and firm 2's is ${c2}. What is ${['firm 1\'s output', 'firm 2\'s output', 'the equilibrium price'][ask]}?`, tr: `$P = ${a} - Q$, $c_1 = ${c1}$, $c_2 = ${c2}$. ${['Firma 1\'in miktarı', 'Firma 2\'nin miktarı', 'Denge fiyatı'][ask]} kaçtır?`, opts,
      ex: steps(['Tepki fonksiyonları', `$q_1 = \\frac{${a} - ${c1} - q_2}{2}$, $q_2 = \\frac{${a} - ${c2} - q_1}{2}$`], ['Birlikte çöz', `$q_1 = \\frac{a - 2c_1 + c_2}{3} = \\frac{${a} - ${2 * c1} + ${c2}}{3} = ${g0(q1)}$, $q_2 = \\frac{${a} - ${2 * c2} + ${c1}}{3} = ${g0(q2)}$`], ['Fiyat', `$P = ${a} - ${g0(q1)} - ${g0(q2)} = ${g0(P)}$`]) + `\n\nUcuz firma daha çok üretir. Slayttaki ödev (P = 12 − Q, c₁ = 1, c₂ = 2): q₁ = 4, q₂ = 3, P = 5.` + why(opts, W, num(2)) + fast('q_i = (a − 2c_i + c_j)/(3b), P = (a + c₁ + c₂)/3.') };
  };
  G.cournotN = () => {
    const n = R(3, 9), c = R(0, 6), a = c + (n + 1) * R(1, 4), ask = R(0, 1);
    const q = (a - c) / (n + 1), P = (a + n * c) / (n + 1), ans = ask ? P : q;
    const W = ask ? [[(a + 2 * c) / 3, 'iki firma formülü kullanılmış.'], [c, 'Bertrand / tam rekabet fiyatı.'], [(a + c) / 2, 'tekel fiyatı.']] : [[(a - c) / 3, 'iki firma formülü.'], [(a - c) / n, 'payda n + 1 yerine n.'], [n * q, 'toplam miktar.']];
    const opts = nopts(ans, W.map(w => w[0]), 2, { min: 0.01 });
    return { en: `${n} identical firms compete à la Cournot. Inverse demand is $P = ${a} - Q$ and marginal cost is ${c}. What is ${ask ? 'the equilibrium price' : 'each firm\'s output'}?`, tr: `${n} eş firma, Cournot, $P = ${a} - Q$, MC = ${c}. ${ask ? 'Denge fiyatı' : 'Firma miktarı'} kaçtır?`, opts,
      ex: steps(['Simetrik tepki', `$q = \\frac{${a} - ${c} - (n-1)q}{2} \\Rightarrow (n+1)q = ${a - c}$`], ['Çöz', `$q = \\frac{${a - c}}{${n + 1}} = ${g0(q)}$, $Q = ${g0(n * q)}$, $P = ${a} - ${g0(n * q)} = ${g0(P)}$`]) + `\n\nFirma sayısı arttıkça fiyat MC'ye yaklaşır (n → ∞: tam rekabet).` + why(opts, W, num(2)) + fast('q = (a − c)/((n+1)b), P = (a + nc)/(n+1).') };
  };
  G.bertrandAsym = () => {
    const c1 = R(1, 6), c2 = c1 + R(1, 3), A = c2 + R(8, 16), B = 1;
    const mono1 = (A + c1) / 2; if (mono1 <= c2) return G.bertrandAsym();
    const P = c2, Q = A - P, pi = (P - c1) * Q, ask = R(0, 1);
    const ans = ask ? pi : P;
    const W = ask ? [[(mono1 - c1) * (A - mono1), 'firma 1\'in tekel kârı; ama c₂\'nin üstünde fiyat koyarsa firma 2 kırar.'], [(P - c1) * Q / 2, 'pazar paylaşılmış; ucuz firma bütün pazarı alır.'], [(c2 - c1), 'birim başına marj; miktarla çarpılmamış.']] : [[c1, 'firma 1\'in maliyeti; daha yükseğe koyabilir.'], [mono1, 'firma 1\'in tekel fiyatı; firma 2 bunun altına girer.'], [(c1 + c2) / 2, 'ortalama maliyet.']];
    const opts = nopts(ans, W.map(w => w[0]), 2, { min: 0.01 });
    return { en: `Bertrand duopoly with homogeneous products and demand $Q = ${A} - P$. Firm 1's marginal cost is ${c1}, firm 2's is ${c2}. Prices can be set in very small steps. ${ask ? 'Approximately what is firm 1\'s equilibrium profit?' : 'Approximately what is the equilibrium price?'}`, tr: `Bertrand, $Q = ${A} - P$, $c_1 = ${c1}$, $c_2 = ${c2}$. ${ask ? 'Firma 1\'in yaklaşık kârı' : 'Firma 1\'in yaklaşık fiyatı'} kaçtır?`, opts,
      ex: steps(['Firma 2 maliyetinin altına inemez', `Firma 2 en az ${c2} ister. Firma 1, ${c2}'nin hemen altına fiyat koyarak bütün pazarı alır.`], ['Tekel fiyatını kontrol et', `Firma 1'in tekel fiyatı $(${A} + ${c1})/2 = ${g0(mono1)}$ > ${c2}: kısıt bağlayıcı, P ≈ ${c2}.`], ask && ['Kâr', `$(${c2} - ${c1})\\times(${A} - ${c2}) = ${g0(pi)}$`]) + `\n\nFarklı maliyette Bertrand paradoksu yumuşar: verimli firma pozitif kâr eder.` + why(opts, W, num(2)) + fast('P ≈ yüksek maliyet (c₂), kâr = (c₂ − c₁)·Q(c₂) (c₂ firma 1\'in tekel fiyatından küçükse).') };
  };
  G.capBert = () => {
    for (let t = 0; t < 40; t++) {
      const A = R(10, 24), K = R(1, 5), c = R(1, 4);
      if (A - 3 * K < c || A - 2 * K <= c) continue;
      const P = A - 2 * K, pi = (P - c) * K, ask = R(0, 1), ans = ask ? pi : P;
      const W = ask ? [[(P - c) * K * 2, 'iki firmanın toplamı.'], [(A - c) * (A - c) / 4 / 2, 'tekel kârının yarısı.'], [P * K, 'maliyet düşülmemiş.']] : [[c, 'Bertrand paradoksu (P = MC): kapasite kısıtı varken geçerli değil.'], [(A + c) / 2, 'tekel fiyatı.'], [A - K, 'tek firmanın kapasitesi düşülmüş.']];
      const opts = nopts(ans, W.map(w => w[0]), 2, { min: 0.01 });
      return { en: `Two firms set prices for a homogeneous good. Inverse demand is $P = ${A} - Q$, each firm has marginal cost ${c} and can produce at most ${K} units. In the Nash equilibrium both set the same price. What is ${ask ? 'each firm\'s profit' : 'the price'}?`, tr: `$P = ${A} - Q$, MC = ${c}, kapasite ${K}. Denge ${ask ? 'firma kârı' : 'fiyatı'} kaçtır?`, opts,
        ex: steps(['Kapasiteyi dolduran fiyat', `İki firma toplam ${2 * K} birim satabilir: $P = ${A} - ${2 * K} = ${P}$.`], ['Fiyat kırmak işe yaramaz', 'Zaten tam kapasitede; daha çok satamaz.'], ['Fiyat artırmak da yaramaz', `Rakip ${K} satar; kalan talep $P = ${A - K} - Q$, MR $= ${A - K} - 2Q$; Q = ${K}'te MR = ${A - 3 * K} ≥ MC = ${c}: üretimi kısmak kârı azaltır.`], ask && ['Kâr', `$(${P} - ${c})\\times${K} = ${pi}$`]) + `\n\nSlayttaki örnek: P = 12 − Q, K = 3, MC = 2 → P = 6, kâr 12.` + why(opts, W, num(2)) + fast('Kapasiteler küçükse P = a − 2K (kontrol: a − 3K ≥ c).') };
    }
    return G.cournot2();
  };
  G.cournotDemand = () => {
    const B = pick([2, 4, 5]), q1 = R(1, 6), q2 = R(1, 6), P = R(2, 8), A = q1 + q2 + B * P;
    const W = [[(A - q1) / B, 'yalnızca firma 1\'in miktarı düşülmüş.'], [A / B, 'miktarlar düşülmemiş.'], [A - q1 - q2, 'B\'ye bölünmemiş.']];
    const opts = nopts(P, W.map(w => w[0]), 2, { min: 0.01 });
    return { en: `Market demand is $Q(P) = ${A} - ${B}P$. In a Cournot market, firm 1 produces ${q1} and firm 2 produces ${q2}. What is the market price?`, tr: `$Q = ${A} - ${B}P$, $q_1 = ${q1}$, $q_2 = ${q2}$. Fiyat kaçtır?`, opts,
      ex: steps(['Ters talep', `$P = \\frac{${A} - Q}{${B}}$`], ['Toplam miktarı koy', `$P = \\frac{${A} - ${q1 + q2}}{${B}} = ${P}$`]) + `\n\nSlayttaki örnek: $Q = 20 - 4P$, $q_1 = 3$, $q_2 = 5$ → P = 3.` + why(opts, W, num(2)) + fast('Toplam miktarı talepte yerine koy.') };
  };
  G.compStat = () => {
    const n = pick([2, 2, 3, 4]), dc = pick([1, 2, 3, 4, 6, 9, 12]), ans = n * dc / (n + 1);
    const W = [[dc, 'maliyet artışının tamamı fiyata yansıtılmış.'], [dc / (n + 1), 'yalnızca 1/(n+1).'], [dc / 2, 'tekel oranı (½).']];
    const opts = nopts(ans, W.map(w => w[0]), 2);
    return { en: `${n} symmetric firms compete à la Cournot with linear demand. Marginal cost rises by ${dc} dollars for every firm. By how much does the equilibrium price rise?`, tr: `${n} eş Cournot firması, doğrusal talep. Herkesin MC'si ${dc} artıyor. Fiyat ne kadar artar?`, opts,
      ex: steps(['Denge fiyatı', `$P = \\frac{a + nc}{n + 1}$`], ['Türev', `$\\frac{dP}{dc} = \\frac{n}{n + 1} = ${g0(n / (n + 1), 3)}$; artış $${g0(n / (n + 1), 3)}\\times${dc} = ${g0(ans)}$`]) + `\n\nSlayttaki örnek (iki firma): $dP/dc = 2/3$; yakıt maliyeti MC'yi %40 artırırsa kitap fiyatın $\\tfrac23\\times40\\% \\approx 26.6\\%$ artacağını söyler.` + why(opts, W, num(2)) + fast('Fiyat, maliyet artışının n/(n + 1) kadarı artar (iki firmada 2/3).') };
  };

  /* ---------- Bölüm 8: gizli anlaşma ---------- */
  G.grimN = () => {
    const v = R(0, 1);
    if (v === 0) {
      const N = R(2, 12), d = 1 - 1 / N;
      const W = [[1 / N, 'firmanın payı; eşik 1 − 1/N.'], [1 - 1 / (N + 1), 'N yerine N + 1.'], [0.5, 'iki firma eşiği her N için kullanılmış.']];
      const opts = nopts(d, W.map(w => w[0]), 3, { max: 0.999 });
      return { en: `${N} firms compete in prices (Bertrand) and use grim-trigger strategies to sustain the monopoly price. What is the minimum discount factor δ for which collusion is sustainable?`, tr: `${N} firma, Bertrand, grim trigger. Gizli anlaşma için gereken en küçük δ kaçtır?`, opts,
        ex: steps(['Uymak', `Her dönem $\\pi^M/${N}$: bugünkü değer $\\frac{\\pi^M/${N}}{1 - \\delta}$.`], ['Sapmak', 'Bugün tekel kârının neredeyse tamamı $\\pi^M$, sonra hep 0.'], ['Koşul', `$\\frac{\\pi^M/${N}}{1 - \\delta} \\ge \\pi^M \\Rightarrow \\delta \\ge 1 - \\frac{1}{${N}} = ${g0(d, 3)}$`]) + why(opts, W, num(3)) + fast('δ ≥ 1 − 1/N (N = 2: ½, N = 10: 0.9).') };
    }
    const d = pick([0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95]), N = Math.floor(1 / (1 - d) + 1e-6);
    const W = [[N + 1, 'eşik tam δ\'ya eşit olduğunda bir fazla firma da sayılmış.'], [Math.round(d * 10), 'δ × 10.'], [N - 1, 'bir eksik.']];
    const opts = nopts(N, W.map(w => w[0]), 0, { min: 2 });
    return { en: `Firms compete in prices and use grim-trigger strategies. The discount factor is ${d}. What is the largest number of firms for which collusion at the monopoly price is sustainable?`, tr: `δ = ${d}. Gizli anlaşmanın sürdüğü en büyük firma sayısı kaçtır?`, opts,
      ex: steps(['Koşul', `$\\delta \\ge 1 - 1/N \\Leftrightarrow N \\le \\frac{1}{1 - \\delta} = \\frac{1}{${g0(1 - d)}} = ${g0(1 / (1 - d), 3)}$`], ['Tam sayı', `En çok ${N} firma.`]) + why(opts, W, num(0)) + fast('N ≤ 1/(1 − δ).') };
  };
  G.effDelta = () => {
    const r = pick([0.05, 0.1, 0.12, 0.2]), fq = pick([1, 2, 4, 12]), h = pick([1, 0.95, 0.9, 0.8]), g = pick([0, 0.02, 0.05, -0.05]);
    const d = h * (1 + g) / (1 + r / fq);
    const W = [[h * (1 + g) / (1 + r), 'yılda kaç kez fiyat konduğu (f) unutulmuş.'], [h / (1 + r / fq), 'büyüme (g) unutulmuş.'], [(1 + g) / (1 + r / fq), 'devam olasılığı (h) unutulmuş.']];
    const opts = nopts(d, W.map(w => w[0]), 3, { fmt: num(3) });
    return { en: `The annual interest rate is ${r}, firms set prices ${fq} time${fq > 1 ? 's' : ''} per year, the probability that the interaction continues each period is ${h}, and the market growth rate per period is g = ${g}. What is the effective discount factor?`, tr: `r = ${r}, yılda ${fq} kez fiyat, devam olasılığı ${h}, büyüme ${g}. Etkin iskonto faktörü kaçtır?`, opts,
      ex: steps(['Formül', '$\\delta = \\frac{h(1 + g)}{1 + r/f}$'], ['Sayıları koy', `$\\delta = \\frac{${h}\\times${g0(1 + g)}}{1 + ${r}/${fq}} = \\frac{${g0(h * (1 + g), 4)}}{${g0(1 + r / fq, 4)}} = ${g0(d, 3)}$`]) + `\n\nDaha sık etkileşim (f ↑), daha yüksek devam olasılığı (h ↑) ve büyüyen pazar (g ↑) δ'yı artırır: gizli anlaşma kolaylaşır. İki firmalı Bertrand için δ ≥ 0.5 ${d >= 0.5 ? 'sağlanıyor' : 'sağlanmıyor'}.` + why(opts, W, num(3)) + fast('δ = h(1 + g)/(1 + r/f).') };
  };
  G.pvStream = () => {
    const pi = pick([10, 20, 36, 50, 100]), d = pick([0.5, 0.6, 0.75, 0.8, 0.9]), share = pick([2, 3]);
    const pv = pi / share / (1 - d);
    const W = [[pi / share * d / (1 - d), 'ilk dönem unutulmuş (seri δ\'dan başlatılmış).'], [pi / (1 - d), 'payın tamamı alınmış.'], [pi / share / d, '1 − δ yerine δ ile bölünmüş.']];
    const opts = nopts(pv, W.map(w => w[0]), 2);
    return { en: `${share} firms collude and split monopoly profit of ${pi} equally every period forever. The discount factor is ${d}. What is the present value of one firm's profit stream (including today)?`, tr: `${share} firma tekel kârı ${pi}'yi her dönem eşit paylaşıyor. δ = ${d}. Bir firmanın kâr akışının bugünkü değeri kaçtır?`, opts,
      ex: steps(['Her dönem', `$\\pi^M/${share} = ${g0(pi / share)}$`], ['Geometrik seri', `$${g0(pi / share)}(1 + \\delta + \\delta^2 + \\dots) = \\frac{${g0(pi / share)}}{1 - ${d}} = ${g0(pv)}$`]) + why(opts, W, num(2)) + fast('Sonsuz akış: π/(1 − δ).') };
  };
  G.grimCournot = () => {
    const c = R(0, 4), a = c + pick([12, 24, 36, 48]), ask = R(0, 3);
    const qM = (a - c) / 2, piM = qM * qM, piNE = (a - c) * (a - c) / 9, qx = 3 * (a - c) / 8, pix = qx * qx, dmin = (pix - piM / 2) / (pix - piNE);
    const ans = [piM / 2, pix, piNE, dmin][ask], d = ask === 3 ? 4 : 2;
    const W = ask === 3 ? [[0.5, 'Bertrand eşiği (½); miktar rekabetinde ceza daha yumuşak, eşik daha yüksek.'], [(piM / 2 - piNE) / (pix - piNE), 'payda doğru ama payda πM/2 − πNE kullanılmış (uyma kazancı yerine).'], [(pix - piM / 2) / pix, 'paydada ceza kârı (πNE) düşülmemiş.']] : [[piM / 2, 'anlaşmadaki firma kârı.'], [pix, 'sapma kârı.'], [piNE, 'Cournot (ceza) kârı.'], [piM, 'bütün tekel kârı (iki firmanın toplamı).']].filter(w => Math.abs(w[0] - ans) > 1e-9);
    const opts = nopts(ans, W.map(w => w[0]), d, ask === 3 ? { min: 0.01, max: 0.99 } : { min: 0.01 });
    return { en: `Two firms with constant marginal cost ${c} face inverse demand $P = ${a} - Q$ and compete in quantities forever. Collusion: each produces half the monopoly output; punishment: Cournot forever (grim trigger). What is ${['each firm\'s collusive profit per period', 'the one-period profit of the best deviation', 'each firm\'s Cournot (punishment) profit', 'the minimum discount factor for collusion'][ask]}?`, tr: `$P = ${a} - Q$, MC = ${c}, miktar rekabeti, grim trigger. ${['Anlaşmada firma kârı', 'En iyi sapmanın tek dönem kârı', 'Cournot (ceza) kârı', 'Gereken en küçük δ'][ask]} kaçtır?`, opts,
      ex: steps(['Tekel', `$Q^M = (${a} - ${c})/2 = ${g0(qM)}$, $P = ${g0(a - qM)}$, $\\pi^M = ${g0(piM)}$; her firma ${g0(piM / 2)}`], ['Cournot', `$q = (${a} - ${c})/3 = ${g0((a - c) / 3)}$, firma kârı ${g0(piNE)}`], ['Sapma', `Rakip ${g0(qM / 2)} üretirken $q_1 = \\frac{${a} - ${c} - ${g0(qM / 2)}}{2} = ${g0(qx)}$, $P = ${g0(a - qx - qM / 2)}$, kâr ${g0(pix)}`], ask === 3 && ['Eşik', `$\\delta \\ge \\frac{\\pi^x - \\pi^M/2}{\\pi^x - \\pi^{NE}} = \\frac{${g0(pix)} - ${g0(piM / 2)}}{${g0(pix)} - ${g0(piNE)}} = ${g0(dmin, 4)}$ (= 9/17)`]) + `\n\nSlayttaki örnek: Q = 14 − P, MC = 2 → 18, 20.25, 16, δ ≥ 9/17 ≈ 0.53. Doğrusal talep ve eş firmalarda eşik hep 9/17.` + why(opts, W, num(d)) + fast('πM/2 = (a−c)²/8, πx = 9(a−c)²/64, πNE = (a−c)²/9; δ* = 9/17.') };
  };

  root.GENS = G;
})(typeof window !== 'undefined' ? window : globalThis);

/* Üretilen soruların açıklamalarını zenginleştir: doğru cevap + özet + sık hatalar + sınav ipucu. */
(function (root) {
  const T = String.raw;
  const G = {
    lerner: () => ({ how: T`$L = (P - MC)/P$. Tekel optimumunda $L = 1/|\varepsilon|$. MC yerine AC kullanılırsa $L \approx$ kâr ÷ gelir.`, traps: [T`Farkı MC'ye bölmek (Lerner fiyata böler).`, T`$1 - L = MC/P$ oranını Lerner sanmak.`] }),
    pizzaCS: () => ({ how: T`Ödeme isteği fiyattan yüksek birimler alınır. Tüketici artığı = Σ(ödeme isteği − fiyat).`, traps: [T`Fiyatın altındaki dilimi de saymak.`, T`Fiyatı düşmeden ödeme isteklerini toplamak.`] }),
    elastMkt: () => ({ how: T`Bireysel talebi q için çöz, N ile çarp (yatay toplama). $|\varepsilon| = |dQ/dP|\cdot P/Q$.`, traps: [T`Ters talepleri dikey toplamak.`, T`P/Q yerine Q/P ile çarpmak.`], tip: T`Doğrusal talepte $|\varepsilon| = P/(a - P)$: tüketici sayısı ve eğim sadeleşir, hesap 5 saniye.` }),
    costCalc: () => ({ how: T`TC = FC + VC; AC = TC/q; AVC = VC/q; MC = son birimin ek maliyeti.`, traps: [T`Kirayı (sabit maliyet) değişken maliyete katmak.`, T`Son birimin MC'si yerine ilk birimlerinkini almak.`] }),
    stepSupply: () => ({ how: T`P ≥ MC olan her birimi üret; basamaklı MC'de fiyatın altındaki son basamağa kadar.`, traps: [T`Tam kapasiteyi seçmek.`, T`Ortalama maliyete bakmak.`] }),
    acTable: () => ({ how: T`TC = AC × q; MC = TC(q) − TC(q − 1). Optimum q için MC(q) ≤ P ≤ MC(q + 1).`, traps: [T`AC tablosundaki sayıları MC sanmak.`] , tip: T`AC(q) = q ise TC = q² ve MC(q) = 2q − 1. Slayttaki 200 birim örneğinde aralık 399 ≤ P ≤ 401.` }),
    sunk: () => ({ how: T`Batık (geri alınamayan) maliyet karara girmez. Ek fayda > kalan maliyet ise devam.`, traps: [T`Harcanan parayı "boşa gitmesin" diye hesaba katmak.`] }),
    mrElast: () => ({ how: T`$MR = P(1 - 1/|\varepsilon|)$.`, traps: [T`İşareti ters almak ($1 + 1/|\varepsilon|$).`], tip: T`$|\varepsilon| < 1$ ise MR < 0: tekel talebin esnek olmayan kısmında üretmez.` }),
    nash2x2: () => ({ how: T`Her hücrede iki oyuncunun tek başına sapıp sapmayacağını kontrol et.`, traps: [T`Toplam getirisi en büyük hücreyi Nash sanmak.`, T`Birden fazla dengeyi gözden kaçırmak.`], tip: T`Altını çizme yöntemi: her sütunda 1. oyuncunun en iyisini, her satırda 2. oyuncunun en iyisini işaretle. İki işaretli hücre Nash dengesi.` }),
    dom2x2: () => ({ how: T`Baskın strateji: rakip ne yaparsa yapsın daha yüksek getiri.`, traps: [T`Yalnızca bir sütunda karşılaştırıp karar vermek.`] }),
    entry: () => ({ how: T`Geriye doğru tümevarım: önce son karar vereni çöz, sonra ilk oyuncunun seçimini ona göre yap.`, traps: [T`İnanılmaz (credible olmayan) tehdide inanmak.`], tip: T`Giriş oyununda soru hep aynı: giriş olduktan sonra savaşmak yerleşik firmaya uzlaşmaktan daha mı çok getiriyor? Hayırsa tehdit boştur.` }),
    twoStage: () => ({ how: T`Uymak: işbirliği + iyi denge. Sapmak: sapma kazancı + kötü denge. Uymak ≥ sapmak ise işbirliği denge.`, traps: [T`Sapınca da ikinci turda iyi dengenin oynanacağını sanmak.`] }),
    monoLin: () => ({ how: T`MR = MC; MR'ın eğimi talebin iki katı. Fiyatı talep eğrisinden oku. DWL = ½(P − MC)(Q_C − Q_M).`, traps: [T`Fiyatı MR'dan ya da MC'den okumak.`, T`DWL'de ½'yi unutmak.`], tip: T`$P = a - bQ$, MC = c için: $Q_M = (a - c)/(2b)$, $P_M = (a + c)/2$, $\pi_M = (a - c)^2/(4b)$, DWL = $\pi_M/2$.` }),
    monoQuad: () => ({ how: T`MR = MC: $a - 2bQ = \alpha + 2\beta Q$.`, traps: [T`MC'nin eğimini unutmak.`, T`Fiyatı MC'den okumak.`] }),
    monoElast: () => ({ how: T`$P = MC/(1 - 1/|\varepsilon|)$; sabit esneklikte fiyat MC'nin sabit katıdır.`, traps: [T`$MC(1 + 1/|\varepsilon|)$ yazmak.`], tip: T`$|\varepsilon| = 2$ → P = 2·MC; $|\varepsilon| = 3$ → P = 1.5·MC; $|\varepsilon| = 4$ → P = (4/3)·MC.` }),
    domFirm: () => ({ how: T`İki seçenek: rakipleri piyasadan at (P ≤ rakip MC) ya da kalan talepte tekel ol (P > rakip MC). Kârları karşılaştır.`, traps: [T`Rakipleri yok sayıp bütün talepte tekel fiyatı koymak.`] }),
    pcShort: () => ({ how: T`Rekabetçi firma P = MC noktasında üretir (P ≥ AVC iken).`, traps: [T`MC'yi türevlemeden TC'nin katsayısını kullanmak.`] }),
    pcMarket: () => ({ how: T`Piyasa arzı = N × firma arzı; arzı talebe eşitle.`, traps: [T`Firma arzını N ile çarpmayı unutmak.`] }),
    pcLong: () => ({ how: T`Uzun dönemde P = min AC; firma sayısı = piyasa miktarı ÷ firma miktarı (aşağı yuvarla).`, traps: [T`Uzun dönem fiyatını kısa dönemdeki gibi talepten bulmak.`, T`Firma sayısını yukarı yuvarlamak.`], tip: T`$TC = F + aq + bq^2$ için $q = \sqrt{F/b}$ ve $P = a + 2\sqrt{Fb}$.` }),
    diffCost: () => ({ how: T`Her firma P = MC üretir. Marjinal (en pahalı) firma sıfır kâr eder; ucuz firmanın kârı maliyet üstünlüğünden gelen ranttır.`, traps: [T`Uzun dönemde herkesin sıfır kâr ettiğini sanmak.`] }),
    monoComp: () => ({ how: T`Firma kendi talebinde tekel gibi davranır: MR = MC, fiyatı talebinden oku. Kâr > 0 ise giriş olur.`, traps: [T`P = MC kuralını kullanmak.`] }),
    cournot2: () => ({ how: T`Tepki fonksiyonu $q_1 = (a - c - bq_2)/(2b)$; simetrik dengede $q = (a - c)/(3b)$.`, traps: [T`Tekel miktarını firma miktarı sanmak.`], tip: T`İki eş firma: q = (a − c)/(3b), P = (a + 2c)/3, firma kârı = b·q².` }),
    cournotAsym: () => ({ how: T`$q_i = (a - 2c_i + c_j)/(3b)$, $P = (a + c_1 + c_2)/3$.`, traps: [T`Kendi maliyetini iki kez değil bir kez düşmek.`] }),
    cournotN: () => ({ how: T`$q = (a - c)/((n + 1)b)$, $P = (a + nc)/(n + 1)$.`, traps: [T`Paydada n + 1 yerine n kullanmak.`] }),
    bertrandAsym: () => ({ how: T`Verimli firma rakibin maliyetinin hemen altına fiyat koyar ve bütün pazarı alır (tekel fiyatı daha düşük değilse).`, traps: [T`P = kendi MC'si demek.`, T`Pazarı ikiye bölmek.`] }),
    capBert: () => ({ how: T`Kapasiteler küçükse fiyat, toplam kapasiteyi satan düzeydedir: P = a − 2K.`, traps: [T`Bertrand paradoksunu (P = MC) burada da uygulamak.`] }),
    cournotDemand: () => ({ how: T`Toplam miktarı ters talepte yerine koy.`, traps: [T`Q = a − BP denklemini P için çözerken B'ye bölmeyi unutmak.`] }),
    compStat: () => ({ how: T`$P = (a + nc)/(n + 1)$ olduğundan $dP/dc = n/(n + 1)$.`, traps: [T`Maliyet artışının tamamının fiyata yansıdığını sanmak.`] }),
    grimN: () => ({ how: T`Bertrand + grim trigger: $\delta \ge 1 - 1/N$.`, traps: [T`İki firma eşiği ½'yi her N için kullanmak.`], tip: T`Firma sayısı arttıkça gizli anlaşma zorlaşır: N = 2 → 0.5, N = 3 → 0.67, N = 5 → 0.8, N = 10 → 0.9.` }),
    effDelta: () => ({ how: T`$\delta = h(1 + g)/(1 + r/f)$.`, traps: [T`Faizi f'ye bölmeyi unutmak.`] }),
    pvStream: () => ({ how: T`Bugünden başlayan sonsuz eşit akış: $\pi/(1 - \delta)$.`, traps: [T`İlk dönemi unutup $\pi\delta/(1 - \delta)$ yazmak.`] }),
    grimCournot: () => ({ how: T`$\delta \ge (\pi^x - \pi^M/2)/(\pi^x - \pi^{NE})$.`, traps: [T`Sapma kârında rakibin anlaşma miktarını değil Cournot miktarını kullanmak.`], tip: T`Doğrusal talep, eş maliyetli iki firma: $\pi^M/2 = (a-c)^2/8$, $\pi^x = 9(a-c)^2/64$, $\pi^{NE} = (a-c)^2/9$ ve eşik her zaman 9/17 ≈ 0.53.` })
  };
  function enrich(name, q) {
    const g = G[name], r = g ? g(q) : null;
    let ex = /^\*\*Doğru cevap/.test(q.ex) ? q.ex : '**Doğru cevap: ' + q.opts[0] + '.**\n\n' + q.ex;
    if (r) {
      if (r.how) ex += '\n\n**Özet:** ' + r.how;
      if (r.traps && r.traps.length) ex += '\n\n**Sık hatalar:**\n' + r.traps.map(t => '• ' + t).join('\n');
      if (r.tip) ex += '\n\n:::ipucu Sınavda\n' + r.tip + '\n:::';
    }
    q.ex = ex;
    q.hint = r && r.how ? r.how : '';
    return q;
  }
  root.GEN_GUIDE = G;

  /* Tekrar eden şıkları ayıkla; 3'ten az kalırsa yeniden üret. */
  root.genQ = function (name) {
    let q = null;
    for (let k = 0; k < 10; k++) {
      q = root.GENS[name]();
      const o = q.opts.filter((x, i, a) => a.indexOf(x) === i);
      if (o.length >= 3) { q.opts = o.slice(0, 4); return enrich(name, q); }
    }
    return enrich(name, q);
  };
})(typeof window !== 'undefined' ? window : globalThis);
