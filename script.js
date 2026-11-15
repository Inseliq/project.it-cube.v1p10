// Картинки кружков по темам
const IMG = {
    tech1:'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=500&fit=crop',
    tech2:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    art1:'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=500&fit=crop',
    art2:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop',
    mind1:'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=500&fit=crop',
    mind2:'https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=800&h=500&fit=crop',
    media1:'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop',
    media2:'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop',
    science1:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop',
    science2:'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&h=500&fit=crop',
    sport1:'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=500&fit=crop',
    sport2:'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=500&fit=crop',
    eco1:'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=500&fit=crop',
    eco2:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop',
    lang1:'https://images.unsplash.com/photo-1543109740-4bdb38fda756?w=800&h=500&fit=crop',
    lang2:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
    online1:'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop',
    online2:'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=500&fit=crop',
    online3:'https://images.unsplash.com/photo-1614179818511-3cc0c6c8b0e3?w=800&h=500&fit=crop',
    online4:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop',
    online5:'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&h=500&fit=crop',
    online6:'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=500&fit=crop'
};

// Каталог кружков
const CLUBS = [
    {id:1,title:'Клуб робототехники «Шестерёнка»',category:'tech',categoryName:'Техника и IT',slogan:'Собери своего первого робота',desc:'Учимся собирать роботов из конструкторов, писать первые программы и готовиться к соревнованиям. Начинаем с нуля.',learn:['Собирать роботов из LEGO и Arduino','Программировать движения и датчики','Работать в команде над проектом','Готовиться к соревнованиям'],address:'Кабинет 214, корпус Б',teacher:'Алексей Морозов',teacherRole:'Учитель информатики, 8 лет практики',teacherInitial:'А',schedule:[['Вторник','15:30 - 17:00'],['Четверг','15:30 - 17:00']],grades:'5-9 класс',age:'11-15 лет',price:'Бесплатно',seats:6,rating:4.9,img:IMG.tech1,color:'linear-gradient(135deg,#5b4bff,#8f7bff)',online:false},
    {id:2,title:'Театральная студия «Маска»',category:'art',categoryName:'Творчество',slogan:'Перевоплотись в кого угодно',desc:'Актёрское мастерство, сценическая речь и пластика. Ставим спектакли и выступаем на конкурсах.',learn:['Свободно держаться на сцене','Работать с голосом и дикцией','Импровизировать','Выступать перед зрителями'],address:'Актовый зал',teacher:'Ирина Соколова',teacherRole:'Руководитель театральной студии',teacherInitial:'И',schedule:[['Среда','16:00 - 18:00'],['Пятница','16:00 - 18:00']],grades:'6-11 класс',age:'12-17 лет',price:'Бесплатно',seats:4,rating:4.8,img:IMG.art1,color:'linear-gradient(135deg,#ff7a59,#ff9f7a)',online:false},
    {id:3,title:'Шахматный клуб «Гамбит»',category:'mind',categoryName:'Интеллект',slogan:'Думай на три хода вперёд',desc:'Разбираем дебюты, решаем задачи и играем турниры. Подходит новичкам и опытным игрокам.',learn:['Понимать дебюты и ловушки','Решать тактические задачи','Анализировать партии','Играть в турнирах'],address:'Кабинет 108',teacher:'Сергей Волков',teacherRole:'КМС по шахматам',teacherInitial:'С',schedule:[['Понедельник','14:30 - 16:00'],['Суббота','11:00 - 12:30']],grades:'3-11 класс',age:'9-17 лет',price:'Бесплатно',seats:10,rating:4.9,img:IMG.mind1,color:'linear-gradient(135deg,#151428,#3b3960)',online:false},
    {id:4,title:'Медиацентр «Школьный эфир»',category:'media',categoryName:'Медиа',slogan:'Твой голос слышит вся школа',desc:'Снимаем видео, ведём школьные новости и монтируем ролики. Учимся работать с камерой.',learn:['Снимать и монтировать видео','Писать тексты и брать интервью','Вести прямой эфир','Работать в команде'],address:'Медиастудия, каб. 301',teacher:'Мария Кузнецова',teacherRole:'Журналист, педагог медиацентра',teacherInitial:'М',schedule:[['Вторник','16:00 - 17:30'],['Четверг','16:00 - 17:30']],grades:'7-11 класс',age:'13-17 лет',price:'Бесплатно',seats:3,rating:4.7,img:IMG.media1,color:'linear-gradient(135deg,#12c7a2,#5be0c2)',online:false},
    {id:5,title:'Лаборатория «Юный химик»',category:'science',categoryName:'Наука',slogan:'Наука - это эксперимент',desc:'Ставим безопасные опыты, изучаем реакции и готовимся к олимпиадам под присмотром учителя.',learn:['Проводить безопасные опыты','Понимать химические реакции','Работать с оборудованием','Готовиться к олимпиадам'],address:'Кабинет химии, 205',teacher:'Ольга Белова',teacherRole:'Учитель химии, кандидат наук',teacherInitial:'О',schedule:[['Среда','15:00 - 16:30'],['Суббота','10:00 - 11:30']],grades:'8-11 класс',age:'14-17 лет',price:'Бесплатно',seats:5,rating:4.8,img:IMG.science1,color:'linear-gradient(135deg,#a06bff,#c79bff)',online:false},
    {id:6,title:'Волейбольная секция «Выше сетки»',category:'sport',categoryName:'Спорт',slogan:'Играй в команде и побеждай',desc:'Отрабатываем подачи, приём и нападение. Играем в школьной лиге и на городских турнирах.',learn:['Подавать и принимать мяч','Играть в команде','Держать спортивную форму','Выступать на соревнованиях'],address:'Спортзал',teacher:'Дмитрий Орлов',teacherRole:'Тренер по волейболу',teacherInitial:'Д',schedule:[['Понедельник','17:00 - 18:30'],['Четверг','17:00 - 18:30']],grades:'6-11 класс',age:'12-17 лет',price:'Бесплатно',seats:8,rating:4.6,img:IMG.sport1,color:'linear-gradient(135deg,#ff9f43,#ffc078)',online:false},
    {id:7,title:'Эко-отряд «Зелёный патруль»',category:'eco',categoryName:'Экология',slogan:'Сделаем школу зеленее',desc:'Ухаживаем за школьным садом, делаем экопроекты и участвуем в городских акциях.',learn:['Ухаживать за растениями','Делать экопроекты','Проводить акции','Работать в команде'],address:'Школьный сад, каб. 112',teacher:'Наталья Егорова',teacherRole:'Учитель биологии',teacherInitial:'Н',schedule:[['Среда','14:30 - 16:00'],['Пятница','14:30 - 16:00']],grades:'5-9 класс',age:'11-15 лет',price:'Бесплатно',seats:12,rating:4.5,img:IMG.eco1,color:'linear-gradient(135deg,#2ecc71,#7be495)',online:false},
    {id:8,title:'Разговорный клуб «English Lab»',category:'lang',categoryName:'Языки',slogan:'Говори на английском без страха',desc:'Обсуждаем фильмы, играем в игры и ставим мини-сценки на английском. Главное - практика.',learn:['Говорить без страха ошибок','Понимать речь на слух','Расширять словарный запас','Вести дискуссии'],address:'Кабинет 312',teacher:'Елена Смирнова',teacherRole:'Учитель английского языка',teacherInitial:'Е',schedule:[['Вторник','17:00 - 18:00'],['Пятница','17:00 - 18:00']],grades:'7-11 класс',age:'13-17 лет',price:'Бесплатно',seats:2,rating:4.9,img:IMG.lang1,color:'linear-gradient(135deg,#5b4bff,#ff7a59)',online:false},
    {id:9,title:'Python с нуля',category:'tech',categoryName:'Техника и IT',slogan:'Первая программа за один вечер',desc:'Онлайн-курс программирования на Python. Пишем бота для Telegram, мини-игру и учимся решать задачи.',learn:['Писать код на Python','Работать с библиотеками','Создавать Telegram-бота','Решать задачи в проектах'],address:'Онлайн, Zoom',teacher:'Артём Лебедев',teacherRole:'Разработчик, преподаватель',teacherInitial:'А',schedule:[['Среда','18:00 - 19:30'],['Суббота','12:00 - 13:30']],grades:'7-11 класс',age:'13-17 лет',price:'2 400 ₽/мес',seats:7,rating:4.9,img:IMG.online1,color:'linear-gradient(135deg,#5b4bff,#8f7bff)',online:true},
    {id:10,title:'Английский с носителем',category:'lang',categoryName:'Языки',slogan:'Заговори как native speaker',desc:'Разговорный английский онлайн с носителем языка. Мини-группы до 6 человек, все занятия в записи.',learn:['Говорить свободно','Понимать носителей','Расширять словарный запас','Готовиться к экзаменам'],address:'Онлайн, Zoom',teacher:'Sarah Johnson',teacherRole:'Носитель языка, CELTA',teacherInitial:'S',schedule:[['Вторник','19:00 - 20:00'],['Четверг','19:00 - 20:00']],grades:'8-11 класс',age:'14-17 лет',price:'3 000 ₽/мес',seats:3,rating:4.8,img:IMG.online2,color:'linear-gradient(135deg,#12c7a2,#5be0c2)',online:true},
    {id:11,title:'Шахматы онлайн',category:'mind',categoryName:'Интеллект',slogan:'Тренируй мозг каждый день',desc:'Онлайн-занятия по шахматам для любого уровня. Разбираем партии, решаем задачи, играем турниры.',learn:['Дебюты и ловушки','Тактика и стратегия','Анализ партий','Игра в турнирах онлайн'],address:'Онлайн, Lichess',teacher:'Игорь Морозов',teacherRole:'Мастер FIDE',teacherInitial:'И',schedule:[['Понедельник','18:00 - 19:00'],['Пятница','18:00 - 19:00']],grades:'3-11 класс',age:'9-17 лет',price:'1 800 ₽/мес',seats:9,rating:4.7,img:IMG.online3,color:'linear-gradient(135deg,#151428,#3b3960)',online:true},
    {id:12,title:'Онлайн-студия рисования',category:'art',categoryName:'Творчество',slogan:'Рисуй на планшете как профи',desc:'Учимся цифровой живописи в Procreate и Photoshop. Подходит для новичков и продолжающих.',learn:['Работать в Procreate','Рисовать на планшете','Понимать цвет и композицию','Создавать иллюстрации'],address:'Онлайн, Discord',teacher:'Анна Крылова',teacherRole:'Иллюстратор, дизайнер',teacherInitial:'А',schedule:[['Вторник','17:00 - 18:30'],['Четверг','17:00 - 18:30']],grades:'5-11 класс',age:'11-17 лет',price:'2 200 ₽/мес',seats:5,rating:4.6,img:IMG.online4,color:'linear-gradient(135deg,#ff7a59,#ff9f7a)',online:true},
    {id:13,title:'Онлайн-медиашкола',category:'media',categoryName:'Медиа',slogan:'Создавай контент из дома',desc:'Учимся монтировать видео, вести соцсети и делать подкасты. Всё онлайн, всё по-взрослому.',learn:['Монтировать в CapCut','Вести соцсети','Записывать подкасты','Работать с контентом'],address:'Онлайн, Telegram',teacher:'Денис Соколов',teacherRole:'Контент-мейкер',teacherInitial:'Д',schedule:[['Среда','19:00 - 20:30'],['Суббота','14:00 - 15:30']],grades:'7-11 класс',age:'13-17 лет',price:'2 000 ₽/мес',seats:4,rating:4.5,img:IMG.online5,color:'linear-gradient(135deg,#a06bff,#c79bff)',online:true}
];

