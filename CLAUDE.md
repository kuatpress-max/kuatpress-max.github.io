# 專案設定：個人品牌網站

> 這份設定是「護欄＋內容」。網站的視覺美學（配色、字體配對、動效、排版細節）交給 frontend-design plugin 發揮，這裡只負責把它框在正確的內容、風格方向與技術限制內，不要在這份檔案裡把顏色字體鎖死。

## 溝通方式

- 一律使用繁體中文回覆，並用白話文解釋你做了什麼。
- 每次修改前先說明打算怎麼改，等我確認再執行。
- 一次只改一個區塊，不要整站重寫。

## 網站名稱與定位

- 網站名稱：Johan Ku 古又文
- 一句話定位：用 20 年設計實務與國際時裝週經驗，帶時尚愛好者看懂精品產業與服裝設計。

## 可用素材與真實資料（訪談階段已讀過，直接拿來用）

這些是從 `Profile.txt`、`FACE.jpg`、`Emotional Sculpture_2004.jpg` 實際讀出來的內容，**做網站時直接用，不要重問、也不要另外編一套**。詳細版在 `website-brief.md` 第 0 節。

- 姓名／職稱：Johan Ku 古又文｜時裝設計師 / 時尚產業分析師 / 內容創作者；英國時裝協會（BFC）會員
- 聯絡方式：
  - Email：info@johanku.co.uk
  - YouTube：https://www.youtube.com/@JohanKu-YT
  - Facebook：https://www.facebook.com/johankudesign
  - Instagram：https://instagram.com/johanku_ig
  - TikTok：https://www.tiktok.com/@johanku_tk
  - ShopMy 選品：https://shopmy.us/johanku
- 經歷與技能重點：20+ 年時裝設計與品牌營運實務；2009 年以「Emotional Sculpture」獲紐約 Gen Art 前衛時裝大獎（Vanguard Prize）；Johan Ku Gold Label 多次登上 BFC 倫敦時裝週與東京時裝週官方日程；YouTube 頻道全平台超過 15 萬訂閱；專長為立體針織雕塑、前衛材質、高級訂製，以及 LVMH／Kering／Hermès 等精品集團策略分析。
- 代表作品：Emotional Sculpture 雕塑針織系列／Johan Ku Gold Label 倫敦與東京時裝週發表（含 The Two Faces 夜光針織）／YouTube 深度時尚產業評論。
- 圖片（相對路徑 → 用在哪個區塊，全部要補 alt）：
  - `./FACE.jpg` → 開頭自我介紹、關於我（alt：「時裝設計師 Johan Ku 古又文」）
  - `./Emotional%20Sculpture_2004.jpg` → 作品案例代表作一（alt：「Emotional Sculpture 米白色粗針織雕塑外套」）。**檔名有空格，HTML 一定要寫成 `%20`。**
  - `./work-london-fashion-week.jpg` → 作品案例代表作二（alt：「Johan Ku Gold Label 倫敦時裝週黑色粗針織單肩造型」）
  - `./work-tokyo-fashion-week.jpg` → 作品案例代表作二（alt：「The Two Faces 夜光針織禮服於東京時裝週發表，左為常光、右為夜光」）
  - `./bio_cover.jpg` → 著作區書封（alt：「《不讓殘酷的神支配：古又文的創作與人生》書封，時報出版」）
  - `./book-autobiography.pdf`（17.7MB，iLovePDF 壓縮版）→ `book.html` 線上閱讀
  - `./timeline.txt.txt` → 歷年大事記（維基完整版，含出處；檔名確實有兩個 .txt）
  - `./不讓殘酷的神支配--內文.pdf`：（待補，本機讀不開、用途未確認，先不要用）
- 標「（待補）」的欄位：頁面上先留合理的佔位文字或直接不放該項，**不要自己編造經歷、數字或客戶名單**。

## 目標受眾

- 對象：關注時尚產業的觀眾與讀者為主（YouTube 觀眾）；品牌／媒體合作方、設計科系學生與同行為輔。
- 我能幫他們解決的問題：讓他們看懂精品產業正在發生什麼事（時裝週、創意總監更迭、集團財報與併購），也能從設計師角度看懂衣服與服裝設計（針織、材質、剪裁、工藝）。
- 因此網站文案要優先回答的問題：「這個人是誰、憑什麼講時尚產業、他的內容在哪裡看？」文案以一般觀眾看得懂為準，不要寫成產業內行話。

