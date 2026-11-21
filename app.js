/* ============================================================
   KitobXon — Application Logic
   ============================================================ */

// ===== STATE =====
let currentPage = 'home';
let currentBookId = null;
let currentChapter = 0;
let favorites = JSON.parse(localStorage.getItem('kitobxon_favorites') || '[]');
let readingProgress = JSON.parse(localStorage.getItem('kitobxon_progress') || '{}');
let readingHistory = JSON.parse(localStorage.getItem('kitobxon_history') || '[]');
let bookmarks = JSON.parse(localStorage.getItem('kitobxon_bookmarks') || '{}');
let readerSettings = JSON.parse(localStorage.getItem('kitobxon_reader_settings') || '{}');
let theme = localStorage.getItem('kitobxon_theme') || 'light';

// Bilim Bog'i (Sehrli Gul) State
let gardenState = JSON.parse(localStorage.getItem('kitobxon_garden') || 'null') || {
    level: 1, // 1: Urug', 2: Nihol, 3: Kurtak, 4: G'uncha, 5: To'liq Gul
    xp: 0,
    xpNeeded: 40,
    water: 100, // 0 - 100%
    streak: 1,
    lastReadDate: new Date().toISOString().split('T')[0],
    lastCheckDate: new Date().toISOString().split('T')[0],
    totalBlooms: 0,
    todayPages: 0,
    flowerType: 'sakura' // sakura, rose, tulip, sunflower
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(theme);
    createParticles();
    renderTrendingBooks();
    renderCategories();
    renderNewBooks();
    renderCatalog();
    renderFilterTabs();
    renderWeeklyChart();
    updateStats();
    initGarden();

    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        animateHeroStats();
    }, 1200);

    // Navbar scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close search results on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            document.getElementById('searchResults').classList.remove('active');
        }
        if (!e.target.closest('.reader-settings') && !e.target.closest('.reader-btn')) {
            document.getElementById('readerSettings').classList.remove('active');
        }
    });

    // Keyboard shortcuts & Page turning
    document.addEventListener('keydown', (e) => {
        if (currentPage === 'reader') {
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A' || e.key === 'Backspace') {
                prevPage();
            } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' || e.key === ' ') {
                e.preventDefault();
                nextPage();
            } else if (e.key === 'Escape') {
                closeReader();
            }
        }
        if (e.key === 'Escape' && document.getElementById('bookModal').classList.contains('active')) {
            closeBookModal();
        }
    });

    // Touch / Swipe orqali varaqlash
    initSwipeGesture();
});

// ===== THEME =====
function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem('kitobxon_theme', theme);
}

function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
}

// ===== NAVIGATION =====
function showPage(page) {
    currentPage = page;

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) targetPage.classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    // Show/hide navbar and footer based on page
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('mainFooter');
    if (page === 'reader') {
        navbar.style.display = 'none';
        footer.style.display = 'none';
    } else {
        navbar.style.display = '';
        footer.style.display = '';
    }

    // Refresh page-specific content
    if (page === 'favorites') renderFavorites();
    if (page === 'stats') { updateStats(); renderWeeklyChart(); renderReadingHistory(); }
    if (page === 'catalog') renderCatalog();
    if (page === 'garden') renderGarden();

    // Close mobile menu
    document.getElementById('navLinks').classList.remove('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = Math.random() * 10 + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
    }
}

// ===== HERO STATS ANIMATION =====
function animateHeroStats() {
    document.querySelectorAll('.hero-stat-num').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            if (target >= 1000) {
                el.textContent = (current / 1000).toFixed(current >= target ? 0 : 1) + 'K+';
            } else {
                el.textContent = Math.floor(current) + '+';
            }
        }, 25);
    });
}

// ===== BOOK CARD RENDERING =====
function createBookCard(book) {
    const isFav = favorites.includes(book.id);
    const progress = readingProgress[book.id] || 0;
    const progressPercent = book.content ? Math.round((progress / book.content.length) * 100) : 0;

    return `
        <div class="book-card" onclick="openBookDirectly(${book.id})" title="Kitobni o'qish uchun bosing">
            <div class="book-cover" style="background: ${book.cover}">
                <div class="book-badges">
                    ${book.isNew ? '<span class="book-badge badge-new">Yangi</span>' : ''}
                    ${book.isTrending ? '<span class="book-badge badge-trending">🔥 Trend</span>' : ''}
                </div>
                <button class="book-favorite-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${book.id})" title="Sevimlilarga qo'shish">
                    ${isFav ? '❤️' : '♡'}
                </button>
                <button class="book-info-btn" onclick="event.stopPropagation(); openBookModal(${book.id})" title="Kitob tafsilotlari">
                    ℹ️
                </button>
                ${book.coverEmoji}
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-meta">
                    <span class="book-rating">⭐ ${book.rating}</span>
                    <span class="book-reads">${formatNumber(book.reads)} o'qish</span>
                </div>
                ${progress > 0 ? `<div class="book-progress"><div class="book-progress-fill" style="width: ${progressPercent}%"></div></div>` : ''}
            </div>
        </div>
    `;
}

// Kitob kartasi bosilganda to'g'ridan-to'g'ri o'qish rejimini ochish
function openBookDirectly(bookId) {
    currentBookId = bookId;
    startReading();
}

// ===== RENDER SECTIONS =====
function renderTrendingBooks() {
    const container = document.getElementById('trendingBooks');
    const trending = BOOKS.filter(b => b.isTrending).sort((a, b) => b.reads - a.reads);
    container.innerHTML = trending.map(createBookCard).join('');
}

