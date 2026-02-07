const projectDatabase = {
    robotics: {
        title: "Роботизация производства",
        tasks: [
            "Автоматизация сварочных и покрасочных линий",
            "Внедрение роботов-манипуляторов для паллетирования",
            "Создание беспилотных складских систем (AGV/AMR)",
            "Интеграция систем управления парком роботов"
        ],
        economics: "Рост производительности на 45%. Сокращение операционных затрат на 30%. Окупаемость проекта — 14 месяцев.",
        partners: ["НПП Радиосвязь", "УВЗ", "ОмскТрансМаш"],
        images: [
            "data:image/jpeg;base64,...", // Фото 1
            "data:image/jpeg;base64,...", // Фото 2
            "data:image/jpeg;base64,...", // Фото 3
            "data:image/jpeg;base64,...", // Фото 4
            "data:image/jpeg;base64,...", // Фото 5
            "data:image/jpeg;base64,..."  // Фото 6
        ]
    },
    quality: {
        title: "Контроль качества продукции",
        tasks: [
            "Машинное зрение для поиска дефектов на конвейере",
            "ИИ-аналитика структуры материалов в реальном времени",
            "Автоматизированная гранулометрия",
            "Контроль геометрии изделий с точностью до микрона"
        ],
        economics: "Снижение уровня брака на 40%. Увеличение скорости контроля в 3 раза. Исключение штрафов от заказчиков.",
        partners: ["ГАЗ ГРУППА", "ШЕРЕМЕТЬЕВО", "ЕВРАЗ"],
        images: [
            "BASE64_QUALITY_1", "BASE64_QUALITY_2", "BASE64_QUALITY_3",
            "BASE64_QUALITY_4", "BASE64_QUALITY_5", "BASE64_QUALITY_6"
        ]
    },
    security: {
        title: "Инженерно-технические средства охраны",
        tasks: [
            "Интеллектуальное видеонаблюдение и аналитика периметра",
            "Биометрические системы контроля доступа (Liveness)",
            "Радиолокационные системы обнаружения дронов",
            "Тепловизионный контроль и автоматизация КПП"
        ],
        economics: "Сокращение штата физической охраны на 25%. Нулевой уровень несанкционированных проникновений.",
        partners: ["РОСНЕФТЬ", "МВД РОССИИ", "ФОРВАРД ЭНЕРГО"],
        images: [
            "BASE64_SEC_1", "BASE64_SEC_2", "BASE64_SEC_3",
            "BASE64_SEC_4", "BASE64_SEC_5", "BASE64_SEC_6"
        ]
    },
    eco: {
        title: "Экомониторинг и Промбезопасность",
        tasks: [
            "Автоматизированные системы контроля выбросов (АСКВ)",
            "Мониторинг загазованности и состояния воздуха",
            "Цифровой допуск на опасные работы",
            "Позиционирование персонала в шахтах и цехах"
        ],
        economics: "Исключение экологических штрафов. Снижение аварийности на 50%. Повышение культуры безопасности.",
        partners: ["НОРНИКЕЛЬ", "СУЭК", "СЕЛИГДАР"],
        images: [
            "BASE64_ECO_1", "BASE64_ECO_2", "BASE64_ECO_3",
            "BASE64_ECO_4", "BASE64_ECO_5", "BASE64_ECO_6"
        ]
    },
    equipment: {
        title: "Технологическое оборудование",
        tasks: [
            "Поставка котлов, турбин и насосных станций",
            "Модернизация систем водоочистки и вентиляции",
            "Импортозамещение узлов и агрегатов",
            "Энергоцентры под ключ"
        ],
        economics: "Снижение затрат на энергоресурсы на 20%. Увеличение межремонтного интервала оборудования на 35%.",
        partners: ["ЯЗДА", "ЯМЗ", "ХИАГДА"],
        images: [
            "BASE64_EQ_1", "BASE64_EQ_2", "BASE64_EQ_3", "BASE64_EQ_4",
            "BASE64_EQ_5", "BASE64_EQ_6", "BASE64_EQ_7", "BASE64_EQ_8"
        ]
    }
};

function openSlide(id) {
    const data = projectDatabase[id];
    const container = document.getElementById('dynamic-content');
    const overlay = document.getElementById('modal-overlay');

    container.innerHTML = `
        <div class="slide-main-layout animate__animated animate__fadeInUp">
            <div class="info-col">
                <h2>${data.title}</h2>
                <ul class="task-list">
                    ${data.tasks.map(t => `<li>${t}</li>`).join('')}
                </ul>
                <div class="effect-box">
                    <h5>Эффекты внедрения:</h5>
                    <p>${data.economics}</p>
                </div>
                <div style="margin-top:40px;">
                    <h5 style="opacity:0.5; margin-bottom:15px;">Опыт и партнеры:</h5>
                    <div>
                        ${data.partners.map(p => `<span style="background:#fff; color:#000; padding:6px 15px; border-radius:4px; font-weight:bold; margin-right:10px; font-size:0.8rem;">${p}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="visual-col">
                <div class="image-mosaic-grid">
                    ${data.images.map(img => `
                        <div class="mosaic-item">
                            <img src="${img}" alt="Проектное фото">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.body.style.overflow = 'auto';
}