// Короткие утилиты
const byId = id => CLUBS.find(c => c.id === Number(id));
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

// Экранирование HTML
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
}

// Склонение числительных
function pluralize(n, forms) {
    const n10 = n % 10;
    const n100 = n % 100;
    if (n10 === 1 && n100 !== 11) return forms[0];
    if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return forms[1];
    return forms[2];
}

// Ключи localStorage
const LS_FAV = 'navigator_favorites';
const LS_APPLIED = 'navigator_applied';
const LS_VIEWS = 'navigator_views';
const LS_COMPARE = 'navigator_compare';
const LS_REVIEWS = 'navigator_reviews';

// ===== Избранное =====
function getFavorites() {
    try { return JSON.parse(localStorage.getItem(LS_FAV) || '[]'); } catch(e) { return []; }
}
function saveFavorites(ids) {
    localStorage.setItem(LS_FAV, JSON.stringify(ids));
    updateFavCounter();
}
function isFavorite(id) {
    return getFavorites().includes(Number(id));
}
function toggleFavorite(id) {
    id = Number(id);
    const list = getFavorites();
    const idx = list.indexOf(id);
    if (idx === -1) list.push(id);
    else list.splice(idx, 1);
    saveFavorites(list);
    return list.includes(id);
}
function updateFavCounter() {
    const count = getFavorites().length;
    const btn = document.getElementById('favBtn');
    if (btn) {
        btn.dataset.count = count;
        btn.classList.toggle('has-items', count > 0);
    }
}

// ===== Записанные кружки =====
function getApplied() {
    try { return JSON.parse(localStorage.getItem(LS_APPLIED) || '[]'); } catch(e) { return []; }
}
function addApplied(id) {
    const list = getApplied();
    if (!list.includes(Number(id))) {
        list.push(Number(id));
        localStorage.setItem(LS_APPLIED, JSON.stringify(list));
        updateScheduleCounter();
    }
}
function removeApplied(id) {
    const list = getApplied().filter(x => x !== Number(id));
    localStorage.setItem(LS_APPLIED, JSON.stringify(list));
    updateScheduleCounter();
}
function updateScheduleCounter() {
    const count = getApplied().length;
    const btn = document.getElementById('scheduleBtn');
    if (btn) {
        btn.dataset.count = count;
        btn.classList.toggle('has-items', count > 0);
    }
}

// ===== Просмотры =====
function getAllViews() {
    try { return JSON.parse(localStorage.getItem(LS_VIEWS) || '{}'); } catch(e) { return {}; }
}
function getViewsCount(id) {
    return getAllViews()[id] || 0;
}
function incrementViews(id) {
    const v = getAllViews();
    v[id] = (v[id] || 0) + 1;
    localStorage.setItem(LS_VIEWS, JSON.stringify(v));
    return v[id];
}

// ===== Сравнение =====
function getCompare() {
    try { return JSON.parse(localStorage.getItem(LS_COMPARE) || '[]'); } catch(e) { return []; }
}
function saveCompare(ids) {
    localStorage.setItem(LS_COMPARE, JSON.stringify(ids));
    updateCompareBar();
}
function toggleCompare(id) {
    id = Number(id);
    const list = getCompare();
    const idx = list.indexOf(id);
    if (idx === -1) {
        if (list.length >= 3) {
            showToast('Можно сравнить максимум 3 кружка');
            return false;
        }
        list.push(id);
    } else {
        list.splice(idx, 1);
    }
    saveCompare(list);
    return list.includes(id);
}
function isInCompare(id) {
    return getCompare().includes(Number(id));
}
function updateCompareBar() {
    const bar = document.getElementById('compareBar');
    if (!bar) return;
    const count = getCompare().length;
    if (!count) {
        bar.classList.remove('show');
        return;
    }
    bar.classList.add('show');
    const countEl = bar.querySelector('[data-compare-count]');
    if (countEl) countEl.textContent = count;
}

// Создать плашку сравнения
function ensureCompareBar() {
    if (!document.querySelector('[data-compare-toggle]')) return;
    if (document.getElementById('compareBar')) {
        updateCompareBar();
        return;
    }
    const bar = document.createElement('div');
    bar.id = 'compareBar';
    bar.className = 'compare-bar';
    bar.innerHTML = `
        <div class="compare-bar-info">
            <i class="fa-solid fa-code-compare"></i>
            <span>В сравнении: <b data-compare-count>0</b></span>
        </div>
        <div class="compare-bar-actions">
            <button class="btn btn-outline-light btn-sm" id="compareClearBtn">Очистить</button>
            <button class="btn btn-light btn-sm" id="compareOpenBtn">Сравнить</button>
        </div>
    `;
    document.body.appendChild(bar);
    document.getElementById('compareClearBtn').addEventListener('click', () => {
        saveCompare([]);
        document.querySelectorAll('[data-compare-toggle]').forEach(b => b.classList.remove('active'));
        showToast('Сравнение очищено');
    });
    document.getElementById('compareOpenBtn').addEventListener('click', openCompare);
    updateCompareBar();
}