function renderNewBooks() {
    const container = document.getElementById('newBooks');
    const newBooks = BOOKS.filter(b => b.isNew);
    const otherBooks = BOOKS.filter(b => !b.isNew).slice(0, 4);
    const allBooks = [...newBooks, ...otherBooks].slice(0, 8);
    container.innerHTML = allBooks.map(createBookCard).join('');
}

function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    const cats = CATEGORIES.filter(c => c.id !== 'all');
    container.innerHTML = cats.map(cat => {
        const count = BOOKS.filter(b => b.genre === cat.id).length;
        return `
            <div class="category-card" onclick="filterByCategory('${cat.id}')">
                <div class="category-icon" style="background: ${cat.color}15; color: ${cat.color}">
                    ${cat.icon}
                </div>
                <div class="category-info">
                    <h3>${cat.name}</h3>
                    <p>${count} kitob</p>
                </div>
            </div>
        `;
    }).join('');
}

// ===== CATALOG =====
let currentFilter = 'all';

function renderFilterTabs() {
    const container = document.getElementById('filterTabs');
    container.innerHTML = CATEGORIES.map(cat => `
        <button class="filter-tab ${cat.id === currentFilter ? 'active' : ''}" onclick="setFilter('${cat.id}')">
            ${cat.icon} ${cat.name}
        </button>
    `).join('');
}

function setFilter(filter) {
    currentFilter = filter;
    renderFilterTabs();
    renderCatalog();
}

function filterByCategory(catId) {
    showPage('catalog');
    currentFilter = catId;
    renderFilterTabs();
    renderCatalog();
}

