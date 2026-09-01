# 專案設定：個人品牌網站

> 這份設定是「護欄＋內容」。網站的視覺美學（配色、字體配對、動效、排版細節）交給 frontend-design plugin 發揮，這裡只負責把它框在正確的內容、風格方向與技術限制內，不要在這份檔案裡把顏色字體鎖死。

## 溝通方式

- 一律使用繁體中文回覆，並用白話文解釋你做了什麼。
- 每次修改前先說明打算怎麼改，等我確認再執行。
- 一次只改一個區塊，不要整站重寫。

## 網站名稱與定位

- 網站名稱：Johan Ku 古又文
- 一句話定位：結合 20 年國際時裝週與時裝設計實務經驗，深度解讀全球時尚產業、精品集團策略與設計工藝美學。

## 可用素材與真實資料（訪談階段已讀過，直接拿來用）

這些是從 `Profile.txt` 與 `FACE.jpg` 實際讀出來的內容，**做網站時直接用，不要重問、也不要另外編一套**。詳細版在 `website-brief.md` 第 0 節。

- 姓名／職稱：Johan Ku 古又文｜時裝設計師 / 時尚產業分析師 / 內容創作者；英國時裝協會（BFC）會員
- 聯絡方式：
  - Email：info@johanku.co.uk
  - YouTube：https://www.youtube.com/@JohanKu
  - Facebook：https://www.facebook.com/johankudesign
  - Instagram：https://instagram.com/johanku_ig
  - TikTok：https://www.tiktok.com/@johanku_tk
  - ShopMy 選品：https://shopmy.us/johanku
- 經歷與技能重點：20+ 年時裝設計與品牌營運實務；2009 年以「Emotional Sculpture」獲紐約 Gen Art 前衛時裝大獎（Vanguard Prize）；Johan Ku Gold Label 多次登上 BFC 倫敦時裝週與東京時裝週官方日程；YouTube 頻道全平台超過 15 萬訂閱；專長為立體針織雕塑、前衛材質、高級訂製，以及 LVMH／Kering／Hermès 等精品集團策略分析。
- 代表作品：Emotional Sculpture 雕塑針織系列／Johan Ku Gold Label 倫敦與東京時裝週發表（含 The Two Faces 夜光針織）／YouTube 深度時尚產業評論。
- 圖片（相對路徑 → 用在哪個區塊，全部要補 alt）：
  - `./FACE.jpg` → 開頭自我介紹、關於我（alt 寫「時裝設計師 Johan Ku 古又文」）
  - 作品圖：（待補，還沒有任何作品照片）
- 標「（待補）」的欄位：頁面上先留合理的佔位文字或直接不放該項，**不要自己編造經歷、數字或客戶名單**。

## 目標受眾

- 對象：關注時尚產業的觀眾與讀者（YouTube 觀眾、想搞懂精品產業與時裝週的人）。
- 我能幫他們解決的問題：讓他們一次看到 Johan Ku 所有的內容——影片、產業評論、設計作品、選品推薦全部集中在一頁，不用到處找。
- 因此網站文案要優先回答的問題：「這個人是誰、憑什麼講時尚產業、他的內容在哪裡看？」

## 網站目標與行動

- 主要目標：建立一個完整的官方據點，集中所有身分、作品與內容出口。
- 主要行動按鈕：「前往 YouTube 頻道」→ https://www.youtube.com/@JohanKu
- 次要行動按鈕：「商業合作洽詢」→ `mailto:info@johanku.co.uk`

## 頁面結構（一頁式，依順序）

1. 開頭自我介紹（Hero）：網站名稱、核心標語、`./FACE.jpg`、兩顆行動按鈕
2. 關於我：Profile.txt 完整版簡介＋四個里程碑（20+ 年／2009 Gen Art 大獎／倫敦・東京時裝週／15 萬訂閱）
3. 服務項目：產業趨勢與商業分析、服裝設計與特殊訂製、趨勢演講與專欄撰寫、品牌顧問與選品策劃
4. 作品案例：三個代表作＋YouTube 影片連結卡片
5. 客戶評價：（待補）先放結構與佔位說明，不要編造評價
6. 常見問題：（待補）先放結構，不要編造問答
7. 合作流程：（待補）先放結構，不要編造步驟
8. 聯絡方式：info@johanku.co.uk ＋ 全部社群連結

