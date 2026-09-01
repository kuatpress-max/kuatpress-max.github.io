| `./bio_cover.jpg` | 自傳書封（時報出版） | 著作區 |
| `./book-autobiography.pdf` | 自傳全文（17.7MB 壓縮版） | `book.html` 線上閱讀頁 |
| `./timeline.txt.txt` | 維基百科完整版條目（生平、教育、職涯、展覽、獲獎，每條都有出處） | 歷年大事記 |
# 個人品牌網站需求文件

> 由 ask-me skill 於訪談後自動產生。可自行修改，改完請重開 session。

## 0. 專案素材清單（訪談前已讀過）

| 檔案 | 是什麼 | 會用在哪裡 |
| --- | --- | --- |
| `./Profile.txt` | 個人品牌文字資料庫（簡介、里程碑、服務項目、代表作、社群連結） | 開頭標語、關於我、服務項目、作品案例、聯絡方式 |
| `./FACE.jpg` | 本人大頭照（白襯衫、淺色背景、正面半身） | 開頭自我介紹、關於我 |
| `./Emotional Sculpture_2004.jpg` | 作品照：米白色粗針織雕塑外套背影，白底攝影棚照 | 作品案例（代表作一 Emotional Sculpture） |
| `./work-london-fashion-week.jpg` | 秀場照：黑色粗針織單肩造型搭配黑色長褲，伸展台正面全身 | 作品案例（代表作二 倫敦時裝週） |
| `./work-tokyo-fashion-week.jpg` | 秀場照：白色針織禮服，左為常光、右為夜光狀態（The Two Faces） | 作品案例（代表作二 東京時裝週／夜光針織） |
| `./不讓殘酷的神支配--內文.pdf` | （待補：本機缺 PDF 讀取工具，檔案打不開，內容與用途未確認） | （待確認） |

> 注意：`Emotional Sculpture_2004.jpg` 檔名有空格，HTML 引用時要寫成 `./Emotional%20Sculpture_2004.jpg`。

## 0-1. 從素材取得的真實資料

- 姓名／英文名：Johan Ku 古又文
- 職稱／頭銜：時裝設計師 / 時尚產業分析師 / 內容創作者；設計師品牌創辦人；英國時裝協會（BFC）會員
- 聯絡方式：
  - 合作聯絡信箱：info@johanku.co.uk
  - YouTube：https://www.youtube.com/@JohanKu-YT
  - Facebook：https://www.facebook.com/johankudesign
  - Instagram：https://instagram.com/johanku_ig
  - TikTok：https://www.tiktok.com/@johanku_tk
  - ShopMy 選品：https://shopmy.us/johanku
- 經歷重點：
  - 20+ 年專業時裝設計、高級訂製與國際品牌營運實務經驗
  - 2009 年以「Emotional Sculpture」針織雕塑系列榮獲美國紐約 Gen Art 國際服裝大賽「前衛時裝大獎（Vanguard Prize）」
  - 創立同名品牌 Johan Ku Gold Label，多次登上英國時裝協會（BFC）倫敦時裝週及東京時裝週官方日程
  - YouTube 頻道「Johan Ku 古又文」全平台超過 15 萬人訂閱
- 專長技能：立體針織雕塑與前衛材質語彙、高級訂製服裝設計、品牌經營與國際參展、全球精品集團（LVMH／Kering／Hermès）營運策略分析
- 代表作品或案例：
  1. Emotional Sculpture 雕塑針織系列（Gen Art 前衛時裝大獎獲獎作）——以獨創粗針織雕塑手法打破服裝與雕塑界線。**已有作品圖**：`./Emotional Sculpture_2004.jpg`
  2. Johan Ku Gold Label 倫敦與東京時裝週發表——包含 The Two Faces 等夜光針織與前衛材質系列。**已有秀場照**：`./work-london-fashion-week.jpg`、`./work-tokyo-fashion-week.jpg`
  3. YouTube 深度時尚產業評論——從設計與商業雙重視角解析精品財報、秀場美學與產業結構變遷
- 可用圖片（相對路徑＋用途）：
  - `./FACE.jpg` → 開頭自我介紹、關於我
  - `./Emotional Sculpture_2004.jpg` → 作品案例（代表作一）
  - `./work-london-fashion-week.jpg` → 作品案例（代表作二，倫敦時裝週）
  - `./work-tokyo-fashion-week.jpg` → 作品案例（代表作二，東京時裝週 The Two Faces 夜光針織）

## 1. 網站名稱（Q1）

**Johan Ku 古又文**

## 2. 網站主要目標（Q2）

