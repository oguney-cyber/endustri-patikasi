CONTENT.push(String.raw`
=== UNIT u7 | Bölüm 7 | Oligopol | Bertrand modeli ve paradoks, kapasite kısıtı, Cournot modeli, tepki fonksiyonları, Bertrand mı Cournot mu, karşılaştırmalı statik

--- LESSON u7a | B | Bertrand modeli
FX: Aynı ürün: en ucuz satan bütün talebi alır :: eşit fiyatta talep yarı yarıya bölünür
FX: $p_1 = p_2 = c$ :: Bertrand dengesi: iki firma yeter, fiyat marjinal maliyete iner
FX: $P = a - 2K$ :: kapasiteler küçükse (MR(K) ≥ c) denge fiyatı kapasiteyi dolduran fiyat

## CARD Neden oyun kuramı?
Coca-Cola ABD ve Kanada'da fiyatlarını yaklaşık %5 artırmaya hazırlanıyor; bu Coke'un kârını artırabilir. Ama Coke'un başarısı için önemli olan **Pepsi'nin nasıl tepki vereceği**: Pepsi pazar payı kazanmak için marjından fedakârlık edebilir. Oligopolde her firmanın kârı rakibin kararına bağlı: tam Bölüm 4'teki stratejik etkileşim.

## CARD Bertrand modeli
Varsayımlar:
• Endüstride iki firma.
• Ürün homojen (tam ikame).
• Fiyatlar eşanlı seçilir.
• Piyasa talebi doğrusal.
• Marjinal maliyet sabit (c).
Talep kuralı: $p_i < p_j$ ise i firmasının talebi $D(p_i)$, j'ninki 0. Fiyatlar eşitse her biri $\tfrac12 D(p)$ alır.
@fig bdem

## CARD Bertrand dengesi ve paradoks
• Baskın strateji dengesi yok, IEDS çözümü yok.
• **$p_1 = p_2 = c$ Nash dengesi mi?** Evet: ikisi de sıfır kâr ediyor. Fiyatı artıran müşterisiz kalır (yine 0); c'nin altına inen zarar eder.
| Aday | Neden Nash değil? |
| $p_1 > p_2 > c$ | 2. firma fiyatını biraz artırıp (hâlâ $p_1$'in altında) daha çok kazanır; 1. firma 0 alıyor, $p_2$'nin altına inip pozitif kâr eder |
| $p_1 = p_2 > c$ | Biri fiyatı bir kuruş indirip pazarın yarısı yerine tamamını alır: kâr neredeyse iki katına çıkar |
| $p_1 > c > p_2$ | 2. firma zarar ediyor; fiyatı c'ye çıkarsa zarardan kurtulur |
| fiyatlardan biri c'nin altında | satan firma zarar eder; sapmak ister |
• Tek Nash dengesi $p = c$.
:::dikkat Bertrand paradoksu
Yalnızca **iki** rakiple Nash dengesi tam rekabet dengesiyle aynı. Bir firma: tekel; iki firma: tam rekabet. Gerçek dünya verileriyle bağdaşmıyor; paradoks bu.
:::

## CARD Kapasite kısıtlı Bertrand
Ters talep $P = 12 - Q$, her firma en çok K = 3 üretebilir, MC = 2.
**İddia 1: $P_1 = P_2 = 2$ Nash dengesi değil.**
• İkisi de 0 kâr ediyor. 1. firma $P_1 = 4$'e çıksın: tüketiciler önce 2. firmaya gider, 3 birim alır (tam kapasite).
• 1. firmanın kalan talebi $Q = 12 - P - 3 = 9 - P$; P = 4'te 5 birim. Ama 1. firma en çok 3 üretebilir: kâr $(4 - 2)\times3 = 6 > 0$. Sapma kârlı.
**İddia 2: $P_1 = P_2 = 6$ Nash dengesi.** (Bu fiyatta talep tam kapasiteye eşit: 6.)
• Her firma 3 satar, kâr $(6 - 2)\times3 = 12$.
• **Fiyat indirmek** işe yaramaz: firma zaten tam kapasitede, daha çok satamaz.
• **Fiyat artırmak:** 2. firma önce 3 satar; 1. firmanın kalan talebi $Q = 9 - P$. MC = 2 olan bir tekel bu talepte ne yapar? $MR = 9 - 2Q$; Q = 3'te $MR = 3 > MC = 2$. Fiyatı artırmak (Q'yu azaltmak) MR'ı daha da yükseltir, hep 2'nin üstünde kalır: üretimi kısmak kârı azaltır.
• Ne yukarı ne aşağı sapma kârlı: (6, 6) Nash dengesi.
@fig cap

## GEN bertrandAsym
## GEN capBert

## Q
SRC: Slayt 7.5–7.7 · Bertrand dengesi
EN: Two firms with identical constant marginal cost c sell a homogeneous product and set prices simultaneously. What is the unique Nash equilibrium?
TR: Bertrand modelinin tek Nash dengesi nedir?
+ Both firms set p = c
- Both firms set the monopoly price
- Each firm sets the Cournot price
- One firm sets p = c and the other sets the monopoly price
HINT: Rakibin bir kuruş altına inmek bütün pazarı getirir.
EX: **Doğru cevap: iki firma da p = c.**
c'nin üstündeki her ortak fiyatta bir firma rakibin hemen altına inip bütün pazarı alır. Kırma süreci ancak c'de durur.
**Diğer şıklar neden yanlış?**
• monopoly price: ikisi için de en iyi sonuç ama her biri fiyatı kırmak ister (tutsak ikilemi).
• Cournot price: miktar rekabetinin sonucu; Bertrand'da fiyat daha düşük.
• one at c, other at monopoly: c'deki firma bütün pazarı alıp sıfır kâr ediyor; fiyatını biraz artırıp (öbürünün altında kalarak) kâr edebilir.

## Q
SRC: Slayt 7.6 · Eşit ama yüksek fiyat
EN: In the Bertrand model, why is $p_1 = p_2 > c$ not a Nash equilibrium?
TR: $p_1 = p_2 > c$ neden Nash dengesi değil?
+ Either firm can cut its price slightly and capture the whole market, almost doubling its profit
- Both firms make losses at this price
- Consumers refuse to buy when prices are equal
- Each firm would rather raise its price to the monopoly level
HINT: Pazarın yarısı mı, tamamı mı?
EX: **Doğru cevap: hafif indirim bütün pazarı getirir.**
Eşit fiyatta her firma $\tfrac12 D(p)$ satar. Bir kuruş indirince $D(p)$'nin tamamını alır; marj neredeyse aynı, satış iki katı.
**Diğer şıklar neden yanlış?**
• losses: p > c iken ikisi de kâr ediyor.
• refuse to buy: eşit fiyatta talep yarı yarıya bölünür.
• raise price: fiyatını yükselten firma bütün müşterilerini kaybeder.

## Q
SRC: Slayt 7.7 · Paradoks
EN: Why is the outcome of the Bertrand model called a paradox?
TR: Bertrand sonucu neden paradoks?
+ With only two competitors the equilibrium is the same as under perfect competition (p = c)
- Firms earn monopoly profits even though they compete
- The equilibrium price is above the monopoly price
- There is no Nash equilibrium
HINT: Bir firma: tekel; iki firma: ?
EX: **Doğru cevap: iki firma tam rekabet sonucunu veriyor.**
Gerçekte iki firmalı piyasalarda fiyatın maliyete indiğini pek görmeyiz; model veriyle bağdaşmıyor.
**Diğer şıklar neden yanlış?**
• monopoly profits: tersine kâr sıfır.
• above monopoly price: fiyat c'ye iner.
• no Nash: tek bir Nash dengesi var (p = c).

## Q
SRC: Slayt 7.9 · Kapasite: iddia 1
EN: Inverse demand is $P = 12 - Q$, each firm's capacity is K = 3 and marginal cost is 2. Starting from $P_1 = P_2 = 2$, firm 1 raises its price to 4. What is firm 1's profit?
TR: $P_1 = P_2 = 2$'den 1. firma fiyatı 4'e çıkarırsa kârı ne olur?
+ 6
- 10
- 0
- 12
HINT: Rakip önce 3 satar; kalan talep 9 − P, ama kapasite 3.
EX: **Doğru cevap: 6.**
**Adım adım:** 2. firma 3 birim satar. 1. firmanın kalan talebi $9 - P$; P = 4'te 5 birim, ama en çok 3 üretebilir. Kâr $(4 - 2)\times3 = 6$. 6 > 0 olduğu için (2, 2) denge değil.
**Diğer şıklar neden yanlış?**
• 10: kapasite unutulup 5 birim satılmış: $(4 - 2)\times5$.
• 0: kapasite kısıtı olmasaydı (klasik Bertrand) doğru olurdu; rakip bütün talebi karşılayamıyor.
• 12: (6, 6) dengesindeki kâr.

## Q
SRC: Slayt 7.10–7.11 · Kapasite: iddia 2
EN: With $P = 12 - Q$, capacity K = 3 per firm and MC = 2, $P_1 = P_2 = 6$ is a Nash equilibrium. Why doesn't firm 1 gain by raising its price above 6?
TR: Birinci firma fiyatı 6'nın üstüne neden çıkarmaz?
+ On its residual demand $9 - P$, marginal revenue at Q = 3 is 3, above MC = 2, so cutting output lowers profit
- Because firm 2 would immediately lower its price to 2
- Because at any price above 6 firm 1 sells nothing
- Because demand is perfectly elastic above 6
HINT: Kalan talepte MR'ı hesapla.
EX: **Doğru cevap: Q = 3'te MR = 3 > MC = 2.**
**Adım adım:** rakip 3 satar, kalan ters talep $P = 9 - Q$, $MR = 9 - 2Q$. Q = 3'te MR = 3. Üretimi kısmak (fiyatı artırmak) her vazgeçilen birimde MC'den fazla gelir kaybettirir.
**Diğer şıklar neden yanlış?**
• lower to 2: Nash kontrolünde rakibin fiyatı sabit tutulur.
• sells nothing: rakip yalnızca 3 karşılayabilir; kalan talep pozitif.
• perfectly elastic: talep doğrusal, eğimi −1.

## Q
SRC: Slayt 7.10 · Kapasite: kâr
EN: In the capacity-constrained Bertrand equilibrium ($P = 12 - Q$, K = 3, MC = 2), what is each firm's profit?
TR: (6, 6) dengesinde her firmanın kârı kaçtır?
+ 12
- 18
- 0
- 24
HINT: (6 − 2) × 3.
EX: **Doğru cevap: 12.**
**Adım adım:** fiyat 6, satış 3, kâr $(6 - 2)\times3 = 12$.
**Diğer şıklar neden yanlış?**
• 18: 6 × 3, maliyet düşülmemiş.
• 0: kapasite kısıtı olmayan Bertrand.
• 24: iki firmanın toplam kârı.

--- LESSON u7b | C | Cournot modeli
FX: $q_1 = \frac{a - c}{2b} - \frac{q_2}{2}$ :: firma 1'in tepki (en iyi cevap) fonksiyonu
FX: $q_1 = q_2 = \frac{a - c}{3b}$ :: simetrik Cournot dengesi
FX: $P = \frac{a + 2c}{3}$ :: iki eş firmada denge fiyatı
FX: $q_i = \frac{a - 2c_i + c_j}{3b}$ :: maliyetler farklıysa

## CARD Cournot modeli
• Piyasada iki firma; fiyat yerine **miktar** seçerler.
• Miktarlar seçilince fiyat piyasayı temizleyecek şekilde ayarlanır: talep edilen miktar iki firmanın toplam üretimine eşit olur.
:::ornek Fiyat nasıl bulunur?
Piyasa talebi $Q(P) = 20 - 4P$, ters talep $P(Q) = 5 - Q/4$. $q_1 = 3$, $q_2 = 5$ ise $Q = 8$, $P = 5 - 2 = 3$.
:::

## CARD Tepki fonksiyonu
Ters talep $P = a - bQ$, maliyet $C(q) = cq$, $Q = q_1 + q_2$.
$$\pi_1 = (a - b(q_1 + q_2))q_1 - cq_1$$
Birinci sıra koşulu: $-bq_1 + a - b(q_1 + q_2) - c = 0$, yani
$$q_1 = \frac{a - c}{2b} - \frac{q_2}{2}$$
İkinci firma için aynı hesap: $q_2 = \frac{a - c}{2b} - \frac{q_1}{2}$. İki denklem, iki bilinmeyen: Nash dengesi
$$q_1 = q_2 = \frac{a - c}{3b}$$

## CARD Örnek: $P = 12 - Q$, maliyet sıfır
• Firma 1: $\pi_1 = (12 - q_1 - q_2)q_1$. Türev: $12 - 2q_1 - q_2 = 0 \Rightarrow q_1 = 6 - 0.5q_2$. Benzer şekilde $q_2 = 6 - 0.5q_1$.
• Denge: $q_1 = q_2 = 4$, $P = 4$, her firma 16 kâr.
@fig react
• İkisi de 3 üretseydi ($P = 6$, kâr 18) daha çok kazanırlardı. Ama (3, 3) **kendiliğinden sürmez**: $q_2 = 3$ iken 1. firmanın en iyi cevabı $6 - 1.5 = 4.5$. Fazla üreteni cezalandıran bir mekanizma yoksa olmaz (Bölüm 8).

## CARD Ödev: farklı maliyetler
$P = 12 - Q$, $c_1 = 1$, $c_2 = 2$.
• Tepki fonksiyonları: $q_1 = (11 - q_2)/2$, $q_2 = (10 - q_1)/2$.
• Çöz: $q_1 = \frac{12 - 2 + 2}{3} = 4$, $q_2 = \frac{12 - 4 + 1}{3} = 3$. $P = 12 - 7 = 5$.
• Kârlar: $\pi_1 = (5 - 1)\times4 = 16$, $\pi_2 = (5 - 2)\times3 = 9$. Ucuz firma daha çok üretir ve daha çok kazanır.
:::ipucu Sınavda hızlı yol
İki firma: $q_i = (a - 2c_i + c_j)/(3b)$, $P = (a + c_1 + c_2)/3$. n eş firma: $q = (a - c)/((n + 1)b)$, $P = (a + nc)/(n + 1)$; n büyüdükçe P → c.
:::

## GEN cournot2
## GEN cournotAsym
## GEN cournotN
## GEN cournotDemand

## Q
SRC: Slayt 7.13 · Fiyatın belirlenmesi
EN: In a Cournot market, demand is $Q(P) = 20 - 4P$. If firm 1 produces 3 units and firm 2 produces 5 units, what is the market price?
TR: $Q = 20 - 4P$, $q_1 = 3$, $q_2 = 5$. Fiyat kaçtır?
+ 3
- 12
- 4.25
- 2
HINT: Ters talep $P = 5 - Q/4$.
EX: **Doğru cevap: 3.**
**Adım adım:** $Q = 8$, $P = 5 - 8/4 = 3$.
**Diğer şıklar neden yanlış?**
• 12: $20 - 8$; 4'e bölmek unutulmuş.
• 4.25: yalnızca $q_1$ kullanılmış: $5 - 3/4$.
• 2: işlem hatası ($5 - 3$).

## Q
SRC: Slayt 7.17–7.18 · Tepki fonksiyonu
EN: Inverse demand is $P = 12 - (q_1 + q_2)$ and all costs are zero. What is firm 1's reaction function?
TR: $P = 12 - Q$, maliyet sıfır. Firma 1'in tepki fonksiyonu nedir?
+ $q_1 = 6 - 0.5q_2$
- $q_1 = 12 - q_2$
- $q_1 = 6 - q_2$
- $q_1 = 4$
HINT: $12 - 2q_1 - q_2 = 0$.
EX: **Doğru cevap: $q_1 = 6 - 0.5q_2$.**
**Adım adım:** $\pi_1 = (12 - q_1 - q_2)q_1$, türev $12 - 2q_1 - q_2 = 0$.
**Diğer şıklar neden yanlış?**
• $12 - q_2$: fiyatı sıfıra indiren miktar; kâr en çoklayan değil.
• $6 - q_2$: türevde $q_2$'nin katsayısı yanlış.
• $q_1 = 4$: denge miktarı; tepki fonksiyonu değil.

## Q
SRC: Slayt 7.18 · Cournot dengesi
EN: With inverse demand $P = 12 - Q$ and zero costs, how much does each firm produce in the Cournot equilibrium, and what is the price?
TR: Cournot dengesinde firma miktarı ve fiyat nedir?
+ 4 each; price 4
- 3 each; price 6
- 6 each; price 0
- 6 in total; price 6
HINT: $(a - c)/(3b)$.
EX: **Doğru cevap: her biri 4, fiyat 4.**
**Adım adım:** $q = 12/3 = 4$, $Q = 8$, $P = 4$.
**Diğer şıklar neden yanlış?**
• 3 each, price 6: tekel miktarının yarısı (gizli anlaşma); denge değil.
• 6 each, price 0: Bertrand gibi rekabetçi sonuç (P = MC = 0).
• 6 in total: tekel çözümü.

## Q
SRC: Slayt 7.19 · Sürmeyen anlaşma
EN: With $P = 12 - Q$ and zero costs, both firms would earn more by producing 3 units each. If firm 2 produces 3, what is firm 1's best response?
TR: $q_2 = 3$ iken firma 1'in en iyi cevabı nedir?
+ 4.5
- 3
- 4
- 6
HINT: $q_1 = 6 - 0.5q_2$.
EX: **Doğru cevap: 4.5.**
**Adım adım:** $6 - 0.5\times3 = 4.5$. Anlaşmaya uymak en iyi cevap değil; ceza mekanizması olmadan (3, 3) sürmez.
**Diğer şıklar neden yanlış?**
• 3: anlaşma miktarı; en iyi cevap değil.
• 4: denge miktarı; rakip 4 üretirken en iyi cevap.
• 6: rakip hiç üretmezken en iyi cevap (tekel).

## Q
SRC: Slayt 7.19 · Ödev
EN: Inverse demand is $P = 12 - Q$. Firm 1's marginal cost is 1 and firm 2's is 2. What are the Cournot equilibrium quantities?
TR: $c_1 = 1$, $c_2 = 2$. Cournot miktarları nedir?
+ $q_1 = 4$, $q_2 = 3$
- $q_1 = 3$, $q_2 = 4$
- $q_1 = q_2 = 3.5$
- $q_1 = 5.5$, $q_2 = 5$
HINT: $q_i = (a - 2c_i + c_j)/3$.
EX: **Doğru cevap: 4 ve 3.**
**Adım adım:** $q_1 = (11 - q_2)/2$, $q_2 = (10 - q_1)/2$. Yerine koy: $q_1 = (11 - 5 + q_1/2)/2 \Rightarrow 1.5q_1 = 6 \Rightarrow q_1 = 4$, $q_2 = 3$. $P = 5$.
**Diğer şıklar neden yanlış?**
• 3 and 4: ters; ucuz firma daha çok üretir.
• 3.5 each: maliyetler ortalanmış; asimetri kaybolmuş.
• 5.5 and 5: rakip yokmuş gibi tekel miktarları ($(a - c_i)/2$).

## Q
SRC: Slayt 8.2 · Toplam kâr
EN: Compared with monopoly, total profits in the Cournot equilibrium are:
TR: Cournot dengesinde toplam kâr tekele göre nasıldır?
+ lower, because each firm ignores the negative effect of its output on its rival's profit
- higher, because two firms produce more
- equal, because total output is the same
- zero, as in the Bertrand model
HINT: Örnekte toplam 32, tekel 36.
EX: **Doğru cevap: daha düşük.**
$P = 12 - Q$, maliyet 0: Cournot toplamı $16 + 16 = 32$, tekel kârı 36. Her firma üretimini artırırken fiyat düşüşünün rakibe verdiği zararı hesaba katmaz (dışsallık).
**Diğer şıklar neden yanlış?**
• higher: daha çok üretim fiyatı düşürür; toplam kâr azalır.
• equal: Cournot toplam miktarı (8) tekelinkinden (6) büyük.
• zero: bu Bertrand sonucu; Cournot'ta kâr pozitif.

--- LESSON u7c | K | Bertrand mı Cournot mu? Karşılaştırmalı statik
FX: Kapasite kolay ayarlanıyorsa Bertrand, zor ayarlanıyorsa Cournot :: modeli sektöre göre seç
FX: $\frac{dp^N}{dc} = \frac{2}{3}$ :: iki eş firmalı Cournot'ta maliyet artışının üçte ikisi fiyata yansır

## CARD Hangi model daha iyi?
Kural: **kapasite ve üretim kolayca ayarlanabiliyorsa Bertrand**, **zor ayarlanıyorsa Cournot** düopol rekabetine daha iyi bir yaklaşım.
• Gerçek dünyadaki endüstrilerin çoğu kapasitenin zor ayarlandığı duruma yakın: kapasite ya da üretim uzun dönem değişkeni, fiyat kısa dönemde belirleniyor (buğday, çimento, çelik, araba, bilgisayar).
• **Video oyun konsolları:** Ağustos 1999'da Sony konsol fiyatını 129 dolardan 99 dolara indirdi; bir saat sonra Nintendo aynı indirimi duyurdu. Talep arttı, Nintendo yılbaşı döneminde ciddi stok sıkıntısı yaşadı. Fiyat miktardan kolay ayarlanıyor: **Cournot** daha iyi yaklaşım.
• **Yazılım, sigorta, bankacılık:** kapasite (en azından üretim) fiyattan hızlı ayarlanıyor. Yazılım şirketi talebe göre kopya üretir, hatta elektronik olarak gönderir: **Bertrand** daha iyi yaklaşım. Örnek: Britannica ansiklopedisi 32 ciltlik takımı 1600 dolara satıyordu; 1990'ların başında Microsoft Encarta'yı CD'de 100 doların altında sattı, Britannica kendi CD'siyle karşılık verdi. Son durumda ikisi de 89.99 dolar: Bertrand dengesinden (CD maliyeti) hâlâ uzak, ama ilk tekel benzeri fiyattan çok daha yakın.

## CARD Karşılaştırmalı statik: transatlantik uçuşlar
Londra–New York hattında iki firma: American Airlines (AA) ve British Airways (BA). İkisinin MC'si aynı: %50 emek, %50 yakıt. Petrol fiyatı varil başına 10 dolar artıyor, yakıt fiyatları **%80** artıyor. Bilet fiyatlarına ne olur?
• AA ve BA'nın Cournot rekabeti yaptığını varsay (kapasiteyi, yani uçakları önceden ayırmak gerekiyor).
• Yakıttaki %80 artış MC'yi $80\% \times 50\% = 40\%$ artırır.
• Simetrik Cournot dengesi: $q^N = \frac{a - c}{3b}$, $Q^N = 2\frac{a - c}{3b}$, fiyat
$$p^N = a - bQ^N = a - b\cdot2\frac{a - c}{3b} = \frac{a + 2c}{3} \qquad (7.2)$$
$$\frac{dp^N}{dc} = \frac{2}{3}$$
• Kitabın sonucu: MC %40 artarsa fiyat $\tfrac23 \times 40\% = 26.6\%$ artar.
:::dikkat Sınavda hangi sayı?
Slayttaki cevap **%26.6** (aslında $\tfrac23\times40 = 26.67$). Kesin konuşursak $dp/dc = 2/3$ mutlak artış içindir: fiyat, maliyet artışının üçte ikisi kadar (lira olarak) artar. Fiyat maliyetten yüksek olduğu için yüzde artış biraz daha düşük çıkar. Testte slayttaki cevabı (%26.6) seç.
:::

## GEN compStat

## Q
SRC: Slayt 7.20 · Model seçimi
EN: If capacity and output can be easily adjusted, which model is a better approximation of duopoly competition?
TR: Kapasite ve üretim kolay ayarlanıyorsa hangi model daha iyi?
+ The Bertrand model
- The Cournot model
- The monopoly model
- The perfect competition model
HINT: Kolay ayarlanan değişken fiyat değilse...
EX: **Doğru cevap: Bertrand.**
Kapasite esnekse firmalar fiyat seçer, gereken miktarı üretir: Bertrand. Kapasite zor ayarlanıyorsa önce kapasite (miktar) seçilir: Cournot.
**Diğer şıklar neden yanlış?**
• Cournot: kapasite zor ayarlanıyorsa.
• monopoly, perfect competition: soru iki firmalı rekabet modelleri arasında seçim.

## Q
SRC: Slayt 7.21 · Video oyunları
EN: In August 1999 Sony cut its console price from 129 to 99 dollars and Nintendo matched it within an hour; Nintendo then suffered severe shortages. According to the lecture, which model better approximates this industry?
TR: Sony–Nintendo örneğinde hangi model daha iyi?
+ The Cournot model, because prices are easier to adjust than quantities
- The Bertrand model, because firms compete in prices
- The Bertrand model, because capacity is easily adjusted
- Neither: the industry is a monopoly
HINT: Stok sıkıntısı neyi gösteriyor?
EX: **Doğru cevap: Cournot.**
Fiyatı bir saatte değiştirebiliyorlar ama üretimi hızla artıramıyorlar (stok sıkıntısı). Kapasite uzun dönem değişkeni: Cournot.
**Diğer şıklar neden yanlış?**
• compete in prices: fiyat kararı görünür ama belirleyici olan kapasitenin katılığı.
• capacity easily adjusted: tersine, kapasite yetmedi.
• monopoly: iki firma var.

## Q
SRC: Slayt 7.22 · Ansiklopediler
EN: Encyclopedia Britannica's 32-volume set sold for 1600 dollars; after Microsoft's Encarta CD (under 100 dollars), both CD versions sold for 89.99 dollars. The lecture uses this to illustrate a market closer to:
TR: Britannica–Encarta örneği hangi modele daha yakın?
+ Bertrand competition, since output (copies) can be adjusted almost on demand
- Cournot competition, since capacity is fixed
- monopoly, since prices are still above cost
- perfect competition with price equal to cost
HINT: CD kopyası üretmek kolay.
EX: **Doğru cevap: Bertrand'a yakın.**
Kopya üretimi talebe göre hemen ayarlanır. Fiyat (89.99) CD maliyetinden hâlâ yüksek, ama 1600 dolarlık tekel benzeri fiyattan Bertrand'a çok daha yakın.
**Diğer şıklar neden yanlış?**
• Cournot: kapasite katılığı yok.
• monopoly: iki rakip var ve fiyat sert düştü.
• price equal to cost: slayt "Bertrand dengesinden hâlâ uzak" diyor.

## Q
SRC: Slayt 7.23 · Marjinal maliyet artışı
EN: Marginal cost consists of 50% labor costs and 50% fuel costs. Fuel prices rise by 80%. By how much does marginal cost rise?
TR: MC'nin yarısı yakıt; yakıt %80 artarsa MC yüzde kaç artar?
+ 40%
- 80%
- 130%
- 26.6%
HINT: Artış × pay.
EX: **Doğru cevap: %40.**
**Adım adım:** $80\% \times 0.5 = 40\%$.
**Diğer şıklar neden yanlış?**
• 80%: yakıtın MC'deki payı (yarısı) hesaba katılmamış.
• 130%: payla çarpmak yerine eklenmiş.
• 26.6%: fiyattaki artış; MC'deki değil.

## Q
SRC: Slayt 7.24 · Fiyat artışı
EN: AA and BA compete à la Cournot with linear demand and identical costs. Marginal cost rises by 40%. According to the textbook, by how much do equilibrium fares rise?
TR: Kitaba göre bilet fiyatları yüzde kaç artar?
+ 26.6%
- 40%
- 20%
- 13.3%
HINT: $dp^N/dc = 2/3$.
EX: **Doğru cevap: %26.6.**
**Adım adım:** $p^N = (a + 2c)/3$, $dp/dc = 2/3$; $\tfrac23\times40\% = 26.6\%$ (kitabın hesabı).
**Diğer şıklar neden yanlış?**
• 40%: maliyet artışının tamamı yansıtılmış (tam rekabette P = MC olsaydı).
• 20%: tekel oranı (½) kullanılmış: $dp/dc = 1/2$.
• 13.3%: $\tfrac13$ kullanılmış; o firma miktarının değişimiyle ilgili oran.

## Q
SRC: Slayt 7.24 · Türev
EN: In a symmetric Cournot duopoly with inverse demand $p = a - bQ$ and marginal cost c, what is $dp^N/dc$?
TR: İki eş firmalı Cournot'ta $dp^N/dc$ kaçtır?
+ 2/3
- 1/2
- 1
- 1/3
HINT: $p^N = (a + 2c)/3$.
EX: **Doğru cevap: 2/3.**
**Adım adım:** $p^N = (a + 2c)/3$, c'ye göre türev $2/3$.
**Diğer şıklar neden yanlış?**
• 1/2: tekelde $p = (a + c)/2$, türev ½.
• 1: tam rekabette (ya da Bertrand'da) p = c.
• 1/3: firma başına miktarın c'ye göre türevinin (−1/(3b)) b = 1 iken mutlak değeri.
`);