// Модалка сравнения
function openCompare() {
    const list = getCompare().map(byId).filter(Boolean);
    if (list.length < 2) {
        showToast('Выбери хотя бы 2 кружка');
        return;
    }
    const rows = [
        ['Направление', c => escapeHTML(c.categoryName)],
        ['Класс', c => escapeHTML(c.grades)],
        ['Возраст', c => escapeHTML(c.age)],
        ['Стоимость', c => escapeHTML(c.price)],
        ['Места', c => seatsLabel(c.seats).text],
        ['Рейтинг', c => '★ ' + avgRating(c).toFixed(1)],
        ['Расписание', c => c.schedule.map(x => escapeHTML(x[0]) + ' ' + escapeHTML(x[1])).join('<br>')],
        ['Место', c => escapeHTML(c.address)],
        ['Педагог', c => `<a href="teacher.html?name=${encodeURIComponent(c.teacher)}" class="link">${escapeHTML(c.teacher)}</a>`],
        ['Формат', c => c.online ? 'Онлайн' : 'В школе']
    ];
    openModal(`
        <h2>Сравнение кружков</h2>
        <p class="modal-sub">${list.length} из 3</p>
        <div class="compare-table-wrap">
            <table class="compare-table">
                <thead>
                    <tr>
                        <th></th>
                        ${list.map(c => `<th><a href="club.html?id=${c.id}">${escapeHTML(c.title)}</a></th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(([label, fn]) => `
                        <tr>
                            <td class="compare-label">${label}</td>
                            ${list.map(c => `<td>${fn(c)}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <button class="btn btn-ghost btn-block" id="clearCompare" style="margin-top:16px">Очистить сравнение</button>
    `);
    document.getElementById('clearCompare').addEventListener('click', () => {
        saveCompare([]);
        document.querySelectorAll('[data-compare-toggle]').forEach(b => b.classList.remove('active'));
        closeModal();
    });
}

// ===== Отзывы =====
function getAllReviews() {
    try { return JSON.parse(localStorage.getItem(LS_REVIEWS) || '{}'); } catch(e) { return {}; }
}
function getReviews(clubId) {
    return getAllReviews()[clubId] || [];
}
function addReview(clubId, review) {
    const all = getAllReviews();
    if (!all[clubId]) all[clubId] = [];
    all[clubId].push(review);
    localStorage.setItem(LS_REVIEWS, JSON.stringify(all));
}
// Средний рейтинг
function avgRating(club) {
    const reviews = getReviews(club.id);
    if (!reviews.length) return club.rating;
    const sum = reviews.reduce((s, r) => s + r.rating, 0);
    return Math.round((sum / reviews.length) * 10) / 10;
}

// ===== Время =====
function parseTimeRange(str) {
    const m = str.match(/(\d{1,2}):(\d{2})\s*[-–—]\s*(\d{1,2}):(\d{2})/);
    if (!m) return null;
    return { start: parseInt(m[1]) * 60 + parseInt(m[2]), end: parseInt(m[3]) * 60 + parseInt(m[4]) };
}
function clubsOverlap(a, b) {
    for (const [dayA, timeA] of a.schedule) {
        for (const [dayB, timeB] of b.schedule) {
            if (dayA !== dayB) continue;
            const ta = parseTimeRange(timeA);
            const tb = parseTimeRange(timeB);
            if (!ta || !tb) continue;
            if (ta.start < tb.end && tb.start < ta.end) {
                return { day: dayA, timeA, timeB };
            }
        }
    }
    return null;
}
function findConflicts(clubs) {
    const conflicts = [];
    for (let i = 0; i < clubs.length; i++) {
        for (let j = i + 1; j < clubs.length; j++) {
            const ov = clubsOverlap(clubs[i], clubs[j]);
            if (ov) conflicts.push({ clubA: clubs[i], clubB: clubs[j], day: ov.day, timeA: ov.timeA, timeB: ov.timeB });
        }
    }
    return conflicts;
}

// Похожие кружки
function getSimilar(club, limit = 3) {
    return CLUBS.filter(c => c.id !== club.id && c.category === club.category).slice(0, limit);
}

// Свободные места
function seatsLabel(seats) {
    if (seats === 0) return { text: 'Мест нет', cls: 'low' };
    if (seats <= 3) return { text: `Осталось ${seats} ${pluralize(seats, ['место','места','мест'])}`, cls: 'low' };
    return { text: `Свободно ${seats} ${pluralize(seats, ['место','места','мест'])}`, cls: 'free' };
}

// Тост
function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.querySelector('span').textContent = msg;
    t.classList.add('show');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('show'), 3200);
}

// ===== Модалка =====
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
function openModal(html) {
    if (!modal) return;
    modalBody.innerHTML = html;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { modalBody.innerHTML = ''; }, 250);
}
if (modal) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ===== Поделиться и QR =====
function getClubUrl(id) {
    const base = location.origin + location.pathname.replace(/[^/]*$/, '');
    return base + 'club.html?id=' + id;
}
async function shareClub(club) {
    const url = getClubUrl(club.id);
    if (navigator.share) {
        try {
            await navigator.share({ title: club.title, text: club.slogan, url });
            return;
        } catch(e) {
            if (e.name === 'AbortError') return;
        }
    }
    try {
        await navigator.clipboard.writeText(url);
        showToast('Ссылка скопирована');
    } catch(e) {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); showToast('Ссылка скопирована'); }
        catch(err) { showToast('Не удалось скопировать'); }
        document.body.removeChild(ta);
    }
}
function showQR(club) {
    const url = getClubUrl(club.id);
    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(url);
    openModal(`
        <h2>QR-код кружка</h2>
        <p class="modal-sub">Наведи камеру телефона, чтобы открыть страницу</p>
        <div class="qr-wrap"><img src="${qrUrl}" alt="QR-код"></div>
        <p class="qr-caption">${escapeHTML(club.title)}</p>
        <button class="btn btn-ghost btn-block" id="closeQR">Закрыть</button>
    `);
    document.getElementById('closeQR').addEventListener('click', closeModal);
}
function printClub() {
    window.print();
}

// ===== Форма заявки =====
function applicationFormHTML(club) {
    return `
        <h2>Заявка на кружок</h2>
        <p class="modal-sub">${escapeHTML(club.title)}</p>
        <form id="applicationForm">
            <div class="form-row">
                <div class="form-group"><label>Имя ученика *</label><input name="student" placeholder="Иван" required maxlength="60"></div>
                <div class="form-group"><label>Класс *</label><input name="grade" placeholder="7 «А»" required maxlength="10"></div>
            </div>
            <div class="form-row">
                <div class="form-group"><label>Имя родителя *</label><input name="parent" placeholder="Иван Иванович" required maxlength="80"></div>
                <div class="form-group"><label>Телефон *</label><input type="tel" name="phone" placeholder="+7 (900) 000-00-00" required maxlength="20"></div>
            </div>
            <div class="form-group"><label>Комментарий</label><textarea name="comment" placeholder="Например: есть ли места во второй группе?" maxlength="300"></textarea></div>
            <p class="form-note">Отправляя заявку, вы соглашаетесь на обработку персональных данных.</p>
            <button type="submit" class="btn btn-primary btn-block">Отправить заявку</button>
        </form>
    `;
}
function bindApplicationForm(club) {
    const f = document.getElementById('applicationForm');
    if (!f) return;
    f.addEventListener('submit', e => {
        e.preventDefault();
        const btn = f.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Отправляем...';
        setTimeout(() => {
            addApplied(club.id);
            document.querySelectorAll(`[data-apply="${club.id}"]`).forEach(b => {
                b.textContent = 'Вы записаны';
                b.disabled = true;
            });
            openModal(`
                <div class="success-box">
                    <div class="success-icon"><i class="fa-solid fa-check"></i></div>
                    <h2>Заявка отправлена!</h2>
                    <p>Кружок «${escapeHTML(club.title)}» добавлен в твоё расписание. Руководитель свяжется с вами.</p>
                    <button class="btn btn-primary btn-block" id="closeSuccess">Хорошо</button>
                </div>
            `);
            document.getElementById('closeSuccess').addEventListener('click', closeModal);
            showToast('Заявка на «' + club.title + '» отправлена');
        }, 500);
    });
}
function openApplication(clubId) {
    const c = byId(clubId);
    if (!c) return;
    openModal(applicationFormHTML(c));
    bindApplicationForm(c);
}

// ===== Кнопки избранного =====
function favButtonHTML(id, extraClass = '') {
    const active = isFavorite(id);
    return `<button class="fav-btn ${active ? 'active' : ''} ${extraClass}" data-fav="${id}" aria-label="В избранное"><i class="${active ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>`;
}
function bindFavButtons(ctx = document) {
    ctx.querySelectorAll('[data-fav]').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const active = toggleFavorite(btn.dataset.fav);
            btn.classList.toggle('active', active);
            btn.innerHTML = `<i class="${active ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
            showToast(active ? 'Добавлено в избранное' : 'Убрано из избранного');
            document.querySelectorAll(`[data-fav="${btn.dataset.fav}"]`).forEach(other => {
                if (other !== btn) {
                    other.classList.toggle('active', active);
                    other.innerHTML = `<i class="${active ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
                }
            });
        });
    });
}

