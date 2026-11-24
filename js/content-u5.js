CONTENT.push(String.raw`
=== UNIT u5 | Bölüm 5 | Tekel | Tekelin kararı ve esneklik, doğrusal talepte tekel, baskın firma, tekel gücü, düzenleme

--- LESSON u5a | M | Tekelin kararı
FX: MR = MC :: tekelin kâr en çoklama koşulu
FX: $\frac{P - MC}{P} = \frac{1}{|\varepsilon|}$ :: tekelde Lerner endeksi esnekliğin tersi
FX: $MR = a - 2bQ$ :: $P = a - bQ$ için: aynı kesişim, iki kat eğim
FX: $Q^* = \frac{a - \alpha}{2(b + \beta)}$, $P^* = a - bQ^*$ :: $MC = \alpha + 2\beta Q$ ile

## CARD Saf tekel
• ==Saf tekel==: tek firmanın pazarın %100'üne sahip olması. Çok kısıtlayıcı bir varsayım; örnekler elektrik, telefon, su, otobüs gibi kamu hizmetleri.
• Tekel fiyat p koyar, tüketiciler $D(p)$ kadar ister. Ya da ters yönden: q satmak için fiyat $P(q)$ olmalı ($P$, $D$'nin ters fonksiyonu).
• **Fiyat mı miktar mı seçmek fark eder mi?** Hayır: talep eğrisi belli olduğundan birini seçmek ötekini belirler.
• q üretmenin maliyeti $C(q)$.

## CARD Lerner endeksi = esnekliğin tersi
Bölüm 2'den: $MR = p(1 - 1/|\varepsilon|)$. Kâr en çoklama MR = MC olduğundan:
$$p\left(1 - \frac{1}{|\varepsilon|}\right) = MC \;\Rightarrow\; \frac{p - MC}{p} = \frac{1}{|\varepsilon|}$$
Mantıklı mı? Evet: talep esnek değilse tüketiciler fiyata az tepki verir, tekel marjı yüksek tutar. Esnekse tüketiciler kolayca vazgeçer, marj düşük.
@fig elast

## CARD Optimumda neden |ε| > 1?
Kâr en çoklayan noktada esneklik 1'den küçük olabilir mi? Hayır.
• $|\varepsilon| < 1$ iken fiyatı artırırsan miktar orantıdan az düşer: **gelir artar**.
• Daha az üretildiği için **maliyet azalır**.
• Kâr iki yönden artıyor; fiyatı artırmaya devam edersin. "Çözüm" sonsuz fiyat olurdu, saçma.
Bu yüzden tekel talebin **esnek** kısmında üretir ($|\varepsilon| > 1$, MR > 0).

## CARD Ödev: sabit esneklikli talep
$TC(Q) = 2Q$, $Q = 10000/P^2$.
• **Esneklik:** $\varepsilon = \frac{dQ}{dP}\cdot\frac{P}{Q} = -\frac{20000}{P^3}\cdot\frac{P}{10000/P^2} = -2$. Her fiyatta $-2$: **fiyatla değişmez** (sabit esneklikli talep).
• **Optimal fiyat:** $MC = 2$, $\frac{P - 2}{P} = \frac12 \Rightarrow P = 4$.
:::ipucu Sınavda hızlı yol
Sabit esneklikte $P = MC\cdot\frac{|\varepsilon|}{|\varepsilon| - 1}$. $|\varepsilon| = 2$ ise P = 2·MC; $|\varepsilon| = 3$ ise P = 1.5·MC.
:::

## CARD Doğrusal talepte tekel
@fig monolin
• Talep $p(Q) = a - bQ$. Gelir $(a - bQ)Q$, türevi $MR = a - 2bQ$: aynı kesişim, **iki kat eğim**.
• $MC(Q) = \alpha + 2\beta Q$ ise toplam maliyet $TC = \alpha Q + \beta Q^2$ (+ varsa sabit maliyet).
• MR = MC: $a - 2bQ = \alpha + 2\beta Q \Rightarrow Q^* = \frac{a - \alpha}{2(b + \beta)}$, fiyat talepten: $p^* = a - bQ^*$.
:::ornek Sayıyla
$P = 10 - Q$, MC = 2 (β = 0): $10 - 2Q = 2 \Rightarrow Q = 4$, $P = 6$, kâr $(6 - 2)\times4 = 16$.
:::
:::ipucu Sınavda hızlı yol (sabit MC = c)
$Q_M = \frac{a - c}{2b}$, $P_M = \frac{a + c}{2}$, $\pi_M = \frac{(a - c)^2}{4b}$, ölü ağırlık kaybı $= \pi_M/2$.
:::

## GEN monoLin
## GEN monoQuad
## GEN monoElast

## Q
SRC: Slayt 5.4 · Lerner ve esneklik
EN: At the profit-maximizing output of a monopolist, the Lerner index equals:
TR: Tekelin optimumunda Lerner endeksi neye eşittir?
+ the inverse of the absolute value of the price elasticity of demand
- the absolute value of the price elasticity of demand
- one minus the price elasticity of demand
- the firm's market share
HINT: MR = MC ve $MR = p(1 - 1/|\varepsilon|)$.
EX: **Doğru cevap: $1/|\varepsilon|$.**
**Adım adım:** $p(1 - 1/|\varepsilon|) = MC \Rightarrow (p - MC)/p = 1/|\varepsilon|$.
**Diğer şıklar neden yanlış?**
• $|\varepsilon|$: ters çevrilmemiş; esnek talep yüksek değil düşük marj demek.
• $1 - \varepsilon$: anlamsız bir ifade.
• market share: piyasa gücü pazar payıyla değil Lerner'le ölçülür (Microsoft örneği).

## Q
SRC: Slayt 5.6 · Esnek kısım
EN: Can the absolute value of the demand elasticity be less than 1 at a monopolist's profit-maximizing point?
TR: Tekelin optimumunda |ε| < 1 olabilir mi?
+ No: if demand were inelastic, raising the price would increase revenue and lower cost, so profit would rise
- Yes: monopolists prefer inelastic demand
- Yes, whenever marginal cost is zero
- No, because elasticity is always exactly 1 at the optimum
HINT: Fiyat artınca gelir ve maliyet ne olur?
EX: **Doğru cevap: hayır.**
Esnek olmayan talepte fiyat artışı geliri artırır, daha az üretim maliyeti düşürür: kâr artar. Optimum ancak $|\varepsilon| > 1$ bölgesinde.
**Diğer şıklar neden yanlış?**
• prefer inelastic: optimumda tekel zaten esnek kısma gider.
• MC zero: MC = 0'da optimum $|\varepsilon| = 1$; 1'in altı yine olmaz.
• always exactly 1: bu yalnızca MC = 0 iken (gelir en çoklama); MC > 0 ise $|\varepsilon| > 1$.

## Q
SRC: Slayt 5.7 · Ödev
EN: A monopolist has total cost $TC(Q) = 2Q$ and faces demand $Q = 10000/P^2$. What is the profit-maximizing price?
TR: $TC = 2Q$, $Q = 10000/P^2$. Optimal fiyat kaçtır?
+ 4
- 2
- 8
- 100
HINT: Bu talebin esnekliği her fiyatta aynı.
EX: **Doğru cevap: 4.**
**Adım adım:** $|\varepsilon| = 2$ (üs). MC = 2. $(P - 2)/P = 1/2 \Rightarrow P = 4$.
**Diğer şıklar neden yanlış?**
• 2: MC; rekabetçi fiyat.
• 8: $MC\times4$; esneklik 2 değil 4/3 olsaydı.
• 100: $\sqrt{10000}$; Q = 1 yapan fiyat, optimumla ilgisi yok.

## Q
SRC: Slayt 5.7 · Sabit esneklik
EN: For the demand $Q = 10000/P^2$, the price elasticity of demand:
TR: $Q = 10000/P^2$ talebinin esnekliği için hangisi doğru?
+ equals −2 at every price
- equals −1 at every price
- increases in absolute value as the price rises, as on a linear demand
- equals −2 only at the profit-maximizing price
HINT: $\frac{dQ}{dP}\cdot\frac{P}{Q}$ hesapla.
EX: **Doğru cevap: her fiyatta −2.**
**Adım adım:** $dQ/dP = -20000/P^3$. Çarp $P/Q = P\cdot P^2/10000$: $-20000/P^3 \times P^3/10000 = -2$.
**Diğer şıklar neden yanlış?**
• −1: üs 1 olsaydı ($Q = A/P$).
• like linear demand: doğrusal talepte değişir; bu sabit esneklikli.
• only at the optimum: P sadeleşiyor, her fiyatta aynı.

## Q
SRC: Slayt 5.8 · Doğrusal MR
EN: If inverse demand is $p(Q) = a - bQ$, the marginal revenue function is:
TR: $p = a - bQ$ ise MR nedir?
+ $MR = a - 2bQ$
- $MR = a - bQ$
- $MR = a/2 - bQ$
- $MR = 2a - bQ$
HINT: $TR = (a - bQ)Q$'nun türevi.
EX: **Doğru cevap: $a - 2bQ$.**
**Adım adım:** $TR = aQ - bQ^2 \Rightarrow MR = a - 2bQ$. Aynı kesişim, iki kat eğim.
**Diğer şıklar neden yanlış?**
• $a - bQ$: talebin kendisi (fiyat); tam rekabetteki gibi P = MR olurdu.
• $a/2 - bQ$: kesişim yarıya inmiş; eğim değil kesişim değişmiş.
• $2a - bQ$: kesişim iki katına çıkarılmış.

## Q
SRC: Slayt 5.3 · Fiyat mı miktar mı?
EN: Does it make a difference whether the monopolist chooses the price or the quantity?
TR: Tekelin fiyat ya da miktar seçmesi fark eder mi?
+ No: given the demand curve, choosing p determines q = D(p), and choosing q determines p = P(q)
- Yes: choosing the price always yields a higher profit
- Yes: choosing the quantity always yields a higher profit
- It depends on whether marginal cost is constant
HINT: $P(\cdot)$ ile $D(\cdot)$ birbirinin tersi.
EX: **Doğru cevap: fark etmez.**
Tek firma ve bilinen talep eğrisiyle fiyat ve miktar aynı kararın iki yüzü. (Oligopolde, Bölüm 7, fark eder: Bertrand ile Cournot farklı sonuç verir.)
**Diğer şıklar neden yanlış?**
• price / quantity higher profit: ikisi aynı noktayı seçer.
• constant MC: maliyetin şekli bu eşdeğerliği değiştirmez.

--- LESSON u5b | D | Baskın firma
FX: Baskın firma :: pazarın %50–100'ü, yakın rakip yok
FX: $D_R(P) = D(P) - K$ :: P > rakip maliyeti iken kalan (residual) talep
FX: İki seçenek :: rakipleri at (P ≤ rakip MC) ya da paylaş (kalan talepte tekel); kârları karşılaştır

## CARD Baskın firma ve fiyat liderliği
==Baskın firma==: pazarın %50–100'üne sahip, yakın rakibi olmayan firma. Örnekler: Gillette (jilet), AT&T, Google. Türkiye'den bir örnek: sabit telefon hizmetinde Türk Telekom.
AT&T örneğinde rakipler AT&T'nin fiyat değişikliklerini birkaç ay içinde, çok yakın fiyatlarla izledi: ==AT&T fiyat lideri== oldu.
| AT&T fiyatı değiştirdi | AT&T yeni fiyat | MCI kaç ay sonra | MCI yeni fiyat | Sprint kaç ay sonra |
| Ocak 87 | 0.298 | 2 | 0.289 | 2 |
| Ocak 88 | 0.265 | 2 | 0.256 | 2 |
| Ocak 89 | 0.254 | 0 | 0.244 | 0 |
| Ocak 90 | 0.233 | 1 | 0.223 | 1 |
| Ocak 91 | 0.228 | 1 | 0.222 | 5 |
| Temmuz 91 | 0.227 | 5 | 0.223 | 1 |
| Ocak 92 | 0.228 | 0 | 0.224 | 2 |
| Haziran 92 | 0.227 | 0 | 0.225 | 5 |
| Şubat 93 | 0.228 | 1 | 0.225 | 2 |
| Eylül 93 | 0.235 | 0 | 0.234 | 1 |
| Ocak 94 | 0.256 | 0 | 0.255 | 0 |
(Şehirlerarası telefon, dakika başı dolar; Tablo 5.1.)

## CARD Kalan talep
• Tüketiciler en ucuz firmayı seçer; küçük rakiplerin (fringe) toplam kapasitesi K.
• AT&T (MC'nin üstünde) hangi fiyatı koyarsa koysun, küçükler biraz altına fiyat koyar ve kapasiteleri kadar satar.
• Sonuç: baskın firmanın önündeki ==kalan talep (residual demand)== $D_R$, piyasa talebinin **K birim sola** kaydırılmış hali.
@fig domfirm

## CARD Örnek: kapasiteli baskın firma modeli
Küçük firmaların maliyeti $TC = 4q$, toplam kapasiteleri K = 2. Baskın firmanın $TC = q$. Talep $Q = 20 - 2P$.
**Küçüklerin arzı:** P < 4 iken 0; P = 4 iken 0 ile 2 arası; P > 4 iken 2.
**İki seçenek:**
| | Seçenek 1: rakipleri at | Seçenek 2: paylaş |
| Fiyat aralığı | P ≤ 4 (Q ≥ 12) | P > 4 (Q < 12) |
| Baskın firmanın talebi | $Q = 20 - 2P$, $P = 10 - Q/2$ | $Q = 18 - 2P$, $P = 9 - Q/2$ |
| Birinci sıra koşulu | $(10 - Q/2)Q - Q$ → Q = 9, P = 5.5 | $(9 - Q/2)Q - Q$ → Q = 8, P = 5 |
| Uygun mu? | 5.5 > 4, aralığın dışında: sınıra bak. P = 0 → kâr 0; P = 4 → Q = 12, **kâr 36** | P = 5 > 4 ✓, **kâr 32** |
36 > 32: baskın firma **P = 4** koyup küçükleri piyasadan atar.

## GEN domFirm

## Q
SRC: Slayt 5.10 · AT&T
EN: Table 5.1 shows that after AT&T changed its long-distance rates, MCI and Sprint changed theirs within a few months to very similar levels. The lecture interprets this as:
TR: Tablo 5.1 neyi gösteriyor?
+ AT&T acting as a price leader
- the Bertrand paradox, with all prices equal to marginal cost
- a cartel agreement among the three carriers
- regulation of long-distance rates
HINT: Kim önce hareket ediyor?
EX: **Doğru cevap: AT&T fiyat lideri.**
Baskın firma fiyatı belirliyor, küçük rakipler izliyor (çoğu zaman biraz altında).
**Diğer şıklar neden yanlış?**
• Bertrand paradox: fiyatlar maliyete inmiyor; liderin belirlediği düzeyde kalıyor.
• cartel: tablo bir anlaşmadan söz etmiyor; izleme baskın firma modeliyle açıklanıyor.
• regulation: derste bu örnekte düzenleme geçmiyor.

## Q
SRC: Slayt 5.11 · Kalan talep
EN: Small rivals are capacity constrained with total capacity K and undercut the dominant firm's price. The residual demand faced by the dominant firm is:
TR: Baskın firmanın kalan talebi nedir?
+ market demand shifted K units to the left
- market demand shifted K units to the right
- market demand divided by the number of firms
- the same as market demand, since rivals are small
HINT: Rakipler önce K birim satıyor.
EX: **Doğru cevap: piyasa talebi K birim sola.**
Her fiyatta rakipler K satar; baskın firmaya $D(P) - K$ kalır.
**Diğer şıklar neden yanlış?**
• to the right: baskın firmaya daha çok talep kalmaz, daha az kalır.
• divided by number of firms: talep paylaşımı değil, kapasite kadar düşülür.
• same as market demand: yalnızca P rakiplerin maliyetinin altındaysa (rakipler satmazken) doğru.

## Q
SRC: Slayt 5.12–5.16 · Baskın firma örneği
EN: Fringe firms have $TC(q) = 4q$ and total capacity K = 2; the dominant firm has $TC(q) = q$; market demand is $Q(P) = 20 - 2P$. What price maximizes the dominant firm's profit?
TR: Baskın firma örneğinde en iyi fiyat kaçtır?
+ 4, eliminating the fringe (profit 36)
- 5, sharing the market with the fringe (profit 32)
- 5.5, the monopoly price on the whole demand
- 1, equal to its marginal cost
HINT: İki seçeneğin kârını karşılaştır.
EX: **Doğru cevap: P = 4.**
**Adım adım:** atma: P = 4, Q = 12, kâr $(4 - 1)\times12 = 36$. Paylaşma: kalan talep $P = 9 - Q/2$, Q = 8, P = 5, kâr $(5 - 1)\times8 = 32$. 36 > 32.
**Diğer şıklar neden yanlış?**
• 5: paylaşma seçeneği; daha az kâr.
• 5.5: bütün talepte tekel fiyatı ama 5.5 > 4'te rakipler satar; bu fiyat "atma" seçeneğinde uygun değil.
• 1: P = MC; kâr sıfır.

## Q
SRC: Slayt 5.13 · Küçüklerin arzı
EN: In the same example, what is the fringe supply at a price of exactly 4?
TR: P = 4'te küçük firmaların arzı nedir?
+ Any quantity between 0 and 2
- Exactly 2
- Zero
- 12
HINT: Fiyat tam marjinal maliyete eşit.
EX: **Doğru cevap: 0 ile 2 arası.**
P = MC = 4'te küçükler kâr da zarar da etmez; üretmekle üretmemek arasında kayıtsızlar. P < 4 iken 0, P > 4 iken 2.
**Diğer şıklar neden yanlış?**
• exactly 2: P > 4 durumu.
• zero: P < 4 durumu.
• 12: P = 4'te piyasa talebi.

## Q
SRC: Slayt 5.15 · Sınır çözümü
EN: In the dominant-firm example, eliminating the fringe gives the first-order condition Q = 9, P = 5.5. Why is this not the solution of option 1?
TR: Seçenek 1'deki birinci sıra koşulu (P = 5.5) neden çözüm değil?
+ At P = 5.5 > 4 the fringe would sell, so the constraint P ≤ 4 binds and the best feasible price is 4
- Because 5.5 gives a negative profit
- Because 5.5 is below the dominant firm's marginal cost
- Because the fringe has no capacity at P = 5.5
HINT: "Interior" değil, sınıra bak.
EX: **Doğru cevap: P ≤ 4 kısıtı bağlayıcı.**
Atma seçeneği P ≤ 4 gerektirir. Kısıtsız optimum aralığın dışında kalınca kâr sınırda (P = 4) en büyük.
**Diğer şıklar neden yanlış?**
• negative profit: $(5.5 - 1)\times9 = 40.5 > 0$; sorun kâr değil uygunluk.
• below MC: 5.5 > 1.
• no capacity: tersine, P > 4'te küçükler kapasitelerinin tamamını (2) satar.

--- LESSON u5c | R | Tekel gücü ve düzenleme
FX: $DWL = \tfrac12(P_M - MC)(Q_C - Q_M)$ :: tekelin ölü ağırlık kaybı
FX: P = MC, P = AC, tavan fiyat :: üç düzenleme yolu ve sorunları
FX: $\sum_i w_{i,t}\frac{p_{i,t} - p_{i,t-1}}{p_{i,t-1}} \le I_t - X_t + \Delta$ :: Türk Telekom tavan fiyat formülü

## CARD Tekel mi, tekel gücü mü?
• Tekelin sahip olduğu güce ==tekel gücü== denir.
• Piyasa gücünü pazar payıyla değil **Lerner endeksiyle** ölçmek daha uygun.
• Microsoft: Windows dünyadaki kişisel bilgisayarların yaklaşık %80'inde. Ama Microsoft "tekel fiyatı koyamıyoruz, çünkü rakip işletim sistemleri, potansiyel girenler, kendi kurulu tabanımız ve korsan yazılımla rekabet ediyoruz" diyor: (neredeyse) tekel payı ama neredeyse hiç tekel gücü yok, iddiası bu.

## CARD Düzenleme: ölü ağırlık kaybı
@fig reg
Ölü ağırlık kaybı istenmez. Düzenleyicinin üç yolu var:
| Yöntem | Ne yapar? | Sorun |
| P = MC | kaybı tamamen kaldırır | firma sabit maliyetlerini karşılayamaz; telafi için vergi toplanır, bu da başka etkinsizlikler yaratır |
| P = AC | firma sıfır kâr eder | firmanın maliyet düşürme teşviki azalır |
| Tavan fiyat (price cap) | fiyat belirlenir ve uzun süre (örneğin 5 yıl) değişmez | ürün kalitesini artırma teşviki yok |

## CARD Türk Telekom'un tavan fiyat düzenlemesi
$$\sum_{i=1}^{n} w_{i,t}\left[\frac{p_{i,t} - p_{i,t-1}}{p_{i,t-1}}\right] \le I_t - X_t + \Delta \qquad (1)$$
$$\frac{p_{i,t} - p_{i,t-1}}{p_{i,t-1}} \le \alpha_{i,t} \qquad (2)$$
| Sembol | Anlamı |
| $p_{i,t}$ | i hizmetinin t döneminde birim fiyatı (KDV dahil) |
| $w_{i,t}$ | i hizmetinin sepetteki ağırlığı (satış gelirlerindeki payı) |
| $I_t$ | t dönemine en yakın geçmiş dönemdeki gerçekleşen enflasyon |
| $X_t$ | sepete uygulanacak verimlilik faktörü |
| $\Delta$ | önceki dönemlerde kullanılmayan fiyat değişikliği izninden düzeltme |
| $\alpha_{i,t}$ | i hizmeti için azami artış oranı |
Okuma: sepetin ağırlıklı ortalama fiyat artışı **enflasyon eksi verimlilik faktörünü** geçemez (1); ayrıca her hizmetin kendi artış tavanı var (2).

## Q
SRC: Slayt 5.19 · Düzenleme grafiği
EN: Demand is $P = 10 - Q$ and marginal cost is 2. The monopoly outcome is $Q_M = 4$, $P_M = 6$; the competitive outcome is $Q_C = 8$, $P_C = 2$. What is the deadweight loss of monopoly?
TR: Grafikteki ölü ağırlık kaybı kaçtır?
+ 8
- 16
- 4
- 24
HINT: ABC üçgeni.
EX: **Doğru cevap: 8.**
**Adım adım:** $\tfrac12\times(8 - 4)\times(6 - 2) = \tfrac12\times4\times4 = 8$.
**Diğer şıklar neden yanlış?**
• 16: tekel kârı (dikdörtgen); transfer, kayıp değil.
• 4: ½ ile çarpmadan önce taban ya da yükseklik.
• 24: kâr + kayıp; anlamsız bir toplam.

## Q
SRC: Slayt 5.20 · P = MC
EN: If a regulator forces a natural monopoly with fixed costs to set price equal to marginal cost, what is the main problem?
TR: P = MC düzenlemesinin sorunu nedir?
+ The firm cannot cover its fixed costs, so it must be compensated with tax money, which creates other inefficiencies
- The firm has no incentive to improve product quality
- Deadweight loss increases
- The firm earns excessive profits
HINT: Sabit maliyet nereden karşılanacak?
EX: **Doğru cevap: sabit maliyet karşılanamaz.**
P = MC'de gelir yalnızca değişken maliyeti karşılar. Telafi için vergi toplamak başka piyasalarda etkinsizlik yaratır.
**Diğer şıklar neden yanlış?**
• quality: tavan fiyat düzenlemesinin sorunu.
• DWL increases: tersine P = MC kaybı ortadan kaldırır.
• excessive profits: firma zarar eder.

## Q
SRC: Slayt 5.20 · P = AC
EN: Under average-cost pricing regulation (p = AC), the main problem is that:
TR: P = AC düzenlemesinin sorunu nedir?
+ the firm makes zero profit whatever its costs, so it has few incentives to reduce costs
- the firm cannot cover its fixed costs
- there is no incentive to increase product quality
- the deadweight loss is larger than under monopoly
HINT: Maliyet artarsa fiyat da artar.
EX: **Doğru cevap: maliyet düşürme teşviki zayıf.**
Fiyat maliyete bağlı; maliyet düşerse fiyat da düşer, kâr hep sıfır. Firmanın maliyeti azaltmak için çabalaması gerekmez.
**Diğer şıklar neden yanlış?**
• fixed costs: P = AC sabit maliyeti de karşılar; bu P = MC'nin sorunu.
• quality: tavan fiyatın sorunu.
• larger DWL: AC fiyatlaması tekel fiyatından düşük, kayıp daha küçük.

## Q
SRC: Slayt 5.20 · Tavan fiyat
EN: Under price-cap regulation, the price is set and not changed for a long period (say five years). What is the problem mentioned in the lecture?
TR: Tavan fiyat düzenlemesinin sorunu nedir?
+ There is no incentive to increase product quality
- There is no incentive to reduce costs
- The firm cannot cover its fixed costs
- Prices change too often
HINT: Fiyat sabitken maliyet düşürmek firmaya kalır; kalite?
EX: **Doğru cevap: kaliteyi artırma teşviki yok.**
Tavan fiyatta maliyet düşürmenin kazancı firmada kalır (iyi teşvik). Ama fiyat sabit olduğu için kaliteyi artırmanın karşılığı alınamaz.
**Diğer şıklar neden yanlış?**
• reduce costs: tersine, tavan fiyat maliyet düşürme teşviki verir; teşvik sorunu P = AC'nin.
• fixed costs: P = MC'nin sorunu.
• change too often: fiyat uzun süre sabit.

## Q
SRC: Slayt 5.17–5.18 · Microsoft
EN: Windows is used in about 80% of the world's personal computers, yet Microsoft claims it cannot charge a monopoly price. The lecture uses this to argue that:
TR: Microsoft örneği neyi gösteriyor?
+ market power is better measured by the Lerner index than by market share
- a high market share always implies high market power
- Microsoft is a pure monopoly
- regulation should set Microsoft's price equal to marginal cost
HINT: Tekel payı ≠ tekel gücü.
EX: **Doğru cevap: Lerner endeksi pazar payından iyi bir ölçü.**
Rakip sistemler, potansiyel girenler, kurulu taban ve korsan yazılım fiyatı sınırlıyor (iddia bu): yüksek pay, düşük güç olabilir.
**Diğer şıklar neden yanlış?**
• always implies: örnek tam bunun tersini tartışıyor.
• pure monopoly: pay %80, %100 değil.
• regulation: derste bu örnekte düzenleme önerilmiyor.

## Q
SRC: Slayt 5.21–5.22 · Türk Telekom
EN: In Türk Telekom's price-cap formula, the weighted average price increase of the service basket must not exceed $I_t - X_t + \Delta$. What is $X_t$?
TR: Formüldeki $X_t$ nedir?
+ The productivity (efficiency) factor applied to the basket
- The realized inflation rate
- The maximum increase allowed for a single service
- The weight of a service in the basket
HINT: Enflasyondan çıkarılan terim.
EX: **Doğru cevap: verimlilik faktörü.**
Fiyatlar enflasyondan $X_t$ kadar az artabilir: firmanın verimlilik kazancı tüketiciye yansıtılır.
**Diğer şıklar neden yanlış?**
• inflation: $I_t$.
• single service cap: $\alpha_{i,t}$ (ikinci eşitsizlik).
• weight: $w_{i,t}$.
`);