## 網站目標與行動

- 主要目標：介紹 Johan Ku 這個人，並把觀眾帶去訂閱 YouTube 頻道。
- 主要行動按鈕：「訂閱 YouTube 頻道」→ https://www.youtube.com/@JohanKu-YT
- 次要行動按鈕：「商業合作洽詢」→ `mailto:info@johanku.co.uk`

## 頁面結構（一頁式，依順序）

1. 開頭自我介紹（Hero）：網站名稱、核心標語、`./FACE.jpg`、兩顆行動按鈕
2. 關於我：Profile.txt 完整版簡介＋四個里程碑（20+ 年／2009 Gen Art 大獎／倫敦・東京時裝週／15 萬訂閱）
3. YouTube 影片：影片卡片區（連結可隨時替換，見下一節）
4. 作品案例：三個代表作；代表作一放 `./Emotional%20Sculpture_2004.jpg`，代表作二放 `./work-london-fashion-week.jpg` 與 `./work-tokyo-fashion-week.jpg`，代表作三（YouTube 評論）用文字＋連結
5. 歷年大事記：資料來源為 `timeline.txt.txt`（維基完整版，每條都有出處）。精選 13 條預設顯示，補充 5 條加 `is-extra` 先收起，按鈕 `#tlMore` 展開。**只用檔案裡有出處的內容，不要自行補年份或事件。**
6. 著作：`./bio_cover.jpg` 書封＋書籍資訊，兩顆按鈕連到 `./book.html`（線上閱讀）與 `./book-autobiography.pdf`。
7. 服務項目：產業趨勢與商業分析、服裝設計與特殊訂製、趨勢演講與專欄撰寫、品牌顧問與選品策劃
8. 聯絡方式：info@johanku.co.uk ＋ 全部社群連結

- 2024 當選民眾黨黨代表這條**使用者決定不放**，不要自己加回去。
- 出生地：維基資訊框寫新北市、內文寫台北市，兩者矛盾，**頁面上只寫年份不寫出生地**。
- **共 8 個區塊，每個區塊都要有實質內容**（標題＋幾句文案／幾個項目），不要只放一個標題就帶過。
- **不要做「客戶評價」「常見問題」「合作流程」三個區塊**——目前沒有真實內容，不做空殼區塊，也絕對不要編造。

## YouTube 影片連結要能隨時更新（使用者明確要求）

- YouTube 影片連結統一放在 `index.html` 裡用註解包起來的一段：
  `<!-- YOUTUBE-LINKS-START -->` … `<!-- YOUTUBE-LINKS-END -->`
- 這段裡每支影片一張卡片（標題＋連結），改影片只要動這一段，不要把連結散在各處。
- 使用者還沒指定影片時，先放頻道首頁 https://www.youtube.com/@JohanKu-YT，並在註解裡寫一行「換影片改這裡」。

## 文案規範

- 不要使用的字詞：誇大、業配感、空泛形容詞（頂尖、極致、超強、獨一無二、業界第一）。
- 主標題必須在一行內講出「我幫誰解決什麼」。
- 專有名詞照 Profile.txt 的寫法：Emotional Sculpture、Johan Ku Gold Label、Gen Art 前衛時裝大獎、BFC 倫敦時裝週。

## 視覺風格（給方向與細節線索，具體執行交給 frontend-design）

- 風格方向與心情關鍵字：簡約文青——乾淨、克制、有質感的時尚媒體感、雜誌編輯風
- 排版感覺：大量留白、雜誌感網格、細分隔線、左右不對稱
- 字體感覺：質感襯線標題＋乾淨無襯線內文
- 色彩方向：低彩度米白／灰階＋一個沉穩點綴色
- 插圖／圖像風格：少插圖，以大圖攝影與細緻線條為主
- 動畫與互動：克制優雅，scroll 輕柔淡入、文字慢慢浮現

## 技術限制（硬性護欄，一定要遵守）

