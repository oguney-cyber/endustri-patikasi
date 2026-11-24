CONTENT.push(String.raw`
=== UNIT u4 | Bölüm 4 | Oyunlar ve Strateji | Normal biçim, baskın strateji, IEDS, Nash dengesi, ardışık oyunlar, tekrarlanan oyunlar

--- LESSON u4a | G | Oyun, baskın strateji ve IEDS
FX: Oyun = oyuncular + hamleler + getiriler :: normal biçim (tablo)
FX: Baskın strateji :: rakip ne yaparsa yapsın kesinlikle daha iyi
FX: Baskılanan (dominated) strateji :: başka bir strateji her durumda daha iyi; rasyonel oyuncu oynamaz
FX: IEDS :: baskılanan stratejileri sırayla sil (rakiplerin rasyonel olduğundan emin olmak gerekir)

## CARD Oyun nedir?
Time dergisi gelecek haftanın kapağını seçiyor: "Impeachment" ya da "Financial Crisis". Impeachment daha umut verici ama önemli olan **Newsweek ile aynı kapağı seçmemek**. Time'ın getirisi yalnızca kendi kararına değil, öbür oyuncunun (Newsweek) kararına da bağlı: ==karşılıklı bağımlı karar verme==.
==Oyun==: bir ajanın getirisinin hem kendi hamlesine hem de başka ajanların hamlelerine bağlı olduğu stratejik durumların modeli.
Bir oyunun üç unsuru:
• **Oyuncular** kim?
• Olası **hamleler** (actions) neler?
• **Getiriler** (payoffs) neler?

## CARD Tablo nasıl okunur?
Uygulamadaki tablolarda her hücrede iki sayı var: **(1. oyuncunun getirisi, 2. oyuncunun getirisi)**. 1. oyuncu satırı (T, M, B), 2. oyuncu sütunu (L, C, R) seçer.
:::dikkat Slaytlarda düzen farklı
Kitabın ve slaytların tablolarında her hücrede 2. oyuncunun getirisi **sağ üstte**, 1. oyuncununki **sol altta** yazılı. Sınavda tabloya bakınca önce kimin sayısı nerede, onu belirle.
:::
• 1. oyuncunun en iyi cevabını ararken **aynı sütunda** satırları karşılaştır.
• 2. oyuncunun en iyi cevabını ararken **aynı satırda** sütunları karşılaştır.

## CARD Tutsak ikilemi
@fig pd
• Her iki oyuncunun da baskın stratejisi var: 1. oyuncu için B (6 > 5 ve 4 > 3), 2. oyuncu için R. Sonuç (B, R) = (4, 4).
• Oysa (T, L) ikisine de 5 verirdi. Bireysel rasyonellik ortak çıkarla çelişiyor.
• **Fiyat rekabeti** aynı yapıda: T, L = yüksek fiyat; B, R = düşük fiyat. İki firma da yüksek fiyatta daha çok kazanırdı ama her biri fiyat kırmaya yöneliyor (Bölüm 7–8).
• Bu tür oyuna ==statik ya da eşanlı (simultaneous)== oyun denir. Oyuncuların gerçekten aynı anda oynaması gerekmez: önemli olan, karar verirken öbürünün hamlesini **gözlememesi**.

## CARD Baskın ve baskılanan strateji
• ==Baskın strateji==: öbür oyuncular ne seçerse seçsin diğer bütün stratejilerden **kesinlikle daha iyi** olan strateji. Tutsak ikileminde ikisinin de var.
• Oyuncunun baskın stratejisi varsa ve oyuncu rasyonelse onu oynamasını bekleriz. Bunun için yalnızca **oyuncunun kendisinin** rasyonel olması yeter: öbürlerinin rasyonel olduğunu, hatta onların getirilerini bilmesine bile gerek yok. Bu yüzden kavram çok **sağlamdır (robust)**.
• Ama her oyunun baskın strateji dengesi yoktur.
• ==Baskılanan (dominated) strateji==: başka bir stratejiye göre, öbür oyuncu ne yaparsa yapsın daha kötü getiren strateji. Rasyonel oyuncu onu seçmez.

## CARD Baskılanan stratejilerin ardışık elenmesi (IEDS)
@fig ieds0
Baskın strateji yok. Ama M baskılanıyor: T her sütunda M'den iyi.
@fig ieds1
@fig ieds2
Sıra: **M** (T baskılar) → **C** (R baskılar) → **T** (B baskılar) → **L** (R baskılar). IEDS çözümü **(B, R)**.
:::ipucu Sınavda
Sıra önemli: C ancak M silindikten sonra elenebiliyor (M satırında C, R'den iyi). Her adımda "kalan tabloda" karşılaştır.
:::

## CARD IEDS'nin şüpheli kullanımı
@fig dubious
IEDS için **rakibin de rasyonel olduğundan emin olmak** gerekir. Burada 2. oyuncu için R, L'yi baskılıyor; L silinince 1. oyuncu B'yi seçer, çözüm (B, R). Ama 2. oyuncu yanılıp L oynarsa 1. oyuncu −100 alır. 1. oyuncu olsan B'yi gönül rahatlığıyla oynar mıydın? Garantili 1 veren T daha akıllıca olabilir.

## GEN dom2x2

## Q
SRC: Şekil 4.1 · Tutsak ikilemi
EN: In the prisoner's dilemma game (payoffs: (T, L) = (5, 5), (T, R) = (3, 6), (B, L) = (6, 3), (B, R) = (4, 4); first number for player 1), does any player have a dominant strategy?
TR: Tutsak ikileminde baskın strateji var mı?
+ Yes: B for player 1 and R for player 2
- Yes: T for player 1 and L for player 2
- Only player 1 has a dominant strategy
- No player has a dominant strategy
HINT: Birinci oyuncu için iki sütunda T ile B'yi karşılaştır.
EX: **Doğru cevap: B ve R baskın.**
**Adım adım:** 1. oyuncu: L sütununda B = 6 > T = 5; R sütununda B = 4 > T = 3. B her durumda iyi. Oyun simetrik: 2. oyuncu için R (6 > 5, 4 > 3).
**Diğer şıklar neden yanlış?**
• T and L: ikisine de 5 verir ama her biri tek başına sapınca 6 alır.
• only player 1: oyun simetrik; 2. oyuncunun da var.
• none: yukarıdaki karşılaştırma ikisinin de baskın stratejisi olduğunu gösteriyor.

## Q
SRC: Slayt 4.5 · Sağlamlık
EN: For a player to choose her dominant strategy, what do we need to assume?
TR: Oyuncunun baskın stratejisini oynaması için ne varsaymak gerekir?
+ Only that the player herself is rational
- That all players are rational and know each other's payoffs
- That the player knows the other players' payoffs
- That the game is played many times
HINT: Rakip ne yaparsa yapsın daha iyi.
EX: **Doğru cevap: yalnızca oyuncunun kendisinin rasyonel olması.**
Baskın strateji rakibin her hamlesine karşı en iyisi olduğu için rakibin ne yapacağını tahmin etmeye gerek yok. Bu yüzden kavram çok sağlam.
**Diğer şıklar neden yanlış?**
• all players rational: bu IEDS için gerekir.
• knows others' payoffs: gerekmez; slayt bunu açıkça söylüyor.
• played many times: tek seferlik oyunda da geçerli.

## Q
SRC: Şekil 4.2 · IEDS
EN: In Figure 4.2 (player 1: T, M, B; player 2: L, C, R), which strategy is eliminated first by iterated elimination of dominated strategies?
TR: Şekil 4.2'de ilk elenen strateji hangisi?
+ M, because it is dominated by T
- C, because it is dominated by R
- T, because it is dominated by B
- L, because it is dominated by R
HINT: Başlangıçta hangi strateji bir başkasından her durumda kötü?
EX: **Doğru cevap: M.**
T, M'den her sütunda iyi (1 > 0, 2 > 0, 1 > 0).
**Diğer şıklar neden yanlış?**
• C: M dururken C elenemez (M satırında C = 1 > R = 0). Ancak M silindikten sonra.
• T: B, T'yi yalnızca M ve C silindikten sonra baskılar.
• L: en son elenir.

## Q
SRC: Şekil 4.2 · IEDS çözümü
EN: What is the solution of Figure 4.2 by iterated elimination of dominated strategies?
TR: Şekil 4.2'nin IEDS çözümü nedir?
+ (B, R)
- (T, C)
- (T, L)
- (M, C)
HINT: M → C → T → L.
EX: **Doğru cevap: (B, R).**
**Adım adım:** M silinir (T baskılar) → C silinir (R baskılar) → T silinir (B baskılar) → L silinir (R baskılar). Kalan tek hücre (B, R) = (2, 2).
**Diğer şıklar neden yanlış?**
• (T, C): C ikinci adımda silinir.
• (T, L): T üçüncü, L dördüncü adımda silinir.
• (M, C): ilk silinen iki strateji.

## Q
SRC: Şekil 4.3 · Şüpheli IEDS
EN: In Figure 4.3, player 1's payoffs are T: 1 (against L), 1 (against R); B: −100 (against L), 2 (against R). For player 2, R dominates L. The IEDS solution is (B, R). Why might player 1 hesitate to play B?
TR: IEDS çözümü (B, R) olsa da 1. oyuncu neden B'den çekinir?
+ If player 2 is not rational and plays L, player 1 gets −100, while T guarantees 1
- Because B is a dominated strategy for player 1
- Because (B, R) is not a Nash equilibrium
- Because player 2 has no dominant strategy
HINT: IEDS rakibin rasyonelliğine dayanır.
EX: **Doğru cevap: rakip yanılıp L oynarsa −100.**
IEDS, rakibin de rasyonel olduğuna güvenmeyi gerektirir. Kayıp çok büyükse garantili 1 veren T daha akıllıca olabilir.
**Diğer şıklar neden yanlış?**
• B dominated: B, R'ye karşı daha iyi (2 > 1); baskılanmıyor.
• not Nash: (B, R) Nash dengesi; IEDS çözümü her zaman Nash'tir.
• no dominant strategy: tersine R, 2. oyuncu için baskın.

## Q
SRC: Slayt 4.4 · Statik oyun
EN: A game is called static (simultaneous-move) when:
TR: Bir oyun ne zaman statik (eşanlı) sayılır?
+ each player chooses its action without observing the other players' actions
- players literally move at exactly the same moment
- the game is played only once and has a dominant strategy
- payoffs do not change over time
HINT: Slayttaki soru: aynı anda oynamaları şart mı?
EX: **Doğru cevap: hamlesini öbürünün hamlesini gözlemeden seçmek.**
Önemli olan bilgi: biri önce oynasa bile öbürü bunu görmüyorsa oyun yine eşanlıdır.
**Diğer şıklar neden yanlış?**
• same moment: gerekmez.
• dominant strategy: statik oyunların çoğunda baskın strateji yoktur.
• payoffs over time: zamanla ilgili bir tanım değil.

--- LESSON u4b | N | Nash dengesi
FX: Nash dengesi :: hiçbir oyuncu stratejisini tek başına değiştirerek getirisini artıramaz
FX: Baskın strateji dengesi ⇒ IEDS çözümü ⇒ Nash dengesi :: tersi doğru değil
FX: Birden çok denge :: hangisinin oynanacağını oyun söylemez

## CARD Tanım ve altını çizme yöntemi
Bir strateji çifti, hiçbir oyuncu stratejisini **tek başına** değiştirerek getirisini artıramıyorsa ==Nash dengesidir==.
:::ipucu Sınavda hızlı yol (altını çizme)
• Her **sütunda** 1. oyuncunun en büyük getirisinin altını çiz.
• Her **satırda** 2. oyuncunun en büyük getirisinin altını çiz.
• İki çizgili her hücre bir Nash dengesi. 3×3 tabloda 30 saniye.
:::

## CARD Şekil 4.4: baskın strateji yok, IEDS yok, Nash var
@fig nash44
Slayttaki üç soru:
• **Baskın strateji dengesi var mı?** Hayır.
• **IEDS çözümü var mı?** Hayır: elenecek baskılanan strateji kalmıyor.
• **Nash dengesi var mı?** Evet: (T, C). C sütununda 1. oyuncunun en iyisi T (2), T satırında 2. oyuncunun en iyisi C (2).
:::dikkat
Slayttaki tabloda B satırı R sütunu (2, 2) da altını çizme testini geçiyor. Kitap bu şekli (T, C) için kullanır; sınavda şıklarda (T, C) varsa o, (B, R) de soruluyorsa onu da denge say.
:::

## CARD Birden çok Nash dengesi
@fig multi
(T, L) ve (B, R) ikisi de Nash dengesi. Time ve Newsweek kapağı da böyle bir oyun: önemli olan aynı kapağı seçmemek; birden çok "uyumlu" sonuç var. Hangisinin olacağını tarih, gelenek ya da odak noktası belirler.

## CARD Üç çözüm kavramı
| Kavram | Neyi varsayar? | İlişki |
| Baskın strateji dengesi | yalnızca kendi rasyonelliği | her zaman IEDS çözümü |
| IEDS çözümü | rakiplerin de rasyonel olduğunu | her zaman Nash dengesi |
| Nash dengesi | herkes ötekinin stratejisine en iyi cevap veriyor | her oyunda baskın strateji ya da IEDS çözümü değil |
Yani baskın strateji dengesi Nash'tir, ama Nash dengesi her zaman IEDS çözümü değildir (Şekil 4.4).

## GEN nash2x2

## Q
SRC: Slayt 4.12 · Nash tanımı
EN: A pair of strategies constitutes a Nash equilibrium if:
TR: Nash dengesinin tanımı nedir?
+ no player can unilaterally change its strategy in a way that improves its payoff
- the sum of the players' payoffs is maximized
- each player plays a dominant strategy
- no strategy can be eliminated as dominated
HINT: "Tek başına sapma."
EX: **Doğru cevap: kimse tek başına sapınca kazanamaz.**
**Diğer şıklar neden yanlış?**
• sum maximized: tutsak ikileminde Nash (4, 4), toplamı en büyük (5, 5) değil.
• dominant strategy: baskın strateji dengesi daha güçlü bir kavram; Nash bunu gerektirmez.
• no strategy eliminated: Şekil 4.4'te hiçbir strateji elenemez ama yine de belli hücreler Nash, ötekiler değil.

## Q
SRC: Şekil 4.4 · Nash dengesi
EN: Consider the game below (first number: player 1's payoff, rows; second: player 2's payoff, columns). Which of the following is a Nash equilibrium?
| | L | C | R |
| T | (2, 1) | (2, 2) | (0, 1) |
| M | (1, 1) | (1, 1) | (1, 1) |
| B | (0, 1) | (0, 0) | (2, 2) |
TR: Şekil 4.4'teki oyunda hangisi Nash dengesidir?
+ (T, C)
- (T, L)
- (M, C)
- (M, R)
HINT: Altını çizme yöntemi.
EX: **Doğru cevap: (T, C).**
**Adım adım:** C sütununda 1. oyuncu: T 2, M 1, B 0 → T en iyi ✓. T satırında 2. oyuncu: L 1, C 2, R 1 → C en iyi ✓.
**Diğer şıklar neden yanlış?**
• (T, L): 2. oyuncu C'ye geçip 2 alır (1 yerine).
• (M, C): 1. oyuncu T'ye geçip 2 alır.
• (M, R): 1. oyuncu B'ye geçip 2 alır.
(Bu tabloda (B, R) de denge; şıklarda yok.)

## Q
SRC: Slayt 4.15 · Üç kavram
EN: Which statement about the three solution concepts is correct?
TR: Üç çözüm kavramı hakkında hangisi doğru?
+ A dominant-strategy equilibrium is also a Nash equilibrium, but a Nash equilibrium need not be an IEDS solution
- Every Nash equilibrium is a dominant-strategy equilibrium
- An IEDS solution need not be a Nash equilibrium
- A game without dominant strategies has no Nash equilibrium
HINT: Baskın ⇒ IEDS ⇒ Nash.
EX: **Doğru cevap: baskın strateji dengesi Nash'tir; Nash her zaman IEDS değildir.**
**Diğer şıklar neden yanlış?**
• every Nash is dominant: Şekil 4.4'te Nash var ama baskın strateji yok.
• IEDS need not be Nash: IEDS çözümü her zaman Nash.
• no Nash without dominant strategies: Şekil 4.4 ve 4.5 karşı örnek.

## Q
SRC: Şekil 4.5 · Birden çok denge
EN: In the game below (first number: player 1), what are the Nash equilibria?
| | L | R |
| T | (1, 2) | (0, 0) |
| B | (0, 0) | (2, 1) |
TR: Şekil 4.5'te Nash dengeleri hangileri?
+ (T, L) and (B, R)
- Only (B, R)
- Only (T, L)
- (T, R) and (B, L)
HINT: Her hücrede tek başına sapma kârlı mı?
EX: **Doğru cevap: (T, L) ve (B, R).**
**Adım adım:** (T, L): 1. oyuncu B'ye geçerse 0 < 1; 2. oyuncu R'ye geçerse 0 < 2 → denge. (B, R): 1. oyuncu T'ye geçerse 0 < 2; 2. oyuncu L'ye geçerse 0 < 1 → denge.
**Diğer şıklar neden yanlış?**
• only one: iki hücre de testi geçiyor; getirisi daha büyük olanı seçmek gerekmez.
• (T, R), (B, L): bu hücrelerde ikisi de 0 alıyor; herkes sapmak ister.

## Q
SRC: Şekil 4.4 · Kavramlar
EN: In the game of Figure 4.4, which of the following holds?
TR: Şekil 4.4 için hangisi doğru?
+ There is no dominant strategy and no IEDS solution, but there is a Nash equilibrium
- There is a dominant-strategy equilibrium
- IEDS leads to a unique solution
- There is no Nash equilibrium in pure strategies
HINT: Slayttaki üç soru.
EX: **Doğru cevap: baskın strateji yok, IEDS çözümü yok, Nash var.**
M satırı her yerde 1 veriyor; T ya da B onu her durumda baskılamıyor (T, R sütununda 0; B, L sütununda 0). 2. oyuncu için de baskılanan sütun yok. Yine de (T, C) Nash.
**Diğer şıklar neden yanlış?**
• dominant strategy: hiçbir oyuncunun her durumda en iyi stratejisi yok.
• IEDS unique: silinecek strateji olmadığı için tablo küçülmüyor.
• no Nash: (T, C) dengede.

--- LESSON u4c | T | Ardışık ve tekrarlanan oyunlar
FX: Geriye doğru tümevarım :: son karardan başla; inanılmaz tehditleri ele
FX: İnanılmaz tehdit :: zamanı gelince uygulamak tehdit edenin işine gelmeyen tehdit
FX: Bağlılık (commitment) :: seçenekleri önceden kısıtlamak değerli olabilir
FX: Tekrarlanan oyun :: geçmişe tepki (misilleme) mümkün; tek seferde denge olmayan sonuçlar denge olabilir

## CARD Ardışık oyun ve oyun ağacı
Bir oyuncu hamle yapar, öbürü bunu **gözler** ve sonra hamle yapar: ==ardışık oyun==. Ağaç (extensive form) ile gösterilir.
@fig tree
Slayttaki sorular:
• **Oyuncular:** 1 (giriş düşünen firma), 2 (yerleşik firma).
• **Zamanlama:** önce 1 girer (e) ya da girmez (ē); girerse 2 savaşır (r) ya da uzlaşır (r̄).
• **Karar düğümleri:** 1'in başlangıç düğümü ve girişten sonra 2'nin düğümü.
• **Nash dengeleri:** (e, r̄) = (10, 20) ve (ē, r) = (0, 50). İkincisinde 2 "girersen savaşırım" der, 1 girmez.
• **İnanılmaz tehdit:** giriş olursa savaşmak 2'ye −10, uzlaşmak 20 getirir. Zamanı gelince 2 savaşmaz.
• **Geriye doğru tümevarım:** önce 2'nin kararı (uzlaş), sonra 1'in kararı (gir: 10 > 0). Çözüm (e, r̄) = (10, 20).

## CARD Bağlılığın değeri
Yerleşik firma (2. oyuncu) savaşmaya önceden **bağlanabilseydi** (yetkisini her durumda savaşacak bir avukata devredip tatile çıksaydı)? 1 savaşılacağını bilir, girmez: 2'nin getirisi **50**, uzlaşmadaki 20'den fazla. Seçeneklerini kısıtlamak ona kazandırır: ==bağlılık değerlidir==.

## CARD Tekrarlanan oyunlar
==Misilleme==: bir oyuncunun rakibinin hamlesine tepki olarak kendi değişkenini değiştirmesi. Statik oyunda tepki için zaman yoktur; bunu ancak tekrarlanan oyunlar modelleyebilir.
@fig stage
• Her oyuncunun 3 hamlesi var; bir turda 3 × 3 = 9 olası sonuç. Oyun iki kez oynanınca strateji, birinci turdaki hamleyi ve birinci turun **her olası sonucuna** karşı ikinci turdaki hamleyi söyleyen tam bir plandır (hamlelerin toplamı = strateji).
• Aşama oyununun iki dengesi var: (M, C) ve (B, R). Son turda bunlardan biri oynanır.
• Denge stratejisi (1. oyuncu): "birinci turda T oyna; 2. oyuncu L oynadıysa ikinci turda M, oynamadıysa B oyna" (2. oyuncu için simetrik).
| | 1. tur | 2. tur | Toplam |
| Uyarsa | 5 | 4 (iyi denge) | **9** |
| Saparsa | 6 | 1 (kötü denge, ceza) | **7** |
9 > 7: (T, L) tek seferlik oyunda denge değilken tekrarlanan oyunda birinci turda oynanabiliyor.

## GEN entry
## GEN twoStage

## Q
SRC: Şekil 4.6 · Geriye doğru tümevarım
EN: In the sequential entry game (if player 1 stays out: (0, 50); if it enters and player 2 fights: (−10, −10); if it enters and player 2 accommodates: (10, 20)), what is the backward-induction solution?
TR: Giriş oyununun geriye doğru tümevarım çözümü nedir?
+ Player 1 enters and player 2 accommodates: (10, 20)
- Player 1 stays out: (0, 50)
- Player 1 enters and player 2 fights: (−10, −10)
- There is no solution because the game has two Nash equilibria
HINT: Önce 2'nin girişten sonraki kararı.
EX: **Doğru cevap: gir, uzlaş.**
**Adım adım:** girişten sonra 2: savaş −10, uzlaş 20 → uzlaşır. Bunu bilen 1: gir 10, girme 0 → girer.
**Diğer şıklar neden yanlış?**
• stays out: inanılmaz tehdide dayanan Nash dengesi; geriye doğru tümevarım onu eler.
• fights: girişten sonra savaşmak 2'nin işine gelmez.
• no solution: geriye doğru tümevarım tam da birden çok dengeden birini seçmek için.

## Q
SRC: Şekil 4.6 · İnanılmaz tehdit
EN: In the same entry game, which threat is not credible?
TR: Hangi tehdit inanılmazdır?
+ Player 2's threat to fight if player 1 enters, since fighting gives it −10 while accommodating gives 20
- Player 1's threat to enter
- Player 2's threat to accommodate
- Player 1's threat to stay out
HINT: Zamanı gelince uygulamak kimin işine gelmez?
EX: **Doğru cevap: 2'nin "girersen savaşırım" tehdidi.**
Tehdit, uygulama zamanı geldiğinde tehdit edenin çıkarına değilse inanılmazdır: −10 < 20.
**Diğer şıklar neden yanlış?**
• threat to enter / stay out: 1'in hamleleri tehdit değil, seçim.
• threat to accommodate: uzlaşmak 2'nin gerçekten tercih edeceği hamle; tehdit sayılmaz.

## Q
SRC: Şekil 4.6 · Nash dengeleri
EN: How many Nash equilibria (in pure strategies) does the entry game of Figure 4.6 have, and which are they?
TR: Şekil 4.6'da kaç ve hangi Nash dengeleri var?
+ Two: (enter, accommodate) and (stay out, fight)
- One: (enter, accommodate)
- One: (stay out, fight)
- Two: (enter, fight) and (stay out, accommodate)
HINT: Nash kontrolü inanılırlığa bakmaz.
EX: **Doğru cevap: iki denge.**
**Adım adım:** (gir, uzlaş): 1 girmezse 0 < 10; 2 savaşırsa −10 < 20 → denge. (girme, savaş): 1 girerse −10 < 0; 2'nin stratejisi değişse 1 girmediği için getirisi aynı (50) → denge. Ama ikincisi inanılmaz tehdide dayanır; geriye doğru tümevarım yalnızca birincisini bırakır.
**Diğer şıklar neden yanlış?**
• one equilibrium: Nash tanımı inanılmaz tehditleri elemez; o yüzden iki denge var.
• (enter, fight): 2 uzlaşmaya geçip 20 alır.
• (stay out, accommodate): 1 girip 10 alır.

## Q
SRC: Slayt 4.18 · Bağlılık
EN: In the entry game, suppose player 2 can commit to fighting (for example by delegating the decision to a lawyer) before player 1 moves. Is player 2 better off?
TR: İkinci oyuncu savaşmaya önceden bağlanabilirse kazançlı çıkar mı?
+ Yes: player 1 stays out and player 2 gets 50 instead of 20
- No: player 2 then has to fight and gets −10
- No: commitment never has value in games
- Yes, but only if player 1 is irrational
HINT: Bağlılık tehdidi inanılır yapar.
EX: **Doğru cevap: evet, 50 alır.**
Bağlılıkla savaş tehdidi inanılır hale gelir; 1 girmez (0 > −10). 2'nin getirisi 50 > 20. Seçenekleri azaltmak ona kazandırıyor.
**Diğer şıklar neden yanlış?**
• gets −10: 1 girmeyeceği için savaş hiç olmaz.
• never has value: bu örnek tam tersini gösteriyor.
• irrational: 1 tamamen rasyonel olarak girmemeyi seçer.

## Q
SRC: Şekil 4.10 · Aşama oyunu
EN: In the stage game of Figure 4.10, (T, L) gives (5, 5). Is (T, L) a Nash equilibrium of the one-shot game?
TR: Tek seferlik oyunda (T, L) Nash dengesi mi?
+ No: player 1 can switch to M and get 6
- Yes: it gives both players the highest payoff
- Yes: it is the outcome of IEDS
- No: player 1 would switch to B
HINT: L sütununda 1. oyuncunun getirileri: T 5, M 6, B 0.
EX: **Doğru cevap: hayır, 1. oyuncu M'ye geçip 6 alır.**
(Simetrik olarak 2. oyuncu da C'ye geçip 6 alır.) Tek seferde dengeler (M, C) ve (B, R).
**Diğer şıklar neden yanlış?**
• highest payoff: Nash ölçütü toplam getiri değil, tek başına sapma.
• IEDS: T, M tarafından baskılanmıyor ama (T, L) yine de denge değil.
• switch to B: B, L sütununda 0 verir; sapma M'ye.

## Q
SRC: Slayt 4.21 · İki turluk oyun
EN: In the twice-repeated game of Figure 4.10, the equilibrium strategy prescribes (T, L) in the first stage, then (M, C) if both cooperated and (B, R) otherwise. What is the total payoff of a player who deviates in the first stage (best deviation)?
TR: Birinci turda sapan oyuncunun toplam getirisi kaçtır?
+ 7
- 9
- 10
- 6
HINT: Sapma kazancı + ikinci turdaki ceza dengesi.
EX: **Doğru cevap: 7.**
**Adım adım:** birinci turda en iyi sapma M (ya da C): 6. İkinci turda ceza: kötü denge (B, R) → 1. Toplam 7. Uyan oyuncu 5 + 4 = 9 alır; 9 > 7 olduğu için kimse sapmaz.
**Diğer şıklar neden yanlış?**
• 9: uymanın toplamı.
• 10: sapınca da iyi dengenin (4) oynanacağı sanılmış: 6 + 4.
• 6: yalnızca birinci tur; ikinci turdaki 1 unutulmuş.
`);