function renderCatalog() {
    const container = document.getElementById('catalogGrid');
    let books = currentFilter === 'all' ? [...BOOKS] : BOOKS.filter(b => b.genre === currentFilter);

    // Sort
    const sort = document.getElementById('sortSelect')?.value || 'popular';
    switch (sort) {
        case 'popular': books.sort((a, b) => b.reads - a.reads); break;
        case 'newest': books.sort((a, b) => b.year - a.year); break;
        case 'rating': books.sort((a, b) => b.rating - a.rating); break;
        case 'title': books.sort((a, b) => a.title.localeCompare(b.title)); break;
    }

    if (books.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📭</div>
                <h3>Kitoblar topilmadi</h3>
                <p>Bu janrda hali kitoblar yo'q</p>
            </div>
        `;
        return;
    }

    container.innerHTML = books.map(createBookCard).join('');
}

function applyCatalogFilters() {
    renderCatalog();
}

// ===== FAVORITES =====
function toggleFavorite(bookId) {
    const idx = favorites.indexOf(bookId);
    if (idx > -1) {
        favorites.splice(idx, 1);
        showToast('💔', 'Sevimlilardan olib tashlandi');
    } else {
        favorites.push(bookId);
        showToast('❤️', 'Sevimlilarga qo\'shildi');
    }
    localStorage.setItem('kitobxon_favorites', JSON.stringify(favorites));
    // Re-render all relevant views
    renderTrendingBooks();
    renderNewBooks();
    renderCatalog();
    if (currentPage === 'favorites') renderFavorites();
}

function renderFavorites() {
    const container = document.getElementById('favoritesGrid');
    const favBooks = BOOKS.filter(b => favorites.includes(b.id));

    if (favBooks.length === 0) {
        container.innerHTML = `
            <div class="empty-state" id="emptyFavorites">
                <div class="empty-icon">💔</div>
                <h3>Hali sevimli kitoblar yo'q</h3>
                <p>Kitobga ♡ bosib sevimlilar ro'yxatiga qo'shing</p>
                <button class="btn btn-primary" onclick="showPage('catalog')">Katalogga o'tish</button>
            </div>
        `;
        return;
    }

    container.innerHTML = favBooks.map(createBookCard).join('');
}

// ===== BOOK MODAL =====
function openBookModal(bookId) {
    const book = BOOKS.find(b => b.id === bookId);
    if (!book) return;

    currentBookId = bookId;

    const genre = CATEGORIES.find(c => c.id === book.genre);
    const isFav = favorites.includes(bookId);
    const progress = readingProgress[bookId] || 0;

    document.getElementById('modalCover').style.background = book.cover;
    document.getElementById('modalCover').textContent = book.coverEmoji;
    document.getElementById('modalGenre').textContent = genre ? `${genre.icon} ${genre.name}` : '';
    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = book.author;
    document.getElementById('modalRating').innerHTML = `⭐ ${book.rating} <span style="color: var(--text-tertiary); font-weight: 400;">(${formatNumber(book.reads)} o'qish)</span>`;
    document.getElementById('modalDesc').textContent = book.description;
    document.getElementById('modalPages').textContent = `📄 ${book.pages} sahifa`;
    document.getElementById('modalYear').textContent = `📅 ${book.year}-yil`;
    document.getElementById('modalLang').textContent = `🌐 ${book.language}`;

    const readBtn = document.getElementById('modalReadBtn');
    if (progress > 0) {
        readBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> Davom ettirish (${Math.round((progress / book.content.length) * 100)}%)`;
    } else {
        readBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> O'qishni boshlash`;
    }

    const favBtn = document.getElementById('modalFavBtn');
    favBtn.innerHTML = isFav ? '❤️ Sevimlilardan olish' : '♡ Sevimlilarga';

    document.getElementById('bookModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookModal() {
    document.getElementById('bookModal').classList.remove('active');
    document.body.style.overflow = '';
}

function toggleFavoriteFromModal() {
    if (currentBookId) {
        toggleFavorite(currentBookId);
        const isFav = favorites.includes(currentBookId);
        const favBtn = document.getElementById('modalFavBtn');
        favBtn.innerHTML = isFav ? '❤️ Sevimlilardan olish' : '♡ Sevimlilarga';
    }
}

// ===== SOUND & GESTURE STATE =====
let pageSoundEnabled = true;
let isAnimatingPage = false;

function togglePageSound() {
    pageSoundEnabled = !pageSoundEnabled;
    const btn = document.getElementById('soundToggleBtn');
    if (btn) btn.textContent = pageSoundEnabled ? '🔊' : '🔇';
    showToast(pageSoundEnabled ? '🔊' : '🔇', pageSoundEnabled ? 'Varaqlash ovozi yoqildi' : 'Varaqlash ovozi o\'chirildi');
}

// Qog'oz varaqlanishi ovozi (Web Audio API)
function playPageTurnSound() {
    if (!pageSoundEnabled) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const bufferSize = audioCtx.sampleRate * 0.12; // 120ms
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            // Yumshoq shivir / qog'oz shitirlashi
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }

        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1400;
        filter.Q.value = 1.2;

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        noise.start();
    } catch (e) {
        // Audio konteksti cheklangan bo'lsa xatoliksiz o'tadi
    }
}

// ===== READER =====
function startReading() {
    closeBookModal();
    const book = BOOKS.find(b => b.id === currentBookId);
    if (!book || !book.content) return;

    // Load saved progress
    currentChapter = readingProgress[currentBookId] || 0;
    if (currentChapter >= book.content.length) currentChapter = 0;

    // Update reader UI
    const titleEl = document.getElementById('readerBookTitle');
    const authorEl = document.getElementById('readerBookAuthor');
    if (titleEl) titleEl.textContent = book.title;
    if (authorEl) authorEl.textContent = book.author;

    // Apply saved reader settings
    const settings = readerSettings;
    const contentEl = document.getElementById('readerContent');
    if (settings.fontSize && contentEl) {
        contentEl.style.fontSize = settings.fontSize + 'px';
        const fsDisplay = document.getElementById('fontSizeDisplay');
        if (fsDisplay) fsDisplay.textContent = settings.fontSize + 'px';
    }
    if (settings.fontFamily && contentEl) {
        contentEl.style.fontFamily = settings.fontFamily;
        const ffSelect = document.getElementById('fontFamilySelect');
        if (ffSelect) ffSelect.value = settings.fontFamily;
    }
    if (settings.lineHeight && contentEl) {
        contentEl.style.lineHeight = settings.lineHeight;
        const lhRange = document.getElementById('lineHeightRange');
        if (lhRange) lhRange.value = settings.lineHeight;
    }
    if (settings.readingMode) {
        setReadingMode(settings.readingMode, false);
    }

    // Add to reading history
    addToHistory(book);

    showPage('reader');
    renderChapter(null);
}

function renderChapter(direction = null) {
    const book = BOOKS.find(b => b.id === currentBookId);
    if (!book) return;

    const bookSheet = document.getElementById('bookSheet');
    const container = document.getElementById('readerContent');

    // Varaqlash animatsiyasini qo'llash
    if (direction && bookSheet && !isAnimatingPage) {
        isAnimatingPage = true;
        bookSheet.classList.remove('flip-forward', 'flip-backward');
        void bookSheet.offsetWidth; // Reflow
        bookSheet.classList.add(direction === 'next' ? 'flip-forward' : 'flip-backward');

        playPageTurnSound();

        setTimeout(() => {
            if (bookSheet) bookSheet.classList.remove('flip-forward', 'flip-backward');
            isAnimatingPage = false;
        }, 450);
    }

    const content = book.content[currentChapter];

    // Format content into paragraphs
    const paragraphs = content.split('\n').filter(p => p.trim());
    if (container) {
        container.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    // Progress hisoblash
    const total = book.content.length;
    const current = currentChapter + 1;
    const percent = Math.round((current / total) * 100);

    // Toolbar va Sheet ma'lumotlarini yangilash
    const progressText = document.getElementById('readerProgressText');
    const progressFill = document.getElementById('readerProgressFill');
    const headerTitle = document.getElementById('sheetHeaderTitle');
    const headerChapter = document.getElementById('sheetHeaderChapter');
    const footerPage = document.getElementById('sheetFooterPage');
    const footerProgress = document.getElementById('sheetFooterProgress');

    if (progressText) progressText.textContent = `${current} / ${total}-sahifa (${percent}%)`;
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (headerTitle) headerTitle.textContent = book.title;
    if (headerChapter) headerChapter.textContent = `${current}-bob / qism`;
    if (footerPage) footerPage.textContent = `— ${current}-sahifa —`;
    if (footerProgress) footerProgress.textContent = `${percent}%`;

    // Pastki va Yon suzuvchi varaqlash tugmalarini boshqarish
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const floatPrev = document.getElementById('floatPrevBtn');
    const floatNext = document.getElementById('floatNextBtn');

    const isFirstPage = currentChapter === 0;
    const isLastPage = currentChapter >= total - 1;

    if (prevBtn) prevBtn.disabled = isFirstPage;
    if (nextBtn) nextBtn.disabled = isLastPage;
    if (floatPrev) floatPrev.disabled = isFirstPage;
    if (floatNext) floatNext.disabled = isLastPage;

    // Update bookmark button
    updateBookmarkButton();

    // Save progress
    readingProgress[currentBookId] = currentChapter;
    localStorage.setItem('kitobxon_progress', JSON.stringify(readingProgress));

    // Bilim bog'idagi gulni sug'orish va o'stirish
    recordReadingForGarden(1);

    // Sahifa yuqorisiga silliq ko'tarilish
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextPage() {
    if (isAnimatingPage) return;
    const book = BOOKS.find(b => b.id === currentBookId);
    if (!book || currentChapter >= book.content.length - 1) {
        showToast('📖', 'Siz kitobning oxirgi sahifasidasiz');
        return;
    }
    currentChapter++;
    renderChapter('next');
}

function prevPage() {
    if (isAnimatingPage) return;
    if (currentChapter <= 0) {
        showToast('📖', 'Siz kitobning birinchi sahifasidasiz');
        return;
    }
    currentChapter--;
    renderChapter('prev');
}

function closeReader() {
    showPage('home');
}

// ===== SWIPE & GESTURES =====
function initSwipeGesture() {
    let startX = 0;
    let startY = 0;

    document.addEventListener('touchstart', (e) => {
        if (currentPage !== 'reader') return;
        startX = e.changedTouches[0].screenX;
        startY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        if (currentPage !== 'reader') return;
        const endX = e.changedTouches[0].screenX;
        const endY = e.changedTouches[0].screenY;
        const diffX = endX - startX;
        const diffY = endY - startY;

        // Gorizontal surishni tekshirish
        if (Math.abs(diffX) > 60 && Math.abs(diffY) < 100) {
            if (diffX < 0) {
                // Chapga surish -> Keyingi bet
                nextPage();
            } else {
                // O'ngga surish -> Oldingi bet
                prevPage();
            }
        }
    }, { passive: true });
}

// ===== READER SETTINGS =====
function toggleReaderSettings() {
    document.getElementById('readerSettings').classList.toggle('active');
}

function changeFontSize(delta) {
    const content = document.getElementById('readerContent');
    if (!content) return;
    const current = parseInt(getComputedStyle(content).fontSize) || 18;
    const newSize = Math.max(12, Math.min(32, current + delta));
    content.style.fontSize = newSize + 'px';
    const fsDisplay = document.getElementById('fontSizeDisplay');
    if (fsDisplay) fsDisplay.textContent = newSize + 'px';
    readerSettings.fontSize = newSize;
    saveReaderSettings();
}

function changeFontFamily(family) {
    const content = document.getElementById('readerContent');
    if (content) content.style.fontFamily = family;
    readerSettings.fontFamily = family;
    saveReaderSettings();
}

function changeLineHeight(value) {
    const content = document.getElementById('readerContent');
    if (content) content.style.lineHeight = value;
    readerSettings.lineHeight = value;
    saveReaderSettings();
}

function setReadingMode(mode, save = true) {
    const sheet = document.getElementById('bookSheet');
    if (sheet) {
        sheet.classList.remove('sepia', 'dark', 'light');
        sheet.classList.add(mode);
    }

    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.mode-${mode}`);
    if (activeBtn) activeBtn.classList.add('active');

    if (save) {
        readerSettings.readingMode = mode;
        saveReaderSettings();
    }
}

function saveReaderSettings() {
    localStorage.setItem('kitobxon_reader_settings', JSON.stringify(readerSettings));
}

// ===== BOOKMARKS =====
function toggleBookmark() {
    const key = `${currentBookId}_${currentChapter}`;
    if (bookmarks[key]) {
        delete bookmarks[key];
        showToast('🔖', 'Xatcho\'p olib tashlandi');
    } else {
        bookmarks[key] = { bookId: currentBookId, chapter: currentChapter, date: new Date().toISOString() };
        showToast('🔖', 'Xatcho\'p qo\'yildi!');
    }
    localStorage.setItem('kitobxon_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkButton();
}

function updateBookmarkButton() {
    const key = `${currentBookId}_${currentChapter}`;
    const btn = document.getElementById('bookmarkBtn');
    if (bookmarks[key]) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}

// ===== SEARCH =====
function handleSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    if (query.length < 2) {
        resultsContainer.classList.remove('active');
        return;
    }

    const q = query.toLowerCase();
    const results = BOOKS.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = `<div class="search-result-item"><p style="color: var(--text-tertiary); font-size: 14px;">Hech narsa topilmadi</p></div>`;
    } else {
        resultsContainer.innerHTML = results.map(book => `
            <div class="search-result-item" onclick="openBookDirectly(${book.id}); document.getElementById('searchResults').classList.remove('active'); document.getElementById('searchInput').value = '';" title="Kitobni ochish">
                <div class="search-result-emoji">${book.coverEmoji}</div>
                <div class="search-result-info">
                    <h4>${book.title}</h4>
                    <p>${book.author} • ⭐ ${book.rating}</p>
                </div>
            </div>
        `).join('');
    }

    resultsContainer.classList.add('active');
}

// ===== STATS =====
function updateStats() {
    const booksRead = Object.keys(readingProgress).filter(id => {
        const book = BOOKS.find(b => b.id == id);
        return book && readingProgress[id] >= book.content.length - 1;
    }).length;

    const pagesRead = Object.keys(readingProgress).reduce((sum, id) => {
        return sum + (readingProgress[id] || 0) + 1;
    }, 0);

    const timeSpent = Math.round(pagesRead * 3.5 / 60); // ~3.5 min per page
    const streak = calculateStreak();

    document.getElementById('statBooksRead').textContent = booksRead;
    document.getElementById('statPagesRead').textContent = pagesRead;
    document.getElementById('statTimeSpent').textContent = timeSpent + ' soat';
    document.getElementById('statStreak').textContent = streak + ' kun';
}

function calculateStreak() {
    if (readingHistory.length === 0) return 0;
    let streak = 1;
    const today = new Date().toDateString();
    const lastRead = new Date(readingHistory[0]?.date).toDateString();
    if (today === lastRead) streak = 1;
    return streak;
}

function renderWeeklyChart() {
    const days = ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Sha', 'Yak'];
    const data = [30, 60, 45, 80, 20, 70, 50]; // Sample data
    const max = Math.max(...data);

    const container = document.getElementById('weeklyChart');
    container.innerHTML = days.map((day, i) => `
        <div class="chart-bar-group">
            <div class="chart-bar" style="height: ${(data[i] / max) * 100}%"></div>
            <span class="chart-bar-label">${day}</span>
        </div>
    `).join('');
}

function addToHistory(book) {
    const entry = {
        bookId: book.id,
        title: book.title,
        author: book.author,
        emoji: book.coverEmoji,
        date: new Date().toISOString()
    };

    // Remove duplicate
    readingHistory = readingHistory.filter(h => h.bookId !== book.id);
    readingHistory.unshift(entry);
    readingHistory = readingHistory.slice(0, 20);
    localStorage.setItem('kitobxon_history', JSON.stringify(readingHistory));
}

function renderReadingHistory() {
    const container = document.getElementById('historyList');
    if (readingHistory.length === 0) {
        container.innerHTML = `<div class="empty-state small"><p>Hali hech narsa o'qilmagan</p></div>`;
        return;
    }

    container.innerHTML = readingHistory.slice(0, 5).map(entry => {
        const book = BOOKS.find(b => b.id === entry.bookId);
        const progress = readingProgress[entry.bookId] || 0;
        const total = book ? book.content.length : 1;
        const percent = Math.round(((progress + 1) / total) * 100);

        return `
            <div class="history-item" onclick="openBookDirectly(${entry.bookId})" title="Mutolaani davom ettirish">
                <span class="history-emoji">${entry.emoji}</span>
                <div class="history-info">
                    <h4>${entry.title}</h4>
                    <p>${entry.author}</p>
                </div>
                <div class="history-progress">
                    <span>${Math.min(percent, 100)}%</span>
                </div>
            </div>
        `;
    }).join('');
}

// ===== TOAST =====
function showToast(icon, message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== UTILS =====
function formatNumber(num) {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

/* ============================================================
   BILIM BOG'I & SEHRLI GUL TIZIMI (GARDEN & FLOWER LOGIC)
   ============================================================ */

function initGarden() {
    checkDailyGardenDecay();
    saveGardenState();
}

function checkDailyGardenDecay(isManualSimulation = false) {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    if (!gardenState.lastCheckDate) {
        gardenState.lastCheckDate = todayStr;
    }
    
    if (gardenState.lastCheckDate !== todayStr || isManualSimulation) {
        // Kunlar farqini hisoblash
        const lastCheck = new Date(gardenState.lastCheckDate);
        const diffTime = Math.abs(today - lastCheck);
        const diffDays = isManualSimulation ? 1 : Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays >= 1) {
            // Har bir kirmagan kun uchun suv 40% kamayadi
            const waterLoss = diffDays * 40;
            gardenState.water = Math.max(0, gardenState.water - waterLoss);
            
            // Agar 2 kundan ortiq kirmasa - streak 0 bo'ladi
            if (diffDays >= 2) {
                gardenState.streak = 0;
            }
            
            // Bugungi o'qilgan sahifalar nollanadi
            gardenState.todayPages = 0;
            
            if (gardenState.water <= 0) {
                showToast('🥀', 'Diqqat! Siz bir necha kun kirmadingiz, gulingiz butunlay so\'lib qoldi!');
            } else if (gardenState.water < 50) {
                showToast('💧', 'Gulingiz chanqab so\'limoqda! Uni qutqarish uchun kitob o\'qing.');
            }
        }
        
        gardenState.lastCheckDate = todayStr;
        saveGardenState();
    }
}

function saveGardenState() {
    localStorage.setItem('kitobxon_garden', JSON.stringify(gardenState));
}

function renderGarden() {
    // Holat ko'rsatkichlari
    const water = gardenState.water;
    const level = gardenState.level;
    const xp = gardenState.xp;
    const xpNeeded = gardenState.xpNeeded || (level * 40);
    const xpPercent = Math.min(100, Math.round((xp / xpNeeded) * 100));

    // Elementlarni olish
    const waterBar = document.getElementById('waterBarFill');
    const waterText = document.getElementById('waterPercentText');
    const waterHint = document.getElementById('waterHint');
    const statusBadge = document.getElementById('flowerStatusBadge');
    
    const xpBar = document.getElementById('xpBarFill');
    const levelText = document.getElementById('flowerLevelText');
    const xpHint = document.getElementById('xpHint');

    const streakEl = document.getElementById('gardenStreak');
    const todayPagesEl = document.getElementById('todayPagesCount');
    const totalBloomsEl = document.getElementById('totalBlooms');
    const speechEl = document.getElementById('flowerSpeechBubble');

    if (waterBar) waterBar.style.width = `${water}%`;
    if (waterText) waterText.textContent = `${water}%`;
    if (xpBar) xpBar.style.width = `${xpPercent}%`;
    if (streakEl) streakEl.textContent = `${gardenState.streak} kun`;
    if (todayPagesEl) todayPagesEl.textContent = `${gardenState.todayPages} ta`;
    if (totalBloomsEl) totalBloomsEl.textContent = `${gardenState.totalBlooms} marta`;

    // Bosqich nomlari
    const stageNames = [
        "1-bosqich: Urug'",
        "2-bosqich: Yosh Nihol",
        "3-bosqich: Kurtak",
        "4-bosqich: G'uncha",
        "5-bosqich: Muattar Gul 🌸"
    ];
    if (levelText) levelText.textContent = stageNames[level - 1] || "Sehrli Gul";
    if (xpHint) xpHint.textContent = level >= 5 ? "Maksimal bosqich! Gul to'liq ochilgan ✨" : `Keyingi bosqichgacha: ${Math.max(0, xpNeeded - xp)} XP`;

    // Suv va So'lish holatiga qarab xabarlar
    if (water === 0) {
        if (statusBadge) {
            statusBadge.className = 'flower-health-badge danger';
            statusBadge.textContent = 'Qurib qolgan 🍂';
        }
        if (waterHint) waterHint.textContent = 'Gulga zudlik bilan suv kerak! Kitob o\'qib uni tiriltiring!';
        if (speechEl) speechEl.textContent = "Oh yo'q... Siz kirmaganingiz uchun butunlay so'lib qoldim... 🍂 Meni faqat bilim va kitob nuri qutqara oladi!";
    } else if (water < 40) {
        if (statusBadge) {
            statusBadge.className = 'flower-health-badge warning';
            statusBadge.textContent = 'So\'limoqda 🥀';
        }
        if (waterHint) waterHint.textContent = 'Suv yetishmayapti! Gulning barglari so\'lib egilmoqda.';
        if (speechEl) speechEl.textContent = "Menga juda suv kerak... 🥀 Bir kun kirmasangiz shunday so'liyman. Iltimos, kitob o'qing!";
    } else {
        if (statusBadge) {
            statusBadge.className = 'flower-health-badge';
            statusBadge.textContent = 'Yashnamoqda 🌸';
        }
        if (waterHint) waterHint.textContent = 'Gul to\'liq sug\'orilgan va xushchaqchaq holatda!';
        if (speechEl) {
            if (level >= 5) {
                speechEl.textContent = "Rahmat sizga! Men sizning kitobxonligingiz tufayli to'liq ochildim va muattar ifor taratyapman! 🌸✨";
            } else if (gardenState.todayPages > 0) {
                speechEl.textContent = `Bugun ${gardenState.todayPages} ta sahifa o'qidingiz! Men quvvatga to'lib yanada baland o'smoqdaman! 🌿`;
            } else {
                speechEl.textContent = "Salom! Men sizning bilimingiz bilan tirikman. Har kuni kitob o'qing va men so'lib qolmayman! 🌱";
            }
        }
    }

    // Bosqichlar ro'yxatini belgilash
    document.querySelectorAll('.stage-step').forEach(step => {
        const stepLvl = parseInt(step.dataset.level);
        step.classList.remove('active', 'completed');
        if (stepLvl === level) {
            step.classList.add('active');
        } else if (stepLvl < level) {
            step.classList.add('completed');
        }
    });

    // Gul navlari tugmalari
    document.querySelectorAll('.variety-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${gardenState.flowerType}'`));
    });

    // Gulning SVG chizmasini joylash
    renderFlowerVisual();
}

function renderFlowerVisual() {
    const container = document.getElementById('flowerArt');
    if (!container) return;

    const { level, water, flowerType } = gardenState;
    const isWithered = water > 0 && water < 40;
    const isDead = water === 0;

    // CSS holat klasslari
    container.className = 'flower-art';
    if (isDead) {
        container.classList.add('flower-dead');
    } else if (isWithered) {
        container.classList.add('flower-withered');
    } else {
        container.classList.add('flower-healthy');
    }

    // SVG chizish
    container.innerHTML = generateFlowerSVG(level, water, flowerType);
}

function generateFlowerSVG(level, water, type) {
    // Ranglar sxemasi
    let stemColor = "#16a34a"; // Sog'lom yashil
    let leafColor = "#22c55e";
    let petalColors = {
        sakura: { main: "#f472b6", dark: "#ec4899", center: "#fef08a" },
        rose: { main: "#ef4444", dark: "#dc2626", center: "#b91c1c" },
        tulip: { main: "#a855f7", dark: "#9333ea", center: "#fde047" },
        sunflower: { main: "#eab308", dark: "#ca8a04", center: "#713f12" }
    }[type] || { main: "#f472b6", dark: "#ec4899", center: "#fef08a" };

    if (water < 40 && water > 0) {
        stemColor = "#ca8a04"; // Sarg'aygan
        leafColor = "#a16207";
        petalColors = { main: "#d1d5db", dark: "#9ca3af", center: "#ca8a04" };
    } else if (water === 0) {
        stemColor = "#52525b"; // Kulrang/qurigan
        leafColor = "#3f3f46";
        petalColors = { main: "#71717a", dark: "#52525b", center: "#27272a" };
    }

    let innerContent = "";

    if (level === 1) {
        // 1-bosqich: Tuproqdan bosh ko'targan kichik urug'
        innerContent = `
            <!-- Urug' va kichik unib chiqish -->
            <ellipse cx="100" cy="225" rx="14" ry="9" fill="#78350f" />
            <path d="M100 220 Q95 205 90 195 Q98 200 100 220" fill="${stemColor}" />
            <path d="M90 195 Q82 190 85 182 Q94 186 90 195" fill="${leafColor}" />
            <path d="M92 196 Q100 190 104 184 Q101 193 92 196" fill="${leafColor}" />
            <circle cx="100" cy="223" r="3" fill="#fde68a" opacity="0.6"/>
        `;
    } else if (level === 2) {
        // 2-bosqich: Nihol (poya va 2 ta mustahkam barg)
        innerContent = `
            <!-- Nihol poyasi -->
            <path class="plant-stem" d="M100 230 Q98 180 100 150" stroke="${stemColor}" stroke-width="6" stroke-linecap="round" fill="none" />
            <!-- Chap barg -->
            <g class="plant-leaves">
                <path d="M99 190 Q70 185 65 170 Q85 168 99 185" fill="${leafColor}" />
                <path d="M100 170 Q130 165 135 150 Q115 148 100 165" fill="${leafColor}" />
            </g>
            <!-- Tepasidagi yosh kurtakcha -->
            <ellipse class="plant-head" cx="100" cy="146" rx="7" ry="10" fill="${leafColor}" />
        `;
    } else if (level === 3) {
        // 3-bosqich: Kurtak (baland poya, 4 ta barg va yashil g'uncha)
        innerContent = `
            <!-- Kurtak poyasi -->
            <path class="plant-stem" d="M100 230 Q97 160 100 105" stroke="${stemColor}" stroke-width="8" stroke-linecap="round" fill="none" />
            <g class="plant-leaves">
                <!-- Quyi barglar -->
                <path d="M98 190 Q60 185 55 165 Q80 162 98 185" fill="${leafColor}" />
                <path d="M101 175 Q140 170 145 150 Q120 148 101 170" fill="${leafColor}" />
                <!-- Yuqori barglar -->
                <path d="M99 140 Q75 130 70 115 Q90 115 99 135" fill="${leafColor}" />
                <path d="M101 130 Q125 120 130 105 Q110 105 101 125" fill="${leafColor}" />
            </g>
            <!-- Kurtak boshi -->
            <g class="plant-head" transform="translate(100, 100)">
                <ellipse cx="0" cy="0" rx="14" ry="18" fill="${leafColor}" />
                <ellipse cx="0" cy="-3" rx="8" ry="14" fill="${petalColors.dark}" opacity="0.8" />
            </g>
        `;
    } else if (level === 4) {
        // 4-bosqich: Ochilish arafasidagi rangdor g'uncha
        innerContent = `
            <!-- G'uncha poyasi -->
            <path class="plant-stem" d="M100 230 Q96 150 100 80" stroke="${stemColor}" stroke-width="9" stroke-linecap="round" fill="none" />
            <g class="plant-leaves">
                <path d="M97 185 Q50 175 45 150 Q75 145 97 180" fill="${leafColor}" />
                <path d="M102 165 Q150 155 155 130 Q125 128 102 160" fill="${leafColor}" />
                <path d="M98 125 Q65 115 60 95 Q85 95 98 120" fill="${leafColor}" />
                <path d="M102 110 Q135 100 140 80 Q115 80 102 105" fill="${leafColor}" />
            </g>
            <!-- Qisman ochilgan g'uncha -->
            <g class="plant-head" transform="translate(100, 75)">
                <!-- Kosachabarg -->
                <path d="M-15 15 Q0 25 15 15 Q0 -5 -15 15" fill="${leafColor}" />
                <!-- Gulbarglar -->
                <path d="M-16 10 C-26 -15 -10 -35 0 -40 C10 -35 26 -15 16 10 Z" fill="${petalColors.dark}" />
                <path d="M-10 10 C-18 -10 -5 -28 0 -34 C5 -28 18 -10 10 10 Z" fill="${petalColors.main}" />
                <ellipse cx="0" cy="-12" rx="6" ry="14" fill="${petalColors.center}" opacity="0.9" />
            </g>
        `;
    } else {
        // 5-bosqich: To'liq ochilgan katta muattar gul ✨
        innerContent = `
            <!-- Baland va mustahkam poya -->
            <path class="plant-stem" d="M100 230 Q95 140 100 65" stroke="${stemColor}" stroke-width="10" stroke-linecap="round" fill="none" />
            <g class="plant-leaves">
                <path d="M96 185 Q40 170 35 140 Q70 135 96 180" fill="${leafColor}" />
                <path d="M103 160 Q160 145 165 115 Q130 115 103 155" fill="${leafColor}" />
                <path d="M97 120 Q55 105 50 80 Q80 80 97 115" fill="${leafColor}" />
                <path d="M103 100 Q145 85 150 60 Q120 60 103 95" fill="${leafColor}" />
            </g>
            <!-- Katta ochilgan gul toji -->
            <g class="plant-head" transform="translate(100, 60)">
                <!-- Gulbarglar aylanasi -->
                <g class="flower-petals-group">
                    <circle cx="0" cy="-28" r="18" fill="${petalColors.main}" />
                    <circle cx="27" cy="-9" r="18" fill="${petalColors.main}" />
                    <circle cx="17" cy="23" r="18" fill="${petalColors.main}" />
                    <circle cx="-17" cy="23" r="18" fill="${petalColors.main}" />
                    <circle cx="-27" cy="-9" r="18" fill="${petalColors.main}" />
                    <!-- Ikkinchi qavat barglari -->
                    <circle cx="0" cy="-25" r="13" fill="${petalColors.dark}" opacity="0.6" />
                    <circle cx="24" cy="-8" r="13" fill="${petalColors.dark}" opacity="0.6" />
                    <circle cx="15" cy="20" r="13" fill="${petalColors.dark}" opacity="0.6" />
                    <circle cx="-15" cy="20" r="13" fill="${petalColors.dark}" opacity="0.6" />
                    <circle cx="-24" cy="-8" r="13" fill="${petalColors.dark}" opacity="0.6" />
                </g>
                <!-- Gul markazi (Changchi) -->
                <circle cx="0" cy="0" r="16" fill="${petalColors.center}" />
                <circle cx="0" cy="0" r="12" fill="#ca8a04" opacity="0.4" />
                <circle cx="-4" cy="-4" r="2.5" fill="#fff" opacity="0.7" />
            </g>
            <!-- Sehrli uchqunlar (faqat suv yetarli bo'lganda) -->
            ${water >= 70 ? `
                <g class="sparkles" opacity="0.85">
                    <text x="50" y="40" font-size="14">✨</text>
                    <text x="140" y="35" font-size="14">✨</text>
                    <text x="92" y="15" font-size="12">🌟</text>
                </g>
            ` : ''}
        `;
    }

    return `
        <svg class="plant-svg" width="200" height="240" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
            ${innerContent}
        </svg>
    `;
}

// Kitob sahifasi o'qilganda chaqiriladi
function recordReadingForGarden(pagesCount = 1) {
    const today = new Date().toISOString().split('T')[0];
    
    // Suv qo'shish (har sahifa uchun +25% suv)
    const oldWater = gardenState.water;
    gardenState.water = Math.min(100, gardenState.water + (pagesCount * 25));
    
    // XP qo'shish (har sahifa uchun +15 XP)
    gardenState.xp += (pagesCount * 15);
    gardenState.todayPages = (gardenState.todayPages || 0) + pagesCount;
    
    // Agar gul so'ligan yoki qurigan bo'lsa va qayta sug'orilsa
    if (oldWater < 40 && gardenState.water >= 40) {
        showToast('🌸', 'Mo\'jiza! Kitob mutolaasi sababli gulingiz qayta tirildi va yashnadi!');
    } else {
        showToast('💧', `Kitob o'qildi! Gulingizga +${pagesCount * 25}% suv va +${pagesCount * 15} XP berildi.`);
    }

    // Streak tekshirish
    if (gardenState.lastReadDate !== today) {
        gardenState.streak = (gardenState.streak || 0) + 1;
        gardenState.lastReadDate = today;
    }

    // Bosqichni ko'tarish (Level up)
    const xpNeeded = gardenState.xpNeeded || (gardenState.level * 40);
    if (gardenState.xp >= xpNeeded && gardenState.level < 5) {
        gardenState.level++;
        gardenState.xp = 0;
        gardenState.xpNeeded = gardenState.level * 40;
        
        if (gardenState.level === 5) {
            gardenState.totalBlooms = (gardenState.totalBlooms || 0) + 1;
            showToast('🎉', 'Tabriklaymiz! Gulingiz 5-bosqichga yetib, to\'liq gulladi! 🌸✨');
        } else {
            showToast('🌱', `Ajoyib! Gulingiz ${gardenState.level}-bosqichga o'sdi!`);
        }
    }

    saveGardenState();
    triggerWateringAnimation();

    // Agar hozir bog' sahifasida bo'lsa darhol qayta chizish
    if (currentPage === 'garden') {
        renderGarden();
    }
}

// Gulga suv quyish animatsiyasi
function triggerWateringAnimation() {
    const dropsContainer = document.getElementById('waterDrops');
    if (!dropsContainer) return;

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.className = 'falling-drop';
            drop.style.left = (20 + Math.random() * 60) + '%';
            drop.style.top = (10 + Math.random() * 20) + 'px';
            drop.style.animationDuration = (0.6 + Math.random() * 0.4) + 's';
            dropsContainer.appendChild(drop);

            setTimeout(() => drop.remove(), 1000);
        }, i * 60);
    }
}

// Foydalanuvchi bog' sahifasidan to'g'ridan-to'g'ri sug'orishni bosganda
function waterFlowerByReading() {
    recordReadingForGarden(1);
}

// 1 kun kirmaslikni simulyatsiya qilish (Gul so'lishini darhol sinash uchun)
function simulateMissedDay() {
    // 1 kunlik kirmaslik effekti
    gardenState.water = Math.max(0, gardenState.water - 40);
    gardenState.todayPages = 0;
    
    saveGardenState();
    renderGarden();

    if (gardenState.water === 0) {
        showToast('🥀', '1 kun kirmadingiz: Suv tugadi va gulingiz butunlay so\'ldi!');
    } else {
        showToast('⏳', '1 kun kirmadingiz: Gulingiz -40% suv yo\'qotdi va so\'liy boshladi!');
    }
}

// Gulni qayta ekish (Reset)
function resetGardenPlant() {
    if (confirm("Gulingizni qaytadan urug' holatidan o'stirishni xohlaysizmi?")) {
        gardenState.level = 1;
        gardenState.xp = 0;
        gardenState.xpNeeded = 40;
        gardenState.water = 100;
        gardenState.todayPages = 0;
        
        saveGardenState();
        renderGarden();
        showToast('🌱', 'Yangi gul urug\'i muvaffaqiyatli ekildi!');
    }
}

// Gul navini tanlash
function selectFlowerType(type) {
    gardenState.flowerType = type;
    saveGardenState();
    renderGarden();
    showToast('🎨', `Gul turi o'zgartirildi: ${type.toUpperCase()}`);
}
