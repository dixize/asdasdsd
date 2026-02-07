const projectData = {
    robotics: {
        title: "Роботизация производства",
        pre: ["Тренд на импортозамещение", "Дефицит кадров", "Оптимизация затрат", "Субсидии до 50%"],
        effects: "Производительность: +40% | Затраты: -20% | Окупаемость: 14 мес",
        partners: ["НПП Радиосвязь", "УВЗ", "ОмскТрансМаш"],
        images: [
            "https://i.ibb.co/1GtNrqPj/image.png",
            "https://i.ibb.co/B2MPgVWY/image.png",
            "https://i.ibb.co/CpxHGsYY/image.png",
            "https://i.ibb.co/sJNFG9sK/image.png",
            "https://i.ibb.co/WNLtW5Bw/image.png",
            "https://i.ibb.co/k6HPbKs8/image.png"
        ]
    },
    quality: {
        title: "Контроль качества",
        pre: ["Развитие алгоритмов ИИ", "Оцифровка процессов дефектоскопии", "Снижение человеческого фактора"],
        effects: "Брак: -35% | Скорость контроля: x2 | Окупаемость: < 12 мес",
        partners: ["ГАЗ ГРУППА", "ШЕРЕМЕТЬЕВО", "УВЗ"],
        images: [
            "https://i.ibb.co/6dL0hc9/image.png",
            "https://i.ibb.co/TB3Mc4Vq/image.png",
            "https://i.ibb.co/3mDt1wkS/image.png",
            "https://i.ibb.co/N6QXGXmP/image.png",
            "https://i.ibb.co/0yrPsvGH/image.png",
            "https://i.ibb.co/ynQKsVBk/image.png"
        ]
    },
    security: {
        title: "Средства охраны (ИТСО)",
        pre: ["ФЗ-187 КИИ", "Антитеррористическая защищенность", "Автоматизация КПП и периметра"],
        effects: "Надежность: 99.9% | Реакция: < 5 сек | Затраты на охрану: -30%",
        partners: ["РОСНЕФТЬ", "МВД РОССИИ", "ФОРВАРД ЭНЕРГО"],
        images: [
            "https://i.ibb.co/XZ65YFQb/image.png",
            "https://i.ibb.co/C5fhRSjq/image.png",
            "https://i.ibb.co/Cpq6jKVX/image.png",
            "https://i.ibb.co/Xkkk5wb2/image.png",
            "https://i.ibb.co/7NTrr57q/image.png",
            "https://i.ibb.co/7tyWcmvg/image.png"
        ]
    },
    eco: {
        title: "Экомониторинг",
        pre: ["Программа «Безопасный труд»", "Автоматический контроль выбросов", "ESG-стандарты и экология"],
        effects: "Аварийность: -50% | Штрафы: -100% | Сбор данных: 24/7",
        partners: ["НОРНИКЕЛЬ", "СУЭК", "ЕВРАЗ", "СЕЛИГДАР"],
        images: [
            "https://i.ibb.co/KpVNHXKx/image.png",
            "https://i.ibb.co/JwSJ3vfK/image.png",
            "https://i.ibb.co/pv40LC1H/image.png",
            "https://i.ibb.co/fdZGCyYj/image.png",
            "https://i.ibb.co/fY50zwwW/image.png",
            "https://i.ibb.co/yFmPpXhx/image.png"
        ]
    },
    equipment: {
        title: "Технологическое оборудование",
        pre: ["Импортозамещение агрегатов", "Модернизация котельных", "Локализация сервиса"],
        effects: "КПД: +25% | Выпуск продукции: +20% | Срок службы: +15 лет",
        partners: ["ЯЗДА", "ЯМЗ", "ХИАГДА"],
        images: [
            "https://i.ibb.co/hR5NBkZq/image.png",
            "https://i.ibb.co/4RwQwpqb/image.png",
            "https://i.ibb.co/vCsDZh6Q/image.png",
            "https://i.ibb.co/1fCPdsNB/image.png",
            "https://i.ibb.co/fVX0HMtx/image.png",
            "https://i.ibb.co/tp125yc0/image.png",
            "https://i.ibb.co/3YLP8644/image.png",
            "https://i.ibb.co/Z6V4LW6X/image.png"
        ]
    }
};

function openSlide(id) {
    const item = projectData[id];
    const content = document.getElementById('modal-content');
    
    const imagesHtml = item.images.map(img => `
        <div class="m-img">
            <img src="${img}" alt="Кейс" loading="lazy">
        </div>
    `).join('');

    content.innerHTML = `
        <div class="slide-grid animate__animated animate__fadeInUp">
            <div class="info-col">
                <h2 style="color:#ff4f12; font-size:3.5rem; margin:0; line-height:0.9;">${item.title}</h2>
                <div style="margin: 30px 0;">
                    <h4 style="text-transform:uppercase; color:#aaa; margin-bottom:15px; font-size: 0.8rem; letter-spacing: 1px;">Предпосылки задачи:</h4>
                    <ul style="list-style:none; padding:0;">
                        ${item.pre.map(p => `<li style="margin-bottom:10px; border-left:2px solid #ff4f12; padding-left:15px; color: #ccc;">${p}</li>`).join('')}
                    </ul>
                </div>
                <div style="background:#001a4d; padding:25px; border-radius:15px; margin-bottom:30px; border: 1px solid rgba(255,255,255,0.05);">
                    <h4 style="margin:0 0 10px 0; color:#ff4f12; font-size: 0.8rem;">ЭКОНОМИЧЕСКИЙ ЭФФЕКТ:</h4>
                    <p style="margin:0; font-size:1.1rem; font-weight: 500;">${item.effects}</p>
                </div>
                <div>
                    <h4 style="text-transform:uppercase; color:#aaa; margin-bottom:15px; font-size: 0.8rem;">Опыт внедрения:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        ${item.partners.map(p => `<span style="background:#fff; color:#000; padding:5px 12px; border-radius:4px; font-weight:bold; font-size:0.75rem;">${p}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="visual-col">
                <h4 style="text-transform:uppercase; color:#aaa; margin-bottom:15px; font-size: 0.8rem;">Реализованные проекты:</h4>
                <div class="mosaic">
                    ${imagesHtml}
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal').classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal').classList.remove('visible');
    document.body.style.overflow = 'auto';
}