// ===== Кнопки сравнения =====
function compareButtonHTML(id) {
    const active = isInCompare(id);
    return `<button class="compare-btn ${active ? 'active' : ''}" data-compare-toggle="${id}" aria-label="Сравнить"><i class="fa-solid fa-code-compare"></i></button>`;
}
function bindCompareButtons(ctx = document) {
    ctx.querySelectorAll('[data-compare-toggle]').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const active = toggleCompare(btn.dataset.compareToggle);
            btn.classList.toggle('active', active);
            if (active) showToast('Добавлено в сравнение');
        });
    });
    ensureCompareBar();
}

// ===== Карточка кружка =====
function cardHTML(club) {
    const s = seatsLabel(club.seats);
    const rating = avgRating(club);
    const onlineTag = club.online ? `<span class="card-online"><i class="fa-solid fa-wifi"></i> Онлайн</span>` : '';
    const applied = getApplied().includes(club.id);
    const views = getViewsCount(club.id);
    const popular = views >= 5 ? `<span class="card-popular"><i class="fa-solid fa-fire"></i> Популярный</span>` : '';
    return `
        <div class="card-media">
            <img src="${club.img}" alt="${escapeHTML(club.title)}" loading="lazy">
            <span class="card-badge">${escapeHTML(club.categoryName)}</span>
            <span class="card-rating"><i class="fa-solid fa-star"></i> ${rating.toFixed(1)}</span>
            ${favButtonHTML(club.id, 'fav-on-card')}
            ${compareButtonHTML(club.id)}
            ${onlineTag}
            ${popular}
        </div>
        <div class="card-body">
            <h3>${escapeHTML(club.title)}</h3>
            <p class="card-slogan">«${escapeHTML(club.slogan)}»</p>
            <p class="card-desc">${escapeHTML(club.desc)}</p>
            <div class="card-meta">
                <div><i class="fa-solid fa-location-dot"></i> ${escapeHTML(club.address)}</div>
                <div><i class="fa-regular fa-clock"></i> ${club.schedule.map(x => escapeHTML(x[0])).join(', ')}</div>
                <div><i class="fa-solid fa-user-graduate"></i> ${escapeHTML(club.grades)}</div>
            </div>
            <div class="card-foot">
                <span class="seats ${s.cls}">${s.text}</span>
                <div class="card-btns">
                    <a href="club.html?id=${club.id}" class="btn btn-ghost">Подробнее</a>
                    <button class="btn btn-primary" data-apply="${club.id}" ${applied ? 'disabled' : ''}>${applied ? 'Вы записаны' : 'Заявка'}</button>
                </div>
            </div>
        </div>
    `;
}

// Рендер сетки
function renderGrid(container, list) {
    container.innerHTML = '';
    list.forEach((club, i) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.style.animationDelay = (i * 0.06) + 's';
        card.innerHTML = cardHTML(club);
        container.appendChild(card);
    });
    bindFavButtons(container);
    bindCompareButtons(container);
    container.querySelectorAll('[data-apply]').forEach(b => {
        if (b.disabled) return;
        b.addEventListener('click', () => openApplication(b.dataset.apply));
    });
}

// ===== Квиз =====
const QUIZ = [
    { q: 'Что тебе ближе всего?', options: [
        { text: 'Собирать и разбирать гаджеты', icon: 'fa-screwdriver-wrench', tags: ['tech','science'] },
        { text: 'Выступать на сцене', icon: 'fa-microphone', tags: ['art','media'] },
        { text: 'Играть в команде', icon: 'fa-futbol', tags: ['sport'] },
        { text: 'Решать головоломки', icon: 'fa-puzzle-piece', tags: ['mind','science'] }
    ]},
    { q: 'Как проводишь свободное время?', options: [
        { text: 'Сижу за компьютером', icon: 'fa-laptop-code', tags: ['tech','media'] },
        { text: 'Гуляю с друзьями', icon: 'fa-person-walking', tags: ['sport','eco'] },
        { text: 'Читаю или смотрю фильмы', icon: 'fa-book-open', tags: ['lang','mind','art'] },
        { text: 'Что-то мастерю руками', icon: 'fa-palette', tags: ['art','tech'] }
    ]},
    { q: 'Что тебе интереснее всего узнать?', options: [
        { text: 'Как работают роботы и программы', icon: 'fa-robot', tags: ['tech'] },
        { text: 'Как устроен мир вокруг', icon: 'fa-seedling', tags: ['science','eco'] },
        { text: 'Как общаться с людьми со всего мира', icon: 'fa-globe', tags: ['lang'] },
        { text: 'Как создавать видео и контент', icon: 'fa-video', tags: ['media','art'] }
    ]},
    { q: 'Какой формат занятий удобнее?', options: [
        { text: 'В школе после уроков', icon: 'fa-school', tags: ['offline'] },
        { text: 'Из дома онлайн', icon: 'fa-house-laptop', tags: ['online'] },
        { text: 'Не важно, главное интересно', icon: 'fa-star', tags: ['any'] }
    ]},
    { q: 'Что для тебя главное в кружке?', options: [
        { text: 'Новые знания и навыки', icon: 'fa-graduation-cap', tags: ['science','lang','mind','tech'] },
        { text: 'Друзья и общение', icon: 'fa-users', tags: ['sport','art','eco'] },
        { text: 'Победы и соревнования', icon: 'fa-trophy', tags: ['sport','mind'] },
        { text: 'Творчество и самовыражение', icon: 'fa-palette', tags: ['art','media'] }
    ]}
];

// Состояние квиза
let quizState = { step: 0, tags: [], preferOnline: null, preferOffline: null };

// Открыть квиз
function openQuiz() {
    quizState = { step: 0, tags: [], preferOnline: null, preferOffline: null };
    renderQuizStep();
}

// Рендер шага
function renderQuizStep() {
    const total = QUIZ.length;
    const step = quizState.step;
    const q = QUIZ[step];
    const progress = Math.round((step / total) * 100);
    openModal(`
        <div class="quiz-progress"><span style="width:${progress}%"></span></div>
        <div class="quiz-step-label">Вопрос ${step + 1} из ${total}</div>
        <h2 class="quiz-q">${escapeHTML(q.q)}</h2>
        <div class="quiz-options" id="quizOptions">
            ${q.options.map((o, i) => `
                <button class="quiz-option" data-opt="${i}">
                    <i class="fa-solid ${o.icon} opt-emoji"></i>
                    <span>${escapeHTML(o.text)}</span>
                </button>
            `).join('')}
        </div>
        ${step > 0 ? '<button class="quiz-back" id="quizBack"><i class="fa-solid fa-arrow-left"></i> Назад</button>' : ''}
    `);
    $$('#quizOptions .quiz-option').forEach(b => {
        b.addEventListener('click', () => {
            const opt = q.options[+b.dataset.opt];
            quizState.tags.push(...opt.tags);
            if (opt.tags.includes('online')) quizState.preferOnline = true;
            if (opt.tags.includes('offline')) quizState.preferOffline = true;
            quizState.step++;
            if (quizState.step >= total) showQuizResult();
            else renderQuizStep();
        });
    });
    document.getElementById('quizBack')?.addEventListener('click', () => { quizState.step--; renderQuizStep(); });
}