- **純靜態多檔案網站**：`index.html` + `style.css` + `script.js`，圖片放在專案根目錄。可直接部署 GitHub Pages。
- **絕對不要使用 React／Vue／Next.js 等框架，不要 npm install、不要 build 步驟、不要打包工具。** 若 frontend-design 想搭框架，一律改回原生 HTML/CSS/JS。
- **CSS、JS、圖片一律用相對路徑 `./`**（例如 `./style.css`、`./FACE.jpg`）。
- 所有內容寫在單一頁面，用錨點連結切換段落。手機版需正常顯示。
- 唯一的例外是 `book.html`（自傳線上閱讀頁），它沿用同一份 `./style.css`，一樣是純靜態。除了它以外不要再新增頁面。
- **原始素材不上傳**：`Profile.txt`、`timeline.txt.txt`、`不讓殘酷的神支配--內文.pdf` 都在 `.gitignore` 裡，保留在本機、不要 commit。做網站時照樣讀它們。

## 部署到 GitHub Pages（做完就上線，並在瀏覽器打開）

線上網址：**https://kuatpress-max.github.io/**（repo：`kuatpress-max/kuatpress-max.github.io`，Pages 已啟用）。

遠端已建立，所以**每次改完就自動上線**：

> 這台電腦的 `gh` 沒有加進 PATH，指令要用完整路徑：`& "C:\Program Files\GitHub CLI\gh.exe"`（PowerShell）。git 身分已設在本 repo（Johan Ku / ku.at.press@gmail.com）。

- 改完網站檔案，**自動執行** `git add -A && git commit -m "更新網站" && git push`，不用問要不要 push。
- Pages 約 30–60 秒後更新，重整瀏覽器即可。

若還沒建立遠端（例如換一台電腦重來）：

1. 取得帳號名：`OWNER=$(gh api user --jq .login)`
2. **repo 名稱一定要用 `<帳號>.github.io`**（網址在網域根、沒有子目錄）
3. `git init` → `git add -A` → `git commit -m "初始個人品牌網站"` → `gh repo create "$OWNER.github.io" --public --source=. --remote=origin --push` → `gh api --method POST "repos/$OWNER/$OWNER.github.io/pages" -f "source[branch]=main" -f "source[path]=/"`
4. 網址為 `https://<帳號>.github.io/`，首次建置約 1 分鐘；一開始 404 就稍等後重整。
   - 每個帳號只能有一個主站 repo；已存在就 push 到既有 repo，不要重建。
   - **要打開的一定是線上網址，絕對不要在瀏覽器開本機的 `index.html`（`file://`）。**

## 不要起本機伺服器、不要自己做預覽檔

- 預覽一律用 GitHub Pages 網址，**不要起任何本機伺服器**，也不要做暫時合併版或臨時檔。
- **不要在瀏覽器打開本機 `index.html`（`file://`）預覽**，也不要用截圖驗證本機檔。

## 速度優先：一次生成就部署

- **一次把網站生成完就部署，不要做截圖打磨迴圈。**
- 上線展示後，要不要再美化等使用者提出，再針對他說的地方改（改完一樣自動 push）。

## 完工前品質檢查

- [ ] `index.html`／`style.css`／`script.js`、`FACE.jpg`、`Emotional Sculpture_2004.jpg`、`work-london-fashion-week.jpg`、`work-tokyo-fashion-week.jpg` 都在，沒有框架、沒有 node_modules、沒有 build 產物。
- [ ] CSS／JS／圖片全部用相對路徑 `./`；有空格的檔名寫成 `%20`。
- [ ] hero 主標題一行講清楚「我幫誰解決什麼」。
- [ ] 內容用的是 `website-brief.md` 的真實文字，沒有 lorem ipsum 或假資料。
- [ ] 沒有出現客戶評價／常見問題／合作流程這三個空殼區塊。
- [ ] YouTube 連結區有 `<!-- YOUTUBE-LINKS-START/END -->` 註解，方便隨時替換。
- [ ] 手機版不爆版，圖片都有 alt。

## 素材位置

- 主要依據：`website-brief.md`（第 0 節是素材清單與從 Profile.txt 抓出的真實資料）＋ 上面的「可用素材與真實資料」。**素材在訪談階段就已經讀完並整理進文件，不用再從頭研究一次。**
- 動工前快速掃一次資料夾，確認：文件列的檔案還在；有沒有訪談後才新增的素材（新作品圖）——有就讀進來補進文案，並同步更新 `website-brief.md` 第 0 節與第 7 節。
- 圖片一律用相對路徑並補上 alt。
- 找不到的資訊寧可標「（待補）」或詢問，不要編造經歷、數字或客戶案例。
