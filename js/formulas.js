window.FORMULAS = String.raw`
## Semboller: ne demek?
| Sembol | Okunuşu | Anlamı |
| $P$, $p$ | fiyat | malın fiyatı; $P(Q)$ ters talep (ödeme isteği) |
| $Q$, $q$ | miktar | $Q$ piyasa miktarı, $q$ tek firmanın miktarı; $q_1$, $q_2$ firma 1 ve 2 |
| $TC$, $FC$, $VC$ | toplam, sabit, değişken maliyet | $TC = FC + VC(q)$ |
| $AC$ (ATC), $AFC$, $AVC$ | ortalama maliyetler | $AC = TC/q = AFC + AVC$ |
| $MC$ | marjinal maliyet | bir birim daha üretmenin ek maliyeti; $c$ sabit MC |
| $MR$ | marjinal gelir | bir birim daha satınca gelirdeki artış |
| $L$ | Lerner endeksi | $(P - MC)/P$, piyasa gücü (0 ile 1 arası) |
| $\varepsilon$ | epsilon, talep esnekliği | fiyat %1 artınca talep yüzde kaç değişir (negatif); $|\varepsilon|$ mutlak değeri |
| $CS$, $PS$ | tüketici, üretici artığı | değer − fiyat; fiyat − maliyet |
| $DWL$ | ölü ağırlık kaybı | üretilmeyen birimlerin kaybettirdiği artık |
| $MES$ | asgari etkin ölçek | AC'nin en düşük olduğu en küçük üretim |
| $a$, $b$ | talebin kesişimi ve eğimi | $P = a - bQ$ |
| $\alpha$, $\beta$ | alfa, beta | $MC = \alpha + 2\beta Q$ (Bölüm 5 ödevi) |
| $K$ | kapasite | küçük rakiplerin toplam kapasitesi ya da firma başına kapasite |
| $D_R$ | kalan (residual) talep | baskın firmaya kalan talep $D - K$ |
| $F$, $M$, $w$ | sabit maliyet, yönetici maaşı, ücret | Bölüm 6 örnekleri |
| $N$, $n$ | firma sayısı | |
| $BR$ | en iyi cevap (best response) | tepki fonksiyonu |
| IEDS | baskılanan stratejilerin ardışık elenmesi | iterated elimination of dominated strategies |
| NE | Nash dengesi | kimse tek başına sapmak istemez |
| $\pi$ | pi, kâr | $\pi^M$ tekel kârı, $\pi^{NE}$ Nash (Cournot) kârı, $\pi^x$ sapma kârı |
| $\delta$ | delta, iskonto faktörü | yarının 1 lirasının bugünkü değeri, $0 < \delta < 1$ |
| $r$ | faiz (iskonto) oranı | $\delta = 1/(1 + r)$ |
| $h$, $f$, $g$ | devam olasılığı, yıllık fiyat belirleme sıklığı, büyüme oranı | etkin iskonto faktörü $\delta = h(1 + g)/(1 + r/f)$ |

## Sınavda hızlı yollar (25 soru, 60 dakika)
| Soru tipi | Hızlı yol |
| Lerner | $(P - MC)/P$; tekelde $1/|\varepsilon|$; MC yoksa kâr/gelir |
| Doğrusal talep esnekliği | $|\varepsilon| = P/(a - P)$ (tüketici sayısı önemsiz) |
| Basamaklı MC | fiyatın altındaki son basamağın sonuna kadar üret |
| AC tablosu | $TC = AC\cdot q$; $MC(q) \le P \le MC(q+1)$ |
| Batık maliyet | kalan maliyet < fayda ise devam |
| Nash (tablo) | sütunda 1'in, satırda 2'nin en iyisinin altını çiz |
| Tekel, $P = a - bQ$, MC = c | $Q = (a - c)/(2b)$, $P = (a + c)/2$, $\pi = (a - c)^2/(4b)$, DWL = $\pi/2$ |
| Sabit esneklik | $P = MC\cdot|\varepsilon|/(|\varepsilon| - 1)$ ($|\varepsilon| = 2$ → 2·MC) |
| Baskın firma | iki seçenek: P = rakip MC'de at, ya da kalan talepte tekel; kârı karşılaştır |
| Rekabetçi firma | $q$: P = MC; uzun dönem $q = \sqrt{F/b}$, $P = a + 2\sqrt{Fb}$ ($TC = F + aq + bq^2$) |
| Cournot iki eş firma | $q = (a - c)/(3b)$, $P = (a + 2c)/3$, kâr $= b q^2$ |
| Cournot farklı maliyet | $q_i = (a - 2c_i + c_j)/(3b)$ |
| Cournot n firma | $q = (a - c)/((n+1)b)$, $P = (a + nc)/(n + 1)$ |
| Kapasiteli Bertrand | $P = a - 2K$ (kontrol: $a - 3K \ge c$) |
| Grim trigger Bertrand | $\delta \ge 1 - 1/N$ (N = 2: 0.5) |
| Grim trigger Cournot | $\delta \ge 9/17 \approx 0.53$ (doğrusal, eş firmalar) |

## Bölüm 1 · Giriş: piyasa gücü
| Kavram | Formül ya da tanım |
| Piyasa gücü | fiyatı MC'nin üstüne koyabilme |
| Lerner endeksi | $L = \frac{P - MC}{P}$, $0 \le L \le 1$ |
| MC yerine AC | $L \approx \frac{P - AC}{P} = \frac{\text{kâr}}{\text{gelir}}$ |
| Dört soru | var mı? nasıl kazanılır/korunur? sonuçları? politika? |
| Sonuçlar | transfer, dağıtım etkinsizliği (DWL), üretim etkinsizliği, rant kollama; dinamik bakışta yenilik (Schumpeter) |
| Politikalar | düzenleme, rekabet (antitröst), sanayi politikası (Airbus); Chicago okulu: serbest girişle piyasa gücü önemsiz |
| Sayılar | havalimanı %31, Staples %15, BSkyB +%12 / ONdigital −%1.8, Zantac 7.5 kat, AA 108 → 80 → 147 |

## Bölüm 2 · Temel mikroiktisat
| Kavram | Formül |
| Tüketici artığı | $\sum(\text{ödeme isteği} - P)$; pizza: 3, 1.5, 0.2 ve P = 1 → 2 dilim, artık 2.5 |
| Esneklik | $\varepsilon = \frac{dq}{dp}\cdot\frac{p}{q}$; 100 kişi, $P = 3 - 4q$ → $Q = 75 - 25P$, $|\varepsilon| = P/(3 - P)$ |
| Maliyetler | $TC = FC + VC$, $AC = AFC + AVC$, $MC = dTC/dq$ |
| Tişört | q = 40: TC 100, AC 2.5, AVC 2, MC 2; 41. birim 3; tam kapasite P = 4; 56'da AC = 156/56 ≈ 2.79; P = 3.5 → 48 |
| AC tablosu | AC = q ise $MC(q) = 2q - 1$; 200 birim için $399 \le P \le 401$ |
| Marjinal gelir | $MR = p(1 - 1/|\varepsilon|)$ (2.2) |
| Kâr en çoklama | MR = MC; tam rekabette p = MR = MC |
| Kapsam ekonomisi | $C(q_1, q_2) < C(q_1, 0) + C(0, q_2)$ |
| Ekonomik maliyet | + fırsat maliyeti, − batık maliyet (baraj: 5 < 7 devam; tünel: 6 > 5 yapma) |

## Bölüm 3 · Firma
| Kavram | Özet |
| Vekâlet | risk nötr yönetici → firmayı ona sat (MBO); riskten kaçınma → sigorta ile teşvik dengesi |
| Sözleşmeler | sabit maaş: en az risk/teşvik; satış: en çok; karma: hisse opsiyonu |
| Kurul | içeriden üye azsa bağımsız; CEO < 4.5 yıl → içeriden ayrılma %25.7 daha olası |
| Disiplin | emek (itibar), ürün (rekabet), sermaye (devralma) piyasası |
| Sınırlar | yatay (VW–Skoda), dikey (VW–lastik); hold-up: özgü yatırım + fırsatçılık (GM–Fisher, 1924–26) |
| Ara çözümler | tapered (Coca-Cola şişeleme), franchising (McDonald's); Benetton franchise, Zara bütünleşik |
| Farklılık | kâr varyansının yalnız %20'si açıklanır; örtük bilgi (Toyota); öğrenme eğrisi (Boeing) |

## Bölüm 4 · Oyunlar
| Kavram | Özet |
| Baskın strateji | rakip ne yaparsa yapsın kesinlikle daha iyi; yalnız kendi rasyonelliği gerekir |
| IEDS | baskılananı sırayla sil; Şekil 4.2: M → C → T → L, çözüm (B, R) |
| Nash | tek başına sapma kazandırmaz; baskın ⇒ IEDS ⇒ Nash |
| Tutsak ikilemi | (B, R) = (4, 4); (T, L) = (5, 5) denge değil |
| Giriş oyunu | Nash: (gir, uzlaş) ve (girme, savaş); geriye doğru tümevarım: (gir, uzlaş) = (10, 20) |
| Bağlılık | savaşmaya bağlanabilen yerleşik firma 50 alır (20 yerine) |
| İki turlu oyun | uymak 5 + 4 = 9 > sapmak 6 + 1 = 7 |

## Bölüm 5 · Tekel
| Kavram | Formül |
| Esneklik kuralı | $\frac{P - MC}{P} = \frac{1}{|\varepsilon|}$; optimumda $|\varepsilon| > 1$ |
| Ödev | $TC = 2Q$, $Q = 10000/P^2$: $\varepsilon = -2$ sabit, P = 4 |
| Doğrusal talep | $MR = a - 2bQ$; $MC = \alpha + 2\beta Q$ → $Q^* = \frac{a - \alpha}{2(b + \beta)}$, $P^* = a - bQ^*$ |
| Baskın firma | kalan talep $D - K$; örnek (Q = 20 − 2P, K = 2): atma P = 4 kâr 36 > paylaşma P = 5 kâr 32 |
| Düzenleme | P = 10 − Q, MC = 2: $Q_M = 4$, $P_M = 6$, $Q_C = 8$, DWL = 8 |
| Yöntemler | P = MC (sabit maliyet karşılanmaz), P = AC (maliyet düşürme teşviki yok), tavan fiyat (kalite teşviki yok) |
| Türk Telekom | $\sum w_i \Delta p_i/p_i \le I - X + \Delta$, her hizmette $\le \alpha_i$ |

## Bölüm 6 · Tam rekabet
| Kavram | Formül |
| Kısa dönem | $TC = F + q + 0.05q^2$: $MC = 1 + 0.1q$, $q_S = 10P - 10$; 200 firma, $Q_D = 10300 - 50P$ → P = 6, q = 50, kâr $125 - F$ |
| Uzun dönem | $P = \min AC$; $-F/q^2 + 0.05 = 0$; F = 80 → q = 40, P = 5, 10050/40 → 251 firma |
| Farklı maliyet | marjinal firma P = AC, ucuz firma rant; Merlin: q 5 ve 10, N = 8, M = 50, rant 50 |
| Tekelci rekabet | kısa dönem MR = MC; uzun dönem P = AC > MC; ödev q = 30, P = 7, kâr 95 |

## Bölüm 7 · Oligopol
| Kavram | Formül |
| Bertrand | $p_1 = p_2 = c$ (paradoks) |
| Kapasiteli Bertrand | P = 12 − Q, K = 3, MC = 2: (2, 2) değil (sapma kârı 6), (6, 6) denge, kâr 12 |
| Cournot tepki | $q_1 = \frac{a - c}{2b} - \frac{q_2}{2}$ |
| Cournot denge | $q = \frac{a - c}{3b}$; P = 12 − Q, c = 0: q = 4, P = 4, kâr 16; (3, 3) sürmez ($BR(3) = 4.5$) |
| Farklı maliyet | $c_1 = 1$, $c_2 = 2$: $q_1 = 4$, $q_2 = 3$, P = 5 |
| Model seçimi | kapasite kolay ayarlanıyorsa Bertrand (yazılım), zor ise Cournot (konsol) |
| Karşılaştırmalı statik | $p^N = (a + 2c)/3$, $dp/dc = 2/3$; yakıt %80 × pay %50 = MC +%40 → fiyat +%26.6 |

## Bölüm 8 · Gizli anlaşma
| Kavram | Formül |
| Bugünkü değer | $\pi_1 + \delta\pi_2 + \delta^2\pi_3 + \dots$; sabit akış $\pi/(1 - \delta)$ |
| Grim trigger, 2 firma | $\frac{\pi^M/2}{1 - \delta} \ge \pi^M \Leftrightarrow \delta \ge 1/2$ |
| N firma | $\delta \ge 1 - 1/N$ (N = 10: 0.9) |
| Etkin iskonto | $\delta = \frac{h(1 + g)}{1 + r/f}$ |
| Engeller | yasa dışı, düşük devam olasılığı, inanılmaz ceza, gizli indirimler |
| Kolaylaştıranlar | az ve simetrik firma, çok pazarlı ilişki |
| Cournot | $\delta \ge \frac{\pi^x - \pi^M/2}{\pi^x - \pi^{NE}}$; Q = 14 − P, c = 2: 36, 16, 20.25 → 9/17 ≈ 0.53 |
`;