// Результат квиза
function showQuizResult() {
    const tags = quizState.tags;
    const tagCount = {};
    tags.forEach(t => { if (!['online','offline','any'].includes(t)) tagCount[t] = (tagCount[t] || 0) + 1; });
    const scored = CLUBS.map(c => {
        let score = 0;
        if (tagCount[c.category]) score += tagCount[c.category] * 3;
        if (quizState.preferOnline && c.online) score += 2;
        if (quizState.preferOffline && !c.online) score += 2;
        score += avgRating(c) * 0.5;
        return { club: c, score };
    }).sort((a, b) => b.score - a.score);
    const top = scored.slice(0, 3).map(x => x.club);
    openModal(`
        <div class="quiz-result">
            <div class="result-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <h2>Мы подобрали кружки!</h2>
            <p>Вот что подходит тебе больше всего:</p>
            <div class="quiz-results-list">
                ${top.map(c => `
                    <a href="club.html?id=${c.id}" class="quiz-result-item">
                        <span class="quiz-result-img"><img src="${c.img}" alt="${escapeHTML(c.title)}"></span>
                        <div>
                            <b>${escapeHTML(c.title)}</b>
                            <span>${escapeHTML(c.categoryName)} · ${c.online ? 'Онлайн' : 'В школе'} · ★ ${avgRating(c).toFixed(1)}</span>
                        </div>
                        <i class="fa-solid fa-arrow-right arrow"></i>
                    </a>
                `).join('')}
            </div>
            <div class="quiz-actions">
                <button class="btn btn-primary btn-block" id="quizRestart">Пройти заново</button>
                <button class="btn btn-ghost btn-block" id="quizClose">Закрыть</button>
            </div>
        </div>
    `);
    document.getElementById('quizRestart').addEventListener('click', openQuiz);
    document.getElementById('quizClose').addEventListener('click', closeModal);
}

// ===== Модалка избранного =====
function openFavorites() {
    const ids = getFavorites();
    const clubs = ids.map(byId).filter(Boolean);
    if (!clubs.length) {
        openModal(`
            <h2>Избранное</h2>
            <p class="modal-sub">Пока пусто</p>
            <div class="empty" style="padding:40px 0">
                <i class="fa-regular fa-heart"></i>
                <p>Нажми на сердечко у кружка, чтобы добавить его сюда</p>
            </div>
            <button class="btn btn-primary btn-block" id="closeFav">Понятно</button>
        `);
        document.getElementById('closeFav').addEventListener('click', closeModal);
        return;
    }
    openModal(`
        <h2>Избранное</h2>
        <p class="modal-sub">Кружки, которые тебе понравились: ${clubs.length}</p>
        <div class="fav-list">
            ${clubs.map(c => `
                <div class="fav-list-item">
                    <a href="club.html?id=${c.id}" class="fav-list-link">
                        <span class="fav-list-img"><img src="${c.img}" alt="${escapeHTML(c.title)}"></span>
                        <div>
                            <b>${escapeHTML(c.title)}</b>
                            <span>${escapeHTML(c.categoryName)} · ★ ${avgRating(c).toFixed(1)}</span>
                        </div>
                    </a>
                    <button class="sched-remove" data-unfav="${c.id}" aria-label="Убрать"><i class="fa-solid fa-xmark"></i></button>
                </div>
            `).join('')}
        </div>
        <button class="btn btn-ghost btn-block" id="closeFav" style="margin-top:16px">Закрыть</button>
    `);
    document.getElementById('closeFav').addEventListener('click', closeModal);
    document.querySelectorAll('[data-unfav]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.unfav);
            saveFavorites(getFavorites().filter(x => x !== id));
            document.querySelectorAll(`[data-fav="${id}"]`).forEach(other => {
                other.classList.remove('active');
                other.innerHTML = '<i class="fa-regular fa-heart"></i>';
            });
            openFavorites();
            showToast('Убрано из избранного');
        });
    });
}

// ===== Модалка расписания =====
function openSchedule() {
    const ids = getApplied();
    const clubs = ids.map(byId).filter(Boolean);
    if (!clubs.length) {
        openModal(`
            <h2>Моё расписание</h2>
            <p class="modal-sub">Пока пусто</p>
            <div class="empty" style="padding:40px 0">
                <i class="fa-regular fa-calendar"></i>
                <p>Запишись на кружок, и он появится здесь</p>
            </div>
            <button class="btn btn-primary btn-block" id="closeSchedule">Понятно</button>
        `);
        document.getElementById('closeSchedule').addEventListener('click', closeModal);
        return;
    }
    const DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const byDay = {};
    DAYS.forEach(d => byDay[d] = []);
    clubs.forEach(club => {
        club.schedule.forEach(([day, time]) => {
            if (byDay[day]) byDay[day].push({ club, time });
        });
    });
    const conflicts = findConflicts(clubs);
    const conflictIds = new Set();
    conflicts.forEach(c => { conflictIds.add(c.clubA.id); conflictIds.add(c.clubB.id); });
    let scheduleHTML = '';
    DAYS.forEach(day => {
        if (!byDay[day].length) return;
        scheduleHTML += `<div class="sched-day"><h4>${day}</h4><div class="sched-items">`;
        byDay[day].forEach(({ club, time }) => {
            const conflict = conflictIds.has(club.id);
            scheduleHTML += `
                <div class="sched-item ${conflict ? 'conflict' : ''}">
                    <div class="sched-time">${escapeHTML(time)}</div>
                    <div class="sched-info">
                        <b>${escapeHTML(club.title)}</b>
                        <span>${escapeHTML(club.address)}</span>
                    </div>
                    ${conflict ? '<span class="sched-warn" title="Пересекается по времени"><i class="fa-solid fa-triangle-exclamation"></i></span>' : ''}
                    <button class="sched-remove" data-remove="${club.id}" aria-label="Убрать"><i class="fa-solid fa-xmark"></i></button>
                </div>
            `;
        });
        scheduleHTML += '</div></div>';
    });
    let conflictNote = '';
    if (conflicts.length) {
        conflictNote = `
            <div class="conflict-note">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div>
                    <b>Есть пересечения по времени!</b>
                    <span>${conflicts.map(c => `«${escapeHTML(c.clubA.title)}» и «${escapeHTML(c.clubB.title)}» (${c.day}, ${escapeHTML(c.timeA)} и ${escapeHTML(c.timeB)})`).join('; ')}</span>
                </div>
            </div>
        `;
    }
    openModal(`
        <h2>Моё расписание</h2>
        <p class="modal-sub">Твои записанные кружки на неделю</p>
        ${conflictNote}
        <div class="sched-list">${scheduleHTML}</div>
        <button class="btn btn-ghost btn-block" id="closeSchedule" style="margin-top:16px">Закрыть</button>
    `);
    document.getElementById('closeSchedule').addEventListener('click', closeModal);
    document.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', () => {
            removeApplied(btn.dataset.remove);
            openSchedule();
            showToast('Убрано из расписания');
        });
    });
}