- **成品至少要有 6 個區塊**（這裡是 8 個），每個區塊都要有實質內容（標題＋幾句文案／幾個項目），不要只放一個標題就帶過。

## YouTube 影片連結要能隨時更新（使用者明確要求）

- 作品案例區的 YouTube 連結，統一放在 `index.html` 裡用註解包起來的一段：
  `<!-- YOUTUBE-LINKS-START -->` … `<!-- YOUTUBE-LINKS-END -->`
- 這段裡每支影片一張卡片（標題＋連結），改影片只要動這一段，不要把連結散在各處。
- 使用者還沒指定影片時，先放頻道首頁 https://www.youtube.com/@JohanKu，並在註解裡寫一行「換影片改這裡」。

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

## 部署到 GitHub Pages（做完就上線，並在瀏覽器打開）

**首次部署（部署到使用者主站，網址沒有子目錄）：**

1. 取得 GitHub 帳號名：`OWNER=$(gh api user --jq .login)`
2. **repo 名稱一定要用 `<帳號>.github.io`**，會服務在網域根、網址沒有子目錄。
3. 在專案資料夾依序執行（若已是 git repo 就跳過 init）：
   ```
   git init
   git add -A
   git commit -m "初始個人品牌網站"
   gh repo create "$OWNER.github.io" --public --source=. --remote=origin --push
   gh api --method POST "repos/$OWNER/$OWNER.github.io/pages" -f "source[branch]=main" -f "source[path]=/"
   ```
   （最後一行啟用 Pages；若回「已存在」的錯誤，忽略即可。）
4. 網址為 `https://<帳號>.github.io/`。首次建置約需 1 分鐘，用瀏覽器打開展示；若一開始 404，稍等後重整。
   - 每個帳號只能有一個主站 repo；若已存在就 push 到既有 repo，不要重建。
   - **要打開的一定是線上網址，絕對不要在瀏覽器開本機的 `index.html`（`file://`）。**

**之後每次修改都自動上線：**

- 改完網站檔案，**自動執行** `git add -A && git commit -m "更新網站" && git push`，不用問要不要 push。
- Pages 約 30–60 秒後更新，重整瀏覽器即可。

## 不要起本機伺服器、不要自己做預覽檔

- 預覽一律用 GitHub Pages 網址，**不要起任何本機伺服器**，也不要做暫時合併版或臨時檔。
- **不要在瀏覽器打開本機 `index.html`（`file://`）預覽**，也不要用截圖驗證本機檔。

## 速度優先：一次生成就部署

- **一次把網站生成完就部署，不要做截圖打磨迴圈。**
- 上線展示後，要不要再美化等使用者提出，再針對他說的地方改（改完一樣自動 push）。

## 完工前品質檢查

- [ ] `index.html`／`style.css`／`script.js` 與 `FACE.jpg` 都在，沒有框架、沒有 node_modules、沒有 build 產物。
- [ ] CSS／JS／圖片全部用相對路徑 `./`。
- [ ] hero 主標題一行講清楚「我幫誰解決什麼」。
- [ ] 內容用的是 `website-brief.md` 的真實文字，沒有 lorem ipsum 或假資料。
- [ ] 客戶評價／常見問題／合作流程三區沒有編造內容。
- [ ] YouTube 連結區有 `<!-- YOUTUBE-LINKS-START/END -->` 註解，方便隨時替換。
- [ ] 手機版不爆版，圖片都有 alt。

## 素材位置

- 主要依據：`website-brief.md`（第 0 節是素材清單與從 Profile.txt 抓出的真實資料）＋ 上面的「可用素材與真實資料」。**素材在訪談階段就已經讀完並整理進文件，不用再從頭研究一次。**
- 動工前快速掃一次資料夾，確認：文件列的檔案還在；有沒有訪談後才新增的素材（作品圖、評價、FAQ）——有就讀進來補進文案，並同步更新 `website-brief.md` 第 0 節與第 7 節。
- 圖片一律用相對路徑並補上 alt。
- 找不到的資訊寧可標「（待補）」或詢問，不要編造經歷、數字或客戶案例。