- 最重要的一件事：介紹 Johan Ku 這個人是誰，並把觀眾帶去訂閱 YouTube 頻道。
- 由此推出的訪客行動：
  - 主要行動：訂閱 YouTube 頻道「Johan Ku 古又文」（https://www.youtube.com/@JohanKu-YT）
  - 次要行動：商業合作洽詢，寄信到 info@johanku.co.uk
  - 其他出口：Facebook、Instagram、TikTok、ShopMy 選品

## 3. 目標受眾（Q3）

以**關注時尚產業的觀眾與讀者**為主（YouTube 觀眾、想搞懂精品產業與時裝週的人）；品牌／媒體合作方、設計科系學生與同行也會看，但文案以一般觀眾看得懂為優先，合作洽詢在頁面下方留一個清楚入口。

## 4. 我能幫使用者解決的問題（Q4）

- 讓讀者**看懂精品產業正在發生什麼事**：時裝週動態、創意總監更迭、精品集團財報與併購策略，講成一般人聽得懂的話。
- 讓讀者**從設計師的角度看懂衣服與服裝設計**：從針織、材質、剪裁與工藝的實務視角，解釋一件衣服好在哪裡、難在哪裡。

## 5. 頁面區塊（Q5：內容導向，一頁式，依順序）

1. **開頭自我介紹（Hero）**——網站名稱、核心標語、`./FACE.jpg`、主要按鈕「訂閱 YouTube 頻道」＋次要按鈕「商業合作洽詢」
2. **關於我**——Profile.txt 完整版簡介，搭配四個里程碑（20+ 年／2009 Gen Art 大獎／倫敦・東京時裝週／15 萬訂閱）
3. **YouTube 影片**——影片卡片區，連結需可隨時替換（見第 7 節）
4. **作品案例**——三個代表作；代表作一用 `./Emotional Sculpture_2004.jpg`，代表作二用 `./work-london-fashion-week.jpg` 與 `./work-tokyo-fashion-week.jpg`，代表作三（YouTube 評論）以文字＋連結呈現
5. **歷年大事記**——依 `timeline.txt.txt` 製作，精選 13 條（1979 出生／2004 情緒雕塑與新人獎／2005 東華盃金獎／2009 Gen Art 大獎／2010 北美館個展與自傳出版／2011 東京夜光系列／2012 有機體／2013 金澤三年展／2014 WWD US 封面與 Knitwear 大展／2019 倫敦彩虹三角／2020 品牌十週年／2021 台灣時裝史策展／2022 時裝影片），另有 5 條補充條目點「看完整年表」才展開。2024 民眾黨黨代表一條經使用者決定不收錄。
6. **著作**——《不讓殘酷的神支配：古又文的創作與人生》（時報出版，2010），書封＋簡介＋「線上閱讀全文」按鈕連到 `book.html`
7. **服務項目**——四大核心業務（產業分析、服裝設計與訂製、演講與專欄、品牌顧問與選品）
8. **聯絡方式**——info@johanku.co.uk ＋ 全部社群連結

> 本次不放「客戶評價」「常見問題」「合作流程」三區，因為目前沒有真實內容，不做空殼區塊。

## 6. 視覺風格（Q6：簡約文青）

- 風格方向：簡約文青——乾淨、克制、有質感的時尚媒體感、雜誌編輯風
- 排版感覺：大量留白、雜誌感網格、細分隔線、左右不對稱
- 字體感覺：質感襯線標題＋乾淨無襯線內文
- 色彩方向：低彩度米白／灰階＋一個沉穩點綴色
- 插圖／圖像風格：少插圖，以大圖攝影與細緻線條為主
- 動畫與互動：克制優雅，scroll 輕柔淡入、文字慢慢浮現

## 7. 待補事項

- **`不讓殘酷的神支配--內文.pdf`**——本機缺 PDF 讀取工具，檔案打不開，內容與用途未確認。若要放進網站，請直接告訴我它是什麼（例如著作內文），或提供純文字版；在確認之前不會用到頁面上。
- **YouTube 影片連結**——影片連結統一寫在 `index.html`，用 `<!-- YOUTUBE-LINKS-START -->` 與 `<!-- YOUTUBE-LINKS-END -->` 註解包起來，改網址只要動這一段。尚未指定影片前先放頻道首頁連結。
- **客戶評價／常見問題／合作流程**——本次不做。之後若要加，請提供真實內容（誰說的、什麼身分、說了什麼／實際問答／實際步驟）。

## 8. 上線資訊

- 線上網址：https://kuatpress-max.github.io/
- GitHub repo：`kuatpress-max/kuatpress-max.github.io`（public，GitHub Pages 由 main 分支根目錄服務）
- 每次修改網站檔案後 `git push`，約 30–60 秒後線上更新。