// ===== Главная =====
function initHomePage() {
    const grid = document.getElementById('grid');
    if (!grid) return;
    let state = { filter: 'all', query: '', sort: 'default', day: 'all', grade: 'all' };
    function parseGrades(str) {
        const m = str.match(/(\d+)\s*[-–—]\s*(\d+)/);
        if (m) return [parseInt(m[1]), parseInt(m[2])];
        const single = str.match(/(\d+)/);
        if (single) return [parseInt(single[1]), parseInt(single[1])];
        return null;
    }
    function matchesGrade(club, gradeFilter) {
        if (gradeFilter === 'all') return true;
        const g = parseInt(gradeFilter);
        const range = parseGrades(club.grades);
        if (!range) return true;
        return g >= range[0] && g <= range[1];
    }
    function matchesDay(club, dayFilter) {
        if (dayFilter === 'all') return true;
        return club.schedule.some(([day]) => day === dayFilter);
    }
    function render() {
        let list = [...CLUBS];
        if (state.filter === 'online') list = list.filter(c => c.online);
        else if (state.filter !== 'all') list = list.filter(c => c.category === state.filter);
        if (state.query.trim()) {
            const q = state.query.trim().toLowerCase();
            list = list.filter(c => (c.title + c.desc + c.slogan + c.categoryName + c.teacher).toLowerCase().includes(q));
        }
        list = list.filter(c => matchesDay(c, state.day) && matchesGrade(c, state.grade));
        if (state.sort === 'rating') list.sort((a, b) => avgRating(b) - avgRating(a));
        if (state.sort === 'seats') list.sort((a, b) => b.seats - a.seats);
        const empty = document.getElementById('empty');
        if (!list.length) { grid.innerHTML = ''; empty.hidden = false; return; }
        empty.hidden = true;
        renderGrid(grid, list);
    }
    document.querySelectorAll('#chips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#chips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            state.filter = chip.dataset.filter;
            render();
        });
    });
    const cs = document.getElementById('catalogSearch');
    let t;
    cs?.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => { state.query = cs.value; render(); }, 200);
    });
    document.getElementById('sortSelect')?.addEventListener('change', e => { state.sort = e.target.value; render(); });
    document.getElementById('daySelect')?.addEventListener('change', e => { state.day = e.target.value; render(); });
    document.getElementById('gradeSelect')?.addEventListener('change', e => { state.grade = e.target.value; render(); });
    document.getElementById('resetFilters')?.addEventListener('click', () => {
        state = { filter: 'all', query: '', sort: 'default', day: 'all', grade: 'all' };
        document.getElementById('catalogSearch').value = '';
        document.getElementById('sortSelect').value = 'default';
        document.getElementById('daySelect').value = 'all';
        document.getElementById('gradeSelect').value = 'all';
        document.querySelectorAll('#chips .chip').forEach(c => c.classList.remove('active'));
        document.querySelector('#chips .chip[data-filter="all"]').classList.add('active');
        render();
    });
    const hi = document.getElementById('heroSearch');
    const hb = document.getElementById('heroSearchBtn');
    function heroSearch() {
        const v = hi.value.trim();
        state.query = v;
        document.getElementById('catalogSearch').value = v;
        state.filter = 'all';
        document.querySelectorAll('#chips .chip').forEach(c => c.classList.remove('active'));
        document.querySelector('#chips .chip[data-filter="all"]').classList.add('active');
        render();
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    }
    hb?.addEventListener('click', heroSearch);
    hi?.addEventListener('keydown', e => { if (e.key === 'Enter') heroSearch(); });
    ['#startQuizBtn', '#headerQuizBtn', '#mobileQuizBtn', '#ctaQuizBtn'].forEach(sel => {
        document.querySelector(sel)?.addEventListener('click', e => { e.preventDefault(); openQuiz(); });
    });
    document.getElementById('ctaBtn')?.addEventListener('click', () => {
        openModal(`
            <h2>Консультация</h2>
            <p class="modal-sub">Оставьте контакт - поможем выбрать кружок</p>
            <form id="consultForm">
                <div class="form-group"><label>Имя *</label><input name="name" placeholder="Как к вам обращаться" required maxlength="60"></div>
                <div class="form-group"><label>Телефон или email *</label><input name="contact" placeholder="+7 (900) 000-00-00" required maxlength="80"></div>
                <div class="form-group"><label>Что интересует?</label><textarea name="message" placeholder="Например: хочу что-то с техникой, но не роботы" maxlength="300"></textarea></div>
                <button type="submit" class="btn btn-primary btn-block">Отправить</button>
            </form>
        `);
        document.getElementById('consultForm').addEventListener('submit', e => {
            e.preventDefault();
            openModal(`<div class="success-box"><div class="success-icon"><i class="fa-solid fa-check"></i></div><h2>Спасибо!</h2><p>Мы свяжемся с вами и поможем выбрать кружок.</p><button class="btn btn-primary btn-block" id="closeSuccess">Хорошо</button></div>`);
            document.getElementById('closeSuccess').addEventListener('click', closeModal);
            showToast('Заявка на консультацию отправлена');
        });
    });
    document.querySelectorAll('.hero-stats [data-count]').forEach(el => {
        const target = +el.dataset.count;
        const dur = 1400;
        const start = performance.now();
        function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = Math.floor(target * eased);
            el.textContent = val >= 1000 ? val.toLocaleString('ru-RU') : val;
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
    document.querySelectorAll('.acc-item').forEach(item => {
        const head = item.querySelector('.acc-head');
        const body = item.querySelector('.acc-body');
        head.addEventListener('click', () => {
            const open = item.classList.contains('open');
            document.querySelectorAll('.acc-item').forEach(i => { i.classList.remove('open'); i.querySelector('.acc-body').style.maxHeight = null; });
            if (!open) { item.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
        });
    });
    render();
}

// ===== Онлайн-страница =====
function initOnlinePage() {
    const grid = document.getElementById('onlineGrid');
    if (!grid) return;
    let filter = 'all';
    function render() {
        const list = CLUBS.filter(c => c.online && (filter === 'all' || c.category === filter));
        const empty = document.getElementById('onlineEmpty');
        if (!list.length) { grid.innerHTML = ''; empty.hidden = false; return; }
        empty.hidden = true;
        renderGrid(grid, list);
    }
    document.querySelectorAll('#onlineChips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#onlineChips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            filter = chip.dataset.filter;
            render();
        });
    });
    document.getElementById('ctaOnlineBtn')?.addEventListener('click', () => {
        openModal(`
            <h2>Заявка на онлайн-кружок</h2>
            <p class="modal-sub">Подберём подходящий вариант</p>
            <form id="onlineForm">
                <div class="form-group"><label>Имя *</label><input name="name" placeholder="Как к вам обращаться" required maxlength="60"></div>
                <div class="form-group"><label>Телефон или email *</label><input name="contact" placeholder="+7 (900) 000-00-00" required maxlength="80"></div>
                <div class="form-group"><label>Что интересует?</label><textarea name="message" placeholder="Например: программирование для 7 класса" maxlength="300"></textarea></div>
                <button type="submit" class="btn btn-primary btn-block">Отправить</button>
            </form>
        `);
        document.getElementById('onlineForm').addEventListener('submit', e => {
            e.preventDefault();
            openModal(`<div class="success-box"><div class="success-icon"><i class="fa-solid fa-check"></i></div><h2>Спасибо!</h2><p>Мы подберём онлайн-кружок и свяжемся с вами.</p><button class="btn btn-primary btn-block" id="closeSuccess">Хорошо</button></div>`);
            document.getElementById('closeSuccess').addEventListener('click', closeModal);
            showToast('Заявка отправлена');
        });
    });
    render();
}

