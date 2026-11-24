CONTENT.push(String.raw`
=== UNIT u6 | Bölüm 6 | Tam Rekabet | Beş varsayım, kısa dönem dengesi, uzun dönem dengesi, farklı maliyetler ve rant, tekelci rekabet

--- LESSON u6a | P | Varsayımlar ve kısa dönem
FX: P = MC :: rekabetçi firmanın üretim kuralı
FX: $q_S(P)$ :: P = MC(q)'yu q için çöz: firmanın arz fonksiyonu
FX: $Q_S(P) = N\cdot q_S(P)$ :: piyasa arzı = firma sayısı × firma arzı
FX: $Q_S = Q_D$ :: kısa dönem denge fiyatı (firma sayısı sabit)

## CARD Beş varsayım
| Varsayım | Anlamı |
| Atomluluk (atomicity) | Çok sayıda satıcı var; her biri o kadar küçük ki hareketleri ötekileri etkilemez |
| Ürün homojenliği | Bütün firmaların ürünü aynı |
| Tam bilgi | Bütün ajanlar (firmalar, tüketiciler) bütün fiyatları biliyor |
| Eşit erişim | Bütün firmalar bütün üretim teknolojilerine erişebiliyor |
| Serbest giriş | Her firma istediği gibi piyasaya girip çıkabiliyor |

## CARD Etkinlik
• Tam rekabette kâr en çoklama koşulu **p = MC**. Neden? Firma fiyat alan: p = MR (Bölüm 2), MR = MC.
• Tam rekabet **statik anlamda** (eldeki teknolojiler veriyken) en yüksek etkinliği sağlar:
• P = MC: ölü ağırlık kaybı yok (dağıtım etkinliği).
• Uzun dönemde fiyat ATC'nin en düşük noktasından geçer (üretim etkinliği).

## CARD Örnek: tek firmanın kararı
$TC(q) = F + q + 0.05q^2$, fiyat P = 11. Kârı en çoklayan q?
• $MC(q) = 1 + 0.1q$.
• MC = P: $1 + 0.1q = 11 \Rightarrow q^* = 100$.
**Firmanın arz fonksiyonu:** P'yi sayı yerine parametre bırak: $1 + 0.1q = P$
$$q_S(P) = 10P - 10 \quad (P > 1), \qquad q_S(P) = 0 \quad (P < 1)$$

## CARD Piyasa arzı ve kısa dönem dengesi
200 firma var: $Q_S(P) = 200\times(10P - 10) = 2000P - 2000$ (P > 1).
Piyasa talebi $Q_D = 10300 - 50P$.
$$2000P - 2000 = 10300 - 50P \;\Rightarrow\; P^* = 6, \quad Q^* = 10000$$
Her firma $q = 10\times6 - 10 = 50$ üretir.
**Firma başına kâr:** $P\cdot q = 300$, $TC = F + 50 + 0.05\times50^2 = F + 175$, kâr $= 125 - F$.
:::ipucu Sınavda hızlı yol
Firma arzını bul (P = MC'yi q için çöz), N ile çarp, talebe eşitle. Kâr sorulursa sabit maliyet F'yi unutma.
:::

## GEN pcShort
## GEN pcMarket

## Q
SRC: Slayt 6.2 · Varsayımlar
EN: Which assumption of perfect competition states that all firms have access to all production technologies?
TR: Bütün firmaların bütün teknolojilere erişebildiğini söyleyen varsayım hangisi?
+ Equal access
- Free entry
- Atomicity
- Perfect information
HINT: Beş varsayımın dördüncüsü.
EX: **Doğru cevap: eşit erişim.**
Bu varsayım uzun dönemde bütün firmaların aynı maliyet fonksiyonuna sahip olmasının ve sıfır kârın nedenidir.
**Diğer şıklar neden yanlış?**
• free entry: istediği gibi girip çıkma.
• atomicity: her firmanın çok küçük olması.
• perfect information: herkesin bütün fiyatları bilmesi.

## Q
SRC: Slayt 6.2 · Atomluluk
EN: In the model of perfect competition, "atomicity" means that:
TR: Atomluluk ne demektir?
+ there are many suppliers, each so small that its actions have no significant impact on other suppliers
- all firms produce exactly the same product
- every consumer knows all prices
- firms can enter or exit the market as they wish
HINT: Atom: çok küçük parça.
EX: **Doğru cevap: çok sayıda, çok küçük satıcı.**
**Diğer şıklar neden yanlış?**
• same product: ürün homojenliği.
• know all prices: tam bilgi.
• enter or exit: serbest giriş.

## Q
SRC: Slayt 6.4–6.5 · Kısa dönem örneği
EN: A competitive firm has $TC(q) = F + q + 0.05q^2$. The market price is 11. What output maximizes its profit?
TR: $TC = F + q + 0.05q^2$, P = 11. Kârı en çoklayan q kaçtır?
+ 100
- 200
- 50
- 110
HINT: MC = P.
EX: **Doğru cevap: 100.**
**Adım adım:** $MC = 1 + 0.1q = 11 \Rightarrow 0.1q = 10 \Rightarrow q = 100$.
**Diğer şıklar neden yanlış?**
• 200: MC yanlış alınmış ($0.05q$ türevlenmemiş: $1 + 0.05q = 11$).
• 50: P = 6'daki üretim (piyasa dengesi örneği).
• 110: $11/0.1$; MC'deki 1 düşülmemiş.

## Q
SRC: Slayt 6.6 · Firma arzı
EN: For a competitive firm with $TC(q) = F + q + 0.05q^2$, what is the supply function?
TR: Bu firmanın arz fonksiyonu nedir?
+ $q_S(P) = 10P - 10$ for $P > 1$, and 0 otherwise
- $q_S(P) = 20P - 20$ for $P > 1$, and 0 otherwise
- $q_S(P) = 0.1P - 1$
- $q_S(P) = 10P + 10$
HINT: $1 + 0.1q = P$'yi q için çöz.
EX: **Doğru cevap: $10P - 10$ (P > 1).**
**Adım adım:** $0.1q = P - 1 \Rightarrow q = 10(P - 1)$. P < 1 iken MC'nin altındaki fiyattan üretmez.
**Diğer şıklar neden yanlış?**
• $20P - 20$: MC'de katsayı 0.05 alınmış (türev unutulmuş).
• $0.1P - 1$: denklem q yerine P için çözülmüş gibi yazılmış.
• $10P + 10$: işaret hatası.

## Q
SRC: Slayt 6.7–6.8 · Piyasa dengesi
EN: There are 200 identical firms, each with supply $q_S(P) = 10P - 10$. Market demand is $Q_D = 10300 - 50P$. What is the short-run equilibrium price?
TR: 200 firma, $q_S = 10P - 10$, $Q_D = 10300 - 50P$. Denge fiyatı kaçtır?
+ 6
- 5
- 11
- 171.8
HINT: $2000P - 2000 = 10300 - 50P$.
EX: **Doğru cevap: 6.**
**Adım adım:** $Q_S = 2000P - 2000$. Eşitle: $2050P = 12300 \Rightarrow P = 6$. $Q = 10000$, her firma 50.
**Diğer şıklar neden yanlış?**
• 5: uzun dönem fiyatı (F = 80 iken min AC).
• 11: tek firma örneğindeki fiyat.
• 171.8: tek firmanın arzı ($10P - 10$) talebe eşitlenmiş; 200 ile çarpılmamış.

## Q
SRC: Slayt 6.8 · Firma kârı
EN: In the short-run equilibrium with P = 6 and q = 50 for each firm ($TC(q) = F + q + 0.05q^2$), what is each firm's profit?
TR: P = 6, q = 50 iken firma kârı nedir?
+ $125 - F$
- 125
- $300 - F$
- $175 - F$
HINT: Gelir 300, değişken maliyet?
EX: **Doğru cevap: $125 - F$.**
**Adım adım:** gelir $6\times50 = 300$. Değişken maliyet $50 + 0.05\times2500 = 175$. Kâr $300 - 175 - F = 125 - F$.
**Diğer şıklar neden yanlış?**
• 125: sabit maliyet düşülmemiş.
• $300 - F$: değişken maliyet düşülmemiş.
• $175 - F$: değişken maliyet kâr gibi yazılmış.

--- LESSON u6b | U | Uzun dönem ve rantlar
FX: P = min AC :: serbest giriş-çıkışla uzun dönem fiyatı
FX: $\frac{dAC}{dq} = -\frac{F}{q^2} + 0.05 = 0$ :: AC'nin en düşük noktası: $q_{LR} = \sqrt{F/0.05}$
FX: N = Q / q (aşağı yuvarla) :: uzun dönemde firma sayısı
FX: Rant :: maliyet üstünlüğü olan firmanın rekabetçi piyasada bile kazandığı pozitif kâr

## CARD Uzun dönem dengesi
• Kısa dönemde firma sayısı sabit; uzun dönemde giriş ve çıkış olur, firma sayısı **içsel** olarak belirlenir.
• Kâr pozitifse giriş, negatifse çıkış: fiyat AC'nin **en düşük** noktasına iner.
@fig pclr
**Örnek:** $TC = F + q + 0.05q^2$, $AC = F/q + 1 + 0.05q$. Türev sıfır: $-F/q^2 + 0.05 = 0 \Rightarrow q_{LR} = \sqrt{F/0.05}$.
F = 80 ise $q = \sqrt{1600} = 40$, en düşük AC $= 2 + 1 + 2 = 5$. Uzun dönem fiyatı **5**.
**Kaç firma?** Talep $Q_D = 10300 - 50P$; P = 5'te $Q = 10050$. $10050/40 = 251.25$ → **251 firma** (aşağı yuvarla: 252. firma girerse herkes zarar eder).

## CARD Kuram gerçeğe uyuyor mu?
Kuramın üç sonucu ve veriler:
• **Giriş ve çıkış:** uzun dönem dengesi, ardışık giriş ve çıkışlarla yakınsanan bir limit. Kuramda bir endüstriye ya girilir ya çıkılır. Ama veride **aynı anda hem giriş hem çıkış** var:
| Ülke | Brüt giriş (%) | Brüt çıkış (%) | Dönem |
| Belçika (imalat) | 5.8 | 6.3 | 80–84 |
| Belçika (hizmet) | 13.0 | 12.2 | 80–84 |
| Kanada | 4.0 | 4.8 | 71–79 |
| Almanya (FRG) | 3.8 | 4.6 | 83–85 |
| Kore | 3.3 | 5.7 | 76–81 |
| Norveç | 8.2 | 8.7 | 80–85 |
| Portekiz | 12.3 | 9.5 | 83–86 |
| Birleşik Krallık | 6.5 | 5.1 | 74–79 |
| ABD | 7.7 | 7.0 | 63–82 |
(Tablo 6.1, yıllık brüt giriş ve çıkış oranları.)
• **Kâr:** eşit erişim nedeniyle herkes aynı maliyette, uzun dönemde olağanüstü kâr sıfır. Ama 1950–1972 arasında 600 ABD firması, 1950–52 kârlarına göre 100'lük gruplara ayrıldı; 23 yıllık ortalama kâr oranlarında gruplar arası farklar **sürdü** (hiçbir grup çiftinin ortalaması eşit çıkmadı).
• **Firma büyüklüğü:** AC'yi en aza indiren tek bir üretim düzeyi olduğundan bütün firmalar aynı büyüklükte olmalı. Ama Fransa, Japonya, İngiltere ve ABD'de (çalışan sayısıyla ölçülen) firma büyüklüğü dağılımı çarpık: çok sayıda küçük, az sayıda büyük firma (Şekil 6.1).
Sonuç: standart kuram testi geçemiyor; varsayımları değiştirelim: **firmaların maliyetleri farklı olsun**.

## CARD Farklı maliyetler: marjinal firma ve rant
Firmaların maliyet yapıları farklıysa (çok sayıda küçük, fiyat alan firmayla) uzun dönem dengesinde:
• En az etkin firma (==marjinal firma==) için **p = AC**: sıfır kâr.
• Maliyet üstünlüğü olan firmalar **pozitif kâr** eder; bu kâra ==rant== denir.
• Rekabetçi piyasada firmalar, maliyet fonksiyonları rakiplerinkinden iyiyse rant kazanır.

## CARD Merlin örneği
Bütün firmaların maliyeti $TC(q) = M + 10q + wq^2$ (M yöneticinin maaşı, w işçi ücreti). Fiyat P = 30, ücret w = 2. Merlin öbür yöneticiler gibi ama espri anlayışı yüzünden insanlar onun için **yarı ücretle** (w = 1) çalışıyor. Merlin'in maaşı da M.
| | Normal firma (w = 2) | Merlin'in firması (w = 1) |
| MC | $10 + 4q$ | $10 + 2q$ |
| P = MC | $30 = 10 + 4q \Rightarrow q = 5$ | $30 = 10 + 2q \Rightarrow q = 10$ |
| Kâr | $5\times30 - M - 50 - 2\times25 = 50 - M$ | $10\times30 - M - 100 - 1\times100 = 100 - M$ |
• Merlin daha çok kâr ediyor ve pazar payı daha büyük.
• **Kısa dönem, $Q_D = 80 - P$:** P = 30'da talep 50. Merlin 10 üretir; kalan 40'ı normal firmalar 5'er üretir: **N = 8**.
• **P = 30'u uzun dönem fiyatı yapan M:** normal firmalar sıfır kâr etmeli: $50 - M = 0 \Rightarrow$ **M = 50**. O zaman normal firmalar 0, Merlin **50 rant** kazanır. Piyasada 8 normal firma + Merlin.
• Böylece kuramın üç sorunu çözülür: uzun dönemde kâr ✓, aynı anda giriş ve çıkış ✓, farklı büyüklükte firmalar ✓.
:::dikkat Tartışma sorusu
Uzun dönemde Merlin'in maaşına ne olur? Öbür firmalar onu almak için yarışır; maaşı rantı yutana kadar yükselebilir ve firmanın kârı sıfıra iner. Rant, kıt olan faktöre (Merlin'in yeteneğine) gider. Kuramcılar ampirik gerçekleri açıklamak için hep daha iyi modeller arar.
:::

## GEN pcLong
## GEN diffCost

## Q
SRC: Slayt 6.11 · Uzun dönem fiyatı
EN: Each firm has $TC(q) = 80 + q + 0.05q^2$ and there is free entry. What is the long-run equilibrium price?
TR: $TC = 80 + q + 0.05q^2$, serbest giriş. Uzun dönem fiyatı kaçtır?
+ 5
- 6
- 40
- 3
HINT: AC'nin en düşük değeri.
EX: **Doğru cevap: 5.**
**Adım adım:** $AC = 80/q + 1 + 0.05q$. $-80/q^2 + 0.05 = 0 \Rightarrow q^2 = 1600 \Rightarrow q = 40$. $AC(40) = 2 + 1 + 2 = 5$.
**Diğer şıklar neden yanlış?**
• 6: kısa dönem denge fiyatı (200 firmayla).
• 40: firma başına uzun dönem üretimi, fiyat değil.
• 3: AC'den bir terim ($80/40 + 1$) eksik alınmış.

## Q
SRC: Slayt 6.12 · Firma sayısı
EN: With a long-run price of 5, output per firm of 40, and market demand $Q_D = 10300 - 50P$, how many firms are active in the long-run equilibrium?
TR: Uzun dönemde kaç firma olur?
+ 251
- 252
- 257
- 200
HINT: 10050/40 = 251.25.
EX: **Doğru cevap: 251.**
**Adım adım:** $Q = 10300 - 250 = 10050$. $10050/40 = 251.25$ → aşağı yuvarla: 251. Yukarı yuvarlarsan 252 firma pazarı paylaşır, her biri 40'tan az üretir ve AC > P olur.
**Diğer şıklar neden yanlış?**
• 252: yukarı yuvarlanmış.
• 257: $10300/40$; fiyat düşülmemiş.
• 200: kısa dönemdeki firma sayısı.

## Q
SRC: Tablo 6.1 · Giriş ve çıkış
EN: Table 6.1 reports annual gross entry and exit rates for several countries (for example, 7.7% entry and 7.0% exit in the United States). What does this evidence show about the standard theory of perfect competition?
TR: Tablo 6.1 standart kuram hakkında ne gösteriyor?
+ Contrary to the theory, there is simultaneous entry and exit in industries
- Entry rates are always exactly equal to exit rates, as the theory predicts
- Firms only enter and never exit
- All firms have the same size
HINT: Kuramda bir endüstriye ya girilir ya çıkılır.
EX: **Doğru cevap: aynı anda giriş ve çıkış var.**
Kuram, kâr pozitifse yalnızca giriş, negatifse yalnızca çıkış bekler. Veride ikisi birlikte ve büyük oranlarda.
**Diğer şıklar neden yanlış?**
• exactly equal: oranlar yakın ama eşit değil; kuramın öngörüsü de bu değil.
• never exit: çıkış oranları da yüksek.
• same size: büyüklük dağılımı Şekil 6.1'de; o da kuramla çelişiyor.

## Q
SRC: Slayt 6.19 · Marjinal firma
EN: If firms have different cost structures, then in a long-run competitive equilibrium:
TR: Maliyetler farklıysa uzun dönem dengesinde hangisi doğru?
+ the least efficient (marginal) firm earns zero profit, while firms with cost advantages earn rents
- all firms earn zero profit
- the most efficient firm sets the price equal to its average cost
- the least efficient firm earns the highest profit
HINT: Merlin ile normal firma.
EX: **Doğru cevap: marjinal firma sıfır kâr, ucuz firmalar rant.**
Fiyat marjinal firmanın AC'sine eşit; daha düşük maliyetli firmalar aynı fiyattan satıp pozitif kâr eder.
**Diğer şıklar neden yanlış?**
• all zero: aynı maliyet varsayımının sonucu; burada geçerli değil.
• most efficient sets P = AC: o zaman öbür firmalar zarar edip çıkardı.
• least efficient highest profit: tersi.

## Q
SRC: Slayt 6.20–6.22 · Merlin
EN: All firms have $TC(q) = M + 10q + wq^2$; the price is 30 and the market wage is 2, but Merlin's workers accept half the wage. How much do a regular firm and Merlin's firm produce?
TR: Normal firma ve Merlin'in firması kaç üretir?
+ Regular firm 5, Merlin's firm 10
- Regular firm 10, Merlin's firm 5
- Both produce 5
- Regular firm 5, Merlin's firm 20
HINT: $MC = 10 + 2wq$.
EX: **Doğru cevap: 5 ve 10.**
**Adım adım:** normal: $30 = 10 + 4q \Rightarrow q = 5$. Merlin (w = 1): $30 = 10 + 2q \Rightarrow q = 10$.
**Diğer şıklar neden yanlış?**
• reversed: ucuz işçili firma daha çok üretir.
• both 5: Merlin'in MC'si daha düşük; aynı fiyatta daha çok üretir.
• 20: ücretin yarıya inmesi MC'nin eğimini yarıya indirir, miktar iki katına çıkar (4 katına değil).

## Q
SRC: Slayt 6.24–6.25 · Merlin uzun dönem
EN: In the Merlin example, what manager salary M makes P = 30 the long-run equilibrium price, and what is Merlin's firm's profit then?
TR: P = 30'u uzun dönem fiyatı yapan M ve Merlin'in kârı?
+ M = 50; Merlin's firm earns 50
- M = 100; Merlin's firm earns 0
- M = 50; Merlin's firm earns 0
- M = 0; Merlin's firm earns 100
HINT: Normal firmanın kârı $50 - M$.
EX: **Doğru cevap: M = 50, Merlin 50.**
**Adım adım:** normal firma sıfır kâr etmeli: $50 - M = 0 \Rightarrow M = 50$. Merlin: $100 - 50 = 50$ (rant).
**Diğer şıklar neden yanlış?**
• M = 100: normal firmalar −50 zarar eder, çıkarlar; P = 30 denge olmaz.
• Merlin 0: maliyet üstünlüğü rant getirir.
• M = 0: normal firmalar 50 kâr eder, giriş olur.

## Q
SRC: Slayt 6.21 · Merlin kısa dönem
EN: In the Merlin example, market demand is $Q_D(P) = 80 - P$. In the short-run equilibrium at P = 30 with N regular firms (each producing 5) and Merlin's firm (producing 10), what is N?
TR: Kısa dönemde N kaçtır?
+ 8
- 10
- 6
- 16
HINT: Talep 50; Merlin 10 alıyor.
EX: **Doğru cevap: 8.**
**Adım adım:** $Q_D = 80 - 30 = 50$. $5N + 10 = 50 \Rightarrow N = 8$.
**Diğer şıklar neden yanlış?**
• 10: Merlin'in payı düşülmemiş ($50/5$).
• 6: Merlin iki kez sayılmış.
• 16: Merlin'in üretimi firma sayısıyla karıştırılmış.

--- LESSON u6c | T | Tekelci rekabet
FX: Tekelci rekabet :: tam rekabetin bütün varsayımları, yalnızca ürünler homojen değil
FX: Kısa dönem: MR = MC, fiyat firmanın talebinden :: grafik tekelinkine benzer
FX: Uzun dönem: P = AC (talep AC'ye teğet), P > MC :: kâr sıfır; küçük DWL ve atıl kapasite, karşılığında çeşitlilik

## CARD Tekelci rekabet nedir?
• Çok sayıda firma (tam rekabetteki gibi) ama ürünler **tam aynı değil**. Örnekler: küçük restoranlar, şampuan (markette kaç marka şampuan var bir düşün), oteller, kot pantolon.
• Şampuan yapma ya da yemek servisi teknolojisi iyi bilinir ve erişilebilir: öbür varsayımlar geçerli.
• Adı yüzünden hep tekelle karıştırılır. Aslında **varsayımlarda tam rekabete**, **analizde (grafiklerde) tekele** yakın.
• Tam rekabet varsayımlarından tek değişiklik: ==ürünler homojen değil==.

## CARD Kısa dönem
@fig mcsr
• Tekel grafiğinden tek fark: tekelde piyasa talebi ile firmanın talebi **aynı**; tekelci rekabette **çok farklı**.
• Hangisi daha esnek? **Firmanın talebi**: fiyatını artıran firmanın müşterileri yakın ikamelere kaçar.
• Kim daha çok fiyat koyabilir? **Tekel**: firmanın talebi daha az esnek, marj ($1/|\varepsilon|$) daha büyük.

## CARD Uzun dönem
• Kâr pozitifse giriş, negatifse çıkış olur.
@fig mclr
| | Tam rekabet | Tekelci rekabet |
| Uzun dönem kâr | 0 | 0 |
| Fiyat | P = MC = min AC | P = AC > MC |
| Üretim | AC'nin en düşük noktası | en düşük noktanın solu (atıl kapasite) |
| Ölü ağırlık kaybı | 0 | var (küçük) |
| Çeşitlilik | yok (homojen ürün) | var |
Tam rekabet daha çok üretir ve fiyatı daha düşüktür. Ama hangisi daha iyi? Bütün kotların aynı olmasını ister miydin? Çeşitliliğin değeri DWL'yi telafi edebilir.

## CARD Ödev çözümü
$TC(q) = 40 + q + 0.05q^2$; firmanın talebi $P = 10 - 0.1q$.
• $MR = 10 - 0.2q$, $MC = 1 + 0.1q$. MR = MC: $9 = 0.3q \Rightarrow q = 30$.
• Fiyat talepten: $P = 10 - 3 = 7$.
• $AC = 40/30 + 1 + 1.5 = 3.83$. Kâr $(7 - 3.83)\times30 = 95$.
• **Uzun dönem dengesinde mi?** Hayır: kâr pozitif (95), yeni firmalar girer, bu firmanın talebi sola kayar, kâr sıfıra inene kadar.

## GEN monoComp

## Q
SRC: Slayt 6.29 · Tek fark
EN: Monopolistic competition keeps the assumptions of perfect competition with only one change. Which one?
TR: Tekelci rekabetin tam rekabetten tek farkı nedir?
+ Products are not homogeneous
- There is only one firm
- Entry is not free
- Firms have different technologies
HINT: Şampuan markaları.
EX: **Doğru cevap: ürünler homojen değil.**
**Diğer şıklar neden yanlış?**
• one firm: tekel; tekelci rekabette çok sayıda firma var.
• entry not free: tersine serbest giriş uzun dönemde kârı sıfırlar.
• different technologies: teknoloji iyi bilinir ve erişilebilir (eşit erişim geçerli).

## Q
SRC: Slayt 6.32 · Esneklik
EN: In monopolistic competition, which is more elastic: the market demand or the demand facing an individual firm?
TR: Hangisi daha esnek: piyasa talebi mi, firmanın talebi mi?
+ The demand facing the individual firm, because close substitutes are available
- The market demand, because it includes all consumers
- They are equally elastic, as in monopoly
- Neither: both are perfectly inelastic
HINT: Fiyatını artıran tek bir restoran ne olur?
EX: **Doğru cevap: firmanın talebi.**
Bir firma fiyat artırınca müşteriler yakın ikamelere geçer. Bütün piyasa birlikte fiyat artırsa kaçacak yer azdır.
**Diğer şıklar neden yanlış?**
• market demand: piyasa talebi daha az esnek.
• equal as in monopoly: tekelde ikisi aynı eğri; tekelci rekabette farklı.
• perfectly inelastic: her iki talep de fiyata tepki verir.

## Q
SRC: Slayt 6.34–6.35 · Uzun dönem
EN: In the long-run equilibrium of monopolistic competition:
TR: Tekelci rekabette uzun dönem dengesi için hangisi doğru?
+ price equals average cost (zero profit) but exceeds marginal cost
- price equals marginal cost and the minimum of average cost
- firms earn positive profits because products are differentiated
- price equals marginal revenue
HINT: Firmanın talebi AC'ye teğet.
EX: **Doğru cevap: P = AC > MC.**
Giriş kârı sıfırlar (talep AC'ye teğet). Ama talep aşağı eğimli olduğundan teğet nokta AC'nin en düşük noktasının solunda; P > MC, küçük bir DWL var.
**Diğer şıklar neden yanlış?**
• P = MC = min AC: tam rekabetin uzun dönemi.
• positive profits: giriş serbest; kâr sıfıra iner.
• P = MR: MR = MC'dir; P > MR.

## Q
SRC: Slayt 6.36 · Ödev fiyatı
EN: A monopolistically competitive firm has $TC(q) = 40 + q + 0.05q^2$ and faces demand $P = 10 - 0.1q$. What price does it charge in the short run?
TR: Ödevdeki firma kısa dönemde hangi fiyatı koyar?
+ 7
- 4
- 5.5
- 10
HINT: MR = MC, sonra talepten fiyat.
EX: **Doğru cevap: 7.**
**Adım adım:** $10 - 0.2q = 1 + 0.1q \Rightarrow q = 30$, $P = 10 - 3 = 7$.
**Diğer şıklar neden yanlış?**
• 4: miktar doğru (30) ama fiyat MC'den okunmuş: $MC(30) = 1 + 3 = 4$. Fiyat talep eğrisinden okunur.
• 5.5: P = MC kullanılmış: $10 - 0.1q = 1 + 0.1q \Rightarrow q = 45$, $P = 5.5$ (rekabetçi davranış).
• 10: talebin kesişimi (q = 0).

## Q
SRC: Slayt 6.36 · Uzun dönem mi?
EN: The firm in the homework (q = 30, P = 7, profit 95) is in the short run. Is it in a long-run equilibrium?
TR: Ödevdeki firma uzun dönem dengesinde mi?
+ No: it earns positive profit, so new firms will enter and shift its demand to the left
- Yes: it sets MR = MC
- Yes: monopolistic competitors always earn positive profits
- No: it should set P = MC in the long run
HINT: Kâr 95 > 0.
EX: **Doğru cevap: hayır, giriş olur.**
Uzun dönemde kâr sıfır olmalı; pozitif kâr giriş çeker.
**Diğer şıklar neden yanlış?**
• MR = MC: kısa dönemde de sağlanır; uzun dönemin ek koşulu sıfır kâr.
• always positive: serbest giriş kârı sıfırlar.
• P = MC: tekelci rekabette uzun dönemde de P > MC.

## Q
SRC: Slayt 6.35 · Karşılaştırma
EN: Compared with perfect competition, the long-run equilibrium of monopolistic competition has:
TR: Tam rekabete göre tekelci rekabette uzun dönemde hangisi doğru?
+ lower output per firm, a higher price and some deadweight loss, but more product variety
- the same price and output, but more variety
- higher output and a lower price
- positive profits and no deadweight loss
HINT: Kotların hepsi aynı olsun ister miydin?
EX: **Doğru cevap: daha az üretim, daha yüksek fiyat, biraz DWL, ama çeşitlilik.**
**Diğer şıklar neden yanlış?**
• same price and output: P > MC olduğu için aynı değil.
• higher output: tam rekabet daha çok üretir.
• positive profits: uzun dönemde kâr sıfır; DWL de var.
`);
