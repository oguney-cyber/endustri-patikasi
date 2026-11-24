CONTENT.push(String.raw`
=== UNIT u2 | Bölüm 2 | Temel Mikroiktisat | Talep ve esneklik, maliyetler, fırsat ve batık maliyet, ölçek, kâr en çoklama, etkinlik

--- LESSON u2a | D | Talep ve esneklik
FX: $CS = \sum (\text{ödeme isteği} - P)$ :: alınan bütün birimler üzerinden tüketici artığı
FX: $\varepsilon = \frac{dq}{dp}\cdot\frac{p}{q} \approx \frac{\Delta q/q}{\Delta p/p}$ :: talep esnekliği (negatif; genelde mutlak değeri konuşulur)
FX: $Q(P)$ ve $P(Q)$ :: talep eğrisi ve ödeme isteği (ters talep) birbirinin tersi
FX: Piyasa talebi :: bireysel taleplerin yatay toplamı (her fiyatta miktarlar toplanır)

## CARD Pizza dilimi: ödeme isteği ve tüketici artığı
Sinemaya gitmeden pizzacıya uğradın; dilimi 1 dolar.
• Birinci dilime en çok **3 dolar** ödersin (açsın, yakında başka yer yok).
• İkinci dilim bir seçenek; ona daha az ödersin: **1.5 dolar**.
• Üçüncü dilime yalnızca **0.2 dolar**.
@fig pizza
Fiyat 1 iken:
• ==Kaç dilim?== Ödeme isteği fiyattan yüksek olanlar: 3 ve 1.5 → **2 dilim**.
• ==Tüketici artığı== = alınan her birimde ödeme isteği − fiyat: $(3 - 1) + (1.5 - 1) = 2.5$.
:::dikkat
Üçüncü dilimi sayma: ödeme isteği (0.2) fiyattan (1) düşük, onu almazsın.
:::

## CARD Talep mi, ödeme isteği mi?
• $Q(P)$: talep eğrisi (fiyat verilince ne kadar istenir).
• $P(Q)$: ödeme isteği eğrisi (q'ncu birime ne kadar ödenir). Talebin **ters fonksiyonu**: birini biliyorsan ötekini de bilirsin.
• Marshall sayesinde aslında ödeme isteği eğrisini çizip "talep eğrisi" deriz: fiyat dikey eksende.

## CARD Piyasa talebi
Piyasa talebi bireysel talepleri **toplayarak** bulunur: her fiyatta herkesin istediği miktarlar toplanır (yatay toplama). Tüketici çok olunca basamaklı fonksiyon yumuşar.
@fig mktdem

## CARD Talep esnekliği
==Talep esnekliği==: talep edilen miktardaki yüzde değişimin fiyattaki yüzde değişime oranı.
$$\varepsilon = \frac{dq}{dp}\cdot\frac{p}{q} \approx \frac{\Delta q/q}{\Delta p/p}$$
Slayttaki üç soru:
• **Hep negatif mi?** Evet: talep eğrisi aşağı eğimli, fiyat artınca miktar düşer. Bu yüzden genelde mutlak değeri $|\varepsilon|$ konuşulur.
• **Eğimle ilgisi var mı?** Var: $\varepsilon = \frac{1}{\text{eğim}}\cdot\frac{p}{q}$. Ama eşit değil: aynı eğimli doğru üzerinde esneklik noktadan noktaya değişir.
• **Neden eğim değil de esneklik?** Eğim birimlere bağlıdır (litre mi, kilo mu; lira mı, dolar mı). Esneklik yüzdelerle ölçülür, **birimden bağımsızdır**.

## CARD Örnek: 100 tüketici, $P = 3 - 4q$
**Piyasa talebi:** bireysel talebi q için çöz: $q = (3 - P)/4$. 100 kişiyle çarp:
$$Q = 100\cdot\frac{3 - P}{4} = 75 - 25P$$
**Esneklik:** $dQ/dP = -25$, yani
$$\varepsilon = -25\cdot\frac{P}{75 - 25P} = -\frac{P}{3 - P}$$
| P | $|\varepsilon|$ | yorum |
| 1 | 0.5 | esnek değil |
| 1.5 | 1 | birim esnek |
| 2 | 2 | esnek |
:::ipucu Sınavda hızlı yol
Doğrusal talep $P = a - bq$ için $|\varepsilon| = P/(a - P)$. Tüketici sayısı ve eğim sadeleşir; esneklik yalnızca fiyata ve kesişim noktasına bağlı.
:::

## GEN pizzaCS
## GEN elastMkt

## Q
SRC: Şekil 2.1 · Pizza
EN: A consumer is willing to pay 3 dollars for the first slice of pizza, 1.5 dollars for the second and 0.2 dollars for the third. The price is 1 dollar per slice. How many slices does she buy?
TR: Ödeme istekleri 3, 1.5, 0.2; fiyat 1. Kaç dilim alır?
+ 2
- 3
- 1
- 2.5
HINT: Ödeme isteği fiyattan yüksek olanları say.
EX: **Doğru cevap: 2.**
**Adım adım:** 3 > 1 ✓, 1.5 > 1 ✓, 0.2 < 1 ✗ → 2 dilim.
**Diğer şıklar neden yanlış?**
• 3: üçüncü dilime 0.2 ödemeye razı, fiyat 1; alırsa zarar eder.
• 1: ikinci dilimin ödeme isteği (1.5) de fiyatın üstünde.
• 2.5: bu tüketici artığı, dilim sayısı değil.

## Q
SRC: Şekil 2.1 · Pizza
EN: In the same example (willingness to pay 3, 1.5 and 0.2 dollars; price 1 dollar), what is the consumer surplus?
TR: Aynı örnekte tüketici artığı kaçtır?
+ 2.5
- 4.5
- 1.7
- 2
HINT: Alınan dilimlerde (ödeme isteği − fiyat) topla.
EX: **Doğru cevap: 2.5.**
**Adım adım:** $(3 - 1) + (1.5 - 1) = 2 + 0.5 = 2.5$.
**Diğer şıklar neden yanlış?**
• 4.5: $3 + 1.5$, fiyat düşülmemiş (toplam ödeme isteği).
• 1.7: üçüncü dilim de alınmış gibi $(0.2 - 1) = -0.8$ eklenmiş.
• 2: yalnızca birinci dilimin artığı.

## Q
SRC: Slayt 2.7 · Piyasa talebi
EN: Each of 100 identical consumers has inverse demand $P = 3 - 4q$. What is the market demand curve?
TR: 100 özdeş tüketici, her biri $P = 3 - 4q$. Piyasa talebi nedir?
+ $Q = 75 - 25P$
- $Q = 300 - 400P$
- $Q = 0.75 - 0.25P$
- $P = 300 - 400Q$
HINT: Önce q'yu P cinsinden yaz, sonra 100 ile çarp.
EX: **Doğru cevap: $Q = 75 - 25P$.**
**Adım adım:** $q = (3 - P)/4 = 0.75 - 0.25P$. Yatay toplama: $Q = 100q = 75 - 25P$.
**Diğer şıklar neden yanlış?**
• $Q = 300 - 400P$: denklem ters çevrilmeden katsayılar 100 ile çarpılmış.
• $Q = 0.75 - 0.25P$: tek bir tüketicinin talebi; 100 ile çarpılmamış.
• $P = 300 - 400Q$: ters talebi dikey toplamak; fiyatlar toplanmaz, miktarlar toplanır.

## Q
SRC: Slayt 2.7 · Esneklik
EN: Market demand is $Q = 75 - 25P$. What is the (absolute value of the) price elasticity of demand at $P = 1.5$?
TR: $Q = 75 - 25P$, P = 1.5'te esneklik (mutlak) kaçtır?
+ 1
- 0.5
- 25
- 37.5
HINT: $|\varepsilon| = 25\cdot P/Q$.
EX: **Doğru cevap: 1 (birim esnek).**
**Adım adım:** P = 1.5'te $Q = 75 - 37.5 = 37.5$. $|\varepsilon| = 25\times1.5/37.5 = 1$. Kısa yol: $P/(3 - P) = 1.5/1.5 = 1$.
**Diğer şıklar neden yanlış?**
• 0.5: P = 1'deki esneklik.
• 25: yalnızca eğim $|dQ/dP|$; P/Q ile çarpılmamış.
• 37.5: o fiyattaki miktar.

## Q
SRC: Slayt 2.6 · Esneklik ve eğim
EN: Why do economists use the elasticity of demand rather than the slope of the demand curve to measure the sensitivity of demand to price?
TR: Neden eğim değil de esneklik kullanılır?
+ Elasticity does not depend on the units in which price and quantity are measured
- Elasticity is constant along a linear demand curve
- The slope of a demand curve is always positive
- The slope cannot be computed for market demand
HINT: Litre ya da kilo, lira ya da dolar.
EX: **Doğru cevap: esneklik birimden bağımsızdır.**
Eğim birimlere bağlıdır; aynı talep kilo yerine gramla ölçülürse eğim 1000 kat değişir. Esneklik yüzdelerin oranı olduğu için değişmez.
**Diğer şıklar neden yanlış?**
• constant along linear demand: tersine, doğrusal talepte eğim sabit ama esneklik noktadan noktaya değişir.
• slope positive: talep eğrisinin eğimi negatif.
• cannot be computed: piyasa talebinin de eğimi hesaplanabilir.

## Q
SRC: Slayt 2.4 · Ödeme isteği
EN: How are the demand curve $Q(P)$ and the willingness-to-pay curve $P(Q)$ related?
TR: Talep eğrisi ile ödeme isteği eğrisi arasındaki ilişki nedir?
+ The willingness-to-pay curve is the inverse function of the demand curve
- They are unrelated, since demand depends on income
- Willingness to pay is the demand curve multiplied by price
- The demand curve is the derivative of the willingness-to-pay curve
HINT: Birini biliyorsan ötekini de bilirsin.
EX: **Doğru cevap: ters fonksiyon.**
$Q(P)$ fiyattan miktara, $P(Q)$ miktardan fiyata gider. Grafikte aynı eğri; Marshall'dan beri fiyatı dikey eksene koyarız.
**Diğer şıklar neden yanlış?**
• unrelated: aynı bilginin iki yazılışı.
• multiplied by price: $P\cdot Q$ harcama (gelir) olur.
• derivative: türevle ilgisi yok.

--- LESSON u2b | C | Maliyetler
FX: $TC(q) = FC + VC(q)$ :: toplam = sabit + değişken
FX: $AC = \frac{TC}{q} = AFC + AVC$ :: ortalama (birim) maliyet
FX: $MC = \frac{dTC}{dq}$ ya da $TC(q+1) - TC(q)$ :: bir birim daha üretmenin ek maliyeti
FX: Fiyat alan firma: P = MC :: kısa dönemde P ≥ AVC, uzun dönemde P ≥ AC olmalı

## CARD Maliyet kavramları
$TC(q)$ belli bir q üretmenin **en düşük** maliyetidir.
| Kavram | Tanım | Örnek |
| Sabit maliyet FC | üretim düzeyine bağlı değil | makine kirası |
| Değişken maliyet VC(q) | üretimle değişir, q = 0 iken 0 | anakart, bellek, disk |
| Toplam maliyet TC | FC + VC | |
| Ortalama maliyet AC | $TC/q$ ("birim maliyet") | |
| Ort. sabit maliyet AFC | $FC/q$ | |
| Ort. değişken maliyet AVC | $VC/q$ | |
| Marjinal maliyet MC | bir birim daha üretmenin ek maliyeti: $TC(q+1) - TC(q)$, sürekli halde $dTC/dq$ | |
$TC/q = FC/q + VC/q$ olduğundan $AC = AFC + AVC$.

## CARD Maliyet eğrilerinin şekli
@fig costs
Slayttaki beş sorunun cevabı:
• **MC neden önce düşer sonra artar?** Başta uzmanlaşma ve işbölümü ek birimi ucuzlatır; sonra sabit girdi (makine, fabrika) dolar, azalan verim başlar.
• **Kısa dönem mi uzun dönem mi?** Kısa dönem: sabit maliyet (AFC) var, yani bazı girdiler değiştirilemiyor.
• **AVC neden U biçimli?** MC'nin önce düşüp sonra artmasından.
• **ATC neden U biçimli?** Başta hızla düşen AFC baskın, sonra artan AVC baskın.
• **MC neden ATC'yi en düşük noktasında keser?** Ek birimin maliyeti ortalamadan düşükse ortalamayı aşağı çeker, yüksekse yukarı iter. Ortalama ancak MC = AC iken ne düşer ne artar: en düşük nokta.

## CARD Tişört fabrikası
Makine haftada **20 euro** kirayla tutuluyor; bir işçi kullanıyor, saatte 1 tişört. Ücret saatte hafta içi 1, cumartesi 2, pazar 3 euro; günde en çok 8 saat. Malzeme ve elektrik tişört başına 1 euro. Haftada 40 tişört (hafta içi 5 gün × 8 saat).
| q = 40 için | Hesap | Sonuç |
| Sabit maliyet | makine kirası | 20 |
| Değişken maliyet | 40 malzeme + 40 ücret | 80 |
| Toplam maliyet | 20 + 80 | 100 |
| Ortalama maliyet | 100/40 | 2.5 |
| Ort. sabit maliyet | 20/40 | 0.5 |
| Ort. değişken maliyet | 80/40 | 2 |
| MC (40. tişört) | 1 malzeme + 1 hafta içi ücret | 2 |
Cumartesi üretilen 41. tişörtün MC'si 1 + 2 = **3**; pazar günü üretilen 49–56 arası tişörtlerin MC'si 1 + 3 = **4**.
@fig tshirt

## CARD Benetton ne kadar ödemeli?
Benetton tek alıcı; P fiyatından ne kadar üretilirse alır.
• Kâr en çoklama kuralı rekabetçi firmadaki gibi: **P = MC(q*)**. Daha çok üretirsen MR < MC (kâr düşer), daha az üretirsen MR > MC (artırma fırsatı kaçar).
• **Tam kapasite (56) için en düşük fiyat:** 56. tişörtün MC'si 4 → **P = 4**.
• Kâr da etmeli: P > AC. Tam kapasitede $TC = 20 + 56\times1 + 40\times1 + 8\times2 + 8\times3 = 156$, $AC = 156/56 = 2.786$. P = 4 > 2.79 ✓ (kısa dönemde AVC yeterli, uzun dönemde AC).
• **Benetton 3.5 öderse?** MC = 2 (0–40), 3 (41–48), 4 (49–56). 3.5 yalnızca ilk iki basamağı karşılar: **48 tişört**.
:::ipucu Sınavda hızlı yol
Basamaklı MC'de fiyatın altında kalan son basamağın sonuna kadar üret. Ortalama maliyete bakma; ek birim kararını MC verir.
:::

## CARD AC tablosundan MC: 199, 200, 201
Şu an 200 birim üretiyorsun. AC tablosu: 199 birimde 199, 200 birimde 200, 201 birimde 201.
• TC = AC × q: $TC(199) = 39601$, $TC(200) = 40000$, $TC(201) = 40401$.
• 200. birimin MC'si: $40000 - 39601 = 399$. 201. birimin MC'si: $40401 - 40000 = 401$.
• **1. soru:** 201. birimi 300'e satabiliyorsan üretmeli misin? Hayır: MC = 401 > 300.
• **2. soru:** q = 200'ün optimum olduğu fiyat aralığı: 200. birim kârlı ($P \ge 399$), 201. birim kârsız ($P \le 401$) → **399 ≤ P ≤ 401**.

## GEN costCalc
## GEN stepSupply
## GEN acTable

## Q
SRC: Slayt 2.13–2.14 · Tişört fabrikası
EN: In the t-shirt factory (machine lease 20 euros a week, materials 1 euro per t-shirt, weekday wage 1 euro per hour, one t-shirt per hour), what is the total cost of producing 40 t-shirts per week?
TR: Tişört fabrikasında 40 tişörtün toplam maliyeti kaçtır?
+ 100 euros
- 80 euros
- 60 euros
- 120 euros
HINT: Kira + malzeme + ücret.
EX: **Doğru cevap: 100.**
**Adım adım:** sabit 20 + malzeme $40\times1$ + ücret $40\times1$ = 100.
**Diğer şıklar neden yanlış?**
• 80: yalnızca değişken maliyet; kira unutulmuş.
• 60: kira ve malzeme var, ücret unutulmuş.
• 120: ücret ya da malzeme iki kez sayılmış.

## Q
SRC: Slayt 2.14 · Marjinal maliyet
EN: In the t-shirt factory, what is the marginal cost of the 41st t-shirt (produced on Saturday, wage 2 euros per hour)?
TR: Cumartesi üretilen 41. tişörtün marjinal maliyeti kaçtır?
+ 3 euros
- 2 euros
- 2.5 euros
- 4 euros
HINT: Malzeme + cumartesi saat ücreti.
EX: **Doğru cevap: 3.**
**Adım adım:** 41. tişört hafta içi 40 saatin dışında, cumartesi üretilir: 1 malzeme + 2 ücret = 3.
**Diğer şıklar neden yanlış?**
• 2: 40. tişörtün (hafta içi) MC'si.
• 2.5: 40 tişörtteki ortalama maliyet.
• 4: pazar günü üretilen (49–56) tişörtlerin MC'si.

## Q
SRC: Slayt 2.16–2.17 · Benetton
EN: Benetton buys as many t-shirts as the factory supplies at price P. What is the lowest price at which the factory supplies at full capacity (56 t-shirts)?
TR: Fabrikanın tam kapasitede (56) üretmesi için en düşük fiyat kaçtır?
+ 4 euros
- 2.79 euros
- 3 euros
- 2.5 euros
HINT: Son (56.) tişörtün MC'si.
EX: **Doğru cevap: 4.**
**Adım adım:** P = MC kuralı. 49–56 arası pazar günü: MC = 1 + 3 = 4. Fiyat 4'ün altındaysa son 8 tişört zarar ettirir. Ek kontrol: tam kapasitede AC = 156/56 ≈ 2.79 < 4, kâr da var.
**Diğer şıklar neden yanlış?**
• 2.79: tam kapasitedeki ortalama maliyet. Kârın pozitif olması için gerekli ama son birimleri üretmeye yetmez.
• 3: cumartesi tişörtlerinin MC'si; bu fiyatla 48'de durur.
• 2.5: 40 tişörtteki AC.

## Q
SRC: Slayt 2.18 · Benetton 3.5
EN: If Benetton offers 3.5 euros per t-shirt, how many t-shirts will the factory produce? (MC = 2 for 0–40, 3 for 41–48, 4 for 49–56.)
TR: Fiyat 3.5 ise fabrika kaç tişört üretir?
+ 48
- 56
- 40
- 8
HINT: 3.5 hangi MC basamaklarını karşılıyor?
EX: **Doğru cevap: 48.**
**Adım adım:** MC 2 ve 3 olan birimler (ilk 48) fiyattan ucuz, MC 4 olanlar pahalı.
**Diğer şıklar neden yanlış?**
• 56: son 8 tişört 4'e mal olur, 3.5'e satılır: zarar.
• 40: cumartesi tişörtleri (MC 3) de kârlı.
• 8: yalnızca cumartesi basamağı.

## Q
SRC: Slayt 2.9 · Maliyet eğrileri
EN: Why does the marginal cost curve cut the average total cost curve at its minimum point?
TR: MC neden ATC'yi en düşük noktasında keser?
+ When MC is below ATC, ATC falls; when MC is above ATC, ATC rises
- Because fixed costs are zero at the minimum of ATC
- Because MC is always constant in the short run
- Because ATC is the derivative of MC
HINT: Sınıf ortalaması ve yeni gelen öğrencinin notu.
EX: **Doğru cevap: MC < ATC iken ATC düşer, MC > ATC iken artar.**
Ek birimin maliyeti ortalamanın altındaysa ortalamayı düşürür, üstündeyse yükseltir. Ortalamanın yön değiştirdiği (en düşük) noktada MC = ATC.
**Diğer şıklar neden yanlış?**
• fixed costs zero: kısa dönemde FC sabittir, sıfır olmaz.
• MC constant: MC U biçimli; sabit olsaydı AC'nin minimumu olmazdı.
• derivative: tersine MC, TC'nin türevidir.

## Q
SRC: Slayt 2.19 · AC tablosu
EN: Average cost is 199 at 199 units, 200 at 200 units and 201 at 201 units. You currently produce 200 units. Should you produce one more unit if you can sell it at P = 300?
TR: 200 birim üretiyorsun; 201. birimi 300'e satabilirsen üretmeli misin?
+ No, because the marginal cost of the 201st unit is 401
- Yes, because 300 is above the average cost of 201
- Yes, because 300 is above the average cost of 200
- No, because average cost is rising
HINT: TC = AC × q, sonra fark al.
EX: **Doğru cevap: hayır, MC = 401 > 300.**
**Adım adım:** $TC(200) = 200\times200 = 40000$, $TC(201) = 201\times201 = 40401$. Ek maliyet 401; satış 300: 101 zarar.
**Diğer şıklar neden yanlış?**
• above average cost of 201: ek birim kararında ortalamaya değil marjinale bakılır.
• above average cost of 200: aynı hata.
• average cost is rising: sonuç doğru ama gerekçe yanlış; AC artarken bile fiyat MC'den yüksekse üretmek kârlı olurdu.

## Q
SRC: Slayt 2.10 · Sabit maliyet
EN: Lease payments for machinery and equipment are an example of:
TR: Makine kirası hangi maliyete örnektir?
+ a fixed cost
- a variable cost
- marginal cost
- average variable cost
HINT: Üretim düzeyine bağlı mı?
EX: **Doğru cevap: sabit maliyet.**
Kira üretim düzeyinden bağımsızdır (slayttaki örnek). Değişken maliyet örneği malzemedir: daha az PC üretince daha az anakart gerekir.
**Diğer şıklar neden yanlış?**
• variable: üretim sıfır olsa da kira ödenir.
• marginal: kira ek birimle değişmez, MC'ye girmez.
• average variable: AVC değişken maliyetin ortalaması.

--- LESSON u2c | S | Fırsat maliyeti, batık maliyet, ölçek
FX: Ekonomik maliyet :: harcamalar + fırsat maliyeti − batık maliyet; kararlar buna göre verilir
FX: Batık maliyet :: harcanmış ve geri alınamaz; karara girmez
FX: MES :: AC'nin en düşük düzeyine ulaşılan en küçük üretim
FX: $C(q_1, q_2) < C(q_1, 0) + C(0, q_2)$ :: kapsam ekonomisi

## CARD Fırsat maliyeti
Bir kaynağı (zaman, para) bir işte kullanmanın ==fırsat maliyeti==, onu en iyi alternatif kullanımda kullanmamakla vazgeçilen faydadır.
:::ornek Chicago'daki arsa
Perakende şirketi X'in şehir merkezinde arsası var, oraya mağaza açmayı düşünüyor. Arsa zaten kendisinin, ödeme yapılmayacak. Yine de mağazanın maliyetine arsa dahil edilmeli: arsayı kiraya vermek ya da satmakla elde edilecek gelirden vazgeçiliyor. Bu fırsat maliyeti.
:::

## CARD Batık maliyet
==Batık maliyet (sunk cost)==: harcanmış ve geri alınamayan maliyet. Karar verirken **hesaba katılmaz**: hangi karar verilirse verilsin o para geri gelmez.
:::ornek Örnek 1: baraj
Barajın ürettiği enerjinin tahmini maliyeti birim başına 10. Maliyetin yarısı harcandıktan sonra birim başına 7'ye enerji üreten yeni bir kaynak bulunuyor. Baraj bırakılsın mı?
10 > 7 ama harcanmış 5 batık. Bundan sonraki maliyet **5 < 7**: barajı bitirmek daha ucuz. Devam.
:::
:::ornek Örnek 2: Maçka–Maslak tüneli
Fayda 5 milyar dolar. Şimdiye kadar 3 milyar harcandı, 6 milyar daha gerekiyor.
Harcanan 3 batık. Ek maliyet **6 > fayda 5**: tünel yapılmamalı. "3 milyar boşa gitmesin" düşüncesi hatadır.
:::
==Ekonomik maliyet== gerçek harcamalardan iki yönde ayrılır: harcamaya karşılık gelmeyen fırsat maliyetlerini **içerir**, batık maliyete karşılık gelen harcamaları **dışlar**.

## CARD Ölçek ekonomileri ve MES
@fig scale
• ==Ölçek ekonomisi==: Q arttıkça ATC düşer. ==Ölçeğe sabit getiri==: ATC aynı kalır. ==Ölçek eksi ekonomisi==: ATC artar.
• Bu bir **uzun dönem** eğrisi (LRATC): bütün girdiler, fabrika büyüklüğü dahil, ayarlanabilir.
• Nedenleri: büyüdükçe sabit kurulum maliyetleri yayılır, uzmanlaşma artar (ekonomi); çok büyüyünce yönetim ve koordinasyon zorlaşır (eksi ekonomi).
• Neden az gazete, çok tesisatçı var? Gazete basımında büyüklük etkinlik için önemli, tesisatta değil.
• ==Asgari etkin ölçek (MES)==: en düşük ortalama maliyete ulaşılan en küçük üretim. MES büyükse (teknolojik nedenle) yoğunlaşmış (az firmalı) endüstri beklenir: gazete basımının MES'i tesisatçılığınkinden büyük.

## CARD Kapsam ekonomisi
İki ürünü (q₁ ve q₂) birlikte üretmek ayrı ayrı üretmekten ucuzsa ==kapsam ekonomisi== vardır:
$$C(q_1, q_2) < C(q_1, 0) + C(0, q_2)$$
Örnek: New York → Londra ve Londra → New York uçuşlarını tek havayolunun yapması, iki ayrı firmanın birer yönü uçmasından ucuz.
:::dikkat Karıştırma
Ölçek: **aynı** ürünü çok üretmek ucuzlatır. Kapsam: **farklı** ürünleri birlikte üretmek ucuzlatır.
:::

## GEN sunk

## Q
SRC: Slayt 2.23 · Maçka–Maslak tüneli
EN: A tunnel would bring a benefit of 5 billion dollars. 3 billion dollars have already been invested (and cannot be recovered), and finishing it requires 6 billion dollars more. What should be done?
TR: Fayda 5, harcanan 3 (batık), gereken ek 6 milyar. Ne yapılmalı?
+ Do not finish it: the additional cost (6) exceeds the benefit (5); the 3 already spent is sunk
- Finish it, because otherwise the 3 billion already invested is wasted
- Finish it, because the benefit (5) exceeds the amount already invested (3)
- Finish it only if the 3 billion was financed by borrowing
HINT: Geri gelmeyecek parayı karardan çıkar.
EX: **Doğru cevap: bitirme.**
**Adım adım:** batık maliyet 3 karara girmez. Bundan sonrası: ek maliyet 6, ek fayda 5 → net −1.
**Diğer şıklar neden yanlış?**
• otherwise wasted: batık maliyet yanılgısı; 3 milyar her durumda harcanmış.
• 5 > 3: geçmiş harcamayla karşılaştırmak anlamsız; karşılaştırma ek maliyetle.
• financed by borrowing: finansman biçimi batık olduğu gerçeğini değiştirmez.

## Q
SRC: Slayt 2.22 · Baraj
EN: A dam was expected to produce energy at a cost of 10 per unit. After half of the cost has been incurred, a new energy source producing at 7 per unit is discovered. Should the dam be abandoned?
TR: Baraj (birim maliyet 10, yarısı harcandı) mı, yeni kaynak (7) mı?
+ No: the remaining cost of the dam is 5 per unit, which is below 7
- Yes: the dam's cost (10) exceeds the new source's cost (7)
- Yes: the money already spent cannot be recovered anyway
- It does not matter, since both sources produce energy
HINT: Harcanmış yarıyı çıkar.
EX: **Doğru cevap: hayır, devam.**
**Adım adım:** 10'un yarısı (5) batık. Barajı bitirmenin ek maliyeti 5 < 7.
**Diğer şıklar neden yanlış?**
• 10 > 7: batık 5 de sayılmış.
• cannot be recovered: doğru bir gözlem ama sonucu ters: geri gelmeyecek para karara girmez, kalan maliyete bakılır.
• does not matter: maliyetler farklı; ucuz olan seçilmeli.

## Q
SRC: Slayt 2.21 · Fırsat maliyeti
EN: Company X owns a piece of real estate downtown and plans to open a new store on it. When comparing the costs and benefits of the new store, should the real estate cost be included?
TR: Şirketin kendi arsası mağaza maliyetine katılmalı mı?
+ Yes, as an opportunity cost: the revenue from leasing or selling the property is foregone
- No, because the company already owns it and makes no payment
- Yes, as a sunk cost
- No, because land is a fixed cost
HINT: Arsayı başka nasıl kullanabilirdi?
EX: **Doğru cevap: evet, fırsat maliyeti olarak.**
Ödeme yapılmasa da arsayı kiraya verme ya da satma geliri kaybedilir. Ekonomik maliyet fırsat maliyetini içerir.
**Diğer şıklar neden yanlış?**
• no payment: muhasebe bakışı; iktisadi kararda fırsat maliyeti sayılır.
• sunk cost: arsa satılabilir ya da kiralanabilir, yani geri alınabilir; batık değil. Batık olsaydı zaten karara girmezdi.
• fixed cost: sabit olması karardan çıkarmak için gerekçe değil.

## Q
SRC: Slayt 2.26 · MES
EN: Why are there few newspaper companies but many plumbing firms?
TR: Neden az gazete şirketi ama çok tesisatçı var?
+ The minimum efficient scale is large relative to the market in newspaper publishing but small in plumbing
- Newspapers have diseconomies of scale while plumbing has economies of scale
- Plumbing has larger sunk costs than newspaper publishing
- Newspapers benefit from economies of scope while plumbers do not
HINT: Ortalama maliyetin en düşük olduğu en küçük üretim.
EX: **Doğru cevap: gazetede MES büyük, tesisatta küçük.**
Gazete basımında büyüklük etkinlik için önemli; en düşük ortalama maliyete ancak çok büyük üretimde ulaşılır, pazar az firmayı kaldırır.
**Diğer şıklar neden yanlış?**
• diseconomies in newspapers: tersi; gazete basımında ölçek ekonomisi güçlü.
• sunk costs in plumbing: slayt bunu söylemiyor; tesisatın kurulum maliyeti küçük.
• economies of scope: kapsam ekonomisi farklı ürünleri birlikte üretmekle ilgili; soru firma sayısını ölçekle açıklıyor.

## Q
SRC: Slayt 2.27 · Kapsam ekonomisi
EN: There are economies of scope when:
TR: Kapsam ekonomisi ne zaman vardır?
+ $C(q_1, q_2) < C(q_1, 0) + C(0, q_2)$
- average cost falls as output of a single product increases
- $C(q_1, q_2) > C(q_1, 0) + C(0, q_2)$
- marginal cost is constant
HINT: İki ürünü birlikte üretmek.
EX: **Doğru cevap: $C(q_1, q_2) < C(q_1, 0) + C(0, q_2)$.**
İki ürün birlikte, ayrı ayrı üretilmesinden ucuza üretiliyor (iki yönlü New York–Londra uçuşları).
**Diğer şıklar neden yanlış?**
• single product: bu ölçek ekonomisi.
• büyüktür işareti: birlikte üretmek daha pahalı; kapsam eksi ekonomisi.
• constant MC: maliyet eğrisinin şekli; kapsamla ilgisi yok.

## Q
SRC: Slayt 2.24 · Ekonomik maliyet
EN: Economic cost differs from actual expenditures in that it:
TR: Ekonomik maliyet gerçek harcamalardan nasıl ayrılır?
+ includes opportunity costs and excludes sunk costs
- includes sunk costs and excludes opportunity costs
- includes both opportunity costs and sunk costs
- excludes both opportunity costs and fixed costs
HINT: Arsa örneği + tünel örneği.
EX: **Doğru cevap: fırsat maliyetini içerir, batık maliyeti dışlar.**
**Diğer şıklar neden yanlış?**
• includes sunk: batık maliyet karara girmez.
• includes both: batık maliyet yine dışarıda kalmalı.
• excludes fixed: sabit maliyet batık değilse (örneğin kira sözleşmesi bitebiliyorsa) uzun dönem kararında sayılır.

--- LESSON u2d | E | Kâr en çoklama ve etkinlik
FX: $MR = p\left(1 - \frac{1}{|\varepsilon|}\right)$ :: (2.2) marjinal gelir fiyattan küçük
FX: MR = MC :: kâr en çoklama koşulu
FX: Tam rekabette P = MR :: firmanın talebi sonsuz esnek
FX: Dağıtım, üretim, dinamik etkinlik :: üç etkinlik kavramı

## CARD Kâr en çoklama: MR = MC
Gelir $R = p\,q$. Türev:
$$MR = \frac{dp}{dq}q + p = p\left(1 - \frac{1}{|\varepsilon|}\right)$$
(2.2 numaralı denklem.) Slayttaki sorular:
• **p mi MR mı büyük?** $p > MR$: bir birim daha satmak için fiyatı **bütün** birimlerde düşürmek gerekir; ek birimin geliri fiyattan az.
• **Tam rekabette neden p = MR?** Firma fiyat alan; onun gördüğü talep sonsuz esnek ($|\varepsilon| \to \infty$), $1/|\varepsilon| \to 0$.
• **Neden MR = MC?** MR > MC iken bir birim daha üretmek kârı artırır; MR < MC iken azaltmak artırır. Kâr ancak eşitlikte en yüksek.

## CARD Dağıtım etkinliği
Apple bir iMac'i 1600 dolara satıyor, üretim maliyeti 900 dolar.
• 900 ile 1600 arasında ödemeye razı tüketiciler var ama alamıyorlar.
• Bu, Apple'ın kâr en çoklamasıyla **tutarlı** (MR = MC'de fiyat MC'nin üstünde).
• Ama toplumsal olarak **etkin değil**: maliyetinden fazla değer biçilen birimler üretilmiyor.
@fig alloc
Toplam artık (CS + PS) P = MC'de en büyük: ==dağıtım (allocative) etkinliği==. Kayıp EL (efficiency loss) ölü ağırlık kaybıdır.

## CARD Üretim etkinliği ve dinamik etkinlik
@fig prodineff
• ==Üretim (productive) etkinliği==: verilen miktarı mümkün olan en düşük maliyetle üretmek. Slayt: büyük şirketler çoğu zaman maliyet açısından etkin değil.
• ==Dinamik etkinlik==: ürünlerin ve üretim tekniklerinin zamanla iyileşmesi (Bölüm 1'deki Schumpeter tartışması).

## GEN mrElast

## Q
SRC: Slayt 2.28 · MR ve fiyat
EN: Why is marginal revenue below price for a firm facing a downward-sloping demand curve?
TR: Aşağı eğimli talepte MR neden fiyattan küçüktür?
+ To sell one more unit, the firm must lower the price on all the units it sells
- Because marginal cost rises with output
- Because the firm is a price taker
- Because demand is inelastic at every price
HINT: $MR = p + (dp/dq)q$ ifadesindeki ikinci terim.
EX: **Doğru cevap: fiyatı bütün birimlerde düşürmek gerekir.**
$MR = p + (dp/dq)q$; $dp/dq < 0$ olduğu için ikinci terim negatif. Ek birimden p kazanılır ama önceki q birimin her birinde fiyat düşer.
**Diğer şıklar neden yanlış?**
• marginal cost: MR talep tarafıyla ilgili; maliyet MR'ı belirlemez.
• price taker: fiyat alan firmada tam tersine MR = p.
• inelastic: esneklik ne olursa olsun (sonlu ise) MR < p.

## Q
SRC: Slayt 2.28 · Tam rekabet
EN: In a perfectly competitive industry, $p = MR$ for each firm because:
TR: Tam rekabette neden p = MR?
+ the demand facing each firm is infinitely elastic (the firm is a price taker)
- marginal cost is constant
- market demand is perfectly inelastic
- firms earn zero profits in the long run
HINT: (2.2) formülünde $|\varepsilon| \to \infty$.
EX: **Doğru cevap: firmanın talebi sonsuz esnek.**
Küçük firma piyasa fiyatından istediği kadar satar; satış artışı fiyatı düşürmez. $MR = p(1 - 1/|\varepsilon|)$ ve $1/|\varepsilon| = 0$.
**Diğer şıklar neden yanlış?**
• constant MC: maliyetle ilgisi yok.
• market demand inelastic: piyasa talebi esnek olmasa da firmanın talebi sonsuz esnek.
• zero profits: uzun dönem sonucu; p = MR'ın nedeni değil.

## Q
SRC: Slayt 2.29 · iMac
EN: Apple sells an iMac for 1600 dollars although it costs only 900 dollars to produce, so consumers willing to pay between 900 and 1600 dollars do not buy one. This situation is:
TR: iMac örneği için hangisi doğru?
+ consistent with profit maximization, but allocatively inefficient
- inconsistent with profit maximization
- productively inefficient but allocatively efficient
- socially efficient, because price exceeds cost
HINT: MR = MC'de fiyat MC'nin üstünde.
EX: **Doğru cevap: kâr en çoklamayla tutarlı, dağıtım açısından etkin değil.**
Piyasa gücü olan firma MR = MC'de üretir ve P > MC koyar. Maliyetinden fazla değer biçen tüketiciler alamaz: ölü ağırlık kaybı.
**Diğer şıklar neden yanlış?**
• inconsistent: tam da kâr en çoklayan davranış.
• productively inefficient: maliyetin gereğinden yüksek olduğu söylenmiyor; sorun miktar.
• efficient: P > MC etkinliğin değil, etkinsizliğin işareti.

## Q
SRC: Şekil 2.5 · Toplam artık
EN: Total surplus (consumer surplus plus producer surplus) is maximized at the output level where:
TR: Toplam artık hangi üretimde en büyüktür?
+ price equals marginal cost
- marginal revenue equals marginal cost
- price equals average cost
- price is as high as possible
HINT: Şekil 2.5'teki q''.
EX: **Doğru cevap: P = MC.**
P = MC'ye kadar her birimin değeri (talep) maliyetinden (MC) yüksek; hepsi üretilince toplam artık en büyük olur.
**Diğer şıklar neden yanlış?**
• MR = MC: firmanın kârını en çoklar, toplam artığı değil (q').
• P = AC: sıfır kâr koşulu.
• highest price: miktarı düşürür, DWL büyür.

## Q
SRC: Slayt 2.32 · Dinamik etkinlik
EN: Dynamic efficiency refers to:
TR: Dinamik etkinlik nedir?
+ the improvement over time of products and production techniques
- producing a given output at the lowest possible cost
- producing every unit whose value exceeds its marginal cost
- adjusting prices quickly to demand shocks
HINT: Zaman boyutu.
EX: **Doğru cevap: ürün ve tekniklerin zamanla iyileşmesi.**
**Diğer şıklar neden yanlış?**
• lowest cost: üretim (productive) etkinliği.
• value exceeds MC: dağıtım (allocative) etkinliği.
• prices adjust: derste böyle bir etkinlik tanımı yok.
`);