// ===== Страница кружка =====
function initClubPage() {
    const page = document.getElementById('clubPage');
    if (!page) return;
    const params = new URLSearchParams(location.search);
    const club = byId(params.get('id')) || CLUBS[0];
    document.title = club.title + ' - Навигатор';
    const views = incrementViews(club.id);
    const s = seatsLabel(club.seats);
    const rating = avgRating(club);
    const onlineTag = club.online ? `<div class="side-row"><i class="fa-solid fa-wifi"></i><div><b>Формат</b><span>Онлайн</span></div></div>` : '';
    const applied = getApplied().includes(club.id);
    const myClubs = getApplied().map(byId).filter(Boolean).filter(c => c.id !== club.id);
    const conflicts = myClubs.map(c => ({ c, ov: clubsOverlap(c, club) })).filter(x => x.ov);
    let conflictNote = '';
    if (conflicts.length) {
        conflictNote = `
            <div class="conflict-note">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div>
                    <b>Пересекается с твоим расписанием</b>
                    <span>${conflicts.map(x => `«${escapeHTML(x.c.title)}» (${x.ov.day}, ${escapeHTML(x.ov.timeA)} и ${escapeHTML(x.ov.timeB)})`).join('; ')}</span>
                </div>
            </div>
        `;
    }
    const similar = getSimilar(club, 3);
    let similarHTML = '';
    if (similar.length) {
        similarHTML = `
            <section class="panel similar-panel">
                <h2><i class="fa-solid fa-wand-magic-sparkles"></i> Похожие кружки</h2>
                <div class="similar-grid">
                    ${similar.map(c => `
                        <a href="club.html?id=${c.id}" class="similar-card">
                            <div class="similar-img"><img src="${c.img}" alt="${escapeHTML(c.title)}" loading="lazy"></div>
                            <div class="similar-info">
                                <b>${escapeHTML(c.title)}</b>
                                <span>${escapeHTML(c.categoryName)} · ★ ${avgRating(c).toFixed(1)}</span>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </section>
        `;
    }
    const reviews = getReviews(club.id);
    const reviewsHTML = reviews.length ? reviews.map(r => `
        <div class="review-item">
            <div class="review-item-head">
                <div class="review-avatar">${escapeHTML(r.name.charAt(0).toUpperCase())}</div>
                <div><b>${escapeHTML(r.name)}</b><span class="review-date">${escapeHTML(r.date)}</span></div>
                <div class="review-stars">${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}${'<i class="fa-regular fa-star"></i>'.repeat(5 - r.rating)}</div>
            </div>
            <p>${escapeHTML(r.text)}</p>
        </div>
    `).join('') : '<p class="review-empty">Пока нет отзывов. Будь первым!</p>';
    page.innerHTML = `
        <div class="club-top">
            <div class="club-hero">
                <img src="${club.img}" alt="${escapeHTML(club.title)}">
                <div class="crumb"><a href="index.html">Главная</a><i class="fa-solid fa-chevron-right" style="font-size:.6rem"></i><a href="${club.online ? 'online.html' : 'index.html#catalog'}">${club.online ? 'Онлайн' : 'Кружки'}</a></div>
                <span class="club-hero-badge">${escapeHTML(club.categoryName)}</span>
                <h1>${escapeHTML(club.title)}</h1>
                <p class="club-hero-slogan">«${escapeHTML(club.slogan)}»</p>
                ${favButtonHTML(club.id, 'fav-on-hero')}
                <div class="club-hero-actions">
                    <button class="icon-btn-white" id="shareBtn" aria-label="Поделиться"><i class="fa-solid fa-share-nodes"></i></button>
                    <button class="icon-btn-white" id="qrBtn" aria-label="QR-код"><i class="fa-solid fa-qrcode"></i></button>
                    <button class="icon-btn-white" id="printBtn" aria-label="Печать"><i class="fa-solid fa-print"></i></button>
                </div>
            </div>
            <aside class="club-side">
                <div class="side-row"><i class="fa-solid fa-location-dot"></i><div><b>Где</b><span>${escapeHTML(club.address)}</span></div></div>
                <div class="side-row"><i class="fa-regular fa-clock"></i><div><b>Когда</b><span>${club.schedule.map(x => escapeHTML(x[0]) + ', ' + escapeHTML(x[1])).join(' · ')}</span></div></div>
                <div class="side-row"><i class="fa-solid fa-user-graduate"></i><div><b>Для кого</b><span>${escapeHTML(club.grades)} · ${escapeHTML(club.age)}</span></div></div>
                <div class="side-row"><i class="fa-solid fa-tag"></i><div><b>Стоимость</b><span>${escapeHTML(club.price)}</span></div></div>
                <div class="side-row"><i class="fa-solid fa-chair"></i><div><b>Места</b><span class="seats ${s.cls}">${s.text}</span></div></div>
                <div class="side-row"><i class="fa-solid fa-eye"></i><div><b>Просмотры</b><span>${views} ${pluralize(views, ['просмотр','просмотра','просмотров'])}</span></div></div>
                <div class="side-row"><i class="fa-solid fa-star"></i><div><b>Рейтинг</b><span>★ ${rating.toFixed(1)} (${reviews.length} ${pluralize(reviews.length, ['отзыв','отзыва','отзывов'])})</span></div></div>
                ${onlineTag}
                ${conflictNote}
                <button class="btn btn-primary btn-block" id="applyBtn" ${applied ? 'disabled' : ''}>${applied ? 'Вы записаны' : 'Отправить заявку'}</button>
                <button class="btn btn-ghost btn-block" id="compareBtn" style="margin-top:8px">${isInCompare(club.id) ? 'Убрать из сравнения' : 'Добавить в сравнение'}</button>
            </aside>
        </div>
        <div class="club-content">
            <div class="club-main">
                <section class="panel"><h2><i class="fa-solid fa-circle-info"></i> О кружке</h2><p>${escapeHTML(club.desc)}</p></section>
                <section class="panel"><h2><i class="fa-solid fa-graduation-cap"></i> Чему ты научишься</h2><div class="learn-list">${club.learn.map(l => `<div class="learn-item"><i class="fa-solid fa-check"></i><span>${escapeHTML(l)}</span></div>`).join('')}</div></section>
                <section class="panel"><h2><i class="fa-regular fa-calendar"></i> Расписание</h2><div class="schedule">${club.schedule.map(x => `<div class="schedule-row"><span>${escapeHTML(x[0])}</span><span>${escapeHTML(x[1])}</span></div>`).join('')}</div></section>
                <section class="panel">
                    <h2><i class="fa-regular fa-comment-dots"></i> Отзывы</h2>
                    <div class="reviews-list">${reviewsHTML}</div>
                    <button class="btn btn-primary" id="addReviewBtn" style="margin-top:16px">Оставить отзыв</button>
                </section>
                ${similarHTML}
            </div>
            <aside class="club-aside">
                <section class="panel"><h2><i class="fa-solid fa-chalkboard-user"></i> Руководитель</h2><a href="teacher.html?name=${encodeURIComponent(club.teacher)}" class="teacher-link"><div class="teacher"><div class="teacher-avatar">${escapeHTML(club.teacherInitial)}</div><div class="teacher-info"><b>${escapeHTML(club.teacher)}</b><span>${escapeHTML(club.teacherRole)}</span></div></div></a></section>
                <section class="cta-side"><h3>Хочешь к нам?</h3><p>Оставь заявку - руководитель свяжется и ответит на вопросы.</p><button class="btn btn-light" id="applyBtnSide" ${applied ? 'disabled' : ''}>${applied ? 'Вы записаны' : 'Отправить заявку'}</button><div class="mini-note">Запись занимает около минуты</div></section>
            </aside>
        </div>
    `;
    bindFavButtons(page);
    document.getElementById('shareBtn').addEventListener('click', () => shareClub(club));
    document.getElementById('qrBtn').addEventListener('click', () => showQR(club));
    document.getElementById('printBtn').addEventListener('click', printClub);
    document.getElementById('compareBtn').addEventListener('click', (e) => {
        const active = toggleCompare(club.id);
        e.target.textContent = active ? 'Убрать из сравнения' : 'Добавить в сравнение';
    });
    document.getElementById('addReviewBtn').addEventListener('click', () => openReviewForm(club));
    const openApp = () => openApplication(club.id);
    const applyBtn = document.getElementById('applyBtn');
    const applySide = document.getElementById('applyBtnSide');
    if (applyBtn && !applied) applyBtn.addEventListener('click', openApp);
    if (applySide && !applied) applySide.addEventListener('click', openApp);
}

// Форма отзыва
function openReviewForm(club) {
    openModal(`
        <h2>Оставить отзыв</h2>
        <p class="modal-sub">${escapeHTML(club.title)}</p>
        <form id="reviewForm">
            <div class="form-group"><label>Имя или псевдоним *</label><input name="name" placeholder="Как тебя подписать" required maxlength="40"></div>
            <div class="form-group">
                <label>Оценка *</label>
                <div class="rating-input" id="ratingInput">
                    ${[1,2,3,4,5].map(i => `<button type="button" class="rating-star" data-star="${i}"><i class="fa-regular fa-star"></i></button>`).join('')}
                </div>
            </div>
            <div class="form-group"><label>Отзыв *</label><textarea name="text" placeholder="Чем понравился кружок?" required maxlength="300" minlength="10"></textarea></div>
            <button type="submit" class="btn btn-primary btn-block">Отправить отзыв</button>
        </form>
    `);
    let rating = 0;
    const ratingStars = document.querySelectorAll('.rating-star');
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            rating = Number(star.dataset.star);
            ratingStars.forEach((s, i) => {
                s.innerHTML = i < rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
                s.classList.toggle('active', i < rating);
            });
        });
    });
    document.getElementById('reviewForm').addEventListener('submit', e => {
        e.preventDefault();
        if (!rating) { showToast('Поставь оценку'); return; }
        const form = e.target;
        const name = form.name.value.trim();
        const text = form.text.value.trim();
        if (name.length < 2) { showToast('Имя слишком короткое'); return; }
        if (text.length < 10) { showToast('Отзыв слишком короткий'); return; }
        const date = new Date().toLocaleDateString('ru-RU');
        addReview(club.id, { name, rating, text, date });
        closeModal();
        showToast('Спасибо за отзыв!');
        setTimeout(() => location.reload(), 800);
    });
}

// ===== Страница преподавателя =====
function initTeacherPage() {
    const page = document.getElementById('teacherPage');
    if (!page) return;
    const params = new URLSearchParams(location.search);
    const name = params.get('name');
    if (!name) { page.innerHTML = '<div class="empty"><p>Преподаватель не найден</p></div>'; return; }
    const clubs = CLUBS.filter(c => c.teacher === name);
    if (!clubs.length) { page.innerHTML = '<div class="empty"><p>Преподаватель не найден</p></div>'; return; }
    const teacher = clubs[0];
    const totalStudents = clubs.reduce((s, c) => s + (12 - c.seats), 0);
    document.title = teacher.teacher + ' - Навигатор';
    page.innerHTML = `
        <div class="teacher-hero">
            <div class="teacher-hero-avatar">${escapeHTML(teacher.teacherInitial)}</div>
            <div class="teacher-hero-info">
                <span class="eyebrow"><i class="fa-solid fa-chalkboard-user"></i> Преподаватель</span>
                <h1>${escapeHTML(teacher.teacher)}</h1>
                <p>${escapeHTML(teacher.teacherRole)}</p>
                <div class="teacher-stats">
                    <div><b>${clubs.length}</b><span>${pluralize(clubs.length, ['кружок','кружка','кружков'])}</span></div>
                    <div><b>${totalStudents}</b><span>${pluralize(totalStudents, ['ученик','ученика','учеников'])}</span></div>
                </div>
            </div>
        </div>
        <section class="section" style="padding-top:0">
            <div class="section-head">
                <h2>Кружки преподавателя</h2>
                <p>Всё, что ведёт ${escapeHTML(teacher.teacher)}</p>
            </div>
            <div class="grid" id="teacherGrid"></div>
        </section>
    `;
    renderGrid(document.getElementById('teacherGrid'), clubs);
}

// ===== Игра "Угадай кружок" =====
function initGuessGame() {
    const panel = document.getElementById('gameGuess');
    if (!panel || panel.dataset.init) return;
    panel.dataset.init = '1';
    const imgEl = document.getElementById('guessImg');
    const optsEl = document.getElementById('guessOptions');
    const scoreEl = document.getElementById('guessScore');
    const roundEl = document.getElementById('guessRound');
    const resultEl = document.getElementById('guessResult');
    const resultIcon = document.getElementById('guessResultIcon');
    const resultTitle = document.getElementById('guessResultTitle');
    const resultText = document.getElementById('guessResultText');
    const nextBtn = document.getElementById('guessNext');
    const totalRounds = 8;
    let round = 0;
    let score = 0;
    let locked = false;
    function shuffle(a) { return [...a].sort(() => Math.random() - 0.5); }
    function newRound() {
        if (round >= totalRounds) {
            resultEl.hidden = false;
            resultIcon.innerHTML = '<i class="fa-solid fa-trophy"></i>';
            resultTitle.textContent = 'Игра окончена!';
            resultText.textContent = `Твой результат: ${score} из ${totalRounds}`;
            nextBtn.textContent = 'Играть снова';
            nextBtn.onclick = () => {
                round = 0; score = 0; scoreEl.textContent = 0;
                resultEl.hidden = true;
                nextBtn.textContent = 'Следующий раунд';
                nextBtn.onclick = newRound;
                newRound();
            };
            return;
        }
        locked = false;
        resultEl.hidden = true;
        roundEl.textContent = `${round + 1} / ${totalRounds}`;
        const correct = CLUBS[Math.floor(Math.random() * CLUBS.length)];
        const wrong = shuffle(CLUBS.filter(c => c.id !== correct.id)).slice(0, 3);
        const options = shuffle([correct, ...wrong]);
        imgEl.src = correct.img;
        optsEl.innerHTML = options.map(c => `<button class="guess-option" data-id="${c.id}">${escapeHTML(c.title)}</button>`).join('');
        optsEl.querySelectorAll('.guess-option').forEach(b => b.addEventListener('click', () => {
            if (locked) return;
            locked = true;
            const ok = +b.dataset.id === correct.id;
            optsEl.querySelectorAll('.guess-option').forEach(o => {
                o.disabled = true;
                if (+o.dataset.id === correct.id) o.classList.add('correct');
                else if (o === b) o.classList.add('wrong');
            });
            if (ok) { score++; scoreEl.textContent = score; }
            resultEl.hidden = false;
            resultIcon.innerHTML = ok ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-xmark"></i>';
            resultTitle.textContent = ok ? 'Верно!' : 'Не угадал';
            resultText.textContent = ok ? `Это действительно «${correct.title}»` : `Правильный ответ: «${correct.title}»`;
        }));
        round++;
    }
    nextBtn.onclick = newRound;
    newRound();
}

// ===== Игра "Найди пару" =====
function initMatchGame() {
    const board = document.getElementById('matchBoard');
    if (!board || board.dataset.init) return;
    board.dataset.init = '1';
    const movesEl = document.getElementById('matchMoves');
    const pairsEl = document.getElementById('matchPairs');
    const resultEl = document.getElementById('matchResult');
    const resultText = document.getElementById('matchResultText');
    const restart = document.getElementById('matchRestart');
    const pairsCount = 6;
    let first = null;
    let lock = false;
    let moves = 0;
    let matched = 0;
    function shuffle(a) { return [...a].sort(() => Math.random() - 0.5); }
    function start() {
        board.innerHTML = '';
        resultEl.hidden = true;
        first = null;
        lock = false;
        moves = 0;
        matched = 0;
        movesEl.textContent = 0;
        pairsEl.textContent = `0 / ${pairsCount}`;
        const picks = shuffle(CLUBS).slice(0, pairsCount);
        const deck = shuffle([...picks, ...picks]);
        deck.forEach(club => {
            const card = document.createElement('div');
            card.className = 'match-card';
            card.dataset.id = club.id;
            card.innerHTML = `
                <div class="match-card-inner">
                    <div class="match-card-front"><i class="fa-solid fa-question"></i></div>
                    <div class="match-card-back"><img src="${club.img}" alt="${escapeHTML(club.title)}"></div>
                </div>
            `;
            card.addEventListener('click', () => flip(card));
            board.appendChild(card);
        });
    }
    function flip(card) {
        if (lock || card.classList.contains('flipped') || card.classList.contains('matched')) return;
        card.classList.add('flipped');
        if (!first) { first = card; return; }
        moves++;
        movesEl.textContent = moves;
        if (first.dataset.id === card.dataset.id) {
            first.classList.add('matched');
            card.classList.add('matched');
            matched++;
            pairsEl.textContent = `${matched} / ${pairsCount}`;
            first = null;
            if (matched === pairsCount) {
                setTimeout(() => {
                    resultEl.hidden = false;
                    resultText.textContent = `Ты справился за ${moves} ходов!`;
                }, 400);
            }
        } else {
            lock = true;
            const a = first, b = card;
            first = null;
            setTimeout(() => {
                a.classList.remove('flipped');
                b.classList.remove('flipped');
                lock = false;
            }, 800);
        }
    }
    restart.onclick = start;
    start();
}

// ===== Страница игр =====
function initGamesPage() {
    const tabs = document.querySelectorAll('.game-tab');
    if (!tabs.length) return;
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));
            const target = tab.dataset.game === 'guess' ? document.getElementById('gameGuess') : document.getElementById('gameMatch');
            target.classList.add('active');
            if (tab.dataset.game === 'guess') initGuessGame();
            else initMatchGame();
        });
    });
    initGuessGame();
}

// Мобильное меню
function initBurger() {
    const b = document.getElementById('burger');
    const m = document.getElementById('mobileMenu');
    if (!b || !m) return;
    b.addEventListener('click', () => { b.classList.toggle('open'); m.classList.toggle('open'); });
    m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { b.classList.remove('open'); m.classList.remove('open'); }));
}

// Кнопка наверх
function initToTop() {
    const btn = document.getElementById('toTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) btn.classList.add('show');
        else btn.classList.remove('show');
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Общие кнопки
function initGlobalButtons() {
    document.getElementById('favBtn')?.addEventListener('click', openFavorites);
    document.getElementById('mobileFavBtn')?.addEventListener('click', () => {
        document.getElementById('burger')?.classList.remove('open');
        document.getElementById('mobileMenu')?.classList.remove('open');
        openFavorites();
    });
    document.getElementById('scheduleBtn')?.addEventListener('click', openSchedule);
    document.getElementById('mobileScheduleBtn')?.addEventListener('click', () => {
        document.getElementById('burger')?.classList.remove('open');
        document.getElementById('mobileMenu')?.classList.remove('open');
        openSchedule();
    });
}

// Квиз при первом заходе
function maybeShowStartupQuiz() {
    if (!document.getElementById('grid')) return;
    if (sessionStorage.getItem('quizShown')) return;
    sessionStorage.setItem('quizShown', '1');
    setTimeout(openQuiz, 900);
}

// Точка входа
document.addEventListener('DOMContentLoaded', () => {
    updateFavCounter();
    updateScheduleCounter();
    initBurger();
    initToTop();
    initGlobalButtons();
    initHomePage();
    initOnlinePage();
    initClubPage();
    initTeacherPage();
    initGamesPage();
    maybeShowStartupQuiz();
    bindFavButtons();
    bindCompareButtons();
});