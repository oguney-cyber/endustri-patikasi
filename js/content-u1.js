CONTENT.push(String.raw`
=== UNIT u1 | Bölüm 1 | Giriş: Piyasa Gücü | Endüstri iktisadı ne inceler, Lerner endeksi, piyasa gücünün dört sorusu, rekabet politikası

--- LESSON u1a | L | Endüstri iktisadı ve Lerner endeksi
FX: $L = \frac{P - MC}{P}$ :: Lerner endeksi: fiyatın ne kadarı marjinal maliyetin üstünde (0 ile 1 arası)
FX: $L \approx \frac{P - AC}{P} = \frac{\text{kâr}}{\text{toplam gelir}}$ :: MC gözlenemezse MC ≈ AC varsayılır
FX: Piyasa gücü :: fiyatı marjinal maliyetin üstüne koyabilme yeteneği

## CARD Bu derste sık geçen semboller
Sınav soruları İngilizce. Sembolü görünce ne olduğunu hemen bil:
| Sembol | İngilizcesi | Anlamı |
| $P$ ya da $p$ | price | fiyat |
| $Q$, $q$ | quantity | piyasa miktarı ($Q$), tek firmanın miktarı ($q$) |
| $MC$ | marginal cost | bir birim daha üretmenin ek maliyeti |
| $AC$ (ATC) | average (total) cost | birim maliyet: $TC/q$ |
| $FC$, $VC$, $TC$ | fixed, variable, total cost | sabit, değişken, toplam maliyet |
| $MR$ | marginal revenue | bir birim daha satınca gelirdeki artış |
| $L$ | Lerner index | $(P - MC)/P$: piyasa gücü ölçüsü |
| $\varepsilon$ | price elasticity of demand | fiyat %1 artınca talep yüzde kaç düşer |
| $CS$, $PS$, $DWL$ | consumer / producer surplus, deadweight loss | tüketici artığı, üretici artığı, ölü ağırlık kaybı |
| $\pi$ | profit | kâr ($\pi^M$: tekel kârı) |
| $\delta$ | discount factor | yarının 1 lirasının bugünkü değeri (Bölüm 8) |
| NE | Nash equilibrium | kimsenin tek başına sapmak istemediği durum (Bölüm 4) |
Tam liste "Formüller" sekmesinin en başında.

## CARD Endüstri iktisadı neyi inceler?
• "Industry" kelimesinin iki anlamı var: (1) tarımdan ayrı olarak imalat sanayii, (2) ==herhangi bir büyük ölçekli iş faaliyeti== (turizm endüstrisi gibi). Bu ders **ikinci** anlamı kullanır.
• Endüstri iktisadı (industrial organization) **piyasaların ve endüstrilerin işleyişini**, özellikle **firmaların birbiriyle nasıl rekabet ettiğini** inceler.
• Mikroiktisadın bir alt dalıdır. Piyasa etkileşimine özgü stratejilerle ilgilenir: ==fiyat rekabeti, ürün konumlandırma, reklam, Ar-Ge==.
• Mikroiktisat dersinde çoğunlukla tam rekabet ve tekel görülür. Bu derste ==eksik rekabet (oligopol)== da var.
:::ipucu Testte
Bölüm 1 soruları kavram ve örnek ağırlıklı: Lerner endeksi, Chicago okulu, piyasa gücünün sonuçları (transfer, ölü ağırlık kaybı, üretim etkinsizliği, rant kollama), politika türleri. Örneklerin hangi kavramı anlattığını bil.
:::

## CARD Zantac örneği: ucuza üretilen ilaç neden pahalı?
Glaxo Wellcome'ın ülser ilacı Zantac dünyanın en çok satan reçeteli ilacıydı (1.6 milyar dolar satış). Üretmesi ucuz ama fiyatı çok yüksek. Neden müşteri kaybetmeden fiyat koyabiliyor?
• **İlk cevap: patent.** Patent, buluş sahibine başkalarının üretmesini, satmasını ve ithal etmesini engelleme hakkı verir; az ikame demektir.
• **Ama:** Novopharm mahkemede kazandı ve jenerik (eşdeğer) Zantac satma izni aldı. Patent açıklaması tek başına yetmiyor.
• Temmuz 1999'da 300 mg, 30 tabletlik Zantac kutusu 85.95 dolar; 250 tabletlik jenerik kutu 95 dolar. Tablet başına jenerik **yaklaşık 7.5 kat ucuz**. Yine de insanlar Zantac alıyor.
• **Asıl cevap: güçlü marka (reklam).** Tagamet HB, Pepcid AC ve Zantac 75 için yüz milyonlarca dolar reklam harcandı. Büyük ilaç firmalarının reklam bütçeleri Ar-Ge bütçeleriyle aynı büyüklükte. Önemli olan ürünün gerçek değeri değil, tüketicinin ve (tüketici adına karar veren) doktorların ürüne biçtiği değer.
• Glaxo daha sonra Wellcome ile birleşti: iki firmanın benzer araştırma yollarını birleştiren sinerji.
:::ornek Dersin mesajı
Piyasa gücünün kaynakları: patent (yasal koruma), marka sadakati (reklam), birleşme. Bu örnek dersin bütün konularına bir giriş.
:::

## CARD Piyasa gücü ve Lerner endeksi
==Piyasa gücü (market power)==: fiyatı marjinal maliyetin üstüne koyabilme yeteneği.
Ölçüsü Abba Lerner'in endeksi:
$$L = \frac{P - MC}{P}$$
@fig markup
Slayttaki soru: L en çok ve en az kaç olabilir?
@fig lernerline
• **En az 0:** $P = MC$ (tam rekabet).
• **En çok 1:** ancak $MC = 0$ iken. Fiyat maliyetin ne kadar üstündeyse L 1'e o kadar yakın.
:::dikkat
Lerner farkı **fiyata** böler, MC'ye değil. $(P - MC)/MC$ bir "maliyet üstü marj" oranıdır, Lerner değildir.
:::

## CARD MC gözlenemezse: ortalama maliyeti kullan
Küçük bir sorun: marjinal maliyeti dışarıdan görmek zor. Çözüm: $MC \approx AC$ varsay.
$$L \approx \frac{P - AC}{P} = \frac{P\cdot q - AC\cdot q}{P\cdot q} = \frac{\text{kâr}}{\text{toplam gelir}}$$
çünkü $P\cdot q$ toplam gelir, $AC\cdot q$ toplam maliyet.
:::ornek Sayıyla
Gelir 1000, kâr 200 olan firmada $L \approx 200/1000 = 0.2$.
:::

## GEN lerner

## Q
SRC: Slayt 1.11 · Piyasa gücü
EN: In industrial organization, market power is defined as the ability to:
TR: Piyasa gücü neyi yapabilme yeteneğidir?
+ set prices above marginal cost
- hold a 100% share of the market
- produce at the minimum of average cost
- set prices above competitors' prices
HINT: Lerner endeksinin payına bak.
EX: **Doğru cevap: set prices above marginal cost.**
Tanım slayttaki gibi: fiyatı MC'nin üstüne koyabilmek. Lerner endeksi $(P - MC)/P$ bu farkı ölçer.
**Diğer şıklar neden yanlış?**
• 100% share: bu saf tekelin tanımı. Pazar payı küçük firmanın da piyasa gücü olabilir (Zantac), payı büyük firmanın az olabilir (Microsoft, Bölüm 5).
• minimum of average cost: bu üretim etkinliğiyle ilgili, piyasa gücüyle değil.
• above competitors' prices: rakipten pahalı olmak piyasa gücü anlamına gelmez; ölçüt maliyet.

## Q
SRC: Slayt 1.12 · Lerner endeksi
EN: If price is never below marginal cost and marginal cost is never negative, what are the minimum and maximum possible values of the Lerner index?
TR: P ≥ MC ≥ 0 iken Lerner endeksi en az ve en çok kaçtır?
+ 0 and 1
- −1 and 1
- 0 and infinity
- 1 and infinity
HINT: P = MC ve MC = 0 durumlarını yerine koy.
EX: **Doğru cevap: 0 and 1.**
**Adım adım:** $P = MC$ ise $L = 0/P = 0$ (en az). $MC = 0$ ise $L = P/P = 1$ (en çok). Aradaki her durumda $0 < L < 1$.
**Diğer şıklar neden yanlış?**
• −1: negatif L için $P < MC$ gerekir; soru bunu dışlıyor.
• infinity: payda P, pay $P - MC$ en çok P olabilir; oran 1'i geçemez. Sonsuza giden oran $(P - MC)/MC$ olurdu.

## Q
SRC: Slayt 1.4–1.9 · Zantac
EN: A 30-tablet box of Zantac sold for 85.95 dollars while a 250-tablet box of generic ranitidine sold for 95 dollars, after a court allowed generic versions. Why could Glaxo Wellcome still sell Zantac at a high price without losing many customers, according to the lecture?
TR: Jenerik izni çıktıktan sonra bile Zantac neden pahalı satılabildi?
+ A strong brand name built by heavy advertising: what consumers and doctors think the product is worth
- Its patent still prevented any generic version from being sold
- Its marginal cost of production was very high
- The government regulated its price
HINT: Patent açıklaması mahkeme kararıyla düştü.
EX: **Doğru cevap: güçlü marka ve reklam.**
Slayt sırası: önce patent cevabı verilir, sonra Novopharm davası bu cevabı "eler". Kalan açıklama marka: reklam bütçeleri Ar-Ge bütçeleri kadar büyük; önemli olan tüketicinin ve doktorun ürüne biçtiği değer.
**Diğer şıklar neden yanlış?**
• patent: Novopharm jenerik satma iznini aldı; jenerik zaten satılıyordu (250 tablet 95 dolar).
• high marginal cost: slayt açıkça "üretmesi görece ucuz" diyor.
• regulation: derste böyle bir şey geçmiyor.

## Q
SRC: Slayt 1.13 · Lerner yaklaşımı
EN: When marginal cost is approximated by average cost, the Lerner index is approximately equal to:
TR: MC ≈ AC varsayımıyla Lerner endeksi yaklaşık neye eşittir?
+ profit divided by total revenue
- profit divided by total cost
- total cost divided by total revenue
- price divided by average cost
HINT: Payı ve paydayı q ile çarp.
EX: **Doğru cevap: profit / total revenue.**
**Adım adım:** $L \approx (P - AC)/P$. Pay ve paydayı q ile çarp: $(Pq - AC\cdot q)/(Pq)$ = (gelir − toplam maliyet)/gelir = kâr/gelir.
**Diğer şıklar neden yanlış?**
• profit / total cost: payda fiyat (gelir) olmalı, maliyet değil.
• total cost / revenue: bu $AC/P = 1 - L$.
• P / AC: bir oran ama Lerner değil; 1'den büyük olur.

## Q
SRC: Slayt 1.3 · Alanın konusu
EN: Industrial organization mainly studies:
TR: Endüstri iktisadı esas olarak neyi inceler?
+ how firms compete with each other: pricing, product positioning, advertising, R&D
- manufacturing as distinguished from agriculture
- fluctuations in total industrial output over the business cycle
- only the two extreme cases of perfect competition and monopoly
HINT: "Industry" kelimesinin hangi tanımı kullanılıyor?
EX: **Doğru cevap: firmaların nasıl rekabet ettiği.**
Alan mikroiktisadın alt dalı; piyasa etkileşimine özgü stratejileri inceler.
**Diğer şıklar neden yanlış?**
• manufacturing vs agriculture: "industry"nin birinci sözlük tanımı; ders ikinci tanımı (her büyük iş faaliyeti) kullanıyor.
• business cycle: bu makroiktisadın konusu.
• only perfect competition and monopoly: mikroiktisat dersi bunlara odaklanır; bu ders eksik rekabeti (oligopol) de inceler.

## Q
SRC: Slayt 1.12 · Lerner sayısal
EN: A firm sells at a price of 50 and its marginal cost is 40. What is its Lerner index?
TR: P = 50, MC = 40. Lerner endeksi kaçtır?
+ 0.2
- 0.25
- 0.8
- 10
HINT: Farkı fiyata böl.
EX: **Doğru cevap: 0.2.**
**Adım adım:** $L = (50 - 40)/50 = 10/50 = 0.2$.
**Diğer şıklar neden yanlış?**
• 0.25: $10/40$, farkı MC'ye bölmek.
• 0.8: $40/50 = MC/P = 1 - L$.
• 10: yalnızca fark; fiyata bölünmemiş.

--- LESSON u1b | ? | Piyasa gücünün dört sorusu ve politika
FX: Transfer :: yüksek fiyat tüketiciden firmaya aktarımdır
FX: DWL :: piyasa gücü üretimi düşürür; maliyetinden fazla değer biçen tüketiciler alamaz (dağıtım etkinsizliği)
FX: $CS$ = değer − fiyat, $PS$ = fiyat − maliyet :: toplam artık = değer − maliyet
FX: Düzenleme, rekabet (antitröst) politikası, sanayi politikası :: üç politika türü

## CARD Dört soru
Endüstri iktisadı piyasa gücü hakkında dört soru sorar:
• (1) Piyasa gücü var mı?
• (2) Firmalar piyasa gücünü nasıl kazanır ve korur?
• (3) Piyasa gücünün sonuçları neler?
• (4) Piyasa gücüyle ilgili kamu politikasının bir rolü var mı?

## CARD (1) Piyasa gücü var mı?
==Chicago okulu==: her endüstriye **serbest giriş** olduğu sürece piyasa gücü hiçbir zaman önemli değildir. Bir firma fiyatı sürekli maliyetin üstünde tutarsa yeni firma girip fiyatı kırar. Yasa ancak birkaç şeyi yasaklamalı: fiyat sabitleyen ve pazar bölüşen karteller, tekel yaratan birleşmeler, baskın firmaların yıkıcı (predatory) fiyatlaması.
Kanıtlar ise piyasa gücünün olduğunu gösteriyor:
| Örnek | Bulgu |
| ABD hükümet raporu (1996), 43 büyük havalimanı | Bir ya da birkaç havayolunun kontrol ettiği 10 havalimanında yolcular ortalama **%31 fazla** ödüyor |
| Staples ve Office Depot (büro malzemesi) | Tek zincirin olduğu bölgelerde bazı ürünler **%15'e kadar** pahalı |

## CARD (2) Piyasa gücü nasıl kazanılır ve korunur?
• **Yasal koruma:** rakip girişini engelleyen koruma. Örnek: Xerox 1960'larda düz kâğıda fotokopi teknolojisini geliştirip patentledi.
• **Stratejik davranış:** BSkyB (uydu yayıncısı) Mayıs 1999'da İngiltere dijital TV pazarı için agresif bir paket sundu: bedava uydu alıcısı, bedava internet, telefon ücretlerinde %40 indirim. Açıklamadan sonra BSkyB hisseleri **%12 arttı**, rakip ONdigital'inki **%1.8 düştü**. Piyasa paketi rakibi zayıflatıp gücü artıran bir hamle olarak gördü.
• **Sertlik itibarı (reputation for toughness):** American Airlines Dallas/Fort Worth merkezine giren üç rakibi (Vanguard, Sun Jet, Western Pacific) yıkıcı fiyatla piyasadan çıkardığı iddiasıyla yargılandı. Dallas–Kansas City biletleri Vanguard girince 108 dolardan 80'e düştü; Vanguard çıkınca 1996'da 147 dolara kadar çıktı.

## CARD (3) Sonuçlar: transfer ve dağıtım etkinsizliği
• **Firma açısından:** daha çok kâr, daha değerli firma.
• **Toplum açısından:** yüksek fiyat tüketiciden firmaya bir ==transferdir==. Düzenleyici tüketici refahına daha çok ağırlık veriyorsa bu olumsuz.
• Transferin ötesinde yüksek fiyat ==kaynakların etkin olmayan dağılımı== demektir: bilet pahalı olduğu için uçmayan yolcular var, oysa onları taşımanın maliyeti çok düşük.
Artık tanımları:
• Tüketici artığı = değer − fiyat; üretici artığı = fiyat − maliyet; toplam artık = değer − maliyet.
• Piyasa gücü → daha az üretim → ==ölü ağırlık kaybı (DWL)== → dağıtım (allocative) etkinsizliği.
@fig welfare

## CARD (3) Sonuçlar: üretim etkinsizliği, rant kollama, dinamik etki
Az rekabetin iki etkinsizliği daha var:
• ==Üretim etkinsizliği (productive inefficiency)==: piyasa gücünün yol açtığı maliyet artışı. Avrupa havayolları Kuzey Amerika'dakilerden daha az etkin bilinir. Tekel için yüksek maliyet hemen iflas demek değildir, yönetici maliyet kontrolünde gevşer. Rekabetçi ortamda yüksek maliyet iflas riskidir, yönetici daha çok çalışır.
• ==Rant kollama (rent seeking)==: firmaların politika yapıcıları etkilemek için harcadığı üretken olmayan kaynaklar. Örnek: AT&T, şehirlerin kablo TV hatlarını rakip internet şirketlerine açmasını engelledi. AT&T bunu "konuyu yetkililere iyi anlattık" diye açıkladı; rakipler "rüşvet ya da tehdit" dedi.
• **Piyasa gücü hep kötü mü?** Dinamik düşünürsen hayır. ==Avusturya okulu== (Schumpeter): ilerlemenin izi görece serbest rekabetteki firmalara değil, **büyük şirketlerin kapısına** çıkar. Kâr beklentisi yenilik yapma teşviki verir.
:::dikkat Karıştırma
Dağıtım etkinsizliği = az üretim (DWL). Üretim etkinsizliği = gereğinden yüksek maliyet. Rant kollama = lobiye harcanan kaynak.
:::

## CARD (4) Kamu politikası
• ==Düzenleme (regulation)==: fiyatlar düzenleyici tarafından belirlenir (Bölüm 5).
• ==Rekabet (antitröst) politikası==: firmaların piyasa gücünü zararlı biçimde artıran eylemlerini (gizli anlaşma, birleşme vb.) önler.
Slayttaki iki örnek:
• **Exxon–Mobil (Mayıs 1999):** hissedarlar birleşmeyi onayladı. Yöneticiler amacın piyasa gücü değil yılda 2.8 milyar dolar maliyet tasarrufu olduğunu söyledi ("dünya üretiminin %4'ünden, satışların %11'inden azına sahibiz"). ABD düzenleyicileri yine de bazı rafineri ve istasyonların satılmasını istedi.
• **The Times (İngiltere, OFT):** gazete rakiplerini neredeyse iflasa sürükleyen agresif fiyatlama yaptı. OFT ceza vermedi (rakipleri piyasadan atma niyeti kanıtlanamadı) ama gelecekteki fiyat indirimlerini bildirmesini ve gerekçelendirmesini istedi.
• Türkiye'de düzenleme ve rekabet politikası **Rekabet Kurumu**'nun işi. Örnek: Rekabet Kurumu Aral, LG, Teknosa, Vestel, Vatan, D&R, Bimeks gibi şirketlerin yazışmalarını yayımladı; tedarikçiler perakendecilerden web sitesindeki "agresif" fiyatları düzeltmelerini istiyordu.
• Chicago okulu ise serbest rekabette piyasa gücünün hiçbir zaman çok önemli olmadığını savunur.
• ==Sanayi politikası (industrial policy)==: bir firmanın ya da endüstrinin, özellikle yabancılara karşı konumunu güçlendirmek. Airbus (dört Avrupa ülkesinin desteklediği konsorsiyum) 1970'lerde %10'dan az paydan bugün Boeing'le kafa kafaya rekabete geldi. İktisatçılar genelde sevmez: devlet "kazananı seçmeye" çalışır; devlet bunu piyasadan neden daha iyi bilsin?

## Q
SRC: Slayt 1.14 · Chicago okulu
EN: According to the Chicago school:
TR: Chicago okuluna göre:
+ as long as there is free entry into each industry, the extent of market power is never significant
- market power is the main source of innovation, so it should be protected
- every industry with few firms must be regulated
- governments should support national champions against foreign firms
HINT: Fiyat maliyetin üstündeyse ne olur?
EX: **Doğru cevap: serbest giriş varsa piyasa gücü önemsizdir.**
Fiyat sürekli maliyetin üstündeyse yeni firma girer ve fiyatı kırar. Yasaklanması gerekenler azdır: karteller, tekel yaratan birleşmeler, yıkıcı fiyatlama.
**Diğer şıklar neden yanlış?**
• innovation: bu Avusturya okulunun (Schumpeter) görüşü.
• regulate every industry: Chicago okulu tam tersine az müdahale ister.
• national champions: bu sanayi politikası; Chicago okuluyla ilgisi yok.

## Q
SRC: Slayt 1.15 · Havalimanı raporu
EN: A 1996 U.S. government report found that at airports controlled by one or a few airlines, fliers were paying on average:
TR: Bir ya da birkaç havayolunun kontrolündeki havalimanlarında yolcular ortalama ne kadar fazla ödüyordu?
+ 31% more than at other airports
- 15% more than at other airports
- 12% more than at other airports
- 7.5 times more than at other airports
HINT: 43 havalimanının 10'u.
EX: **Doğru cevap: %31 fazla.**
**Diğer şıklar neden yanlış?** Hepsi derste başka örneklerin sayıları:
• %15: Staples ya da Office Depot'nun tek olduğu bölgelerde bazı ürünler.
• %12: BSkyB'nin paketten sonra hisse artışı.
• 7.5 kat: jenerik ranitidinin Zantac'tan tablet başına ucuzluğu.

## Q
SRC: Slayt 1.19 · American Airlines
EN: American Airlines cut fares between Dallas and Kansas City from 108 to 80 dollars when Vanguard entered, and raised them to 147 dollars after Vanguard exited. This example illustrates:
TR: American Airlines örneği neyi gösterir?
+ a reputation for toughness (predatory pricing) as a way to maintain market power
- legal protection from competition through patents
- rent seeking through lobbying of policymakers
- productive inefficiency caused by managerial slack
HINT: Rakip girince ne yaptı, çıkınca ne yaptı?
EX: **Doğru cevap: sertlik itibarı.**
Giren rakibe karşı fiyatı kırıp onu çıkarmak, sonra fiyatı yükseltmek: gelecekteki rakiplere "girersen savaşırım" mesajı. Piyasa gücünü korumanın yolu.
**Diğer şıklar neden yanlış?**
• patents: yasal koruma örneği Xerox.
• rent seeking: politika yapıcıyı etkileme (AT&T kablo örneği).
• productive inefficiency: maliyet artışı (Avrupa havayolları).

## Q
SRC: Slayt 1.24 · Rant kollama
EN: Rent seeking refers to:
TR: Rant kollama nedir?
+ unproductive resources spent by firms in attempting to influence policymakers
- the increase in cost that results from market power
- the transfer of surplus from consumers to firms caused by a high price
- the loss of surplus from units that are not produced
HINT: AT&T ve kablo hatları.
EX: **Doğru cevap: politika yapıcıları etkilemeye harcanan üretken olmayan kaynaklar.**
**Diğer şıklar neden yanlış?**
• increase in cost: bu üretim etkinsizliği (productive inefficiency).
• transfer: yüksek fiyatın dağılım etkisi; kaynak israfı değil.
• units not produced: bu ölü ağırlık kaybı (dağıtım etkinsizliği).

## Q
SRC: Slayt 1.23 · Üretim etkinsizliği
EN: European airlines are known to be less efficient (have higher costs) than North American airlines. In the lecture this is an example of:
TR: Avrupa havayollarının daha yüksek maliyetli olması hangi etkinsizliğe örnektir?
+ productive inefficiency
- allocative inefficiency
- rent seeking
- dynamic efficiency
HINT: Sorun miktar değil, maliyet.
EX: **Doğru cevap: üretim etkinsizliği.**
Az rekabette yöneticiler maliyet kontrolünde gevşer; yüksek maliyet hemen iflas demek değildir.
**Diğer şıklar neden yanlış?**
• allocative: fiyat yüksek olduğu için az üretilmesi (DWL).
• rent seeking: lobi harcaması.
• dynamic efficiency: zamanla ürün ve tekniklerin iyileşmesi; bir etkinsizlik değil.

## Q
SRC: Slayt 1.25 · Schumpeter
EN: Which statement reflects the view of the Austrian school (J. Schumpeter) on market power?
TR: Avusturya okulunun (Schumpeter) piyasa gücü görüşü hangisidir?
+ Thinking dynamically, market power is not necessarily bad: progress comes mostly from large firms
- With free entry, market power is never significant
- Market power always reduces welfare and must be eliminated
- Market power only redistributes surplus and causes no inefficiency
HINT: "Dinamik düşünürsen..."
EX: **Doğru cevap: dinamik bakışla piyasa gücü kötü olmayabilir.**
Schumpeter: ilerlemenin izi büyük şirketlerin kapısına çıkar. Büyük kâr beklentisi yenilik teşviki verir.
**Diğer şıklar neden yanlış?**
• free entry: Chicago okulu.
• always reduces welfare: Schumpeter'in itirazı tam bu statik bakışa.
• only redistributes: piyasa gücünün DWL, üretim etkinsizliği ve rant kollama gibi maliyetleri de var.

## Q
SRC: Slayt 1.22 · Ölü ağırlık kaybı
EN: Demand is $P = 10 - Q$ and marginal cost is constant at 2. A monopolist sets $P = 6$ and sells 4 units. What is the deadweight loss compared with perfect competition?
TR: Talep $P = 10 - Q$, MC = 2, tekel P = 6, Q = 4. Ölü ağırlık kaybı kaçtır?
+ 8
- 16
- 32
- 4
HINT: Rekabette P = MC: kaç birim satılırdı?
EX: **Doğru cevap: 8.**
**Adım adım:** rekabette $P = MC = 2$, $Q = 8$. Kayıp üçgen: taban $8 - 4 = 4$, yükseklik $6 - 2 = 4$: $\tfrac12\times4\times4 = 8$.
**Diğer şıklar neden yanlış?**
• 16: tekel kârı $(6 - 2)\times4$; tüketiciden firmaya transfer, kayıp değil.
• 32: rekabetteki tüketici artığı $\tfrac12\times8\times8$.
• 4: üçgenin tabanı ya da yüksekliği; alan değil.

## Q
SRC: Slayt 1.33 · Sanayi politikası
EN: Airbus grew from less than 10% of the market in the 1970s to head-to-head competition with Boeing, largely thanks to support from four European governments. This is an example of:
TR: Airbus'a verilen devlet desteği hangi politikaya örnektir?
+ industrial policy
- antitrust (competition) policy
- price regulation
- rent seeking
HINT: Bir firmanın yabancılara karşı konumunu güçlendirmek.
EX: **Doğru cevap: sanayi politikası.**
Amaç bir firmanın ya da endüstrinin özellikle yabancı firmalara karşı piyasa konumunu güçlendirmek. İktisatçılar genelde sevmez: devlet kazananı seçmeye çalışır.
**Diğer şıklar neden yanlış?**
• antitrust: piyasa gücünü artıran eylemleri **önler**; Airbus'a destek tersine güç kazandırır.
• price regulation: fiyatları belirlemek.
• rent seeking: firmaların lobi harcaması; devletin politikası değil.

## Q
SRC: Slayt 1.18 · BSkyB
EN: After BSkyB announced an aggressive package (free decoder, free Internet access, 40% discount on telephone charges), BSkyB's shares rose by 12% and its rival ONdigital's fell by 1.8%. The lecture uses this as an example of:
TR: BSkyB örneği neyi gösterir?
+ how firms acquire and maintain market power through strategic behavior
- a transfer from consumers to firms
- the Chicago school view that market power is never significant
- productive inefficiency in a monopoly
HINT: Dört sorudan ikincisi.
EX: **Doğru cevap: piyasa gücünün stratejik davranışla kazanılması ve korunması.**
Hisse tepkisi, piyasanın paketi rakibi zayıflatıp BSkyB'nin gücünü artıran bir hamle olarak gördüğünü gösteriyor.
**Diğer şıklar neden yanlış?**
• transfer: indirim tüketicinin lehine; asıl mesele rakibin zayıflaması.
• Chicago school: örnek tam tersine stratejik davranışın önemini gösteriyor.
• productive inefficiency: maliyetle ilgili bir şey anlatılmıyor.
`);
